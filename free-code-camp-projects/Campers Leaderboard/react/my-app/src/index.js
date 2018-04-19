import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import axios from 'axios';

class Camper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campers: []
    }


  }

  recent() {
    axios.get(
      `https://fcctop100.herokuapp.com/api/fccusers/top/recent`
    )
      .then(res => {
        const campers = res.data;
        this.setState({ campers });
      })

  }
  componentDidMount() {
    axios.get(
      `https://fcctop100.herokuapp.com/api/fccusers/top/alltime`
    )

      .then(res => {
        const campers = res.data;
        this.setState({ campers });
      })
  }

  render() {

    return (
      <div>
        <a class="footer-font" href="https://codepen.io/marymafa">Coded by Mary Mafa</a>
        <div>Camper's Leaderboard</div>
        <div>
          <button  bsStyle="success" onClick={this.componentDidMount.bind(this)}>Click here for recent</button>
          <button bsStyle="success" onClick={this.recent.bind(this)}>Click here for alltime</button>
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
              this.state.campers.map(campers =>
                <tr>
                  <td><img alt="" src={campers.img} /></td>
                  <td>{campers.username}</td>
                  <td>{campers.recent}</td>
                  <td>{campers.alltime}</td>
                  <td>{campers.lastUpdate}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}
ReactDOM.render(<Camper />, document.getElementById('root'));