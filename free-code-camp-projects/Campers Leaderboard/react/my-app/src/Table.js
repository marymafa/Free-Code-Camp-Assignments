import React from "react";
import axios from 'axios';

export default class Camper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         Table: []
        }


    }

    getCamper(Api) {
        axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/" + Api)
        .then(res => {
            this.setState({ Table: res.Table });
        })
}

  
    render() {

        return (
            <div>
                <a class="footer-font" href="https://codepen.io/marymafa">Coded by Mary Mafa</a>
                <div>Camper's Leaderboard</div>
                <div>
                    <button bsStyle="success" onClick={this.getCamper.bind(this)}>Click here for recent</button>
                    <button bsStyle="success" onClick={this.getCamper.bind(this)}>Click here for alltime</button>
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
                            this.state.Table.map(Table =>
                                <tr>
                                    <td><img alt="" src={Table.img} /></td>
                                    <td>{Table.username}</td>
                                    <td>{Table.recent}</td>
                                    <td>{Table.alltime}</td>
                                    <td>{Table.lastUpdate}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}