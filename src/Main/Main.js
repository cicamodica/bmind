/// Recupera o identificador do usuário logado (e-mail, por exemplo)
const emailUsuario = localStorage.getItem("usuarioLogado");

document.addEventListener('DOMContentLoaded', () => {
  // --- Boas-Vindas ---
  const boasVindas = document.getElementById("boas-vindas");

  if (emailUsuario) {
    const dadosUsuario = JSON.parse(localStorage.getItem(emailUsuario));
    if (dadosUsuario && dadosUsuario.nome) {
      boasVindas.textContent = `Olá, ${dadosUsuario.nome}!`;
    } else {
      boasVindas.textContent = "Olá!";
    }
  } else {
    boasVindas.textContent = "Bem-vindo!";
  }
});

const mobileSearchIcon = document.querySelector('.search-mobile-icon');
const mobileSearchBar = document.getElementById('mobileSearchBar');

if (mobileSearchIcon && mobileSearchBar) {
  mobileSearchIcon.addEventListener('click', () => {
    mobileSearchBar.style.display =
      mobileSearchBar.style.display === 'block' ? 'none' : 'block';
  });
}
// --- Função para busca mobile ---
function buscarMobile() {
  const termo = document.getElementById('mobileSearchInput').value.trim();
  if (termo !== "") {
    const encodedTermo = encodeURIComponent(termo);
    window.location.href = `./resultado-de-pesquisa/resultado-de-pesquisa.html?q=${encodedTermo}`;
  }
}

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

function atualizarInterfaceUsuario() {
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  const dadosDoUsuario = usuarioLogado ?
    JSON.parse(localStorage.getItem(usuarioLogado)) : null;

  const userActionsLogado = document.getElementById("perfil-logado");
  const userActionsNaoLogado = document.getElementById("login-nao-logado");

  const itensPF = document.querySelectorAll('.item-pf');
  const itensPJ = document.querySelectorAll('.item-pj');
  const itensLogado = document.querySelectorAll('.item-logged');
  const itensNaoLogado = document.querySelectorAll('.item-nao-logado');

  // Esconde tudo inicialmente
  userActionsLogado.style.display = "none";
  userActionsNaoLogado.style.display = "none";

  itensPF.forEach(el => el.style.display = 'none');
  itensPJ.forEach(el => el.style.display = 'none');
  itensLogado.forEach(el =>
    el.style.display = 'none');
  itensNaoLogado.forEach(el =>
    el.style.display = 'none');

  if (dadosDoUsuario && (dadosDoUsuario.perfil === "Pessoa Física" || dadosDoUsuario.perfil === "Pessoa Jurídica")) {
    userActionsLogado.style.display = "flex";
    itensLogado.forEach(el =>
      el.style.display = 'block');

    if (dadosDoUsuario.perfil === "Pessoa Física") {
      itensPF.forEach(el => el.style.display = 'block');
    } else if (dadosDoUsuario.perfil === "Pessoa Jurídica") {
      itensPJ.forEach(el => el.style.display = 'block');
    }
  } else {
    userActionsNaoLogado.style.display = "flex";
    itensNaoLogado.forEach(el =>
      el.style.display = 'block');
  }
}

document.addEventListener('DOMContentLoaded', atualizarInterfaceUsuario);

// Funcionalidade da pesquisa desktop
document.getElementById("search-button").addEventListener("click", function (event) {
  event.preventDefault();
  const termo =
    document.getElementById("search-bar").value.trim();
  if (termo !== "") {
    const encodedTermo = encodeURIComponent(termo);
    window.location.href = `./resultado-de-pesquisa/resultado-de-pesquisa.html?q=${encodedTermo}`;
  }
});

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

// Funcionalidades Menu
function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

window.addEventListener("click", function (e) {
  const menu = document.getElementById("dropdownMenu");
  const icon = document.querySelector(".menu-icon");
  if (!menu.contains(e.target) &&
    !icon.contains(e.target)) {
    menu.style.display = "none";
  }
});

