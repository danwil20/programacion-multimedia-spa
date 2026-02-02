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
        <h2>Rutina de 5 días</h2>
        <p>Split por grupos musculares (intermedio / avanzado)</p>

        <p><strong>Lunes:</strong> pecho + tríceps</p>
        <p><strong>Martes:</strong> espalda + bíceps</p>
        <p><strong>Miércoles:</strong> piernas + glúteos</p>
        <p><strong>Jueves:</strong> hombros + abdominales</p>
        <p><strong>Viernes:</strong> piernas o circuito metabólico</p>

        <p class="rutina-texto">
          Deja al menos 48 horas entre el trabajo de un mismo grupo muscular.
        </p>

        <h3>Ejercicios recomendados</h3>
        <ul>
          <li><strong>Pecho:</strong> press banca, fondos</li>
          <li><strong>Espalda:</strong> dominadas, remo</li>
          <li><strong>Piernas:</strong> sentadillas, prensa</li>
          <li><strong>Glúteos:</strong> hip thrust</li>
          <li><strong>Hombros:</strong> press militar</li>
          <li><strong>Core:</strong> planchas, crunch</li>
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
    const s = link.dataset.section;
    if (s === "inicio") cargarInicio();
    if (s === "rutinas") cargarRutinas();
    if (s === "contacto") cargarContacto();
  });
});

cargarInicio();
