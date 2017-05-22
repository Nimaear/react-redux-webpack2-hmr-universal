import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from 'cio/lib/Assets/SvgIcon';
import { Colors } from 'universal/styles';

class BundleIcon extends Component {
  static propTypes = {
    color: PropTypes.string,
  };

  static defaultProps = {
    color: Colors.border.active
  };

  render() {
    const { color } = this.props;
    return (
      <SvgIcon>
        <g fill={color} stroke={'none'}>
          <rect rx={0.5} ry={0.5} x={5} y={5} width={6} height={6} />
          <rect rx={0.5} ry={0.5} x={13} y={5} width={6} height={6} />
          <rect rx={0.5} ry={0.5} x={5} y={13} width={6} height={6} />
          <rect rx={0.5} ry={0.5} x={13} y={13} width={6} height={6} />
        </g>
      </SvgIcon>
    );
  }
}

export default BundleIcon;
