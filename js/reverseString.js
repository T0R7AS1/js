function reverseString(text) {
    const size = text.length;
    const reversetext = '';


    for (let i = 0; i < size; i++) {
        const letter = text[i];
        reversetext = letter + reversetext;
        console.log(i, letter, reversetext);
    }
    return reversetext;
}

console.log(reverseString('labas'), '->', 'sabal');




