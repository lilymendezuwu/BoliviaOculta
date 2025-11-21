const interruptor = document.getElementById("interruptor");

interruptor.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const cards = document.querySelectorAll(".card");
    const infoBox = document.getElementById("infoContent");
    const destinos = document.querySelector(".destinos");
    const infoDetallada = document.querySelector(".info-detallada");
    const header = document.querySelector(".header")
    const footer = document.querySelector(".footer")
    const hero = document.querySelector(".hero")
    const botones = document.querySelectorAll(".btn, #btnAbrir, #btnCerrar, .boton-info");

    //Para todas las tarjetas :(
    cards.forEach(card => {
        card.classList.toggle("dark");
    });


    infoBox.classList.toggle("dark");

    header.classList.toggle("dark");

    footer.classList.toggle("dark");

    hero.classList.toggle("dark");

    destinos.classList.toggle("dark");

    infoDetallada.classList.toggle("dark");

    botones.forEach(boton => {
    boton.classList.toggle("dark-btn");
});

    //Cambiar texto del botón
    if (document.body.classList.contains("dark")) {
        interruptor.textContent = "Modo Claro";
    } else {
        interruptor.textContent = "Modo Oscuro";
    }
});

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.classList.add("hovered");
    });

    card.addEventListener("mouseout", () => {
        card.classList.remove("hovered");
    });
});

const toggleInfo = document.getElementById("toggleInfo");
const infoContent = document.getElementById("infoContent");

toggleInfo.addEventListener("click", () => {
    const isHidden = infoContent.classList.contains("hidden");

    infoContent.classList.toggle("hidden");

    toggleInfo.textContent = isHidden
        ? "Ocultar Detalles"
        : "Mostrar Detalles";
});

const modal = document.getElementById("modal");
const btnAbrir = document.getElementById("btnAbrir");
const btnCerrar = document.getElementById("btnCerrar");

//Abrir modal
btnAbrir.addEventListener("click", function() {
  modal.classList.remove("oculto");
});

//Cerrar modal
btnCerrar.addEventListener("click", function() {
  modal.classList.add("oculto");
});

//Cerrar modal al hacer clic fuera
modal.addEventListener("click", function(evento) {

  if (evento.target === modal) {
    modal.classList.add("oculto");
  }
});