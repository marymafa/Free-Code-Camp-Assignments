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
                if (initialiseCells[i].x === grid[j].x && initialiseCells[i].y === grid[j].y) {
                    console.log('from alive cell', initialiseCells[i])
                    console.log('from grid',grid[j])
                    grid[j] = initialiseCells[i] 
                }
            }
        }
        return grid
    }
    setUpTheBoardRandomly() {
        var aliveCells = [{ x: 0, y: 1, status: "Alive" }, { x: 0, y: 1, status: "Alive" }, { x: 0, y: 2, status: "Alive" }, { x: 4, y: 0, status: "Alive" }, { x: 4, y: 1, status: "Alive" }, { x: 4, y: 2, status: "Alive" }, { x: 9, y: 0, status: "Alive" }, { x: 9, y: 1, status: "Alive" }, { x: 9, y: 2, status: "Alive" }]
        //var RandomPicker = initialiseCells[Math.floor(Math.random() * initialiseCells.length)]
        this.setState({
            grid: this.changeGrid(aliveCells), aliveCells: aliveCells
        })
    }

    render() {
        console.log('alive', this.state.aliveCells);
        console.log('grid', this.state.grid)
        return (
            <div>
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