const contenido = document.getElementById("contenido");
const enlaces = document.querySelectorAll("nav a");

// Definir la imagen en una variable para evitar duplicados
const imagenGym = '<img src="Gym.jpg" alt="Imagen del Gym">';

enlaces.forEach(enlace => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    const seccion = enlace.dataset.section;
    cargarSeccion(seccion);
  });
});

function cargarSeccion(seccion) {
  if (seccion === "inicio") {
    contenido.innerHTML = `
      <h2>Inicio</h2>
      <p>Bienvenido a Gym Fitness SPA. Explora nuestras rutinas y consejos para mantenerte en forma.</p>
      ${imagenGym} <!-- Imagen incluida arriba de los comentarios -->
    `;
  }

  if (seccion === "rutinas") {
    contenido.innerHTML = `
      <h2>Rutinas de Entrenamiento</h2>
      <p>Cardio, fuerza, HIIT, y más. Encuentra la rutina que mejor se adapte a tus objetivos.</p>
      ${imagenGym} <!-- Imagen incluida arriba de los comentarios -->
      <button id="btnInfo">Mostrar Descripción</button>
      <p id="info" style="display:none;">
        Aquí encontrarás rutinas para principiantes y avanzados: cardio, fuerza, HIIT y más.
      </p>
    `;

    document.getElementById("btnInfo").addEventListener("click", () => {
      const info = document.getElementById("info");
      info.style.display = info.style.display === "none" ? "block" : "none";
    });
  }

  if (seccion === "contacto") {
    contenido.innerHTML = `
      <h2>Contacto</h2>
      <p>Email: contacto@gymfitness.com</p>
      <p>Teléfono: +58 212 1234567</p>
      ${imagenGym} <!-- Imagen incluida arriba de los comentarios -->
    `;
  }
}
