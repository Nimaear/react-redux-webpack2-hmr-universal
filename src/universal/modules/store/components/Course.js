import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppPage from 'cio/lib/AppPage';
import StoreCard from './Store/StoreCard';
import Cover from 'cio/lib/Cover';
import { fontSize, hexToRgba, lineHeight, Units, Colors } from 'universal/styles';
import { currency, translate as _l } from 'oxygen-i18n';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import common from 'universal/styles/common';
import StoreFooter from 'universal/modules/store/components/Store/StoreFooter';
import RunsOnCoursio from 'universal/components/RunsOnCoursio';
import { storeCss } from 'universal/modules/store/style';
import AuthorInfo from 'universal/modules/store/components/AuthorInfo';
import VideoPreview from 'universal/components/VideoPreview';
import EnrollButton from 'universal/modules/store/components/EnrollButton';
import TableOfContents from 'universal/modules/store/components/StoreItem/TableOfContents';

addTranslations({
  ['en-US']: {
    'About this course': 'About this course',
    'Enroll for {0}': 'Enroll for {0}'
  }
});

const css = oxygenCss({
  presentation: {
    width: 570,
    '@phone': {
      width: '100%',
    },
    margin: 'auto',
    ' IMG': {
      maxWidth: '100%'
    }
  },

  courseName: {
    fontSize: `${fontSize(7)}`,
    lineHeight: `${lineHeight(7)}`,
    textAlign: 'center',
    '@phone': {
      fontSize: `${fontSize(4)}`,
      lineHeight: `${lineHeight(4)}`,
    }
  },
  enrollContainer: {
    width: 720,
    margin: 'auto',
    textAlign: 'center',
    padding: 40,
    '@phone': {
      width: '100%',
      padding: 20,
    },

  },
  toc: {
    width: 570,
    margin: 'auto',
    '@phone': {
      padding: Units.base * 2,
      width: '100%'
    }
  },
  videoPreview: {
    width: 720,
    margin: 'auto',
    textAlign: 'center',
    '@phone': {
      top: 0,
      width: '100%'
    }
  },
  authorInfo: {
    margin: `40px 0 40px 0`,
    '@phone': {
      margin: `20px 0 20px 0`,
    }
  }
});

class Course extends Component {
  static propTypes = {
    owner: PropTypes.object,
    theme: PropTypes.object,
    presentation: PropTypes.object,
    name: PropTypes.string,
    storeItem: PropTypes.object
  }


  render () {
    const {
      owner,
      theme,
      storeItem,
    } = this.props;
    return (
      <div key={`${storeItem.type}-${storeItem.id}`}>
        <div className={css.courseName}>{storeItem.name}</div>
        <div className={storeCss.hero} style={{ backgroundColor: hexToRgba(theme.color, 6) }}>
          <div className={storeCss.whiteBanner} />
          <div className={css.videoPreview}>
            <VideoPreview src={storeItem.videoUrl} />
            <div className={css.authorInfo}><AuthorInfo author={owner} /></div>
          </div>
        </div>
        <div className={storeCss.store}>
          <div className={css.enrollContainer}>
            <EnrollButton color={theme.color} label={_l`Enroll for ${currency(storeItem.price.discounted, storeItem.currency)}`} />
          </div>
          <div className={storeCss.header}>{_l`About this course`}</div>
          {storeItem.presentation && <div className={css.presentation} dangerouslySetInnerHTML={{__html: storeItem.presentation}} />}
          <TableOfContents color={theme.color} className={css.toc} sections={storeItem.toc || []}/>
          <div className={css.enrollContainer}>
            <EnrollButton color={theme.color} label={_l`Enroll for ${currency(storeItem.price.discounted, storeItem.currency)}`} />
          </div>
        </div>
        <StoreFooter owner={owner} />
        <RunsOnCoursio />
      </div>
    )
  }
}

export default Course;
