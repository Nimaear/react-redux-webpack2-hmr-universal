import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Cover from 'cio/lib/Cover';

const css = oxygenCss({
  cardEnter: {
    opacity: 0.01
  },
  cardEnterActive: {
    opacity: 1,
    transition: 'opacity 250ms ease-in'
  },
  cardAppear: {
    opacity: 0.01
  },
  cardAppearActive: {
    opacity: 1,
    transition: 'opacity 250ms ease-in'
  },
  cardLeave: {
    opacity: 1
  },
  cardLeaveActive: {
    opacity: 0.01,
    transition: 'opacity 250ms ease-in'
  },
  cover: {
    position: 'absolute',
    left: 0,
    right: 0,
    top : 0,
    bottom: 0,
  }
});
class CoverCarousel extends Component {
  static propTypes = {
    height: PropTypes.number,
  };

  state = {
    counter: 0
  };

  componentDidMount() {
    this._interval = setInterval(() => {
      let counter = this.state.counter + 1;
      if (counter > (this.props.images.length - 1)) {
        counter = 0;
      }
      this.setState({
        counter
      });
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    const {
      height,
      images,
      ...rest
    } = this.props;
    const { counter } = this.state;
    const { url } = images[counter];
    return (
      <ReactCSSTransitionGroup
        component="div"
        style={{ height }}
        transitionName={ {
          enter: css.cardEnter,
          enterActive: css.cardEnterActive,
          leave: css.cardLeave,
          leaveActive: css.cardLeaveActive,
          appear: css.cardAppear,
          appearActive: css.cardAppearActive
        } }
        transitionEnterTimeout={260}
        transitionLeaveTimeout={260}
      >
        <Cover {...rest} height={height} key={url} src={url} className={css.cover}/>
      </ReactCSSTransitionGroup>
    );
  }
}

export default CoverCarousel;
