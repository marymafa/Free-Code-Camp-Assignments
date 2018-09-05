import React from "react";
import *as dungeon from "./dungeon-crawler";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: dungeon.creatingPath(),
            Xp: 0,
            enemy: "stick",
            weapon: "knife",
            health: [100],
            Dungeon: 1,
            player: { x: 1, y: 0 },
            oldLoction: { x: 1, y: 0 },
            count: 1000,

        }
        this.movePlayer = this.movePlayer.bind(this);
    }
    componentDidMount() {
        //this.xpPoints();
        this.attactingTheEnemy();
        document.onkeydown = this.movePlayer;
        var gridWithPaths = dungeon.creatingPath()
        this.setState({ grid: this.CombiningRandoms(gridWithPaths) });

    }
    GetRandomEnemies(grid) {
        for (var i = 0; i < 8; i++) {
            var index = Math.floor(Math.random() * grid.length)
            if (grid[index].pathway === 'true' && grid[index].containing === null) {
                grid[index].containing = <p> &#x26C7;</p>;
            }
        }
        return grid;
    }
    RandomHealths(grid) {
        for (var i = 0; i < 8; i++) {
            var index = Math.floor(Math.random() * grid.length)
            if (grid[index].pathway === 'true' && grid[index].containing === null) {
                grid[index].containing = <p> &#x26D1;</p>;
            }
        }
        return grid;
    }
    randomWeapons(grid) {
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
        // var actions = [];
        // if (playerPosition.weapon && playerPosition.weapon === 'enemy' && playerPosition.weapon !== 'boss') {
        //     actions.push(playerPosition);
        // }

        this.setState({ player: playerPosition, oldLoction: oldLoction })
        console.log("playerPositions", playerPosition)

    }
    attactingTheEnemy() {
        var player = this.state.player;
        var enemy = this.state.enemy
        if (player.containing === "true" && enemy.containing === "true") {
            this.setState({
                player: this.state.health - 10
            })
        }
   v mcbkc     console.log("player", this.state.health);
    }
obsta

    render() {
        return (
            <div>
                <h1>Roguelike Dungeon Crawler Game</h1>
                <h2>Kill the boss in dungeon 3</h2>
                <h3 >Weapon:{this.state.weapon}</h3>
                <h3 >Health:{this.state.health}</h3>
                <h3 >Xp:{this.state.Xp}</h3>
                <h3>Dungeon:{this.state.Dungeon}</h3>
                <div className="grid">{
                    this.state.grid.map(element => {
                        if (element.x === this.state.oldLoction.x && element.y === this.state.oldLoction.y) {
                            element.containing = null;
                        }
                        if (element.x === this.state.player.x && element.y === this.state.player.y) {
                            element.containing = <p className="icon"><span>&#x26F9;</span></p>;
                        }
                        return <button className="grid" className={element.pathway} >{element.containing}</button>
                    })
                } </div>
            </div>
        )
    }
}
