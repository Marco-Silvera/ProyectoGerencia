
// Header fixed

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})


// Menu responsive

function showSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'none'
}


document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

