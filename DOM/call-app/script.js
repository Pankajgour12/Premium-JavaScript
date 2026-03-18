// new cards create karna hai , 
//data local storage me save karna hai 
// buttons ko handle karna hai 
// filters ko handle karna hai 

let addNote = document.querySelector("#add-note");

let formContainer = document.querySelector(".form-container");

let closeForm = document.querySelectorAll(".closeForm")


const form = document.querySelector("form");

const imageInput = document.querySelector('input[placeholder="https://example.com/photo.jpg"]');
const nameInput = document.querySelector('input[placeholder="Enter Full Name"]');
const townInput = document.querySelector('input[placeholder="Enter Home Town"]');
const purposeInput = document.querySelector('input[placeholder="e.g. Quick appointment"]');

const categoryRadios = document.querySelectorAll('input[name="Category"]');

const submitBtn = document.querySelector(".submit-btn");

 
//form close of open 

addNote.addEventListener("click",()=>{
    formContainer.style.display = 'initial'
})
addNote.addEventListener("click",()=>{
    formContainer.style.display = 'none'
})





form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const image = form.querySelectorAll("input")[0].value.trim();
    const name = form.querySelectorAll("input")[1].value.trim();
    const town = form.querySelectorAll("input")[2].value.trim();
    const purpose = form.querySelectorAll("input")[3].value.trim();

    const category = form.querySelector('input[name="Category"]:checked');

    // validation start

    if (!image || !name || !town || !purpose) {
        alert("All fields are required");
        return;
    }

    if (!image.startsWith("http")) {
        alert("Invalid Image URL");
        return;
    }

    if (name.length < 3) {
        alert("Name must be at least 3 characters");
        return;
    }

    if (purpose.length < 5) {
        alert("Purpose too short");
        return;
    }

    if (!category) {
        alert("Select Category");
        return;
    }


    
    // success

    console.log({
        image,
        name,
        town,
        purpose,
        category: category.value
    });

    alert("Form Submitted Successfully");

    form.reset();
});
