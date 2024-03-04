// script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a simple toggle functionality for a mobile navigation menu
const mobileNavButton = document.getElementById('mobileNavButton');
const mobileNavMenu = document.getElementById('mobileNavMenu');

if (mobileNavButton && mobileNavMenu) {
    mobileNavButton.addEventListener('click', () => {
        mobileNavMenu.classList.toggle('hidden');
    });
}
