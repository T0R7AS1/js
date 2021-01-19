/*


*/

const from = 0;
const till = 11;
const divider = 5;

let count = 0;
for (let i =from; i < till; i++) {
    if (i % divider === 0) {
        count++;
    }    
}

const ats = `Skaiciu intervale tarp ${from} ir ${till} besidalijanciu be liekanos is ${divider} yra ${count} vienetai`;
console.log(ats); 