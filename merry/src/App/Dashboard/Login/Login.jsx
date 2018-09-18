import React, { PureComponent } from 'react';

import styles from './Login.scss';

/**
 * TODO:

 https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize
 ?client_id=350d760d-cf3a-4aa5-b663-71ad2946ea67
 &response_type=id_token+token
 &redirect_uri=https://uwreact.ca/dashboard
 &scope=openid
 &response_mode=fragment
 &state=12345
 &nonce=678910
 &prompt=consent

 */

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
