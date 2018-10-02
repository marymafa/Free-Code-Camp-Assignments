import React from "react";
import { connect } from "react-redux";
import createGrid from "../redux/reducers";
import * as action from "../redux/actions";
import makingPathWays from '../game-functions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: this.props.grid,
            random: this.combiningRandoms()
        }
        this.movePlayer = this.movePlayer.bind(this);
    }
    componentDidMount() {
        document.onkeydown = this.movePlayer;
    }
    componentWillReceiveProps() {
        this.combiningRandoms()
        this.setState({ grid: this.props.grid })
    }
    movePlayer(event) {
        //
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
        this.props.playerMove({ new: playerPosition, old: oldLoction })
        return playerPosition;
    }
    GetRandomEnemies() {
        var grid = this.props.grid
        for (var i = 0; i < 8; i++) {
            var index = Math.floor(Math.random() * grid.length)
            if (grid[index].pathway === 'true' && grid[index].containing === null) {
                grid[index].containing = "enemies";
            }
        }
        return grid;
    }
    RandomHealths() {
        var grid = this.props.grid
        for (var i = 0; i < 8; i++) {
            var index = Math.floor(Math.random() * grid.length)
            if (grid[index].pathway === 'true' && grid[index].containing === null) {
                grid[index].containing = "health";
            }
        }
        return grid;
    }
    randomWeapons() {
        var grid = this.props.grid
        for (var i = 0; i < 8; i++) {
            var index = Math.floor(Math.random() * grid.length)
            if (grid[index].pathway === 'true' && grid[index].containing === null) {
                grid[index].containing = "weapon";
            }
        }
        return grid;
    }
    combiningRandoms() {
        var grid = this.props.grid
        var enemies = this.GetRandomEnemies(grid);
        var weapons = this.randomWeapons(enemies);
        var healths = this.RandomHealths(weapons);
        this.props.randomVals({ grid: this.RandomHealths(grid) })
        return healths;
    }

    render() {
        console.log("hey", this.props.player.weapon = this.props.grid.weapon)
        return (
            <div>
                <h1>Roguelike Dungeon Crawler Game</h1>
                <h2>Dungeon:{this.props.Dungeon}</h2>
                <h2>Kill the boss in dungeon 3</h2>
                <h3>xP:{this.props.xP}</h3>
                <h3>Health:{this.props.health}</h3>
                <div className="grid">{
                    this.state.grid.map(element => {
                        console.log("rimax", element.containing)
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
const mapStateToProps = (state, grid, player, xp, Dungeon, health, weapons) => {
    return {
        grid: state.grid,
        player: state.player,
        xP: state.xP,
        Dungeon: state.Dungeon,
        health: state.health,
        weapons: state.weapons
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buildGrid: initialGrid => {
            dispatch(action.createGrid(initialGrid))
        },
        playerMove: oldAndNewMoves => {
            dispatch(action.movePlayer(oldAndNewMoves))
        },
        randomVals: randomIcons => {
            dispatch(action.returnRandomVals(randomIcons))
        },
        attackingTheEnemy: () => {
            dispatch(action.attackEnemy())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
