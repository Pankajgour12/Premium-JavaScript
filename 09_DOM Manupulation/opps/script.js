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



let pr = new Promise (function(res,rej){
    setTimeout(()=>{
        let rn = Math.floor(Math.random()*10)

        if(rn>5) res("resolved with "+ rn)
        else rej("rejected with "+ rn)
    
    },3000)
}).then(function(val){
    console.log(val)
}).catch(function(val){
    console.log(val)
})








