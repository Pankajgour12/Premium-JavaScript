// classes
/* class User {
    constructor(name, email, age){
        this.name = name;
        this.email = email;
        this.age = age;
        this.role = "user"
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.innerText = `${this.name} : ${text}`
        h1.style.color = "red";
        document.body.append(h1)
    }
}

class Admin extends User {
    constructor(name, email, age){
        super(name, email, age)
        this.role = "admin"
    }
    remove(){
        document.querySelectorAll("h1").forEach(el => el.remove())
    }
}

let user1 = new User("Pankaj","pnlka@gmail.com",18)

let user2 = new User("Lotus","pnlka@gmail.com",24)
let admin = new Admin("admin","pnlka@gmail.com",24)
 */


/* 
 let pr = new Promise (function(res,rej){
    setTimeout(()=>{
        let rn = Math.floor(Math.random()*10)

        if(rn>5) res("resolved with "+ rn)
        else rej("rejected with "+ rn)
    
    },1000)
})

async function abcd() {
    try {
        let val = await pr
        console.log(val)    
    } catch (error) {
        console.log(error)
        
    }
}

abcd();


 */


//! module pattern in js 



//? Module Pattern ek design pattern hai jisme hum apna code ek self executing function (IIFE) ke andar likhte hain , raki variables aur functions private rahen. 

//? Iske andar se hum sirf wahi chheezein return karte hain jo bahar use karni hain. 

// Is pattern ka main fayda hai data hiding (Encapsulation) aur clean structure. taaki code secure, reusable aur manageable ban sake. 



let Bank = (function (){
    let bankbalance = 10000;

    function checkBalance(){
        console.log(bankbalance);
    }

    function setBalance (val){
        bankbalance = val
    }

    function withdraw(val) {
        if( val <= bankbalance){
            bankbalance -= val ;

            console.log(bankbalance);
        }
    }


    return {
        checkBalance,
        setBalance,
        withdraw
    }


})()


Bank.checkBalance()

