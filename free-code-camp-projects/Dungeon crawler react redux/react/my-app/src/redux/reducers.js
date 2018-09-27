import makingPathWays from '../game-functions';
import { combineReducers } from 'redux';
const initialState = {
    enemy: "stick",
    health: 100,
    xP: 60,
    weapons: [
        { name: 'Laser Pistol', damage: 15 },
        { name: 'Laser Rifle', damage: 19 },
        { name: 'Electric ChainSaw', damage: 31 },
        { name: 'Dark Energy Cannon', damage: 40 },
    ],
    Dungeon: 1,
    player: { x: 1, y: 0 },
    oldLoction: { x: 1, y: 0 },
    grid: makingPathWays({ x: 1, y: 0 })
}
const reducers = (state = initialState, action) => {
    var newState = state;
    switch (action.type) {
        case "CREATE_GRID":
            newState = { ...newState, grid: action.payload };
            break;
        case "MOVE_PLAYER":
            newState = { ...newState, player: action.payload.new, oldLoction: action.payload.old, grid: makingPathWays(action.payload.new) };
            if (newState.player) {
                newState.xP += 20
                newState.health += 15
            }
            return newState
            break;
        case "RANDOM_VALUES":
            newState = { ...newState, enemy: action.payload };
    }
    return newState;
}

export default reducers;
