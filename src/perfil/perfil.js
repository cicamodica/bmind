// Executa quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  const usuarioLogado = JSON.parse(localStorage.getItem("currentUser"));

  // Redireciona se não estiver logado
  if (!usuarioLogado) {
    window.location.href = "/src/login/login.html";
    return;
  }

  const perfil = usuarioLogado.perfil;
  const spanPerfil = document.getElementById("perfil");
  if (spanPerfil) spanPerfil.value = perfil;

  console.log(usuarioLogado.perfil);

  // Configura exibição condicional de menus
  function configurarMenuPorPerfil(perfil) {
    const itensPF = document.querySelectorAll(".item-pf");
    const itensPJ = document.querySelectorAll(".item-pj");

    if (perfil === "Pessoa Física") {
      itensPJ.forEach(el => el.style.display = "none");
      itensPF.forEach(el => el.style.display = "block");
    } else if (perfil === "Pessoa Jurídica") {
      itensPF.forEach(el => el.style.display = "none");
      itensPJ.forEach(el => el.style.display = "block");
    }
  }

  //IMPEDIR NÚMEROS NO CAMPO NOME
document.getElementById("nome").addEventListener("input", function (e) {
  this.value = this.value.replace(/[0-9]/g, ""); // remove números
});


//IMPEDIR LETRAS O CAMPO CONTATO
document.getElementById("contato").addEventListener("input", function (e) {
  this.value = this.value.replace(/[^0-9]/g, ""); // remove tudo que não for número
});

//RESTRINGINDO IDADE PARA ATÉ 16 ANOS
const inputData = document.getElementById("data");
if (inputData) {
  const hoje = new Date();
  hoje.setFullYear(hoje.getFullYear() - 16); // Subtrai 16 anos
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");

  inputData.max = `${ano}-${mes}-${dia}`;
}

const campoData = document.getElementById("data");
const dataFormatadaSpan = document.getElementById("data-formatada");

campoData.addEventListener("input", () => {
  const valor = campoData.value; // formato YYYY-MM-DD
  if (valor) {
    const [ano, mes, dia] = valor.split("-");
    dataFormatadaSpan.textContent = `${dia}/${mes}/${ano}`;
  } else {
    dataFormatadaSpan.textContent = "";
  }
});

  configurarMenuPorPerfil(perfil);

  // Botão sair
  const botaoSair = document.getElementById("botao-sair");
  if (botaoSair) {
    botaoSair.addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.removeItem("usuarioLogado");
      window.location.href = "/src/login/login.html";
    });
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

  // Função do menu mobile
  document.querySelector(".menu-icon").addEventListener("click", function () {
    const navMenu = document.getElementById("dropdownMenu");
    const header = document.querySelector(".header");

    navMenu.classList.toggle("show");
    const menuEstaAberto = navMenu.classList.contains("show");

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

  // Mostrar submenu no mobile
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
  }

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

  // Redirecionamento para tela de edição
  window.redirecionarCadastro = function () {
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    const dadosDoUsuario = usuarioLogado ? JSON.parse(localStorage.getItem(usuarioLogado)) : null;

    if (dadosDoUsuario && dadosDoUsuario.perfil) {
      if (dadosDoUsuario.perfil === "Pessoa Física") {
        window.location.href = "/src/Tela de Edição/PF/Index_Tela_de_Edição-pf.html";
      } else if (dadosDoUsuario.perfil === "Pessoa Jurídica") {
        window.location.href = "/src/Tela de Edição/PF/Index_Tela_de_Edição-pf.html";
      } else {
        alert("Perfil de usuário desconhecido.");
      }
    } else {
      alert("Usuário não logado ou dados inválidos.");
    }
  };
});

// Carregamento inicial de dados após DOM pronto
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

    const previewImg = document.getElementById("preview-img");
    if (dadosUsuario.imagemBase64?.startsWith("data:image")) {
      previewImg.src = dadosUsuario.imagemBase64;
    }
  }
};

// Mostrar preview da imagem selecionada
document.getElementById("imagem").addEventListener("change", function () {
  const file = this.files[0];
  const nomeArquivo = file ? file.name : "Nenhum arquivo selecionado";
  document.getElementById("nome-arquivo").textContent = nomeArquivo;

  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById("preview-img").src = e.target.result;
  };
  reader.readAsDataURL(file);
});

// Salvar dados no localStorage
document.getElementById("perfil-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const usuarioLogado = JSON.parse(localStorage.getItem("currentUser"));
  if (!usuarioLogado) return;

  const emailUsuario = usuarioLogado.email;
  const dadosUsuario = JSON.parse(localStorage.getItem(emailUsuario)) || {};

  dadosUsuario.nome = document.getElementById("nome").value;
  dadosUsuario.telefoneContato = document.getElementById("contato").value;
  dadosUsuario.dataNascimento = document.getElementById("data").value;
  dadosUsuario.perfil = document.getElementById("perfil").value;

  const previewSrc = document.getElementById("preview-img").src;
  if (previewSrc.startsWith("data:image")) {
    dadosUsuario.imagemBase64 = previewSrc;
  }

  localStorage.setItem(emailUsuario, JSON.stringify(dadosUsuario));

  alert("Dados atualizados com sucesso!");
  window.location.href = "/src/index.html";
});

// Botão cancelar
document.getElementById("cancelar").addEventListener("click", function () {
  window.location.href = "/src/index.html";
});


