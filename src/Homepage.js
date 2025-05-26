function atualizarInterfaceUsuario() {
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  const dadosDoUsuario = usuarioLogado ? JSON.parse(localStorage.getItem(usuarioLogado)) : null;

  const userActionsLogado = document.getElementById("perfil-logado");
  const userActionsNaoLogado = document.getElementById("login-nao-logado");

  const itensPF = document.querySelectorAll('.item-pf');
  const itensPJ = document.querySelectorAll('.item-pj');
  const itensLogado = document.querySelectorAll('.item-logged');
  const itensNaoLogado = document.querySelectorAll('.item-nao-logado');

  const estaNaPaginaMinhaArea = window.location.pathname.includes("/src/Main/Main.html")

  // Esconde tudo inicialmente
  userActionsLogado.style.display = "none";
  userActionsNaoLogado.style.display = "none";
  itensPF.forEach(el => el.style.display = 'none');
  itensPJ.forEach(el => el.style.display = 'none');
  itensLogado.forEach(el => el.style.display = 'none');
  itensNaoLogado.forEach(el => el.style.display = 'none');

  if (dadosDoUsuario && (dadosDoUsuario.perfil === "Pessoa Física" || dadosDoUsuario.perfil === "Pessoa Jurídica")) {

    
    // Só mostra o botão "perfil-logado" se não estiver na própria página de "Minha Área"
    if (!estaNaPaginaMinhaArea && userActionsLogado) {
      userActionsLogado.style.display = "flex";
    }

    // Exibe itens de logado
    itensLogado.forEach(el => el.style.display = 'block');

    if (dadosDoUsuario.perfil === "Pessoa Física") {
      itensPF.forEach(el => el.style.display = 'block');
    } else if (dadosDoUsuario.perfil === "Pessoa Jurídica") {
      itensPJ.forEach(el => el.style.display = 'block');
    }
  } else {
    // Usuário não logado ou com dados inválidos
    userActionsNaoLogado.style.display = "flex";
    itensNaoLogado.forEach(el => el.style.display = 'block');
  }
}

// verifica  se usuario esta logado para apresentar botao de minha area 

document.addEventListener('DOMContentLoaded', () => {
  const botaoMinhaArea = document.querySelector(".minha-area-botao");
  const usuarioLogado = localStorage.getItem("usuarioLogado");

  if (botaoMinhaArea) {
    if (usuarioLogado) {
      botaoMinhaArea.style.display = "inline-block"; 
    } else {
      botaoMinhaArea.style.display = "none";
    }
  }
});






// Executa quando a página terminar de carregar
document.addEventListener('DOMContentLoaded', atualizarInterfaceUsuario);

/// Função para registrar um conteúdo como recentemente visto
function registrarConteudoVisto(nome, url, imagem) {
  let vistos = JSON.parse(localStorage.getItem("vistosRecentemente")) || [];

  // Remove se já existir (baseado na URL para garantir unicidade)
  vistos = vistos.filter(item => item.url !== url);

  // Adiciona no topo da lista
  const conteudo = { nome, url, imagem };
  vistos.unshift(conteudo);

  // Mantém apenas os 3 mais recentes
  if (vistos.length > 3) {
    vistos = vistos.slice(0, 3);
  }

  localStorage.setItem("vistosRecentemente", JSON.stringify(vistos));
}



    
//Funcionalidade da pesquisa (barra de pesquisa) > lê na URL o que foi pesquisado e procura nos conteúdos
document
  .getElementById("search-button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // evita o redirecionamento padrão
    const termo = document.getElementById("search-bar").value.trim();
    if (termo !== "") {
      const encodedTermo = encodeURIComponent(termo);
      window.location.href = `/src/resultado-de-pesquisa/nao-logado/resultado-de-pesquisa-nl.html?q=${encodedTermo}`;
    }
  });

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

// Função para delogar o usuário
function sair() {
  localStorage.removeItem("usuarioLogado");
  localStorage.removeItem("currentUser");
  window.location.href = "/src/login/login.html";
}

// 2. Depois, adiciona o evento
document.addEventListener("DOMContentLoaded", () => {
  const botaoSair = document.getElementById("botao-sair");

  if (botaoSair) {
    botaoSair.addEventListener("click", function (e) {
      e.preventDefault();
      sair();
    });
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
tabLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const tabId = link.getAttribute("data-tab");

    // Remove classe 'active' de todas as abas e conteúdos
    tabLinks.forEach((l) => l.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

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

function esconderConteudosOperacoesBancarias() {
  cartaoDebito.style.display = "none";
  cartaoCredito.style.display = "none";
  emprestimos.style.display = "none";
  financiamento.style.display = "none";
  taxasTarifas.style.display = "none";
}

btnCartaoDebito.addEventListener("click", () => {
  esconderConteudosOperacoesBancarias();
  cartaoDebito.style.display = "block";
});

btnCartaoCredito.addEventListener("click", () => {
  esconderConteudosOperacoesBancarias();
  cartaoCredito.style.display = "block";
});

btnEmprestimo.addEventListener("click", () => {
  esconderConteudosOperacoesBancarias();
  emprestimos.style.display = "block";
});

btnFinanciamento.addEventListener("click", () => {
  esconderConteudosOperacoesBancarias();
  financiamento.style.display = "block";
});

btnTaxasTarifas.addEventListener("click", () => {
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

function esconderConteudosInvestimentos() {
  rendaFixa.style.display = "none";
  rendaVariavel.style.display = "none";
  fundoInvestimentos.style.display = "none";
}

btnRendaFixa.addEventListener("click", () => {
  esconderConteudosInvestimentos();
  rendaFixa.style.display = "block";
});

btnRendaVariavel.addEventListener("click", () => {
  esconderConteudosInvestimentos();
  rendaVariavel.style.display = "block";
});

btnFundoInvestimento.addEventListener("click", () => {
  esconderConteudosInvestimentos();
  fundoInvestimentos.style.display = "block";
});

// Ativa a primeira aba e seus conteúdos ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  // Ativa a aba principal "Finanças Pessoais"
  tabLinks[0].click();

  // Ativa o primeiro conteúdo de cada grupo
  btnPlanejamento.click(); // Finanças Pessoais
  btnAnalise.click(); // Finanças Corporativas
  btnCartaoDebito.click(); // Operações Bancárias
  btnRendaFixa.click(); // Investimentos
});

//Fim funcionalidades das abas de conteudo
