import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Item.scss';

import { drawer } from '../../state';

const ItemView = props => {
  const { to, icon, children } = props;

  const Icon = icon;

  return (
    <NavLink
      className={styles.item}
      activeClassName={styles.active}
      to={to}
      onClick={() => drawer.state.open && drawer.setState({ open: false })}
    >
      <div className={styles.container}>
        <Icon className={styles.icon} />
      </div>
      {children}
    </NavLink>
  );
};

ItemView.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ItemView;
