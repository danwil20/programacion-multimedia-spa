const contenido = document.getElementById("contenido");
const enlaces = document.querySelectorAll("nav a");

// Imagen centralizada y muy pequeña
const imagenGym = '<img src="Gym.jpg" alt="Imagen del Gym">';

// Escuchar los clics en la navegación
enlaces.forEach(enlace => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    const seccion = enlace.dataset.section;
    cargarSeccion(seccion);
  });
});

// Cargar la sección 'inicio' automáticamente al iniciar
document.addEventListener("DOMContentLoaded", () => {
  cargarSeccion("inicio");
});

function cargarSeccion(seccion) {
  let contenidoHTML = '';

  // Sección Inicio
  if (seccion === "inicio") {
    contenidoHTML = `
      <h2>Inicio</h2>
      <p>Bienvenido a Gym Fitness SPA. Explora nuestras rutinas y consejos para mantenerte en forma.</p>
      ${imagenGym}
      <button id="btnInfo">Mostrar Descripción</button>
      <p id="info" style="display:none;">Este SPA muestra rutinas y tips de gym sin recargar la página.</p>
    `;
  }

  // Sección Rutinas
  if (seccion === "rutinas") {
    contenidoHTML = `
      <h2>Rutinas de Entrenamiento</h2>
      <p>Cardio, fuerza, HIIT y más. Encuentra la rutina que mejor se adapte a tus objetivos.</p>
      ${imagenGym}
      <button id="btnInfo">Mostrar Descripción</button>
      <p id="info" style="display:none;">
        Aquí encontrarás rutinas para principiantes y avanzados: cardio, fuerza, HIIT y más.
      </p>
    `;
  }

  // Sección Contacto
  if (seccion === "contacto") {
    contenidoHTML = `
      <h2>Contacto</h2>
      <p>Email: contacto@gymfitness.com</p>
      <p>Teléfono: +58 212 1234567</p>
      ${imagenGym}
    `;
  }

  contenido.innerHTML = contenidoHTML;

  // Activar botón de descripción si existe
  const btnInfo = document.getElementById("btnInfo");
  if (btnInfo) {
    btnInfo.addEventListener("click", () => {
      const info = document.getElementById("info");
      info.style.display = info.style.display === "none" ? "block" : "none";
    });
  }
}
