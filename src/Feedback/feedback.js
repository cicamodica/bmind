//Funcionalidade da pesquisa (barra de pesquisa) > lê na URL o que foi pesquisado e procura nos conteúdos
document
  .getElementById("search-button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // evita o redirecionamento padrão
    const termo = document.getElementById("search-bar").value.trim();
    if (termo !== "") {
      const encodedTermo = encodeURIComponent(termo);
      window.location.href = `/src/resultado-de-pesquisa/logado/resultado-de-pesquisa.html?q=${encodedTermo}`;
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
