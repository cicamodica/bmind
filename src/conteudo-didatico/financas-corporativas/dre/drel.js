function botaoVoltar() {

  const botaoVoltar = document.getElementById("botao-voltar");
  if (botaoVoltar) {
    botaoVoltar.addEventListener("click", () => {
      history.back();
    });
  }
}

function redirecionarCadastro() {
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  const dadosDoUsuario = usuarioLogado ? JSON.parse(localStorage.getItem(usuarioLogado)) : null;

  if (dadosDoUsuario && dadosDoUsuario.perfil) {
    if (dadosDoUsuario.perfil === "Pessoa Física") {
      window.location.href = "/src/Tela de Edição/PF/Index_Tela_de_Edição-pf.html";
    } else if (dadosDoUsuario.perfil === "Pessoa Jurídica") {
      window.location.href = "/src/Tela de Edição/PJ/Index_Tela_de_Edição-pj.html";
    } else {
      alert("Perfil de usuário desconhecido. Não é possível redirecionar.");
    }
  } else {
    alert("Usuário não logado ou dados do usuário inválidos.");
  }
}

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
//Funcionalidade da pesquisa (barra de pesquisa) > lê na URL o que foi pesquisado e procura nos conteúdos
document
  .getElementById("search-button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // evita o redirecionamento padrão
    const termo = document.getElementById("search-bar").value.trim();
    if (termo !== "") {
      const encodedTermo = encodeURIComponent(termo);
      window.location.href = `/src/resultado-de-pesquisa/resultado-de-pesquisa.html?q=${encodedTermo}`;
    }
  });

document.querySelector(".menu-icon").addEventListener("click", function () {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.classList.toggle("hidden");
});

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


function registrarConteudoVisto(nome, url, imagem) {
  const emailUsuario = localStorage.getItem("usuarioLogado");
  if (!emailUsuario) return;

  const dadosUsuario = JSON.parse(localStorage.getItem(emailUsuario)) || {};

  if (!dadosUsuario.vistosRecentemente) {
    dadosUsuario.vistosRecentemente = [];
  }

  // Remove se já existir (baseado na URL para garantir que não repita)
  dadosUsuario.vistosRecentemente = dadosUsuario.vistosRecentemente.filter(item => item.url !== url);

  // Adiciona no topo
  const conteudo = { nome, url, imagem };
  dadosUsuario.vistosRecentemente.unshift(conteudo);

  // Mantém só os 5 mais recentes
  if (dadosUsuario.vistosRecentemente.length > 5) {
    dadosUsuario.vistosRecentemente = dadosUsuario.vistosRecentemente.slice(0, 5);
  }

  // Salva de volta no localStorage
  localStorage.setItem(emailUsuario, JSON.stringify(dadosUsuario));
}
registrarConteudoVisto(
  "D.R.E.",
  "/src/conteudo-didatico/financas-corporativas/dre/dre.html",
  "/src/imagens/DRE.jpg"
);

// Função para delogar o usuário
function sair() {
  localStorage.removeItem("usuarioLogado");
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
document.addEventListener("DOMContentLoaded", function () {

  const mobileSearchTrigger = document.getElementById('mobileSearchTrigger');
  const mobileSearchBar = document.getElementById('mobileSearchBar');
  const mobileSearchInput = document.getElementById('mobileSearchInput');

  if (mobileSearchTrigger && mobileSearchBar){
   
    mobileSearchTrigger.addEventListener('click', function () {
      mobileSearchBar.classList.toggle('active');
     
      if (mobileSearchBar.classList.contains('active')) {
        mobileSearchInput.focus();
      } else {
        console.warn("barra de pesquisa não está ativa");
      }

      
    });
   
  }
});
