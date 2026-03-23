function CreateUser(name, age, color, company) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.company = company;

  this.write = function () {
    let div = document.createElement("div");

    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    h1.textContent = `heyyy ${this.name} kaise ho bhai`;
    h1.style.color = this.color;
    h1.style.textAlign = "center";

    p.textContent = `Age: ${this.age} | Company: ${this.company}`;

    div.appendChild(h1);
    div.appendChild(p);

    document.body.appendChild(div);
  };
}

let user1 = new CreateUser("Pankaj", 24, "white", "google");
let user2 = new CreateUser("Subham", 16, "orange", "meta");

;