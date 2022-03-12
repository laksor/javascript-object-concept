// Keys, values, entries, delete, seal, freeze

const bottle = { color: 'yellow', price: 50, hold: 'water', isClean: true };

//1. getting all propertyies name
const Keys = Object.keys(bottle);
// console.log(Keys);

// 2. getting all values
const values = Object.values(bottle);
console.log(values);