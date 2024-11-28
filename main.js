const productWrapper = document.querySelector(".grid-wrapper");
const productTemplate = document.getElementById("product-template").content;
const cartTemplate = document.getElementById("cart-template").content;
const cartWrapper = document.querySelector(".cart__items");
let productsArray = [];
const cartItems = [];
// Fetching products with Axios
//fetching two endpoints as requested
const apiUrl = "https://fakestoreapi.com/products/category/jewelery";
const apiProduct = "https://fakestoreapi.com/products/";
window.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await axios.get(apiUrl);
    const products = response.data;

    productsArray = products;
    populateGrid(productsArray);
    console.log(productsArray);
  } catch (error) {
    alert(`Error fetching products: ${error.message}`);
  }
});

function populateCart() {
  cartWrapper.innerHTML = "";
  cartItems.forEach((product) => {
    const cart = cartTemplate.cloneNode(true);
    cart.querySelector(".cart__item-description").textContent = product.title;
    cart.querySelector(".cart__item-price").textContent = `$${product.price}`;
    cartWrapper.appendChild(cart);
  });
}
function populateGrid(productsArray) {
  productsArray.forEach((product) => {
    const card = productTemplate.cloneNode(true);
    card.querySelector(".card__image").src = product.image;
    card.querySelector(".card__image").alt = product.title;
    card.querySelector(".card__title").textContent = product.title;
    card.querySelector(".card__description").textContent = product.description;
    card.querySelector(".card__price").textContent = `$${product.price}`;
    card.querySelector(".card__button").dataset.id = product.id;
    productWrapper.appendChild(card);
  });
}

productWrapper.addEventListener("click", async (event) => {
  if (event.target.classList.contains("card__button")) {
    const productId = event.target.dataset.id;

    try {
      const response = await axios.get(`${apiProduct}/${productId}`);
      const productDetails = response.data;

      // Add the product to the cart and update the cart items list
      addToCart(productDetails);
    } catch (error) {
      console.error(`Error fetching product details: ${error.message}`);

      alert(
        "An error occurred while fetching product details. Please try again later."
      );
    }
  }
});

function addToCart(productDetails) {
  cartItems.push(productDetails);
  populateCart();
}
//function to show cart
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("cart-icon")) {
    const cart = document.querySelector(".cart");
    cart.classList.toggle("show");
  }
});

//function to close cart
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("close-icon")) {
    const cart = document.querySelector(".cart");
    cart.classList.remove("show");
  }
});
