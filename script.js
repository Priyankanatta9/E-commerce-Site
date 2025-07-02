
function addToCart(productName, price) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const index = cart.findIndex(item => item.name === productName);

  if (index > -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ name: productName, price: price, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${productName} added to cart!`);
}


if (window.location.pathname.includes("cart.html")) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsDiv = document.getElementById('cart-items');
  const cartTotalSpan = document.getElementById('cart-total');

  let total = 0;

  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <p><strong>${item.name}</strong></p>
      <p>Price: $${item.price.toFixed(2)} x ${item.quantity}</p>
      <hr/>
    `;
    cartItemsDiv.appendChild(itemDiv);
    total += item.price * item.quantity;
  });

  cartTotalSpan.innerText = total.toFixed(2);
}


function checkout() {
  alert("Thanks for your purchase! 🎉");
  localStorage.removeItem('cart');
  window.location.href = "index.html";
}

