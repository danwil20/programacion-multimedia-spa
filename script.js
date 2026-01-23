const contenido = document.getElementById("contenido");
const enlaces = document.querySelectorAll("nav a");

// Imagen reutilizable
const imagenGym = '<img src="Gym.jpg" alt="Imagen del Gym">';

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

// Función principal de carga
function cargarSeccion(seccion) {
  let contenidoHTML = "";

  if (seccion === "inicio") {
    contenidoHTML = `
      <h2>Inicio</h2>
      <p>Bienvenido a Gym Fitness SPA. Explora nuestras rutinas y consejos.</p>
      ${imagenGym}
      <button id="btnInfo">Mostrar Descripción</button>
      <p id="info" style="display:none;">
        Este SPA muestra rutinas y tips de gym sin recargar la página.
      </p>
    `;
  }

  if (seccion === "rutinas") {
    contenidoHTML = `
      <h2>Rutinas de Entrenamiento</h2>
      <p>Cardio, fuerza, HIIT y más.</p>
      ${imagenGym}
      <button id="btnInfo">Mostrar Descripción</button>
      <p id="info" style="display:none;">
        Rutinas para principiantes y avanzados.
      </p>
    `;
  }

  if (seccion === "contacto") {
    contenidoHTML = `
      <h2>Contacto</h2>
      <p>Déjanos tu correo para contactarte:</p>

      <input 
        type="email" 
        id="email"
        placeholder="Ingresa tu email"
      >

      <p id="mensajeError">
        El campo no puede estar vacío
      </p>

      ${imagenGym}
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

// FUNCIÓN DE UTILIDAD REUTILIZABLE
function validarCampoVacio(valor) {
  if (valor.trim() === "") {
    return false;
  }
  return true;
}
