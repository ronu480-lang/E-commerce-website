const productNames = [
  // Electronics
  "Wireless Headphones",
  "Smart Watch",
  "Bluetooth Speaker",
  "Fast Mobile Charger",
  "Wireless Earbuds",
  "Gaming Mouse",
  "Mechanical Keyboard",
  "Power Bank",
  "LED Desk Lamp",
  "Portable Mini Fan",
  "USB Type-C Cable",
  "Fitness Smart Band",

  // Clothes
  "Men White T-Shirt",
  "Men Black T-Shirt",
  "Blue Denim Jeans",
  "Grey Winter Hoodie",
  "Brown Casual Jacket",
  "Formal Blue Shirt",
  "Women Summer Dress",
  "Women Denim Jacket",
  "Men Cotton Kurta",
  "Black Track Pants",
  "Women Printed Top",
  "Men Polo T-Shirt",

  // Books
  "JavaScript Programming Book",
  "Python Programming Book",
  "HTML and CSS Guide",
  "React Development Guide",
  "Data Science Handbook",
  "Machine Learning Basics",
  "Java Programming Book",
  "Database Management Book",
  "C Programming Guide",
  "Web Development Book",
  "Computer Networks Book",
  "Operating System Book",

  // Shoes
  "Red Running Shoes",
  "White Sports Shoes",
  "Black Casual Shoes",
  "Brown Leather Shoes",
  "White Sneakers",
  "Women Pink Sneakers",
  "Men Formal Shoes",
  "Blue Training Shoes",
  "High Top Sneakers",
  "Walking Shoes",
  "Football Sports Shoes",
  "Canvas Casual Shoes",

  // Accessories
  "Black Sunglasses",
  "Brown Leather Wallet",
  "Travel Backpack",
  "Baseball Cap",
  "Laptop Sleeve",
  "Digital Alarm Clock",
  "Men Leather Belt",
  "Women Handbag",
  "Mobile Phone Stand",
  "Stainless Steel Bottle",
  "Travel Duffel Bag",
  "Classic Wrist Watch"
];
const categoryMap = {
  // Electronics
  "Wireless Headphones": "Electronics",
  "Smart Watch": "Electronics",
  "Bluetooth Speaker": "Electronics",
  "Fast Mobile Charger": "Electronics",
  "Wireless Earbuds": "Electronics",
  "Gaming Mouse": "Electronics",
  "Mechanical Keyboard": "Electronics",
  "Power Bank": "Electronics",
  "LED Desk Lamp": "Electronics",
  "Portable Mini Fan": "Electronics",
  "USB Type-C Cable": "Electronics",
  "Fitness Smart Band": "Electronics",

  // Clothes
  "Men White T-Shirt": "Clothes",
  "Men Black T-Shirt": "Clothes",
  "Blue Denim Jeans": "Clothes",
  "Grey Winter Hoodie": "Clothes",
  "Brown Casual Jacket": "Clothes",
  "Formal Blue Shirt": "Clothes",
  "Women Summer Dress": "Clothes",
  "Women Denim Jacket": "Clothes",
  "Men Cotton Kurta": "Clothes",
  "Black Track Pants": "Clothes",
  "Women Printed Top": "Clothes",
  "Men Polo T-Shirt": "Clothes",

  // Books
  "JavaScript Programming Book": "Books",
  "Python Programming Book": "Books",
  "HTML and CSS Guide": "Books",
  "React Development Guide": "Books",
  "Data Science Handbook": "Books",
  "Machine Learning Basics": "Books",
  "Java Programming Book": "Books",
  "Database Management Book": "Books",
  "C Programming Guide": "Books",
  "Web Development Book": "Books",
  "Computer Networks Book": "Books",
  "Operating System Book": "Books",

  // Shoes
  "Red Running Shoes": "Shoes",
  "White Sports Shoes": "Shoes",
  "Black Casual Shoes": "Shoes",
  "Brown Leather Shoes": "Shoes",
  "White Sneakers": "Shoes",
  "Women Pink Sneakers": "Shoes",
  "Men Formal Shoes": "Shoes",
  "Blue Training Shoes": "Shoes",
  "High Top Sneakers": "Shoes",
  "Walking Shoes": "Shoes",
  "Football Sports Shoes": "Shoes",
  "Canvas Casual Shoes": "Shoes",

  // Accessories
  "Black Sunglasses": "Accessories",
  "Brown Leather Wallet": "Accessories",
  "Travel Backpack": "Accessories",
  "Baseball Cap": "Accessories",
  "Laptop Sleeve": "Accessories",
  "Digital Alarm Clock": "Accessories",
  "Men Leather Belt": "Accessories",
  "Women Handbag": "Accessories",
  "Mobile Phone Stand": "Accessories",
  "Stainless Steel Bottle": "Accessories",
  "Travel Duffel Bag": "Accessories",
  "Classic Wrist Watch": "Accessories"
};

