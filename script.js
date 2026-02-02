const contenido = document.getElementById("contenido");
const enlaces = document.querySelectorAll("nav a");

const imagenIzquierda = '<img src="Gym.jpg" class="img-lado" alt="Imagen izquierda">';
const imagenDerecha = '<img src="Gym2.jpg" class="img-lado" alt="Imagen derecha">';

enlaces.forEach(enlace => {
  enlace.addEventListener("click", e => {
    e.preventDefault();
    cargarSeccion(enlace.dataset.section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  cargarSeccion("inicio");
});

function validarCampoVacio(valor) {
  return valor.trim() !== "";
}

function cargarSeccion(seccion) {
  let html = "";

  /* ===== INICIO ===== */
  if (seccion === "inicio") {
    html = `
      <div class="layout animacion-css">
        ${imagenIzquierda}

        <div class="texto-centro scroll-color">
          <h2>Bienvenido a Gym Fitness</h2>
          <p>
            Gym Fitness es una plataforma dedicada al entrenamiento físico,
            hábitos saludables y mejora del rendimiento.
          </p>
          <p>
            Contenido multimedia, animaciones y rutinas estructuradas
            para estudiantes y entusiastas del fitness.
          </p>
          <p>
            Haz scroll para activar el cambio de color del texto.
          </p>
        </div>

        ${imagenDerecha}
      </div>
    `;
  }

  /* ===== RUTINAS ===== */
  if (seccion === "rutinas") {
    html = `
      <div class="layout animacion-css">
        ${imagenIzquierda}

        <div class="texto-centro">
          <h2>Rutinas de Entrenamiento</h2>

          <p class="rutina-texto">
            <strong>Rutina de 5 días (split por grupos musculares)</strong><br>
            Para niveles intermedios/avanzados que buscan ganar masa muscular.
          </p>

          <ul class="rutina-texto">
            <li><strong>Lunes:</strong> Pecho + tríceps</li>
            <li><strong>Martes:</strong> Espalda + bíceps</li>
            <li><strong>Miércoles:</strong> Piernas + glúteos</li>
            <li><strong>Jueves:</strong> Hombros + abdominales</li>
            <li><strong>Viernes:</strong> Piernas completas o circuito metabólico</li>
          </ul>

          <p class="rutina-texto">
            Ejercicios: press banca, dominadas, sentadillas,
            hip thrust, press militar y trabajo de core.
          </p>

          <video id="videoRutina" width="320">
            <source src="rutina.mp4" type="video/mp4">
            Tu navegador no soporta video.
          </video>

          <div class="controles">
            <button id="playBtn">▶ Reproducir</button>
            <button id="pauseBtn">⏸ Pausar</button>
          </div>
        </div>

        ${imagenDerecha}
      </div>
    `;
  }

  /* ===== CONTACTO ===== */
  if (seccion === "contacto") {
    html = `
      <div class="layout animacion-css">
        ${imagenIzquierda}

        <div class="texto-centro">
          <h2>Contacto</h2>

          <input type="email" id="email" placeholder="Ingresa tu email">
          <p id="mensajeError">El campo no puede estar vacío</p>

          <p><strong>Teléfono:</strong> 0416-1420691</p>
          <p><strong>Instagram:</strong> @danwil16</p>
          <p><strong>Correo:</strong> finesacademicosdaniel@gmail.com</p>
        </div>

        ${imagenDerecha}
      </div>
    `;
  }

  contenido.innerHTML = html;

  /* VIDEO */
  const video = document.getElementById("videoRutina");
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");

  if (video) {
    playBtn.onclick = () => video.play();
    pauseBtn.onclick = () => video.pause();
  }

  /* VALIDACIÓN */
  const email = document.getElementById("email");
  const error = document.getElementById("mensajeError");

  if (email) {
    error.style.display = "none";
    email.oninput = () => {
      error.style.display = validarCampoVacio(email.value) ? "none" : "block";
    };
  }
}

/* ===== SCROLL REAL ===== */
window.addEventListener("scroll", () => {
  const texto = document.querySelector(".scroll-color");
  if (!texto) return;

  texto.classList.toggle("color-activo", window.scrollY > 80);
});
