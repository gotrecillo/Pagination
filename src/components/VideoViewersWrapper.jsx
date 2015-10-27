import React from 'react';
import VideoViewer from './VideoViewer.jsx';

export default React.createClass({
  propTypes:{
    watchedVideos: React.PropTypes.array,
    actualPage: React.PropTypes.number,
    videosPerPage: React.PropTypes.number
  },

  render: function() {
    return (
      <div className="video-viewer-wrapper">
        {
          this.props.watchedVideos.map(function(value, index) {
            return <VideoViewer key={index} video={value} />;
          })
        }
      </div>
    );
  }
});
