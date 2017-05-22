import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from 'cio/lib/Assets/SvgIcon';
import { Colors } from 'universal/styles';

const css = oxygenCss({
  root: {
    transition: 'fill ease 0.5s',
  }
});

class PencilIcon extends Component {
  static propTypes = {
    color: PropTypes.string,
  };

  static defaultProps = {
    color: Colors.border.active
  };

  render() {
    const { color } = this.props;
    return (
      <SvgIcon viewPortSize={512} >
        <g fill={color} className={css.root}>
          <path d="M422.953,176.019c0.549-0.48,1.09-0.975,1.612-1.498l21.772-21.772c12.883-12.883,12.883-33.771,0-46.654 l-40.434-40.434c-12.883-12.883-33.771-12.883-46.653,0l-21.772,21.772c-0.523,0.523-1.018,1.064-1.498,1.613L422.953,176.019z"/>
          <polygon points="114.317,397.684 157.317,440.684 106.658,448.342 56,456 63.658,405.341 71.316,354.683 "/>
          <polygon points="349.143,125.535 118.982,355.694 106.541,343.253 336.701,113.094 324.26,100.653 81.659,343.253 168.747,430.341 411.348,187.74  "/>
        </g>
      </SvgIcon>
    );
  }
}

export default PencilIcon;