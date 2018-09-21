import React, { Component, Fragment } from 'react';
import classNames from 'classnames/bind';

import logo from 'resources/svg/logo/react-header.svg';

import { drawer } from '../state';

import styles from './Drawer.scss';

import Heading from './Heading';
import Item from './Item';

const boundStyles = classNames.bind(styles);

class Drawer extends Component {
  constructor(props) {
    super(props);
    drawer.connect(this);
  }

  componentWillUnmount() {
    drawer.disconnect(this);
  }

  render() {
    const { open } = this.state;

    const drawerStyles = boundStyles({
      drawer: true,
      open,
    });

    const drawerBackground = boundStyles({
      background: open,
    });

    return (
      <Fragment>
        <div className={drawerStyles} ref={this.drawer}>
          <div className={styles.header}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </div>
          <div className={styles.items}>
            <Heading label="Membership">
              <Item to="/dashboard/apply">Apply</Item>
            </Heading>
          </div>
          <div className={styles.footer} />
        </div>
        {open && <div className={drawerBackground} />}
      </Fragment>
    );
  }
}

export default Drawer;
