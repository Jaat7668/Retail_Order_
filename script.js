const items = [
  { name: "Margherita Pizza", price: 199, type: "pizza" },
  { name: "Farmhouse Pizza", price: 299, type: "pizza" },
  { name: "Cold Drink", price: 79, type: "drink" },
  { name: "Garlic Bread", price: 129, type: "bread" }
];

let cart = [];
const menuDiv = document.getElementById("menu");
const cartItems = document.getElementById("cartItems");
const totalEl = document.getElementById("total");

function renderMenu(list) {
  menuDiv.innerHTML = "";
  list.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button onclick='addToCart(${JSON.stringify(item)})'>Add to Cart</button>
    `;
    menuDiv.appendChild(div);
  });
}

function filterMenu(type) {
  if (type === "all") renderMenu(items);
  else renderMenu(items.filter(i => i.type === type));
}

function addToCart(item) {
  cart.push(item);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(i => {
    total += i.price;
    const li = document.createElement("li");
    li.textContent = `${i.name} - ₹${i.price}`;
    cartItems.appendChild(li);
  });
  totalEl.textContent = `Total: ₹${total}`;
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }
  alert("Order placed successfully!");
  cart = [];
  renderCart();
}

renderMenu(items);
