import React from 'react';

export default React.createClass({
  propTypes:{
    video: React.PropTypes.object
  },

  render: function() {
    let title = this.props.video.name || "N/A";
    return (
      <div className="video-viewer">
        <video controls src={this.props.video.source}/>
        <p>Title: {title}</p>
      </div>
    );
  }

});
