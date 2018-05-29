import React from "react";
import *as gol from "./gameoflife";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        var random = this.getRandomVals();
        this.state = {
            grid: this.changeGrid(random),
            aliveCells: random,
            shouldStop: "no",
            shouldClear: false,
            speed: 1000,
            generation: 0,
        }
    }
    componentDidMount() {
        this.startGame();
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
        var gene = this.state.generation
        var currentGrid = this.state.grid;
        this.setState({
            shouldStop: "no", shouldClear: false,
        })
        console.log("tesi", currentGrid)
        var currentAlive = this.state.aliveCells;
        var generationCal = setInterval(() => {
            var currentGen = this.getAllLivingNeighbors(currentAlive);
            currentAlive = currentGen.aliveCells;
            currentGrid = currentGen.grid;
            this.setState({ grid: currentGrid, aliveCells: currentAlive, generation: gene++ })
            if (currentAlive.length === 0 || this.state.shouldClear) {
                clearInterval(generationCal);
                this.setState({ aliveCells: [], grid: gol.makeGrid(), generation: 0 });
            } else if (this.state.shouldStop === "yes") {
                clearInterval(generationCal)
            }
        }, this.state.speed);
    }
    highSpeed() {
        this.setState({
            speed: this.state.speed - 600
        })
        this.startGame()
        console.log("sp", this.state.speed)
    }
    lowSpeed() {
        this.setState({
            speed: this.state.speed + 400
        })
        this.startGame()
    }
    medium() {
        this.setState({
            speed: this.state.speed + 500
        })
        this.startGame()
    }
    stopGame() {
        this.setState({
            shouldStop: "yes"
        })
    }
    clearTheBoard() {
        this.setState({
            aliveCells: [], grid: gol.makeGrid(), shouldClear: true, generation: 0
        });
    }
    changeGrid(initialiseCells) {
        var grid = gol.makeGrid();
        for (var i in initialiseCells) {
            for (var j in grid) {
                if (initialiseCells[i].x === grid[j].x && initialiseCells[i].y === grid[j].y) {
                    grid[j] = { ...initialiseCells[i] }
                }
            }
        }
        return grid
    }
    getRandomVals() {
        var board = [];
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                var randomCells = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20), status: "Alive" }
                board.push(randomCells)
            }
        }
        return board;
    }
    getNearestNeighbors(initialGrid) {
        var cellWithNeigbours = [];
        var seededGrid = this.changeGrid(initialGrid);
        for (var i in seededGrid) {
            var findNeighbors = [
                { x: seededGrid[i].x + 1, y: seededGrid[i].y },
                { x: seededGrid[i].x - 1, y: seededGrid[i].y },
                { x: seededGrid[i].x, y: seededGrid[i].y + 1 },
                { x: seededGrid[i].x, y: seededGrid[i].y - 1 },
                { x: seededGrid[i].x + 1, y: seededGrid[i].y + 1 },
                { x: seededGrid[i].x + 1, y: seededGrid[i].y - 1 },
                { x: seededGrid[i].x - 1, y: seededGrid[i].y + 1 },
                { x: seededGrid[i].x - 1, y: seededGrid[i].y - 1 }
            ];
            var realVals = []
            for (var c of findNeighbors) {
                realVals.push(seededGrid.find((e) => e.x === c.x && e.y === c.y))
            }
            var real = realVals.filter((coord) => coord !== undefined);
            cellWithNeigbours.push({ coord: { x: seededGrid[i].x, y: seededGrid[i].y, status: seededGrid[i].status }, neighbours: real })
        }
        return cellWithNeigbours;
    }
    getAllLivingNeighbors(initialGrid) {
        var newGrid = this.getNearestNeighbors(initialGrid);
        var finalGrid = [];
        var onlyAlive = [];
        for (var i in newGrid) {
            var cell = {};
            var deadCells = [];
            var liveCells = [];
            for (var t in newGrid[i].neighbours) {
                if (newGrid[i].neighbours[t].status === "Alive") {
                    liveCells.push(newGrid[i].neighbours[t])
                } else if (newGrid[i].neighbours[t].status === "dead") {
                    deadCells.push(newGrid[i].neighbours[t])
                }
            }
            if (newGrid[i].coord.status === "Alive" && liveCells.length === 3) {
                cell = { x: newGrid[i].coord.x, y: newGrid[i].coord.y, status: "Alive" }
            } else if (newGrid[i].coord.status === "dead" && liveCells.length === 3) {
                cell = { x: newGrid[i].coord.x, y: newGrid[i].coord.y, status: "Alive" }
            } else if (newGrid[i].coord.status === "Alive" && (liveCells.length < 2 || liveCells.length > 3)) {
                cell = { x: newGrid[i].coord.x, y: newGrid[i].coord.y, status: "dead" }
            } else {
                cell = newGrid[i].coord
            }
            finalGrid.push(cell)
        }
        onlyAlive = finalGrid.filter(element => {
            return element.status === "Alive";
        });
        return { grid: finalGrid, aliveCells: onlyAlive };
    }
    render() {
        return (
            <div>
                <h1>Game Of Life</h1>
                <button className="button" onClick={this.startGame.bind(this)}>Play</button>
                <button button className="button" onClick={this.stopGame.bind(this)}>Stop</button>
                <button className="button" onClick={this.clearTheBoard.bind(this)}>Clear</button>
                <h2>Generation:{this.state.generation}</h2>
                <button className="button" onClick={this.highSpeed.bind(this)}>highSpeed</button>
                <button className="button" onClick={this.medium.bind(this)}>medium</button>
                <button className="button" onClick={this.lowSpeed.bind(this)}>lowSpeed</button>

                <div className="grid">{
                    this.state.grid.map(element => {
                        return <button className="grid-containers" onClick={() => this.setUpCells(element)} id={element.status}>{this.element}</button>
                    })
                }</div>
            </div>
        )
    }
}