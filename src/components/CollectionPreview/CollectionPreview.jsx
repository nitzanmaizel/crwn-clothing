import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

import './CollectionPreview.scss';

const CollectionPreview = ({ title, collections }) => {
  return (
    <div className='collectionPreview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {collections.length &&
          collections
            .filter((_, idx) => idx < 4)
            .map((item) => <CollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default CollectionPreview;
