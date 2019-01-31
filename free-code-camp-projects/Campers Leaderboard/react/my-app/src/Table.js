import React from "react";
import axios from 'axios';

export default class Camper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            table: [],
        }


    }

    componentDidMount() {
        var campers = axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then(function (result) {
            this.setState({
                table: result.data
            });
        });
        console.log("alltime", campers)
    }
    getRecent() {
        var campers = axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(function (result) {
            this.setState({
                table: result.data
            });
        });
        console.log("recent", campers)
    }

    render() {
        console.log("state", this.state)
        return (
            <div>
                <a class="footer-font" href="https://codepen.io/marymafa">Coded by Mary Mafa</a>
                <div>Camper's Leaderboard</div>
                <div>
                    <button bsStyle="success" onClick={this.getRecent.bind(this)}>Click here for recent</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                img
  </th>
                            <th>
                                username
  </th>
                            <th>
                                recent
  </th>
                            <th>
                                lastUpdate
  </th>
                            <th>
                                alltime
  </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.table.map(camper =>
                                <tr>
                                    <td><img alt="" src={camper.img} /></td>
                                    <td>{camper.username}</td>
                                    <td>{camper.recent}</td>
                                    <td>{camper.alltime}</td>
                                    <td>{camper.lastUpdate}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}