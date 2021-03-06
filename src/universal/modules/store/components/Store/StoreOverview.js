import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppPage from 'cio/lib/AppPage';
import StoreCard from './StoreCard';
import Cover from 'cio/lib/Cover';
import { translate as _l } from 'oxygen-i18n';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Drawer from 'cio/lib/Drawer';

import { fontSize, hexToRgba, Units, Colors } from 'universal/styles';
import StoreFooter from 'universal/modules/store/components/Store/StoreFooter';
import RunsOnCoursio from 'universal/components/RunsOnCoursio';
import StoreBarContainer from 'universal/modules/store/containers/Store/StoreBarContainer';
import StoreEditorContainer from 'universal/modules/store/containers/Store/StoreEditorContainer';

import OverviewBar from './OverviewBar';
// import { storeRoutes } from 'universal/routes/static';
// import {Route, Redirect} from 'react-router';
import common from 'universal/styles/common';
import { storeCss } from 'universal/modules/store/style';

addTranslations({
  ['en-US']: {
    '{0}': '{0}',
    'Courses': 'Courses',
    'No results found': 'No results found',
    'Store look and feel': 'Store look and feel'
  }
})


const css = oxygenCss({
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  courses: {
    fontSize: `${fontSize(2)}`,
    textAlign: 'center'
  },
  noResults: {
    color: Colors.lightBlack,
    fontWeight: 300,
    fontSize: `${fontSize(6)}`,
    textAlign: 'center'
  },
  storeItemEnter: {
    opacity: 0.01
  },
  storeItemEnterActive: {
    opacity: 1,
    transition: 'opacity 250ms ease-in'
  },
  storeItemAppear: {
    opacity: 0.01
  },
  storeItemAppearActive: {
    opacity: 1,
    transition: 'opacity 250ms ease-in'
  },
  storeItemLeave: {
    opacity: 1
  },
  storeItemLeaveActive: {
    opacity: 0.01,
    transition: 'opacity 250ms ease-in'
  },
  toolbar: {
    height: 96,
    borderStyle: 'none none solid none',
    borderWidth: 2,
    borderColor: '#E6E9E9'
  }
});

class StoreOverview extends Component {
  static propTypes = {
    owner: PropTypes.object,
    theme: PropTypes.object,
    presentation: PropTypes.object,
    name: PropTypes.string,
    storeItems: PropTypes.array
  }

  all = () => {
    const { name, setSearch } = this.props;
    setSearch(name, null);
  };

  goto = storeItem => {
    const { history, name } = this.props;
    history.push(`/store/${name}/${storeItem.type}/${storeItem.id}`);
  };

  startEdit = () => {
    const { name, setEditMode } = this.props;
    setEditMode(name, true);
  };

  stopEdit = () => {
    const { name, setEditMode } = this.props;
    setEditMode(name, false);
  };

  render () {
    const {
      owner,
      theme,
      presentation,
      name,
      user,
      filter,
      setFilter,
      setSearch,
      search,
      storeItems,
      editMode,
      setEditMode,
    } = this.props;
    const empty = !storeItems || storeItems.length < 1;
    return (
      <div>
        <StoreBarContainer name={name} onClickEdit={this.startEdit}/>

        <div className={storeCss.hero} style={{ backgroundColor: hexToRgba(theme.color, 6) }}>
          <div className={storeCss.whiteBanner} />
          <Cover className={storeCss.cover} size={1920} src={presentation.coverUrl} />
          {presentation.text && <div className={storeCss.subText} dangerouslySetInnerHTML={{__html: presentation.text}} />}
        </div>
        <div className={storeCss.store}>
          <div className={css.courses}>{_l`Courses`}</div>
          <OverviewBar
            filter={filter}
            color={theme.color}
            name={name}
            setSearch={setSearch}
            setFilter={setFilter}
            search={search}
          />
          <ReactCSSTransitionGroup
            component="div"
            className={css.cardContainer}
            transitionName={ {
              enter: css.storeItemEnter,
              enterActive: css.storeItemEnterActive,
              leave: css.storeItemLeave,
              leaveActive: css.storeItemLeaveActive,
              appear: css.storeItemAppear,
              appearActive: css.storeItemAppearActive
            } }
            transitionEnterTimeout={260}
            transitionLeaveTimeout={260}
          >
            {storeItems.map(storeItem => {
              return (
                <StoreCard
                  onClick={() => this.goto(storeItem)}
                  key={storeItem.id}
                  owner={owner}
                  storeItem={storeItem}
                  theme={theme}
                />
              );
            })}
          </ReactCSSTransitionGroup>
          {empty && <div className={css.noResults}>
            {_l`No results found`}
          </div>}
        </div>
        <StoreFooter owner={owner} />
        <RunsOnCoursio />
        <Drawer width={530} overlay open={editMode} right onRequestClose={this.stopEdit}>
          <div className={css.toolbar}>
            <h2>{_l`Store look and feel`}</h2>
          </div>
          <StoreEditorContainer name={name} />
        </Drawer>

      </div>
    )
  }
}

export default StoreOverview;
