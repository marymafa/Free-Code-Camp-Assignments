
import React from "react";
import { getIniatialAliveCells, makeGrid, getAliveNeighbors, getNearestNeighbors } from "./gameoflife";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
        }
    }
    componentDidMount() {
        this.setState({
            grid: getIniatialAliveCells(),
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
        console.log(this.state.grid)
        return (
            <div>
                <button className="button">Start</button>
                <button className="button">Setup</button>
                <button className="button">stop</button>
                <button className="button">Restart</button>
                <div className="grid">{
                    this.state.grid.map(element => {
                        return <button class="grid-containers" id={element.status}>{element.status}</button>
                    })
                }</div>
            </div>

        )
    }
}