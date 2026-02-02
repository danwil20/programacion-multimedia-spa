const contenido = document.getElementById("contenido");

function cargarInicio() {
  contenido.innerHTML = `
    <div class="layout">
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

function cargarRutinas() {
  contenido.innerHTML = `
    <div class="layout">
      <img src="Gym.jpg" class="img-lado">

      <div class="texto-centro">
        <h2>Rutina de 5 días (Split muscular)</h2>
        <p><strong>Para niveles intermedios / avanzados</strong></p>

        <ul>
          <li>Lunes: Pecho + tríceps</li>
          <li>Martes: Espalda + bíceps</li>
          <li>Miércoles: Piernas + glúteos</li>
          <li>Jueves: Hombros + abdominales</li>
          <li>Viernes: Piernas completas o circuito</li>
        </ul>

        <h3>Ejercicios recomendados</h3>

        <ul>
          <li>Pecho: Press, fondos</li>
          <li>Espalda: Dominadas, remo</li>
          <li>Piernas: Sentadillas, prensa</li>
          <li>Core: Planchas, crunch</li>
        </ul>

        <video width="320" controls>
          <source src="rutina.mp4" type="video/mp4">
        </video>
      </div>

      <img src="Gym2.jpg" class="img-lado">
    </div>
  `;
}

function cargarContacto() {
  contenido.innerHTML = `
    <div class="layout">
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

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const section = link.dataset.section;
    if (section === "inicio") cargarInicio();
    if (section === "rutinas") cargarRutinas();
    if (section === "contacto") cargarContacto();
  });
});

cargarInicio();
