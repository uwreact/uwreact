import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { pipe, map, join } from 'ramda';

import { BlankButton } from 'components';
import { ensureArray } from 'utilities';

import styles from './Heading.scss';

const boundStyles = classNames.bind(styles);

const childrenToLabel = pipe(
  ensureArray,
  map(child => child.props.children),
  join(', '),
);

class Heading extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
    };
  }

  render() {
    const { collapsed } = this.state;
    const { label, children } = this.props;

    const headingStyles = boundStyles({
      heading: true,
      collapsed,
    });

    return (
      <div className={styles.container}>
        <BlankButton
          className={headingStyles}
          onClick={() => this.setState({ collapsed: !collapsed })}
        >
          <div className={styles.headingLabel}>{label}</div>
          {collapsed && <div className={styles.itemsLabel}>{childrenToLabel(children)}</div>}
        </BlankButton>
        {!collapsed && <div className={styles.items}>{children}</div>}
      </div>
    );
  }
}

export default Heading;
