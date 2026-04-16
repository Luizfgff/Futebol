/* =========================================
   BANCO DE DADOS (Simulação)
   ========================================= */
const players = [
  { name: "Pelé", description: "O Rei do Futebol e eterno camisa 10.", icon: "👑" },
  { name: "Marta", description: "A Rainha, eleita 6 vezes a melhor do mundo.", icon: "⚽" },
  { name: "Cristiano Ronaldo", description: "A máquina de recordes e dedicação.", icon: "🚀" }
];

const faqs = [
  { q: "Qual o tamanho oficial do campo?", a: "Varia entre 100m e 110m de comprimento." },
  { q: "Quando foi criada a FIFA?", a: "Fundada em 21 de maio de 1904, em Paris." }
];

/* =========================================
   RENDERIZAÇÃO DINÂMICA
   ========================================= */
function initApp() {
  const grid = document.getElementById('players-grid');
  const accordion = document.getElementById('faq-accordion');

  // Renderiza Jogadores
  players.forEach(p => {
    grid.innerHTML += `
      <article class="card" role="article">
        <span style="font-size: 2rem">${p.icon}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
      </article>
    `;
  });

  // Renderiza Acordeão
  faqs.forEach((item, index) => {
    accordion.innerHTML += `
      <div class="accordion-item">
        <button class="accordion-header" onclick="toggleAccordion(this)" aria-expanded="false">
          ${item.q}
