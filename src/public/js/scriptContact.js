document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name && email && phone && message) {
        document.getElementById('formResponse').innerText = 'Gracias por contactarnos, ' + name + '. Hemos recibido tu mensaje.';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formResponse').innerText = 'Por favor, completa todos los campos.';
    }
});
