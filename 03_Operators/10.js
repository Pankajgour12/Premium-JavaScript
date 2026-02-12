let a = 6; // binary: 110
let b = 3; // binary: 011
let c = "6";

// a += b << 1; // Bitwise left shift + assignment (b << 1 = 6)

a = a+b<<1;
console.log(a);

let d = a & b; // Bitwise AND → 12 & 3 = 00001100 & 00000011 = 00000000
let e = a | b; // Bitwise OR → 12 | 3 = 00001111 = 15
let f = a ^ b; // Bitwise XOR → 12 ^ 3 = 00001100 ^ 00000011 = 00001111 = 15
let g = ~a;  // Bitwise NOT → ~12 = -13

let check = (a == c) && (d < e) || !(f === e); // Mixed logical, comparison

let result = check ? typeof g : --b; // Ternary + unary + typeof

console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
console.log("d (a & b):", d);
console.log("e (a | b):", e);
console.log("f (a ^ b):", f);
console.log("g (~a):", g);
console.log("check:", check);
console.log("result:", result);