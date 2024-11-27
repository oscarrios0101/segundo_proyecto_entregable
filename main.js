const productWrapper = document.querySelector(".grid-wrapper");
const productTemplate = document.getElementById("product-template").content;
const productsArray = [];
//fetching products form api
window.addEventListener("DOMContentLoaded", () => {
  fetch("https://fakestoreapi.com/products/category/jewelery")
    .then((res) => res.json())
    .then((products) => {
      productsArray.push(...products);
      populateGrid(productsArray);
    });
});

function populateGrid(productsArray) {
  productsArray.forEach((product) => {
    const card = productTemplate.cloneNode(true);
    card.querySelector(".card__image").src = product.image;
    card.querySelector(".card__image").alt = product.title;
    card.querySelector(".card__title").textContent = product.title;
    card.querySelector(".card__description").textContent = product.description;
    card.querySelector(".card__price").textContent = product.price;

    productWrapper.appendChild(card);
  });
}
