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



/* function abcd(){
    let a = 10;
     function defg(){
        console.log(a);
     }
} */
 



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

//? how variables are preserved 
// ye sach hai fnc ke katam hone pe apka 
// fnc and uske variables khtm ho jaate hai ,
// par jab bhi Closures banta hai to aapka fnc aur uske
// variables ka ek backlink bnaya jaate hai  
// aur uska naam hote hai 
//!  [[environment]]  ,











 let Counter =`
  
function countForMe(){
    let c =0;
    return function(){
        c++;
        console.log(c);
    }
}

 let fnc = countForMe();

fnc() // output 1
fnc() // output 2
fnc() // output 3



 let fnc2 = countForMe()
fnc2() // output 1
fnc2() // output 2
fnc2() // output 3
fnc2() // output 4
fnc2() // output 5
fnc2() // output 6
fnc2() // output 7
fnc2() // output 8
 `
