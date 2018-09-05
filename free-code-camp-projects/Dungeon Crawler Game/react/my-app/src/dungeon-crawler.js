
function initializingGrid() {
    var grid = [];
    for (var x = 0; x < 10; x++) {
        for (var y = 0; y < 10; y++) {
            grid.push(
                {
                    x: x,
                    y: y,
                    pathway: 'true',
                    containing: null,
                    health: 100
                }
            )

        }
    }
    return grid;
}
function creatingPath() {
    const initialGrid = initializingGrid();
    const creatingpath = [
        { x: 0, y: 0, pathway: 'false', containing: null, health: null },
        { x: 0, y: 1, pathway: 'false', containing: null, health: null },
        { x: 0, y: 4, pathway: 'false', containing: null, health: null },
        { x: 0, y: 5, pathway: 'false', containing: null, health: null },
        { x: 4, y: 3, pathway: 'false', containing: null, health: null },
        { x: 4, y: 6, pathway: 'false', containing: null, health: null },
        { x: 4, y: 5, pathway: 'false', containing: null, health: null },
        { x: 2, y: 2, pathway: 'false', containing: null, health: null },
        { x: 5, y: 5, pathway: 'false', containing: null, health: null },
        { x: 2, y: 1, pathway: 'false', containing: null, health: null },
        { x: 2, y: 2, pathway: 'false', containing: null, health: null },
        { x: 3, y: 0, pathway: 'false', containing: null, health: null },
        { x: 4, y: 6, pathway: 'false', containing: null, health: null },
        { x: 4, y: 7, pathway: 'false', containing: null, health: null },
        { x: 3, y: 2, pathway: 'false', containing: null, health: null },
        { x: 4, y: 2, pathway: 'false', containing: null, health: null },
        { x: 7, y: 1, pathway: 'false', containing: null, health: null },
        { x: 7, y: 2, pathway: 'false', containing: null, health: null },
        { x: 6, y: 5, pathway: 'false', containing: null, health: null },
        { x: 5, y: 7, pathway: 'false', containing: null, health: null },
        { x: 5, y: 7, pathway: 'false', containing: null, health: null },
        { x: 6, y: 6, pathway: 'false', containing: null, health: null },
        { x: 6, y: 7, pathway: 'false', containing: null, health: null },
        { x: 8, y: 3, pathway: 'false', containing: null, health: null },
        { x: 8, y: 4, pathway: 'false', containing: null, health: null },
        { x: 7, y: 3, pathway: 'false', containing: null, health: null },
        { x: 8, y: 8, pathway: 'false', containing: null, health: null },
        { x: 8, y: 9, pathway: 'false', containing: null, health: null },
        { x: 9, y: 8, pathway: 'false', containing: null, health: null },
        { x: 2, y: 0, pathway: 'false', containing: null, health: null },
        { x: 1, y: 9, pathway: 'false', containing: null, health: null },
        { x: 1, y: 8, pathway: 'false', containing: null, health: null },
        { x: 2, y: 9, pathway: 'false', containing: null, health: null },
        { x: 2, y: 8, pathway: 'false', containing: null, health: null },
        { x: 1, y: 4, pathway: 'false', containing: null, health: null },
        { x: 1, y: 5, pathway: 'false', containing: null, health: null },
        { x: 9, y: 4, pathway: 'false', containing: null, health: null },
        { x: 7, y: 0, pathway: 'false', containing: null, health: null },
        { x: 8, y: 0, pathway: 'false', containing: null, health: null },
        { x: 9, y: 0, pathway: 'false', containing: null, health: null },

    ]
    for (var i = 0; i < initialGrid.length; i++) {
        for (var j = 0; j < creatingpath.length; j++) {
            if (initialGrid[i].x === creatingpath[j].x && initialGrid[i].y === creatingpath[j].y) {
                initialGrid[i] = creatingpath[j]
            }
        }
    }

    return initialGrid;
}
module.exports = { creatingPath }