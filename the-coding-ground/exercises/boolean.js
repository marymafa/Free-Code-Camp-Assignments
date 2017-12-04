function booWho(bool) {
    if (typeof(bool) === "boolean") {
        return true;
    } else {
        return false;
    }
}


console.log(booWho(NaN));// should return false.
console.log(booWho("a"));// should return false.
console.log(booWho("true"));// should return false.
console.log(booWho(false));// should return false. 