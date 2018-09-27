import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

import { TextButton, Step } from 'components';
import { Firebase } from 'modules';
import { loading, user } from 'state';
import { trimQuery, trimUrl } from 'utilities';

import logo from 'resources/svg/logos/react-horizontal.svg';

import styles from './Apply.scss';

/**
 * 3. Profile Information (auto-filled with validation info)
 *  3a. First Name
 *  3b. Last Name
 *  3c. University Email
 *  3d. Program
 *  3f. Graduation Year
 * 4. Acknowledgements
 * 5. FIRST Robotics Competition
 *  5a. Participated in FRC
 *  5b. Team Number
 *  5c. Role
 * 6. UW REACT
 *  6a. Primary Role
 *  6b. Optional secondary role
 */

class Apply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sentVerificationEmail: false,
    };
    user.connect(this);
  }

  componentDidMount() {
    const { location } = this.props;

    const query = qs.parse(trimQuery(location.hash));

    if (query.access_token && query.id_token && query.state) {
      this.verifyStudentStatus(query);
    }
  }

  sendEmailVerification = async () => {
    const { auth } = this.state;

    await loading.setState({ message: 'Sending email verification' });

    try {
      await auth.sendEmailVerification({ url: window.location.href });
    } finally {
      await loading.setState({ message: '' });
    }

    this.setState({ sentVerificationEmail: true });
  };

  openStudentVerification = async () => {
    const firebase = await Firebase.import();
    const adfsGenerateUrl = firebase.functions().httpsCallable('adfsGenerateUrl');
    await loading.setState({ message: 'Generating verification link' });

    try {
      const res = await adfsGenerateUrl({ redirect: trimUrl(window.location.href) });
      window.location.href = res.data.url;
    } catch {
      await loading.setState({ message: '' });
    }
  };

  verifyStudentStatus = async query => {
    const firebase = await Firebase.import();
    const adfsParseTokens = firebase.functions().httpsCallable('adfsParseTokens');
    await loading.setState({ message: 'Verifying student status' });

    try {
      const res = await adfsParseTokens(query);
      console.log(res);
    } finally {
      await loading.setState({ message: '' });
    }
  };

  updateFirebase = field => async value => {
    const { auth } = this.state;
    const firebase = await Firebase.import();
    const update = {};
    update[field] = value;

    await firebase
      .firestore()
      .collection('users')
      .doc(auth.uid)
      .update(update);
  };

  render() {
    const { loaded, auth, details, sentVerificationEmail } = this.state;
    const { match, history } = this.props;

    const emailVerified = auth && auth.emailVerified;

    const studentVerifiedOrNotStudent =
      details && 'student' in details && (!details.student || details.verification);

    return (
      <div className={styles.apply}>
        <div className={styles.paper}>
          <div className={styles.content}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <div className={styles.prompt}>
              Thank you for your interest in joining our team! Please fill out the application form
              below before 9:00am on October 1st, 2018.
            </div>
            <Step unlocked={loaded} completed={!!auth} name="Account Creation">
              <div className={styles.step}>
                {auth ? `You're logged in as ${auth.email}. Not you? ` : 'To begin, '}
                <TextButton
                  onClick={
                    auth
                      ? async () => {
                          const firebase = await Firebase.import();
                          await firebase.auth().signOut();
                          history.push(`/login?redirect=${match.url}`);
                        }
                      : () => history.push(`/login?redirect=${match.url}&signUp=true`)
                  }
                >
                  {auth ? 'Log in with your account' : 'please create a UW REACT account'}
                </TextButton>
                {!auth && ', '}
                {!auth && (
                  <TextButton onClick={() => history.push(`/login?redirect=${match.url}`)}>
                    or log in if you already have one
                  </TextButton>
                )}
                .
              </div>
            </Step>
            <Step unlocked={!!auth} completed={emailVerified} name="Verify Email">
              <div className={styles.step}>
                {emailVerified ? 'Your email is verified.' : 'Your email is unverified. '}
                {!emailVerified &&
                  (sentVerificationEmail ? (
                    'Verification email sent!'
                  ) : (
                    <TextButton onClick={this.sendEmailVerification}>
                      Send verification email.
                    </TextButton>
                  ))}
              </div>
            </Step>
            <Step
              unlocked={emailVerified}
              completed={studentVerifiedOrNotStudent}
              name="Student Status"
            >
              <div className={styles.step}>
                {details &&
                  (!studentVerifiedOrNotStudent ? (
                    <React.Fragment>
                      <TextButton onClick={this.openStudentVerification}>
                        Please verify your student status
                      </TextButton>
                      {', or '}
                      <TextButton onClick={() => this.updateFirebase('student')(false)}>
                        {"click here if you're not a student."}
                      </TextButton>
                    </React.Fragment>
                  ) : (
                    'Your student status is verified.'
                  ))}
              </div>
            </Step>
            <Step name="Profile Information" unlocked={studentVerifiedOrNotStudent}>
              <div className={styles.step}>Step</div>
            </Step>
            <Step name="Acknowledgements">Step</Step>
            <Step name="FIRST Robotics Competition">Step</Step>
            <Step name="UW REACT">Step</Step>
          </div>
        </div>
      </div>
    );
  }
}

Apply.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Apply);
