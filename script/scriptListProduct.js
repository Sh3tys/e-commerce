document.addEventListener("DOMContentLoaded", () => {
  const accueil = document.getElementById("accueil");
  const catalog = document.getElementById("catalog");
  const cart = document.getElementById("cart");
  const login = document.getElementById("login");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const detail = document.querySelectorAll(".detail");

  if (accueil) {
    accueil.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  if (login) {
    login.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  }

  if (catalog) {
    catalog.addEventListener("click", () => {
      window.location.href = "catalog.html";
    });
  }

  if (cart) {
    cart.addEventListener("click", () => {
      window.location.href = "cart.html";
    });
  }

  if (detail) {
    detail.forEach((element) => {
      element.onclick = () => (window.location.href = "detailProduct.html");
    });
  }

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const productItem = event.target.closest(".product-item");
      const productName = productItem.querySelector("h2").textContent;
      const productPriceText = productItem.querySelector("p").textContent;
      const productImage = productItem.querySelector("img").src;

      const productPrice = parseFloat(
        productPriceText.replace(/[^0-9.,]/g, "").replace(",", ".")
      );

      if (isNaN(productPrice)) {
        alert("Erreur : Le prix du produit est invalide.");
        return;
      }

      const product = {
        name: productName,
        price: productPrice,
        image: productImage,
      };

      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      cartItems.push(product);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    });
  });
});
