const productNames = [
  "Wireless Headphones", "Smart Watch", "Bluetooth Speaker", "Mobile Charger",
  "Laptop Bag", "Men T-Shirt", "Jeans", "Hoodie", "Jacket", "Formal Shirt",
  "JavaScript Book", "Python Book", "HTML CSS Book", "React Guide", "Data Science Book",
  "Running Shoes", "Sports Shoes", "Casual Shoes", "Leather Shoes", "Sneakers",
  "Sunglasses", "Wallet", "Backpack", "Cap", "Smart Band"
];

const categoryMap = {
  "Wireless Headphones": "Electronics",
  "Smart Watch": "Electronics",
  "Bluetooth Speaker": "Electronics",
  "Mobile Charger": "Electronics",
  "Laptop Bag": "Accessories",
  "Men T-Shirt": "Clothes",
  "Jeans": "Clothes",
  "Hoodie": "Clothes",
  "Jacket": "Clothes",
  "Formal Shirt": "Clothes",
  "JavaScript Book": "Books",
  "Python Book": "Books",
  "HTML CSS Book": "Books",
  "React Guide": "Books",
  "Data Science Book": "Books",
  "Running Shoes": "Shoes",
  "Sports Shoes": "Shoes",
  "Casual Shoes": "Shoes",
  "Leather Shoes": "Shoes",
  "Sneakers": "Shoes",
  "Sunglasses": "Accessories",
  "Wallet": "Accessories",
  "Backpack": "Accessories",
  "Cap": "Accessories",
  "Smart Band": "Accessories"
};

const imageMap = {
  "Wireless Headphones": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop",
  "Smart Watch": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop",
  "Bluetooth Speaker": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&auto=format&fit=crop",
  "Mobile Charger": "https://images.unsplash.com/photo-1603539444875-76e7684265f6?w=400&auto=format&fit=crop",
  "Laptop Bag": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop",
  "Men T-Shirt": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop",
  "Jeans": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&auto=format&fit=crop",
  "Hoodie": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&auto=format&fit=crop",
  "Jacket": "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&auto=format&fit=crop",
  "Formal Shirt": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop",
  "JavaScript Book": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&auto=format&fit=crop",
  "Python Book": "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&auto=format&fit=crop",
  "HTML CSS Book": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop",
  "React Guide": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&auto=format&fit=crop",
  "Data Science Book": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop",
  "Running Shoes": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop",
  "Sports Shoes": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&auto=format&fit=crop",
  "Casual Shoes": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&auto=format&fit=crop",
  "Leather Shoes": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&auto=format&fit=crop",
  "Sneakers": "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=400&auto=format&fit=crop",
  "Sunglasses": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&auto=format&fit=crop",
  "Wallet": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&auto=format&fit=crop",
  "Backpack": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop",
  "Cap": "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&auto=format&fit=crop",
  "Smart Band": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&auto=format&fit=crop"
};

let products = [];

