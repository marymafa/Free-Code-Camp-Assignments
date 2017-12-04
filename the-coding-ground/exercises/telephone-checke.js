function telephoneCheck(str) {
  // Good luck!
  //var format= "555-555-5555, (555)555-5555 (555), 555-5555, 555 555 5555, 5555555555 ,1 555 555 5555";
  var format= "555-555-5555";
  if(str===format){
    return true;
  }
  return false;
}

console.log(telephoneCheck("555-555-5551"));