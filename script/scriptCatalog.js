document.addEventListener("DOMContentLoaded", () => {
  const accueil = document.getElementById("accueil");
  const listProduct = document.getElementById("listProduct");
  const cart = document.getElementById("cart");
  const login = document.getElementById("login");
  const list = document.getElementById("goList");

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

  if (listProduct) {
    listProduct.addEventListener("click", () => {
      window.location.href = "listProduct.html";
    });
  }

  if (cart) {
    cart.addEventListener("click", () => {
      window.location.href = "cart.html";
    });
  }

  if (list) {
    list.addEventListener("click", () => {
      window.location.href = "listProduct.html";
    });
  }

  const consolBtn = document.getElementById("consolBtn");
  const pcBtn = document.getElementById("pcBtn");
  const phoneBtn = document.getElementById("phoneBtn");
  const accessoryBtn = document.getElementById("accessoryBtn");
  const allBtn = document.getElementById("allBtn");

  const consolCatalog = document.getElementById("consolCatalog");
  const pcCatalog = document.getElementById("pcCatalog");
  const phoneCatalog = document.getElementById("phoneCatalog");
  const accessoryCatalog = document.getElementById("accessoryCatalog");

  consolBtn.addEventListener("click", () => {
    consolCatalog.style.display = "block";
    pcCatalog.style.display = "none";
    phoneCatalog.style.display = "none";
    accessoryCatalog.style.display = "none";
  });

  pcBtn.addEventListener("click", () => {
    consolCatalog.style.display = "none";
    pcCatalog.style.display = "block";
    phoneCatalog.style.display = "none";
    accessoryCatalog.style.display = "none";
  });

  phoneBtn.addEventListener("click", () => {
    consolCatalog.style.display = "none";
    pcCatalog.style.display = "none";
    phoneCatalog.style.display = "block";
    accessoryCatalog.style.display = "none";
  });

  accessoryBtn.addEventListener("click", () => {
    consolCatalog.style.display = "none";
    pcCatalog.style.display = "none";
    phoneCatalog.style.display = "none";
    accessoryCatalog.style.display = "block";
  });

  allBtn.addEventListener("click", () => {
    consolCatalog.style.display = "block";
    pcCatalog.style.display = "block";
    phoneCatalog.style.display = "block";
    accessoryCatalog.style.display = "block";
  });

  const otherList = document.querySelectorAll('.list-btn');
  otherList.forEach(item => {
    item.addEventListener('click', () => {
      alert("Cette page n'existe pas");
    });
  });
});
