
        function showToast(message, type = 'info') {
            const container = document.getElementById('notification-container');
            const toast = document.createElement('div');
            
            const colors = {
                success: 'bg-green-500',
                error: 'bg-red-500',
                info: 'bg-blue-500'
            };

            toast.className = `${colors[type]} text-white px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full opacity-0 flex items-center justify-between min-w-[300px]`;
            toast.innerHTML = `
                <span>${message}</span>
                <button onclick="this.parentElement.remove()" class="ml-4 font-bold">&times;</button>
            `;

            container.appendChild(toast);

            // Trigger animation
            setTimeout(() => {
                toast.classList.remove('translate-x-full', 'opacity-0');
            }, 10);

            // Auto remove
            setTimeout(() => {
                toast.classList.add('opacity-0');
                setTimeout(() => toast.remove(), 300);
            }, 5000);
        }
    