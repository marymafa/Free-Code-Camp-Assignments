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
            oldLocation: {},
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
        var previosLocation = this.state.grid.find(element => {
            return element.x === oldLocation.x & element.y === oldLocation.y
        })
        this.setState({ oldLocation: previosLocation })

        if (nextLocation.containing === "health") {
            this.props.increasePlayerHealth(10);
            this.props.removePlayerHealth(nextLocation);
        }
        if (nextLocation.containing === "weapon") {
            this.props.increasePlayerLife(50)
            this.props.removePlayerWeapon(nextLocation)

        }
        if (nextLocation.containing === "enemy") {
            this.props.increaseExperienceOfPlayer(30)
            this.props.removeEnemy(nextLocation)
        }
        if (nextLocation.pathway === "false") {
            newLocation = oldLocation
        }
        var newGrid = updateGrid(newLocation, this.props.enemies, this.props.healths, this.props.weapons, this.props.doors);
        this.props.playerMove({ new: newLocation, old: oldLocation, grid: newGrid });
        this.props.buildGrid(newGrid);
        this.setState({ grid: newGrid })
        // this.setState({ oldLocation: oldLocation })
        return newLocation;
    }
    GetRandomEnemies() {
        var grid = this.props.grid
        var enemies = [];
        for (var i = 0; i < 8; i++) {
            var index = Math.floor(Math.random() * grid.length)
            if (grid[index].pathway === 'true' && grid[index].containing === null) {
                grid[index].containing = "enemy";
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
    createRandomDoors() {
        var grid = this.props.grid;
        var doors = [];
        for (var i = 0; i < 3; i++) {
            var index = Math.floor(Math.random() * grid.length)
            if (grid[index].pathway === 'true' && grid[index].containing === null) {
                grid[index].containing = "door";
                doors.push(grid[index]);
            }
        }
        this.props.updateDoors(doors)
        return grid
    }
    combiningRandoms() {
        var grid = this.state.grid
        var doors = this.createRandomDoors(grid);
        var enemies = this.GetRandomEnemies(doors);
        var weapons = this.randomWeapons(enemies);
        var healths = this.RandomHealths(weapons);
        return healths;
    }

    render() {
        console.log("this is my enemy", this.props.enemies)
        return (
            <div>
                <h1>Roguelike Dungeon Crawler Game</h1>
                <h2>Dungeon:{this.props.Dungeon}</h2>
                <h2>Kill the boss in dungeon 3</h2>
                <h3>experience :{this.props.xP}</h3>
                <h3>health :{this.props.health}</h3>
                <h3>life:{this.props.life}</h3>
                <h4>Enemy:&#9760;</h4>
                <h4>stateWeapons:&#x2692;</h4>
                <h4>health:&#x26D1;</h4>
                <div className="grid">{
                    this.state.grid.map(element => {
                        if (element.x === this.state.oldLocation.x && element.y === this.state.oldLocation) {
                            element.containing = null;
                        } else if (element.x === this.props.player.x && element.y === this.props.player.y) {
                            element.containing = "player"
                            element.icon = <p className="icon"><span>&#x26F9;</span></p>;
                        } else if (element.containing === "enemy") {
                            element.icon = <p className="icon"><span> &#9760;</span></p>;
                        } else if (element.containing === "health") {
                            element.icon = <p className="icon"><span>&#x26D1;</span></p>;
                        } else if (element.containing === "weapon") {
                            element.icon = <p className="icon"><span>&#x2692;</span></p>;
                        } else if (element.containing === "door") {
                            element.containing = "door"
                        }
                        return <button className="grid" className={element.pathway} >{element.icon}{element.containing}</button>
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
        life: state.life,
        doors: state.doors,
        createNewGrid: state.createNewGrid,
        enemies: state.enemies,
        Dungeon: state.Dungeon,
        healths: state.healths,
        weapons: state.weapons,
        newBoard: state.newBoard,
        health: state.health,
        stateWeapons: state.weapons.health
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
        },
        updateDoors: (newDoors) => {
            dispatch(action.storeDoors(newDoors))
        },
        updateNewGrid: (addNewGrid) => {
            dispatch(action.createNewGrid(addNewGrid))
        },
        updateNewBord: (addNewBoard) => {
            dispatch(action.createNewBoard(addNewBoard))
        },
        increasePlayerHealth: (playerHealth) => {
            dispatch(action.increaseHealth(playerHealth))
        },
        inceasePlayerWeapon: (wpns) => {
            dispatch(action.increaseWeapon(wpns))
        },
        increaseExperienceOfPlayer: (playerExperience) => {
            dispatch(action.increseExperience(playerExperience))
        },
        increasePlayerLife: (lfplayer) => {
            dispatch(action.increaseLifeOfPlayer(lfplayer))
        },
        removePlayerHealth: (hlths) => {
            dispatch(action.removeHealth(hlths))
        },
        removePlayerWeapon: (wpn) => {
            dispatch(action.removeWeapons(wpn))
        },
        removeEnemy: (enemy) => {
            dispatch(action.removeEnemies(enemy))
        },
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
