const div = document.querySelector("section");

const eldiv = document.querySelector (".el-menu")

const lista = div.querySelector(".div-menu ul");

const button = document.querySelector(".button")

lista.innerHTML = '<li><a href="#about-me">About me</a></li><li><a href="#proyects">Proyect</li>';

button.addEventListener("click", () => {
    eldiv.classList.toggle("menu-displayed");
});