const initializingGrid = () => {
    var grid = [];
    for (var x = 0; x < 10; x++) {
        for (var y = 0; y < 10; y++) {
            grid.push(
                {
                    x: x,
                    y: y,
                    pathway: 'true',
                    containing: null,
                }
            )

        }
    }
    return grid;
}
export const updateGrid = (playerLocation, newEnemies, newHealths, newWeapons, newDoors, walls, newBoss) => {
    var newGrid = createGrid(playerLocation, walls);

    var enemies = newEnemies.forEach(function (enemy) {
        var findEnemiesLocation = newGrid.find((ele) => {
            return ele.x === enemy.x && ele.y === enemy.y
        })
        newGrid[newGrid.indexOf(findEnemiesLocation)].containing = "enemy";

    });
    var healths = newHealths.forEach(function (health) {
        var findHealthsLocation = newGrid.find((ele) => {
            return ele.x === health.x && ele.y === health.y
        })
        newGrid[newGrid.indexOf(findHealthsLocation)].containing = "health";
    });
    var weapons = newWeapons.forEach(function (weapons) {
        var findWeaponsLocation = newGrid.find((ele) => {
            return ele.x === weapons.x && ele.y === weapons.y
        })
        newGrid[newGrid.indexOf(findWeaponsLocation)].containing = "weapon";

    });


    var findBossLocation = newGrid.find((ele) => {
        return ele.x === newBoss.x && ele.y === newBoss.y
    })
    if (findBossLocation) {
        newGrid[newGrid.indexOf(findBossLocation)].containing = "boss";
    }


    var findDoorsLocation = newGrid.find((ele) => {
        return ele.x === newDoors.x && ele.y === newDoors.y
    })
    newGrid[newGrid.indexOf(findDoorsLocation)].containing = "doors";


    return newGrid;
}
export const stage1 = [
    { x: 0, y: 0, pathway: 'false', containing: null },
    { x: 0, y: 1, pathway: 'false', containing: null },
    { x: 1, y: 0, pathway: 'false', containing: null },
    { x: 6, y: 0, pathway: 'false', containing: null },
    { x: 5, y: 0, pathway: 'false', containing: null },
    { x: 0, y: 4, pathway: 'false', containing: null },
    { x: 0, y: 5, pathway: 'false', containing: null },
    { x: 4, y: 4, pathway: 'false', containing: null },
    { x: 3, y: 5, pathway: 'false', containing: null },
    { x: 4, y: 6, pathway: 'false', containing: null },
    { x: 3, y: 4, pathway: 'false', containing: null },
    { x: 4, y: 9, pathway: 'false', containing: null },
    { x: 5, y: 9, pathway: 'false', containing: null },
    { x: 5, y: 9, pathway: 'false', containing: null },
    { x: 6, y: 9, pathway: 'false', containing: null },
    { x: 4, y: 1, pathway: 'false', containing: null },
    { x: 4, y: 2, pathway: 'false', containing: null },
    { x: 4, y: 1, pathway: 'false', containing: null },
    { x: 4, y: 0, pathway: 'false', containing: null },
    { x: 4, y: 5, pathway: 'false', containing: null },
    { x: 2, y: 2, pathway: 'false', containing: null },
    { x: 2, y: 1, pathway: 'false', containing: null },
    { x: 2, y: 2, pathway: 'false', containing: null },
    { x: 3, y: 0, pathway: 'false', containing: null },
    { x: 4, y: 5, pathway: 'false', containing: null },
    { x: 4, y: 7, pathway: 'false', containing: null },
    { x: 4, y: 2, pathway: 'false', containing: null },
    { x: 7, y: 1, pathway: 'false', containing: null },
    { x: 6, y: 5, pathway: 'false', containing: null },
    { x: 5, y: 7, pathway: 'false', containing: null },
    { x: 5, y: 7, pathway: 'false', containing: null },
    { x: 6, y: 6, pathway: 'false', containing: null },
    { x: 6, y: 7, pathway: 'false', containing: null },
    { x: 8, y: 3, pathway: 'false', containing: null },
    { x: 8, y: 4, pathway: 'false', containing: null },
    { x: 7, y: 3, pathway: 'false', containing: null },
    { x: 8, y: 9, pathway: 'false', containing: null },
    { x: 8, y: 7, pathway: 'false', containing: null },
    { x: 8, y: 6, pathway: 'false', containing: null },
    { x: 9, y: 6, pathway: 'false', containing: null },
    { x: 2, y: 0, pathway: 'false', containing: null },
    { x: 1, y: 9, pathway: 'false', containing: null },
    { x: 1, y: 8, pathway: 'false', containing: null },
    { x: 2, y: 9, pathway: 'false', containing: null },
    { x: 2, y: 8, pathway: 'false', containing: null },
    { x: 1, y: 4, pathway: 'false', containing: null },
    { x: 1, y: 5, pathway: 'false', containing: null },
    { x: 9, y: 4, pathway: 'false', containing: null },
    { x: 7, y: 0, pathway: 'false', containing: null },
    { x: 8, y: 0, pathway: 'false', containing: null },
    { x: 9, y: 0, pathway: 'false', containing: null },
    { x: 0, y: 2, pathway: 'false', containing: null },
    { x: 0, y: 5, pathway: 'false', containing: null },
    { x: 0, y: 8, pathway: 'false', containing: null },
    { x: 0, y: 9, pathway: 'false', containing: null },
    { x: 0, y: 6, pathway: 'false', containing: null },
    { x: 0, y: 7, pathway: 'false', containing: null },
    { x: 0, y: 3, pathway: 'false', containing: null },
    { x: 9, y: 5, pathway: 'false', containing: null },
    { x: 3, y: 9, pathway: 'false', containing: null },
    { x: 7, y: 9, pathway: 'false', containing: null },
    { x: 9, y: 1, pathway: 'false', containing: null },
    { x: 9, y: 2, pathway: 'false', containing: null },
    { x: 9, y: 3, pathway: 'false', containing: null },
    { x: 9, y: 7, pathway: 'false', containing: null },
    { x: 9, y: 8, pathway: 'false', containing: null },
    { x: 9, y: 9, pathway: 'false', containing: null },
];

export const createGrid = (player, walls) => {
    const initialGrid = initializingGrid();
    const creatingpath = walls;
    for (var i = 0; i < initialGrid.length; i++) {
        for (var j = 0; j < creatingpath.length; j++) {
            if (initialGrid[i].x === creatingpath[j].x && initialGrid[i].y === creatingpath[j].y) {
                initialGrid[i] = creatingpath[j]
            }
        }
    }
    if (player) {
        var playerFound = initialGrid.find(item => {
            return item.x === player.x && item.y === player.y;
        })

        initialGrid[initialGrid.indexOf(playerFound)].containing = "player";

    }
    return initialGrid;
}


