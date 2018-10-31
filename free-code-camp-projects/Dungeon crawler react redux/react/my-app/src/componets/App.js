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
            isHidden: true,
            cellWithNeigbours: [],
            gameWon: false,
            enemyLife: 16,
            bossLife: 20,
        }
        this.movePlayer = this.movePlayer.bind(this);
    }
    componentDidMount() {
        document.onkeydown = this.movePlayer;
        this.randomValues();
        this.props.buildGrid();
    };

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    };

    randomValues() {
        var gridWithPaths = this.props.grid
        this.setState({ grid: this.combiningRandoms(gridWithPaths) });
    };

    movePlayer(event) {
        var grid = this.state.grid
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
            this.props.increasePlayerHealth(30);
            this.props.removePlayerHealth(nextLocation);
        }
        if (nextLocation.containing === "weapon") {
            this.props.increasePlayerLife(50)
            this.props.increasePlayerWeapon(30)
            this.props.removePlayerWeapon(nextLocation)

        }

        if (this.props.weapon === 0 && this.props.health === 0) {
            alert("game over ,try again");
            this.reset();
        }

        if (nextLocation.containing === "enemy") {
            var currentEnemyLife = this.state.enemyLife;
            this.setState({ enemyLife: currentEnemyLife - 4 })
            newLocation = oldLocation
            if (this.state.enemyLife === 0) {
                this.props.removeEnemy(nextLocation)
                this.setState({ enemyLife: 16 })
                this.props.increaseExperienceOfPlayer(30)
                this.props.decreasePlayerWeapon(30)
                this.props.decreasePlayerHealth(30)
            }
        }

        if (nextLocation.pathway === "false") {
            newLocation = oldLocation
        }
        if (nextLocation.containing === "doors") {
            this.props.changeTheLocationOfThePlayer();
            this.props.updateNewGrid();
            this.props.buildGrid();

            var newGrid = updateGrid(newLocation, this.props.enemies, this.props.healths, this.props.weapons, this.props.doors, this.props.currentStage);
            console.log('what is newGrid', newGrid);

            this.setState({ grid: newGrid })
        } else {
            var newGrid = updateGrid(newLocation, this.props.enemies, this.props.healths, this.props.weapons, this.props.doors, this.props.currentStage);
            this.props.playerMove({ new: newLocation, old: oldLocation, grid: newGrid });
            this.setState({ grid: newGrid })

        }
        return newLocation;
    }

    reset() {
        window.location.reload(true);
    };

    GetRandomEnemies(enemies) {
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
    };
    setRandomBoss(boss) {
        var forthStage = this.props.grid
        var setBoss = [];
        for (var i = 0; i < 2; i++) {
            var index = Math.floor(Math.random() * forthStage.length);
            if (forthStage[index].pathway === 'true' && forthStage[index].containing === null) {
                forthStage[index].containing = 'boss';
                setBoss.push(forthStage[index]);
            }

        }
        return setBoss;
    };
    RandomHealths(health) {
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
    };
    randomWeapons(weapons) {

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
    };
    createRandomDoors(doors) {
        var grid = this.props.grid;
        var doors = [];
        for (var i = 0; i < 3; i++) {
            var index = Math.floor(Math.random() * grid.length)
            if (grid[index].pathway === 'true' && grid[index].containing === null) {
                grid[index].containing = "doors";
                doors.push(grid[index]);
            }
        }

        this.props.updateDoors(doors)
        return grid
    };
    combiningRandoms(grid) {
        var grid = this.state.grid
        var doors = this.createRandomDoors(this.props.currentStage);
        var enemies = this.GetRandomEnemies(this.props.currentStage);
        var weapons = this.randomWeapons(this.props.currentStage);
        var randomboss = this.setRandomBoss(this.props.currentStage);
        var healths = this.RandomHealths(this.props.currentStage);
        return grid;
    };
    render() {
        const { showing } = this.state;
        return (
            <div className="container">
                <h1 className="heading">Roguelike Dungeon Crawler Game</h1>
                <h3 className="stxp">experience :{this.props.xP}</h3>
                <h3 className="hlth">health :{this.props.health}</h3>
                <h4 className="wpn">Weapon:&#x2692;{this.props.weapon}</h4>
                <h4 className="enm">Enemy:&#9760;</h4>
                <h4 className="hlth-icon">health:&#x26D1;</h4>
                <h4 className="dor">door:&#xf008;</h4>
                <h3 className="bos">boss:&#9824;</h3>
                <button className="hideOrShow" onClick={this.toggleHidden.bind(this)} >Hide/Show Map</button>
                <div className="grid" id="icon">{
                    this.state.grid.map(element => {

                        if (element.x === this.state.oldLocation.x && element.y === this.state.oldLocation) {
                            element.containing = null;
                        } else if (element.x === this.props.player.x && element.y === this.props.player.y) {
                            element.containing = "player"
                            element.icon = <span className="icon"><span>&#x26F9;</span></span>;
                        } else if (element.containing === "enemy") {
                            element.icon = <span className="icon"><span> &#9760;</span></span>;
                        } else if (element.containing === "health") {
                            element.icon = <span className="icon"><span>&#x26D1;</span></span>;
                        } else if (element.containing === "weapon") {
                            element.icon = <span className="icon"><span>&#x2692;</span></span>;
                        } else if (element.containing === "doors") {
                            element.icon = <span className="icon"><span>&#xf008;</span></span>;
                        } else if (element.containing === "boss") {
                            element.icon = <span className="boss"><span>&#9824;</span></span>
                        }
                        const isHidden =
                            this.state.isHidden && element.containing != "player" &&
                            !(Math.abs(this.props.player.x - element.x) <= 1 &&
                                Math.abs(this.props.player.y - element.y) <= 1
                            );
                        return <button id={isHidden ? "containing-hidden" : "o"} className="grid" className={element.pathway} >{element.icon}</button>
                    })
                }
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        state: state,
        currentStage: state.currentStage,
        grid: state.grid,
        stages: state.stages,
        player: state.player,
        oldLocation: state.oldLocation,
        xP: state.xP,
        doors: state.doors,
        createNewGrid: state.createNewGrid,
        enemies: state.enemies,
        healths: state.healths,
        weapons: state.weapons,
        weapon: state.weapon,
        newBoard: state.newBoard,
        health: state.health,
        stateWeapons: state.stateWeapons,
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
        updateNewGrid: () => {
            dispatch(action.createNewGrid())
        },
        increasePlayerHealth: (playerHealth) => {
            dispatch(action.increaseHealth(playerHealth))
        },
        decreasePlayerHealth: (decreasehealth) => {
            dispatch(action.decreaseHealth(decreasehealth))
        },
        increasePlayerWeapon: (wpns) => {
            dispatch(action.increaseWeapon(wpns))
        },
        decreasePlayerWeapon: (decreaseweapon) => {
            dispatch(action.decreaseWeapon(decreaseweapon))
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
        changeTheLocationOfThePlayer: () => {
            dispatch(action.changePlayerLocation())
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
