import makingPathWays from '../game-functions';
const initialState = {
    Xp: 0,
    enemy: "stick",
    weapon: "knife",
    health: [100],
    Dungeon: 1,
    player: { x: 1, y: 0 },
    oldLoction: { x: 1, y: 0 },
    count: 1000,
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
            break;
        case "RANDOM_VALUES":
            newState = { ...newState, grid:action.payload }
    }
    return newState;
}
export default reducers;