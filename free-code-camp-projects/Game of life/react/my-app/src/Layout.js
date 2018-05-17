
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
            grid: gol.makeGrid(),

        })
    }
    setUpTheBoard(element) {
        var newGrid = this.state.aliveCells;
        if (element.status === "Alive") {
            element.status="dead"
            newGrid.push(element);
        } else if (element.status === "dead") {
            element.status="Alive"
            newGrid.push(element)
        }
        this.setState({
            aliveCells: newGrid,
        })
        return newGrid
    }

    render() {
        console.log("state", this.state)
        return (
            <div>
                <div className="grid">{
                    this.state.grid.map(element => {
                        return <button className="grid-containers" onClick={()=>this.setUpTheBoard(element)}  id={element.status}>{this.element}</button>
                    })
                }</div>
            </div>

        )
    }
}