const imageMap = {
  // Electronics
  "Wireless Headphones":
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop",

  "Smart Watch":
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop",

  "Bluetooth Speaker":
    "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop",

  "Fast Mobile Charger":
    "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop",

  "Wireless Earbuds":
    "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&auto=format&fit=crop",

  "Gaming Mouse":
    "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop",

  "Mechanical Keyboard":
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop",

  "Power Bank":
    "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&auto=format&fit=crop",

  "LED Desk Lamp":
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop",

"Portable Mini Fan":
"https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=500&auto=format&fit=crop",

  "USB Type-C Cable":
    "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=500&auto=format&fit=crop",

  "Fitness Smart Band":
    "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&auto=format&fit=crop",


  // Clothes
  "Men White T-Shirt":
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop",

  "Men Black T-Shirt":
    "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&auto=format&fit=crop",

  "Blue Denim Jeans":
    "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop",

  "Grey Winter Hoodie":
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop",

  "Brown Casual Jacket":
    "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&auto=format&fit=crop",

  "Formal Blue Shirt":
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop",

  "Women Summer Dress":
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop",

  "Women Denim Jacket":
    "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=500&auto=format&fit=crop",

  "Men Cotton Kurta":
    "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=500&auto=format&fit=crop",

  "Black Track Pants":
    "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&auto=format&fit=crop",

  "Women Printed Top":
"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop",

 "Men Polo T-Shirt":
"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop",


  // Books
  "JavaScript Programming Book":
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop",

  "Python Programming Book":
    "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&auto=format&fit=crop",

  "HTML and CSS Guide":
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop",

  "React Development Guide":
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop",

  "Data Science Handbook":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop",

  "Machine Learning Basics":
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&auto=format&fit=crop",

  "Java Programming Book":
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop",

  "Database Management Book":
    "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&auto=format&fit=crop",

  "C Programming Guide":
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop",

  "Web Development Book":
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop",

  "Computer Networks Book":
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&auto=format&fit=crop",

  "Operating System Book":
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop",


  // Shoes
  "Red Running Shoes":
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop",

  "White Sports Shoes":
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop",

  "Black Casual Shoes":
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop",

  "Brown Leather Shoes":
    "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&auto=format&fit=crop",

  "White Sneakers":
    "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500&auto=format&fit=crop",

  "Women Pink Sneakers":
    "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&auto=format&fit=crop",

  "Men Formal Shoes":
    "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&auto=format&fit=crop",

  "Blue Training Shoes":
    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&auto=format&fit=crop",

  "High Top Sneakers":
    "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=500&auto=format&fit=crop",

  "Walking Shoes":
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop",

  "Football Sports Shoes":
    "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=500&auto=format&fit=crop",

  "Canvas Casual Shoes":
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop",


  // Accessories
  "Black Sunglasses":
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop",

  "Brown Leather Wallet":
    "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop",

  "Travel Backpack":
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop",

  "Baseball Cap":
    "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&auto=format&fit=crop",

  "Laptop Sleeve":
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop",

  "Digital Alarm Clock":
    "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=500&auto=format&fit=crop",

  "Men Leather Belt":
    "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=500&auto=format&fit=crop",

  "Women Handbag":
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop",

  "Mobile Phone Stand":
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop",

  "Stainless Steel Bottle":
    "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop",

  "Travel Duffel Bag":
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop",

  "Classic Wrist Watch":
    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&auto=format&fit=crop"
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


function showContactForm() {
    document.getElementById("contactPopup").style.display = "flex";
}

function closeContactForm() {
    document.getElementById("contactPopup").style.display = "none";
}

function sendContactMessage() {

    alert("Message Sent Successfully!");

    closeContactForm();
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