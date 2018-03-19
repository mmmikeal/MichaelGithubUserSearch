import React from 'react';
import AvatarImages from './AvatarImages';

//  dumb component
const SearchResults = (props) => {
  return (
    <div>
      <div> { props.handle } </div>
      <div> { props.followerCount } </div>
      <AvatarImages imageUrls={ props.followers } />
    </div>
  );
};

export default SearchResults;
