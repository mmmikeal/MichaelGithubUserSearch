import React from 'react';
import { FormGroup, FormControl,Button } from 'react-bootstrap';

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

    //  first request for follower count
    fetch(`https://api.github.com/users/${this.state.value}`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        this.props.setFollowerCount(results.followers);
      })
      .catch((err) => {
        alert('invalid username');
      });
    //  second request for avatarURL array and successful github name display
    fetch(`https://api.github.com/users/${this.state.value}/followers`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((results) => {
        return results.text();
      })
      .then((results) => {
        let arrResults = JSON.parse(results);
        console.log(arrResults);
        arrResults = arrResults.map((obj) => {
          return obj.avatar_url;
        })

        this.props.setHandle(this.state.value); // updates githandle
        this.props.setFollowers(arrResults);
      })
      .catch((error) => {
        alert('invalid username');
      });
  }

  render() {
    return (
      <div>
        <form
          className="form"
          onSubmit={this.handleSubmit}>
          <FormGroup>
          <FormControl
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Enter GitHub username"
          />

          <Button
            type="submit"
            className="SearchButton"
            bsStyle="primary"
          >
            Submit
          </Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default SearchBar;
