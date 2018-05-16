
import React from "react";
import *as gol from "./gameoflife";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
            aliveCells: [],
        }
    }
    componentDidMount() {
        this.setState({
            grid: gol.makeGrid(), aliveCells: gol.getAllLivingNeighbors(),
        })
    }



    render() {
        return (
            <div>
                <div className="grid">{
                    this.state.grid.map(element => {
                        return <button className="grid-containers"  id={element.status}>{this.element}</button>
                    })
                }</div>
            </div>

        )
    }
}

