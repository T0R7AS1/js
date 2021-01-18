"use strict";

/*
perrasyti teksta is galo i prieki

*/

const text = 'abcdef';
const size = text.length;
let reversetext = '';

// for (let i = 0; i < text.length; i++) {
//     const letter = text[i];

//     reversetext = letter + reversetext;

//     console.log(i, letter, reversetext);
    
// }
// console.log(`finale gavau: ${reversetext} `);


for (let i = size - 1; i >= 0; i--) {
    const letter = text[i];
    reversetext += letter;
    console.log(i, letter, reversetext);
}

console.log(`finale gavau: ${reversetext} `);