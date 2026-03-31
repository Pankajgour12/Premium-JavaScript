
const container = document.getElementById("container");

// API call
fetch("https://api.escuelajs.co/api/v1/categories")
  .then((res) => res.json())
  .then((data) => {

    data.forEach((item) => {

      const card = document.createElement("div");

      card.className =
        "group w-80 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:scale-105 transition duration-500";

      card.innerHTML = `
        <div class="h-48 overflow-hidden">
          <img src="${item.image}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500"/>
        </div>

        <div class="p-4 text-white">
          <h1 class="text-xl font-bold">${item.name}</h1>

          <p class="text-sm text-gray-300 mt-2">
            This is a dynamic card fetched from API.
          </p>

          <button class="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold hover:scale-105 transition">
            Explore
          </button>
        </div>
      `;

      container.appendChild(card);
    });

  })
  .catch((err) => console.log("Error:", err));