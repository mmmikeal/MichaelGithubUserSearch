import React from "react";
import { Grid, Row, Col, Image } from 'react-bootstrap';

class AvatarImages extends React.Component {

  renderImage(imageUrl) {
    return (
      <div className="AvatarImg">
        <Image src={imageUrl} responsive rounded/>
      </div>
    );
  }

  render() {
    return (
      <div className="AvatarContainer">
        {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
      </div>
    );
  }
}
// AvatarImages.propTypes = {
//   imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
// };
export default AvatarImages;