let cartValue = 133;
let discountedCartValue;

if(cartValue < 50){
    discountedCartValue = cartValue;
    console.log("No discount applied!");
}else if(cartValue <100){
    discountedCartValue = cartValue - (cartValue * 0.1);
    console.log("10% discount applied!");
}else{
    discountedCartValue = cartValue - (cartValue * (20/100))
    console.log("20% discount applied");
}

console.log("your final cartValue is", discountedCartValue);

// let a = 5
// let b = 6
// let c = 7
// let d = 8
// console.log(`value of a is ${a} value of b is ${b} value of c is ${c} value of d is ${d}`);

// let result = 10/3;
// console.log(typeof result,  result.toFixed(4));

