document.addEventListener("DOMContentLoaded", () => {
  const catalog = document.getElementById("catalog");
  const listProduct = document.getElementById("listProduct");
  const cart = document.getElementById("cart");
  const login = document.getElementById("login");

  catalog.addEventListener("click", function () {
    window.location.href = "catalog.html";
  });

  listProduct.addEventListener("click", function () {
    window.location.href = "listProduct.html";
  });

  cart.addEventListener("click", function () {
    window.location.href = "cart.html";
  });

  login.addEventListener("click", function () {
    window.location.href = "login.html";
  });

  const teasing = document.getElementById("pictureTeasing");
  const promos = document.querySelectorAll(".promo-item");
  const category = document.querySelectorAll(".category");

  if (teasing) {
    teasing.addEventListener("click", function () {
      window.location.href = "catalog.html";
    });
  }
  if (promos) {
    promos.forEach((element) => {
      element.onclick = () => (window.location.href = "catalog.html");
    });
  }
  if (category) {
    category.forEach((element) => {
      element.onclick = () => (window.location.href = "catalog.html");
    });
  }


const popup = document.getElementById("popup");
const acceptPopupButton = document.getElementById("accept");

if (localStorage.getItem("conditionsAccepted") === "true") {
  popup.style.display = "none";
} else {
  popup.style.display = "flex";
}

acceptPopupButton.addEventListener("click", function () {
  popup.style.display = "none";
  localStorage.setItem("conditionsAccepted", "true");
});

});