for (let i = 1; i <= 60; i++) {
  let name = productNames[(i - 1) % productNames.length];

  products.push({
    id: i,
    name: `${name} ${i}`,
    price: Math.floor(Math.random() * 4500) + 300,
    category: categoryMap[name],
    rating: (Math.random() * 2 + 3).toFixed(1),
    image: imageMap[name],
    description: `This is a high-quality ${name} from ${categoryMap[name]} category.`
  });
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let user = JSON.parse(localStorage.getItem("user")) || null;

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortFilter = document.getElementById("sortFilter");

function setRoute(route) {
  window.location.hash = route;
}

function router() {
  const hash = window.location.hash || "#home";

  if (hash === "#home") {
    showHomePage();
  } else if (hash === "#cart") {
    showCartPage();
  } else if (hash === "#orders") {
    showOrdersPage();
  } else if (hash.startsWith("#product-")) {
    const id = Number(hash.split("-")[1]);
    showDetailsPage(id);
  } else {
    showHomePage();
  }
}

function displayProducts(data) {
  productList.innerHTML = "";

  data.forEach(product => {
    productList.innerHTML += `
      <div class="card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <p class="price">₹${product.price}</p>
        <p>⭐ ${product.rating}</p>

        <button class="btn" onclick="showDetails(${product.id})">
          View Details
        </button>
      </div>
    `;
  });
}

function filterProducts() {
  let searchValue = searchInput.value.toLowerCase();
  let categoryValue = categoryFilter.value;
  let priceValue = priceFilter.value;
  let sortValue = sortFilter.value;

  let filtered = products.filter(product => {
    let matchSearch = product.name.toLowerCase().includes(searchValue);
    let matchCategory = categoryValue === "all" || product.category === categoryValue;
    let matchPrice = priceValue === "all" || product.price <= Number(priceValue);

    return matchSearch && matchCategory && matchPrice;
  });

  if (sortValue === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortValue === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);
sortFilter.addEventListener("change", filterProducts);

function showDetails(id) {
  setRoute(`product-${id}`);
}

function showDetailsPage(id) {
  const product = products.find(item => item.id === id);

  if (!product) {
    showHomePage();
    return;
  }

  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("cartPage").classList.add("hidden");
  document.getElementById("ordersPage").classList.add("hidden");
  document.getElementById("detailPage").classList.remove("hidden");

  document.getElementById("productDetail").innerHTML = `
    <div class="detail-box">
      <img src="${product.image}" alt="${product.name}">

      <div>
        <h2>${product.name}</h2>

        <p><b>Category:</b> ${product.category}</p>
        <p><b>Price:</b> ₹${product.price}</p>
        <p><b>Rating:</b> ⭐ ${product.rating}</p>
        <p><b>Description:</b> ${product.description}</p>

        <h3>Reviews</h3>
        <p>Very good product. Value for money.</p>

        <div class="detail-buttons">
          <button class="btn" onclick="addToCart(${product.id})">
            Add to Cart
          </button>

          <button class="buy-card-btn" onclick="buySingleProduct(${product.id})">
            Buy
          </button>
        </div>
      </div>
    </div>
  `;
}

function addToCart(id) {
  if (!user) {
    alert("Please login first");
    loginUser();
    return;
  }

  const product = products.find(item => item.id === id);
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  saveCart();
  updateCartCount();
  alert("Product added to cart");
}

function showCart() {
  setRoute("cart");
}

function showCartPage() {
  if (!user) {
    alert("Please login first to view cart");
    loginUser();
    setRoute("home");
    return;
  }

  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("detailPage").classList.add("hidden");
  document.getElementById("ordersPage").classList.add("hidden");
  document.getElementById("cartPage").classList.remove("hidden");

  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");

  cartItems.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  }

  cart.forEach(item => {
    total += item.price * item.quantity;

    cartItems.innerHTML += `
      <div class="cart-item">
        <div>
          <h3>${item.name}</h3>
          <p>Price: ₹${item.price}</p>
          <p>Quantity: ${item.quantity}</p>
        </div>

        <div>
          <button onclick="increaseQty(${item.id})">+</button>
          <button onclick="decreaseQty(${item.id})">-</button>
          <button class="remove" onclick="removeItem(${item.id})">Remove</button>
        </div>
      </div>
    `;
  });

  totalPrice.innerText = `Total: ₹${total}`;
}

function buyNow() {
  if (!user) {
    alert("Please login first.");
    loginUser();
    return;
  }

  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
  });

  let confirmOrder = confirm(
    `Total Amount: ₹${total}\n\nDo you want to place this order?`
  );

  if (confirmOrder) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    cart.forEach(item => {
      orders.push({
        ...item,
        orderDate: new Date().toLocaleString()
      });
    });

    localStorage.setItem("orders", JSON.stringify(orders));

    alert("🎉 Order Placed Successfully!");

    cart = [];
    saveCart();
    updateCartCount();
    displayCart();

    showHome();
  }
}

