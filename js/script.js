document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los elementos de las estrellas
    const stars = document.querySelectorAll('.star-label');


    stars.forEach(star => {
        star.addEventListener('click', function () {
            // Desmarcar todas las estrellas
            stars.forEach(star => star.classList.remove('selected'));

            // Marcar la estrella clicada
            this.classList.add('selected');

            // Seleccionar el radio button correspondiente
            const radioId = this.getAttribute('for');
            document.getElementById(radioId).checked = true;
        });
    });
});
