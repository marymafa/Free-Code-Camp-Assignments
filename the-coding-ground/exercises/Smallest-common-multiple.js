function smallestCommons(arr) {
    var arrayOfMultiples = [];
    var range= 0;

    for (var i = 2; i <= arr; i++) {
        if (isCommonMultiple(i)) {
            arrayOfMultiples.push(i);
            range += i;
        }
    }
    return range;
}
console.log(smallestCommons([1, 5]));


function isCommonMultiple(arr) {
    for (var i = 2; i < arr; i++) {
        if (arr % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isCommonMultiple([23, 18]));
