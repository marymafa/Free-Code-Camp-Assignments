var newArr = [];
function steamrollArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      return steamrollArray(arr[i]);
    }
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
