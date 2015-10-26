import React from 'react';
import $ from 'jquery';
import PageList from './PageList.jsx';
import VideoViewersWrapper from './VideoViewersWrapper.jsx';

export default React.createClass({
  getInitialState: function(){
    return {
      videoData: [],
      actualPage: 0,
      totalPages: 0,
      videosPerPage: 10,
    };
  },

  componentDidMount: function(){
    this._retrieveVideos();
  },

  _retrieveVideos: function(){
    $.getJSON( "http://jetclips.herokuapp.com/api/v1/videos/489159771140559", function( data ) {
       let totalVideos = data.length;
       let totalPages = Math.ceil(totalVideos / this.state.videosPerPage);
       this.setState({
        videoData: data,
        actualPage: 1,
        totalPages: totalPages,
      });
    }.bind(this));
  },

  _handleChangePage: function(page) {
    this.setState({
      actualPage: page
    });
  },

  render: function() {
    return (
      <div className="app-wrapper">
        <PageList actualPage={this.state.actualPage} totalPages={this.state.totalPages} onChangePage={this._handleChangePage} />
        <VideoViewersWrapper videos={this.state.videoData} actualPage={this.state.actualPage} videosPerPage={this.state.videosPerPage} />
        <PageList actualPage={this.state.actualPage} totalPages={this.state.totalPages} onChangePage={this._handleChangePage} />
      </div>
    );
  }
});