// Função para delogar o usuário
function sair() {
  localStorage.removeItem("usuarioLogado");
  localStorage.removeItem("currentUser"); // Ensure this is also removed for consistency if used elsewhere
  window.location.href = "./login/login.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const botaoSair =
    document.getElementById("botao-sair");

  if (botaoSair) {
    botaoSair.addEventListener("click", function (e) {
      e.preventDefault();
      sair();
    });
  }
});

function registrarConteudoVisto(nome, url, imagem) {
  const emailUsuario = localStorage.getItem("usuarioLogado");
  if (!emailUsuario) return;

  const dadosUsuario =
    JSON.parse(localStorage.getItem(emailUsuario)) || {};

  if (!dadosUsuario.vistosRecentemente) {
    dadosUsuario.vistosRecentemente = [];
  }

  // Remove se já existir (baseado na URL para garantir que não repita)
  dadosUsuario.vistosRecentemente =
    dadosUsuario.vistosRecentemente.filter(item =>
      item.url !== url);

  // Adiciona no topo
  const conteudo = { nome, url, imagem };
  dadosUsuario.vistosRecentemente.unshift(conteudo);

  // Mantém só os 5 mais recentes
  if (dadosUsuario.vistosRecentemente.length > 5) {
    dadosUsuario.vistosRecentemente =
      dadosUsuario.vistosRecentemente.slice(0, 5);
  }

  // Salva de volta no localStorage
  localStorage.setItem(emailUsuario,
    JSON.stringify(dadosUsuario));
}

function exibirVistosRecentemente() {
  const emailUsuario = localStorage.getItem("usuarioLogado");
  if (!emailUsuario) {
    const lista = document.getElementById("lista-vistos-recentemente");
    if (lista) {
      lista.innerHTML = "<p>Faça login para ver seu histórico.</p>";
    }
    return;
  }

  const dadosUsuario = JSON.parse(localStorage.getItem(emailUsuario)) || {};
  const vistos = dadosUsuario.vistosRecentemente || [];

  const lista = document.getElementById("lista-vistos-recentemente");
  if (!lista) return;

  lista.innerHTML = "";

  if (vistos.length === 0) {
    lista.innerHTML = "<p>Nenhum conteúdo visualizado recentemente.</p>";
    return;
  }


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
  const emailUsuarioLogado = localStorage.getItem("usuarioLogado");
  if (!emailUsuarioLogado) {
    const container = document.getElementById("lista-conteudos-recomendados");
    if (container) {
      container.innerHTML = "<p>Faça login para ver recomendações personalizadas.</p>";
    }
    return;
  }

  // Recuperação dos dados do usuário
  const dados = JSON.parse(localStorage.getItem(emailUsuarioLogado));

  if (!dados) {
    console.error("Dados do usuário não encontrados.");
    return;
  }

  const { perfil, preferenciaDeConteudos } = dados;
  const container = document.getElementById("lista-conteudos-recomendados");

  if (!container) {
    console.error("Elemento conteudo-recomendados não encontrado.");
    return;
  }

  if (!preferenciaDeConteudos || preferenciaDeConteudos.length === 0) {
    container.innerHTML = "<p>Não há conteúdos recomendados para você. Atualize suas preferências de cadastro.</p>";
    return;
  }

  // Conteúdos estáticos para recomendações com links atualizados
  const conteudos = {
    "Pessoa Física": {
      "Finanças Pessoais": {
        descricao: "Aprenda organizar seu orçamento",
        link: "./conteudo-didatico/financas-pessoais/planejamento-financeiro/planejamento-financeiro.html"
      },
      "Investimentos": {
        descricao: "Descubra como investir seu dinheiro",
        link: "./conteudo-didatico/investimentos-pessoais/renda-variavel-pf/renda-variavel-pf.html"
      },
      "Operações Bancárias": {
        descricao: "Entenda como funcionam as operações bancárias",
        link: "./conteudo-didatico/operacoes-bancarias/taxas-e-tarifas/taxas-e-tarifas.html"
      }
    },
    "Pessoa Jurídica": {
      "Finanças Corporativas": {
        descricao: "Aprenda a gerenciar as finanças da sua empresa",
        link: "./conteudo-didatico/financas-corporativas/analise-de-balanco/analise-de-balanco.html"
      },
      "Investimentos Corporativos": {
        descricao: "Descubra como investir o capital da sua empresa",
        link: "./conteudo-didatico/investimentos-corporativos/fundo-de-investimentos-pj/fundo-de-investimentos-pj.html"
      },
      "Operações Bancárias": {
        descricao: "Entenda como funcionam as operações bancárias para empresas",
        link: "./conteudo-didatico/operacoes-bancarias/taxas-e-tarifas/taxas-e-tarifas.html"
      }
    }
  };

  // Limpa o container antes de adicionar novos conteúdos
  container.innerHTML = "";

  // Percorre as preferências do usuário e exibe os conteúdos recomendados como links
  preferenciaDeConteudos.forEach((preferencia) => {
    let conteudo = conteudos[perfil][preferencia];

    // Ajuste específico para "Investimentos" em Pessoa Jurídica (se sua preferência for genérica)
    if (perfil === "Pessoa Jurídica" && preferencia === "Investimentos") {
      conteudo = conteudos[perfil]["Investimentos Corporativos"];
      preferencia = "Investimentos Corporativos"; // Ajuste o nome exibido
    }

    if (conteudo) {
      const bloco = `
        <a href="${conteudo.link}" class="card-conteudo-link">
          <div class="card-conteudo">
            <h3>${preferencia}</h3>
            <p>${conteudo.descricao}</p>
          </div>
        </a>
      `;
      container.innerHTML += bloco;
    } else {
      const bloco = `
        <div class="card-conteudo">
          <h3>${preferencia}</h3>
          <p>Conteúdo não disponível.</p>
        </div>
      `;
      container.innerHTML += bloco;
    }
  });
}
exibirConteudoRecomendados();

