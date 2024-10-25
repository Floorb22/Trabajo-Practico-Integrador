document.getElementById('contacto-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    
    const errores = [];

   
    if (nombre.length < 3) {
        errores.push('El nombre debe tener al menos 3 caracteres.');
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errores.push('El correo electrónico no es válido.');
    }

    
    const telefonoRegex = /^\+?[0-9]{1,4}?[-. ]?[0-9]{1,4}[-. ]?[0-9]{4,10}$/;
    if (!telefonoRegex.test(telefono)) {
        errores.push('El número de teléfono no es válido.');
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; 

    if (errores.length > 0) {
        
        const errorMessageDiv = document.createElement('div');
        errorMessageDiv.id = 'error-message';
        errorMessageDiv.innerHTML = errores.join('<br>');
        resultadoDiv.appendChild(errorMessageDiv);
    } else {
        const datosDiv = document.createElement('div');
        datosDiv.innerHTML = `
            <p>Gracias <strong>${nombre}</strong> por dejar tus datos.</p>
            <p>Pronto nos comunicaremos a tu <strong> email </strong> ( ${email})</p> 
            <p>o a tu <strong> numero </strong> ( ${telefono})</p> 
        `;
        resultadoDiv.appendChild(datosDiv);
        
        document.getElementById('contact-form').reset();
    }
});
