const scope = `
 //* scope - function scope, global scope and block scope 


 //! function scope - function ke ander hi use ho sakti hai 


 //!  global scope - poore code mein kahi bhi use ho sakti he 

 //! block scope - { } - curly braces main hi use ho sakti he
 
 `


 //?  Execution Context
 // js sabse pehle jaise hi aapka function dekhta hai sabse pahle js banaata hai execution context,
 //  ye ek process hai jo ki do different phases mein chalta hai, 
 // memory phase and doosre ka naam hai execution phase 
 //  


//? js- lexical scoping -> ki aap kaha par physically 
// available ho ye poori tareeke se depend karta hai ki aap kya access kr paoge 



function abcd(){
    let a = 10;
     function defg(){
        console.log(a);
     }
}
 



//! dynamic scoping -> kaha se call kr rhe ho uspe depend karega ki kya value milegi 






const closure = `
//? closures hote hai functions jo ki kisi parent fnc ke andar ho aur andar waala function return ho raho 
//? ho , and returning func youse kare , parent function ka koi variable 


function abcd() {
    let a = 10;

    return function () {
    console.log(a);
    }
}



`