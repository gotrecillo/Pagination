import React from 'react';

export default React.createClass({
  propTypes: {
    page: React.PropTypes.number,
    actualPage: React.PropTypes.number,
    onChangePage: React.PropTypes.func
  },

  handleButtonClick: function() {
    this.props.onChangePage(this.props.page);
  },

  render: function() {
    let btnClass = this.props.page === this.props.actualPage ? "btn btn-selected" : "btn";

    return (
      <button onClick={this.handleButtonClick} className={btnClass}>{this.props.page}</button>
    );
  }
});
