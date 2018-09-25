import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';

import { Input, SelectModal } from 'components';

import styles from './Select.scss';

const fuseOptions = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
};

class Select extends Component {
  constructor(props) {
    super(props);
    this.select = createRef();
    this.state = {
      open: false,
      search: '',
      searchMap: [],
      searchIndex: 0,
    };
  }

  onChangeSearch = search => {
    const { options } = this.props;

    this.setState({
      search,
      searchMap: search ? new Fuse(options, fuseOptions).search(search) : options,
      searchIndex: 0,
    });
  };

  closeSearchAnd = then => () => {
    this.setState({ open: false, search: '', searchMap: [], searchIndex: 0 }, then);
  };

  changeSearchIndex = change => {
    const { search, searchMap, searchIndex } = this.state;

    if (searchIndex + change > -1 && (!search || searchIndex + change < searchMap.length)) {
      this.setState(state => ({ searchIndex: state.searchIndex + change }));
    }
  };

  mappedOptions = () => {
    const { search, searchMap, searchIndex } = this.state;
    const { options, onChange } = this.props;

    const searchedOptions = search ? searchMap : options;

    return searchedOptions.map((option, index) => ({
      label: search ? options[option] : option,
      className: index === searchIndex ? styles.selected : '',
      onClick: this.closeSearchAnd(() => onChange(search ? option : index)),
    }));
  };

  onKeyDown = event => {
    if ([9, 13, 38, 40].includes(event.keyCode)) {
      event.preventDefault();

      const { search, searchIndex, searchMap } = this.state;
      const { onChange } = this.props;

      switch (event.keyCode) {
        case 13:
          document.activeElement.blur();
          this.closeSearchAnd(
            () => (search ? onChange(searchMap[searchIndex]) : onChange(searchIndex)),
          )();
          break;
        case 38:
          this.changeSearchIndex(-1);
          break;
        case 40:
          this.changeSearchIndex(1);
          break;
        default:
          if (event.shiftKey) {
            this.changeSearchIndex(-1);
          } else {
            this.changeSearchIndex(1);
          }
          break;
      }
    }
  };

  render() {
    const { open, search } = this.state;
    const { options, selected, placeholder } = this.props;

    const option = selected === undefined ? '' : options[selected];

    return (
      <div className={styles.container} ref={this.select}>
        <Input
          className={styles.select}
          value={open ? search : option}
          onChange={this.onChangeSearch}
          onFocus={() => this.setState({ open: true })}
          onKeyDown={this.onKeyDown}
          placeholder={placeholder}
        />
        <SelectModal
          visible={open}
          originNodes={[this.select]}
          className={styles.selectModal}
          onClickOutside={this.closeSearchAnd()}
          options={this.mappedOptions()}
        />
      </div>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Select.defaultProps = {
  selected: undefined,
  placeholder: '',
};

export default Select;
