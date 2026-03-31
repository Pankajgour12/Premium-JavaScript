const container = document.getElementById("container");

async function fetchProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");

    const data = await res.json();

    // IMPORTANT: yaha data.products use karna padega
    data.products.forEach((item) => {

      const card = document.createElement("div");

      card.className =
        "w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300";

      card.innerHTML = `
        <img src="${item.thumbnail}" class="w-full h-48 object-cover"/>

        <div class="p-4">
          <h1 class="text-lg font-bold text-gray-800">
            ${item.title}
          </h1>

          <p class="text-sm text-gray-600 mt-2">
            ${item.description.substring(0, 80)}...
          </p>

          <div class="flex justify-between items-center mt-4">
            <span class="text-xl font-bold text-green-600">$${item.price}</span>

            <span class="text-yellow-500">⭐ ${item.rating}</span>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.log("Error:", error);
  }
}

fetchProducts();