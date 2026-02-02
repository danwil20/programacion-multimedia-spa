const contenido = document.getElementById("contenido");

/* INICIO */
function cargarInicio() {
  contenido.innerHTML = `
    <div class="layout animacion-css">
      <img src="Gym.jpg" class="img-lado">

      <div class="texto-centro">
        <h2>Bienvenido al Gym Fitness</h2>
        <p>Entrena desde casa o en el gimnasio con nuestras rutinas.</p>
        <p>Mejora tu fuerza, resistencia y disciplina.</p>
      </div>

      <img src="Gym2.jpg" class="img-lado">
    </div>
  `;
}

/* RUTINAS */
function cargarRutinas() {
  contenido.innerHTML = `
    <div class="texto-centro animacion-css">
      <h2>Rutinas</h2>
      <p class="rutina-texto">Rutina semanal para principiantes.</p>

      <video width="320" controls>
        <source src="rutina.mp4" type="video/mp4">
        Tu navegador no soporta video.
      </video>
    </div>
  `;
}

/* CONTACTO */
function cargarContacto() {
  contenido.innerHTML = `
    <div class="layout animacion-css">
      <img src="Gym.jpg" class="img-lado">

      <div class="texto-centro">
        <h2>Contacto</h2>

        <input type="email" placeholder="Ingresa tu email">

        <p><strong>Teléfono:</strong> 0416-1420691</p>
        <p><strong>Instagram:</strong> @danwil16</p>
        <p><strong>Correo:</strong> finesacademicosdaniel@gmail.com</p>
      </div>

      <img src="Gym2.jpg" class="img-lado">
    </div>
  `;
}

/* NAVEGACIÓN */
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const section = link.dataset.section;

    if (section === "inicio") cargarInicio();
    if (section === "rutinas") cargarRutinas();
    if (section === "contacto") cargarContacto();
  });
});

/* CARGA INICIAL */
cargarInicio();
