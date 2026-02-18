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
/* 

let obj = {
    name: "Pankaj",
    age: 24,
    city: "bhopal",
    isMarried: false,
} */


    // object keys 


/* 
    let obj = {
    name: "Pankaj",
    age: 24,
    city: "bhopal",
    email: "pankaj@123"
    }

    // object keys
    let keys = Object.keys(obj)

    console.log("keys",keys);

    // object values
    let values = Object.values(obj)

    console.log("values", values);

//    object entries

    let entries = Object.entries(obj)

    console.log("entries", entries); */

/* 
//? Spread operator in object
        let obj = {
    name: "Pankaj",
    age: 24,
    city: "bhopal",
    email: "pankaj@123"
    } */

    // let obj2 ={...obj}
    // console.log("obj2",obj2);


/*     //? Object Destructuring
    let {name, age, city} = obj
    console.log("name : ", name);
    console.log("age  :", age);
    console.log("city :", city);
 */

// ? Object.assign() method
/*  let obj1 = {
    name: "Pankaj",
    age: 24,
} 
let obj2 = {
    city: "bhopal",
    email: "pankaj@123"
}

let obj3 = Object.assign({isMarried: false}, obj1, obj2)
console.log("obj3", obj3); */


// deep clone

let obj1 = {
    name: "Pankaj",
    age: 24,
    address: {
        city: "bhopal",
        state: "MP"
    }
}

let obj2 = JSON.parse(JSON.stringify(obj1))// JSON.stringify() converts the object into a JSON string, and JSON.parse() converts the JSON string back into an object. This creates a deep copy of the original object, meaning that nested objects are also copied rather than referenced.

obj2.address.city = "indore"

console.log("obj1", obj1);
console.log("obj2", obj2);