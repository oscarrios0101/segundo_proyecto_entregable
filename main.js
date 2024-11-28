const productWrapper = document.querySelector(".grid-wrapper");
const productTemplate = document.getElementById("product-template").content;
let productsArray = [];
// Fetching products with Axios

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

      console.log(productDetails);
    } catch (error) {
      console.error(`Error fetching product details: ${error.message}`);
    }
  }
});
