import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

import { TextButton, Select, Step } from 'components';
import { majors } from 'dictionaries';
import { Firebase } from 'modules';
import { login } from 'state';
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
    login.connect(this);
  }

  componentDidMount() {
    const { location } = this.props;

    const query = qs.parse(trimQuery(location.hash));

    console.log(query);
  }

  render() {
    const { loaded, user, details, sentVerificationEmail } = this.state;
    const { match, history } = this.props;

    const emailVerified = user && user.emailVerified;

    const studentVerifiedOrNotStudent =
      details && 'student' in details && (!details.student || details.studentVerified);

    return (
      <div className={styles.apply}>
        <div className={styles.paper}>
          <div className={styles.content}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <div className={styles.prompt}>
              Thank you for your interest in joining our team! Please fill out the application form
              below before 9:00am on October 1st, 2018.
            </div>
            <Step unlocked={loaded} completed={!!user} name="Account Creation">
              <div className={styles.step}>
                {user ? `You're logged in as ${user.email}. Not you? ` : 'To begin, '}
                <TextButton
                  onClick={
                    user
                      ? async () => {
                          const firebase = await Firebase.import();
                          await firebase.auth().signOut();
                          history.push(`/login?redirect=${match.url}`);
                        }
                      : () => history.push(`/login?redirect=${match.url}&signUp=true`)
                  }
                >
                  {user ? 'Log in with your account' : 'please create a UW REACT account'}
                </TextButton>
                {!user && ', '}
                {!user && (
                  <TextButton onClick={() => history.push(`/login?redirect=${match.url}`)}>
                    or log in if you already have one
                  </TextButton>
                )}
                .
              </div>
            </Step>
            <Step unlocked={!!user} completed={emailVerified} name="Verify Email">
              <div className={styles.step}>
                {emailVerified ? 'Your email is verified' : 'Your email is unverified. '}
                {!emailVerified &&
                  (sentVerificationEmail ? (
                    'Verification email sent!'
                  ) : (
                    <TextButton
                      onClick={async () => {
                        await user.sendEmailVerification({ url: window.location.href });
                        this.setState({ sentVerificationEmail: true });
                      }}
                    >
                      Send verification email
                    </TextButton>
                  ))}
                .
              </div>
            </Step>
            <Step
              unlocked={emailVerified}
              completed={studentVerifiedOrNotStudent}
              name="Student Status"
            >
              <div className={styles.step}>
                <div>Are you a student at the University of Waterloo?</div>
                <TextButton
                  onClick={async () => {
                    const firebase = await Firebase.import();
                    const adfsGenerateUrl = firebase.functions().httpsCallable('adfsGenerateUrl');
                    const res = await adfsGenerateUrl({ redirect: trimUrl(window.location.href) });

                    window.location.href = res.data.url;
                  }}
                >
                  Please verify your student status by logging in with your WatIAM ID.
                </TextButton>
              </div>
            </Step>
            <Step name="Profile Information">
              <Select
                placeholder="Search majors"
                options={majors}
                selected={36}
                onSelect={index => console.log(index)}
              />
            </Step>
            <Step name="Acknowledgements">Step</Step>
            <Step name="FIRST Robotics Competition">Step</Step>
            <Step name="UW REACT">Step</Step>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas arcu in
            aliquam lobortis. Etiam a risus pretium, pharetra nunc ut, iaculis mi. Phasellus nec
            odio et dolor aliquam maximus. Aenean feugiat a lacus eget efficitur. Sed cursus
            convallis lacus, lacinia rhoncus ante aliquam non. Cras a urna et ante lacinia aliquet
            et eget ipsum. Mauris vel ex risus. Aliquam convallis urna vel nisi tempor lobortis. Nam
            elit turpis, laoreet et varius in, semper eget mauris. Sed vel egestas odio. Sed vitae
            tincidunt leo, ac interdum lorem. Sed tempus enim nec mi semper tincidunt. Morbi sed
            eros imperdiet est bibendum euismod. Nulla eleifend lorem sit amet nisi ultricies
            pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Vestibulum eu tortor a nulla mattis sagittis vitae vel magna. Vestibulum
            tempus hendrerit arcu, in porta ante lobortis non. Quisque luctus tempus facilisis. Sed
            a urna sed tortor venenatis rhoncus. Pellentesque porta volutpat sem, sed vestibulum
            dolor efficitur eget. Quisque non ultrices mauris, et venenatis orci. Aliquam iaculis,
            risus varius scelerisque malesuada, arcu mi maximus libero, eget aliquam metus dui eu
            mi. Integer ac laoreet est. Donec mattis at turpis ac vulputate. Ut vel odio tempus,
            porta nunc ut, laoreet sem. Mauris sollicitudin odio at massa fermentum viverra. Cras
            ornare blandit sem, non vehicula tortor dignissim non. Donec ut fermentum lacus, eget
            mattis lacus. Donec tincidunt tincidunt tortor eget suscipit. Phasellus tempor ipsum
            velit, ac cursus lacus facilisis a. Vivamus et facilisis nisi. Vivamus at condimentum
            arcu. Integer consectetur dolor diam, at congue neque pretium vitae. Suspendisse
            vulputate fringilla eleifend. Nunc risus urna, egestas suscipit pharetra in, vehicula id
            nunc. Integer eleifend maximus elit at sollicitudin. Nullam ullamcorper accumsan
            pellentesque. Phasellus sollicitudin rhoncus turpis in congue. Etiam tristique nibh eu
            orci gravida, quis ultrices lorem pharetra. Aenean placerat tortor in aliquam ultrices.
            Morbi vulputate mi non fermentum eleifend. Integer vel elit sit amet felis molestie
            placerat et eu arcu. Praesent fringilla mattis diam, non semper diam sodales et. Nunc at
            fermentum dolor. Maecenas vitae molestie leo. Proin eros quam, suscipit id urna a,
            accumsan elementum sem. Nunc hendrerit mattis nulla, nec suscipit ipsum posuere vel.
            Phasellus posuere malesuada mi, a porttitor orci dictum ut. Mauris tincidunt velit sed
            convallis feugiat. Duis sollicitudin velit dolor. Duis cursus quis urna ac consequat.
            Quisque rhoncus volutpat sem non ornare. Nam suscipit nunc sit amet metus dignissim,
            pharetra vehicula nulla facilisis. Phasellus quis gravida purus. Morbi dapibus egestas
            augue, quis vehicula ex condimentum ac. Sed tristique vitae velit vel sodales. Integer
            arcu justo, consectetur id lorem et, semper gravida leo. Quisque aliquet in mi sit amet
            malesuada. Morbi imperdiet, dolor eu efficitur volutpat, mi diam hendrerit mi, commodo
            dictum augue purus id lectus. Cras a nulla urna. Cras laoreet tempor varius. Duis
            laoreet consequat gravida. Sed varius dignissim lectus eu vestibulum. Duis semper nisl
            nibh, eget iaculis neque suscipit vitae. Praesent vitae quam porta, consectetur lectus
            gravida, viverra neque. Duis commodo fermentum volutpat. Vestibulum sit amet
            sollicitudin quam, in consequat neque. Morbi fringilla fringilla tortor eu finibus.
            Fusce dictum neque purus, a semper dui convallis at. Morbi molestie eu nibh quis
            feugiat. Donec nunc diam, molestie ac consequat et, malesuada a urna. Cras fermentum
            risus in dui consectetur tempor. Vestibulum eget orci in velit vestibulum malesuada.
            Fusce vel sapien neque. Donec dui massa, maximus at commodo et, euismod sed tortor. Cras
            feugiat tempor leo in tincidunt. Vestibulum ac tortor vel diam viverra vestibulum.
            Maecenas ex arcu, condimentum ut lorem non, ultrices ultricies est. Praesent lacinia
            rhoncus purus non posuere. Fusce malesuada rhoncus nunc. Morbi a quam ex. Ut metus nibh,
            consectetur hendrerit urna non, vulputate consectetur tortor. Donec a gravida erat.
            Donec posuere ligula ac odio tristique laoreet. Integer egestas, enim nec cursus
            pellentesque, lacus arcu lacinia odio, eu maximus leo nisl nec nisl. Sed scelerisque
            tellus vitae enim iaculis blandit. In vel eleifend libero. Duis sollicitudin finibus
            interdum. Maecenas tempor facilisis pulvinar. Aenean lobortis mollis lacus, ut pharetra
            lectus malesuada quis. Proin ut elit interdum, fermentum diam quis, vulputate leo.
            Pellentesque malesuada dolor eget ante ornare consectetur. Integer vel mi est. Integer
            tristique turpis vel consectetur ultrices. Aenean lacinia, leo a pellentesque mollis, mi
            erat lobortis libero, sit amet placerat ante velit id risus. Quisque ac finibus magna.
            Etiam auctor elit velit, at feugiat risus suscipit vulputate. Aliquam eu quam eu est
            vehicula blandit in a dolor. Cras at mi dui. Integer sollicitudin sem magna, tempor
            facilisis erat varius et. Donec varius varius interdum. Nam ornare elit quis convallis
            tincidunt. Nunc interdum pharetra gravida. Vivamus eu hendrerit nisl. Suspendisse vel
            mollis ante, a fermentum lectus. Vestibulum quam libero, fringilla eu pulvinar id,
            laoreet sed tortor. Duis in magna purus. Aenean tincidunt justo et iaculis maximus. Cras
            rhoncus neque vel justo posuere, in pharetra metus malesuada. Nulla vel laoreet felis,
            dignissim aliquam urna. Nunc efficitur at quam vitae lacinia. Aliquam tincidunt sodales
            massa. Aliquam vel leo a metus vulputate porta. Proin maximus tristique mattis. Praesent
            enim ipsum, finibus sed magna nec, gravida vestibulum lacus. Suspendisse pharetra ante
            et urna vulputate, non dictum felis consectetur. Maecenas laoreet purus ut fermentum
            feugiat. Proin aliquam laoreet vulputate. Sed congue ligula nunc, a blandit justo
            vehicula eu. Nulla varius scelerisque tortor, nec tincidunt justo scelerisque id. Nam ac
            lectus sit amet purus vestibulum aliquam. Pellentesque rutrum fringilla tortor, sagittis
            facilisis elit feugiat vitae. Quisque a dui ex.
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
