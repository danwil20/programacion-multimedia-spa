const contenido = document.getElementById("contenido");
const enlaces = document.querySelectorAll("nav a");

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
      <img src="https://via.placeholder.com/400x200?text=Gym+Fitness" alt="Gym Fitness">
    `;
  }

  if (seccion === "rutinas") {
    contenido.innerHTML = `
      <h2>Rutinas de Entrenamiento</h2>
      <img src="https://via.placeholder.com/300x200?text=Rutinas" alt="Rutinas">
      <br><br>
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
    `;
  }
}
