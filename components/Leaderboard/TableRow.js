import React from 'react';
import ReactDOM from 'react-dom';

class TableRow extends React.Component {
  render() {
    return (
      <div className = "tableRow">
        <p className = "rank">{this.props.index + 1}</p>
        <p className = "camperName"><img src={this.props.image}/>{this.props.username}</p>
        <p className = "pointsLast30">{this.props.recent}</p>
        <p className = "pointsAllTime">{this.props.allTime}</p>
      </div>
    );
  }
}

module.exports = TableRow;