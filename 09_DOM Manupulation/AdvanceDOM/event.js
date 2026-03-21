// let firstButton = document.querySelector('.firstBtn');
// let box = document.querySelector('.box');
// let nameInput = document.querySelector('.name');
// let form = document.querySelector('form');
// let submitBtn = document.querySelector('.submitBtn')
// let h1 = document.querySelector('h1');

// firstButton.addEventListener('mousedown',function(){
//     console.log("mouse down")
// })
// firstButton.addEventListener('mouseup',function(){
//     console.log("mouse up")
// })

// box.addEventListener('mouseenter',()=>{
//     console.log("mouse enter ho gya hai")
// })

// box.addEventListener('mouseleave',()=>{
//     console.log("mouse leave ho gya hai")
// })

// box.addEventListener('mousemove',()=>{
//     console.log("mouse leave ho gya hai")
// })

// box.addEventListener('contextmenu',()=>{
//     console.log("lajsdlfjslkdjflkdsajf")
// })

// box.addEventListener('auxclick',()=>{
//     console.log("aux click")
// })

// firstButton.addEventListener('keypress',function(){
//      console.log("key press hua hai hamar")
// })
// firstButton.addEventListener('keyup',function(){
//      console.log("key up hua")
// })
// firstButton.addEventListener('keydown',function(){
//      console.log("key down hua")
// })

// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     console.log("sumbit ho gya")
// })

// nameInput.addEventListener('change',()=>{
//     console.log(nameInput.value)
// })

// box.addEventListener('touchmove',()=>{
//     console.log("mobile screen touch move ho rha hai")
// })


// window.addEventListener('resize',()=>{
//     console.log("scroll ho jaao")
// })

// h1.addEventListener('copy',()=>{
//     console.log(window.getSelection().toString())
// })


// let decBtn = document.querySelector('.decBtn')
// let incBtn = document.querySelector('.incBtn')
// let counterValue = document.querySelector('.counterValue')


// decBtn.addEventListener('click', () => {
//     let value = Number(counterValue.innerText)
//     if(value <= 1){
//         return;
//     }
//     counterValue.innerText = value - 1
// })
// incBtn.addEventListener('click', () => {
//     counterValue.innerText = Number(counterValue.innerText) + 1
// })

// question2:
let form = document.querySelector('form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let submitBtn = document.querySelector('submitBtn');
let body = document.querySelector('body');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!nameInput.value || !emailInput.value){
        alert("fill all the details firts")
        return;
    }

    let div = document.createElement('div');
    div.innerHTML = `
    <p>${nameInput.value}</p>
    <p>${emailInput.value}</p>
    `
    
    body.append(div);
})