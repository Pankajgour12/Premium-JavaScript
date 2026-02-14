// function alpha() {
//     console.log("hello bhai")
// }

// alpha();

// function beta(){
//     return "Mkl";
// }


// let a = beta();
// console.log(a);

// function gamma(str){
//     console.log("hello bro", str)
// }

// gamma("manas");


// function greet(name){
//     console.log(1)
//     console.log(2)
//     return "hello bro" + " " + name;
//     console.log("something something")
// }

// let a = greet("Lambda");
// console.log(a);


// function greet(name=2+3+5-2){
//     console.log(name);
// }

// greet();

// function sum(a,b){
//     return a + b;
// }

// let sum2 = function(a, b){
//     return a + b;
// }

// let a = sum(2, 3);
// let b = sum2(2, 3)
// console.log(a,b)

// let alpha = ()=>{
//     console.log("hello")
// }

// let alpha = ()=>{
//     console.log("hello manas")
// }

// setTimeout(alpha, 3000);

// immediately invoked function expression

// console.log("hello")

// (async function(){
//     console.log("hello")
// })();


// greet();
// greet2();

// function greet(){
//     console.log("hello")
// }


// let greet2 = () =>{
//     console.log("hello 2")
// }


// question1

// function capitalizeFirstLetter(str) {
//     console.log(str.charAt().toUpperCase() + str.slice(1))
// }

// capitalizeFirstLetter("alpha beta gamm")


// setTimeout(() => {
//     alert("Please Login")
// }, 5000);

// let calculateDicountedPrice = (price, discount) =>{
//     let discountedPrice = price - price*(discount/100)
//     return discountedPrice
// }

// let result = calculateDicountedPrice(1550, 15);
// console.log(result)


// function generateUsername (fullName){
//     return "@" + fullName
// }

// console.log(generateUsername("manas"))


function generateInstructions(color) {
    if (color === 'green') {
        return "go"
    } else if (color === 'red') {
        return "stop"
    } else if (color === 'yellow') {
        return "caution"
    } else {
        return "invalid color"
    }
}

let inst = generateInstructions("aldsjflkdsj")
console.log(inst)