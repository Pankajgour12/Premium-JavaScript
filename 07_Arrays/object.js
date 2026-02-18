//! Object in js

//? Object is a collection of key value pairs. It is a data structure that allows us to store and manipulate data in a structured way. Objects are used to represent real-world entities and their properties and behaviors.

//? Creating an Object
//? We can create an object using the Object constructor or using the object literal syntax.
//? Using Object constructor
// let obj1 = new Object();

//? Using object literal syntax
// let obj2 = {};  


/* let obj ={
    name: "alpha",
    age: 24,
    city: "bhagalpur",
    isMarried: true,
}
  
let keys = Object.keys(obj);
console.log(keys);

let values = Object.values(obj);
console.log(values);

let entries = Object.entries(obj);
console.log(entries); */


let obj = {
    name: "Pankaj",
    age: 24,
    city: "bhopal",
    isMarried: false,
}

for(let key in obj){
    console.log(key + ": " + obj[key]);
}