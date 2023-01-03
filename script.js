'use strict';
// let id = Symbol('id');
// const obj = {
//     name: 'Test',
//     // [Symbol('id')]: 1 
//     [Symbol('id')]: 1,
//     getId: function() {
//         return this[id];
//     }
// };

// let id = Symbol('id');
// obj[id] = 1;
// console.log(obj.getId());
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
// console.log(obj.id);

// for(let value in obj) {
//     console.log(value);
// }

const myAwesomeDB = {
    movies: [],
    actors: [],
    // id: 123
    // [Symbol('id')]: 123
    [Symbol.for('id')]: 123
};

// Сторонний код

myAwesomeDB.id = '323232';
console.log(myAwesomeDB.id);
// console.log(myAwesomeDB);
console.log(myAwesomeDB[Symbol.for('id')]);