// This function now uses the financial data stored by the dashboard
window.renderMainPieChart = function () {
  const emailUsuarioLogado = localStorage.getItem("usuarioLogado");

  if (!emailUsuarioLogado) {
    // Hide chart container and show a message if no user is logged in
    document.getElementById("pieChartMain").style.display = "none";
    document.getElementById("resumo-financeiro").innerHTML = "<h3>Resumo Mensal</h3><p>Faça login para ver seus dados financeiros.</p>";
    document.getElementById("historico-mensal").innerHTML = "<h3>Histórico do Mês</h3><p>Faça login para ver seu histórico.</p>";
    return;
  }

  const dadosDoUsuario = JSON.parse(localStorage.getItem(emailUsuarioLogado));

  if (!dadosDoUsuario || !dadosDoUsuario.financialData) {
    // If financialData is not present, initialize it or show a message
    document.getElementById("pieChartMain").style.display = "none";
    document.getElementById("resumo-financeiro").innerHTML = "<h3>Resumo Mensal</h3><p>Nenhum dado financeiro encontrado. Adicione transações no seu Dashboard.</p>";
    document.getElementById("historico-mensal").innerHTML = "<h3>Histórico do Mês</h3><p>Nenhum histórico encontrado. Adicione transações no seu Dashboard.</p>";
    return;
  }

  // Ensure canvas is visible
  document.getElementById("pieChartMain").style.display = "block";


  const allData = dadosDoUsuario.financialData;

  // Helper function to expand recurring transactions (copied from dashboard script)
  function expandRecurringTransactions(transactions) {
    const expandedTransactions = [];
    const today = new Date();
    const currentYear = today.getFullYear();

    const startDisplayYear = 2024; // Início do período para exibição
    const endDisplayYear = currentYear + 5; // Fim do período para exibição

    transactions.forEach((item) => {
      if (item.recorrente) {
        const originalDate = new Date(item.data + "T12:00:00");
        let currentDate = new Date(originalDate);

        while (currentDate.getFullYear() < startDisplayYear) {
          if (item.frequencia === "mensal") {
            currentDate.setMonth(currentDate.getMonth() + 1);
          } else if (item.frequencia === "semanal") {
            currentDate.setDate(currentDate.getDate() + 7);
          } else if (item.frequencia === "diaria") {
            currentDate.setDate(currentDate.getDate() + 1);
          } else {
            break;
          }
        }

        while (currentDate.getFullYear() <= endDisplayYear) {
          if (
            item.dataEncerramento &&
            new Date(currentDate) > new Date(item.dataEncerramento + "T23:59:59")
          ) {
            break;
          }

          if (!item.dataEncerramento || new Date(currentDate) <= new Date(item.dataEncerramento + "T23:59:59")) {
            expandedTransactions.push({
              ...item,
              data: currentDate.toISOString().split("T")[0],
            });
          }

          if (item.frequencia === "mensal") {
            const nextMonth = currentDate.getMonth() + 1;
            currentDate.setMonth(nextMonth);
            if (currentDate.getMonth() !== (nextMonth % 12)) {
                currentDate.setDate(0);
                currentDate.setDate(originalDate.getDate());
                if (currentDate.getMonth() !== (nextMonth % 12)) {
                    currentDate = new Date(currentDate.getFullYear(), nextMonth, 0);
                }
            }
          } else if (item.frequencia === "semanal") {
            currentDate.setDate(currentDate.getDate() + 7);
          } else if (item.frequencia === "diaria") {
            currentDate.setDate(currentDate.getDate() + 1);
          } else {
            break;
          }

          if (currentDate > new Date(endDisplayYear + 1, 0, 1)) break;
        }
      } else {
        expandedTransactions.push(item);
      }
    });

    return expandedTransactions;
  }

  const expandedEntradas = expandRecurringTransactions(allData.entradas || []);
  const expandedSaidas = expandRecurringTransactions(allData.saidas || []);

  const totalEntradas = expandedEntradas.reduce(
    (sum, item) => sum + item.valor,
    0
  );
  const totalSaidas = expandedSaidas.reduce(
    (sum, item) => sum + item.valor,
    0
  );

  const ctx = document.getElementById("pieChartMain").getContext("2d");

  // Destroy previous chart instance if it exists
  if (window.pieChartMainInstance) {
    window.pieChartMainInstance.destroy();
  }

  window.pieChartMainInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Entradas", "Saídas"],
      datasets: [{
        data: [totalEntradas, totalSaidas],
        backgroundColor: ["#4CAF50", "#F44336"],
      }, ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.label || "";
              if (label) label += ": ";
              if (context.parsed !== null) {
                label += new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(context.parsed);
              }
              return label;
            },
          },
        },
        legend: {
          display: false,
        },
      },
    },
  });

  // Atualiza o resumo financeiro
  document.getElementById("resumo-entradas").textContent = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(totalEntradas);

  document.getElementById("resumo-saidas").textContent = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(totalSaidas);

  // FILTRAR histórico do mês atual e exibir
  const now = new Date();
  const anoAtual = now.getFullYear();
  const mesAtual = now.getMonth(); // 0-indexado

  const historicoDoMes = [...expandedEntradas, ...expandedSaidas]
    .filter(item => {
      const data = new Date(item.data);
      return data.getFullYear() === anoAtual && data.getMonth() === mesAtual;
    })
    .sort((a, b) => new Date(b.data) - new Date(a.data)); // mais recentes primeiro

  const lista = document.getElementById("lista-historico");
  lista.innerHTML = ""; // limpar antes

  if (historicoDoMes.length === 0) {
    lista.innerHTML = "<p>Sem transações neste mês.</p>";
  } else {
    historicoDoMes.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("transacao-item");
      div.classList.add(item.tipo === "entrada" ? "transacao-entrada" : "transacao-saida");

      const formattedValue = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(item.valor);
      const formattedDate = new Date(item.data + "T12:00:00").toLocaleDateString("pt-BR");

     div.textContent = `${formattedDate} - ${item.tipo === "entrada" ? "Entrada" : "Saída"}: ${formattedValue} - ${item.categoriaText || "Sem Categoria"}`;


      lista.appendChild(div);
    });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  renderMainPieChart(); // Call this on page load
});

