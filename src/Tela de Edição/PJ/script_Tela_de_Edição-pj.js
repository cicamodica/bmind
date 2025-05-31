document.addEventListener("DOMContentLoaded", function () {
  // Função para carregar o nome do usuário e atualizar o título
  function loadUserName() {
    const userName = localStorage.getItem("userName"); // Assumindo que o nome do usuário é salvo no localStorage como 'userName'
    const dashboardTitle = document.getElementById("dashboard-titulo");
    if (userName && dashboardTitle) {
      dashboardTitle.textContent = `Dashboard de ${userName}`;
    } else if (dashboardTitle) {
      dashboardTitle.textContent = "Dashboard da Empresa"; // Fallback se o nome não for encontrado
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

  // Chamar a função para carregar o nome do usuário ao carregar a página
  loadUserName();

  // Função para alternar a visibilidade do menu dropdown
  window.toggleMenu = function () {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  };

  // Função para fechar o menu dropdown ao clicar fora dele
  document.addEventListener("click", function (event) {
    const dropdownMenu = document.getElementById("dropdownMenu");
    const menuIcon = document.querySelector(".menu-icon");

    if (
      dropdownMenu &&
      menuIcon &&
      !dropdownMenu.contains(event.target) &&
      !menuIcon.contains(event.target)
    ) {
      dropdownMenu.style.display = "none";
    }
  });

  // verifica  se usuario esta logado para apresentar botao de minha area

  document.addEventListener("DOMContentLoaded", () => {
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

  // Função para abrir modais (histórico, entrada, saída, etc.)
  window.openModal = function (tipo) {
    document.getElementById("overlay").style.display = "block";
    const modal = document.getElementById(`modal-${tipo}`);
    modal.style.display = "block";

    if (tipo === "historico") {
      // Garante que os filtros do histórico sejam populados antes de carregar as transações
      populateHistoricoFilters();
      populateHistoricoModal();
    }
  };

  // Função para fechar todos os modais e resetar seus campos
  window.closeModal = function () {
    document.getElementById("overlay").style.display = "none";
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.style.display = "none";
      modal
        .querySelectorAll(
          'input[type="date"], input[type="number"], input[type="text"]'
        )
        .forEach((input) => (input.value = ""));
      modal
        .querySelectorAll("select")
        .forEach((select) => (select.selectedIndex = 0));
      const recorrenteNao = modal.querySelector(
        'input[type="radio"][value="nao"]'
      );
      if (recorrenteNao) {
        recorrenteNao.checked = true;
        const recorrenteDiv = modal.querySelector(
          '[id$="-opcoes-recorrentes"]'
        );
        if (recorrenteDiv) recorrenteDiv.style.display = "none";
      }
    });

    const removeModal = document.getElementById("modal-remover");
    if (removeModal) {
      document.getElementById("tipo-remocao").selectedIndex = 0;
      document.getElementById("lista-transacoes-remocao").innerHTML = "";
    }
  };

  // Listener para mostrar/esconder opções de recorrência com base no radio button
  document.querySelectorAll("input[name$='-recorrente']").forEach((radio) => {
    radio.addEventListener("change", function () {
      const modalId = this.name.split("-")[0];
      const recorrenteDiv = document.getElementById(
        `${modalId}-opcoes-recorrentes`
      );

      if (recorrenteDiv) {
        recorrenteDiv.style.display = this.value === "sim" ? "block" : "none";
      }
    });
  });

  // Função para obter dados financeiros do localStorage
  function getFinancialData() {
    const storedData = localStorage.getItem("financialDashboardDataPJ"); // Changed key
    return storedData ? JSON.parse(storedData) : { entradas: [], saidas: [] };
  }

  // Função para salvar dados financeiros no localStorage e renderizar o dashboard
  function saveFinancialData(data) {
    localStorage.setItem("financialDashboardDataPJ", JSON.stringify(data)); // Changed key
    renderDashboard();
  }

  // Função para salvar uma nova entrada
  window.salvarEntrada = function () {
    const dataInput = document.getElementById("entrada-data");
    const valorInput = document.getElementById("entrada-valor");
    const categoriaSelect = document.getElementById("entrada-categoria");
    const descricaoInput = document.getElementById("entrada-descricao");
    const recorrenteSim = document.getElementById(
      "entrada-recorrente-sim"
    ).checked;
    const frequenciaSelect = document.getElementById("entrada-frequencia");

    if (!dataInput.value || !valorInput.value) {
      alert("Data e Valor são obrigatórios para entradas.");
      return;
    }

    const novaEntrada = {
      id: Date.now(),
      tipo: "entrada",
      data: dataInput.value,
      valor: parseFloat(valorInput.value),
      categoria: categoriaSelect.value,
      descricao: descricaoInput.value,
      recorrente: recorrenteSim,
      frequencia: recorrenteSim ? frequenciaSelect.value : null,
    };

    const data = getFinancialData();
    data.entradas.push(novaEntrada);
    saveFinancialData(data);
    closeModal();
  };

  // Função para salvar uma nova saída
  window.salvarSaida = function () {
    const dataInput = document.getElementById("saida-data");
    const valorInput = document.getElementById("saida-valor");
    const categoriaSelect = document.getElementById("saida-categoria");
    const descricaoInput = document.getElementById("saida-descricao");
    const recorrenteSim = document.getElementById(
      "saida-recorrente-sim"
    ).checked;
    const frequenciaSelect = document.getElementById("saida-frequencia");

    if (!dataInput.value || !valorInput.value) {
      alert("Data e Valor são obrigatórios para saídas.");
      return;
    }

    const novaSaida = {
      id: Date.now(),
      tipo: "saida",
      data: dataInput.value,
      valor: parseFloat(valorInput.value),
      categoria: categoriaSelect.value,
      descricao: descricaoInput.value,
      recorrente: recorrenteSim,
      frequencia: recorrenteSim ? frequenciaSelect.value : null,
    };

    const data = getFinancialData();
    data.saidas.push(novaSaida);
    saveFinancialData(data);

    closeModal();
  };

  // Função para abrir o modal de remoção
  window.openRemoveModal = function () {
    openModal("remover");
  };

  // Função para carregar transações para remoção no modal de remoção
  window.loadTransactionsForRemoval = function () {
    const tipoRemocao = document.getElementById("tipo-remocao").value;
    const listaDiv = document.getElementById("lista-transacoes-remocao");
    listaDiv.innerHTML = ""; // Limpa a lista existente

    const allData = getFinancialData();
    let transactionsToDisplay = [];

    if (tipoRemocao === "entradas") {
      transactionsToDisplay = allData.entradas;
    } else if (tipoRemocao === "saidas") {
      transactionsToDisplay = allData.saidas;
    }

    if (transactionsToDisplay.length === 0) {
      listaDiv.innerHTML = `<p>Nenhum registro encontrado para remover.</p>`;
      return;
    }

    // Ordena as transações da mais recente para a mais antiga
    transactionsToDisplay.sort((a, b) => new Date(b.data) - new Date(a.data));

    transactionsToDisplay.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "transaction-item-remocao";

      const valueDisplay =
        item.tipo === "saida"
          ? `- R$ ${item.valor.toFixed(2)}`
          : `+ R$ ${item.valor.toFixed(2)}`;
      const description = item.descricao ? ` - ${item.descricao}` : "";
      const category = item.categoria ? ` (${item.categoria})` : "";
      const formattedDate = new Date(item.data).toLocaleDateString("pt-BR");

      itemDiv.innerHTML = `
                <input type="checkbox" id="remove-${item.id}" value="${item.id}" data-type="${item.tipo}">
                <label for="remove-${item.id}">
                    ${formattedDate} ${valueDisplay}${category}${description}
                </label>
            `;
      listaDiv.appendChild(itemDiv);
    });
  };

  // Função para confirmar a remoção das transações selecionadas
  window.confirmRemoveSelected = function () {
    const checkboxes = document.querySelectorAll(
      '#lista-transacoes-remocao input[type="checkbox"]:checked'
    );

    if (checkboxes.length === 0) {
      alert("Nenhum registro selecionado para remover.");
      return;
    }

    if (
      !confirm(
        `Tem certeza que deseja remover ${checkboxes.length} registro(s)?`
      )
    ) {
      return;
    }

    const data = getFinancialData();

    checkboxes.forEach((checkbox) => {
      const idToRemove = parseInt(checkbox.value);
      const typeOfTransaction = checkbox.dataset.type;

      if (typeOfTransaction === "entrada") {
        data.entradas = data.entradas.filter((item) => item.id !== idToRemove);
      } else if (typeOfTransaction === "saida") {
        data.saidas = data.saidas.filter((item) => item.id !== idToRemove);
      }
    });

    saveFinancialData(data);
    closeModal();
    alert("Registro(s) Removido");
  };

  // Função para obter anos únicos das transações (e anos relevantes para o futuro)
  function getUniqueYears(data) {
    const years = new Set();
    const currentYear = new Date().getFullYear(); // Ano atual

    // Adiciona anos a partir de 2023 até o ano atual + 2 para garantir que filtros futuros existam
    const startDisplayYear = 2023; // Mudei para 2023, caso haja dados antigos
    const maxYear = currentYear + 2;

    for (let year = startDisplayYear; year <= maxYear; year++) {
      years.add(year.toString());
    }

    // Adiciona anos das transações existentes para garantir que todos apareçam
    data.entradas.forEach((item) =>
      years.add(new Date(item.data).getFullYear().toString())
    );
    data.saidas.forEach((item) =>
      years.add(new Date(item.data).getFullYear().toString())
    );

    return Array.from(years).sort((a, b) => parseInt(a) - parseInt(b));
  }

  // Popula os filtros da dashboard principal
  function populateMainFilters() {
    const data = getFinancialData();
    const sortedYears = getUniqueYears(data);

    const anoFiltroSelect = document.getElementById("ano-filtro");
    const mesFiltroSelect = document.getElementById("mes-filtro");

    const currentAnoFilter = anoFiltroSelect.value;
    const currentMesFilter = mesFiltroSelect.value;

    // Popula anos
    anoFiltroSelect.innerHTML = '<option value="">Todos os Anos</option>';
    sortedYears.forEach((year) => {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      anoFiltroSelect.appendChild(option);
    });

    // Tenta manter o ano atual selecionado, ou define para o ano mais recente do filtro se não houver seleção
    anoFiltroSelect.value =
      currentAnoFilter || new Date().getFullYear().toString();

    mesFiltroSelect.value = currentMesFilter;
  }

  // Popula os filtros do modal de histórico
  function populateHistoricoFilters() {
    const data = getFinancialData();
    const sortedYears = getUniqueYears(data);

    const historicoAnoFiltroSelect = document.getElementById(
      "historico-ano-filtro"
    );
    const historicoMesFiltroSelect = document.getElementById(
      "historico-mes-filtro"
    );

    const currentAnoFilter = historicoAnoFiltroSelect.value;
    const currentMesFilter = historicoMesFiltroSelect.value;

    historicoAnoFiltroSelect.innerHTML =
      '<option value="">Todos os Anos</option>';
    sortedYears.forEach((year) => {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      historicoAnoFiltroSelect.appendChild(option);
    });

    historicoAnoFiltroSelect.value = currentAnoFilter || "";
    historicoMesFiltroSelect.value = currentMesFilter || "";
  }

  // Função para atualizar os filtros e renderizar o dashboard novamente
  window.atualizarFiltros = function () {
    renderDashboard();
  };

  // Função para filtrar transações por ano e mês
  function filterTransactions(transactions, ano, mes) {
    return transactions.filter((item) => {
      const itemDate = new Date(item.data + "T00:00:00");
      const itemYear = itemDate.getFullYear().toString();
      const itemMonth = (itemDate.getMonth() + 1).toString().padStart(2, "0");

      const anoMatch = !ano || itemYear === ano;
      const mesMatch = !mes || itemMonth === mes;

      return anoMatch && mesMatch;
    });
  }

  // Objeto para armazenar instâncias de gráficos
  let chartInstances = {};

  // Função para destruir as instâncias de gráficos existentes
  function destroyCharts() {
    for (const chartId in chartInstances) {
      if (chartInstances[chartId]) {
        chartInstances[chartId].destroy();
        chartInstances[chartId] = null;
      }
    }
  }

  // Função para expandir transações recorrentes
  function expandRecurringTransactions(transactions) {
    const expandedTransactions = [];
    const today = new Date();
    const currentYear = today.getFullYear();

    // Para o histórico e gráficos, podemos expandir um intervalo maior de anos
    const startDisplayYear = 2023; // Começa a partir do ano anterior ao atual, para capturar dados antigos
    const endDisplayYear = currentYear + 2; // Ex: até o próximo ano para recorrências futuras

    transactions.forEach((item) => {
      if (item.recorrente) {
        const originalDate = new Date(item.data + "T00:00:00");

        let currentDate = new Date(originalDate);

        // Ajusta o ano de início para que o loop comece no ano correto, sem duplicar transações passadas
        // e garantindo que transações antigas ainda apareçam se forem recorrentes
        while (currentDate.getFullYear() < startDisplayYear) {
          if (item.frequencia === "mensal") {
            currentDate.setMonth(currentDate.getMonth() + 1);
          } else if (item.frequencia === "semanal") {
            currentDate.setDate(currentDate.getDate() + 7);
          } else if (item.frequencia === "diaria") {
            currentDate.setDate(currentDate.getDate() + 1);
          } else {
            break; // Para frequências não suportadas
          }
        }

        while (currentDate.getFullYear() <= endDisplayYear) {
          // Adiciona a transação expandida
          expandedTransactions.push({
            ...item,
            data: currentDate.toISOString().split("T")[0],
          });

          // Avança para a próxima data com base na frequência
          if (item.frequencia === "mensal") {
            currentDate.setMonth(currentDate.getMonth() + 1);
          } else if (item.frequencia === "semanal") {
            currentDate.setDate(currentDate.getDate() + 7);
          } else if (item.frequencia === "diaria") {
            currentDate.setDate(currentDate.getDate() + 1);
          } else {
            break;
          }
          // Reseta o dia do mês para evitar pular meses em caso de datas como 31 de janeiro para fevereiro
          if (
            currentDate.getDate() !== originalDate.getDate() &&
            item.frequencia === "mensal"
          ) {
            currentDate.setDate(originalDate.getDate());
          }

          if (currentDate > new Date(endDisplayYear + 1, 0, 1)) break; // Previne loops infinitos
        }
      } else {
        expandedTransactions.push(item);
      }
    });

    return expandedTransactions;
  }

  // Função para popular o modal de histórico
  window.populateHistoricoModal = function () {
    const listaEntradas = document.getElementById("lista-entradas");
    const listaSaidas = document.getElementById("lista-saidas");
    const historicoAnoFiltro = document.getElementById(
      "historico-ano-filtro"
    ).value;
    const historicoMesFiltro = document.getElementById(
      "historico-mes-filtro"
    ).value;

    listaEntradas.innerHTML = "";
    listaSaidas.innerHTML = "";

    const allData = getFinancialData();
    const expandedEntradas = expandRecurringTransactions(allData.entradas);
    const expandedSaidas = expandRecurringTransactions(allData.saidas);

    const filteredEntradas = filterTransactions(
      expandedEntradas,
      historicoAnoFiltro,
      historicoMesFiltro
    );
    const filteredSaidas = filterTransactions(
      expandedSaidas,
      historicoAnoFiltro,
      historicoMesFiltro
    );

    filteredEntradas.sort((a, b) => new Date(b.data) - new Date(a.data));
    filteredSaidas.sort((a, b) => new Date(b.data) - new Date(a.data));

    function createListItem(item, displayType) {
      const listItem = document.createElement("li");
      listItem.className = item.tipo;
      const formattedDate = new Date(item.data).toLocaleDateString("pt-BR");
      const formattedValue = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(item.valor);
      const description = item.descricao ? ` - ${item.descricao}` : "";
      const category = item.categoria ? item.categoria : "Sem Categoria";

      listItem.innerHTML = `
                <span class="transaction-type">${displayType}:</span>
                <span class="transaction-date">${formattedDate}</span>
                <span class="transaction-description">${category}${description}</span>
                <span class="transaction-value">${formattedValue}</span>
            `;
      return listItem;
    }

    if (filteredEntradas.length === 0) {
      listaEntradas.innerHTML = `<p>Nenhuma entrada encontrada para este período.</p>`;
    } else {
      filteredEntradas.forEach((item) => {
        listaEntradas.appendChild(createListItem(item, "Entrada"));
      });
    }

    if (filteredSaidas.length === 0) {
      listaSaidas.innerHTML = `<p>Nenhuma saída encontrada para este período.</p>`;
    } else {
      filteredSaidas.forEach((item) => {
        listaSaidas.appendChild(createListItem(item, "Saída"));
      });
    }
  };

  // Função principal para renderizar o dashboard (gráficos e valores)
  window.renderDashboard = function () {
    destroyCharts();

    populateMainFilters(); // Popula os filtros da dashboard principal

    const allData = getFinancialData();
    const anoFiltro = document.getElementById("ano-filtro").value;
    const mesFiltro = document.getElementById("mes-filtro").value;

    // Ao renderizar o dashboard, expandimos as transações para o período dos gráficos
    const expandedEntradas = expandRecurringTransactions(allData.entradas);
    const expandedSaidas = expandRecurringTransactions(allData.saidas);

    const entradasParaGrafico = filterTransactions(
      expandedEntradas,
      anoFiltro,
      mesFiltro
    );
    const saidasParaGrafico = filterTransactions(
      expandedSaidas,
      anoFiltro,
      mesFiltro
    );

    const totalEntradas = entradasParaGrafico.reduce(
      (sum, item) => sum + item.valor,
      0
    );
    const totalSaidas = saidasParaGrafico.reduce(
      (sum, item) => sum + item.valor,
      0
    );

    // Salvar dados no localStorage, dentro do objeto do usuário logado
        const emailUsuarioLogado = localStorage.getItem("usuarioLogado");

        if (emailUsuarioLogado) {
          const dadosDoUsuario = JSON.parse(localStorage.getItem(emailUsuarioLogado));

          if (dadosDoUsuario) {
             dadosDoUsuario.chartData = {
                entradas: totalEntradas,
                saidas: totalSaidas
           };

           // Salvar também as transações filtradas do mês atual com tipo padronizado
           dadosDoUsuario.entradas = entradasParaGrafico.map(t => ({
             ...t,
             tipo: "entrada",
             descricao: t.categoria // opcional: manter para exibição posterior
           }));

           dadosDoUsuario.saidas = saidasParaGrafico.map(t => ({
           ...t,
           tipo: "saida",
           descricao: t.categoria
       }));

       localStorage.setItem(emailUsuarioLogado, JSON.stringify(dadosDoUsuario));
       }
    } 
    
    chartInstances.pieChart = new Chart(
      document.getElementById("pieChart").getContext("2d"),
      {
        type: "doughnut",
        data: {
          labels: ["Entradas", "Saídas"],
          datasets: [
            {
              data: [totalEntradas, totalSaidas],
              backgroundColor: ["#4CAF50", "#F44336"],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  let label = context.label || "";
                  if (label) {
                    label += ": ";
                  }
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
      }
    );

    const transacoesPorMes = {};
    const allFilteredMonths = new Set();

    entradasParaGrafico.forEach((item) => {
      const date = new Date(item.data);
      const monthKey = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}`;
      allFilteredMonths.add(monthKey);

      if (!transacoesPorMes[monthKey]) {
        transacoesPorMes[monthKey] = { entradas: 0, saidas: 0 };
      }
      transacoesPorMes[monthKey].entradas += item.valor;
    });

    saidasParaGrafico.forEach((item) => {
      const date = new Date(item.data);
      const monthKey = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}`;
      allFilteredMonths.add(monthKey);

      if (!transacoesPorMes[monthKey]) {
        transacoesPorMes[monthKey] = { entradas: 0, saidas: 0 };
      }
      transacoesPorMes[monthKey].saidas += item.valor;
    });

    const sortedMonthKeys = Array.from(allFilteredMonths).sort();

    let saldoAcumulado = 0;
    const saldosMensais = [];
    const entradasMensais = [];
    const saidasMensais = [];
    const labelsMeses = [];

    sortedMonthKeys.forEach((monthKey) => {
      const dataMes = transacoesPorMes[monthKey] || { entradas: 0, saidas: 0 };
      const saldoMesAtual = dataMes.entradas - dataMes.saidas;
      saldoAcumulado += saldoMesAtual;

      saldosMensais.push(saldoAcumulado);
      entradasMensais.push(dataMes.entradas);
      saidasMensais.push(dataMes.saidas);

      const [year, month] = monthKey.split("-");
      labelsMeses.push(
        new Date(year, parseInt(month) - 1).toLocaleString("pt-BR", {
          month: "short",
          year: "2-digit",
        })
      );
    });

    chartInstances.lineChart = new Chart(
      document.getElementById("lineChart").getContext("2d"),
      {
        type: "line",
        data: {
          labels: labelsMeses,
          datasets: [
            {
              label: "Saldo Acumulado",
              data: saldosMensais,
              borderColor: "#024dae",
              backgroundColor: "rgba(2, 77, 174, 0.2)",
              fill: true,
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          legend: {
            display: false,
          },
        },
      }
    );

    chartInstances.comparativeBarChart = new Chart(
      document.getElementById("comparativeBarChart").getContext("2d"),
      {
        type: "bar",
        data: {
          labels: labelsMeses,
          datasets: [
            {
              label: "Entradas",
              data: entradasMensais,
              backgroundColor: "#4CAF50",
            },
            {
              label: "Saídas",
              data: saidasMensais,
              backgroundColor: "#F44336",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          legend: {
            display: false,
          },
        },
      }
    );
  };

  renderDashboard(); // Renderiza o dashboard inicial
  exibirHistoricoDoMesAtual();
});

function filtrarTransacoesValidas(transacoes) {
  return transacoes.filter(t =>
    t &&
    t.id &&
    t.data &&
    t.valor > 0 &&
    t.categoria // pode manter essa se todas têm
  );
}


function exibirHistoricoDoMesAtual() {
    const listaHistorico = document.getElementById("lista-historico");
    if (!listaHistorico) return;

    listaHistorico.innerHTML = "";

    const { entradas, saidas } = getFinancialData();

    const entradasValidas = filtrarTransacoesValidas(entradas);
    const saidasValidas = filtrarTransacoesValidas(saidas);

    const entradasExpandidas = expandRecurringTransactions(entradasValidas);
    const saidasExpandidas = expandRecurringTransactions(saidasValidas);

    const hoje = new Date();
    const anoAtual = hoje.getFullYear().toString();
    const mesAtual = (hoje.getMonth() + 1).toString().padStart(2, "0");

    const entradasMes = filterTransactions(entradasExpandidas, anoAtual, mesAtual);
    const saidasMes = filterTransactions(saidasExpandidas, anoAtual, mesAtual);

    const todasTransacoes = [
        ...entradasMes.map(transacao => ({ ...transacao, tipo: "Entrada" })),
        ...saidasMes.map(transacao => ({ ...transacao, tipo: "Saída" }))
    ];

    // Ordena tudo junto
    todasTransacoes.sort((a, b) => new Date(b.data) - new Date(a.data));

    function criarItemLista(item) {
        const li = document.createElement("div");
        li.className = "item-historico";

        const data = new Date(item.data).toLocaleDateString("pt-BR");
        const valor = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(item.valor);

        const cor = item.tipo === "Entrada" ? "green" : "red";

        li.style.borderLeft = `4px solid ${cor}`;
        li.style.padding = "8px";
        li.style.marginBottom = "8px";
        li.style.backgroundColor = "#f9f9f9";

        li.innerHTML = `
            <span style="color:${cor};">${data} - ${item.tipo}: ${valor} - ${item.categoria}</span>
        `;

        return li;
    }

    if (todasTransacoes.length === 0) {
        const vazio = document.createElement("div");
        vazio.textContent = "Sem movimentações neste mês.";
        listaHistorico.appendChild(vazio);
    } else {
        todasTransacoes.forEach(item => listaHistorico.appendChild(criarItemLista(item)));
    }
}


// Função para alternar a visibilidade do menu (fora do DOMContentLoaded, para ser global)
function toggleMenu() {
  var dropdownMenu = document.getElementById("dropdownMenu");
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
}

// Função para fechar o menu dropdown ao clicar fora (fora do DOMContentLoaded, para ser global)
window.onclick = function (event) {
  if (
    !event.target.matches(".menu-icon") &&
    !event.target.matches(".menu-button")
  ) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};
// Função para delogar o usuário
function sair() {
  localStorage.removeItem("usuarioLogado"); // Remove o usuário logado
  localStorage.removeItem("currentUser"); // Remove o usuário atual
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
