import React from "react";

class AvatarImages extends React.Component {
  renderImage(imageUrl) {
    return (
      <div>
        <img src={imageUrl} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
        </div>
      </div>
    );
  }
}
// AvatarImages.propTypes = {
//   imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
// };
export default AvatarImages;