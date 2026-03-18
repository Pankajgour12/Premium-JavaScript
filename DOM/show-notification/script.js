const toastRoot = document.getElementById("toast-root");

const toast = {

    create(type, message){

        const el = document.createElement("div");

        el.className = `toast ${type}`;

        el.innerHTML = `
            <span>${message}</span>
            <span class="close">✖</span>
        `;

        toastRoot.appendChild(el);

        requestAnimationFrame(()=>{
            el.classList.add("show");
        });

        const timer = setTimeout(()=>{
            this.remove(el);
        },3000);

        el.querySelector(".close").onclick = ()=>{
            clearTimeout(timer);
            this.remove(el);
        }

    },

    remove(el){

        el.classList.remove("show");

        setTimeout(()=>{
            el.remove();
        },350);

    },

    success(msg){
        this.create("success", msg);
    },

    error(msg){
        this.create("error", msg);
    },

    warning(msg){
        this.create("warning", msg);
    }

};












const btn = document.getElementById("btn");
const notification = document.getElementById("notification");

let timer;

btn.addEventListener("click", () => {

    notification.classList.add("show");

    clearTimeout(timer);

    timer = setTimeout(() => {
        notification.classList.remove("show");
    }, 2000);

});