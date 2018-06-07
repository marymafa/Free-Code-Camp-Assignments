import React from "react";
import *as gol from "./gameoflife";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        var random = this.getRandomVals()
        this.state = {
            grid: [],
            aliveCells: random,
            shouldStop: "no",
            shouldClear: false,
            speed: 1000,
            generation: 0,
            generationCal: "",
        }

    }
    componentDidMount() {
        this.setState({ grid: gol.makeGrid() })
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
        this.state.generationCal = setInterval(() => {
            var currentAlive = this.continuousGrid();
            // console.log('currentAlive', currentAlive);
            var currentGen = this.getAllLivingNeighbors(currentAlive);
            // console.log("currentGen", currentGen)
            currentAlive = currentGen.aliveCells;
            currentGrid = currentGen.grid;
            this.setState({ grid: currentGrid, aliveCells: currentAlive, generation: gene++ })
            if (currentAlive.length === 0 || this.state.shouldClear) {
                clearInterval(this.state.generationCal);
                this.setState({ aliveCells: [], grid: gol.makeGrid(), generation: 0 });
            } else if (this.state.shouldStop === "yes") {
                clearInterval(this.state.generationCal)
            }
        }, this.state.speed);
    }
    highSpeed() {
        this.setState({
            speed: this.state.speed - 600
        })
        clearInterval(this.state.generationCal);
        this.startGame();
    }
    lowSpeed() {
        this.setState({
            speed: this.state.speed + 400
        })
        clearInterval(this.state.generationCal);
        this.startGame();
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
        for (var i = 0; i < 100; i++) {
            var randomCells = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20), status: "Alive" };
            if (board.indexOf(randomCells) == -1) {
                board.push(randomCells)
            }
        }
        return board;
    }
    randomPicker() {
        var random = this.getRandomVals()
        this.setState({ grid: this.changeGrid(random) })
        this.startGame();
    }

    getNearestNeighbors(initialGrid) {
        var cellWithNeigbours = [];
        var seededGrid = initialGrid;
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
        var cellAlive = [];
        console.log(initialGrid.filter(e => e.status === "Alive"))
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
        var onlyAlive = finalGrid.filter(element => {
            return element.status === "Alive";
        });
        finalGrid = this.changeGrid(finalGrid)
        return { grid: finalGrid, aliveCells: onlyAlive };
    }

    continuousGrid() {
        var findingAliveCells = this.state.aliveCells;
        var onlyX = [];
        var onlyY = [];
        for (var i = 0; i < findingAliveCells.length; i++) {
            onlyX.push(findingAliveCells[i].x);
            onlyY.push(findingAliveCells[i].y);
        }
        var lowestX = onlyX.sort(function (a, b) { return a - b })[0];
        var lowestY = onlyY.sort(function (a, b) { return a - b })[0];
        var highestX = onlyX.sort(function (a, b) { return b - a })[0];
        var highestY = onlyY.sort(function (a, b) { return b - a })[0];
        var gridToDisplay = [];
        for (var i = lowestX - 1; i < highestX + 1; i++) {
            for (var j = lowestY - 1; j < highestY + 1; j++) {
                var cell = { x: i, y: j };
                var foundCell = findingAliveCells.find(e => e.x === cell.x && e.y === cell.y);
                cell = foundCell ? { ...foundCell } : { ...cell, status: "dead" }
                gridToDisplay.push(cell);
            }
        }
        return gridToDisplay;
    }

    render() {
        return (
            <div>
                <h1>Game Of Life</h1>
                <button className="button" onClick={this.startGame.bind(this)}>Play</button>
                <button button className="button" onClick={this.stopGame.bind(this)}>Stop</button>
                <button className="button" onClick={this.clearTheBoard.bind(this)}>Clear</button>
                <button button className="button" onClick={this.randomPicker.bind(this)}>randomCells</button>
                <h2>Generation:{this.state.generation}</h2>
                <button className="button" onClick={this.highSpeed.bind(this)}>highSpeed</button>
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