document.addEventListener("DOMContentLoaded", function() {
    // Agregar event listeners para la visualización de imágenes en modal
    const images = document.querySelectorAll('main .destination-description img');
    images.forEach(image => {
        image.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            
            // Verificar si es un dispositivo móvil
            const isMobile = window.matchMedia("(max-width: 600px)").matches;
            
            modal.innerHTML = `
                <div class="modal-content">
                    <img src="${this.src}" alt="${this.alt}" class="${isMobile ? 'mobile-orientation' : ''} destination-image">
                </div>
            `;
            document.body.appendChild(modal);

            modal.addEventListener('click', function() {
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                }
                modal.remove();
            });
            
            if (isMobile) {
                modal.requestFullscreen(); // Entrar al modo de pantalla completa
            }
        });
    });

    const toggleButton = document.getElementById('toggleDarkMode');
    const destinationsContainer = document.querySelector('.destinations');

    toggleButton.addEventListener('click', function() {
        destinationsContainer.classList.toggle('dark-mode');

        // Update background image based on dark mode state
        const body = document.body;
        const torontoImage = document.querySelector('.destination-description img[src="../media/images/toronto.jpg"]');

        if (destinationsContainer.classList.contains('dark-mode')) {
            body.style.backgroundImage = `url('${torontoImage.src}')`; // Change body background to Toronto image
        } else {
            body.style.backgroundImage = 'url("../media/images/banff.jpg")'; // Revert to default Banff background when in light mode
        }
    });
});