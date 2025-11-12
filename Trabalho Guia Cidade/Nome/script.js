// Alternar visibilidade da história ao clicar no título
const logo = document.getElementById('toggleHistoria');
const historia = document.querySelector('.historia');
const linksMenu = document.querySelectorAll('nav a');

logo.addEventListener('click', () => {
  historia.style.display = historia.style.display === 'block' ? 'none' : 'block';
});

// Fechar a história ao clicar em qualquer link do menu
linksMenu.forEach(link => {
  link.addEventListener('click', () => {
    historia.style.display = 'none';
  });
});

// Abrir/fechar cards ao clicar
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    const extra = card.querySelector('.extra');
    extra.style.display = extra.style.display === 'block' ? 'none' : 'block';
  });
});
const curiosidades = [
  "Londrina já foi chamada de 'Capital Mundial do Café'.",
  "A Universidade Estadual de Londrina foi fundada em 1970.",
  "O Lago Igapó é um dos cartões-postais mais famosos da cidade.",
  "A ExpoLondrina é uma das maiores feiras agropecuárias da América Latina.",
  "O nome 'Londrina' significa 'pequena Londres', em homenagem à origem inglesa de seus fundadores.",
  "O planejamento urbano de Londrina foi feito antes mesmo da cidade existir, algo raro no Brasil da época.",
  "A cidade foi duramente afetada pela 'Geada Negra' de 1975, que destruiu plantações de café em toda a região.",
  "Londrina abriga um dos maiores jardins botânicos do Sul do Brasil, com mais de 1 milhão de m² de área verde.",
  "O Londrina Esporte Clube, fundado em 1956, é o time mais tradicional da cidade.",
  "O Aeroporto Governador José Richa é um dos mais movimentados do interior do país."
];

document.getElementById('curiosityBtn').addEventListener('click', () => {
  const random = curiosidades[Math.floor(Math.random() * curiosidades.length)];
  document.getElementById('curiosityText').textContent = random;
});
