const imagenes = [
    '../img/musculacion.png',
    '../img/crosfit.png',
    '../img/zumba.png',
    '../img/pilates.png',
    '../img/yoga.png',
    '../img/funcional.png'
];

// Índice inicial
let indiceActual = 0;

// Referencia al elemento img
const imagenCarrusel = document.getElementById('imagen-carrusel');

// Función para mostrar la imagen actual
function mostrarImagen(indice) {
    imagenCarrusel.src = imagenes[indice];
}

// Mostrar la primera imagen al cargar la página
mostrarImagen(indiceActual);

// Función para avanzar a la siguiente imagen
function imagenSiguiente() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen(indiceActual);
}

// Función para retroceder a la imagen anterior
function imagenAnterior() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indiceActual);
}