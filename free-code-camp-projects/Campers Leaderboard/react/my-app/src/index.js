  import React from "react";
  import ReactDOM from "react-dom";
  import './index.css';
  import axios from 'axios';

export default class Persontdst extends React.Component {
  state = {
    campers: []
  }

  componentDidMount() {
    axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/recent`,
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
        <div>Campers Leaderboard</div>
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
            <td><img alt=""  src={campers.img}/></td>
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
  ReactDOM.render(<Persontdst/>,document.getElementById('root'))