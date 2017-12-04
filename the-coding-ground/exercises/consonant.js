function translatePigLatin(str) {
    var vowels = ['aeiou'];
    var consonant = ['bcdfghjklmnqprstvwxyz'];
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            return str + 'way';
        } else if (consonant.includes(str[i])) {
            return str.substr(1) + str.substr(0, 1) + 'ay';
        } else {
            return str.substr(1) + str.substr(0, 1) + 'ay';
        }
    }
    return str;
}

console.log(translatePigLatin("mary"));
