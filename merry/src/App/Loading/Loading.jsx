import React from 'react';

import { FullScreenModal, Spinner } from 'components';
import { loading } from 'state';

import styles from './Loading.scss';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    loading.connect(this);
  }

  render() {
    const { message } = this.state;

    return (
      <FullScreenModal visible={!!message} className={styles.modal}>
        <Spinner />
        <span>
          {message}
          ...
        </span>
      </FullScreenModal>
    );
  }
}

export default Loading;
