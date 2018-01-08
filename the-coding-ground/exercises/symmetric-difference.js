/*Create a function that takes two or more arrays and 
returns an array of the symmetric difference (△ or ⊕) of the provided array.*/


function sym() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }

      function symDiff(arr1,arr2){
      var results=[];
      arr1.forEach(function(item){
        if(arr2.indexOf(item)<0){
          results.push(item);
        }
      })
      arr2.forEach(function(item){
        if(arr1.indexOf(item)<0){
          results.push(item);
        }
      })
      return results;
    }
    return args.reduce(symDiff);
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));


