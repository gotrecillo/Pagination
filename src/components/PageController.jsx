import React from 'react';

export default React.createClass({
  propTypes: {
    totalPages: React.PropTypes.number,
    onChangePage: React.PropTypes.func
  },

  handleButtonClick: function(page) {
    this.props.onChangePage(page);
  },

  render: function() {
    return (
      <div className='page-controller-wrapper'>
        <button className='btn' onClick={this.handleButtonClick.bind(null, 1)}>&lt;&lt;</button>
        <button className='btn' onClick={this.handleButtonClick.bind(null, this.props.totalPages)}>&gt;&gt;</button>
      </div>
    );
  }
});
