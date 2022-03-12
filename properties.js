// Keys, values, entries, delete, seal, freeze

const bottle = { color: 'yellow',
                 price: 50, 
                 hold: 'water', 
                 isClean: true };

//1. getting all propertyies name

const Keys = Object.keys(bottle);
// console.log(Keys);

// 2. getting all values

const values = Object.values(bottle);
// console.log(values);

// 3. key, value pairs

const pairs = Object.entries(bottle);
// console.log(pairs);

// 4.delete from obj
delete bottle.isClean;
// console.log(bottle);

// 5.seal (can't delete property or include new but can change existing)
Object.seal(bottle);
bottle.price = 100;
console.log(bottle);