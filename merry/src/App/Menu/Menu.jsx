import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { IconButton } from 'components';

import bars from 'resources/svg/icons/bars.svg';

import styles from './Menu.scss';
import Icon from '../../components/Icon';
import github from '../../resources/svg/icons/github.svg';
import facebook from '../../resources/svg/icons/facebook.svg';
import twitter from '../../resources/svg/icons/twitter.svg';
import instagram from '../../resources/svg/icons/instagram.svg';
import youtube from '../../resources/svg/icons/youtube.svg';

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

    const socialStyles = boundStyles({
      social: true,
      open,
    });

    return (
      <React.Fragment>
        <div className={menuStyles}>
          <IconButton
            className={styles.bars}
            icon={bars}
            onClick={() => this.setState(state => ({ open: !state.open }))}
          />
          {open && (
            <div className={styles.items}>
              <Link to="/apply">APPLY</Link>
              <Link to="/dashboard">DASHBOARD</Link>
            </div>
          )}
        </div>
        <div className={socialStyles}>
          <a href="https://github.com/uwreact" target="_blank" rel="noopener noreferrer">
            <Icon className={styles.icon} icon={github} />
          </a>
          <a href="http://fb.me/teamuwreact" target="_blank" rel="noopener noreferrer">
            <Icon className={styles.icon} icon={facebook} />
          </a>
          <a href="https://twitter.com/uwreact" target="_blank" rel="noopener noreferrer">
            <Icon className={styles.icon} icon={twitter} />
          </a>
          <a href="https://instagram.com/uwreact" target="_blank" rel="noopener noreferrer">
            <Icon className={styles.icon} icon={instagram} />
          </a>
          <a href="https://goo.gl/ns5r5g" target="_blank" rel="noopener noreferrer">
            <Icon className={styles.icon} icon={youtube} />
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
