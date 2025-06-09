document.addEventListener("DOMContentLoaded", () => {
  const usuarioLogado = JSON.parse(localStorage.getItem("currentUser"));

  // Redireciona para login se não estiver logado
  if (!usuarioLogado) {
    window.location.href = "/src/login/login.html";
    return;
  }

  const perfil = usuarioLogado.perfil;
  const spanPerfil = document.getElementById("perfil");
  if (spanPerfil) spanPerfil.textContent = perfil;

  // Função de exibição condicional
  function configurarMenuPorPerfil(perfil) {
    // Itens específicos de PF e PJ
    const itensPF = document.querySelectorAll(".item-pf");
    const itensPJ = document.querySelectorAll(".item-pj");

    if (perfil === "Pessoa Física") {
      // Esconde conteúdos PJ
      itensPJ.forEach(el => el.style.display = "none");
      // Mostra conteúdos PF
      itensPF.forEach(el => el.style.display = "block");
    } else if (perfil === "Pessoa Jurídica") {
      // Esconde conteúdos PF
      itensPF.forEach(el => el.style.display = "none");
      // Mostra conteúdos PJ
      itensPJ.forEach(el => el.style.display = "block");
    }
  }

  configurarMenuPorPerfil(perfil);
});

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

function redirecionarCadastro() {
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  const dadosDoUsuario = usuarioLogado ? JSON.parse(localStorage.getItem(usuarioLogado)) : null;

  if (dadosDoUsuario && dadosDoUsuario.perfil) {
    if (dadosDoUsuario.perfil === "Pessoa Física") {
      window.location.href = "/src/Tela de Edição/PF/Index_Tela_de_Edição-pf.html";
    } else if (dadosDoUsuario.perfil === "Pessoa Jurídica") {
      window.location.href = "/src/Tela de Edição/PF/Index_Tela_de_Edição-pf.html";
    } else {
      alert("Perfil de usuário desconhecido. Não é possível redirecionar.");
    }
  } else {
    alert("Usuário não logado ou dados do usuário inválidos.");
  }
}
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

   //INÍCIO FUNCIONALIDADES DA BARRA DE PESQUISA MOBILE

  //Funcionalidade de esconder ícone em telas maiores
 const mobileSearchIcon = document.querySelector('.search-mobile-icon');
  const mobileSearchBar = document.getElementById('mobileSearchBar');

mobileSearchIcon.addEventListener('click', () => {
  // alterna entre mostrar e esconder
  mobileSearchBar.style.display =
    mobileSearchBar.style.display === 'block' ? 'none' : 'block';
});

// Garante que a barra mobile desapareça ao aumentar a largura da tela
window.addEventListener('resize', () => {
  if (window.innerWidth >= 861) {
    mobileSearchBar.style.display = 'none';
  }
});

 window.buscarMobile = function () {
  const termo = document.getElementById('mobileSearchInput').value.trim();
  if (termo !== "") {
    const encodedTermo = encodeURIComponent(termo);
    window.location.href = `/src/resultado-de-pesquisa/resultado-de-pesquisa.html?q=${encodedTermo}`;
  }
};

//FIM DAS FUNCIONALIDADES DA BARRA DE PESQUISA MOBILE

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

// INICIO (FUNCIONALIDA DAS ESTRELAS)

// Adiciona evento de clique a cada estrela
const stars = document.querySelectorAll(".star"); // Seleciona todas as estrelas
let selectedRating = 0;

// Adiciona evento de clique a cada estrela
stars.forEach((star) => {
  star.addEventListener("click", () => {
    // Adiciona evento de clique
    selectedRating = star.getAttribute("data-value"); // Obtém o valor da estrela clicada
    updateStars(selectedRating); // Atualiza as estrelas
  });
});

// Adiciona evento de mouseover a cada estrela por ex. Se clicar de volta na estrela 3, as estrelas 1, 2 e 3 ficam douradas e as outras cinzas
function updateStars(rating) {
  stars.forEach((star) => {
    if (star.getAttribute("data-value") <= rating) {
      // Se o valor da estrela for menor ou igual à classificação selecionada
      star.style.color = "gold"; // Altera a cor da estrela para dourada
    } else {
      star.style.color = "#ccc"; // Altera a cor da estrela para cinza
    }
  });
}

// INICIO BOTÕES E FUNÇÕES DO FEEDBACK
// Adiciona evento de clique ao botão de enviar

document.querySelector(".submit").addEventListener("click", function () {
  const feedback = document.getElementById("feedbackText").value.trim();

  if (feedback !== "") {
    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

    feedbacks.push(feedback); // Adiciona o novo feedback lista

    // Salva no localStorage
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

    // Limpa o campo
    document.getElementById("feedbackText").value = "";

    // Mostra a mensagem visual
    const mensagem = document.getElementById("mensagemSucesso");
    mensagem.textContent = "Feedback salvo com sucesso!";
    mensagem.style.display = "block";

    // Oculta após 3 segundos
    setTimeout(() => {
      mensagem.style.display = "none";
    }, 3000);
  } else {
    const mensagem = document.getElementById("mensagemErro");
    mensagem.textContent = "Por favor, insira um feedback.";
    mensagem.style.display = "block";
    setTimeout(() => {
      mensagem.style.display = "none";
    }, 3000);
  }
});
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
