// Recupera o identificador do usuário logado (e-mail, por exemplo)
const emailUsuario = localStorage.getItem("usuarioLogado");

// Aguarda o carregamento completo da página
window.addEventListener("DOMContentLoaded", function () {
  const boasVindas = document.getElementById("boas-vindas");

  if (emailUsuario) {
    const dadosUsuario = JSON.parse(localStorage.getItem(emailUsuario));
    if (dadosUsuario && dadosUsuario.nome) {
      boasVindas.textContent = `Olá, ${dadosUsuario.nome}!`;
    } else {
      boasVindas.textContent = "Olá!";
    }
  } else {
    // Se ninguém estiver logado, mostra mensagem genérica
    boasVindas.textContent = "Bem-vindo!";
    // Opcional: redirecionar para a página de login
    // window.location.href = "/src/login/login.html";
  }
});

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
      window.location.href = `/src/resultado-de-pesquisa/logado/logado-pf/resultado-de-pesquisa-pf.html?q=${encodedTermo}`;
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
window.location.href = "/src/login/login.html"; // ou qualquer outra página que queira direcionar

  document.addEventListener("DOMContentLoaded",() => {
    const botaoSair = document.getElementById("botao-sair");

    if (botaoSair) {
      botaoSair.addEventListener("click",(e) => {
        e.preventDefault();
        sair() // Evita o redirecionamento padrão
      })
    }
  });
}
  


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

// Função para exibir os conteúdos vistos recentemente
function exibirVistosRecentemente() {
  const lista = document.getElementById("lista-vistos-recentemente");
  if (!lista) return;  // Evita erro se o elemento não existir na página

  const vistos = JSON.parse(localStorage.getItem("vistosRecentemente")) || [];
  lista.innerHTML = "";

  vistos.forEach(conteudo => {
    const li = document.createElement("li");
    li.classList.add("item-visto");

    const link = document.createElement("a");
    link.href = conteudo.url;
    link.classList.add("link-visto");

    const img = document.createElement("img");
    img.src = conteudo.imagem;
    img.alt = conteudo.nome;

    const texto = document.createElement("p");
    texto.textContent = conteudo.nome;

    link.appendChild(img);
    link.appendChild(texto);
    li.appendChild(link);
    lista.appendChild(li);
  });
}

// Executa sempre para exibir
exibirVistosRecentemente();


// Função exibir conteuudo conforme a preferencias selecionadas no cadrastro//

function exibirConteudoRecomendados() {
  //Recuperação dos dados do usuario//
  const dados = JSON.parse(localStorage.getItem("currentUser"));

  if (!dados) {
    console.error("Usuário não encontrado.");
    return;
  }

    const { perfil, preferenciaDeConteudos} = dados;
    const container = document.getElementById("lista-conteudos-recomendados");
    
    if (!container) {
      console.error("Elemento conteudo-recomendados não encontrado.");
      return;
    }

  if (!preferenciaDeConteudos || preferenciaDeConteudos.length === 0) {
    container.innerHTML = "<p>Não há conteúdos recomendados para você.</p>";
    return;
  }

  // Conteúdos estáticos para recomendações
  const conteudos = {
    "Pessoa Física": {
      "Finanças Pessoais": "Aprenda organizar seu orçamento",
      Investimentos: "Descubra como investir seu dinheiro",
      "Operações Bancárias": "Entenda como funcionam as operações bancárias",
    },
    "Pessoa Jurídica": {
      "Finanças Corporativas": "Aprenda a gerenciar as finanças da sua empresa",
      Investimentos: "Descubra como investir o capital da sua empresa",
      "Operações Bancárias":
        "Entenda como funcionam as operações bancárias para empresas",
    },
  };

  //Percorre as preferências do usuário e exibe os conteúdos recomendados//

  preferenciaDeConteudos.forEach((preferencia) => {
    const descricao =
      conteudos[perfil]?.[preferencia] || "Conteudo não disponível";
    const bloco = `
        <div class="card-conteudo">
          <h3>${preferencia}</h3>
          <p>${descricao}</p>
          </div>
          `;
    container.innerHTML += bloco;
  });
}
// Chama a função para exibir os conteúdos recomendados
exibirConteudoRecomendados();
