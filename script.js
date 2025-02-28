document.addEventListener('DOMContentLoaded', () => {

    // **1. Validación del formulario:**
    const form = document.querySelector('form');
  
    if (form) { // Verificar si el formulario existe en el DOM
      form.addEventListener('submit', (event) => {
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
  
        // ***AQUÍ DEBES AGREGAR TUS VALIDACIONES***
  
        // Validar que el nombre tenga al menos 4 caracteres
        if (nombre.length < 4) {
          alert('El nombre debe tener al menos 4 caracteres.');
          event.preventDefault(); // Evitar que se envíe el formulario
        }
  
        // Ejemplo: validar que el email tenga un formato válido
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          alert('Por favor, ingrese un email válido.');
          event.preventDefault();
        }
  
        // Ejemplo: validar que el mensaje no tenga más de 200 caracteres
        if (mensaje.length > 200) {
          alert('El mensaje es demasiado largo (máximo 200 caracteres).');
          event.preventDefault();
        }
  
        // Si todas las validaciones pasan, el formulario se enviará
  
      });
    }
  
    // **2. Menú hamburguesa:**
    // ... (código sin cambios)
  
  });
alert("hola esta es mi pagina web")