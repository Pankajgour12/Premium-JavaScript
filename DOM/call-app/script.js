// new cards create karna hai , 
//data local storage me save karna hai 
// buttons ko handle karna hai 
// filters ko handle karna hai 

let addNote = document.querySelector("#add-note");

let formContainer = document.querySelector(".form-container");

let closeForm = document.querySelectorAll(".closeForm")

 
//form close of open 

addNote.addEventListener("click",()=>{
    formContainer.style.display = 'initial'
})
addNote.addEventListener("click",()=>{
    formContainer.style.display = 'none'
})
