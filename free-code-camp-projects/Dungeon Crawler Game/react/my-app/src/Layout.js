import React from "react";
import *as dungeon from "./dungeon-crawler";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: dungeon.creatingPath(),
            enemies: [],
        }
        console.log("enemiese", this.state.enemies)
    }
    componentDidMount() {
        this.myGamePiece()
        this.randomValues()
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
    myGamePiece() {
        var player = <p className="icon">&#x26F9;</p>;
    }
    moveUp() {
        this.myGamePiece.speedY = +1;
        console.log("up", this.myGamePiece.speedY)
    }
    moveDown() {
        this.myGamePiece.speedY = -1;
        console.log("down", this.myGamePiece.speedY)
    }
    moveLeft() {
        this.myGamePiece.speedX = -1;
        console.log("left", this.myGamePiece.speedY)
    }
    moveRight() {
        this.myGamePiece.speedX = +1;
        console.log("right", this.myGamePiece.speedY)
    }
    render() {
        return (
            <div>
                <h1>Dungeon Crawler Game</h1>
                <div className="grid">{
                    this.state.grid.map(element => {
                        if (element.x === 5 && element.y === 0) {
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
                <button onClick={this.moveUp.bind(this)}>UP</button>
                <button onClick={this.moveDown.bind(this)}>DOWN</button>
                <button onClick={this.moveLeft.bind(this)}>LEFT</button>
                <button onClick={this.moveRight.bind(this)}>RIGHT</button>
            </div>
        )
    }
}