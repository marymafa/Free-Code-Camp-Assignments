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
    var seededGrid = getIniatialAliveCells();
    for (var i in seededGrid) {
        var toFind = [
            { x: seededGrid[i].x + 1, y: seededGrid[i].y },
            { x: seededGrid[i].x - 1, y: seededGrid[i].y },
            { x: seededGrid[i].x, y: seededGrid[i].y + 1 },
            { x: seededGrid[i].x, y: seededGrid[i].y - 1 },
            { x: seededGrid[i].x + 1, y: seededGrid[i].y + 1 },
            { x: seededGrid[i].x + 1, y: seededGrid[i].y - 1 },
            { x: seededGrid[i].x - 1, y: seededGrid[i].y + 1 },
            { x: seededGrid[i].x - 1, y: seededGrid[i].y - 1 }
        ];

        var realVals = []
        for (var c of toFind) {
            realVals.push(seededGrid.find((e) => e.x === c.x && e.y === c.y))
        }

        var real = realVals.filter((coord) => coord !== undefined);
        console.log('real', real);
        cellWithNeigbours.push({ coord: { x: seededGrid[i].x, y: seededGrid[i].y }, neighbours: real.filter((coord) => coord.status !== "dead") })

    }
    return cellWithNeigbours;
}


function getAliveNeighbors(x, y) {
    var alive = true;
    var cells = [{ x: 1, y: -1, start: "start" }, { x: -1, y, end: "end" }];
    var board = getNearestNeighbors();
    // for (var i = 0; i < board.length; i++) {
    //     for (var j = 0; j < cells.length; i++) {
    //         if (board[i].x === cells[j].x && board[i].y)
    //     }
    // }
}
console.log(getAliveNeighbors());
