/*Create a function that takes two or more arrays and 
returns an array of the symmetric difference (△ or ⊕) of the provided array.*/


function sym(arr1,arr2) {
   var newArr = arr1.concat(arr2);

  function check(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  }

  return newArr.filter(check);


}
console.log(sym([1, 2, 3], [5, 2, 1, 4],[1,3,5]));
