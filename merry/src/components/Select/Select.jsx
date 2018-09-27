import React from 'react';
import PropTypes from 'prop-types';

import { Input, SelectModal } from 'components';
import { Fuse } from 'modules';

import styles from './Select.scss';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.select = React.createRef();
    this.state = {
      open: false,
      index: 0,
      search: '',
      searchMap: [],
    };
  }

  componentDidMount() {
    this.updateFuse();
  }

  componentDidUpdate(prevProps) {
    const { options } = this.props;

    if (prevProps.options.some((option, index) => option !== options[index])) {
      this.updateFuse();
    }
  }

  updateFuse = async () => {
    const { options } = this.props;

    const fuse = await Fuse.import();

    this.fuse = fuse(options);
  };

  onChangeIndex = change => {
    const { options } = this.props;

    this.setState(state => ({
      index:
        state.index + change > -1 && state.index + change < state.search
          ? state.searchMap.length
          : options.length
            ? state.index + change
            : state.index,
    }));
  };

  onChangeSearch = search => {
    this.setState({
      index: 0,
      search,
      searchMap: search ? this.fuse.search(search) : [],
    });
  };

  closeSearch = () => {
    this.setState({ open: false, index: 0, search: '', searchMap: [] });
  };

  mappedOptions = () => {
    const { index, search, searchMap } = this.state;
    const { options, onChange } = this.props;

    return search
      ? searchMap.map((option, i) => ({
          label: options[option],
          className: i === index ? styles.selected : '',
          onClick: event => {
            event.preventDefault();
            this.closeSearch();
            onChange(option);
          },
        }))
      : options.map((option, i) => ({
          label: option,
          className: i === index ? styles.selected : '',
          onClick: event => {
            event.preventDefault();
            this.closeSearch();
            onChange(i);
          },
        }));
  };

  onKeyDown = event => {
    if ([9, 13, 38, 40].includes(event.keyCode)) {
      event.preventDefault();

      const { index, search, searchMap } = this.state;
      const { onChange } = this.props;

      switch (event.keyCode) {
        case 13:
          document.activeElement.blur();
          this.closeSearch();
          if (search) {
            onChange(searchMap[index]);
          } else {
            onChange(index);
          }
          break;
        case 38:
          this.onChangeIndex(-1);
          break;
        case 40:
          this.onChangeIndex(1);
          break;
        default:
          if (event.shiftKey) {
            this.onChangeIndex(-1);
          } else {
            this.onChangeIndex(1);
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
          onFocus={() => this.setState({ open: true, index: 0, search: '', searchMap: [] })}
          onKeyDown={this.onKeyDown}
          placeholder={placeholder}
        />
        <SelectModal
          visible={open}
          originNodes={[this.select]}
          className={styles.selectModal}
          onClickOutside={this.closeSearch}
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
