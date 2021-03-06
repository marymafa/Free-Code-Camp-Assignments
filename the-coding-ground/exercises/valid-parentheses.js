
/*Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.*/
function sumFibs(num) {
  var previousNumber=0;
  var currentNumber=1;
  var result=0;
  
  while(currentNumber <=num){
      if(currentNumber%2 !== 0){
          result += currentNumber;
        }
        currentNumber=currentNumber +previousNumber;
        previousNumber=currentNumber-previousNumber;
          
    }
    return result;
}

console.log(sumFibs(4));
