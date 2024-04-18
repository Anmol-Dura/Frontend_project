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
});
