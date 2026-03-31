const container = document.getElementById("container");

// async function
async function fetchProducts() {
  try {
    // API call
    const res = await fetch("https://fakestoreapi.com/products");
 console.log(res.data);
    // JSON convert
    const data = await res.json();

    // loop
    data.forEach((item) => {

      const card = document.createElement("div");

      card.className =
        "w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300";

      card.innerHTML = `
        <img src="${item.image}" class="w-full h-48 object-contain p-4 bg-white"/>

        <div class="p-4">
          <h1 class="text-lg font-bold text-gray-800 line-clamp-1">
            ${item.title}
          </h1>

          <p class="text-sm text-gray-600 mt-2 line-clamp-2">
            ${item.description}
          </p>

          <div class="flex justify-between items-center mt-4">
            <span class="text-xl font-bold text-green-600">$${item.price}</span>

            <button class="px-3 py-1 bg-black text-white rounded hover:bg-gray-800">
              Buy
            </button>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.log("Error:", error);
  }
}

// function call
fetchProducts();