const catalog = document.getElementById('catalog');
const listProduct = document.getElementById('listProduct');
const cart = document.getElementById('cart');
const login = document.getElementById('login');



catalog.addEventListener('click', function(){
    window.location.href = 'catalog.html';
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
