import React from 'react';
import $ from 'jquery';
import HeadView from 'HeadView.jsx';

export default React.createClass({
  getInitialState: function(){
    return {
      videoData: [],
      currentVideo: 0,
      totalVideos: 0,
      actualPage: 0,
      totalPages: 0,
      videosPerPage: 5,
    };
  },

  componentDidMount: function(){
    this._retrieveVideos();
  },

  _retrieveVideos: function(){
    $.getJSON( "http://jetclips.herokuapp.com/api/v1/videos/489159771140559", function( data ) {
       this.setState({videoData: data, totalVideos: data.length, actualPage:});
    }.bind(this));
  },

  render: function() {
    return (
      <HeadView actualPage={this.props.actualPage} totalPages={this.props.totalPages} />
    );
  }
});
