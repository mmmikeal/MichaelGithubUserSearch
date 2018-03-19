import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import MoreResults from './MoreResults';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      githubHandle: '',
      followers: [''],
      followerCount: null,
      showMoreButton: false,
      pagination: 1,
    };
    //  binds setState functions
    this.setHandle = this.setHandle.bind(this);
    this.setFollowers = this.setFollowers.bind(this);
    this.incrementPagination = this.incrementPagination.bind(this);
    this.resetPagination = this.resetPagination.bind(this);
    this.setFollowerCount = this.setFollowerCount.bind(this);
  }

  //  set state of url to be result of SearchBar return value
  setHandle(val) {
    this.setState({ githubHandle: val });
  }

  //  set state of title to be result of SearchBar return value
  setFollowers(val) {
    this.setState({ followers: val });
  }

  // new search set pagination to 1
  resetPagination() {
    this.setState({ pagination: 1 });
  }

  //  increment pagination by 1
  incrementPagination() {
    this.setState({ pagination: this.state.pagination + 1 });
  }

  // set followerCount to result of APi data
  setFollowerCount(val) {
    this.setState({ followerCount: val });
  }

  render() {
    const showMoreButton = this.state.followerCount > (this.state.pagination * 30) ? (
      <MoreResults
        incrementPagination={this.incrementPagination}
        githubHandle={this.state.githubHandle}
        pagination={this.state.pagination}
        setFollowers={this.setFollowers}
      />
    ) : (
      <div />
    );

    return (
      <div>
        <SearchBar
          setHandle={this.setHandle}
          setFollowers={this.setFollowers}
          setShowMoreButton={this.setShowMoreButton}
          resetPagination={this.resetPagination}
          setFollowerCount={this.setFollowerCount}
        />
        <SearchResults
          handle={this.state.githubHandle}
          followers={this.state.followers}
          followerCount={this.state.followerCount}
        />
        {showMoreButton}
      </div>
    );
  }
}

export default Search;
