function telephoneCheck(str) {
    var checker = /^1[\s\-]?|(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/

    return checker.test(str)
}

console.log(telephoneCheck("(555)"))

console.log(telephoneCheck("5555555555"))
console.log(telephoneCheck("555-555-5555"))
console.log(telephoneCheck("555 555 5555"))
console.log(telephoneCheck("(555)555-5555"))
console.log(telephoneCheck("(555) 555-5555"))
console.log(telephoneCheck("1 555 555 5555"))
console.log(telephoneCheck("123**&!!asdf#"))
// console.log(telephoneCheck("555-5555"))
// console.log(telephoneCheck("555-551-5555"))


// console.log(telephoneCheck("5555555555"))




// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 1 555 555 5555
// 1(555) 555 5555
