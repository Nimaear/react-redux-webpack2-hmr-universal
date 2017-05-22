import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { parseVideoUrl } from 'universal/lib/media';

const css = oxygenCss({
  container: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
  }
});

class VideoPreview extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const src = parseVideoUrl(this.props.src);
    return (
      <div className={css.container}>
        <iframe
          className={css.iframe}
          src={src}
          allowTransparency={true}
          frameBorder={0}
          scrolling={'no'}
          allowFullScreen
        />
      </div>
    );
  }
}

export default VideoPreview;
