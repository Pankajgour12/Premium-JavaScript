/* function CreateUser(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
  

  CreateUser.prototype.write = function (text) {
    let div = document.createElement("div");
   this.company = "Amazon";
    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    h1.textContent = `${text}  ${name} `;
    h1.style.color = this.color;
    h1.style.textAlign = "center";

    p.textContent = `Age: ${age} | Company: ${this.company}`;
    p.style.color = "pink";
    p.style.textAlign = "center";

    div.appendChild(h1);
    div.appendChild(p);

    document.body.appendChild(div);
  };
}


let user1 = new CreateUser("Pankaj", 24, "#de87ed" );
let user2 = new CreateUser("Subham", 16, "yellow");

; */




class CreateUser {
      constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
      }
      write(text) {
        this.company = "Amazon";
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        let p = document.createElement("p");
        h1.textContent = `${text}  ${this.name} `;
        h1.style.color = this.color;
        h1.style.textAlign = "center";
        p.textContent = `Age: ${this.age} || Company: ${this.company}`;        p.style.color = "pink";
        p.style.textAlign = "center";
        
        div.appendChild(h1);
        div.appendChild(p);
        document.body.appendChild(div);
        }
    }
    let user1 = new CreateUser("Pankaj", 24, "#de87ed" );
    let user2 = new CreateUser("Lotus", 22, "#e39b53" );


