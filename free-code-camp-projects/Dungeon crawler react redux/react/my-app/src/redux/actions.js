const createGrid = () => {
    return { type: "CREATE_GRID" }
}
const movePlayer = (moves) => {
    return { type: "MOVE_PLAYER", payload: moves }
}
const returnRandomVals = (displayRandomly) => {
    return {
        type: "RANDOM_VALUES", payload: displayRandomly
    }
}
module.exports = { createGrid, movePlayer, returnRandomVals }