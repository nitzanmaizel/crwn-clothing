import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({ title, collections }) => {
  return (
    <div className='collectionPreview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {collections.length &&
          collections
            .filter((_, idx) => idx < 4)
            .map(({ id, ...otherCollectionProps }) => (
              <CollectionItem key={id} {...otherCollectionProps} />
            ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
