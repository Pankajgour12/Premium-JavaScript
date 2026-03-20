// ! this 

//? this keyword special keyword hai , kyuki haise ki baaki saare keyword ki value ya unka nature same rehta hai this ki valye ya nature badal jaata hai is  baat se ki usey kaha youse kar rahe ho 








//? global scope 

//* console.log(this) //!  window

//? function

/* function abcd(){
    console.log(this)

}
abcd() //! window  
 */


//? method -> ek esa function jo ki object ke andar ho use hum method kehte hai 

//* or method ke andar this ki value obj hoti he 



let obj = {
    name : "Pankaj",
    age: 23,

    sayName: function(){
        console.log(this.age)
    
    }

}

// obj.sayName() ;//! ojb



// event handler 

//? event handler me this bo banda hota hai jispar EventListener laga ho 

document.querySelector('h1').addEventListener('click',function(){
    // alert("hello")
    this.style.color = "red"
})

//! class  
//? class ke andar this ki value blank objet hoti hai 




class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

}


 let val = new Person("pankaj",23);

 console.log(val.name)
 console.log(val.age);










 this ki value 
 ----------------

 global - window 
 function - window 
method with es5 fnc - object 
method with es6  arrow fnc - window

es5 fucntion inside es5 method - window 

arrow function inside es5 method - object 

event hander - element 

class - blank object