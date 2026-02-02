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
    <div class="texto-centro">
      <h2>Rutina de 5 días (split por grupos musculares)</h2>
      <p>Para niveles intermedios/avanzados que buscan ganar masa muscular.</p>

      <p><strong>Lunes:</strong> pecho + tríceps</p>
      <p><strong>Martes:</strong> espalda + bíceps</p>
      <p><strong>Miércoles:</strong> piernas + glúteos</p>
      <p><strong>Jueves:</strong> hombros + abdominales</p>
      <p><strong>Viernes:</strong> sesión completa de piernas o circuito metabólico</p>

      <p class="rutina-texto">
        Deja al menos 48 horas entre el trabajo de un mismo grupo muscular para favorecer la recuperación.
      </p>

      <h3>Ejercicios recomendados</h3>
      <ul>
        <li><strong>Pecho:</strong> Press de banca, fondos, aperturas</li>
        <li><strong>Espalda:</strong> Dominadas, remo, jalón al pecho</li>
        <li><strong>Piernas:</strong> Sentadillas, prensa, zancadas</li>
        <li><strong>Glúteos:</strong> Hip thrust, peso muerto rumano</li>
        <li><strong>Hombros:</strong> Press militar, elevaciones laterales</li>
        <li><strong>Brazos:</strong> Curl bíceps, extensiones tríceps</li>
        <li><strong>Core:</strong> Plancha, crunches, superman</li>
      </ul>

      <video width="320" controls>
        <source src="rutina.mp4" type="video/mp4">
      </video>
    </div>
  `;
}

function cargarContacto() {
  contenido.innerHTML = `
    <div class="layout">
      <img src="Gym.jpg" class="img-lado" alt="Gym">
      <div class="texto-centro">
        <h2>Contacto</h2>
        <input type="email" placeholder="Ingresa tu email">
        <p><strong>Teléfono:</strong> 0416-1420691</p>
        <p><strong>Instagram:</strong> @danwil16</p>
        <p><strong>Correo:</strong> finesacademicosdaniel@gmail.com</p>
      </div>
      <img src="Gym2.jpg" class="img-lado" alt="Gym">
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
