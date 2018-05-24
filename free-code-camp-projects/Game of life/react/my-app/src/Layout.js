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

    setUpCells(element) {
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
            clearInterval(this.calculateGenerations)
        }, 1000)
        console.log("gene", generation)
        this.setState(
            {
                aliveCells: generation
            }
        )
        return calculateGeneration;

    }
    clearTheBoard() {
        this.setState({
            aliveCells: [], grid: gol.makeGrid(),
        });

    }
    changeGrid(initialiseCells) {
        var grid = gol.makeGrid();
        for (var i in initialiseCells) {
            for (var j in grid) {
                console.log("initialiseCells", grid[j], initialiseCells[i])
                if (initialiseCells[i].x === grid[j].x && initialiseCells[i].y === grid[j].y) {
                    grid[j] = { ...initialiseCells[i] }
                }
            }
        }
        return grid
    }

    getRandomVals() {
        var board = [];
        var aliveCells = this.state.aliveCells;
        for (var i = 0; i < 18; i++) {
            for (var j = 0; j < 18; j++) {
                var randomCells = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20), status: "Alive" }

                board.push(randomCells)

            }

        }
        return board;
    }

    setUpTheBoardRandomly() {
        var random = this.getRandomVals();

        this.setState({
            grid: this.changeGrid(random), aliveCells: random
        })
    }

    render() {
        return (
            <div>
                <h1>Game Of Life</h1>
                <button className="button" onClick={this.startGame.bind(this)}>Play</button>
                <button className="button" onClick={this.clearTheBoard.bind(this)}>Clear</button>
                <button className="button" onClick={this.setUpTheBoardRandomly.bind(this)}>Random</button>
                <div className="grid">{
                    this.state.grid.map(element => {
                        return <button className="grid-containers" onClick={() => this.setUpCells(element)} id={element.status}>{this.element}</button>
                    })
                }</div>
            </div>

        )
    }
}