
function pairwise(arr, arg) {
    var sum = 0;
    var paired = arr.slice();
    for (var i = 0; i < paired.length; i++) {
        for ( j=i+1; j< paired.length; j++) {
            if (paired[i] + paired[j] === arg) {
                sum += i + j;

               delete paired[i];
               delete paired[j];

            }
    
        }

    }
    return sum;
}


console.log(pairwise([1, 4, 2, 3, 0, 5], 7));