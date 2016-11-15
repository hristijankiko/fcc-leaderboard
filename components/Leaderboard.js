import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import TableRow from './Leaderboard/TableRow.js';
import TableHeaderRow from './Leaderboard/TableHeaderRow.js';

class Leaderboard extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            allTime: 'empty'
        }
        $.ajax({
            url: "https://fcctop100.herokuapp.com/api/fccusers/top/recent",
        }).done(function(data){
            this.setState({data});
        }.bind(this));
    }

    sortByRecent(){
        let data = this.state.data;
        data.sort((a, b) => b.recent - a.recent);
        this.state.data = data;
        this.forceUpdate();
    }

    sortByAllTime(){
        let data = this.state.data;
        data.sort((a, b) => b.alltime - a.alltime);
        this.state.data = data;
        this.forceUpdate()
    }

    render() {
        return (
            <div className="container">
            <h1>FreeCodeCamp Leaderboard</h1>
            <TableHeaderRow sortByAllTime={this.sortByAllTime.bind(this)} sortByRecent={this.sortByRecent.bind(this)} />
            {this.state.data.map((camper, i) => <TableRow key={i} index={i} recent={camper.recent} allTime={camper.alltime} username={camper.username} image={camper.img}/>)}
            </div>
        );
    }
}

ReactDOM.render(
    <Leaderboard />,
    document.getElementById('app')
);