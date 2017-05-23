import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { fontSize } from 'universal/styles';
import { getContrastYIQ } from 'universal/lib/color';

const css = oxygenCss({
  root: {

    position: 'relative',
    borderRadius: 3,
    transition: 'all 0.25s ease',
    boxSizing: 'border-box',
    flexGrow: 1,
    outline: 'none',
    cursor: 'pointer',
    overflow: 'hidden',
    fontSize: `${fontSize()}`,
    border: 'none',
    '&border': {
      border: 'solid 1px transparent',
    },
    ':hover': {
      background: {
        opacity: 0.4
      }
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 0,
    },
    label: {
      position: 'relative',
      zIndex: 1
    },
    '&disabled': {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  },
});

class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    label: PropTypes.node,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    textColor: PropTypes.string,
    border: PropTypes.bool,
  };

  static defaultProps = {
    color: '#777777',
    border: true
  };

  handleTouchTap = event => {
    const {
      disabled,
      onClick
    } = this.props;
    !disabled && onClick && onClick(event);
  }

  render() {
    const {
      className,
      children,
      disabled,
      color,
      textColor,
      border,
      label,
      ...rest
    } = this.props;
    const classes = classNames(className, css.root, {
      [css.disabled]: disabled,
      [css.border]: border
    });
    return (
      <button className={classes} style={{ color: textColor || getContrastYIQ(color) }} disabled={disabled} {...rest}>
        <div className={css.background} style={{ backgroundColor: color }} />
        <div className={css.label}>
          {label}
          {children}
        </div>
      </button>
    );
  }
}

export default Button;
