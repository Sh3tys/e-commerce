const accueil = document.getElementById('accueil');
const listProduct = document.getElementById('listProduct');
const cart = document.getElementById('cart');
const login = document.getElementById('login');



accueil.addEventListener('click', function(){
    window.location.href = 'index.html';
});

listProduct.addEventListener('click', function(){
    window.location.href = 'listProduct.html';
});

cart.addEventListener('click', function(){
    window.location.href = 'cart.html';
});

login.addEventListener('click', function(){
    window.location.href = 'login.html';
});
