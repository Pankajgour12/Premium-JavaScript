const showToast = (function(){

    const container = document.getElementById('notification-container');

    const colors = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500',
        warning: 'bg-yellow-500'
    };

    return function(message, type = 'info'){

        const toast = document.createElement('div');

        toast.className = `${colors[type]} text-white px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full opacity-0 flex items-center justify-between min-w-[300px]`;

        toast.innerHTML = `
            <span>${message}</span>
            <button class="ml-4 font-bold close">&times;</button>
        `;

        container.appendChild(toast);

        // animation start
        setTimeout(()=>{
            toast.classList.remove('translate-x-full','opacity-0');
        },10);

        // auto remove
        setTimeout(()=>{
            toast.classList.add('opacity-0');
            setTimeout(()=> toast.remove(),300);
        },5000);

        toast.querySelector('.close').onclick = ()=> toast.remove();
    }

})();