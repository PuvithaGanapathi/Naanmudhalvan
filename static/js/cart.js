// Sample item prices for calculating the total
const itemPrices = {
    "Tomato": 70,
    "Carrot": 50,
    "Potato": 60,
    "Broccoli":40,
    "Spinach": 25,
    "Apple": 150,
    "Banana": 50,
    "Orange": 130,
    "Strawberry": 350,
    "Grapes": 150
  };
  
  // Function to display cart items
  function displayCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Clear any existing content
    cartItemsContainer.innerHTML = "";
  
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty!</p>";
      document.getElementById("cart-total").innerText = "";
      return;
    }
  
    let total = 0;
  
    // Display each item in the cart
    cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");
      itemDiv.innerHTML = `
        <p>${item} - $${itemPrices[item].toFixed(2)}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItemsContainer.appendChild(itemDiv);
      total += itemPrices[item];
    });
  
    // Display total cost
    document.getElementById("cart-total").innerText = `Total: $${total.toFixed(2)}`;
  }
  
  // Function to remove an item from the cart
  function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // Remove item by index
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart(); // Refresh cart display
  }
  
  // Function to handle checkout
  function checkout() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Thank you for your purchase!");
    localStorage.removeItem("cart"); // Clear cart
    displayCart(); // Refresh cart display
  }
  
  // Initialize cart display when page loads
  window.onload = displayCart;
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
  