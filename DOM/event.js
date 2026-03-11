
// input events 
let inp = document.querySelector("input");
let body = document.querySelector("body")

const div = document.createElement('div');  

inp.addEventListener("input",(evt)=>{
//     if(evt.data !== null) console.log(evt.data);
div.innerText = evt.data

body.appendChild(div)
 
})


