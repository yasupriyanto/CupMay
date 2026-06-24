let cart = [];

function addToCart(item) {
  cart.push(item);
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
}

function checkout() {
  if (cart.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  let message = "Halo, saya mau pesan:%0A";
  cart.forEach(item => {
    message += "- " + item + "%0A";
  });

  // ganti nomor WA kamu di sini
  window.open("https://wa.me/6281234567890?text=" + message);
}

function scrollToOrder() {
  document.getElementById("order").scrollIntoView({ behavior: "smooth" });
}