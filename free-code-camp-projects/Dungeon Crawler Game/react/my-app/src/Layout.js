import React from "react";
import *as dungeon from "./dungeon-crawler";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: dungeon.creatingPath(),
            enemies: [5],
            weapon: [14],
            health: [100],
            player: { x: 1, y: 0 },
            oldLoction: { x: 1, y: 0 }

        }
        this.movePlayer = this.movePlayer.bind(this);
    }
    componentDidMount() {
        document.onkeydown = this.movePlayer;
        var gridWithPaths = dungeon.creatingPath()
        this.setState({ grid: this.CombiningRandoms(gridWithPaths) });

    }
    GetRandomEnemies(grid) {
        var getEnenmies = this.state.enemies;
        console.log("grid", grid)
        for (var i = 0; i < 8; i++) {
            var index = Math.floor(Math.random() * grid.length)
            if (grid[index].pathway === 'true' && grid[index].containing === null) {
                grid[index].containing = <p>&#x2639;</p>;

            }
        }
        return grid;
    }
    RandomHealths(grid) {
        var getEnenmies = this.state.enemies;
        console.log("grid", grid)
        for (var i = 0; i < 8; i++) {
            var index = Math.floor(Math.random() * grid.length)
            if (grid[index].pathway === 'true' && grid[index].containing === null) {
                grid[index].containing = <p> &#x265E;</p>;
            }
        }
        return grid;
    }
    randomWeapons(grid) {
        var getEnenmies = this.state.enemies;
        console.log("grid", grid)
        for (var i = 0; i < 8; i++) {
            var index = Math.floor(Math.random() * grid.length)
            if (grid[index].pathway === 'true' && grid[index].containing === null) {
                grid[index].containing = <p>&#x2692;</p>;
            }
        }
        return grid;
    }
    CombiningRandoms(grid) {
        var enemies = this.GetRandomEnemies(grid);
        var weapons = this.randomWeapons(enemies);
        var healths = this.RandomHealths(weapons);
        return healths;
    }
    randomValues() {
        var random = this.GetRandomEnemies();
        this.setState({
            grid: dungeon.creatingPath(random),
        })
    }
    movePlayer(event) {
        var playerPosition = this.state.player;
        var oldLoction = this.state.player;
        if (event.key === "ArrowLeft") {
            playerPosition = { x: playerPosition.x, y: playerPosition.y - 1 }
        } else if (event.key === "ArrowRight") {
            playerPosition = { x: playerPosition.x, y: playerPosition.y + 1 }
        } else if (event.key === "ArrowUp") {
            playerPosition = { x: playerPosition.x - 1, y: playerPosition.y }
        } else if (event.key === "ArrowDown") {
            playerPosition = { x: playerPosition.x + 1, y: playerPosition.y }
        }
        // var field = this.state.grid
        // var newPlayerPosition = field.find(cell => cell.x === playerPosition.x && cell.y === playerPosition.y);
        // console.log("player", newPlayerPosition)
        // for (var i = 0; i < field.length; i++) {
        //     if (field[i].x === newPlayerPosition.x && field[i].y === newPlayerPosition.y && field[i].containing === '&#x2639;') {
        //         field[i].containing === null
        //     }
        // }
        this.setState({ player: playerPosition, oldLoction: oldLoction })//, grid: field 
    }
    render() {
        return (
            <div>
                <h1>Dungeon Crawler Game</h1>
                <h2 > &#x2692;Weapon:{this.state.weapon}</h2>
                <h2 > &#x265E;Health:{this.state.health}</h2>
                <h2 >&#x2639;Enemies:{this.state.enemies}</h2>
                <div className="grid">{
                    this.state.grid.map(element => {
                        if (element.x === this.state.oldLoction.x && element.y === this.state.oldLoction.y) {
                            element.containing = null;
                        }
                        if (element.x === this.state.player.x && element.y === this.state.player.y) {
                            element.containing = <p className="icon">&#x26F9;</p>;
                        }
                        return <button className="grid" className={element.pathway} >{element.containing}</button>
                    })
                } </div>
            </div>
        )
    }
}
