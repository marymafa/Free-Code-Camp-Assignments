function translate(str) {
 var vowels = /\b[aeiouAEIOU]/;
 var consonants = /[^aeiouAEIOU]/;
 var consonant_cluster = /\b[bcdfghjklmnpqrstvwxyz]{2,}/;
    if (vowels.test(str)) { 
     return str+'way';
    } else if (consonant_cluster.test(str)) {
        return str.substr(2)+str.substr(0,2)+'ay'; 
    } else {
     return str.substr(1)+str.substr(0,1)+'ay';   
    }
}

console.log(translate("glove");