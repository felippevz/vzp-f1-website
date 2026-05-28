const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    alert('Mensagem enviada com sucesso! (Simulação)');

    form.reset();
});