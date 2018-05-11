
import React from "react";
import { getNearestNeighbors } from "./gameoflife";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
        }
    }
    componentDidMount() {
        this.setState({
            grid: getNearestNeighbors(),
        })
    }

    start() {
        this.setState({})
    }
    stop() {
        this.setState({})
    }
    setup() {
        this.setState({})
    }
    restart
        () {
        this.setState({})
    }

    render() {
        console.log("trdy", this.state.grid)
        return (
            <div>
                <button className="button">Start</button>
                <button className="button">Setup</button>
                <button className="button">stop</button>
                <button className="button">Restart</button>
                <div className="grid">{
                    this.state.grid.map(element => {
                        return <button className="grid-containers" id={element.coord.status}>{element.coord.status}</button>
                    })
                }</div>
            </div>

        )
    }
}