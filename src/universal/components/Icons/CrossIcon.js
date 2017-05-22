import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from 'cio/lib/Assets/SvgIcon';
import { Colors } from 'universal/styles';

class CrossIcon extends Component {
  static propTypes = {
    color: PropTypes.string,
  };

  static defaultProps = {
    color: Colors.border.active
  };

  render() {
    const { color, ...rest } = this.props;
    return (
      <SvgIcon {...rest} viewPortSize={24}>
        <g fill={'none'} stroke={color} strokeWidth={2} strokeMiterlimit={2}>
          <line x1="4" y1="4" x2="20" y2="20"/>
          <line x1="20" y1="4" x2="4" y2="20"/>
        </g>
      </SvgIcon>
    );
  }
}

export default CrossIcon;
