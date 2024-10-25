const imagenes = [
    '../img/musculacion.png',
    '../img/crosfit.png',
    '../img/zumba.png',
    '../img/pilates.png',
    '../img/yoga.png',
    '../img/funcional.png'
];

let indiceActual = 0;

const imagenCarrusel = document.getElementById('imagen-carrusel');

function mostrarImagen(indice) {
    imagenCarrusel.src = imagenes[indice];
}

mostrarImagen(indiceActual);

function imagenSiguiente() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen(indiceActual);
}

function imagenAnterior() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indiceActual);
}