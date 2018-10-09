import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import qs from 'qs';

import { Field, Input, Select, Step, TextArea, TextButton } from 'components';
import { majors, teams, years } from 'dictionaries';
import { Firebase } from 'modules';
import { loading, user } from 'state';
import { trimQuery, trimUrl } from 'utilities';

import logo from 'resources/svg/logos/react-horizontal.svg';

import styles from './Apply.scss';

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

    const studentVerifiedOrNotStudent =
      details &&
      'student' in details &&
      (!details.student || details.verification) &&
      emailVerified;

    const profileComplete =
      details &&
      details.name &&
      (details.student
        ? details.schoolEmail && details.major !== undefined && details.graduationYear !== undefined
        : true) &&
      studentVerifiedOrNotStudent;

    const acknowledgedRelease =
      details &&
      'mediaRelease' in details &&
      (!details.mediaRelease || details.consent) &&
      profileComplete;

    const firstExperienceOrNotAlum =
      details &&
      'firstAlum' in details &&
      (details.firstAlum ? details.firstTeam && details.firstRole : true) &&
      acknowledgedRelease;

    const selectedTeams = details && details.primaryTeam !== undefined && firstExperienceOrNotAlum;

    const answeredQuestions =
      details &&
      details.projectQuestion &&
      details.projectQuestion.length >= 200 &&
      details.teachUsQuestion &&
      details.teachUsQuestion.length >= 200 &&
      selectedTeams;

    return (
      <div className={styles.apply}>
        <div className={styles.paper}>
          <div className={styles.content}>
            <Link to="/">
              <img src={logo} alt="Logo" className={styles.logo} />
            </Link>
            <div className={styles.prompt}>
              Thank you for your interest in joining our team! We are always recruiting; please fill
              out the form below until all sections are green. We will process your application as
              soon as possible and notify you via email.
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
                        {"click here if you're not a student"}.
                      </TextButton>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
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
                    </React.Fragment>
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
                    <Field label="Name">
                      <Input
                        value={details.name}
                        onChange={name => this.updateDetails({ name })}
                        placeholder="Enter your full name"
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
                            options={years}
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
                    <React.Fragment>
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
                    </React.Fragment>
                  ))}
              </div>
            </Step>
            <Step
              name="FIRST Robotics Competition"
              unlocked={acknowledgedRelease}
              completed={firstExperienceOrNotAlum}
            >
              <div className={styles.step}>
                {details &&
                  (!('firstAlum' in details) ? (
                    <React.Fragment>
                      Have you participated in the FIRST Robotics Competition?{' '}
                      <TextButton onClick={() => this.updateDetails({ firstAlum: true })}>
                        Let us know about your experience
                      </TextButton>
                      {', or '}
                      <TextButton onClick={() => this.updateDetails({ firstAlum: false })}>
                        {"click here if you didn't participate"}.
                      </TextButton>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {details.firstAlum ? (
                        <React.Fragment>
                          <div className={styles.consent}>
                            {'You did participate in FIRST. '}
                            <TextButton onClick={() => this.updateDetails({ firstAlum: false })}>
                              Was that an accident?
                            </TextButton>
                          </div>
                          <Field label="Team Number">
                            <Input
                              value={details.firstTeam}
                              onChange={firstTeam => this.updateDetails({ firstTeam })}
                              maxLength={100}
                              placeholder="Enter your team number"
                              type="number"
                            />
                          </Field>
                          <Field label="Role">
                            <Input
                              value={details.firstRole}
                              onChange={firstRole => this.updateDetails({ firstRole })}
                              maxLength={100}
                              placeholder="Enter your role(s)"
                            />
                          </Field>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          {'You did not participate in FIRST. '}
                          <TextButton onClick={() => this.updateDetails({ firstAlum: true })}>
                            Was that an accident?
                          </TextButton>
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  ))}
              </div>
            </Step>
            <Step
              name="Team Selection"
              unlocked={firstExperienceOrNotAlum}
              completed={selectedTeams}
            >
              <div className={styles.step}>
                We have 8 different sub-teams on UW REACT, organized under 3 main teams. Please
                select one that you would like to focus on, regardless of your experience in the
                area. You can also select a secondary team, however, we recommend you do not select
                two teams under the Software and Mechanical umbrellas.
                <ul>
                  <li>
                    <b>Software</b>
                  </li>
                  <ul>
                    <li>
                      <b>Perception</b>
                    </li>
                    Help our robots understand their environment by sensing their surrounding and
                    locating themselves on the field.
                    <li>
                      <b>Planning</b>
                    </li>
                    Help our robots make decisions based on what they perceive by creating a
                    strategy and reacting to interference.
                    <li>
                      <b>Controls</b>
                    </li>
                    Help our robots execute their chosen strategy by navigating across the field and
                    manipulating the game elements.
                  </ul>
                  <li>
                    <b>Mechanical</b>
                  </li>
                  <ul>
                    <li>
                      <b>Design</b>
                    </li>
                    Design mechanisms, iterate upon prototypes, and improve our robots using
                    Computer Aided Design tools.
                    <li>
                      <b>Manufacturing</b>
                    </li>
                    Construct prototypes, manufacture parts, and assemble our robots using
                    industrial materials.
                  </ul>
                  <li>
                    <b>Business</b>
                  </li>
                  <ul>
                    <li>
                      <b>Logistics</b>
                    </li>
                    Approach sponsors and ensure all teams have the resources they need to function
                    efficiently.
                    <li>
                      <b>Outreach</b>
                    </li>
                    Recruit new team members and host events to give back to the community.
                  </ul>
                </ul>
                {details && (
                  <React.Fragment>
                    <Field label="Primary Team">
                      <Select
                        options={teams}
                        selected={details.primaryTeam}
                        onChange={primaryTeam => this.updateDetails({ primaryTeam })}
                        placeholder="Search for a primary team."
                      />
                    </Field>
                    <Field label="Secondary Team (optional)">
                      <Select
                        options={teams}
                        selected={details.secondaryTeam}
                        onChange={secondaryTeam => this.updateDetails({ secondaryTeam })}
                        placeholder="Search for a secondary team (optional)."
                      />
                    </Field>
                  </React.Fragment>
                )}
              </div>
            </Step>
            <Step
              name="Short Answer Questions"
              unlocked={selectedTeams}
              completed={answeredQuestions}
            >
              <div className={styles.step}>
                {details && (
                  <React.Fragment>
                    <Field
                      label={`Tell us about something you've worked on in the past 6 months. It doesn't have to be technical! What were you working on? Why were you working on it? How did it end up? (${
                        (details.projectQuestion || '').length
                      } / 200 minimum, 2000 maximum)`}
                    >
                      <TextArea
                        value={details.projectQuestion}
                        onChange={projectQuestion => this.updateDetails({ projectQuestion })}
                        maxLength={2000}
                        rows={5}
                        placeholder="For the past few months, I've been working on..."
                      />
                    </Field>
                    <Field
                      label={`Teach us something new. It can be anything! (${
                        (details.teachUsQuestion || '').length
                      } / 200 minimum, 2000 maximum)`}
                    >
                      <TextArea
                        value={details.teachUsQuestion}
                        onChange={teachUsQuestion => this.updateDetails({ teachUsQuestion })}
                        maxLength={2000}
                        rows={5}
                        placeholder="Go grab a standard deck of playing cards, I'm teaching you a magic trick..."
                      />
                    </Field>
                  </React.Fragment>
                )}
              </div>
            </Step>
            {answeredQuestions &&
              details && (
                <div className={styles.prompt}>Thank you for applying, {details.name}!</div>
              )}
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
