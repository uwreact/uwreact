import React, { Component } from 'react';

import styles from './Apply.scss';

class Apply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verified: false,
    };
  }

  render() {
    const { verified } = this.state;

    return (
      <div className={styles.apply}>
        <div className={styles.pipe}>{`${verified}`}</div>
      </div>
    );
  }
}

export default Apply;
