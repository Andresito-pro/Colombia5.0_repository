// =========================================
// INTERACTIVIDAD Y DINAMISMO - COLOMBIA 5.0
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. EFECTO DE REVELADO (SCROLL REVEAL)
    // Hace que las secciones aparezcan suavemente al bajar
    const observerOptions = {
        threshold: 0.1
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Aplicamos el efecto a todas las filas de contenido
    document.querySelectorAll('.content-row').forEach(row => {
        row.style.opacity = "0";
        row.style.transform = "translateY(30px)";
        row.style.transition = "all 0.8s ease-out";
        revealOnScroll.observe(row);
    });

    // 2. MODO OSCURO (DARK MODE)
    // Un toque tecnológico para la interfaz
    const header = document.querySelector('header');
    const darkModeBtn = document.createElement('button');
    darkModeBtn.innerHTML = "🌙";
    darkModeBtn.style.cssText = "padding: 5px 10px; cursor: pointer; background: #00ff88; border: none; border-radius: 5px; margin-left: 15px;";
    
    // Insertamos el botón en el menú de navegación
    document.querySelector('nav ul').appendChild(darkModeBtn);

    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        darkModeBtn.innerHTML = document.body.classList.contains('dark-theme') ? "☀️" : "🌙";
    });

    // 3. MENSAJE DE SEGURIDAD (Simulación de Ciberseguridad)
    // Pequeña alerta al hacer click en los botones de acción
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', (e) => {
            console.log("Acceso seguro verificado por protocolos de Ciberseguridad.");
        });
    });
});