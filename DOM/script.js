let btn = document.querySelector("#showBtn")
let banner = document.querySelector("#banner")


btn.addEventListener('click',()=>{
    banner.classList.add("show")

    setTimeout(()=>{
        
     banner.classList.remove("show")
    },2000)


})
