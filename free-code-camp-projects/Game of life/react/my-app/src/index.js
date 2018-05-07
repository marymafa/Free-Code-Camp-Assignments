function makeGrid() {
    var grid = []
    for (var x = 0; x < 20; x++) {
        for (var y = 0; y < 20; y++) {
            grid.push(

                {
                    x: x,
                    y: y,
                    status: "dead"
                }
            )

        }
    }
    return grid;
}

function getIniatialAliveCells() {
    var initialGrid = makeGrid();
    initialAliveCells = [{ x: 0, y: 1, status: "Alive" }, { x: 1, y: 3, status: "Alive" }, { x: 1, y: 0, status: "Alive" }]
    for (var i = 0; i < initialGrid.length; i++) {
        for (var j=0; j<initialAliveCells.length; j++) {
            if (initialAliveCells[j].x === initialGrid[i].x && initialAliveCells[j].y === initialGrid[i].y) {
                initialGrid[i] = initialAliveCells[j]
            }
        }                                     
    }
    return initialGrid;
}
console.log(getIniatialAliveCells())
