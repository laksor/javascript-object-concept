//  Different way to Create Object

// 1.using object literal
const student = {name: 'naimara', age: 55, add: 'komla-bazar'};

// 2. constructor

const person = new Object();

// 3. 
const human = Object.create(student);
// const human = object.create(null);
// console.log(human);

// 4. object from class
class People {
    constructor(name, age){
        this.name = name;
        this.age= age;
    }
}
const peo = new People('lama', 21);
console.log(peo);