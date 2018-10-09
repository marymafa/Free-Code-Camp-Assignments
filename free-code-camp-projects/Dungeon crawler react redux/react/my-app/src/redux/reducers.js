
import { combineReducers } from 'redux';
import { makingPathWays } from "../game-functions";

const initialState = {
    enemies: [],
    healths: [],
    health: 60,
    xP: 0,
    weapons: [
        {
            name: 'brass knuckles',
            type: 'weapon',
            health: 0,
            attack: 7
        },
        {
            name: 'serrated dagger',
            type: 'weapon',
            health: 0,
            attack: 12
        },
        {
            name: 'katana',
            type: 'weapon',
            health: 0,
            attack: 16
        }
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
            newState = { ...newState, player: action.payload.new, oldLoction: action.payload.old, grid: action.payload.grid };
            if (state.player) {
                newState.health += 2
                newState.xP += 2
            }
            break;
        // case "RANDOM_VALUES":
        //     newState = { ...state };
        //     break;
        case "SET_ENEMIES":
            newState = { ...state, enemies: action.payload };
            break;
        case "SET_HEALTHS":
            newState = { ...state, healths: action.payload };
            break;
        case "SET_WEAPONS":
            newState = { ...state, weapons: action.payload };
            break;
    }
    return newState;
}
export default reducers;