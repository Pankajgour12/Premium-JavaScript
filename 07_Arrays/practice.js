//! create an object for a stuent with properties name, age, city, and isEnrolled.


/* let student = {
    name: "Pankaj",
    age: 24,
    city: "bhopal",
    isEnrolled: true
} */

// console.log(student);



//! Can an object key be a number or boolean ? try this
/* 
const obj = {
    true: "yes",
    42:"answer",
} */
// console.log(obj[42]);


//! Access the value of the key "name" in the student object and print it to the console.

/* const user ={
   "first-name": "Pankaj",
}

console.log(user["firstName"]);
console.log(user.firstName); */


//! Given a dynamic key, let kay = "age", how will you access user[key]?
/* let key = "age"
const user = {
    name: "Pankaj",
    age: 24,
    
} */

//  console.log(user[key]);


//! From the object below, print the latitude:

const locations = {
    city: "New York",
    coordinates:{lat: 40.7128,
    lng:-74.0060}
}

// console.log(locations?.coordinates?.lat);


//! What will be happen if coordinates is miising? How can you prevent errors?

/*
const locations = {
    city: "New York",
    // coordinates:{lat: 40.7128,
    // lng:-74.0060}
}*/

// console.log(locations?.coordinates?.lat); // Output: undefined (instead of throwing an error)




//! Destructure the key "first-name" as a variable called firstName from the user object.

 const user1 ={
    "first-name": "Pankaj",
 }

 let { "first-name": firstName } = user1;

// console.log(firstName); // Output: Pankaj



//! Use Object.entries() to print all key-value pairs as:.
// name: "Pankaj",
//    age: 24,
//  city: "bhopal",
//    isEnrolled: true


/*  let student = {
    name: "Pankaj",
    age: 24,
    city: "bhopal",
    isEnrolled: true
}

/* Object.entries(student).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
}); */

/* Object.entries(student).forEach((val)=>{
    console.log(`${val[0]}: ${val[1]}`);
}) */



    //! Create a function that takes an object with firstName and lastName properties and returns the full name.


/* 
let obj ={
    firstName: "Pankaj",
    lastName: "Gour"

}

function getFullName(user){
    return `${user.firstName} ${user.lastName}`;
}

console.log(getFullName(obj));

 */


//! Write a function that object and returns the number of propreties in the object.


 
let obj ={
    name: "Pankaj",
    age: 24,
    city: "bhopal",
    isEnrolled: true
}

function countProperties(object){
    return Object.keys(object).length;
}

console.log(countProperties(obj));