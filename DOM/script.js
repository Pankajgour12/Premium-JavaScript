let form = document.querySelector("form")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

let emailError = document.querySelector("#emailError")
let passError = document.querySelector("#passwordError")

form.addEventListener('submit',(e)=>{

    e.preventDefault();

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passans  = passwordRegex.test(password.value);

    emailError.textContent = ""
    passError.textContent = ""

    if(!emailans){
        emailError.textContent = "pls fill valid email"
    }

    if(!passans){
        passError.textContent = "pls fill valid password"
    }

})