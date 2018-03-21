import React from 'react';
import AvatarImages from './AvatarImages';

//  dumb component
const SearchResults = (props) => {
  return (
    <div>
      <h1> { props.handle } </h1>
      <h2> { props.followerCount } </h2>
      <div>
        <AvatarImages imageUrls={ props.followers } />
      </div>
    </div>
  );
};

export default SearchResults;
