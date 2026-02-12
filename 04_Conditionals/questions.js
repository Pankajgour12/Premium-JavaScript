// let color = 'white';

// let theme = prompt("Choose your theme color (light, dark, pink, green) : ");

// if (theme === 'light') {
//     color = 'white'
// } else if (theme === 'dark') {
//     color = 'black'
// } else if (theme === 'pink') {
//     color = 'pink'
// } else if (theme === 'green') {
//     color = 'green'
// }

// if (theme !== 'light' && theme !== 'dark' && theme !== 'pink' && theme !== 'green') {
//     console.log("invalid theme selection")
// } else {
//     console.log(`Your selected theme is ${theme} and color is ${color} respectively!`);
// }


// Question 2
// let num1 = Number(prompt("Enter number 1 : "));
// let num2 = Number(prompt("Enter number 2 : "));
// let num3 = Number(prompt("Enter number 3 : "));
// console.log(num1, num2, num3)

// if(num1 < num2 && num1 < num3 ){
//     console.log(`${num1} is smallest`);
// }else if(num2 < num3){
//     console.log(`${num2} is smallest`);
// }else{
//     console.log(`${num3} is smallest`)
// }

// let userRole = "adsf";

// switch (userRole) {
//     case "admin":
//         console.log("full access");
//         break;
//     case "editor":
//         console.log("editor access");
//         break;
//     case "viewer":
//         console.log("can only view");
//         break;
//     default: console.log("invalid role");
// }



// // question 4:
// let num = 50;

// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("FizzBuzz")
// } else if (num % 5 === 0) {
//     console.log("Buzz")
// } else if (num % 3 === 0) {
//     console.log("Fizz")
// } else {
//     console.log("neither divisible by 3 nor by 5");
// }


// // quesiton 5
// let num1 = 23;
// let num2 = 7;
// let operator = "*";

// switch (operator) {
//     case "+":
//         console.log(`${num1} + ${num2} = ${num1 + num2}`);
//         break;
//     case "-":
//         console.log(`${num1} - ${num2} = ${num1 - num2}`);
//         break;
//     case "*":
//         console.log(`${num1} * ${num2} = ${num1 * num2}`);
//         break;
//     case "+":
//         console.log(`${num1} / ${num2} = ${num1 / num2}`);
//         break;
//     default:
//         console.log("Invalid operator")
// }


// question 6

let totalBalance = 100000

let usersChoice = Number(prompt("Enter your choice [1. Check Balance 2. Deposit 3. Withdraw 4. Exit]: "));

if(usersChoice === 1){
    console.log("your current balance is : ", totalBalance)
}else if(usersChoice === 2){
    let depositAmount = Number(prompt("Enter Amount to deposit: "));
    if(depositAmount > 0){
        totalBalance += depositAmount;
        console.log("Deposit successfull!")
        console.log("Your current balance is : ", totalBalance)
    }else{
        console.log("Please enter a valid deposite amount");
    }
}else if(usersChoice == 3){
    let withdrawAmount = Number(prompt("Enter Amount to deposit: "));
    if(withdrawAmount > 0 && withdrawAmount <= totalBalance){
        totalBalance -= withdrawAmount;
        console.log("Withdraw successfull!")
        console.log("Your current balance is : ", totalBalance)
    }else{
        console.log("Please enter a valid withdraw amount.")
    }
}else{
    console.log("Thanks for comming!");
}