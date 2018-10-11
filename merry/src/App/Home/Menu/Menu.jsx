import React from 'react';
import classNames from 'classnames/bind';

import { IconButton } from 'components';

import bars from 'resources/svg/icons/bars.svg';

import styles from './Menu.scss';

const boundStyles = classNames.bind(styles);

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;

    const menuStyles = boundStyles({
      menu: true,
      open,
    });

    return (
      <div className={menuStyles}>
        <IconButton
          className={styles.icon}
          icon={bars}
          onClick={() => this.setState(state => ({ open: !state.open }))}
        />
        {open && <div className={styles.items}>Items</div>}
      </div>
    );
  }
}

export default Menu;
