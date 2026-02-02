const contenido = document.getElementById("contenido");

function cargarInicio() {
  contenido.innerHTML = `
    <div class="layout">
      <img src="Gym.jpg" class="img-lado" alt="Gym">
      <div class="texto-centro">
        <h2>Bienvenido al Gym Fitness</h2>
        <p>Entrena desde casa o en el gimnasio con nuestras rutinas.</p>
        <p>Mejora tu fuerza, resistencia y disciplina.</p>
      </div>
      <img src="Gym2.jpg" class="img-lado" alt="Gym">
    </div>
  `;
}

function cargarRutinas() {
  contenido.innerHTML = `
    <div class="layout">
      <img src="Gym.jpg" class="img-lado" alt="Rutina">

      <div class="texto-centro">
        <h2>Rutina de 5 días (Split muscular)</h2>

        <p><strong>Para niveles intermedios / avanzados</strong> que buscan ganar masa muscular.</p>

        <ul>
          <li><strong>Lunes:</strong> Pecho + tríceps</li>
          <li><strong>Martes:</strong> Espalda + bíceps</li>
          <li><strong>Miércoles:</strong> Piernas + glúteos</li>
          <li><strong>Jueves:</strong> Hombros + abdominales</li>
          <li><strong>Viernes:</strong> Piernas completas o circuito metabólico</li>
        </ul>

        <p>
          Deja al menos <strong>48 horas</strong> entre el trabajo de un mismo grupo muscular.
        </p>

        <h3>Ejercicios recomendados</h3>

        <ul>
          <li><strong>Pecho:</strong> Press de banca, fondos, aperturas</li>
          <li><strong>Espalda:</strong> Dominadas, remo, jalón</li>
          <li><strong>Piernas:</strong> Sentadillas, prensa, zancadas</li>
          <li><strong>Glúteos:</strong> Hip thrust, peso muerto</li>
          <li><strong>Hombros:</strong> Press militar, elevaciones</li>
          <li><strong>Brazos:</strong> Curl bíceps, tríceps</li>
          <li><strong>Core:</strong> Planchas, crunch, superman</li>
        </ul>

        <video width="320" controls>
          <source src="rutina.mp4" type="video/mp4">
        </video>
      </div>

      <img src="Gym2.jpg" class="img-lado" alt="Rutina">
    </div>
  `;
}

function cargarContacto() {
  contenido.innerHTML = `
    <div class="layout">
      <img src="Gym.jpg" class="img-lado" alt="Contacto">
      <div class="texto-centro">
        <h2>Contacto</h2>
        <input type="email" placeholder="Ingresa tu email">
        <p><strong>Teléfono:</strong> 0416-1420691</p>
        <p><strong>Instagram:</strong> @danwil16</p>
        <p><strong>Correo:</strong> finesacademicosdaniel@gmail.com</p>
      </div>
      <img src="Gym2.jpg" class="img-lado" alt="Contacto">
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
