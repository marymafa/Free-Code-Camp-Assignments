import makingPathWays from '../game-functions';
import { combineReducers } from 'redux';
const initialState = {
    enemy: "stick",
    health: 100,
    xP: 100,
    weapons: [
        {
            entityName: 'brass knuckles',
            entityType: 'weapon',
            health: 0,
            attack: 7
        },
        {
            entityName: 'serrated dagger',
            entityType: 'weapon',
            health: 0,
            attack: 12
        },
        {
            entityName: 'katana',
            entityType: 'weapon',
            health: 0,
            attack: 16
        },
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
                newState.xP += 20;
                newState.health += 20;
            } else {
                newState.xP -= 10;
                newState.health -= 10;
            }
            return newState;
            console.log("newstate", newState)
            break;
        case "RANDOM_VALUES":
            newState = { ...newState, enemy: action.payload };
            break;
    }
    return newState;
}
//const playerFightOptionsSaga = (state = initialState, action) => {
// switch(action.type){
// case 'SWITCH_WEAPON':
// return {
//     ...state,
//     entities: {
//       ...state.entities,
//       'player': {
//         ...state.entities.player,
//         weapon: action.weapon,
//         attack: state.entities.player.attack + action.attack
//       }
//     }
//   };
// case 'GAIN_XP':
// return {
//   ...state,
//   entities: {
//     ...state.entities,
//     'player': {
//       ...state.entities.player,
//       toNextLevel: state.entities.player.toNextLevel - action.xp
//     }
//   }
// };
// case 'health':
//           heal('player', entity.health);
//           removeEntity(entityName);
//           move('player', vector);
//           break;
// }

//}
export default reducers;