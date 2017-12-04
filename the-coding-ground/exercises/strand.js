function pairElement(str) {
  var pair = [];
  
  str = str.split('');
  
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'A') {
      pair.push(['A', 'T']);
    } else if (str[i] === 'T') {
      pair.push(['T', 'A']);
    } else if (str[i] === 'C') {
      pair.push(['C', 'G']);
    } else if (str[i] === 'G') {
      pair.push(['G', 'C']);
    }
  }
  
  return pair;
}

console.log(pairElement("GCG"));