
// input events 
/* let inp = document.querySelector("input");
let body = document.querySelector("body")

const div = document.createElement('div');  

inp.addEventListener("input",(evt)=>{
     if(evt.data !== null) console.log(evt.data);
div.innerText = evt.data

body.appendChild(div)
 
}) */

 
// keydown 
/* let h1 = document.querySelector("h1")


window.addEventListener("keydown",(data)=>{
    if(data.key ===" "){
        h1.textContent ="SPC"
    }
    else{
        h1.textContent = data.key
    }
}) */


    // file upload function 

/* let inp = document.querySelector("#inp") 
let btn = document.querySelector("#btn")

btn.addEventListener("click",()=>{
    inp.click();

})

inp.addEventListener("change",(data)=>{

   const file = data.target.files[0]

   if(file){
    btn.textContent = file.name
   }
  
   

}) */


const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let card = document.querySelector(".card")
    let profile = document.querySelector(".profile")

    
    
    card.appendChild(profile)
    

})







