
    // Obtenemos los elementos de los botones y la información desplegada
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const info1 = document.getElementById('info1');
    const info2 = document.getElementById('info2');
    const info3 = document.getElementById('info3');
    
    // Función para mostrar la información del Botón 1 y ocultar la información de los otros botones
    button1.addEventListener('click', () => {
        info1.style.display = 'block';
        info2.style.display = 'none';
        info3.style.display = 'none';
    });
    
    // Función para mostrar la información del Botón 2 y ocultar la información de los otros botones
    button2.addEventListener('click', () => {
        info1.style.display = 'none';
        info2.style.display = 'block';
        info3.style.display = 'none';
    });
    
    // Función para mostrar la información del Botón 3 y ocultar la información de los otros botones
    button3.addEventListener('click', () => {
        info1.style.display = 'none';
        info2.style.display = 'none';
        info3.style.display = 'block';
    });
