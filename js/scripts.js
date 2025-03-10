// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Lightbox Functionality
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');

    // Open Lightbox
    images.forEach(image => {
        image.addEventListener('click', function () {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
        });
    });

    // Close Lightbox
    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    // Close Lightbox when clicking outside the image
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active'); // Toggle the 'active' class
    });
});
// Toggle Mobile Navigation
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
