//Recupera o usuario logado
const usuarioLogado = JSON.parse(localStorage.getItem("currentUser"));

// Redireciona para o login caso o usuario não esteja logado
if (usuarioLogado == null) {
  window.location.href = `/src/login/login.html`;
}

console.log(usuarioLogado.perfil);
const spanPerfil = document.getElementById("perfil");
spanPerfil.textContent = usuarioLogado.perfil;

// Escondendo um elemento caso seja de outro perfil
if (usuarioLogado.perfil == "Pessoa Jurídica") {
  const liFinancasPessoais = document.getElementById("financas-pessoais");
  liFinancasPessoais.style.display = "none";
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

//Início das funções de menu
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

// Aguarda o carregamento completo da página
window.addEventListener("DOMContentLoaded", function () {
  const boasVindas = document.getElementById("boas-vindas");
  const emailUsuario = localStorage.getItem("usuarioLogado");

  if (emailUsuario) {
    const dadosUsuario = JSON.parse(localStorage.getItem(emailUsuario));
    if (dadosUsuario && dadosUsuario.nome) {
      boasVindas.textContent = `Olá, ${dadosUsuario.nome}!`;
    } else {
      boasVindas.textContent = "Olá!";
    }
  } else {
    // Se ninguém estiver logado, mostra mensagem genérica ou redireciona
    boasVindas.textContent = "Bem-vindo!";
    // Opcional: redirecionar para a página de login
    window.location.href = "/src/login/login.html";
  }
});

// Carregar os dados no início
window.onload = () => {
  const usuarioLogado = JSON.parse(localStorage.getItem("currentUser"));
  if (!usuarioLogado) return;

  const emailUsuario = usuarioLogado.email;
  const dadosUsuario = JSON.parse(localStorage.getItem(emailUsuario));

  if (dadosUsuario) {
    document.getElementById("nome").value = dadosUsuario.nome || "";
    document.getElementById("contato").value = dadosUsuario.telefoneContato || "";
    document.getElementById("data").value = dadosUsuario.dataNascimento || "";
    document.getElementById("perfil").value = dadosUsuario.perfil || "";

    // imagem
    const previewImg = document.getElementById("preview-img");
    if (dadosUsuario.imagemBase64) {
      previewImg.src = dadosUsuario.imagemBase64;
    }
  }
};

  //Funcionalidade de esconder ícone em telas maiores
 const mobileSearchIcon = document.querySelector('.search-mobile-icon');
  const mobileSearchBar = document.getElementById('mobileSearchBar');

  mobileSearchIcon.addEventListener('click', () => {
    // alterna entre mostrar e esconder
    mobileSearchBar.style.display =
      mobileSearchBar.style.display === 'block' ? 'none' : 'block';
  });

 function buscarMobile() {
  const termo = document.getElementById('mobileSearchInput').value.trim();
  if (termo !== "") {
    const encodedTermo = encodeURIComponent(termo);
    window.location.href = `/src/resultado-de-pesquisa/resultado-de-pesquisa.html?q=${encodedTermo}`;
  }
}

// Selecionar imagem e mostrar preview
document.getElementById("imagem").addEventListener("change", function () {
  const nomeArquivo = this.files[0] ? this.files[0].name : "Nenhum arquivo selecionado";
  document.getElementById("nome-arquivo").textContent = nomeArquivo;

  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById("preview-img").src = e.target.result;
  };
  reader.readAsDataURL(this.files[0]);
});

// Botão de salvar (salva tudo no localStorage)
document.getElementById("perfil-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const usuarioLogado = JSON.parse(localStorage.getItem("currentUser"));
  if (!usuarioLogado) return;

  const emailUsuario = usuarioLogado.email;
  const dadosUsuario = JSON.parse(localStorage.getItem(emailUsuario)) || {};

  // Atualiza os campos
  dadosUsuario.nome = document.getElementById("nome").value;
  dadosUsuario.sobrenome = document.getElementById("contato").value;
  dadosUsuario.dataNascimento = document.getElementById("data").value;
  dadosUsuario.perfil = document.getElementById("perfil").value;
  dadosUsuario.imagemBase64 = document.getElementById("preview-img").src;

  // Salva novamente com a mesma chave (email)
  localStorage.setItem(emailUsuario, JSON.stringify(dadosUsuario));

  alert("Dados atualizados com sucesso!");

   // Redireciona para a homepage
  window.location.href = "/src/Homepage.html";
});

  //Botão de cancelar
  document.getElementById("cancelar").addEventListener("click", function () {
  window.location.href = "/src/Homepage.html";
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