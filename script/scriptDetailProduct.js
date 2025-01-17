document.addEventListener("DOMContentLoaded", () => {
  const accueil = document.getElementById("accueil");
  const catalog = document.getElementById("catalog");
  const cart = document.getElementById("cart");
  const login = document.getElementById("login");

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

  const addToCartButton = document.getElementById("add-to-cart");

  addToCartButton.addEventListener("click", () => {
    const productName = document.querySelector(
      ".product-details h2"
    ).textContent;
    const productPriceText = document.querySelector(
      ".product-details .price"
    ).textContent;
    const productImage = document.querySelector(".product-image img").src;
    //supp les infos inutile pour just avoir le float et calculer facilement le total
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

    // recupe des achats deja fait
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(product);

    //update du localSto
    localStorage.setItem("cart", JSON.stringify(cartItems));
  });
});
