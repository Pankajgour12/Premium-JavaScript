class CreateUser {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  write(text) {
    let div = document.createElement("div");

    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    h1.textContent = `${text} ${this.name}`;
    h1.style.color = this.color;
    h1.style.textAlign = "center";

    p.textContent = `Age: ${this.age} || Company: ${this.company}`;
    p.style.color = "pink";
    p.style.textAlign = "center";

    div.appendChild(h1);
    div.appendChild(p);

    document.body.appendChild(div);
  }

  erase() {
    if (this.div) {
      this.div.remove();   // ⭐ sirf uska hi block remove
    }
  }
}

let user1 = new CreateUser("Pankaj", 24, "#de87ed");
let user2 = new CreateUser("Lotus", 22, "#e39b53");
