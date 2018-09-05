const createGrid = () => {
    return { type: "CREATE_GRID" }
}
const movePlayer = (moves) => {
    return { type: "MOVE_PLAYER", payload: moves }
}
module.exports = { createGrid, movePlayer }