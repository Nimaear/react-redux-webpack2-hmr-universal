import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { fontSize, Units, Colors } from 'universal/styles';
import { translate as _l } from 'oxygen-i18n';
import SearchBar from './SearchBar';

const css = oxygenCss({
  root: {
    padding: Units.base,
    position: 'relative',
    display: 'flex',
    fontSize: `${fontSize(-1)}`,
    padding: Units.base,

  },
  item: {
    margin: `0 ${Units.base}px`,
    flexGrow: 0,
    flexShrink: 0,
    cursor: 'pointer',
    transition: 'all 0.250s ease-in',
    ':hover': {
      opacity: 0.5
    }
  },
  searchBar: {
    margin: `0 ${Units.base}px`,
    flexGrow: 1,
  }
});

addTranslations({
  ['en-US']: {
    'All': 'All',
    'Singles': 'Singles',
    'Bundles': 'Bundles',
  }
});

class OverviewBar extends Component {
  static propTypes = {
    filter: PropTypes.object,
  };

  static defaultProps = {
    filter: {
      itemType: null
    }
  };

  setFilter = (itemType) => {
    const { name, setFilter } = this.props;
    setFilter(name, itemType);
  };

  setSearch = search => {
    const { name, setSearch } = this.props;
    setSearch(name, search);
  };

  render() {
    const {
      color,
      search,
      filter
    } = this.props;
    const filters = [
      [null, _l`All`],
      [1, _l`Singles`],
      [2, _l`Bundles`],
    ];
    return (
      <div className={css.root}>
        {filters.map(([itemType, label]) => {
          return (
            <div
              style={itemType === filter.itemType ? { color } : {}}
              className={css.item}
              key={label}
              onClick={() => this.setFilter(itemType)}
            >
              {label}
            </div>
          );
        })}
        <SearchBar
          color={color}
          className={css.searchBar}
          value={search}
          onSearch={this.setSearch}
        />
      </div>
    );
  }
}

export default OverviewBar;
