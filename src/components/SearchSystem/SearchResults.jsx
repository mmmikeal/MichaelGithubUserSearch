import React from 'react';
import AvatarImages from './AvatarImages';

//  dumb component
const SearchResults = (props) => {
  return (
    <div>
      <h1> { props.handle } </h1>
      <h2> { props.followerCount } </h2>
      <div className="AvatarContainer">
      {props.followers.map(imageUrl =>
        <AvatarImages
          imageUrl={ imageUrl[1] }
          imageUsername={ imageUrl[0]}
          setHandle={ props.setHandle }
          setFollowers={ props.setFollowers }
          resetPagination={ props.resetPagination }
          setFollowerCount={ props.setFollowerCount }
        />)
      }
      </div>
    </div>
  );
};

export default SearchResults;