// Recupera o identificador do usuário logado (e-mail, por exemplo)

// Função para adicionar uma meta financeira
document.addEventListener("DOMContentLoaded", function () {
  const formMeta =
    document.getElementById("form-meta");
  const listaMetas = document.getElementById("lista-metas");

  // --- Verificação de Usuário Logado ---

  if (!emailUsuario) {
    console.warn("Nenhum usuário logado detectado. As metas financeiras não serão salvas ou carregadas.");
    listaMetas.innerHTML = '<p>Faça login para gerenciar suas metas.</p>';
    formMeta.style.display = 'none'; // Hide the form if no user logged in
    return;
  }

  const metasKey = `metas_${emailUsuario}`;

  // --- Função para Carregar Metas ---
  // Obtém as metas salvas para o usuário logado e as exibe na interface.
  function carregarMetas() {
    // Tenta obter as metas do localStorage; se não encontrar, assume um array vazio.
    const metasSalvas = JSON.parse(localStorage.getItem(metasKey) || '[]');
    listaMetas.innerHTML = ''; // Limpa a lista atual para evitar duplicações ao recarregar.

    // Para cada meta encontrada, cria e adiciona o card correspondente à interface.
    if (metasSalvas.length === 0) {
      listaMetas.innerHTML = '<p>Nenhuma meta cadastrada. Crie uma nova meta acima!</p>';
    } else {
      metasSalvas.forEach(meta => {
        criarCardMeta(meta.titulo, meta.valorTotal, meta.valorAtual, meta.tempo, meta.id);
      });
    }
  }

  // --- Função para Salvar Metas ---
  // Coleta todas as metas atualmente exibidas na interface e as salva no localStorage.
  function salvarMetas() {
    const metasAtuais = [];
    document.querySelectorAll('.card-meta').forEach(card => {
      metasAtuais.push({
        id: card.dataset.metaId, // Pega o ID único da meta do dataset do card.
        titulo: card.querySelector('h4').textContent,
        valorTotal: parseFloat(card.dataset.valorTotal), // Converte para número.
        // Adiciona valorAtual do dataset para garantir que o valor mais recente seja salvo
        valorAtual: parseFloat(card.dataset.valorAtual),
        tempo: card.dataset.tempo // Pega o tempo do dataset do card.
      });
    });
    // Salva o array de metas (em formato JSON) no localStorage, usando a chave do usuário.
    localStorage.setItem(metasKey,
      JSON.stringify(metasAtuais));
    carregarMetas(); // Recarrega para exibir a mensagem se a lista ficar vazia
  }

  // --- Evento de Envio do Formulário de Criação de Meta ---
  formMeta.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário (recarregar a página).

    // Coleta os valores inseridos pelo usuário.
    const titulo = document.getElementById("titulo-meta").value;
    const valorTotal = parseFloat(document.getElementById("valor-meta").value);
    const valorAtual = parseFloat(document.getElementById("valor-atual-meta").value);
    const tempo = document.getElementById("tempo-meta").value;

    // Realiza a validação dos campos.
    if (!titulo || isNaN(valorTotal) || isNaN(valorAtual) || !tempo || valorTotal <= 0 || valorAtual < 0) {
      alert("Por favor, preencha todos os campos corretamente. O valor total deve ser maior que zero e o valor atual não pode ser negativo.");
      return; // Interrompe se a validação falhar.
    }

    // Gera um ID único para a nova meta (usando o timestamp atual para simplicidade).
    const metaId = Date.now().toString();

    // Cria o card da meta na interface do usuário.
    criarCardMeta(titulo, valorTotal,
      valorAtual, tempo, metaId);


    salvarMetas();


    // Limpa o formulário após a adição.
    formMeta.reset();
  });

  // --- Função para Criar o Elemento HTML (Card) de uma Meta ---
  function criarCardMeta(titulo, valorTotal, valorAtual, tempo, id) {
    const card = document.createElement("div");
    card.classList.add("card-meta");

    // Armazena dados importantes no `dataset` do elemento HTML para fácil recuperação.
    card.dataset.metaId = id;
    card.dataset.valorTotal = valorTotal;
    card.dataset.valorAtual = valorAtual;
    card.dataset.tempo = tempo;

    // Converter tempo para o formato brasileiro (dd/mm/aaaa)
    const data = new Date(tempo);
    const tempoFormatado = data.toLocaleDateString("pt-BR");

    // Calcula o progresso da meta em porcentagem.
    let progresso = Math.min((valorAtual / valorTotal) * 100, 100).toFixed(1);

    // Define a estrutura HTML interna do card.
    card.innerHTML = `
      <h4>${titulo}</h4>
      <small>Meta: R$ ${valorTotal.toFixed(2)}<br>
             Tempo: ${tempoFormatado}<br>
             Atual: R$ ${valorAtual.toFixed(2)}</small>
      <div
class="barra-progresso">
        <div
class="barra-preenchida" style="width: ${progresso}%"></div>
      </div>
      <div
class="porcentagem-meta">${progresso}%
alcançado</div>

      <div class="botoes-metas">
        <button class="btn-atualizar">Atualizar</button>
        <button
class="btn-excluir">Excluir</button>
      </div>


      <div class="form-atualizacao" style="display: none;
margin-top: 8px;">
        <input type="number"
class="novo-valor" placeholder="Novo valor atual" />
        <button
class="confirmar-atualizacao">Salvar</button>
      </div>
    `;

    // Seleciona os elementos interativos dentro do card para adicionar eventos.
    const btnAtualizar = card.querySelector('.btn-atualizar');
    const formAtualizacao = card.querySelector('.form-atualizacao');
    const inputNovoValor = card.querySelector('.novo-valor');
    const btnSalvar = card.querySelector('.confirmar-atualizacao');
    const barra = card.querySelector('.barra-preenchida');
    const porcentagemTexto = card.querySelector('.porcentagem-meta');

    // Evento para mostrar/esconder o formulário de atualização do valor.
    btnAtualizar.addEventListener('click', () => {
      formAtualizacao.style.display = formAtualizacao.style.display === 'none' ? 'block' : 'none';
    });

    const btnExcluir = card.querySelector('.btn-excluir');

    // Evento para excluir a meta.
    btnExcluir.addEventListener('click',
      () => {
        if (confirm('Tem certeza que deseja excluir esta meta?')) {
          card.remove(); // Remove o card da DOM.
          // **SALVA AS METAS:** Chama a função para persistir a exclusão no localStorage.
          salvarMetas();
        }
      });

    // Evento para salvar o novo valor de atualização da meta.
    btnSalvar.addEventListener('click', () => {
      const novoValor =
        parseFloat(inputNovoValor.value);

      if (isNaN(novoValor) || novoValor < 0) {
        alert("Por favor, informe um valor numérico válido e não negativo.");
        return;
      }

      // Atualiza o valor atual no `dataset` do card para que `salvarMetas` pegue o valor correto.
      card.dataset.valorAtual =
        novoValor;

      // Recalcula e atualiza o progresso visual na barra e no texto.

      const novaPorcentagem = Math.min((novoValor / parseFloat(card.dataset.valorTotal)) * 100, 100).toFixed(1);
      barra.style.width = `${novaPorcentagem}%`;
      porcentagemTexto.textContent = `${novaPorcentagem}% alcançado`;


      salvarMetas();
    });

    // Adiciona o novo card à lista de metas na interface.
    listaMetas.appendChild(card);
  }

  // --- Carregar Metas ao Inicializar a Página ---

  carregarMetas();
});

// ADICIONANDO FUNCIONALIDADE AO SUBMENU DO MENU NO MOBILE (EXCLUSIVO PARA TELA ABAIXO DE 768PX)
if (window.innerWidth <= 768) {
  const submenuToggles =
    document.querySelectorAll(".has-submenu > a");


  submenuToggles.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();


      const parent = this.parentElement;
      const submenu =
        parent.querySelector(".submenu");


      parent.classList.toggle("open");
      if (submenu)
        submenu.classList.toggle("show");

    });
  });
};