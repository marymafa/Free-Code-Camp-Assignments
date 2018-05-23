
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

function getNearestNeighbors() {
    var seededGrid = makeGrid();

    for (var i in seededGrid) {
        var findNeighbors = [//finding neighbors for top,bottom,left,right

            { x: seededGrid[i].x + 1, y: seededGrid[i].y },
            { x: seededGrid[i].x - 1, y: seededGrid[i].y },
            { x: seededGrid[i].x, y: seededGrid[i].y + 1 },
            { x: seededGrid[i].x, y: seededGrid[i].y - 1 },
            { x: seededGrid[i].x + 1, y: seededGrid[i].y + 1 },
            { x: seededGrid[i].x + 1, y: seededGrid[i].y - 1 },
            { x: seededGrid[i].x - 1, y: seededGrid[i].y + 1 },
            { x: seededGrid[i].x - 1, y: seededGrid[i].y - 1 }
        ];
    }
}
getNearestNeighbors()





module.exports = { makeGrid }