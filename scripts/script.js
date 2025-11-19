// Modo escuro
const btnDark = document.getElementById('btnDark');
btnDark.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Cards toggle
function mostrarInfo(id) {
  const el = document.getElementById(id);
  if (el.style.display === "block") {
    el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}

// Curiosidades
const curiosidades = [
  "Londrina é a segunda maior cidade do Paraná.",
  "O Lago Igapó é cartão-postal da cidade.",
  "A cidade possui diversos festivais culturais ao longo do ano.",
  "Londrina tem clima subtropical e invernos frios.",
  "O Jardim Botânico é um ponto turístico imperdível."
];

function gerarCuriosidade() {
  const aleatorio = Math.floor(Math.random() * curiosidades.length);
  document.getElementById("curiosidade").innerText = curiosidades[aleatorio];
}

// Animação de digitação na página inicial
const texto = "Conheça curiosidades, lugares e sabores únicos da cidade.";
const titulo = document.getElementById("titulo-animado");
let i = 0;

function digitar() {
  if (i < texto.length) {
    titulo.innerHTML += texto.charAt(i);
    i++;
    setTimeout(digitar, 100);
  }
}

window.addEventListener('load', () => {
  digitar();
});