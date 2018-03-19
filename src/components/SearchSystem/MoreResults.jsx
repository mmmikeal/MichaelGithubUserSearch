import React from 'react';

class MoreResults extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //  requests google search when form submitted
  handleSubmit(event) {
    event.preventDefault();
    this.props.incrementPagination();
    fetch(`https://api.github.com/users/${this.props.githubHandle}/followers?page=${this.props.pagination + 1}`)
      .then((results) => {
        return results.text();
      })
      .then((results) => {
        let arrResults = JSON.parse(results);
        arrResults = arrResults.map((obj) => {
          return obj.avatar_url;
        });
        this.props.setFollowers(arrResults);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>
          More Results
        </button>
      </div>
    );
  }
}

export default MoreResults;
