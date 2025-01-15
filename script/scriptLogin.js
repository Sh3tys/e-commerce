document.addEventListener('DOMContentLoaded', () => {
    // Navigation entre les pages
    const accueil = document.getElementById('accueil');
    const catalog = document.getElementById('catalog');
    const listProduct = document.getElementById('listProduct');
    const cart = document.getElementById('cart');

    if (accueil) {
        accueil.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    if (catalog) {
        catalog.addEventListener('click', () => {
            window.location.href = 'catalog.html';
        });
    }

    if (listProduct) {
        listProduct.addEventListener('click', () => {
            window.location.href = 'listProduct.html';
        });
    }

    if (cart) {
        cart.addEventListener('click', () => {
            window.location.href = 'cart.html';
        });
    }

    // Gestion des onglets (Login/Register)
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginContent = document.getElementById('login-content');
    const registerContent = document.getElementById('register-content');
    const submitConnect = document.querySelector('button[type="submitConnect"]');
    const submit = document.querySelector('button[type="submit"]');
    const emailLogin = document.getElementById('emailLogin');
    const passwordLogin = document.getElementById('passwordLogin');
    const firstNameRegister = document.getElementById('firstNameRegister');
    const lastNameRegister = document.getElementById('lastNameRegister');
    const ageRegister = document.getElementById('ageRegister');
    const adresseRegister = document.getElementById('adresseRegister');
    const telRegister = document.getElementById('telRegister');
    const emailRegister = document.getElementById('emailRegister');
    const passwordRegister = document.getElementById('passwordRegister');

    // Récupération ou initialisation des comptes utilisateurs depuis localStorage
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    // Gestion des onglets
    loginTab.addEventListener('click', () => {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginContent.classList.remove('hidden');
        registerContent.classList.add('hidden');
    });

    registerTab.addEventListener('click', () => {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        registerContent.classList.remove('hidden');
        loginContent.classList.add('hidden');
    });

    // Gérer l'inscription
    if (submit) {
        submit.addEventListener('click', (event) => {
            event.preventDefault(); // Empêcher le formulaire de se soumettre automatiquement

            const firstName = firstNameRegister.value.trim();
            const lastName = lastNameRegister.value.trim();
            const age = ageRegister.value.trim();
            const adresse = adresseRegister.value.trim();
            const tel = telRegister.value.trim();
            const email = emailRegister.value.trim();
            const password = passwordRegister.value.trim();

            if (firstName === '' || lastName === '' || age === '' || adresse === '' || tel === '' || email === '' || password === '') {
                alert('Veuillez remplir tous les champs');
                return;
            }

            // Vérifie si l'utilisateur est déjà inscrit
            const exists = accounts.some(account => account.email === email);
            if (exists) {
                alert('Cet email est déjà inscrit. Veuillez utiliser un autre email.');
            } else {
                // Ajoute l'utilisateur
                accounts.push({ firstName, lastName, age, adresse, tel, email, password });
                localStorage.setItem('accounts', JSON.stringify(accounts)); // Sauvegarde dans localStorage
                alert('Inscription réussie');
                firstNameRegister.value = '';
                lastNameRegister.value = '';
                ageRegister.value = '';
                adresseRegister.value = '';
                telRegister.value = '';
                emailRegister.value = '';
                passwordRegister.value = '';
            }
        });
    }

    // Gérer la connexion
    if (submitConnect) {
        submitConnect.addEventListener('click', (event) => {
            event.preventDefault(); // Empêcher le formulaire de se soumettre automatiquement

            const email = emailLogin.value.trim();
            const password = passwordLogin.value.trim();

            if (email === '' || password === '') {
                alert('Veuillez remplir tous les champs');
                return;
            }

            // Recherche de l'utilisateur
            const user = accounts.find(account => account.email === email);

            if (user) {
                if (user.password === password) {
                    alert('Connexion réussie');
                    // Redirection ou autre action
                    window.location.href = 'index.html';
                } else {
                    alert('Mot de passe incorrect');
                }
            } else {
                alert('Utilisateur non trouvé. Veuillez vous inscrire.');
            }
        });
    }
});
