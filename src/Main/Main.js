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
//Recupera o usuario logado
const usuarioLogado = localStorage.getItem('currentUser');

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
    // window.location.href = "/src/login/login.html";
  }
});


// Função para registrar um conteúdo como recentemente visto
function registrarConteudoVisto(nomeConteudo, url, imagem) {
  let vistos = JSON.parse(localStorage.getItem("vistosRecentemente")) || [];

  // Remove se já existe (com base no nome)
  vistos = vistos.filter((item) => item.nome !== nomeConteudo);

  // Adiciona ao topo da lista
  vistos.unshift({ nome: nomeConteudo, url: url, imagem: imagem });

  // Mantém só os 3 mais recentes
  if (vistos.length > 3) {
    vistos = vistos.slice(0, 3);
  }

  localStorage.setItem("vistosRecentemente", JSON.stringify(vistos));
}


// Função para exibir os conteúdos vistos recentemente
function exibirVistosRecentemente() {
  const lista = document.getElementById("lista-vistos-recentemente");
  const vistos = JSON.parse(localStorage.getItem("vistosRecentemente")) || [];

  lista.innerHTML = "";

  vistos.forEach((conteudo) => {
    const li = document.createElement("li");

    // Cria a imagem
    const img = document.createElement("img");
    img.src = conteudo.imagem;
    img.alt = conteudo.nome;
    img.style.width = "60px"; // ou o tamanho desejado
    img.style.marginRight = "10px";

    // Cria o link
    const link = document.createElement("a");
    link.href = conteudo.url;
    link.textContent = conteudo.nome;
    link.style.textDecoration = "none";
    link.style.fontWeight = "bold";

    li.appendChild(img);
    li.appendChild(link);
    lista.appendChild(li);
  });
}


exibirVistosRecentemente();
