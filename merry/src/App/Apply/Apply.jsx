import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { TextArea } from 'components';

import styles from './Apply.scss';

/**
 * 1. Sign up / Log in
 * 2. Validate / Skip
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

class Apply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verified: false,
    };
  }

  render() {
    const { verified } = this.state;

    console.log(verified);

    return (
      <div className={styles.apply}>
        <div className={styles.pipe}>
          Thank you for your interest in applying to UW REACT!
          <TextArea value="" onChange={() => ''} form="login" placeholder="Herro" />
        </div>
      </div>
    );
  }
}

export default withRouter(Apply);
