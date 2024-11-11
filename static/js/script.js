function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(item + " has been added to your cart!");
}

function buyNow(item) {
  alert("You are purchasing " + item + " now!");
}
function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the item is already in the cart
  let existingItem = cart.find(cartItem => cartItem.name === item);

  if (existingItem) {
    // If the item exists, increase its quantity
    existingItem.quantity += 1;
  } else {
    // Otherwise, add a new item with a quantity of 1
    cart.push({ name: item, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(item + " has been added to your cart!");
}

function buyNow(item) {
  alert("You are purchasing " + item + " now!");
}
function addToCart(productName) {
  fetch('/add-to-cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ product_name: productName, quantity: 1 }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        alert(data.message);
        updateCartDisplay();
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function updateCartDisplay() {
  fetch('/cart')
    .then(response => response.text())
    .then(data => {
      document.getElementById('cart-items').innerHTML = data;
    });
}

function checkout() {
  fetch('/checkout', {
    method: 'POST',
  })
    .then((response) => response.json())
    .then((data) => {
      alert(`Checkout successful! Total amount: Rs.${data.total_amount}`);
      updateCartDisplay();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
