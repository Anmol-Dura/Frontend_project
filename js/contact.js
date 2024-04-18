document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggleDarkMode');
    const contactSections = document.querySelectorAll('.contact-info, .contact-form');
    const body = document.querySelector('body.contact-page');

    toggleButton.addEventListener('click', function() {
        contactSections.forEach(section => {
            section.classList.toggle('dark-mode');
        });

        // Toggle background image based on dark mode
        body.classList.toggle('dark-mode-background');
    });
});