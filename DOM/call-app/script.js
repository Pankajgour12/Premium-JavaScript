const addBtn = document.getElementById("addBtn");
const formBox = document.querySelector(".formBox");
const form = document.getElementById("form");
const stack = document.getElementById("stack");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

let cards = [];
let index = 0;

addBtn.onclick = () => formBox.style.display = "block";

form.addEventListener("submit", e=>{
e.preventDefault();

const data = {
image: image.value,
name: name.value,
town: town.value,
purpose: purpose.value,
cat: document.querySelector('input[name="cat"]:checked')?.value
};

createCard(data);
form.reset();
formBox.style.display="none";
});

function createCard(data){

const card = document.createElement("div");
card.className="card";

card.innerHTML=`
<img src="${data.image}">
<h2>${data.name}</h2>
<p>${data.town}</p>
<p>${data.purpose}</p>
<small>${data.cat}</small>
`;

stack.appendChild(card);
cards.push(card);

updateStack();
}

function updateStack(){

cards.forEach((card,i)=>{
const offset = i - index;

card.style.transform =
`translateX(${offset*40}px)
 translateY(${Math.abs(offset)*10}px)
 scale(${1 - Math.abs(offset)*0.1})`;

card.style.zIndex = 100 - Math.abs(offset);
card.style.opacity = Math.abs(offset) > 3 ? 0 : 1;

});

}

next.onclick = ()=>{
if(index < cards.length-1){
index++;
updateStack();
}
}

prev.onclick = ()=>{
if(index > 0){
index--;
updateStack();
}
}