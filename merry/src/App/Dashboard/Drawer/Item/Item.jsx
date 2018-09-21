import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Item.scss';

const ItemView = props => {
  const { to, children } = props;

  return (
    <NavLink className={styles.item} activeClassName={styles.active} to={to}>
      {children}
    </NavLink>
  );
};

ItemView.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ItemView;
