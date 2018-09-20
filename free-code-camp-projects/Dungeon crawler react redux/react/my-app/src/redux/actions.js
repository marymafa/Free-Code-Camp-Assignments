const createGrid = () => {
    return { type: "CREATE_GRID" }
}
const movePlayer = (moves) => {
    return { type: "MOVE_PLAYER", payload: moves }
}
const returnRandomVals = () => {
    return {
        type: "RANDOM_VALUES"
    }
}
module.exports = { createGrid, movePlayer, returnRandomVals }