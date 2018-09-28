import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { BlankButton } from 'components';

import horizontalLogo from 'resources/svg/logos/react-horizontal.svg';
import verticalLogo from 'resources/svg/logos/react-vertical.svg';

import styles from './Home.scss';

const bigSmall = classNames(styles.fullScreen, styles.bigSmall);

const bigYellow = classNames(styles.big, styles.yellow);
const smallWhite = classNames(styles.small, styles.white);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history } = this.props;

    return (
      <div className={styles.home}>
        <div className={bigSmall}>
          <div className={classNames(bigYellow, styles.heroText)}>
            WE BUILD FULLY AUTONOMOUS FIRST ROBOTS.
            <BlankButton className={styles.interested} onClick={() => history.push('/apply')}>
              INTERESTED? APPLY NOW!
            </BlankButton>
          </div>
          <div className={classNames(smallWhite, styles.heroLogo)}>
            <img src={horizontalLogo} alt="Logo" className={styles.horizontalLogo} />
            <img src={verticalLogo} alt="Logo" className={styles.verticalLogo} />
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
