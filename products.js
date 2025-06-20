// product.js

const products = [
  {
    name: "Apple iPhone 15",
    category: "electronics",
    price: 79990,
    description: "The latest iPhone with A16 Bionic chip and 128GB storage.",
    image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_SL1500_.jpg"
  },
  {
    name: "Samsung Galaxy S24",
    category: "electronics",
    price: 74990,
    description: "Flagship Samsung phone with powerful performance.",
    image: "https://m.media-amazon.com/images/I/91ItZJh1FDL._AC_SL1500_.jpg"
  },
  {
    name: "Sony WH-1000XM5 Headphones",
    category: "electronics",
    price: 29990,
    description: "Noise cancelling wireless headphones with premium sound.",
    image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_SL1500_.jpg"
  },
  {
    name: "Nike Air Max 270",
    category: "shoes",
    price: 9990,
    description: "Breathable and stylish running shoes from Nike.",
    image: "https://m.media-amazon.com/images/I/613fjQtsd2L._SY625_.jpg"
  },
  {
    name: "Adidas Ultraboost 22",
    category: "shoes",
    price: 11990,
    description: "Comfortable and responsive shoes ideal for running.",
    image: "https://lnk.ink/Fnjcs"
  },
  {
    name: "Dell Inspiron 15 Laptop",
    category: "electronics",
    price: 49990,
    description: "15.6-inch laptop with 12th Gen Intel Core i5 and 16GB RAM.",
    image: "https://shorturl.at/N530Y"
  },
  {
    name: "Samsung 55-inch 4K TV",
    category: "electronics",
    price: 57990,
    description: "Smart LED TV with UHD resolution and Dolby Audio.",
    image: "https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SL1500_.jpg"
  },
  {
    name: "boAt Airdopes 441",
    category: "electronics",
    price: 1999,
    description: "True wireless earbuds with long battery life.",
    image: "https://m.media-amazon.com/images/I/51HBom8xz7L._AC_UL1500_.jpg"
  },
  {
    name: "ASUS TUF Gaming Laptop",
    category: "electronics",
    price: 69990,
    description: "Powerful gaming laptop with RTX 3050 and 144Hz screen.",
    image: "https://shorturl.at/5BOfJ"
  },
  {
    name: "Puma Men's Sneakers",
    category: "shoes",
    price: 4299,
    description: "Durable and sporty sneakers for daily wear.",
    image: "https://lnk.ink/RNwZO"
  },
  {
    name: "Canon EOS 1500D DSLR Camera",
    category: "electronics",
    price: 38990,
    description: "DSLR with 24.1 MP sensor and Wi-Fi support.",
    image: "https://m.media-amazon.com/images/I/914hFeTU2-L._AC_SL1500_.jpg"
  },
  {
    name: "OnePlus Nord CE 3 Lite",
    category: "electronics",
    price: 19999,
    description: "Great value phone with 108MP camera and 5000mAh battery.",
    image: "https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_SL1500_.jpg"
  },
  {
    name: "Fastrack Reflex Smartwatch",
    category: "electronics",
    price: 2499,
    description: "Fitness tracker with heart rate monitoring and sleep tracking.",
    image: "https://lnk.ink/JVfes"
  },
  {
    name: "Woodland Men's Boots",
    category: "shoes",
    price: 6495,
    description: "Leather high-ankle boots ideal for rugged use.",
    image: "https://lnk.ink/fFy2F"
  },
  {
    name: "Realme Narzo 60x",
    category: "electronics",
    price: 12999,
    description: "Affordable phone with 120Hz display and fast charging.",
    image: "https://lnk.ink/4NTvH"
  },
  {
    name: "Crocs Unisex Clogs",
    category: "shoes",
    price: 3599,
    description: "Comfortable lightweight clogs for casual wear.",
    image: "https://lnk.ink/2YLB7"
  },
  {
    name: "HP Ink Tank Printer",
    category: "electronics",
    price: 13499,
    description: "All-in-one wireless printer for home and office use.",
    image: "https://lnk.ink/106RN"
  },
  {
    name: "Lenovo Tab M10 FHD",
    category: "electronics",
    price: 14999,
    description: "10.3-inch Android tablet with 4GB RAM and 64GB storage.",
    image: "https://m.media-amazon.com/images/I/61y2VVWcGBL._AC_SL1500_.jpg"
  },
  {
    name: "HP 15s Ryzen 5 Laptop",
    category: "electronics",
    price: 44990,
    description: "Sleek 15.6-inch laptop with Ryzen 5, 8GB RAM and SSD.",
    image: "https://m.media-amazon.com/images/I/71c0GSxtEEL._AC_SL1500_.jpg"
  },
  {
    name: "Redmi Note 13 5G",
    category: "electronics",
    price: 16999,
    description: "Affordable 5G smartphone with AMOLED display and 5000mAh battery.",
    image: "https://lnk.ink/m0nCC"
  },
  {
    name: "Apple AirPods Pro (2nd Gen)",
    category: "electronics",
    price: 24999,
    description: "Wireless earbuds with active noise cancellation and spatial audio.",
    image: "https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_SL1500_.jpg"
  },
  {
    name: "Noise ColorFit Pulse Grand",
    category: "electronics",
    price: 1499,
    description: "Smartwatch with 1.69'' display and 60+ sports modes.",
    image: "https://lnk.ink/Jm7V8"
  },
  {
    name: "Samsung Galaxy Tab S6 Lite",
    category: "electronics",
    price: 27999,
    description: "Premium tablet with S Pen and Dolby Atmos speakers.",
    image: "https://lnk.ink/PgTsC"
  },
  {
    name: "Logitech MX Master 3",
    category: "electronics",
    price: 8990,
    description: "Ergonomic wireless mouse with ultra-fast scrolling and USB-C charging.",
    image: "https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_SL1500_.jpg"
  },
  {
    name: "Reebok Men's Running Shoes",
    category: "shoes",
    price: 2899,
    description: "Durable and comfortable shoes for casual and athletic use.",
    image: "https://lnk.ink/e0fUu"
  },
  {
    name: "Philips Air Fryer",
    category: "home",
    price: 9999,
    description: "Low-fat fryer with Rapid Air technology for healthy cooking.",
    image: "https://lnk.ink/YAF5s"
  },
  {
    name: "Dyson V8 Vacuum Cleaner",
    category: "home",
    price: 34990,
    description: "Cord-free vacuum with powerful suction for all floors.",
    image: "https://lnk.ink/IkgUa"
  },
  {
    name: "Atomic Habits",
    category: "books",
    price: 499,
    description: "Bestselling guide on habit formation by James Clear.",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_SL1500_.jpg"
  },
  {
    name: "The Psychology of Money",
    category: "books",
    price: 379,
    description: "Timeless lessons on wealth and happiness by Morgan Housel.",
    image: "https://lnk.ink/mCxqS"
  },
  {
    name: "LEGO Classic Bricks Box",
    category: "toys",
    price: 2599,
    description: "Creative building toy set with 500+ colorful pieces.",
    image: "https://lnk.ink/MnxST"
  },
  {
    name: "Hot Wheels 20-Car Gift Pack",
    category: "toys",
    price: 1449,
    description: "Set of 20 collectible toy cars for kids.",
    image: "https://lnk.ink/qT1im"
  },
  {
    name: "Nilkamal Plastic Chair",
    category: "furniture",
    price: 1299,
    description: "Durable and lightweight molded plastic chair.",
    image: "https://lnk.ink/H5N5A"
  },
  {
    name: "Sleepyhead 3-Seater Sofa",
    category: "furniture",
    price: 24990,
    description: "Comfortable and stylish fabric sofa for living room.",
    image: "https://lnk.ink/1jelr"
  }
];

const container = document.getElementById("products-container");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p><strong>Category:</strong> ${product.category}</p>
    <p class="price">₹${product.price.toLocaleString()}</p>
    <p>${product.description}</p>
  `;
  container.appendChild(card);
});
