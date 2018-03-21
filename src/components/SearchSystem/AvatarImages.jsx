import React from "react";
import { Grid, Row, Col, Image } from 'react-bootstrap';

//  Displays User's Followers Github Avatars
class AvatarImages extends React.Component {
  constructor(props) {
    super(props);

    this.searchUser =  this.searchUser.bind(this);
  }

  //  when avatar image is clicked, searchUser performs a search on that user
  searchUser(event) {
    event.preventDefault();
    this.props.resetPagination();

    //  first request for follower count
    fetch(`https://api.github.com/users/${this.props.imageUsername}`)
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
    fetch(`https://api.github.com/users/${this.props.imageUsername}/followers`)
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
        arrResults = arrResults.map((obj) => {
          return [obj.login, obj.avatar_url];
        })

        this.props.setHandle(this.props.imageUsername); // updates githandle
        this.props.setFollowers(arrResults);
      })
      .catch((error) => {
        alert('error looking up username');
      });
  }

  render() {
    return (
      <div onClick={this.searchUser} className="AvatarImg">
        <Image src={this.props.imageUrl} responsive rounded/>
      </div>
    );
  }
}

export default AvatarImages;
