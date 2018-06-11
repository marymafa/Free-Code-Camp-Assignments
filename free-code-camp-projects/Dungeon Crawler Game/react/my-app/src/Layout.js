import React from "react";
import *as dungeon from "./dungeon-crawler";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid:dungeon.creatingPath(),
        }
    }
    componentDidMount() {
        this.setState({ grid: dungeon.creatingPath() })
    }
    render() {
        console.log("state",this.state.grid)
        return (
            <div>
                <h1>Dungeon Crawler Game</h1>
                <div className="grid">{
                    this.state.grid.map(element => {
                        return <button className="grid" id={element.pathway} >{this.element}</button>
                    })
                }</div>
            </div>
        )
    }
}