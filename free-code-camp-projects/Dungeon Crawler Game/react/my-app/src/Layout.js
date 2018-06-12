import React from "react";
import *as dungeon from "./dungeon-crawler";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: dungeon.creatingPath(),
            enemies: [],
        }
    }
    componentDidMount() {
        this.randomValues()
        this.setState({ grid: dungeon.creatingPath() });
        // var user = this.state.grid.find(e => {
        //     return e.x === 5 && e.y === 0
        // });
    }
    GetRandomEnemies() {
        var getEnenmies = this.state.enemies;
        for (var i = 0; i < 10; i++) {
            var randomEnemies = { x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10), enemies: <p className="icon">&#x2639;</p> };
            if (getEnenmies.indexOf(randomEnemies) === -1) {
                getEnenmies.push(randomEnemies)
            }
        }

        return getEnenmies;
    }

    randomValues() {
        var random = this.GetRandomEnemies();
        this.setState({
            grid: dungeon.creatingPath(random),
        })
        console.log("hey", random)

    }

    render() {
        return (
            <div>
                <h1>Dungeon Crawler Game</h1>
                <div className="grid">{
                    this.state.grid.map(element => {
                        if (element.x === 5 && element.y === 0) {
                            element.display = <p className="icon">&#x26F9;</p>;
                        } else if (element.x === 5 && element.y === 2) {
                            element.display = <p className="icon">  &#x2639;</p>
                        } else if (element.x === 4 && element.y === 4) {
                            element.display = <p className="icon"> &#x265E;</p>
                        } else if (element.x === 5 && element.y === 4) {
                            element.display = <p className="icon"> &#x2692;</p>
                        } else if (element.x === 1 && element.y === 2) {
                            element.display = <p className="icon"> &#x26DF;</p>
                        }else {
                            element.display = null;
                        }
                        return <button className="grid" id={element.pathway} >{element.display}</button>
                    })
                }</div>
            </div>
        )
    }
}