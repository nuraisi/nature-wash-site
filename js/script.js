// Toggle class active ; toggle = ada menjadi tidak ada / tidak ada menjadi ada
const navbarMenu = document.querySelector('.navbar-menu');

// ketika hamburger menu di klik
document.querySelector('#icon-hamburger').onclick = () => {
    navbarMenu.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan menu
const hamburger = document.querySelector('#icon-hamburger');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarMenu.contains(e.target)) {
        navbarMenu.classList.remove('active');
    }
});

