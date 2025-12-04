document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        formMessage.style.color = 'green';
        formMessage.textContent = 'Mensagem enviada com sucesso! Simulação de envio para um serviço Serverless.';
        form.reset();
    });
});
