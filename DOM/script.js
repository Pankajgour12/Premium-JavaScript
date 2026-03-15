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
        shadow-lg border border-slate-700
        animate-[fadeIn_.3s_ease]
    `

    toast.innerHTML = `
        <div class="flex items-center justify-between gap-6">
            <p>Profile updated successfully 🚀</p>
            <button class="close text-red-400">✕</button>
        </div>
    `

    container.appendChild(toast)

    setTimeout(()=>{
        toast.remove()
    },3000)

})