import React from 'react';
import ReactDOM from 'react-dom';

class TableHeaderRow extends React.Component {
  render(){
    return (
      <div className = "tableRowHeader">
        <p className = "rankHeader">#</p>
        <p className = "camperNameHeader">Camper Name</p>
        <p className = "pointsLast30Header" onClick={this.props.sortByRecent}>Points in the last 30 days</p>
        <p className = "pointsAllTimeHeader" onClick={this.props.sortByAllTime}>All time points</p>
      </div>
    );
  }
}

module.exports = TableHeaderRow;