document.addEventListener('DOMContentLoaded', () => {
    const accueil = document.getElementById('accueil');
    const catalog = document.getElementById('catalog');
    const cart = document.getElementById('cart');
    const login = document.getElementById('login');
    const cartContainer = document.querySelector('.cart-container');
    const clearCartButton = document.getElementById('clear-cart');

    // Navigation entre les pages
    if (accueil) accueil.addEventListener('click', () => window.location.href = 'index.html');
    if (catalog) catalog.addEventListener('click', () => window.location.href = 'catalog.html');
    if (cart) cart.addEventListener('click', () => window.location.href = 'cart.html');
    if (login) login.addEventListener('click', () => window.location.href = 'login.html');

    function loadCartItems() {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartContainer.innerHTML = '';

        if (cartItems.length === 0) {
            cartContainer.innerHTML = '<p>Votre panier est vide.</p>';
            return;
        }

        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>${item.price}</p>
                <button class="remove-item">Supprimer</button>
            `;

            cartItem.querySelector('.remove-item').addEventListener('click', () => {
                removeItemFromCart(item.name);
            });

            cartContainer.appendChild(cartItem);
        });
    }

    function removeItemFromCart(itemName) {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = cartItems.filter(item => item.name !== itemName);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        loadCartItems();
    }


    clearCartButton.addEventListener('click', () => {
        localStorage.removeItem('cart');
        loadCartItems();
    });

    loadCartItems();
});