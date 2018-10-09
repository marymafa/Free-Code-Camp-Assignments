import React from "react";
import { connect } from "react-redux";
import * as action from "../redux/actions";
import makingPathWays from '../game-functions';
import { updateGrid } from '../game-functions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: this.props.grid,
        }
        this.movePlayer = this.movePlayer.bind(this);
    }
    componentDidMount() {
        document.onkeydown = this.movePlayer;
        this.randomValues();
        this.props.buildGrid();
    }
    randomValues() {
        var gridWithPaths = this.props.grid
        this.setState({ grid: this.combiningRandoms(gridWithPaths) });
    }
    movePlayer(event) {
        var playerPosition = this.props.player;
        var oldLoction = this.props.player;
        if (event.key === "ArrowLeft") {
            playerPosition = { x: playerPosition.x, y: playerPosition.y - 1 }
        } else if (event.key === "ArrowRight") {
            playerPosition = { x: playerPosition.x, y: playerPosition.y + 1 }
        } else if (event.key === "ArrowUp") {
            playerPosition = { x: playerPosition.x - 1, y: playerPosition.y }
        } else if (event.key === "ArrowDown") {
            playerPosition = { x: playerPosition.x + 1, y: playerPosition.y }
        }
        var grid = this.state.grid;
        console.log("heka", this.state.grid.find((ele) => { ele.x === grid.x && ele.y === grid.y }))

        var newGrid = updateGrid(playerPosition, this.props.enemy, this.props.healths, this.props.weapons);
        this.props.playerMove({ new: playerPosition, old: oldLoction, grid: newGrid });
        this.props.buildGrid(newGrid);
        this.setState({ grid: newGrid })

        return playerPosition;
    }
    GetRandomEnemies() {
        var grid = this.props.grid
        var enemies = [];
        for (var i = 0; i < 8; i++) {
            var index = Math.floor(Math.random() * grid.length)
            if (grid[index].pathway === 'true' && grid[index].containing === null) {
                grid[index].containing = "enemies";
                enemies.push(grid[index]);
            }
        }
        this.props.updateEnemies(enemies);
        return grid;
    }
    RandomHealths() {
        var grid = this.props.grid;
        var healths = [];
        for (var i = 0; i < 8; i++) {
            var index = Math.floor(Math.random() * grid.length)
            if (grid[index].pathway === 'true' && grid[index].containing === null) {
                grid[index].containing = "health";
                healths.push(grid[index]);
            }
        }
        this.props.updateHealths(healths);
        return grid;
    }
    randomWeapons() {

        var grid = this.props.grid;
        var weapons = [];
        for (var i = 0; i < 8; i++) {
            var index = Math.floor(Math.random() * grid.length)
            if (grid[index].pathway === 'true' && grid[index].containing === null) {
                grid[index].containing = "weapon";
                weapons.push(grid[index]);
            }
        }
        this.props.updateWeapons(weapons)
        return grid;
    }
    combiningRandoms() {
        var grid = this.props.grid
        var enemies = this.GetRandomEnemies(grid);
        var weapons = this.randomWeapons(enemies);
        var healths = this.RandomHealths(weapons);
        return healths;
    }
    render() {
        console.log("this.props", this.props);

        return (
            <div>
                <h1>Roguelike Dungeon Crawler Game</h1>
                <h2>Dungeon:{this.props.Dungeon}</h2>
                <h2>Kill the boss in dungeon 3</h2>
                <h3>experience  :{this.props.xP}</h3>
                <h3>Health:{this.props.health}</h3>
                <div className="grid">{
                    this.state.grid.map(element => {
                        if (element.containing === this.props.oldLoction) {
                            element.containing = null;
                        } else if (element.containing === "player") {
                            element.containing = "none"
                            element.icon = <p className="icon"><span>&#x26F9;</span></p>;
                        } else if (element.containing === "enemies") {
                            element.icon = <p className="icon"><span> &#9760;</span></p>;
                        } else if (element.containing === "health") {
                            element.icon = <p className="icon"><span>&#x26D1;</span></p>;
                        } else if (element.containing === "weapon") {
                            element.icon = <p className="x"><span>&#x2692;</span></p>;
                        }
                        return <button className="grid" className={element.pathway} >{element.icon}</button>
                    })
                } </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        state: state,
        grid: state.grid,
        player: state.player,
        xP: state.xP,
        enemy: state.enemies,
        Dungeon: state.Dungeon,
        healths: state.healths,
        weapons: state.weapons
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buildGrid: newGrid => {
            dispatch(action.createGrid(newGrid))
        },
        playerMove: oldAndNewMoves => {
            dispatch(action.movePlayer(oldAndNewMoves))
        },
        randomVals: randomIcons => {
            dispatch(action.returnRandomVals(randomIcons))
        },
        attackingTheEnemy: () => {
            dispatch(action.attackEnemy())
        },
        updateEnemies: (newEnemies) => {
            dispatch(action.storeEnemies(newEnemies))
        },
        updateHealths: (newHealths) => {
            dispatch(action.storeHealths(newHealths))
        },
        updateWeapons: (newWeapons) => {
            dispatch(action.storeWeapons(newWeapons))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
