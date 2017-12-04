function checkPalindrome(word) {
   var word = word.toLowerCase();
		var reverse = word.split('').reverse().join('');
		if (word === reverse) {
			return true;
		}else {
			return false;	
		}
    }
console.log(checkPalindrome("car"));
console.log(checkPalindrome("madam"));
console.log(checkPalindrome("mary"));
    


