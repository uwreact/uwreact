import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

import { Field, Input, Select, Step, TextButton } from 'components';
import { majors } from 'dictionaries';
import { Firebase } from 'modules';
import { loading, user } from 'state';
import { trimQuery, trimUrl } from 'utilities';

import logo from 'resources/svg/logos/react-horizontal.svg';

import styles from './Apply.scss';

/**
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
    user.connect(
      this,
      ['loaded', 'auth', 'details'],
    );
  }

  componentDidMount() {
    const { location } = this.props;

    const query = qs.parse(trimQuery(location.hash));

    if (query.access_token && query.id_token && query.state) {
      this.verifyStudentStatus(query);
    }
  }

  updateDetails = details => {
    this.setState(state => ({ details: { ...state.details, ...details } }));
  };

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
      await adfsParseTokens(query);
    } finally {
      await loading.setState({ message: '' });
    }
  };

  consentToMediaRelease = async () => {
    const firebase = await Firebase.import();
    const mediaReleaseConsent = firebase.functions().httpsCallable('mediaReleaseConsent');
    await loading.setState({ message: 'Signing media release' });

    try {
      await mediaReleaseConsent();
    } finally {
      await loading.setState({ message: '' });
    }
  };

  render() {
    const { loaded, auth, details, sentVerificationEmail } = this.state;
    const { match, history } = this.props;

    const emailVerified = !!(auth && auth.emailVerified);

    const studentVerifiedOrNotStudent = !!(
      details &&
      'student' in details &&
      (!details.student || details.verification)
    );

    const profileComplete = !!(
      details &&
      details.firstName &&
      details.lastName &&
      (details.student
        ? details.schoolEmail && details.major !== undefined && details.graduationYear !== undefined
        : true)
    );

    const acknowledgedRelease = !!(
      details &&
      'mediaRelease' in details &&
      (!details.mediaRelease || details.mediaReleaseConsent)
    );

    return (
      <div className={styles.apply}>
        <div className={styles.paper}>
          <div className={styles.content}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <div className={styles.prompt}>
              Thank you for your interest in joining our team! Please fill out the application form
              below before 9:00am on October 1st, 2018.
            </div>
            <Step name="Account Creation" unlocked={loaded} completed={!!auth}>
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
            <Step name="Verify Email" unlocked={!!auth} completed={emailVerified}>
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
              name="Student Status"
              unlocked={emailVerified}
              completed={studentVerifiedOrNotStudent}
            >
              <div className={styles.step}>
                {details &&
                  (!studentVerifiedOrNotStudent ? (
                    <React.Fragment>
                      <TextButton onClick={this.openStudentVerification}>
                        Please verify your student status
                      </TextButton>
                      {', or '}
                      <TextButton onClick={() => this.updateDetails({ student: false })}>
                        {"click here if you're not a student."}
                      </TextButton>
                    </React.Fragment>
                  ) : (
                    <span>
                      {details.student ? (
                        'Your student status is verified.'
                      ) : (
                        <React.Fragment>
                          {"You're not a student. "}
                          <TextButton onClick={() => this.updateDetails({ student: true })}>
                            Was that an accident?
                          </TextButton>
                        </React.Fragment>
                      )}
                    </span>
                  ))}
              </div>
            </Step>
            <Step
              name="Profile Information"
              unlocked={studentVerifiedOrNotStudent}
              completed={profileComplete}
            >
              <div className={styles.step}>
                {details && (
                  <React.Fragment>
                    <Field label="First Name">
                      <Input
                        value={details.firstName}
                        onChange={firstName => this.updateDetails({ firstName })}
                        placeholder="Enter your first name"
                        maxLength={100}
                      />
                    </Field>
                    <Field label="Last Name">
                      <Input
                        value={details.lastName}
                        onChange={lastName => this.updateDetails({ lastName })}
                        placeholder="Enter your last name"
                        maxLength={100}
                      />
                    </Field>
                    {details.student && (
                      <React.Fragment>
                        <Field label="School Email">
                          <Input
                            value={details.schoolEmail}
                            onChange={schoolEmail => this.updateDetails({ schoolEmail })}
                            placeholder="Enter your school email"
                            type="email"
                            maxLength={100}
                          />
                        </Field>
                        <Field label="Major">
                          <Select
                            options={majors}
                            selected={details.major}
                            onChange={major => this.updateDetails({ major })}
                            placeholder="Search for your major"
                          />
                        </Field>
                        <Field label="Graduation Year">
                          <Select
                            options={['2019', '2020', '2021', '2022', '2023']}
                            selected={details.graduationYear}
                            onChange={graduationYear => this.updateDetails({ graduationYear })}
                            placeholder="Enter your graduation year"
                          />
                        </Field>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                )}
              </div>
            </Step>
            <Step name="Media Release" unlocked={profileComplete} completed={acknowledgedRelease}>
              <div className={styles.step}>
                {details &&
                  (!acknowledgedRelease ? (
                    <React.Fragment>
                      <div className={styles.consent}>
                        I give permission to the University of Waterloo Robotics Engineering and
                        Autonomous Controls Student Design Team (hereinafter UW REACT), and any
                        parties designated by UW REACT to photograph and/or record me during any
                        activity organized by UW REACT. I further consent to the use of the produced
                        photograph(s), audio recording(s), and/or video(s) in all forms of media,
                        for any and all purposes. I understand and agree that I will not receive any
                        payment or royalty for the publication of the photograph(s), audio
                        recording(s), and/or video(s) or the use of my name and I hereby release UW
                        REACT and any parties designated by UW REACT from any such claims. I certify
                        that I have read and fully understand this consent and release.
                      </div>
                      <TextButton onClick={this.consentToMediaRelease}>I consent</TextButton>
                      {', or, '}
                      <TextButton onClick={() => this.updateDetails({ mediaRelease: false })}>
                        I do not consent.
                      </TextButton>
                    </React.Fragment>
                  ) : (
                    <span>
                      {details.mediaRelease ? (
                        "You've consented to the media release."
                      ) : (
                        <React.Fragment>
                          {"You've not consented to the media release. "}
                          <TextButton onClick={() => this.updateDetails({ mediaRelease: true })}>
                            Was that an accident?
                          </TextButton>
                        </React.Fragment>
                      )}
                    </span>
                  ))}
              </div>
            </Step>
            <Step name="FIRST Robotics Competition" unlocked={acknowledgedRelease}>
              Step
            </Step>
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
