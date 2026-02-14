//! Array 
//? Array is a data structure that can hold multiple values at once.
//? It is a collection of items stored at contiguous memory locations.
//? The idea is to store multiple items of the same type together.
//? Array is a special variable, which can hold more than one value at a time.

//? Creating an Array
//? We can create an array using the Array constructor or using the array literal syntax.
//? Using Array constructor
let arr1 = new Array();
//? Using array literal syntax
let arr2 = [];

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






