// ======= Preloader + Splitting + GSAP ======= //
window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  const conteudo = document.getElementById("conteudo");

  // animação vertical-flip
  Splitting();
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.75 });
  tl.from(".vertical-flip .cell", {
    scale: 0,
    transformOrigin: "center",
    x: "1.5rem",
    duration: 0.25,
    ease: "circ.out",
    stagger: { amount: 3, from: "start" }
  }).to(".vertical-flip .cell", {
    scale: 0,
    xPercent: -900,
    duration: 0.5,
    stagger: { amount: 0.75, from: "start" }
  }, "+=0.5");

  // esconde preloader e mostra conteúdo
  setTimeout(() => {
    preloader.style.display = "none";
    conteudo.style.display = "block";
  }, 2000); // mantém a animação por 2s
});

// ======= FUNÇÃO PARA MOSTRAR/OCULTAR INFORMAÇÕES DOS CARDS ======= //
function mostrarInfo(id) {
  const elemento = document.getElementById(id);
  if (!elemento) return;

  if (elemento.style.display === "block") {
    elemento.style.opacity = "0";
    setTimeout(() => { elemento.style.display = "none"; }, 300);
  } else {
    elemento.style.display = "block";
    elemento.style.opacity = "0";
    setTimeout(() => { elemento.style.opacity = "1"; elemento.style.transition = "opacity 0.5s"; }, 50);
  }
}

// ======= LISTA DE CURIOSIDADES ======= //
const curiosidades = [
  "Londrina foi fundada por britânicos e o nome significa 'Pequena Londres'.",
  "A cidade é um dos maiores polos universitários do Paraná.",
  "O Lago Igapó é um dos cartões-postais mais visitados da cidade.",
  "Londrina é conhecida como a 'Capital do Café' no norte do Paraná.",
  "A ExpoLondrina é uma das maiores feiras agropecuárias da América Latina.",
  "A cidade foi planejada antes mesmo de ser fundada oficialmente em 1934.",
  "O Jardim Botânico de Londrina abriga mais de 80 espécies de plantas nativas da região.",
  "O pôr do sol no Lago Igapó é um dos mais fotografados do Paraná."
];

// ======= GERAR CURIOSIDADE ALEATÓRIA ======= //
function gerarCuriosidade() {
  const curiosidadeEl = document.getElementById("curiosidade");
  if (!curiosidadeEl) return;

  const indice = Math.floor(Math.random() * curiosidades.length);
  const curiosidadeEscolhida = curiosidades[indice];

  curiosidadeEl.style.opacity = "0";
  setTimeout(() => {
    curiosidadeEl.textContent = curiosidadeEscolhida;
    curiosidadeEl.style.opacity = "1";
    curiosidadeEl.style.transition = "opacity 0.5s";
  }, 200);
}

// ======= ROLAGEM SUAVE NAVBAR ======= //
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href.startsWith("#")) {
      e.preventDefault();
      const destino = document.querySelector(href);
      if (destino) {
        window.scrollTo({ top: destino.offsetTop - 60, behavior: "smooth" });
      }
    }
  });
});

// ======= REVELAÇÃO AO ROLAR ======= //
const elementos = document.querySelectorAll('.card, .galeria, .curiosidades, footer');
function revelarAoRolar() {
  const alturaJanela = window.innerHeight;
  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;
    if (posicao < alturaJanela - 100) el.classList.add('visivel');
  });
}
window.addEventListener('scroll', revelarAoRolar);
window.addEventListener('load', revelarAoRolar);

// ======= EFEITO DE DIGITAÇÃO NO TÍTULO ======= //
window.addEventListener("load", () => {
  const elementoTitulo = document.getElementById("titulo-animado");
  const subtexto = document.getElementById("subtexto");

  if (elementoTitulo && subtexto) {
    const titulo = "Explore os Encantos de Londrina";
    let indice = 0;

    function digitarTitulo() {
      if (indice < titulo.length) {
        elementoTitulo.textContent += titulo.charAt(indice);
        indice++;
        setTimeout(digitarTitulo, 100);
      } else {
        subtexto.style.opacity = "1";
      }
    }

    digitarTitulo();
  }
});

// ======= BOTÃO VOLTAR AO TOPO ======= //
const btnTopo = document.getElementById("btnTopo");
if (btnTopo) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) btnTopo.classList.add("visivel");
    else btnTopo.classList.remove("visivel");
  });

  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
