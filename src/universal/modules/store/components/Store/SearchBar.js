import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SearchIdle from 'cio/lib/Assets/SearchIdle';
import TextField from 'cio/lib/TextField';
import IconButton from 'cio/lib/Button/IconButton';
import CrossIcon from 'universal/components/Icons/CrossIcon';

const css = oxygenCss({
  root: {
    position: 'relative',
    display: 'inline-flex',
    textAlign: 'left',
    justifyContent: 'flex-end',
    '&expanded': {
      input: {
        display: 'block'
      },
      cross: {
        display: 'block'
      },
    }
  },
  toggle: {
    flexGrow: 0,
  },
  cross: {
    flexGrow: 0,
    display: 'none'
  },
  inputWrapper: {
    display: 'flex',
    flexGrow: 0,
    padding: `0 4px`
  },
  input: {
    display: 'none',
    boxSizing: 'border-box',
    border: 'none',
    outline: 'none',
    flexGrow: 1,
    margin: 0,
    width: '100%',
    '::placeholder': {
      fontSize: `${fontSize()}`
    },
  },
  button: {
    margin: 0,
    verticalAlign: 'middle',
    cursor: 'pointer'
  }
});

class SearchBar extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onSearch: PropTypes.func
  };

  state = {
    expanded: false,
    value: this.props.value || ''
  };

  componentWillReceiveProps(nextProps) {
    const nextValue = nextProps.value || '';
    if (nextValue !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  handleChange = event => {
    const { value } = event.target;
    const { onSearch } = this.props;
    this.setState({ value }, () => {
      onSearch && onSearch(value);
    });

  };

  expand = () => {
    this.setState({
      expanded: true
    }, () => {
      this._input.focus();
    });
  };

  collapse = () => {
    this.setState({
      expanded: false
    });
  };

  render() {
    const {
      className,
      color,
      ...rest
    } = this.props;
    const {
      value,
      expanded
    } = this.state;
    const classes = classNames(css.root, className, {
      [css.expanded]: expanded
    });
    return (
      <div className={classes}>
        <div className={css.toggle}>
          <SearchIdle
            className={css.button}
            onClick={this.expand}
            color={expanded ? color : '#777'}
            width={16}
            height={16}
          />
        </div>
        <div className={css.inputWrapper}>
          <input
            ref={_input => this._input = _input}
            type={'text'}
            className={css.input}
            onChange={this.handleChange}
            value={value}
          />
        </div>
        <div className={css.cross}>
          <CrossIcon
            className={css.button}
            width={16}
            height={16}
            onClick={this.collapse}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
