window.onload = () => {
  const list = document.getElementById("product-list");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const priceFilter = document.getElementById("priceFilter");

  const renderProducts = () => {
    const query = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedPrice = priceFilter.value;
    list.innerHTML = "";
    products.forEach(product => {
      const matchesSearch = product.name.toLowerCase().includes(query);
      const matchesCategory = selectedCategory === "all" || product.category.toLowerCase() === selectedCategory;
      let matchesPrice = true;
      const price = product.price;
      if (selectedPrice === "0-1000") matchesPrice = price < 1000;
      else if (selectedPrice === "1000-10000") matchesPrice = price >= 1000 && price <= 10000;
      else if (selectedPrice === "10000-50000") matchesPrice = price > 10000 && price <= 50000;
      else if (selectedPrice === "50000") matchesPrice = price > 50000;
      if (matchesSearch && matchesCategory && matchesPrice) {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <strong>₹${product.price}</strong>
          <br><button onclick="addToCart('${product.name}')">Add to Cart</button>
        `;
        list.appendChild(card);
      }
    });
  };

  const categories = [...new Set(products.map(p => p.category.toLowerCase()))];
  categories.forEach(c => {
    const option = document.createElement("option");
    option.value = c;
    option.textContent = c[0].toUpperCase() + c.slice(1);
    categoryFilter.appendChild(option);
  });

  searchInput.addEventListener("input", renderProducts);
  categoryFilter.addEventListener("change", renderProducts);
  priceFilter.addEventListener("change", renderProducts);

  renderProducts();
};

function addToCart(productName) {
  const product = products.find(p => p.name === productName);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const index = cart.findIndex(item => item.name === product.name);
  if (index === -1) {
    cart.push({ ...product, quantity: 1 });
  } else {
    cart[index].quantity += 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart`);
}



