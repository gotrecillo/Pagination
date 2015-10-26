import React from 'react';
import VideoViewer from './VideoViewer.jsx';

export default React.createClass({
  propTypes:{
    videos: React.PropTypes.array,
    actualPage: React.PropTypes.number,
    videosPerPage: React.PropTypes.number
  },

  render: function() {
    if (!this.props.videos) {
      return (
        <div className="video-viewer-wrapper"></div>
      );
    }else {
      let watchedVideos = [];
      let firstInPage = (this.props.actualPage - 1) * this.props.videosPerPage;
      for (let i = 0; i < this.props.videosPerPage; i++) {
        watchedVideos[i] = this.props.videos[firstInPage + i];
      }
      return (
        <div className="video-viewer-wrapper">
          {
            watchedVideos.map(function(value, index) {
              return <VideoViewer key={index} video={value} />;
            })
          }
        </div>
      );
    }
  }
});
