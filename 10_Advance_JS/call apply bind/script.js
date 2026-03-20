//! call apply bind 


// function ko call karte waqt aap set kr set kar sakte ho ki uski this ki value kya hogi 

//15️⃣ Interview Definition (Strong Answer)

//*call, apply and bind are methods available on JavaScript functions that allow explicit control over the this keyword. call and apply execute the function immediately, while bind returns a new function with fixed this. apply takes arguments as array whereas call takes them individually.


let obj = {
    name : "pankaj",
    age : 23,
}

function abcd(){
    console.log(this.name);
    console.log(this.age);
}

abcd.call(obj)

