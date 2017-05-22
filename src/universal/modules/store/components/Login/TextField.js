import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Units, Colors } from 'universal/styles';

const css = oxygenCss({
  root: {
    position: 'relative',
    boxSizing: 'border-box',
    display: 'flex',
  },
  input: {
    width: 370,
    boxSizing: 'border-box',
    borderRadius: 5,
    padding: Units.base,
    outline: 'none',
    flexGrow: 1,
    margin: 0,
    lineHeight: '48px',
    height: 48,
    borderColor: Colors.border.default,
    borderStyle: 'solid',
    borderWidth: 1,
    fontSize: `${fontSize()}`,
    fontFamily: Typography.fontFamily,
    width: '100%',
    '::placeholder': {
      opacity: 0.5,
      // fontSize: Typography.normal.fontSize,
    },
    ':focus': {
      border: `solid 1px ${Colors.border.active}`,
    },
    ':active': {
      border: `solid 1px ${Colors.border.active}`,
    },
  }
});

class TextField extends Component {
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    style: PropTypes.object
  };

  state = {
    value: this.props.value
  };

  handleChange = event => {
    const { onChange } = this.props;
    const { value } = event.target;
    this.setState({ value });
    onChange && onChange(value);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  render() {
    const {
      className,
      style,
      value,
      ...rest
    } = this.props;
    const classes = classNames(className, css.input, {

    });
    return (
      <div style={style} className={css.root}>
        <input type={'text'} className={classes} {...rest} onChange={this.handleChange} value={this.state.value}/>
      </div>
    );
  }
}

export default TextField;
