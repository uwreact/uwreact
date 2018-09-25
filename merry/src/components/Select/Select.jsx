import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import { Input, SelectModal } from 'components';

import styles from './Select.scss';

class Select extends Component {
  constructor(props) {
    super(props);
    this.select = createRef();
    this.state = {
      open: false,
      index: 0,
    };
  }

  changeIndex = change => {
    const { options } = this.props;

    this.setState(state => ({
      index:
        state.index + change > -1 && state.index + change < options.length
          ? state.index + change
          : state.index,
    }));
  };

  changeSearch = search => {
    const { onChangeSearch } = this.props;

    onChangeSearch(search);
    this.setState({ index: 0 });
  };

  mappedOptions = () => {
    const { index } = this.state;
    const { options, onSelect } = this.props;

    return options.map((option, i) => ({
      label: option,
      className: i === index ? styles.selected : '',
      onClick: () => {
        this.setState({ open: false });
        onSelect(i);
      },
    }));
  };

  onKeyDown = event => {
    if ([9, 13, 38, 40].includes(event.keyCode)) {
      event.preventDefault();

      const { index } = this.state;
      const { onSelect } = this.props;

      switch (event.keyCode) {
        case 13:
          document.activeElement.blur();
          this.setState({ open: false });
          onSelect(index);
          break;
        case 38:
          this.changeIndex(-1);
          break;
        case 40:
          this.changeIndex(1);
          break;
        default:
          if (event.shiftKey) {
            this.changeIndex(-1);
          } else {
            this.changeIndex(1);
          }
          break;
      }
    }
  };

  render() {
    const { open } = this.state;
    const { options, selected, search, placeholder } = this.props;

    const option = selected === undefined ? '' : options[selected];

    return (
      <div className={styles.container} ref={this.select}>
        <Input
          className={styles.select}
          value={open ? search : option}
          onChange={this.changeSearch}
          onFocus={() => this.setState({ open: true, index: 0 })}
          onKeyDown={this.onKeyDown}
          placeholder={placeholder}
        />
        <SelectModal
          visible={open}
          originNodes={[this.select]}
          className={styles.selectModal}
          onClickOutside={() => this.setState({ open: false })}
          options={this.mappedOptions()}
        />
      </div>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
  search: PropTypes.string,
  onChangeSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

Select.defaultProps = {
  selected: undefined,
  search: '',
  onChangeSearch: () => {},
  placeholder: '',
};

export default Select;
