var temp;
function generate(n, str){
  temp = str;
  if (n === 1){
    console.log(str);
  } else {
    for (var i = 0; i < n - 1; i++){
      generate(n-1, temp);

      if (n % 2 === 0){
        let split = temp.split("");
        split.splice(i, 1, temp[n-1]);
        split.splice(n-1, 1, temp[i]);
        temp = split.join("");
      } else {
        let split = temp.split("");
        split.splice(0, 1, temp[n-1]);
        split.splice(n-1, 1, temp[0]);
        temp = split.join("");
      }
    }
    generate(n - 1, temp);
  }
}

generate(3, "aab");