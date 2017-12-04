function spinalCase(str) {
    return str.replace(/\s|[A-Z]|\_/g, function(match, p1, p2) {
            console.log(p1);

    });
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
