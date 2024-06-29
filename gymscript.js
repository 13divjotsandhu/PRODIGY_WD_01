const navLinks = document.querySelectorAll('.navbar ul li a');

// Add an event listener to each link to handle the click event
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove the 'active' class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add the 'active' class to the clicked link
        this.classList.add('active');
    });
});

// Function to change the background color of the navbar on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgb(79, 28, 28)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.945)';
    }
});
