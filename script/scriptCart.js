document.addEventListener('DOMContentLoaded', () => {
    const accueil = document.getElementById('accueil');
    const catalog = document.getElementById('catalog');
    const listProduct = document.getElementById('listProduct');
    const login = document.getElementById('login');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Navigation entre les pages
    if (accueil) {
        accueil.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    if (login) {
        login.addEventListener('click', () => {
            window.location.href = 'login.html';
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


    const cartContainer = document.querySelector('.cart-container');
    const clearCartButton = document.getElementById('clear-cart');

    // Récupérer les articles du panier depuis le localStorage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Fonction pour mettre à jour l'affichage du panier
    const updateCartDisplay = () => {
        cartContainer.innerHTML = ''; // Vider le conteneur avant de le remplir

        if (cartItems.length === 0) {
            cartContainer.innerHTML = '<p>Votre panier est vide.</p>';
            return;
        }

        let total = 0;

        cartItems.forEach((item, index) => {
            total += item.price; // Calcul du total

            // Créer un élément pour chaque produit
            const productElement = document.createElement('div');
            productElement.classList.add('cart-item');
            productElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="product-image" />
                <div class="product-details">
                    <h2>${item.name}</h2>
                    <p>Prix : ${item.price.toFixed(2)} €</p>
                    <button class="remove-item" data-index="${index}">Supprimer</button>
                </div>
            `;
            cartContainer.appendChild(productElement);
        });

        // Ajouter le total en bas du panier
        const totalElement = document.createElement('div');
        totalElement.classList.add('cart-total');
        totalElement.innerHTML = `<h3>Total : ${total.toFixed(2)} €</h3>`;
        cartContainer.appendChild(totalElement);
    };

    // Écouter les clics sur les boutons "Supprimer"
    cartContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const itemIndex = event.target.dataset.index;

            // Supprimer l'article du tableau
            cartItems.splice(itemIndex, 1);

            // Mettre à jour le localStorage et l'affichage
            localStorage.setItem('cart', JSON.stringify(cartItems));
            updateCartDisplay();
        }
    });

    // Écouter le clic sur "Vider le panier"
    clearCartButton.addEventListener('click', () => {
        localStorage.removeItem('cart'); // Supprimer tout le panier du localStorage
        cartItems.length = 0; // Vider le tableau local
        updateCartDisplay(); // Mettre à jour l'affichage
    });

    // Initialiser l'affichage du panier
    updateCartDisplay();
});
