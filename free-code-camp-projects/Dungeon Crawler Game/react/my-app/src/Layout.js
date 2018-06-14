import React from "react";
import *as dungeon from "./dungeon-crawler";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: dungeon.creatingPath(),
            enemies: [],
            player: { x: 5, y: 0 }
        }
        this.movePlayer = this.movePlayer.bind(this);
    }
    componentDidMount() {
        document.onkeydown = this.movePlayer;
        this.setState({ grid: dungeon.creatingPath() });
    }
    GetRandomEnemies() {
        var getEnenmies = this.state.enemies;
        for (var i = 0; i < 8; i++) {
            var randomEnemies = { x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10), enemies: <p> &#x26DF;</p> };
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
    }

    movePlayer(event) {
        var keys = this.state.player
        if (event.key === "ArrowLeft") {
            keys = { x: keys.x, y: keys.y - 1 }
        } else if (event.key === "ArrowRight") {
            keys = { x: keys.x, y: keys.y + 1 }
        } else if (event.key === "ArrowUp") {
            keys = { x: keys.x - 1, y: keys.y }
        } else if (event.key === "ArrowDown") {
            keys = { x: keys.x + 1, y: keys.y }
        }
        console.log("event", keys)
        console.log("player", this.state.player)

        this.setState({ player: keys })

    }
    render() {
        return (
            <div>
                <h1>Dungeon Crawler Game</h1>
                <div className="grid">{
                    this.state.grid.map(element => {
                        if (element.x === this.state.player.x && element.y === this.state.player.y) {
                            element.display = <p className="icon">&#x26F9;</p>;
                        } else if (element.x === 5 && element.y === 2) {
                            element.display = <p className="icon">  &#x2639;</p>
                        } else if (element.x === 4 && element.y === 4) {
                            element.display = <p className="icon"> &#x265E;</p>
                        } else if (element.x === 5 && element.y === 4) {
                            element.display = <p className="icon"> &#x2692;</p>
                        } else if (element.x === 1 && element.y === 2) {
                            element.display = <p className="icon"> &#x26DF;</p>
                        } else {
                            element.display = null;
                        }
                        return <button className="grid" id={element.pathway} >{element.display}</button>
                    })
                }</div>
            </div>
        )
    }
}
