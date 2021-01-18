// for (let i = 0; i < 5; i++) {
//     kartotinas kodas
    
// }
console.log('Pradzia');

 for (let i = 0; i < 5; i++) {
    console.log('kartotinis kodas');
}

console.log('pabaiga');

console.log('-------------------------');

const words = ['abc', 'borisas', 'citrina', 'duobe', 'eziukas', 'fabrikas'];

for (let i = 0; i < words.length; i++) {
    console.log(i, words[i]);
}
console.log('--------------------------------');

let from = 50;
let till = 50;
let sum = 0;

for (let i = from; i < till; i++) {
    sum += i;


    console.log(i, sum);
    
}
const ats = `Suma nuo ${from} iki ${till} yra ${sum}`;

console.log(ats);