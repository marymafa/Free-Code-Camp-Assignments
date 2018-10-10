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
        var newLocation = this.props.player;
        console.log("nextLocationhhh", newLocation)
        var oldLocation = newLocation;

        if (event.key === "ArrowLeft") {
            newLocation = { x: newLocation.x, y: newLocation.y - 1 }
        } else if (event.key === "ArrowRight") {
            newLocation = { x: newLocation.x, y: newLocation.y + 1 }
        } else if (event.key === "ArrowUp") {
            newLocation = { x: newLocation.x - 1, y: newLocation.y }
        } else if (event.key === "ArrowDown") {
            newLocation = { x: newLocation.x + 1, y: newLocation.y }
        }
        var nextLocation = this.state.grid.find(element => {
            return element.x === newLocation.x && element.y === newLocation.y
        })
        if (nextLocation.pathway === "false") {
            newLocation = oldLocation
        } 
        console.log("oldLocationhhh", oldLocation)
        var newGrid = updateGrid(newLocation, this.props.enemy, this.props.healths, this.props.weapons);
        this.props.playerMove({ new: newLocation, old: oldLocation, grid: newGrid });
        this.props.buildGrid(newGrid);
        this.setState({ grid: newGrid })
        return newLocation;
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
        return (
            <div>
                <h1>Roguelike Dungeon Crawler Game</h1>
                <h2>Dungeon:{this.props.Dungeon}</h2>
                <h2>Kill the boss in dungeon 3</h2>
                <h3>experience  :{this.props.xP}</h3>
                <h3>Health:{this.props.health}</h3>
                <div className="grid">{
                    this.state.grid.map(element => {
                        if (element.containing === this.props.oldLocation) {
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
        oldLocation: state.oldLocation,
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
