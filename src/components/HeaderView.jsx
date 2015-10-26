import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="head-view">
        <h2>Videos
          <small>{this.props.actualPage}</small>
          /
          <small>{this.props.totalPages}</small>
        </h2>
      </div>
    );
  }
});
