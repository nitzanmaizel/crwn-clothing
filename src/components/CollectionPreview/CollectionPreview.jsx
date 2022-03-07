import React from 'react';

const CollectionPreview = ({ title, collection }) => {
  return (
    <div className='collectionPreview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {collection.length &&
          collection.filter((_, idx) => idx < 4).map(({ id, ...otherCollectionProps }) => <div />)}
      </div>
    </div>
  );
};

export default CollectionPreview;
