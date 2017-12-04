function addTogether(a,b){
  if (isNum(a)) {
    if (isNum(b))
      return a + b;
    else if (!b)
      return function(b) {
        if (isNum(b))
          return a + b;
      };
    }
    
    /* function isNummber(numbers){
 if(numbers){
   return true;
 } 
  return false;
}*/

}

 
//console.log(isNummber(2,3));
console.log(addTogether(2,3));

