function isPrime(num){
for (i=2; i<=num - 1; i++){
if ( num%i == 0 ){
return false;
}
return true;
}
}
console.log(isPrime(1));
console.log(isPrime(2));