function sumPrime(num){
    var sum=0;


    for(var i=2; i <= num; i++){
        if (isPrimeNumber(i)){
            sum += i;
        }
    }
    return sum;
}
console.log(sumPrime(10));


function isPrimeNumber(number){
    var isPrime = true;
    for (var i = 2; i < number; i++){
        if (number % i == 0){
            return false;
        }cd 
    }
    return isPrime;
}

console.log('is 7 prime', isPrimeNumber(10));
