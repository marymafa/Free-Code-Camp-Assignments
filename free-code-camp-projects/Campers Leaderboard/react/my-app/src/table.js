
import React from "react";

export default class Table extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return (
            <div>
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

