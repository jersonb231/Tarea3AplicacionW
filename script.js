document.getElementById('registrarformulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const cedula = document.getElementById('cedula').value;
    const direccion = document.getElementById('direccion').value;
    const email = document.getElementById('email').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const ciudad = document.getElementById('ciudad').value;

  

    document.getElementById('message').textContent = 'Cliente registrado exitosamente!';
    document.getElementById('registrarformulario').reset();
});