function factorialize(num) {
      if (num < 0) {
        return undefined;
    } else if (num == 0) {
        return 1;
    } else {
        return (num * factorialize(num - 1));
    }
}
console.log(factorialize(5));//120
console.log(factorialize(1));//1
// console.log(factorial(9));
// console.log(factorial(15);


