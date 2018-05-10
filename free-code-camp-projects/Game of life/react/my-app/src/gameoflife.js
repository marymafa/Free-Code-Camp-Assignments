
function makeGrid() {
    var grid = [];
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
//console.log(makeGrid())
function getIniatialAliveCells() {
    var initialGrid = makeGrid();
    var initialAliveCells = [{ x: 0, y: 1, status: "Alive" }, { x: 0, y: 0, status: "Alive" }, { x: 0, y: 1, status: "Alive" }, { x: 0, y: 0, status: "Alive" }, { x: 0, y: 1, status: "Alive" }]
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
        //console.log('real', real);
        cellWithNeigbours.push({ coord: { x: seededGrid[i].x, y: seededGrid[i].y }, neighbours: real.filter((coord) => coord.status !== "dead") })

    }
    return cellWithNeigbours;
}
// function getAliveNeighbors(display) {
//     var grid = display;
//     grid.forEach(element => {
//         var e = getAliveNeighbors(element)
//         var deadCells = [];
//         var aliveCells = [];
//         e.list.forEach(cell => {
//             var c = grid.find(val =>
//                 val.x === cell.x && val.y === cell.y);
//             if (c !== undefined && c.status === "Alive") {
//                 aliveCells.push(c);
//             } else if (c !== undefined && c.status === "dead")
//                 deadCells.push(c);

//         })
//         if (element.status === "Alive" && aliveCells.leghth === 3) {
//             element.status === "Alive";
//         } else if (element.status === "dead" && aliveCells.leghth === 3) {
//             element.status === "Alive";
//         } else if (element.status === "Alive" && aliveCells.leghth > 3) {
//             element.status === "dead";
//         } else if (element.status === "Alive" && aliveCells.leghth < 2 || aliveCells.leghth > 3) {
//             element.status === "dead";
//         }

//     })
//     return grid;
// }
//console.log("are this live neighbors", getAliveNeighbors())

module.exports = { getIniatialAliveCells    }//getNearestNeighbors, getIniatialAliveCells, makeGrid }
