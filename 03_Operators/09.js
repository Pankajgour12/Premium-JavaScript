let x = 10;
let y = 5;
let z = "10";

x += y * 2;  // Arithmetic + Assignment
let isEqual = x == z; // Loose comparison
let isStrictEqual = x === z; // Strict comparison
let logicTest = (isEqual || isStrictEqual) && !(y > 10); // Logical + Comparison + NOT

let result = logicTest ? ++x : --y; // Ternary + Pre-increment/Pre-decrement

console.log("x:", x);
console.log("y:", y);
console.log("z:", z);
console.log("isEqual:", isEqual);
console.log("isStrictEqual:", isStrictEqual);
console.log("logicTest:", logicTest);
console.log("result:", result);
console.log("Type of z:", typeof z); // Unary operator typeof