function makeGrid() {
    var grid = []
    for (var x = 0; x < 2; x++) {
        for (var y = 0; y < 2; y++) {
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
var initialGrid = makeGrid()
function getIniatialAliveCells() {
    var initialGrid = makeGrid();
    initialAliveCells = [{ x: 0, y: 1, status: "Alive" }, { x: 0, y: 3, status: "Alive" }, { x: 0, y: 11, status: "Alive" }, { x: 2, y: 1, status: "Alive" }, { x: 3, y: 1, status: "Alive" }]
    for (var i = 0; i < initialGrid.length; i++) {
        for (var j = 0; j < initialAliveCells.length; j++) {
            if (initialAliveCells[j].x === initialGrid[i].x && initialAliveCells[j].y === initialGrid[i].y) {
                initialGrid[i] = initialAliveCells[j]
            }
        }
    }
    return initialGrid;
}

function getNearestNeighbors() {
    var cellWithNeigbours = [];

    for (var i in initialGrid) {
        var toFind= [
            { x: initialGrid[i].x + 1, y: initialGrid[i].y },
            { x: initialGrid[i].x - 1, y: initialGrid[i].y },
            { x: initialGrid[i].x, y: initialGrid[i].y + 1 },
            { x: initialGrid[i].x, y: initialGrid[i].y - 1 },
            { x: initialGrid[i].x + 1, y: initialGrid[i].y + 1 },
            { x: initialGrid[i].x + 1, y: initialGrid[i].y - 1 },
            { x: initialGrid[i].x - 1, y: initialGrid[i].y + 1 },
            { x: initialGrid[i].x - 1, y: initialGrid[i].y - 1 }
        ];
        cellWithNeigbours.push({coord: {x:initialGrid[i].x,y:initialGrid[i].y}, neighbours: toFind})
    }
    return cellWithNeigbours;
}
console.log(getNearestNeighbors())
