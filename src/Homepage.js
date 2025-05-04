//Inicio funcionalidades Menu
function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Fechar menu ao clicar fora
window.addEventListener("click", function (e) {
  const menu = document.getElementById("dropdownMenu");
  const icon = document.querySelector(".menu-icon");
  if (!menu.contains(e.target) && !icon.contains(e.target)) {
    menu.style.display = "none";
  }
});

// Fim funcionalidades Menu

// Funcionalidade do carrossel
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const btnPrev = document.querySelector(".nav-left");
  const btnNext = document.querySelector(".nav-right");

  let currentSlide = 0;

  function updateSlidePosition() {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  btnNext.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length; // Volta ao início
    updateSlidePosition();
  });

  btnPrev.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Vai pro final
    updateSlidePosition();
  });

  // Atualiza posição ao redimensionar (responsividade)
  window.addEventListener("resize", updateSlidePosition);
});
//Fim funcionalidade do carrossel

//Funcionalidades das abas de conteudo
// Alterna entre abas principais
const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

// Alternância de abas principais (Finanças Pessoais, Corporativas etc)
tabLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const tabId = link.getAttribute("data-tab");

    // Remove classe 'active' de todas as abas e conteúdos
    tabLinks.forEach(l => l.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    // Ativa a aba e conteúdo selecionados
    link.classList.add("active");
    document.getElementById(tabId).classList.add("active");
  });
});

// Controle dos botões de "Finanças Pessoais"
const btnPlanejamento = document.getElementById("btnPlanejamento");
const btnOrcamento = document.getElementById("btnOrcamento");
const btnControle = document.getElementById("btnControle");

const planejamentoConteudo = document.getElementById("planejamentoConteudo");
const orcamentoConteudo = document.getElementById("orcamentoDomestico");
const controleConteudo = document.getElementById("controleDividas");

function esconderTodosConteudos() {
 planejamentoConteudo.style.display = "none";
  orcamentoConteudo.style.display = "none";
  controleConteudo.style.display = "none";
}

btnPlanejamento.addEventListener("click", () => {
  esconderTodosConteudos();
  planejamentoConteudo.style.display = "block";
});

btnOrcamento.addEventListener("click", () => {
  esconderTodosConteudos();
  orcamentoConteudo.style.display = "block";
});

btnControle.addEventListener("click", () => {
  esconderTodosConteudos();
  controleConteudo.style.display = "block";
});

// Botões de Finanças Corporativas
const btnAnalise = document.getElementById("btnAnaliseBalanco");
const btnFluxo = document.getElementById("btnFluxoCaixa");
const btnCaptacao = document.getElementById("btnCaptaçãoRecursos");

const analiseConteudo = document.getElementById("analiseBalanco");
const fluxoConteudo = document.getElementById("fluxoCaixa");
const captacaoConteudo = document.getElementById("captacaoRecursos");

function esconderConteudosCorporativos() {
  analiseConteudo.style.display = "none";
  fluxoConteudo.style.display = "none";
  captacaoConteudo.style.display = "none";
}

btnAnalise.addEventListener("click", () => {
  esconderConteudosCorporativos();
  analiseConteudo.style.display = "block";
});

btnFluxo.addEventListener("click", () => {
  esconderConteudosCorporativos();
  fluxoConteudo.style.display = "block";
});

btnCaptacao.addEventListener("click", () => {
  esconderConteudosCorporativos();
  captacaoConteudo.style.display = "block";
});

//Botões de Operações Bancarias
const btnCartaoDebito = document.getElementById("btnCartaoDebito");
const btnCartaoCredito = document.getElementById("btnCartaoCredito");
const btnEmprestimo = document.getElementById("btnEmprestimo");
const btnFinanciamento = document.getElementById("btnFinanciamento");
const btnTaxasTarifas = document.getElementById("btnTaxasTarifas");

const cartaoDebito = document.getElementById("cartaoDebito");
const cartaoCredito = document.getElementById("cartaoCredito");
const emprestimos = document.getElementById("emprestimos");
const financiamento = document.getElementById("financiamento");
const taxasTarifas = document.getElementById("taxasTarifas");


function esconderConteudosOperacoesBancarias(){
  cartaoDebito.style.display = "none";
  cartaoCredito.style.display = "none";
  emprestimos.style.display = "none";
  financiamento.style.display ="none";
  taxasTarifas.style.display ="none";
}

btnCartaoDebito.addEventListener("click", ( )=>{
  esconderConteudosOperacoesBancarias();
  cartaoDebito.style.display = "block";
});

btnCartaoCredito.addEventListener("click", ( )=>{
  esconderConteudosOperacoesBancarias();
  cartaoCredito.style.display = "block";
});

btnEmprestimo.addEventListener("click", ( )=>{
  esconderConteudosOperacoesBancarias();
  emprestimos.style.display = "block";
});

btnFinanciamento.addEventListener("click", ( )=>{
  esconderConteudosOperacoesBancarias();
  financiamento.style.display = "block";
});

btnTaxasTarifas.addEventListener("click", ( )=>{
  esconderConteudosOperacoesBancarias();
  taxasTarifas.style.display = "block";
});

//Botoes Controle Investimentos
const btnRendaFixa = document.getElementById("btnRendaFixa");
const btnRendaVariavel = document.getElementById("btnRendaVariavel");
const btnFundoInvestimento = document.getElementById("btnFundoInvestimento");

const rendaFixa = document.getElementById("rendaFixa");
const rendaVariavel = document.getElementById("rendaVariavel");
const fundoInvestimentos = document.getElementById("fundoInvestimentos");


function esconderConteudosInvestimentos(){
  rendaFixa.style.display = "none";
  rendaVariavel.style.display = "none";
  fundoInvestimentos.style.display = "none";
}

btnRendaFixa.addEventListener("click", ( )=>{
  esconderConteudosInvestimentos();
  rendaFixa.style.display = "block";
});

btnRendaVariavel.addEventListener("click", ( )=>{
  esconderConteudosInvestimentos();
  rendaVariavel.style.display = "block";
});

btnFundoInvestimento.addEventListener("click", ( )=>{
  esconderConteudosInvestimentos();
  fundoInvestimentos.style.display = "block";
});

// Ativa a primeira aba e seus conteúdos ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  // Ativa a aba principal "Finanças Pessoais"
  tabLinks[0].click();

  // Ativa o primeiro conteúdo de cada grupo
  btnPlanejamento.click();     // Finanças Pessoais
  btnAnalise.click();          // Finanças Corporativas
  btnCartaoDebito.click();     // Operações Bancárias
  btnRendaFixa.click();        // Investimentos
});

//Fim funcionalidades das abas de conteudo



