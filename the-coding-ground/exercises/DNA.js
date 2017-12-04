function pairElement(str) {
    str = str[0].split('');

    switch (str) {
        case 'A':
            str = ['T', 'A'];
            break;
        case 'T':
            str = ['A', 'T'];
            break;
        case 'C':
            str = ['G', 'C'];
            break;
        case 'G':
            str = ['C', 'G'];
            break;
    }

    return str;
}

console.log(pairElement(['GCG']));