import React from 'react';
import $ from 'jquery';
import PageList from './PageList.jsx';
import VideoViewersWrapper from './VideoViewersWrapper.jsx';
import PageController from './PageController.jsx';

export default React.createClass({
  getInitialState: function(){
    return {
      videoData: [],
      watchedVideos: [],
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
        watchedVideos: data.slice(0, this.state.videosPerPage + 1)
      });
    }.bind(this));
  },

  _handleChangePage: function(page) {
    let firstIndex = (page - 1) * this.state.videosPerPage;
    let lastIndex = firstIndex + this.state.videosPerPage;
    let watchedVideos = this.state.videoData.slice(firstIndex, lastIndex);
    this.setState({
      actualPage: page,
      watchedVideos: watchedVideos
    });
  },

  render: function() {
    if (this.state.videoData.length === 0){
      return <div className="app-wrapper"></div>;
    }else {
      return (
        <div className="app-wrapper">
          <PageList actualPage={this.state.actualPage} totalPages={this.state.totalPages} onChangePage={this._handleChangePage} />
          <PageController totalPages={this.state.totalPages} onChangePage={this._handleChangePage}/>
          <VideoViewersWrapper watchedVideos={this.state.watchedVideos} actualPage={this.state.actualPage} videosPerPage={this.state.videosPerPage} />
          <PageController totalPages={this.state.totalPages} onChangePage={this._handleChangePage}/>
          <PageList actualPage={this.state.actualPage} totalPages={this.state.totalPages} onChangePage={this._handleChangePage} />
        </div>
      );
    }
  }
});
