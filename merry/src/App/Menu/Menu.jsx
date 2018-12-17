import React from 'react';
import PropTypes from 'prop-types';
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
  static propTypes = {
    ri3d: PropTypes.bool,
  };

  static defaultProps = {
    ri3d: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const { ri3d } = this.props;
    const { open } = this.state;

    const menuStyles = boundStyles({
      menu: true,
      open,
    });

    const socialStyles = boundStyles({
      social: true,
      open,
    });

    // TODO: Add links to google forms

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
              {ri3d ? (
                <React.Fragment>
                  <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                    ATTEND UW Ri3D 2019
                  </a>
                  <div />
                  <Link to="/">LEARN ABOUT UW REACT</Link>
                  <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                    JOIN UW REACT
                  </a>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                    JOIN UW REACT
                  </a>
                  <div />
                  <Link to="/ri3d">LEARN ABOUT UW Ri3D</Link>
                  <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                    ATTEND UW Ri3D
                  </a>
                </React.Fragment>
              )}
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
