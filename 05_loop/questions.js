// // question 1
// let n = Number(prompt("Enter a number: "));

// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i; // sum = sum + i
// }

// console.log("Sum = ", sum)


// // question 2
// let m = Number(prompt("Enter starting number: "));
// let n = Number(prompt("Enter ending number: "));

// let sum = 0;
// for (let i = m; i <= n; i++) {
//     sum += i; // sum = sum + i
// }

// console.log("Sum = ", sum)



// // question 3
// let n = Number(prompt("Enter ending number: "));

// for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }


// // question 4:

// let computerNumber = 6;
// let guess = null;

// while(guess !== computerNumber){
//     guess = Number(prompt("Enter correct number: "))

//     if(isNaN(guess)){
//         alert("Number is invalid, please try again!");
//     }else if(guess < computerNumber){
//         alert("Number is low!, please try again!");
//     }else if(guess > computerNumber){
//         alert("Number is high, please try again!");
//     }else{
//         alert("Congratulation!.. Your guess is correct!!");
//     }
// }


// // question 5:

// let password = "alpha";
// let noOfAttempt = 0;
// let userPassword = null;

// while (password !== userPassword && noOfAttempt < 3){

//     userPassword = prompt("Enter password: ");
//     noOfAttempt++;

//     if(userPassword === password){
//         alert("congratulations your password matched!");
//     }else if(noOfAttempt >= 3){
//         alert("Your attempt is over, sorry!")
//     }else{
//         alert("Your password is incorrect, please try again!")
//     }
// }

// // question 6:

// let n = 5;
// let fact = 1;

// for(let i=1; i<=n; i++){
//     fact *= i; // fact = fact * i
// }

// console.log("factorial = ", fact);


// // question 7

// let n = 5;

// for(let i = 1; i<=5; i++){
//     let str = "";
//     for(let j=1; j<=i; j++){
//         str = str + j + " ";
//     }
//     console.log(str);
// }

// question 8:


let playAgain = 'yes';

while (playAgain === 'yes') {
    alert("You wake up in the dark forest!");

    let userChoice = prompt("Do you want to go left or right? ");

    if (userChoice === 'left') {
        alert("You see something shiny in the mud!");
        userChoice = prompt("Do you pick it up? (yes or no) ");
        if (userChoice === 'yes') {
            alert("It is a magical stone! you are teleported to safety, you win!");
        } else {
            alert("mar gya tu!")
        }
    } else {
        alert("you find a cave!");
        userChoice = prompt("Do you enter the cave? (yes or no) ")
        if (userChoice === 'yes') {
            alert("you barely escape!")
        } else {
            alert("acha raat beetega apka!");
        }
    }

    userChoice = prompt("Do you want to play again? (yes or no)")
    if(userChoice === 'no'){
        playAgain = 'no';
        alert("Thanks for playing!")
    }
}