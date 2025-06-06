document.addEventListener("DOMContentLoaded", function () {
  // Recupera o identificador do usuário logado (e-mail, por exemplo)
  const emailUsuario = localStorage.getItem("usuarioLogado"); // Assumes 'usuarioLogado' stores the email

  // Função para carregar o nome do usuário e atualizar o título
  function loadUserName() {
    const dashboardTitle = document.getElementById("dashboard-titulo");
    if (emailUsuario) {
      const dadosUsuario = JSON.parse(localStorage.getItem(emailUsuario)); // Use email as key

      if (dadosUsuario && dadosUsuario.nome) {
        dashboardTitle.textContent = `Dashboard de ${dadosUsuario.nome}`; // Update title with user's name
      } else {
        dashboardTitle.textContent = "Dashboard de Usuário"; // Fallback if name not found
      }
    } else {
      dashboardTitle.textContent = "Dashboard de Fulano"; // Fallback if no user is logged in
    }
  }

  // Funcionalidade da pesquisa (barra de pesquisa desktop) > lê na URL o que foi pesquisado e procura nos conteúdos
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

  // verifica se usuario esta logado para apresentar botao de minha area
  const botaoMinhaArea = document.querySelector(".minha-area-botao");
  const usuarioLogado = localStorage.getItem("usuarioLogado");

  if (botaoMinhaArea) {
    if (usuarioLogado) {
      botaoMinhaArea.style.display = "inline-block";
    } else {
      botaoMinhaArea.style.display = "none";
    }
  }

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

    // Reset visibility of edit modal specific elements
    document.getElementById("edit-modal-title").style.display = "block";
    document.getElementById("edit-type-label").style.display = "block";
    document.getElementById("tipo-edicao").style.display = "block";
    // Also ensure the list of transactions for editing is visible when reopening the edit modal
    document.getElementById("lista-transacoes-edicao").style.display =
      "block"; // Ensure this is visible on open
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
    // Use a unique key for PF dashboard data
    const storedData = localStorage.getItem("financialDashboardDataPF");
    return storedData ? JSON.parse(storedData) : { entradas: [], saidas: [] };
  }

  // Função para salvar dados financeiros no localStorage e renderizar o dashboard
  function saveFinancialData(data) {
    // Use a unique key for PF dashboard data
    localStorage.setItem("financialDashboardDataPF", JSON.stringify(data));
    renderDashboard();
  }

  // Função para salvar uma nova entrada
  window.salvarEntrada = function () {
    const dataInput = document.getElementById("entrada-data");
    const valorInput = document.getElementById("entrada-valor");
    const categoriaSelect = document.getElementById("entrada-categoria");
    const catetoriaText =
      categoriaSelect.options[categoriaSelect.selectedIndex].text;
    const descricaoInput = document.getElementById("entrada-descricao");
    const recorrenteSim = document.getElementById(
      "entrada-recorrente-sim"
    ).checked;
    const frequenciaSelect = document.getElementById("entrada-frequencia");
    const encerramentoInput = document.getElementById("entrada-encerramento"); // Adicionado

    if (!dataInput.value || !valorInput.value) {
      alert("Data e Valor são obrigatórios para entradas.");
      return;
    }

    if (recorrenteSim && !encerramentoInput.value) {
      alert("A Data de Encerramento é obrigatória para entradas recorrentes.");
      return;
    }

    const novaEntrada = {
      id: Date.now(),
      tipo: "entrada",
      data: dataInput.value,
      valor: parseFloat(valorInput.value),
      catetoriaText: catetoriaText,
      categoria: categoriaSelect.value,
      descricao: descricaoInput.value,
      recorrente: recorrenteSim,
      frequencia: recorrenteSim ? frequenciaSelect.value : null,
      dataEncerramento: recorrenteSim ? encerramentoInput.value : null,
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
    const categoriaText =
      categoriaSelect.options[categoriaSelect.selectedIndex].text;
    const descricaoInput = document.getElementById("saida-descricao");
    const recorrenteSim = document.getElementById(
      "saida-recorrente-sim"
    ).checked;
    const frequenciaSelect = document.getElementById("saida-frequencia");
    const encerramentoInput = document.getElementById("saida-encerramento"); // Adicionado

    if (!dataInput.value || !valorInput.value) {
      alert("Data e Valor são obrigatórios para saídas.");
      return;
    }

    if (recorrenteSim && !encerramentoInput.value) {
      alert("A Data de Encerramento é obrigatória para saídas recorrentes.");
      return;
    }

    const novaSaida = {
      id: Date.now(),
      tipo: "saida",
      data: dataInput.value,
      valor: parseFloat(valorInput.value),
      categoria: categoriaSelect.value,
      categoriaText: categoriaText,
      descricao: descricaoInput.value,
      recorrente: recorrenteSim,
      frequencia: recorrenteSim ? frequenciaSelect.value : null,
      dataEncerramento: recorrenteSim ? encerramentoInput.value : null,
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
    transactionsToDisplay.sort(
      (a, b) =>
        new Date(b.data + "T12:00:00") - new Date(a.data + "T12:00:00")
    );

    transactionsToDisplay.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "transaction-item-remocao";

      const valueDisplay =
        item.tipo === "saida"
          ? `- R$ ${item.valor.toFixed(2)}`
          : `+ R$ ${item.valor.toFixed(2)}`;
      const description = item.descricao ? ` - ${item.descricao}` : "";
      const category = item.categoria ? ` (${item.categoria})` : "";

      const formattedDate = new Date(item.data + "T12:00:00").toLocaleDateString(
        "pt-BR"
      );

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

  // Função para abrir o modal de edição
  window.openEditModal = function () {
    openModal("editar");
    document.getElementById("tipo-edicao").value = ""; // Reseta a seleção
    document.getElementById("lista-transacoes-edicao").innerHTML = ""; // Limpa a lista
    document.getElementById("form-edicao").style.display = "none"; // Esconde o formulário

    // Show initial elements when opening the edit modal
    document.getElementById("edit-modal-title").style.display = "block";
    document.getElementById("edit-type-label").style.display = "block";
    document.getElementById("tipo-edicao").style.display = "block";
    document.getElementById("lista-transacoes-edicao").style.display =
      "block"; // Ensure this is visible on open
  };

  // Função para carregar transações para edição no modal de edição
  window.loadTransactionsForEdit = function () {
    const tipoEdicao = document.getElementById("tipo-edicao").value;
    const listaDiv = document.getElementById("lista-transacoes-edicao");
    listaDiv.innerHTML = ""; // Limpa a lista existente
    document.getElementById("form-edicao").style.display = "none"; // Esconde o formulário ao trocar o tipo

    if (!tipoEdicao) {
      listaDiv.innerHTML = `<p>Selecione o tipo de transação para editar.</p>`;
      return;
    }

    const allData = getFinancialData();
    let transactionsToDisplay = [];

    if (tipoEdicao === "entradas") {
      transactionsToDisplay = allData.entradas;
    } else if (tipoEdicao === "saidas") {
      transactionsToDisplay = allData.saidas;
    }

    if (transactionsToDisplay.length === 0) {
      listaDiv.innerHTML = `<p>Nenhum registro encontrado para editar.</p>`;
      return;
    }

    // Ordena as transações da mais recente para a mais antiga
    transactionsToDisplay.sort(
      (a, b) =>
        new Date(b.data + "T12:00:00") - new Date(a.data + "T12:00:00")
    );

    transactionsToDisplay.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "transaction-item-edicao";

      const valueDisplay =
        item.tipo === "saida"
          ? `- R$ ${item.valor.toFixed(2)}`
          : `+ R$ ${item.valor.toFixed(2)}`;
      const description = item.descricao ? ` - ${item.descricao}` : "";
      const category = item.categoria ? ` (${item.categoria})` : "";

      const formattedDate = new Date(item.data + "T12:00:00").toLocaleDateString(
        "pt-BR"
      );

      itemDiv.innerHTML = `
                <button class="edit-button" onclick="editTransaction(${item.id}, '${item.tipo}')">
                    ${formattedDate} ${valueDisplay}${category}${description}
                </button>
            `;
      listaDiv.appendChild(itemDiv);
    });
  };

  // Função para popular o formulário de edição com os dados da transação
  window.editTransaction = function (id, tipo) {
    const data = getFinancialData();
    let transactionToEdit = null;

    if (tipo === "entrada") {
      transactionToEdit = data.entradas.find((item) => item.id === id);
    } else if (tipo === "saida") {
      transactionToEdit = data.saidas.find((item) => item.id === id);
    }

    if (!transactionToEdit) {
      alert("Transação não encontrada para edição.");
      return;
    }

    // Hide elements specific to selecting a transaction
    document.getElementById("edit-modal-title").style.display = "none";
    document.getElementById("edit-type-label").style.display = "none";
    document.getElementById("tipo-edicao").style.display = "none";
    document.getElementById("lista-transacoes-edicao").style.display = "none";

    // Preenche o formulário de edição
    document.getElementById("edit-id").value = transactionToEdit.id;
    document.getElementById("edit-tipo").value = transactionToEdit.tipo;
    document.getElementById("edit-data").value = transactionToEdit.data;
    document.getElementById("edit-valor").value = transactionToEdit.valor;
    document.getElementById("edit-descricao").value = transactionToEdit.descricao;

    // Popula as categorias
    const categoriaSelect = document.getElementById("edit-categoria");
    categoriaSelect.innerHTML = ""; // Limpa opções existentes

    let categories = [];
    if (tipo === "entrada") {
      categories = ["Salário", "Investimentos", "Lucros", "Outros"];
    } else {
      categories = [
        "Alimentação",
        "Transporte",
        "Moradia",
        "Lazer",
        "Saúde",
        "Educação",
        "Contas",
        "Outros",
      ];
    }

    categories.forEach((cat) => {
      const option = document.createElement("option");
      // Padroniza o valor da opção para ser minúsculo e sem acentos para a comparação
      option.value = cat
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      option.textContent = cat;
      categoriaSelect.appendChild(option);
    });

    // Seleciona a categoria correta, padronizando também o valor da categoria salva
    const savedCategoryValue = transactionToEdit.categoria
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    categoriaSelect.value = savedCategoryValue;

    document.getElementById("form-edicao").style.display = "block";

    // Recorrência
    if (transactionToEdit.recorrente) {
      document.getElementById("edit-recorrente-sim").checked = true;
      document.getElementById("edit-opcoes-recorrentes").style.display =
        "block";
      document.getElementById("edit-frequencia").value =
        transactionToEdit.frequencia || "";
      document.getElementById("edit-encerramento").value =
        transactionToEdit.dataEncerramento || "";
    } else {
      document.getElementById("edit-recorrente-nao").checked = true;
      document.getElementById("edit-opcoes-recorrentes").style.display =
        "none";
      document.getElementById("edit-frequencia").value = "";
      document.getElementById("edit-encerramento").value = "";
    }

    // Exibe o formulário de edição
    document.getElementById("form-edicao").style.display = "block";
  };

  // Listener para mostrar/esconder opções de recorrência no modal de edição
  document
    .querySelectorAll('input[name="edit-recorrente"]')
    .forEach((radio) => {
      radio.addEventListener("change", function () {
        const recorrenteDiv = document.getElementById(
          "edit-opcoes-recorrentes"
        );
        const encerramentoInput =
          document.getElementById("edit-encerramento");
        const frequenciaSelect = document.getElementById("edit-frequencia");

        if (recorrenteDiv) {
          if (this.value === "sim" && this.checked) {
            recorrenteDiv.style.display = "block";
          } else {
            recorrenteDiv.style.display = "none";
            if (encerramentoInput) encerramentoInput.value = "";
            if (frequenciaSelect) frequenciaSelect.value = "";
          }
        }
      });
    });

  // Função para salvar as alterações da transação editada
  window.saveEditedTransaction = function () {
    const id = parseInt(document.getElementById("edit-id").value);
    const tipo = document.getElementById("edit-tipo").value;
    const data = document.getElementById("edit-data").value;
    const valor = parseFloat(document.getElementById("edit-valor").value);
    const categoria = document.getElementById("edit-categoria").value;
    const descricao = document.getElementById("edit-descricao").value;
    const recorrente = document.getElementById("edit-recorrente-sim").checked;
    const frequencia = recorrente
      ? document.getElementById("edit-frequencia").value
      : null;
    const dataEncerramento =
      recorrente && document.getElementById("edit-encerramento").value
        ? document.getElementById("edit-encerramento").value
        : null;

    if (!data || isNaN(valor)) {
      alert("Data e Valor são obrigatórios para editar a transação.");
      return;
    }

    if (recorrente && !dataEncerramento) {
      alert("A Data de Encerramento é obrigatória para transações recorrentes.");
      return;
    }

    const allData = getFinancialData();

    let transactionList;
    if (tipo === "entrada") {
      transactionList = allData.entradas;
    } else if (tipo === "saida") {
      transactionList = allData.saidas;
    } else {
      alert("Tipo de transação inválido para edição.");
      return;
    }

    const index = transactionList.findIndex((item) => item.id === id);

    if (index !== -1) {
      transactionList[index] = {
        id: id,
        tipo: tipo,
        data: data,
        valor: valor,
        categoria: categoria,
        descricao: descricao,
        recorrente: recorrente,
        frequencia: frequencia,
        dataEncerramento: dataEncerramento,
      };
      saveFinancialData(allData);
      alert("Transação atualizada com sucesso!");
      closeModal();
    } else {
      alert("Transação não encontrada.");
    }
  };

  // Função para obter anos únicos das transações (e anos relevantes para o futuro)
  function getUniqueYears(data) {
    const years = new Set();
    const currentYear = new Date().getFullYear();

    const startDisplayYear = 2025; // Início do período para exibição
    const maxYear = currentYear + 5; // Fim do período para exibição

    for (let year = startDisplayYear; year <= maxYear; year++) {
      years.add(year.toString());
    }

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

    anoFiltroSelect.innerHTML = '<option value="">Todos os Anos</option>';
    sortedYears.forEach((year) => {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      anoFiltroSelect.appendChild(option);
    });

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
      const itemDate = new Date(item.data + "T12:00:00");
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

    const startDisplayYear = 2025; // Início do período para exibição
    const endDisplayYear = currentYear + 5; // Fim do período para exibição

    transactions.forEach((item) => {
      if (item.recorrente) {
        const originalDate = new Date(item.data + "T12:00:00");
        let currentDate = new Date(originalDate);

        // Ajusta a data inicial para o começo do período de exibição se a data original for anterior
        while (currentDate.getFullYear() < startDisplayYear) {
          if (item.frequencia === "mensal") {
            currentDate.setMonth(currentDate.getMonth() + 1);
          } else if (item.frequencia === "semanal") {
            currentDate.setDate(currentDate.getDate() + 7);
          } else if (item.frequencia === "diaria") {
            currentDate.setDate(currentDate.getDate() + 1);
          } else {
            // Para frequência personalizada ou desconhecida, sai do loop
            break;
          }
        }

        // Gera as transações recorrentes até a data de encerramento ou o final do período de exibição
        while (currentDate.getFullYear() <= endDisplayYear) {
          // Verifica se a transação já deveria ter encerrado
          if (
            item.dataEncerramento &&
            new Date(currentDate) > new Date(item.dataEncerramento + "T23:59:59")
          ) {
            break; // Se a data atual for após a data de encerramento, para de gerar
          }

          expandedTransactions.push({
            ...item,
            data: currentDate.toISOString().split("T")[0],
          });

          if (item.frequencia === "mensal") {
            currentDate.setMonth(currentDate.getMonth() + 1);
            // Manter o dia do mês se for o último dia do mês ou se o mês seguinte não tiver o mesmo dia
            if (currentDate.getDate() !== originalDate.getDate()) {
              currentDate.setDate(0); // Último dia do mês anterior
              currentDate.setDate(originalDate.getDate()); // Tenta voltar para o dia original
              if (
                currentDate.getMonth() !==
                (originalDate.getMonth() + 1) % 12
              ) {
                currentDate = new Date(
                  currentDate.getFullYear(),
                  (originalDate.getMonth() + 2) % 12,
                  0
                ); // Vai para o último dia do mês seguinte
              }
            }
          } else if (item.frequencia === "semanal") {
            currentDate.setDate(currentDate.getDate() + 7);
          } else if (item.frequencia === "diaria") {
            currentDate.setDate(currentDate.getDate() + 1);
          } else {
            break; // Para frequência personalizada ou desconhecida
          }

          // Adição de uma condição de saída para evitar loop infinito em casos inesperados
          if (currentDate > new Date(endDisplayYear + 1, 0, 1)) break; // Limite superior para evitar loops infinitos
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
      const formattedDate = new Date(item.data + "T12:00:00").toLocaleDateString(
        "pt-BR"
      );
      const formattedValue = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(item.valor);
      const description = item.descricao ? ` - ${item.descricao}` : "";
      const category =
        item.categoriaText
          ? item.categoriaText
          : item.categoria
            ? item.categoria
            : "Sem Categoria";

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

    populateMainFilters();

    const allData = getFinancialData();
    const anoFiltro = document.getElementById("ano-filtro").value;
    const mesFiltro = document.getElementById("mes-filtro").value;

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
      const dadosDoUsuario = JSON.parse(
        localStorage.getItem(emailUsuarioLogado)
      );

      if (dadosDoUsuario) {
        dadosDoUsuario.chartData = {
          entradas: totalEntradas,
          saidas: totalSaidas,
        };

        // Salvar também as transações filtradas do mês atual com tipo padronizado
        dadosDoUsuario.entradas = entradasParaGrafico.map((t) => ({
          ...t,
          tipo: "entrada",
          categoriaText: t.categoriaText, // opcional: manter para exibição posterior
        }));

        dadosDoUsuario.saidas = saidasParaGrafico.map((t) => ({
          ...t,
          tipo: "saida",
          categoriaText: t.categoriaText, // opcional: manter para exibição posterior
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
      const date = new Date(item.data + "T12:00:00"); // Corrigido aqui
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
      const date = new Date(item.data + "T12:00:00"); // Corrigido aqui
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
          plugins: {
            legend: {
              display: false,
            },
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
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      }
    );
  };

  renderDashboard();

  window.onclick = function (event) {
    const dropdownMenu = document.getElementById("dropdownMenu");
    const menuIcon = document.querySelector(".menu-icon");
    const mobileSearchBar = document.getElementById('mobileSearchBar'); // Get mobile search bar

    if (
      dropdownMenu &&
      menuIcon &&
      !menuIcon.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.style.display = "none";
    }

    // Close modal if click outside modal and not on a button that opens a modal
    // Also, close mobile search bar if click outside
    if (
      !event.target.closest(".modal") &&
      !event.target.matches(".Historico") &&
      !event.target.matches(".Entradas") &&
      !event.target.matches(".Saidas") &&
      !event.target.matches(".Editar") &&
      !event.target.matches(".Remover") &&
      !event.target.matches(".close-button") &&
      !event.target.closest('.search-mobile-icon') && // Exclude clicking the search icon
      !event.target.closest('#mobileSearchBar') // Exclude clicking inside the mobile search bar
    ) {
      const modals = document.querySelectorAll(".modal");
      modals.forEach((modal) => {
        if (modal.style.display === "block") {
          closeModal();
        }
      });
      // Close mobile search bar if it's open and click is outside
      if (mobileSearchBar && mobileSearchBar.style.display === 'block') {
          mobileSearchBar.style.display = 'none';
      }
    }
  };

  // Função para delogar o usuário
  function sair() {
    localStorage.removeItem("usuarioLogado"); // Remove o usuário logado
    localStorage.removeItem("currentUser"); // Remove o usuário atual
    window.location.href = "/src/login/login.html";
  }

  // Adiciona o evento de clique ao botão de sair
  const botaoSair = document.getElementById("botao-sair");
  if (botaoSair) {
    botaoSair.addEventListener("click", function (e) {
      e.preventDefault();
      sair();
    });
  }

  // New: Mobile search bar functionality
  const mobileSearchIcon = document.querySelector('.search-mobile-icon');
  const mobileSearchBar = document.getElementById('mobileSearchBar');

  if (mobileSearchIcon && mobileSearchBar) { // Ensure elements exist before adding listeners
    mobileSearchIcon.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior
      event.stopPropagation(); // Stop propagation to prevent document click from immediately closing it
      // Toggle visibility
      mobileSearchBar.style.display =
        mobileSearchBar.style.display === 'block' ? 'none' : 'block';
    });

    // New: Hide mobile search bar on window resize to larger screens
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 861 && mobileSearchBar.style.display === 'block') {
        mobileSearchBar.style.display = 'none';
      }
    });
  }
});

// New: Global function for mobile search button (called from HTML onclick)
function buscarMobile() {
    const termo = document.getElementById('mobileSearchInput').value.trim();
    if (termo !== "") {
        const encodedTermo = encodeURIComponent(termo);
        window.location.href = `/src/resultado-de-pesquisa/resultado-de-pesquisa.html?q=${encodedTermo}`;
    }
}