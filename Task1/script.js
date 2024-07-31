window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(to right, #000099, #000066)';
    } else {
        navbar.style.background = 'linear-gradient(to right, #0000ff, #000099)';
    }
});
