import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { hexToRgba, fontSize } from 'universal/styles';

const css = oxygenCss({
  root: {
    marginBottom: 30,
  },
  section: {
    fontSize: `${fontSize(-2)}`,
    lineHeight: '18px',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  page: {
    lineHeight: '44px',
    borderRadius: 5,
    margin: `6px 0`,
    paddingLeft: 20,
  },
});

class Section extends Component {
  static propTypes = {
    name: PropTypes.node,
    pages: PropTypes.array,
    color: PropTypes.string
  };

  render() {
    const { name, color, pages } = this.props;
    return (
      <div className={css.root}>
        <div className={css.section}>{name}</div>
        {pages.map((page, index) => {
          return (
            <div className={css.page} style={{ backgroundColor: hexToRgba(color, 6) }} key={index}>{page.name}</div>
          );
        })}
      </div>
    );
  }
}

export default Section;
