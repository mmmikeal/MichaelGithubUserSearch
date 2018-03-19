import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //  updates state when form values are entered
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  //  fires 2 github search requests
  //  resetPagination sets pagination state to 1 for new requests
  //  first request gets follower count and updates state
  //  second request gets follower avatar URL's and updates state

  handleSubmit(event) {
    event.preventDefault();
    this.props.resetPagination();
    fetch(`https://api.github.com/users/${this.state.value}`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        this.props.setFollowerCount(results.followers);
      });

    fetch(`https://api.github.com/users/${this.state.value}/followers`)
      .then((results) => {
        return results.text();
      })
      .then((results) => {
        let arrResults = JSON.parse(results);
        arrResults = arrResults.map((obj) => {
          return obj.avatar_url;
        });
        this.props.setHandle(this.state.value); // updates githandle
        this.props.setFollowers(arrResults);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search a user on GitHub:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchBar;
