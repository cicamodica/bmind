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


//Recupera o usuario logado
const usuarioLogado = localStorage.getItem("currentUser");

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
    li.classList.add("item-visto"); // classe para estilizar via CSS

    // Cria o link como container da imagem e texto
    const link = document.createElement("a");
    link.href = conteudo.url;
    link.classList.add("link-visto");

    // Cria a imagem
    const img = document.createElement("img");
    img.src = conteudo.imagem;
    img.alt = conteudo.nome;

    // Cria o texto
    const texto = document.createElement("p");
    texto.textContent = conteudo.nome;

    // Monta os elementos
    link.appendChild(img);
    link.appendChild(texto);
    li.appendChild(link);
    lista.appendChild(li);
  });
}

exibirVistosRecentemente();

// Função exibir conteudo conforme a preferencias selecionadas no cadrastro//

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
