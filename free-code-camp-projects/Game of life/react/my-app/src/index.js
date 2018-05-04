
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";



class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(23).fill(null),
        };
        console.log("value", this.state.squares)
    }

    renderSquare(i) {
        return <Grid value={"red"} />;
    }

    render() {
        return (
            <div>
            <div className="grid">{this.squares}</div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );
    }
}


ReactDOM.render(<Grid />, document.getElementById("root"));

