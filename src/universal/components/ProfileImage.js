import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const css = oxygenCss({
  root: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'inline-block'
  }
});

class ProfileImage extends Component {
  static propTypes= {
    url: PropTypes.string
  };

  render() {
    const { url } = this.props;
    return (
      <div className={css.root} style={{ backgroundImage: `url(${url})`}}/>
    );
  }
}

export default ProfileImage;
