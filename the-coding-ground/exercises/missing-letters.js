function fearNotLetter(str) {

var first = str.charCodeAt(0);

for (var i = 0; i < str.length; i++){
 if (str.charCodeAt(i) !== first){
 return String.fromCharCode(first)
 }
 else first++;
}

}

console.log(fearNotLetter("abcdefghjklmno"));