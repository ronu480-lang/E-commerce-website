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
let selectedPayment = "";

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

        <button class="buy-card-btn" onclick="buyProductFromCard(${product.id})">
          Buy
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
          <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="buy-card-btn" onclick="buySingleProduct(${product.id})">Buy</button>
        </div>
      </div>
    </div>
  `;
}
function showProfile() {

  // Login user ki details show karo
  document.getElementById("userName").innerText =
    user.name || localStorage.getItem("userName") || "";

  document.getElementById("userEmail").innerText =
    user.email || localStorage.getItem("userEmail") || "";

  document.getElementById("profileBox").style.display = "flex";
}

function closeProfile() {

  document.getElementById("profileBox").style.display = "none";

}

function logoutUser() {

  // Popup band karo
  closeProfile();

  // User data remove karo
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");

  // Login page dikhao
  document.getElementById("loginPage").style.display = "flex";

  // Website hide karo
  document.querySelector(".main-layout").style.display = "none";
  document.querySelector(".footer").style.display = "none";

  // Agar user object use kar rahe ho to usko bhi clear kar do
  user = null;
}
function loginUser() {

  let email = document.getElementById("loginEmail").value.trim();
  let password = document.getElementById("loginPassword").value.trim();

  if (email === "" || password === "") {
    alert("Please fill all login details");
    return;
  }

  user = {
    email: email,
    name: email.split("@")[0]
  };

  localStorage.setItem("user", JSON.stringify(user));

  document.getElementById("loginPage").style.display = "none";
  document.querySelector(".main-layout").style.display = "flex";
  document.querySelector(".footer").style.display = "block";

  updateAuthUI();
  showHomePage();
}

function logoutUser() {
  localStorage.removeItem("user");
  localStorage.removeItem("cart");

  user = null;
  cart = [];

  updateAuthUI();
  updateCartCount();
  showHome();
}

function updateAuthUI() {
  const userName = document.getElementById("userName");
  const sideUserName = document.getElementById("sideUserName");
  const sideUserEmail = document.getElementById("sideUserEmail");
  const logoutBtn = document.getElementById("logoutBtn");
  const loginPage = document.getElementById("loginPage");

  if (user) {
    if (userName) userName.innerText = `Hi, ${user.name}`;
    if (sideUserName) sideUserName.innerText = user.name;
    if (sideUserEmail) sideUserEmail.innerText = user.email || "-";
    if (logoutBtn) logoutBtn.classList.remove("hidden");
    if (loginPage) loginPage.style.display = "none";
  } else {
    if (userName) userName.innerText = "";
    if (sideUserName) sideUserName.innerText = "-";
    if (sideUserEmail) sideUserEmail.innerText = "-";
    if (logoutBtn) logoutBtn.classList.add("hidden");
    if (loginPage) loginPage.style.display = "flex";
  }
}

function addToCart(id) {
  if (!user) {
    updateAuthUI();
    return;
  }

  const product = products.find(item => item.id === id);

  if (!product) {
    alert("Product not found");
    return;
  }

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

  // Success message ko save karo
  localStorage.setItem("cartMessage", "yes");

  alert("Product added to cart");

  // Cart page open karo
  showCart();
}
function showCart() {
  setRoute("cart");
}

function buyProductFromCard(id) {
  if (!user) {
    updateAuthUI();
    return;
  }

  const product = products.find(item => item.id === id);

  if (!product) {
    alert("Product not found");
    return;
  }

  cart = [{
    ...product,
    quantity: 1
  }];

  saveCart();
  updateCartCount();

  localStorage.setItem("showCheckout", "yes");
  showCart();
}

function buySingleProduct(id) {
  if (!user) {
    updateAuthUI();
    return;
  }

  const product = products.find(item => item.id === id);

  cart = [{
    ...product,
    quantity: 1
  }];

  saveCart();
  updateCartCount();

  localStorage.setItem("showCheckout", "yes");
  showCart();
}

function showCartPage() {
  if (!user) {
    updateAuthUI();
    setRoute("home");
    return;
  }

  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("detailPage").classList.add("hidden");
  document.getElementById("ordersPage").classList.add("hidden");
  document.getElementById("cartPage").classList.remove("hidden");

  displayCart();

  const checkoutSection = document.getElementById("checkoutSection");

  if (checkoutSection) {
    if (localStorage.getItem("showCheckout") === "yes") {
      checkoutSection.style.display = "block";
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      checkoutSection.style.display = "none";
    }
  }

  localStorage.removeItem("showCheckout");
}

function displayCart() {
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");

  cartItems.innerHTML = `
    <h4 style="color:#2563eb; margin-bottom:10px;">
      Your Cart
    </h4>
  `;

  let total = 0;

  // Add to Cart ke baad hi success message show hoga
  const cartMessage = localStorage.getItem("cartMessage");

  if (cartMessage === "yes") {
    cartItems.innerHTML += `
      <p style="
        color:green;
        font-weight:bold;
        margin-bottom:15px;
      ">
        ✅ Product Added to Cart Successfully
      </p>
    `;

    // Message sirf ek baar show hoga
    localStorage.removeItem("cartMessage");
  }

  if (cart.length === 0) {
    cartItems.innerHTML += `
      <p>Your cart is empty.</p>
    `;

    totalPrice.innerText = "Total: ₹0";
    return;
  }

  cart.forEach(item => {
    total += item.price * item.quantity;

    cartItems.innerHTML += `
      <div class="cart-item">
        <div>
          <h3>${item.name}</h3>
          <p>Price: ₹${item.price}</p>
          <p>Quantity: ${item.quantity}</p>
          <p>Total: ₹${item.price * item.quantity}</p>
        </div>

        <div>
          <button onclick="increaseQty(${item.id})">+</button>

          <button onclick="decreaseQty(${item.id})">-</button>

          <button
            class="remove"
            onclick="removeItem(${item.id})">
            Remove
          </button>
        </div>
      </div>
    `;
  });

  totalPrice.innerText = `Total: ₹${total}`;
}

let selectedPaymentBox = "";

window.showPaymentBox = function (boxId, radio) {
  const box = document.getElementById(boxId);

  if (!box) return;

  // same option dobara click -> close
  if (selectedPaymentBox === boxId) {
    box.style.display = "none";
    radio.checked = false;
    selectedPaymentBox = "";
    return;
  }

  // sabhi scanner hide
  document.querySelectorAll(".payment-box").forEach(function (item) {
    item.style.display = "none";
  });

  // selected scanner show
  box.style.display = "block";
  radio.checked = true;
  selectedPaymentBox = boxId;
};

function buyNow() {
  if (!user) {
    updateAuthUI();
    return;
  }

  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const checkoutSection = document.getElementById("checkoutSection");

  if (checkoutSection) {
    checkoutSection.style.display = "block";
    checkoutSection.scrollIntoView({ behavior: "smooth" });
  }
}

function openPayment(boxId) {

  // Sabhi payment boxes hide
  let allBoxes = document.querySelectorAll(".payment-box");

  allBoxes.forEach(function (box) {
    box.style.display = "none";
  });

  // Click kiya hua payment box show
  let selectedBox = document.getElementById(boxId);

  if (selectedBox) {
    selectedBox.style.display = "block";
  }
}


function placeOrder() {
  if (!user) {
    updateAuthUI();
    return;
  }

  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  let fullName = document.getElementById("fullName").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let email = document.getElementById("email").value.trim();
  let address = document.getElementById("address").value.trim();
  let city = document.getElementById("city").value.trim();
  let state = document.getElementById("state").value.trim();
  let pincode = document.getElementById("pincode").value.trim();

  let payment = document.querySelector('input[name="payment"]:checked');

  if (
    fullName === "" ||
    mobile === "" ||
    email === "" ||
    address === "" ||
    city === "" ||
    state === "" ||
    pincode === ""
  ) {
    alert("Please fill all checkout details.");
    return;
  }

  if (mobile.length !== 10) {
    alert("Please enter valid 10 digit mobile number.");
    return;
  }

  if (pincode.length !== 6) {
    alert("Please enter valid 6 digit pincode.");
    return;
  }

  if (!payment) {
    alert("Please select payment method.");
    return;
  }

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  cart.forEach(item => {
    orders.push({
      ...item,
      orderId: "ORD" + Date.now(),
      customerName: fullName,
      mobile: mobile,
      email: email,
      address: address,
      city: city,
      state: state,
      pincode: pincode,
      paymentMethod: payment.value,
      orderDate: new Date().toLocaleString(),
      status: "Order Confirmed ✅"
    });
  });

  localStorage.setItem("orders", JSON.stringify(orders));

  cart = [];
  saveCart();
  updateCartCount();
  displayCart();
  clearCheckoutForm();

  alert("🎉 Order Placed Successfully!");

  showOrders();
}

function clearCheckoutForm() {
  const fields = ["fullName", "mobile", "email", "address", "city", "state", "pincode"];

  fields.forEach(id => {
    const field = document.getElementById(id);
    if (field) field.value = "";
  });

  document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.checked = false;
  });

  document.querySelectorAll(".payment-box").forEach(box => {
    box.classList.remove("active");
  });

  selectedPayment = "";

  const checkoutSection = document.getElementById("checkoutSection");
  if (checkoutSection) {
    checkoutSection.style.display = "none";
  }
}

function showOrders() {
  setRoute("orders");
  showOrdersPage();
}

function showOrdersPage() {
  if (!user) {
    updateAuthUI();
    setRoute("home");
    return;
  }

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
      <div class="cart-item order-card">
        <div>
          <h3>${item.name}</h3>
          <p><b>Order ID:</b> ${item.orderId || "N/A"}</p>
          <p><b>Price:</b> ₹${item.price}</p>
          <p><b>Quantity:</b> ${item.quantity || 1}</p>
          <p><b>Total:</b> ₹${item.price * (item.quantity || 1)}</p>
          <p><b>Customer:</b> ${item.customerName || "N/A"}</p>
          <p><b>Mobile:</b> ${item.mobile || "N/A"}</p>
          <p><b>Email:</b> ${item.email || "N/A"}</p>
          <p><b>Address:</b> ${item.address || "N/A"}, ${item.city || ""}, ${item.state || ""} - ${item.pincode || ""}</p>
          <p><b>Payment:</b> ${item.paymentMethod || "N/A"}</p>
          <p><b>Order Date:</b> ${item.orderDate}</p>
          <p><b>Status:</b> ${item.status || "Order Confirmed ✅"}</p>
        </div>

        <button class="remove" onclick="removeOrder(${index})">Remove</button>
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

displayProducts(products);
updateCartCount();
updateAuthUI();

window.addEventListener("load", router);
window.addEventListener("hashchange", router);