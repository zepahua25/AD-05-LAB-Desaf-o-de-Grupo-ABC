document.addEventListener('DOMContentLoaded', function () {

    const nombres = document.querySelectorAll('h5');

    const colores = ['green', 'blue', 'red'];

    function cambiarColor() {

        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

        this.style.color = colorAleatorio;
    }

    nombres.forEach(function (nombre) {
        nombre.addEventListener('click', cambiarColor);
    });

});