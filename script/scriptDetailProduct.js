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

  const addToCartButton = document.getElementById("add-to-cart"); // Bouton Ajouter au panier

  // Ajout du produit au panier
  addToCartButton.addEventListener("click", () => {
    // Récupérer les informations du produit
    const productName = document.querySelector(
      ".product-details h2"
    ).textContent;
    const productPriceText = document.querySelector(
      ".product-details .price"
    ).textContent; // Exemple : "€499.99"
    const productImage = document.querySelector(".product-image img").src;

    // Extraire correctement le prix en tant que nombre
    const productPrice = parseFloat(
      productPriceText.replace(/[^0-9.,]/g, "").replace(",", ".")
    );

    if (isNaN(productPrice)) {
      alert("Erreur : Le prix du produit est invalide.");
      return;
    }

    const product = {
      name: productName,
      price: productPrice, // Prix correctement formaté
      image: productImage,
    };

    // Récupérer les articles existants dans le panier
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Ajouter le produit au panier
    cartItems.push(product);

    // Mettre à jour le localStorage avec les nouveaux articles
    localStorage.setItem("cart", JSON.stringify(cartItems));

    alert(`${productName} a été ajouté au panier.`);
  });
});
