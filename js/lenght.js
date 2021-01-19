function length(number) {
    if (typeof number !== 'number') {
        return 'ERROR: reikia skaiciaus.'
    }
    if (!isFinite(number)) {
        return 'ERROR: turi buti tikras skaicius.'
    }

    const numberAsString = '' + number;
    const nlength = numberAsString.length;

    if (number % 1 !== 0) {
        nlength--;
        }
    if (number < 0 ) {
        nlength--;
    }
    return nlength
}

console.log(length(true));
console.log(length(false));
console.log(length('asd'));
console.log(length(NaN));
console.log(length(Infinity));
console.log(length(-Infinity));
console.log(length([]));
console.log(length([5]));
console.log(length('asd'));
console.log(length(5), '->', 1 );
console.log(length(781), '->', 3);
console.log(length(37060123456), '->', 11 );
console.log(length(-5), '->', 1 );
console.log(length(-781), '->', 3);
console.log(length(-37060123456), '->', 11 );
