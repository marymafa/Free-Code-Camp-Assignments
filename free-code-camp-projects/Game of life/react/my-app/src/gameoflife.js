
function makeGrid() {
    var grid = [];
    for (var x = 0; x < 14; x++) {
        for (var y = 0; y < 14; y++) {
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

function getIniatialAliveCells(givenGrid) {
    var initialAliveCells = [];
    if (givenGrid === undefined) {
        initialAliveCells = [{ x: 0, y: 0, status: "Alive" }, { x: 0, y: 1, status: "Alive" }, { x: 0, y: 2, status: "Alive" }, { x: 4, y: 0, status: "Alive" }, { x: 4, y: 1, status: "Alive" }, { x: 4, y: 2, status: "Alive" }]
    } else {
        initialAliveCells = givenGrid.grid;
    }
    var initialGrid = makeGrid();
    for (var i = 0; i < initialGrid.length; i++) {
        for (var j = 0; j < initialAliveCells.length; j++) {
            if (initialAliveCells[j].x === initialGrid[i].x && initialAliveCells[j].y === initialGrid[i].y) {
                initialGrid[i] = initialAliveCells[j]
            }
        }
    }
    return initialGrid;
}


function getNearestNeighbors(givenGrid) {
    var cellWithNeigbours = [];
    var seededGrid = getIniatialAliveCells(givenGrid);
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

        cellWithNeigbours.push({ coord: { x: seededGrid[i].x, y: seededGrid[i].y, status: seededGrid[i].status }, neighbours: real })


    }
    return cellWithNeigbours;
}

function getAllLivingNeighbors(givenGrid) {
    var newGrid = getNearestNeighbors(givenGrid);
    var finalGrid = [];

    for (var i in newGrid) {
        var cell = {};
        var deadCells = [];
        var liveCells = [];
        for (var t in newGrid[i].neighbours) {
            if (newGrid[i].neighbours[t].status === "Alive") {
                liveCells.push(newGrid[i].neighbours[t])
            } else if (newGrid[i].neighbours[t].status === "dead") {
                deadCells.push(newGrid[i].neighbours[t])
            }
        }
        if (newGrid[i].coord.status === "Alive" && liveCells.length === 3) {
            cell = { x: newGrid[i].coord.x, y: newGrid[i].coord.y, status: "Alive" }
        } else if (newGrid[i].coord.status === "dead" && liveCells.length === 3) {
            cell = { x: newGrid[i].coord.x, y: newGrid[i].coord.y, status: "Alive" }
        } else if (newGrid[i].coord.status === "Alive" && (liveCells.length < 2 || liveCells.length > 3)) {
            cell = { x: newGrid[i].coord.x, y: newGrid[i].coord.y, status: "dead" }
        } else {
            cell = newGrid[i].coord
        }
        finalGrid.push(cell)

    }
    var onlyAlive = finalGrid.filter(element => {
        return element.status === "Alive";
    })
    return { grid: finalGrid, aliveCells: onlyAlive };
}

// function newGeneration() {
//     var board = getAllLivingNeighbors();
//     var count = 0;
//     while (count > 10) {
//         board += generate(board) + count;
//         count++;
//     }
//     return board;

//     var nextGeneration = setInterval(function () {
//         getAllLivingNeighbors();
//     }, 3000);
//     return nextGeneration;
// }
var firstGene = getAllLivingNeighbors();
var secondGene = getAllLivingNeighbors(firstGene);
console.log("newGeneration", firstGene, secondGene);
module.exports = { getNearestNeighbors }//getNearestNeighbors, getIniatialAliveCells, makeGrid }
