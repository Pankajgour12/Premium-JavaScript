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


// Bank.checkBalance()




//! Factory Function Pattern 

//? ek function banate ho jo objects create karta hai (factory = object banane ki machine)

//?  Factory Function Pattern ek aisa design pattern hai jisme hum ek simple function likhte hai jo nae objects banakr return karta hai , bina class ya new keyword use kiye.


//? Is pattern ka mian idea hai -> object creation ko ek function ke through control karna 

//? Har baar jab tum factory function call karte ho, tumhe ek naya object milta hai jisme apne methods aur ( agar chaho to ) private data ho sakta hai 



/* The factory function pattern is a design pattern where a function is used to create and return object instances. It helps in abstracting object creation logic, supports encapsulation through closures, and promotes composition-based architecture instead of classical inheritance */


function createUser(name, role) {

    return {
        name: name,
        role: role,

        introduce() {
            console.log(`Hi, I am ${this.name} and I am a ${this.role}`);
        }
    };

}

const user1 = createUser("Pankaj", "Developer");
const user2 = createUser("Rohit", "Designer");

/* user1.introduce();
user2.introduce();
 */








function TaskFactory(title){

    let completed = false;   // 🔒 private

    return {

        title,

        toggle(){
            completed = !completed;
        },

        isCompleted(){
            return completed;
        }

    };

}

function TaskManager(){

    let tasks = [];   // 🔒 private state

    function add(title){
        const task = TaskFactory(title);
        tasks.push(task);
        render();
    }

    function remove(index){
        tasks.splice(index,1);
        render();
    }

    function toggle(index){
        tasks[index].toggle();
        render();
    }

    function render(){

        const list = document.getElementById("taskList");
        list.innerHTML = "";

        tasks.forEach((task,i)=>{

            const li = document.createElement("li");

            li.innerHTML = `
            <span style="text-decoration:${task.isCompleted() ? "line-through":"none"}">
            ${task.title}
            </span>

            <div>
            <button onclick="app.toggle(${i})">✔</button>
            <button onclick="app.remove(${i})">❌</button>
            </div>
            `;

            list.appendChild(li);

        });
    }

    return { add, remove, toggle };

}

const app = TaskManager();

document.getElementById("addTask").onclick = () => {
    const val = taskInput.value;
    if(val) app.add(val);
};