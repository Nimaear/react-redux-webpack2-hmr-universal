import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Units, Colors, Typography, fontSize } from 'universal/styles';
import { brighten } from 'cio/lib/Css';

const css = oxygenCss({
  root: {
    position: 'relative',
    width: 370,
    borderRadius: 5,
    transition: 'all 0.25s ease',
    boxSizing: 'border-box',
    flexGrow: 1,
    border: 'none',
    outline: 'none',
    lineHeight: '48px',
    fontWeight: 'bold',
    fontSize: `${fontSize()}`,
    fontFamily: Typography.fontFamily,
    height: 48,
    opacity: 0.9,
    ':hover': {
      opacity: 1,
      // backgroundColor: `${brighten(Colors.creen, 0.05)}`
    },
    cursor: 'pointer',
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
    secondary: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
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
      secondary,
      disabled,
      label,
      ...rest
    } = this.props;
    const classes = classNames(className, css.root, {
      [css.disabled]: disabled,
      [css.secondary]: secondary
    });
    return (
      <button className={classes} disabled={disabled} {...rest}>
        {label}
        {children}
      </button>
    );
  }
}

export default Button;
