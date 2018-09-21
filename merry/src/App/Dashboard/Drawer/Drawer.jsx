import React, { PureComponent, Fragment } from 'react';
import classNames from 'classnames/bind';

import logo from 'resources/svg/logo/react-header.svg';

import { drawer } from '../state';

import styles from './Drawer.scss';

const boundStyles = classNames.bind(styles);

class Drawer extends PureComponent {
  constructor(props) {
    super(props);
    drawer.connect(this);
  }

  componentWillUnmount() {
    drawer.disconnect(this);
  }

  render() {
    const { open } = this.state;

    console.log(this.props);

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
          <div className={styles.items} />
          <div className={styles.footer} />
        </div>
        {open ? <div className={drawerBackground} /> : null}
      </Fragment>
    );
  }
}

export default Drawer;
