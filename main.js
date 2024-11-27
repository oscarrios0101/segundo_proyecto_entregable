const productWrapper = document.querySelector(".grid-wrapper");
const productTemplate = document.getElementById("product-template").content;

const products = [
  {
    image: "images/premium_photo-1709033404514-c3953af680b4.avif",
    title: "Product 1",
    description: "Description for Product 1",
    price: "$19.99",
  },
  {
    image: "images/premium_photo-1709033404514-c3953af680b4.avif",
    title: "Product 2",
    description: "Description for Product 2",
    price: "$29.99",
  },
  {
    image: "images/premium_photo-1709033404514-c3953af680b4.avif",
    title: "Product 3",
    description: "Description for Product 3",
    price: "$39.99",
  },
];
products.forEach((product) => {
  const card = productTemplate.cloneNode(true);
  card.querySelector(".card__image").src = product.image;
  card.querySelector(".card__image").alt = product.title;
  card.querySelector(".card__title").textContent = product.title;
  card.querySelector(".card__description").textContent = product.description;
  card.querySelector(".card__price").textContent = product.price;

  productWrapper.appendChild(card);
});
