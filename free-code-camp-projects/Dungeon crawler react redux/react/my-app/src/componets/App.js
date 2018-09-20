import React from "react";
import { connect } from "react-redux";
import createGrid from "../redux/reducers";
import * as action from "../redux/actions";
import makingPathWays from '../game-functions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.movePlayer = this.movePlayer.bind(this);
    }


    componentDidMount() {
        document.onkeydown = this.movePlayer;
        var gridWithPaths = this.props.grid
        this.props.randomVals({ grid: this.CombiningRandoms(gridWithPaths) });

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

        this.props.playerMove({ new: playerPosition, old: oldLoction })
        return playerPosition;

    }
    GetRandomEnemies() {
        var grid = this.props.grid
        for (var i = 0; i < 8; i++) {
            var index = Math.floor(Math.random() * grid.length)
            if (grid[index].pathway === 'true' && grid[index].containing === null) {
                grid[index].containing = <p> &#x26C7;</p>;
            }
        }
        return grid;
    }
    RandomHealths() {
        var grid = this.props.grid
        for (var i = 0; i < 8; i++) {
            var index = Math.floor(Math.random() * grid.length)
            if (grid[index].pathway === 'true' && grid[index].containing === null) {
                grid[index].containing = <p> &#x26D1;</p>;
            }
        }
        return grid;
    }
    randomWeapons() {
        var grid = this.props.grid
        for (var i = 0; i < 8; i++) {
            var index = Math.floor(Math.random() * grid.length)
            if (grid[index].pathway === 'true' && grid[index].containing === null) {
                grid[index].containing = <p>&#x2692;</p>;
            }
        }
        return grid;
    }
    CombiningRandoms() {
        var grid = this.props.grid
        var enemies = this.GetRandomEnemies(grid);
        var weapons = this.randomWeapons(enemies);
        var healths = this.RandomHealths(weapons);
        return healths;
    }

    render() {
        console.log("woooow", this.props.grid)
        return (
            <div>
                <h1>Roguelike Dungeon Crawler Game</h1>
                <h2>Kill the boss in dungeon 3</h2>
                <div className="grid">{
                    this.props.grid.map(element => {
                        if (element.containing === this.props.oldLoction) {
                            element.containing = null;
                        }
                        if (element.containing === "player") {
                            element.containing = "none"
                            element.icon = <p className="icon"><span>&#x26F9;</span></p>;
                        }
                        return <button className="grid" className={element.pathway} >{element.icon}</button>
                    })
                } </div>
            </div >
        )

    }
}
const mapStateToProps = (state, grid, player) => {
    return {
        grid: state.grid,
        player: state.player
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
        }

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);