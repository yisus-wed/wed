
const yesButton = document.getElementById('yes-button');
const gifContainer = document.getElementById('gif-container');

let noButtonClicks = 0; // Contador de clics en el botón "No"

// Obtener el botón de "No"
const noButton = document.getElementById('no-button');

// Agregar un evento de clic al botón de "No"
noButton.addEventListener('click', () => {
    // Generar nuevas coordenadas aleatorias dentro de la ventana
    const randomX = Math.random() * (window.innerWidth - 100); // 100 es el ancho del botón
    const randomY = Math.random() * (window.innerHeight - 50); // 50 es la altura del botón

    // Cambiar la posición del botón "No"
    noButton.style.position = 'absolute'; // Cambiar a posición absoluta
    noButton.style.left = `${randomX}px`; // Establecer nueva posición horizontal
    noButton.style.top = `${randomY}px`; // Establecer nueva posición vertical
});
yesButton.addEventListener('click', () => {
    // Mostrar el GIF y ocultar el resto del contenido
    gifContainer.style.display = 'block';
    document.querySelector('.container').style.display = 'none';

    // Redirigir después de un tiempo
    setTimeout(() => {
        window.location.href = 'index1.html';
    }, 3000);
});

// Lógica del carrusel
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

document.getElementById('prev-button').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex); // Llamada a la función showImage
});

document.getElementById('next-button').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex); // Llamada a la función showImage
});