
console.log("✅ JavaScript cargado correctamente");
const contenido = document.getElementById("contenido");
const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(enlace => {
    enlace.addEventListener("click", (e) => {
        e.preventDefault();
        const seccion = enlace.dataset.section;
        cargarSeccion(seccion);
    });
});

function cargarSeccion(seccion) {
    if (seccion === "inicio") {
        contenido.innerHTML = `
            <h2>Inicio</h2>
            <p>SPA con navegación simbólica sin recargar la página.</p>
        `;
    }

    if (seccion === "conceptos") {
        contenido.innerHTML = `
            <h2>Conceptos Multimedia</h2>
            <img src="https://via.placeholder.com/300">
            <br><br>
            <button id="btnInfo">Mostrar descripción</button>
            <p id="info" style="display:none;">
                Ejemplo de hipermedia con interacción básica.
            </p>
        `;

        document.getElementById("btnInfo").addEventListener("click", () => {
            const info = document.getElementById("info");
            info.style.display = info.style.display === "none" ? "block" : "none";
        });
    }

    if (seccion === "contacto") {
        contenido.innerHTML = `
            <h2>Contacto</h2>
            <p>Email académico: daniel.lopez@umc.edu.ve</p>
        `;
    }
}
