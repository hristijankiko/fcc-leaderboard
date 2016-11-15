import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import TableRow from './Leaderboard/TableRow.js';

class Leaderboard extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            allTime: 'empty'
        }
    }
    componentDidMount(){
        $.ajax({
            url: "https://fcctop100.herokuapp.com/api/fccusers/top/recent",
        }).done(function(data){
            this.setState({data});
            console.log(this.state.data);
        }.bind(this));
    }
    render() {
        return (
            <div className="container">
            <h1>FreeCodeCamp Leaderboard</h1>
            <TableRow recent={this.data.state.recent} allTime={255225} username={"username"} />
            </div>
        );
    }
}

ReactDOM.render(
    <Leaderboard />,
    document.getElementById('app')
);