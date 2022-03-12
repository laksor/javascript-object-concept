
// loop in object (for in , for of)
// for in for object

const bottle = { color: 'yellow',
                 price: 50, 
                 hold: 'water', 
                 isClean: true };

for(const prop in bottle){
    console.log(prop, bottle[prop]);
}    

// entries

for(const [keys, value] of Object.entries(bottle)){
    console.log(keys, value);
}