function buySingleProduct(id) {
  if (!user) {
    alert("Please login first.");
    loginUser();
    return;
  }

  const product = products.find(item => item.id === id);

  if (!product) {
    alert("Product not found.");
    return;
  }

  let confirmBuy = confirm(`Buy ${product.name} for ₹${product.price}?`);

  if (confirmBuy) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push({
      ...product,
      quantity: 1,
      orderDate: new Date().toLocaleString()
    });

    localStorage.setItem("orders", JSON.stringify(orders));

    alert("🎉 Order Placed Successfully!");

    showHome();
  }
}

function showOrders() {
  setRoute("orders");
  showOrdersPage();
}

function showOrdersPage() {
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("detailPage").classList.add("hidden");
  document.getElementById("cartPage").classList.add("hidden");
  document.getElementById("ordersPage").classList.remove("hidden");

  const ordersList = document.getElementById("ordersList");
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  ordersList.innerHTML = "";

  if (orders.length === 0) {
    ordersList.innerHTML = "<p>No orders placed yet.</p>";
    return;
  }

  orders.forEach((item, index) => {
    ordersList.innerHTML += `
      <div class="cart-item">
        <div>
          <h3>${item.name}</h3>
          <p>Price: ₹${item.price}</p>
          <p>Quantity: ${item.quantity || 1}</p>
          <p>Order Date: ${item.orderDate}</p>
        </div>

        <button class="remove" onclick="removeOrder(${index})">
          Remove
        </button>
      </div>
    `;
  });
}

function removeOrder(index) {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.splice(index, 1);

  localStorage.setItem("orders", JSON.stringify(orders));

  showOrdersPage();
}

function increaseQty(id) {
  const item = cart.find(product => product.id === id);

  if (!item) return;

  item.quantity++;

  saveCart();
  displayCart();
  updateCartCount();
}

function decreaseQty(id) {
  const item = cart.find(product => product.id === id);

  if (!item) return;

  if (item.quantity > 1) {
    item.quantity--;
  } else {
    cart = cart.filter(product => product.id !== id);
  }

  saveCart();
  displayCart();
  updateCartCount();
}

function removeItem(id) {
  cart = cart.filter(product => product.id !== id);

  saveCart();
  displayCart();
  updateCartCount();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");

  if (cartCount) {
    cartCount.innerText = cart.length;
  }
}

function showHome() {
  setRoute("home");
}

function showHomePage() {
  document.getElementById("homePage").classList.remove("hidden");
  document.getElementById("detailPage").classList.add("hidden");
  document.getElementById("cartPage").classList.add("hidden");
  document.getElementById("ordersPage").classList.add("hidden");
}

function loginUser() {
  let name = prompt("Enter your name:");

  if (name === null || name.trim() === "") {
    alert("Please enter your name");
    return;
  }

  user = {
    name: name.trim()
  };

  localStorage.setItem("user", JSON.stringify(user));
  updateAuthUI();
  alert("Login successful");
}

function logoutUser() {
  let confirmLogout = confirm("Are you sure you want to logout?");

  if (confirmLogout) {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    localStorage.removeItem("orders");

    user = null;
    cart = [];

    updateAuthUI();
    updateCartCount();
    showHome();

    alert("Logout successful");
  }
}

function updateAuthUI() {
  const userName = document.getElementById("userName");
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (user) {
    userName.innerText = `Hi, ${user.name}`;
    loginBtn.classList.add("hidden");
    logoutBtn.classList.remove("hidden");
  } else {
    userName.innerText = "";
    loginBtn.classList.remove("hidden");
    logoutBtn.classList.add("hidden");
  }
}

displayProducts(products);
updateCartCount();
updateAuthUI();

window.addEventListener("load", router);
window.addEventListener("hashchange", router);