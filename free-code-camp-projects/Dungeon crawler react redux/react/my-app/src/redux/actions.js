export const createGrid = (grid) => {    
    return { type: "CREATE_GRID", payload: grid }
}
export const movePlayer = (moves) => {
    return { type: "MOVE_PLAYER", payload: moves }
}
export const returnRandomVals = (displayRandomly) => {
    return { type: "RANDOM_VALUES", payload: displayRandomly }
}
export const attackEnemy = (hitEnemy) => {
    return { type: "ENEMY", payload: hitEnemy }
}
export const storeEnemies = (enemies) => {
    return { type: "SET_ENEMIES", payload: enemies }
}
export const storeHealths = (healths) => {
    return { type: "SET_HEALTHS", payload: healths }
}
export const storeWeapons = (weapons) => {
    return { type: "SET_WEAPONS", payload: weapons }
}
