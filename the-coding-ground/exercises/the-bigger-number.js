function nextBigger(num) {
    num = num + "";
    return num.split(',').reverse('').join('');
    var numbers = num.sort(function (a, b) {
        return b - a;
    })
    return numbers;
}
console.log(nextBigger(12));
