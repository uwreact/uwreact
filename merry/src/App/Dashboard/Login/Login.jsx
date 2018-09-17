import React, { PureComponent } from 'react';

import styles from './Login.scss';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      signUp: false,
    };
  }

  render() {
    const { signUp } = this.state;
    console.log(signUp);

    return (
      <div className={styles.login}>
        <div className={styles.card}>Login Card</div>
      </div>
    );
  }
}

export default Login;
