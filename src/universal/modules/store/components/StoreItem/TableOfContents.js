import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate as _l } from 'oxygen-i18n';
import { storeCss } from 'universal/modules/store/style';
import Section from './TableOfContents/Section';

addTranslations({
  ['en-US']: {
    'Class curriculum': 'Class curriculum',
  }
});

const css = oxygenCss({
  root: {
    position: 'relative',
  }
});

class TableOfContents extends Component {
  static propTypes = {
    sections: PropTypes.array,
    className: PropTypes.string,
    color: PropTypes.string,
  };

  render() {
    const {
      className,
      color,
      sections
    } = this.props;
    return (
      <div className={classNames(className, css.root)}>
        <div className={storeCss.header}>{_l`Class curriculum`}</div>
        {sections.map((section, index) => {
          return <Section color={color} key={index} pages={section.pages} name={section.name} />
        })}
      </div>
    );
  }
}

export default TableOfContents;
