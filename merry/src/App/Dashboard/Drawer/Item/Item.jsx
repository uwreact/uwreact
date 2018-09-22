import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Item.scss';

import { drawer } from '../../state';

const ItemView = props => {
  const { to, children } = props;

  return (
    <NavLink
      className={styles.item}
      activeClassName={styles.active}
      to={to}
      onClick={() => drawer.state.open && drawer.setState({ open: false })}
    >
      {children}
    </NavLink>
  );
};

ItemView.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ItemView;
