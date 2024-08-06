// Constants for DOM elements
const productsSection = document.getElementById('products');
const cartCountElement = document.getElementById('cart-count');
const form = document.querySelector('form');

// Shopping cart data structure
const shoppingCart = [];

// Function to add item to cart
function addToCart(productName, productPrice) {
  const productItem = {
    name: productName,
    price: productPrice
  };
  shoppingCart.push(productItem);
  updateCartCount();
  alert(`${productName} has been added to your cart.`);
}

// Function to update cart count
function updateCartCount() {
  cartCountElement.innerText = shoppingCart.length;
}

// Function to handle form submission
form.addEventListener('submit', function(event) {
  if (form.checkValidity()) {
    event.preventDefault();
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    // Handle form data here
    alert('Thank you for your message. We will get back to you soon.');
    form.reset();
  }
});

// Function to scroll to products section
function scrollToProducts() {
  productsSection.scrollIntoView({ behavior: 'smooth' });
}