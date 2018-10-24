
import { combineReducers } from 'redux';
import { createGrid, stage1 } from "../game-functions";
import { stage3 } from "../stage3";
import { stage2 } from "../stage2";
import { stage4 } from "../stage4";

const initialState = {
    enemies: [],
    healths: [],
    doors: [],
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
    player: { x: 1, y: 1 },
    oldLocation: { x: 1, y: 1 },
    currentStage: stage1,
    grid: createGrid({ x: 1, y: 1 }, stage1),
    stages: [stage1, stage2, stage3, stage4],
}
const reducers = (state = initialState, action) => {
    var newState = state;
    switch (action.type) {
        case "CREATE_GRID":
            newState = { ...newState, grid: action.payload };
            break;
        case "CREATE_NEXT_STAGE":
            var currentStageIndex = newState.stages.indexOf(newState.currentStage)
            newState = { ...newState, currentStage: newState.stages[currentStageIndex + 1], grid: createGrid({ x: 1, y: 1 }, newState.stages[currentStageIndex + 1]) };
            break;
        case "MOVE_PLAYER":
            newState = { ...newState, player: action.payload.new, oldLocation: action.payload.old, grid: action.payload.grid };
            break;
        case "SET_ENEMIES":
            newState = { ...state, enemies: action.payload };
            break;
        case "SET_HEALTHS":
            newState = { ...state, healths: action.payload };
            break;
        case "SET_WEAPONS":
            newState = { ...state, weapons: action.payload };
            break;
        case "SET_DOORS":
            newState = { ...state, doors: action.payload };
            break;
        case "INCREASE_HEALTH":
            newState = { ...state, };
            break;
        case "INCREASE_WEAPON":
            newState = { ...state, weapons: state.weapons + action.payload };
            break;
        case "INCREASE_EXPERIENCE":
            newState = { ...state, xP: state.xP + action.payload };
            break;
        case "INCREASE_PLAYER_LIFE":
            newState = { ...state, life: state.life + action.payload };
            break;
        case "REMOVE_HEALTH":
            var health = state.healths.find(item => item.x === action.payload.x && item.y === action.payload.y);
            var index = state.healths.indexOf(health);
            newState = { ...state, healths: [...state.healths.slice(0, index), ...state.healths.slice(index + 1)] }
            break;
        case "REMOVE_WEAPON":
            var weapon = state.weapons.find(item => item.x === action.payload.x && item.y === action.payload.y);
            var index = state.weapons.indexOf(weapon);
            newState = { ...state, weapons: [...state.weapons.slice(0, index), ...state.weapons.slice(index + 1)] }
            break;
        case "REMOVE_ENEMIES":
            var enemy = state.enemies.find(item => item.x === action.payload.x && item.y === action.payload.y);
            var index = state.enemies.indexOf(enemy);
            newState = { ...state, enemies: [...state.enemies.slice(0, index), ...state.enemies.slice(index + 1)] }
            break;
    }
    return newState;
}
export default reducers;