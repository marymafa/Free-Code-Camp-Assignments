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
            element.status = "dead"
            newGrid.push(element);
        } else if (element.status === "dead") {
            element.status = "Alive"
            newGrid.push(element)
        }
        this.setState({
            aliveCells: newGrid,
        })
        return newGrid
    }

    startGame() {
        var generation = this.state.aliveCells;
        var calculateGeneration = setInterval(function () {
            if (generation !== undefined) {
                generation: generation
            }

        }, 1000)

        this.setState(
            {
                aliveCells: generation
            }
        )

        console.log("it's really working?", generation)
    }

    render() {

        return (
            <div>
                <button className="button" onClick={this.startGame.bind(this)}>Start Game</button>
                <div className="grid">{
                    this.state.grid.map(element => {
                        return <button className="grid-containers" onClick={() => this.setUpTheBoard(element)} id={element.status}>{this.element}</button>
                    })
                }</div>
            </div>

        )
    }
}