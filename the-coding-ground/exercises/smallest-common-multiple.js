function smallestCommons(arr) {
  var sortedList = arr.sort();
  var lowest = sortedList[0];
  var highest = sortedList[1];
  var currentMultiple =highest;
  var range = [];
  for(var i = lowest; i <= highest; i++){
    range.push(i);
  }
 while(!isCommonMultiple(range,currentMultiple,highest)){
  // 
     currentMultiple += highest; 
 }
  return currentMultiple;

}


function isCommonMultiple(range,currentMultiple,highest){
 for(var i = 0; i < range.length; i++){
   if( currentMultiple % range[i] !== 0){
     return false;
   }
 }
  return true;
}

smallestCommons([1, 13]);
