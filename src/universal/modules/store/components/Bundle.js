import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppPage from 'cio/lib/AppPage';
import Cover from 'cio/lib/Cover';
import { fontSize, hexToRgba, lineHeight, Units, Colors } from 'universal/styles';
import { currency, translate as _l } from 'oxygen-i18n';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { withRouter } from 'react-router';

import common from 'universal/styles/common';
import StoreFooter from 'universal/modules/store/components/Store/StoreFooter';
import RunsOnCoursio from 'universal/components/RunsOnCoursio';
import { storeCss } from 'universal/modules/store/style';
import AuthorInfo from 'universal/modules/store/components/AuthorInfo';
import VideoPreview from 'universal/components/VideoPreview';
import EnrollButton from 'universal/modules/store/components/EnrollButton';
import TableOfContents from 'universal/modules/store/components/StoreItem/TableOfContents';
import StoreCard from './Store/StoreCard';
import StoreBarContainer from 'universal/modules/store/containers/Store/StoreBarContainer';
import Button from 'universal/components/Button';
import ChevronLeft from 'cio/lib/Assets/ChevronLeft';

addTranslations({
  ['en-US']: {
    'About this bundle': 'About this bundle',
    'Included courses': 'Included courses',
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
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  backButton: {
    lineHeight: '48px',
    color: Colors.border.active
  }
});

class Bundle extends Component {
  static propTypes = {
    owner: PropTypes.object,
    theme: PropTypes.object,
    presentation: PropTypes.object,
    name: PropTypes.string,
    storeItem: PropTypes.object
  }

  back = () => {
    const { match, location, history, name } = this.props;
    history.push(`/store/${name}`);
  }

  gotoCourse = courseId => {
    const { history, name } = this.props;
    history.push(`/store/${name}/1/${courseId}`);
  }



  render () {
    const {
      owner,
      theme,
      storeItem,
      name,
    } = this.props;
    return (
      <div>
        <StoreBarContainer name={name}>
          <div>
            <Button className={css.backButton} color={'#FFFFFF'} textColor={'#777'} border={false} onClick={this.back}>
              <ChevronLeft size={24}/>
              {_l`Library`}
            </Button>
          </div>
        </StoreBarContainer>
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
          <div className={storeCss.header}>{_l`Included courses`}</div>
          <div className={css.cardContainer}>
            {storeItem.courses.map((course, index) => {
              // console.log(course)
              return (
                <StoreCard
                  key={index}
                  onClick={() => this.gotoCourse(course.id)}
                  theme={theme}
                  owner={owner}
                  storeItem={{
                    coverImage: [{url : course.coverUrl}],
                    type: 1,
                    id: course.id,
                    price: {
                      ...course.price,
                      discounted: course.price.net
                    },
                    name: course.name
                  }}
                />
              );
            })}
          </div>
          <div className={storeCss.header}>{_l`About this bundle`}</div>
          {storeItem.presentation && <div className={css.presentation} dangerouslySetInnerHTML={{__html: storeItem.presentation}} />}

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

export default withRouter(Bundle);
