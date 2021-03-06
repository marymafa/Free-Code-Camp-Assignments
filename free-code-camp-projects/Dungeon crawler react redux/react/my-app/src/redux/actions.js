export const createGrid = (grid) => {
    return { type: "CREATE_GRID", payload: grid }
};
export const createNewGrid = () => {
    return { type: "CREATE_NEXT_STAGE" }
};
export const boss = (setboss) => {
    return { type: "SET_BOSS", payload: setboss }
};
export const changePlayerLocation = () => {
    return { type: "CHANGE_USER_LOCATION" };
}
export const movePlayer = (moves) => {
    return { type: "MOVE_PLAYER", payload: moves };
};
export const attackEnemy = (hitEnemy) => {
    return { type: "ENEMY", payload: hitEnemy }
};
export const storeEnemies = (enemies) => {
    return { type: "SET_ENEMIES", payload: enemies }
};
export const storeHealths = (healths) => {
    return { type: "SET_HEALTHS", payload: healths }
};
export const storeWeapons = (weapons) => {
    return { type: "SET_WEAPONS", payload: weapons }
};
export const storeDoors = (doors) => {
    return { type: "SET_DOORS", payload: doors }
};
export const increaseHealth = (addHealth) => {
    return { type: "INCREASE_HEALTH", payload: addHealth }
};
export const increseExperience = (xp) => {
    return { type: "INCREASE_EXPERIENCE", payload: xp }
};
export const increaseLifeOfPlayer = (playerLife) => {
    return { type: "INCREASE_PLAYER_LIFE", payload: playerLife }
};
export const increaseWeapon = (wpns) => {
    return { type: "INCREASE_WEAPON", payload: wpns }
};
export const decreaseWeapon = (decreaseweapon) => {
    return { type: "DECREASE_WEAPON", payload: decreaseweapon }
};
export const decreaseHealth = (decreasehealth) => {
    return { type: "DECREASE_HEALTH", payload: decreasehealth }
};
export const removeHealth = (hlths) => {
    return { type: "REMOVE_HEALTH", payload: hlths }
};
export const removeWeapons = (wpn) => {
    return { type: "REMOVE_WEAPON", payload: wpn }
};
export const removeEnemies = (enemy) => {
    return { type: "REMOVE_ENEMIES", payload: enemy }
};
export const removeBoss = (boss) => {
    return { type: "REMOVE_BOSS", payload: boss }
}