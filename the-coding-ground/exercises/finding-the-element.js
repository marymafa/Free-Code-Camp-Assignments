function findElement(arr, func) {
  var num = 0;
  for(i = 0; i < arr.length; i++){
    if(func(arr[i]) === true){
      return arr[i];
    }
  }
}
findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
