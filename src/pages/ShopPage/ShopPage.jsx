import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shopSelectors';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const ShopPage = ({ collections }) => {
  return (
    <div className='shop-page'>
      {collections.length &&
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
