

// Function to change the background color of the navbar on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgb(79, 28, 28)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.945)';
    }
});
