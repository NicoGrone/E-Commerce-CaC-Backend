document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name && email && phone && message) {
        // Simular envío de datos o realizar alguna acción
        console.log('Datos enviados:', { name, email, phone, message });

        // Redirigir a otra página
        window.location.href = './index.html';
    } else {
        document.getElementById('formResponse').innerText = 'Por favor, completa todos los campos.';
    }
});