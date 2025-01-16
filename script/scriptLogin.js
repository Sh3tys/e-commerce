document.addEventListener("DOMContentLoaded", () => {
  const accueil = document.getElementById("accueil");
  const catalog = document.getElementById("catalog");
  const listProduct = document.getElementById("listProduct");
  const cart = document.getElementById("cart");
  const loginTab = document.getElementById("login-tab");
  const registerTab = document.getElementById("register-tab");
  const loginContent = document.getElementById("login-content");
  const registerContent = document.getElementById("register-content");
  const submitConnect = document.querySelector('button[type="submitConnect"]');
  const submit = document.querySelector('button[type="submit"]');
  const emailLogin = document.getElementById("emailLogin");
  const passwordLogin = document.getElementById("passwordLogin");
  const firstNameRegister = document.getElementById("firstNameRegister");
  const lastNameRegister = document.getElementById("lastNameRegister");
  const ageRegister = document.getElementById("ageRegister");
  const adresseRegister = document.getElementById("adresseRegister");
  const telRegister = document.getElementById("telRegister");
  const emailRegister = document.getElementById("emailRegister");
  const passwordRegister = document.getElementById("passwordRegister");

  if (accueil)
    accueil.addEventListener(
      "click",
      () => (window.location.href = "index.html")
    );
  if (catalog)
    catalog.addEventListener(
      "click",
      () => (window.location.href = "catalog.html")
    );
  if (listProduct)
    listProduct.addEventListener(
      "click",
      () => (window.location.href = "listProduct.html")
    );
  if (cart)
    cart.addEventListener("click", () => (window.location.href = "cart.html"));

  let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
    loginContent.classList.remove("hidden");
    registerContent.classList.add("hidden");
  });

  registerTab.addEventListener("click", () => {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
    registerContent.classList.remove("hidden");
    loginContent.classList.add("hidden");
  });

  // Inscription
  if (submit) {
    submit.addEventListener("click", (event) => {
      event.preventDefault();

      const firstName = firstNameRegister.value.trim();
      const lastName = lastNameRegister.value.trim();
      const age = ageRegister.value.trim();
      const adresse = adresseRegister.value.trim();
      const tel = telRegister.value.trim();
      const email = emailRegister.value.trim();
      const password = passwordRegister.value.trim();

      if (
        [firstName, lastName, age, adresse, tel, email, password].some(
          (field) => field === ""
        )
      ) {
        alert("Veuillez remplir tous les champs");
        return;
      }

      if (accounts.some((account) => account.email === email)) {
        alert("Cet email est déjà inscrit.");
        return;
      }

      accounts.push({
        firstName,
        lastName,
        age,
        adresse,
        tel,
        email,
        password,
      });
      localStorage.setItem("accounts", JSON.stringify(accounts));
      alert("Inscription réussie !");
    });
  }

  if (submitConnect) {
    submitConnect.addEventListener("click", (event) => {
      event.preventDefault();

      const email = emailLogin.value.trim();
      const password = passwordLogin.value.trim();

      if ([email, password].some((field) => field === "")) {
        alert("Veuillez remplir tous les champs");
        return;
      }

      const user = accounts.find((account) => account.email === email);
      if (!user) {
        alert("Utilisateur non trouvé.");
        return;
      }

      if (user.password === password) {
        alert("Connexion réussie !");
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "index.html";
      } else {
        alert("Mot de passe incorrect.");
      }
    });
  }
});
