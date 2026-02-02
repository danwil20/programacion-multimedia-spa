const contenido = document.getElementById("contenido");
const enlaces = document.querySelectorAll("nav a");

// Imágenes laterales
const imagenIzquierda = '<img src="Gym.jpg" class="img-lado" alt="Imagen izquierda">';
const imagenDerecha = '<img src="Gym2.jpg" class="img-lado" alt="Imagen derecha">';

// Eventos del menú
enlaces.forEach(enlace => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    const seccion = enlace.dataset.section;
    cargarSeccion(seccion);
  });
});

// Cargar inicio automáticamente
document.addEventListener("DOMContentLoaded", () => {
  cargarSeccion("inicio");
});

// Función principal
function cargarSeccion(seccion) {
  let contenidoHTML = "";

  if (seccion === "inicio") {
    contenidoHTML = `
      <div class="layout">
        ${imagenIzquierda}

        <div class="texto-centro">
          <h2>Inicio</h2>
          <p>
            Bienvenido a Gym Fitness. Explora nuestras rutinas y consejos
            para mantenerte en forma.
          </p>

          <button id="btnInfo">Mostrar Descripción</button>
          <p id="info" style="display:none;">
            Este sitio muestra rutinas y tips de entrenamiento sin recargar la página.
          </p>
        </div>

        ${imagenDerecha}
      </div>
    `;
  }

  if (seccion === "rutinas") {
    contenidoHTML = `
      <div class="layout">
        ${imagenIzquierda}

        <div class="texto-centro">
          <h2>Rutinas de Entrenamiento</h2>
          <p>
            Cardio, fuerza, HIIT y más. Encuentra la rutina ideal según
            tus objetivos.
          </p>

          <button id="btnInfo">Mostrar Descripción</button>
          <p id="info" style="display:none;">
            Rutinas diseñadas para principiantes y usuarios avanzados.
          </p>
        </div>

        ${imagenDerecha}
      </div>
    `;
  }

  if (seccion === "contacto") {
    contenidoHTML = `
      <div class="layout">
        ${imagenIzquierda}

        <div class="texto-centro">
          <h2>Contacto</h2>
          <p>Déjanos tu correo para contactarte:</p>

          <input 
            type="email" 
            id="email"
            placeholder="Ingresa tu email"
          >

          <p id="mensajeError">El campo no puede estar vacío</p>
        </div>

        ${imagenDerecha}
      </div>
    `;
  }

  contenido.innerHTML = contenidoHTML;

  // Botón info
  const btnInfo = document.getElementById("btnInfo");
  if (btnInfo) {
    btnInfo.addEventListener("click", () => {
      const info = document.getElementById("info");
      info.style.display = info.style.display === "none" ? "block" : "none";
    });
  }

  // Validación interactiva
  const emailInput = document.getElementById("email");
  const mensajeError = document.getElementById("mensajeError");

  if (emailInput) {
    mensajeError.style.display = "none";

    emailInput.addEventListener("input", () => {
      if (!validarCampoVacio(emailInput.value)) {
        mensajeError.style.display = "block";
      } else {
        mensajeError.style.display = "none";
      }
    });
  }
}

// Función reutilizable
function validarCampoVacio(valor) {
  return valor.trim() !== "";
}
