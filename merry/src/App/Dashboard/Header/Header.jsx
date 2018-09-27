import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { IconButton, SelectModal } from 'components';
import { Firebase } from 'modules';

import bars from 'resources/svg/icons/bars.svg';
import user from 'resources/svg/icons/user.svg';

import { drawer } from 'state';

import styles from './Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userModalOpen: false,
    };
    this.userModalOptions = [
      {
        label: 'Close Dashboard',
        onClick: () => {
          const { history } = this.props;
          history.push('/');
        },
      },
      {
        label: 'Log Out',
        onClick: async () => {
          const { history } = this.props;
          history.push('/');

          const firebase = await Firebase.import();
          await firebase.auth().signOut();
        },
      },
    ];
    this.userIcon = React.createRef();
  }

  render() {
    const { userModalOpen } = this.state;

    return (
      <div className={styles.header}>
        <div className={styles.drawerContainer}>
          <IconButton icon={bars} onClick={() => drawer.setState({ open: true })} />
        </div>
        <div className={styles.userContainer} ref={this.userIcon}>
          <IconButton
            icon={user}
            onClick={() => this.setState(state => ({ userModalOpen: !state.userModalOpen }))}
          />
          <SelectModal
            visible={userModalOpen}
            originNodes={[this.userIcon]}
            className={styles.userModal}
            onClickOutside={() => this.setState({ userModalOpen: false })}
            options={this.userModalOptions}
          />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Header);
