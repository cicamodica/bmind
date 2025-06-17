function atualizarInterfaceUsuario() {
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  const dadosDoUsuario = usuarioLogado ? JSON.parse(localStorage.getItem(usuarioLogado)) : null;

  const userActionsLogado = document.getElementById("perfil-logado");
  const userActionsNaoLogado = document.getElementById("login-nao-logado");

  const itensPF = document.querySelectorAll('.item-pf');
  const itensPJ = document.querySelectorAll('.item-pj');
  const itensLogado = document.querySelectorAll('.item-logged');
  const itensNaoLogado = document.querySelectorAll('.item-nao-logado');

  const estaNaPaginaMinhaArea = window.location.pathname.includes("./Main/Main.html")

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
    if (userArea) {
  userArea.style.display = "block";
}
  } else {
    // Usuário não logado ou com dados inválidos
    userActionsNaoLogado.style.display = "flex";
    itensNaoLogado.forEach(el => el.style.display = 'block');
  }
}

function controlarBotaoMinhaArea() {
    
    const minhaAreaBotao = document.querySelector(".minha-area-botao");

    // Verifica se o botão existe na página
    if (!minhaAreaBotao) {
        console.warn("Botão 'Minha Área' não encontrado no DOM.");
        return; // Sai da função se o botão não for encontrado
    }

    // 2. Verifica o status de login
    const usuarioLogado = localStorage.getItem("usuarioLogado"); // Pega a chave do usuário logado (geralmente o email)

    // 3. Define a visibilidade do botão
    if (usuarioLogado) {
        // Se houver uma chave em "usuarioLogado", significa que o usuário está logado
        minhaAreaBotao.style.display = "block"; // 
    } else {
        // Se não houver, o usuário não está logado
        minhaAreaBotao.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", () => {
    controlarBotaoMinhaArea();
});

function redirecionarCadastro() {
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  const dadosDoUsuario = usuarioLogado ? JSON.parse(localStorage.getItem(usuarioLogado)) : null;

  if (dadosDoUsuario && dadosDoUsuario.perfil) {
    if (dadosDoUsuario.perfil === "Pessoa Física") {
      window.location.href = "./Tela de Edição/PF/Index_Tela_de_Edição-pf.html";
    } else if (dadosDoUsuario.perfil === "Pessoa Jurídica") {
      window.location.href = "./Tela de Edição/PF/Index_Tela_de_Edição-pf.html";
    } else {
      alert("Perfil de usuário desconhecido. Não é possível redirecionar.");
    }
  } else {
    alert("Usuário não logado ou dados do usuário inválidos.");
  }
}

// mobile-search.js

const mobileSearchIcon = document.querySelector('.search-mobile-icon');
const mobileSearchBar = document.getElementById('mobileSearchBar');

if (mobileSearchIcon && mobileSearchBar) {
  mobileSearchIcon.addEventListener('click', () => {
    mobileSearchBar.style.display = 
      mobileSearchBar.style.display === 'block' ? 'none' : 'block';
  });
}

function buscarMobile() {
  const termo = document.getElementById('mobileSearchInput').value.trim();
  if (termo !== "") {
    const encodedTermo = encodeURIComponent(termo);
    window.location.href = `./resultado-de-pesquisa/resultado-de-pesquisa.html?q=${encodedTermo}`;
  }
}



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
      window.location.href = `./resultado-de-pesquisa/resultado-de-pesquisa.html?q=${encodedTermo}`;
    }
  });


//Inicio funcionalidades Menu

//Início das funções de menu (ALTERAÇÃO DO EVENTLISTENER PARA ATENDER AO MENU NO MOBILE (A PARTIR DE 768PX))
document.querySelector(".menu-icon").addEventListener("click", function () {
  const navMenu = document.getElementById("dropdownMenu"); // corrigido
  const header = document.querySelector(".header");

  navMenu.classList.toggle("show");
  const menuEstaAberto = navMenu.classList.contains("show"); // corrigido

  if (window.innerWidth < 780) {
    if (menuEstaAberto) {
      header.classList.add("fixo-quando-menu-aberto");
      document.body.classList.add("menu-aberto-margin");
    } else {
      header.classList.remove("fixo-quando-menu-aberto");
      document.body.classList.remove("menu-aberto-margin");
    }
  }
});

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
  localStorage.removeItem("usuarioLogado"); // Remove o usuário logado
  localStorage.removeItem("currentUser"); // Remove o usuário atual
  window.location.href = "./login/login.html";
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

// ADICIONANDO FUNCIONALIDADE AO SUBMENU DO MENU NO MOBILE (EXCLUSIVO PARA TELA ABAIXO DE 768PX)
  if (window.innerWidth <= 768) {
    const submenuToggles = document.querySelectorAll(".has-submenu > a");

    submenuToggles.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const parent = this.parentElement;
        const submenu = parent.querySelector(".submenu");

        parent.classList.toggle("open");
        if (submenu) submenu.classList.toggle("show");
      });
    });
  };



