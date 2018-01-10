
function mergingTwoArray(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    return newArr;
}
function remove(array, element) {
    const index = array.indexOf(element);
    return array.splice(index, 1);
}
function updateInventory(arr1, arr2) {
    arr2.forEach(function (element) {
        for (var index = 0; index < arr1.length; index++) {
            if (element[1] === arr1[index][1]) {
                element[0] += arr1[index][0];
                remove(arr1, arr1[index])
            }
        }

        if (arr1.indexOf(element) === -1) {
            arr1.push(element);
        }
    })
    arr1.sort(function (a, b) {
        if (a[1] < b[1]) {
            return -1;
        }else if(a[1]>b[1]){
             return 1;
        }

    })
    return arr1
}
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));