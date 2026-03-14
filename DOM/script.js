let count =0 
let progress = document.querySelector(".progress")
let percent = document.querySelector(".per");
let btn = document.querySelector(".btn");

let interval = setInterval(()=>{
    if(count >= 100){
        clearInterval(interval)
        return
    }

    count++
    progress.style.width = `${count}%`
    percent.textContent = `${count}%`
},30)


btn.addEventListener("click",()=>{
    clearInterval(interval)
    count = 0
progress.style.width = "0%"
percent.textContent = "0%"
    btn.textContent ="done"
}
)