/* //! Array 
//? Array is a data structure that can hold multiple values at once.
//? It is a collection of items stored at contiguous memory locations.
//? The idea is to store multiple items of the same type together.
//? Array is a special variable, which can hold more than one value at a time.

//? Creating an Array
//? We can create an array using the Array constructor or using the array literal syntax.
//? Using Array constructor

// let arr1 = new Array();

//? Using array literal syntax
// let arr2 = [];

//? Adding elements to an Array
//? We can add elements to an array using the push() method or by directly assigning values to specific indices.
arr1.push(1); // Adds 1 to the end of arr1
arr1.push(2); // Adds 2 to the end of arr1
arr1[0] = 0; // Assigns 0 to the first index of arr1
arr2.push('Hello'); // Adds 'Hello' to the end of arr2
arr2.push('World'); // Adds 'World' to the end of arr2
arr2[0] = 'Hi'; // Assigns 'Hi' to the first index of arr


//? Accessing elements in an Array
//? We can access elements in an array using their index. The index starts from 0.
console.log(arr1[0]); // Output: 0
console.log(arr1[1]); // Output: 1
console.log(arr1[2]); // Output: 2
console.log(arr2[0]);       


//? Array Length
//? We can get the length of an array using the length property.
console.log(arr1.length); // Output: 3
console.log(arr2.length); // Output: 2


//  ? Iterating over an Array
//? We can iterate over an array using a for loop or the forEach() method.
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]); // Output: 0, 1, 2
}
arr1.forEach(element => {
    console.log(element); // Output: 0, 1, 2
}); 

//? Multidimensional Arrays
//? We can create multidimensional arrays, which are arrays of arrays.
let arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];       
console.log(arr3[0][0]); // Output: 1
console.log(arr3[1][1]);



//? Array Methods

//? JavaScript provides various methods to manipulate arrays, such as push(), pop(), shift(), unshift(), splice(), slice(), etc.
arr1.push(3); // Adds 3 to the end of arr1


arr1.pop(); // Removes the last element from arr1
console.log(arr1); // Output: [0, 1, 2]

arr1.shift(); // Removes the first element from arr1
console.log(arr1); // Output: [1, 2]

arr1.unshift(0); // Adds 0 to the beginning of arr1
console.log(arr1); // Output: [0, 1, 2]

arr1.splice(1, 1); // Removes the element at index 1 from arr1
console.log(arr1); // Output: [0, 2]

let newArr = arr1.slice(0, 1);  
console.log(newArr); // Output: [0]



// reverse() method reverses the order of the elements in an array.
arr1.reverse();
console.log(arr1); // Output: [2, 0]

// sort() method sorts the elements of an array in ascending order.
arr1.sort();
console.log(arr1); // Output: [0, 2]


 */



//!Q .


//? 1. Create an array with 3 fruits and print the second fruit.
 let fruits = ['Apple', 'Banana', 'Cherry'];
/*

console.log(fruits[1]); */




/* //? 2. Add "mango" at the end of and "grapes" at the beginning of the fruits array and print the updated array.

fruits.push('Mango'); // Adds 'Mango' to the end of the fruits array
fruits.unshift('Grapes'); // Adds 'Grapes' to the beginning of the fruits array
console.log(fruits); */

 //? 3. Replace the Banana with "Kiwi" and print the updated array.

/* fruits[1] = 'Kiwi'; // Replaces 'Banana' with 'Kiwi' at index 2
console.log(fruits); // Output: ['Grapes', 'Apple', 'Kiwi', 'Cherry', 'Mango']

 */

//! What's the difference between push() and unshift() methods in JavaScript arrays?

/* The push() method adds one or more elements to the end of an array and returns the new length of the array. 
The unshift() method adds one or more elements to the beginning of an array and also returns the new length of the array. */




//? 4. Remove the Last fruit from the fruits array and print the updated array.


/* fruits.pop(); // Removes the last element from the fruits array
console.log(fruits); // Output: ['Grapes', 'Apple', 'Kiwi', 'Cherry'] */

//? 5. Remove the first fruit from the fruits array and print the updated array.

/* fruits.shift(); // Removes the first element from the fruits array
console.log(fruits); // Output: ['Apple', 'Kiwi', 'Cherry'] */


//? Insert "Orange" at index 1 in the fruits array and print the updated array.
/* 
fruits.splice(1, 0, 'Orange'); // Inserts 'Orange' at index 2 without removing any elements
console.log(fruits); // Output: ['Apple', 'Orange', 'Kiwi', 'Cherry'] 

 */



//? use .map() to square each number:

/* 
let arr = [1, 2, 3, 4, 5];
let squaredArr = arr.map(num => num * num);
console.log(squaredArr); // Output: [1, 4, 9, 16, 25]
 */

//? use .filter() to keep numbers greater than 10:

/* let arr = [5, 10, 15, 20, 25];
let filteredArr = arr.filter(num => num > 10);
console.log(filteredArr); // Output: [15, 20, 25]


 */
/* //? use .reduce() to sum all numbers:

let arr2 = [1, 2, 3, 4, 5];
let sum = arr2.reduce((acc, currentValue) => acc + currentValue, 0);
console.log(sum); // Output: 15
 */



//? use .find() to get the first number greater than 10:

/* let arr3 = [5, 10, 15, 20, 25];
let foundNumber = arr3.find(num => num > 10);
console.log(foundNumber); // Output: 15
 */
/* 
//? use .some() to check if any student has scored  below 50:

 let students = [ 45, 55, 67, 89, 34];

/* let hasFailed = students.some(score => score < 50);
console.log(hasFailed); // Output: true
 */


//? use .every() to check if all students have scored above 40:
/* 
 let allPassed = students.every(score => score > 40);
console.log(allPassed); // Output: false
 */

//* Destucturing  this array to get firstname and lastname 

let person = ['Pankaj', 'Gour'];

let [firstName, lastName] = person; // Destructuring the array to get firstName and lastName
console.log(firstName); // Output: 'Pankaj'
console.log(lastName); // Output: 'Gour'



//? Merge two arrays using the spread operator:

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArr = [...arr1, ...arr2];
console.log(mergedArr); // Output: 