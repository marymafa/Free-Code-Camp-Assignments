function permAlone(a, n = a.length) {
 
    var results = [];
    var c = [];

    for (var i = 0; i < n; i++) {
        c[i] = 0;
    }
    results.push(a);
     i = 0;
    while (i < n) {
        if (c[i] < i) {
            if (i % 2 === 0) {
                var splitted = a.split('');
                var temp0 = splitted[0];
                var tempi = splitted[i];
                splitted[0] = tempi;
                splitted[i] = temp0;
                a = splitted.join('');

            } else {
                var splitt = a.split('');
                var temp1 = splitt[c[i]];
                var tempx = splitt[i];
                splitt[c[i]] = tempx;
                splitt[i] = temp1;
                a = splitt.join('');
            }
            results.push(a);
            c[i] += 1;
            i = 0;
        } else {
            c[i] = 0;
            i += 1;
        }
    }
        var permutation = results.filter(function(letters){
     return !letters.match(/(.)\1+/g);
  });
                                       
                                        
return permutation.length;
}
permAlone('aab');
