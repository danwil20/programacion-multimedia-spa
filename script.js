const contenido = document.getElementById("contenido");
const enlaces = document.querySelectorAll("nav a");

const imagenIzquierda = '<img src="Gym.jpg" class="img-lado" alt="Imagen izquierda">';
const imagenDerecha = '<img src="Gym2.jpg" class="img-lado" alt="Imagen derecha">';

enlaces.forEach(enlace => {
  enlace.addEventListener("click", e => {
    e.preventDefault();
    cargarSeccion(enlace.dataset.section);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  cargarSeccion("inicio");
});

/* ========= FUNCIÓN DE UTILIDAD ========= */
function validarCampoVacio(valor) {
  return valor.trim() !== "";
}

/* ========= FUNCIÓN PRINCIPAL ========= */
function cargarSeccion(seccion) {
  let html = "";

  if (seccion === "inicio") {
    html = `
      <div class="layout animacion-css">
        ${imagenIzquierda}
        <div class="texto-centro" id="textoAnimado">
          <h2>Inicio</h2>
          <p>
            Bienvenido a Gym Fitness. Mejora tu salud con nuestras rutinas.
          </p>
        </div>
        ${imagenDerecha}
      </div>
    `;
  }

  if (seccion === "rutinas") {
    html = `
      <div class="layout animacion-css">
        ${imagenIzquierda}

        <div class="texto-centro">
          <h2>Rutinas en Video</h2>

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

  if (seccion === "contacto") {
    html = `
      <div class="layout animacion-css">
        ${imagenIzquierda}

        <div class="texto-centro" id="textoColor">
          <h2>Contacto</h2>
          <input type="email" id="email" placeholder="Ingresa tu email">
          <p id="mensajeError">El campo no puede estar vacío</p>
        </div>

        ${imagenDerecha}
      </div>
    `;
  }

  contenido.innerHTML = html;

  /* === VIDEO CONTROLES === */
  const video = document.getElementById("videoRutina");
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");

  if (video) {
    playBtn.onclick = () => video.play();
    pauseBtn.onclick = () => video.pause();
  }

  /* === VALIDACIÓN === */
  const email = document.getElementById("email");
  const error = document.getElementById("mensajeError");

  if (email) {
    error.style.display = "none";
    email.oninput = () => {
      error.style.display = validarCampoVacio(email.value) ? "none" : "block";
    };
  }

  /* === ANIMACIÓN JS (setTimeout) === */
  const texto = document.getElementById("textoAnimado") || document.getElementById("textoColor");

  if (texto) {
    setTimeout(() => {
      texto.style.color = "#ff4500";
      texto.style.transform = "scale(1.05)";
    }, 2000);
  }
}
