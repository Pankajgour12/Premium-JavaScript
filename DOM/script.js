/* let btn = document.querySelector("#showBtn")
let banner = document.querySelector("#banner")


btn.addEventListener('click',()=>{
    banner.classList.add("show")

    setTimeout(()=>{
        
     banner.classList.remove("show")
    },2000)


})
 */



/* 
let users = [
{
    name:"Harsh Sharma",
    pic:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio:"Silent chaos in a loud world ❤️ | not for everyone"
},
{
    name:"Aarav Verma",
    pic:"https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    bio:"Building dreams with broken pieces 🚀"
},
{
    name:"Rohan Mehta",
    pic:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio:"Coffee first, logic later ☕"
},
{
    name:"Kabir Singh",
    pic:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    bio:"Lost in thoughts, found in code 💻"
},
{
    name:"Harsh Sharma",
    pic:"https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    bio:"Minimal words, maximum vision 🎯"
},
{
    name:"Aditya Kapoor",
    pic:"https://images.unsplash.com/photo-1552058544-f2b08422138a",
    bio:"Creating vibes not noise ✨"
},
{
    name:"Ishaan Malhotra",
    pic:"https://images.unsplash.com/photo-1517841905240-472988babdf9",
    bio:"Learning daily, failing gracefully 📈"
},
{
    name:"Aryan Nair",
    pic:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    bio:"Mindset > Talent always 🧠"
}
];

const container = document.querySelector(".cards");
const inp = document.querySelector(".inp");

function createCard(user){
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = user.pic;
    img.className = "bg-img";

    const blur = document.createElement("div");
    blur.className = "blurred-layer";

    const content = document.createElement("div");
    content.className = "content";

    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    const p = document.createElement("p");
    p.textContent = user.bio;

    content.append(h3, p);
    card.append(img, blur, content);

    return card;
}

function renderUsers(arr){
    container.innerHTML = "";
    const fragment = document.createDocumentFragment();

    arr.forEach(user=>{
        fragment.appendChild(createCard(user));
    });

    container.appendChild(fragment);
}

renderUsers(users);

inp.addEventListener("input", ()=>{
    const value = inp.value.toLowerCase();

    const filtered = users.filter(user =>
        user.name.toLowerCase().includes(value)
    );

    renderUsers(filtered);
});

 */
const txt = document.querySelector(".txt")
const count = document.querySelector(".count")

txt.addEventListener("input", ()=>{
    count.textContent = `${txt.value.length} / 100`
})


const btn = document.getElementById("showToast")
const container = document.getElementById("toastContainer")

btn.addEventListener("click", ()=>{

    const toast = document.createElement("div")

    toast.className = `
        bg-slate-800 text-white px-5 py-4 rounded-xl
        shadow-lg border bg-green-500 border-slate-700
        animate-[fadeIn_.3s_ease]
    `

    toast.innerHTML = `
        <div class="flex items-center justify-between gap-6">
            <p>Profile updated successfully </p>
            <button class="close  text-red-400">✕</button>
        </div>
    `

    container.appendChild(toast)

    setTimeout(()=>{
        toast.remove()
    },3000)

})


const input = document.getElementById("tagInput")
const tagBox = document.getElementById("tagBox")

let tags = []

input.addEventListener("keydown", (e)=>{

    if(e.key === "Enter" && input.value.trim() !== ""){
        
        const value = input.value.trim()

        if(tags.includes(value)) return

        tags.push(value)

        const chip = document.createElement("div")
        chip.className = `
          flex items-center gap-2 px-3 py-1 
          bg-indigo-500 text-white rounded-full text-sm
        `

        chip.innerHTML = `
            ${value}
            <span class="remove cursor-pointer">✕</span>
        `

        tagBox.insertBefore(chip, input)

        input.value = ""
    }

})

tagBox.addEventListener("click", (e)=>{

    if(e.target.classList.contains("remove")){
        const text = e.target.parentElement.
        firstChild.textContent
        .trim()
        tags = tags.filter(t => t !== text)
        e.target.parentElement.remove()
    }

})











const quiz = [
{
 q:"Which language runs in browser?",
 options:["Java","C","Python","JavaScript"],
 answer:"JavaScript"
},
{
 q:"Which is frontend library?",
 options:["Node","React","MongoDB","Express"],
 answer:"React"
},
{
 q:"Which is styling language?",
 options:["HTML","CSS","JS","Python"],
 answer:"CSS"
}
]

let index = 0
let score = 0
let selected = null

const q = document.getElementById("question")
const opt = document.getElementById("options")
const next = document.getElementById("next")
const scoreEl = document.getElementById("score")

function render(){
    selected = null
    q.textContent = quiz[index].q
    opt.innerHTML = ""

    quiz[index].options.forEach(o=>{
        const btn = document.createElement("button")
        btn.className = "px-4 py-2 bg-slate-700 rounded hover:bg-slate-600"
        btn.textContent = o

        btn.onclick = ()=>{
            selected = o
            document.querySelectorAll("#options button")
              .forEach(b=> b.classList.remove("bg-indigo-500"))

            btn.classList.add("bg-indigo-500")
        }

        opt.appendChild(btn)
    })
}

next.onclick = ()=>{
    if(selected === quiz[index].answer){
        score++
    }

    index++

    if(index < quiz.length){
        render()
    }else{
        q.textContent = "Quiz Finished"
        opt.innerHTML = ""
        next.style.display = "none"
        scoreEl.textContent = `Score: ${score}/${quiz.length}`
    }
}

render()




const sample = "javascript dom logic makes frontend powerful"

const textEl = document.getElementById("text")
const inp = document.getElementById("inp")
const timeEl = document.getElementById("time")
const wpmEl = document.getElementById("wpm")
const accEl = document.getElementById("acc")

textEl.textContent = sample

let time = 0
let started = false

let interval

inp.addEventListener("input", ()=>{

    if(!started){
        started = true
        interval = setInterval(()=>{
            time++
            timeEl.textContent = time
        },1000)
    }

    const typed = inp.value

    let correct = 0

    for(let i=0;i<typed.length;i++){
        if(typed[i] === sample[i]){
            correct++
        }
    }

    const acc = Math.floor((correct / typed.length) * 100)
    accEl.textContent = acc || 0

    const wpm = Math.floor((typed.length / 5) / (time / 60))
    wpmEl.textContent = wpm || 0

    if(typed === sample){
        clearInterval(interval)
    }

})







const icons = ["🍎","🍌","🍒","🍇","🍉","🥝","🍍","🍓"]
let cards = [...icons, ...icons]

cards.sort(()=> Math.random() - 0.5)

const board = document.getElementById("board")

let first = null
let second = null
let lock = false

cards.forEach(icon => {

    const card = document.createElement("div")
    card.className = `
      h-20 bg-slate-700 flex items-center justify-center 
      text-2xl rounded-lg cursor-pointer
    `
    card.dataset.icon = icon
    card.textContent = ""

    card.onclick = ()=>{

        if(lock || card.textContent) return

        card.textContent = icon

        if(!first){
            first = card
            return
        }

        second = card
        lock = true

        if(first.dataset.icon === second.dataset.icon){
            first = null
            second = null
            lock = false
        }else{
            setTimeout(()=>{
                first.textContent = ""
                second.textContent = ""
                first = null
                second = null
                lock = false
            },800)
        }
    }

    board.appendChild(card)
})