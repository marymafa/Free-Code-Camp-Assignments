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
        this.stopPlayerFromPassingThroughTheWall()
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

    stopPlayerFromPassingThroughTheWall(player) {
        console.log("playerrrr", this.props.grid.find((e)=>{return e.x === player.x &&e.y === player.y  }))
    }

    render() {
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
                            element.icon = <p className="icon"><span>&#x26F9;</span></p>;
                        }
                        return <button className="grid" className={element.pathway} >{element.icon}</button>
                    })
                } </div>
            </div>
        )

    }
}
const mapStateToProps = (state, player) => {
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
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)