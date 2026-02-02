const contenido = document.getElementById("contenido");
function renderContenido(html) {
  try {
    if (!contenido) {
      throw new Error("Elemento #contenido no encontrado");
    }
    contenido.innerHTML = html;
  } catch (error) {
    console.error("Error al renderizar contenido:", error.message);
  }
}
function cargarInicio() {
  renderContenido(`
    <div class="layout">
      <img src="Gym.jpg" class="img-lado">

      <div class="texto-centro">
        <h2>Bienvenido al Gym Fitness</h2>
        <p>Entrena desde casa o en el gimnasio con rutinas diseñadas para ti.</p>
        <p>Mejora tu fuerza, resistencia y constancia.</p>
      </div>

      <img src="Gym2.jpg" class="img-lado">
    </div>
  `);
}

function cargarRutinas() {
  renderContenido(`
    <div class="layout">
      <img src="Gym.jpg" class="img-lado">

      <div class="texto-centro rutinas-centrado">
        <h2>Rutina de 5 días</h2>
        <p>Split por grupos musculares (intermedio / avanzado)</p>

        <p><strong>Lunes:</strong> pecho + tríceps</p>
        <p><strong>Martes:</strong> espalda + bíceps</p>
        <p><strong>Miércoles:</strong> piernas + glúteos</p>
        <p><strong>Jueves:</strong> hombros + abdominales</p>
        <p><strong>Viernes:</strong> piernas o circuito metabólico</p>

        <h3>Ejercicios recomendados</h3>
        <ul>
          <li>Pecho: press banca, fondos</li>
          <li>Espalda: dominadas, remo</li>
          <li>Piernas: sentadillas, prensa</li>
          <li>Glúteos: hip thrust</li>
          <li>Hombros: press militar</li>
          <li>Core: planchas, crunch</li>
        </ul>

        <video width="320" controls>
          <source src="rutina.mp4" type="video/mp4">
        </video>
      </div>

      <img src="Gym2.jpg" class="img-lado">
    </div>
  `);
}

function cargarContacto() {
  renderContenido(`
    <div class="layout">
      <img src="Gym.jpg" class="img-lado">

      <div class="texto-centro">
        <h2>Contacto</h2>
        <p>Déjanos tu correo para más información</p>
        <input type="email" placeholder="Ingresa tu email">
        <p><strong>Teléfono:</strong> 0416-1420691</p>
        <p><strong>Instagram:</strong> @danwil16</p>
        <p><strong>Correo:</strong> finesacademicosdaniel@gmail.com</p>
      </div>

      <img src="Gym2.jpg" class="img-lado">
    </div>
  `);
}
function iniciarNavegacion() {
  try {
    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const seccion = link.dataset.section;

        if (seccion === "inicio") cargarInicio();
        if (seccion === "rutinas") cargarRutinas();
        if (seccion === "contacto") cargarContacto();
      });
    });
  } catch (error) {
    console.error("Error en navegación:", error.message);
  }
}
iniciarNavegacion();
cargarInicio();
