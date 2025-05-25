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

// Executa quando a página terminar de carregar
document.addEventListener('DOMContentLoaded', atualizarInterfaceUsuario);
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


document.querySelector(".menu-icon").addEventListener("click", function () {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.classList.toggle("hidden");
});

function toggleMenu() {
  // Função para alternar o menu dropdown
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

registrarConteudoVisto(
  "Fundo de Investimentos",
  "/src/conteudo-didatico/investimentos-pessoais/fundo-de-investimentos-pf/fundo-de-investimentos-pf.html",
  "/src/imagens/FundoInvestimentosPF.jpg"
);
// Função para delogar o usuário
function sair() {

 // Limpa os dados (ajuste conforme sua lógica de autenticação)
  localStorage.removeItem("usuarioLogado");
  localStorage.removeItem("currentUser");

  window.location.href = "/src/login/login.html"; // ou qualquer outra página que queira direcionar
}

 //Registra o evento de clique no botão "sair"
  document.addEventListener("DOMContentLoaded",() => {
    const botaoSair = document.getElementById("botao-sair");

    if (botaoSair) {
      botaoSair.addEventListener("click",(e) => {
        e.preventDefault();
        sair() // Evita o redirecionamento padrão
      });
    }
  });


