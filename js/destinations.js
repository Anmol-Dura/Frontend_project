// Función para recortar el texto y agregar un botón de "mostrar más"
function recortarTexto() {
    var descriptions = document.querySelectorAll('.destination-description p');
    descriptions.forEach(function(description) {
        var contenido = description.innerHTML;
        var palabras = contenido.split(' ');
        var maxPalabras = 30; // Número máximo de palabras a mostrar inicialmente

        if (window.innerWidth < 768) { // Si la pantalla es de tamaño móvil
            var textoRecortado = palabras.slice(0, maxPalabras).join(' ');
            description.innerHTML = textoRecortado + '... <button class="toggleBtn" onclick="toggleDescripcion(this)">Mostrar más</button>';
        }
    });
}

// Función para mostrar más texto
function toggleDescripcion(btn) {
    var descripcion = btn.parentNode;
    var contenidoCompleto = descripcion.getAttribute('data-fulltext');
    descripcion.innerHTML = contenidoCompleto + ' <button class="toggleBtn" onclick="toggleDescripcion(this)">Mostrar menos</button>';
}

// Llamar a la función para recortar texto cuando la página se carga
window.onload = recortarTexto;

// Llamar a la función para recortar texto cuando la ventana se redimensiona
window.onresize = recortarTexto;
