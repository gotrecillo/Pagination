import React from 'react';
import PageButton from './PageButton.jsx';

export default React.createClass({
  propTypes: {
    actualPage: React.PropTypes.number,
    totalPages: React.PropTypes.number,
    onChangePage: React.PropTypes.func
  },

  _isOfTheFirstOnes: function() {
    return this.props.actualPage < 6;
  },

  _isOfTheLastOnes: function() {
    return this.props.actualPage > (this.props.totalPages - 5);
  },

  render() {
    let remainingPages = this.props.totalPages - this.props.actualPage;
    let offset = this._isOfTheFirstOnes() ? 1 :
                 this._isOfTheLastOnes() ? this.props.actualPage - (9 - remainingPages) + 1 :
                                           this.props.actualPage - 4;
    let pagesToList = (this.props.totalPages < 10) ? this.props.totalPages : 9;
      return (
        <div className="page-list">
          {
            Array.apply(null, {length: pagesToList}).map(function(value, index){
              return (
                <PageButton
                  key={index}
                  page={index + offset}
                  actualPage={this.props.actualPage}
                  onChangePage={this.props.onChangePage}
                  >
                </PageButton>
              );
            }.bind(this))
          }
        </div>
      );
    }
});
