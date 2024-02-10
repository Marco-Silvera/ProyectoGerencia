// Header fixed

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})


// Menu responsive

function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const menuButton = document.querySelector(".menu-button");
    sidebar.style.display = 'flex';
    menuButton.style.display = 'none';

    // Evento que registra clic fuera del menu desplegado
    document.addEventListener('click', closeSidebarOutside);
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const menuButton = document.querySelector(".menu-button");
    sidebar.style.display = 'none';
    menuButton.style.display = 'block';

    // Elimina evento clic si se hace fuera del menu
    document.removeEventListener('click', closeSidebarOutside);
}

// Función para cerrar el menú si se hace clic fuera de él
function closeSidebarOutside(event) {
    const sidebar = document.querySelector(".sidebar");
    const menuButton = document.querySelector(".menu-button");
    const targetElement = event.target;

    // Verificar si el clic no ocurrió dentro del menú o del botón de menú
    if (!sidebar.contains(targetElement) && !menuButton.contains(targetElement)) {
        hideSidebar();
    }
}

// Deslizamiento suave

document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
