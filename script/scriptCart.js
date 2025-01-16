document.addEventListener("DOMContentLoaded", () => {
  const accueil = document.getElementById("accueil");
  const catalog = document.getElementById("catalog");
  const listProduct = document.getElementById("listProduct");
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

  if (listProduct) {
    listProduct.addEventListener("click", () => {
      window.location.href = "listProduct.html";
    });
  }

  const cartContainer = document.querySelector(".cart-container");
  const clearCartButton = document.getElementById("clear-cart");
  const buy = document.getElementById("btn-buy");

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  };

  const updateCartDisplay = () => {
    cartContainer.innerHTML = "";

    if (cartItems.length === 0) {
      cartContainer.innerHTML = "<p>Votre panier est vide.</p>";
      return;
    }

    let total = calculateTotal();

    cartItems.forEach((item, index) => {
      const productElement = document.createElement("div");
      productElement.classList.add("cart-item");
      productElement.innerHTML = `
                <img src="${item.image}" alt="${
        item.name
      }" class="product-image" />
                <div class="product-details">
                    <h2>${item.name}</h2>
                    <p>Prix : ${item.price.toFixed(2)} €</p>
                    <button class="remove-item" data-index="${index}">Supprimer</button>
                </div>
            `;
      cartContainer.appendChild(productElement);
    });

    const totalElement = document.createElement("div");
    totalElement.classList.add("cart-total");
    totalElement.innerHTML = `<h3>Total : ${total.toFixed(2)} €</h3>`;
    cartContainer.appendChild(totalElement);
  };

  cartContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-item")) {
      const itemIndex = event.target.dataset.index;

      cartItems.splice(itemIndex, 1);

      localStorage.setItem("cart", JSON.stringify(cartItems));
      updateCartDisplay();
    }
  });

  clearCartButton.addEventListener("click", () => {
    localStorage.removeItem("cart");
    cartItems.length = 0;
    updateCartDisplay();
  });

  if (buy) {
    buy.addEventListener("click", () => {
      const total = calculateTotal();
      if (total > 0) {
        alert(
          `Votre compte a été débité de ${total.toFixed(2)} € avec succès !`
        );
        localStorage.removeItem("cart");
        cartItems.length = 0;
        updateCartDisplay();
      } else {
        alert(
          "Votre panier est vide. Ajoutez des articles avant de finaliser l'achat."
        );
      }
    });
  }

  updateCartDisplay();
});
