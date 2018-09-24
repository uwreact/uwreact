import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import logo from 'resources/svg/logos/react-header.svg';

import { BlankButton } from 'components';

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
            <Link to="/dashboard" onClick={() => open && this.setState({ open: false })}>
              <img src={logo} alt="Logo" className={styles.logo} />
            </Link>
          </div>
          <div className={styles.items}>
            <Heading label="Membership">
              <Item to="/dashboard/apply">Apply</Item>
            </Heading>
          </div>
          <div className={styles.footer} />
        </div>
        {open && (
          <BlankButton
            className={drawerBackground}
            onClick={() => this.setState({ open: false })}
          />
        )}
      </Fragment>
    );
  }
}

export default Drawer;
