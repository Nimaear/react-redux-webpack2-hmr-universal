import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card, { CardContent } from 'cio/lib/Card';
import Cover from 'cio/lib/Cover';
import Panel from 'cio/lib/Panel';
import { currency } from 'oxygen-i18n';

import { fontSize, lineHeight, Units } from 'universal/styles';

import BundleBadge from './BundleBadge';
import CoverCarousel from './CoverCarousel';

const css = oxygenCss({
  storeCard: {
    margin: Units.base ,
    width: 270,
    cursor: 'pointer',
    '@phone': {
      margin: Units.base ,
      width: '100%'
    }
  },
  itemName: {
    fontWeight: 'bold',
    height: `${lineHeight() * 2}em`,
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  instructorName: {
    opacity: 0.4,
    fontSize: `${fontSize(-2)}`
  },
  price: {
    textAlign: 'right',
    fontWeight: 'bold'
  },
});


class StoreCard extends Component {
  static propTypes = {
    storeItem: PropTypes.object,
    owner: PropTypes.object,
    theme:PropTypes.object
  };

  render() {
    const {
      storeItem,
      owner,
      theme,
      ...rest
    } = this.props;
    const coverImage = storeItem.coverImage && storeItem.coverImage[0] && storeItem.coverImage[0].url;
    return (
      <Card key={storeItem.type+'-'+storeItem.id} className={css.storeCard} {...rest}>
        <CardContent>
          <CoverCarousel size={270} height={180} images={storeItem.coverImage} />
          { storeItem.type === 2 && <BundleBadge count={storeItem.courses.length} color={theme.color}/>}
          <Panel padded>
            <div className={css.itemName}>{storeItem.name}</div>
            <div className={css.price} style={{ color: theme.color }}>{currency(storeItem.price.discounted, 'SEK')}</div>
          </Panel>
        </CardContent>
      </Card>
    );
  }
}

export default StoreCard;
