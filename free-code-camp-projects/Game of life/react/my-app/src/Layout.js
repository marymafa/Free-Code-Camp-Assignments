
import React from "react";
import { getAllLivingNeighbors } from "./gameoflife";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: {},
            grid: [],
            aliveCells: [],
        }
    }
    componentDidMount() {
        var firstGen = getAllLivingNeighbors();
        this.setState({
            results: firstGen, grid: firstGen.grid, aliveCells: firstGen.aliveCells
        })
    }

    start() {
        var i = 0;
        var currentGen = this.state.results;
        var generationCal = setInterval(() => {
            if (currentGen === undefined) {
                currentGen = getAllLivingNeighbors();
            } else {
                currentGen = getAllLivingNeighbors(currentGen)
            }
            this.setState({ grid: currentGen.grid, aliveCells: currentGen.aliveCells })
            if (i === 3) {
                clearInterval(generationCal)
            }
        }, 2000);
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
        return (
            <div>
                <button className="button" onClick={this.start.bind(this)}>Start</button>
                <button className="button">Setup</button>
                <button className="button">stop</button>
                <button className="button">Restart</button>
                <div className="grid">{
                    this.state.grid.map(element => {
                        return <button className="grid-containers" id={element.status}>{element.status}</button>
                    })
                }</div>
            </div>

        )
    }
}