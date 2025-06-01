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


    // verifica  se usuario esta logado para apresentar botao de minha area 

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

    // --- FUNÇÃO SALVAR ENTRADA (MODIFICADA) ---
    window.salvarEntrada = function () {
        const dataInput = document.getElementById("entrada-data");
        const valorInput = document.getElementById("entrada-valor");
        const categoriaSelect = document.getElementById("entrada-categoria");
        const descricaoInput = document.getElementById("entrada-descricao");
        const recorrenteSim =
            document.getElementById("entrada-recorrente-sim").checked;
        const frequenciaSelect = document.getElementById("entrada-frequencia");

        if (!dataInput.value || !valorInput.value) {
            alert("Data e Valor são obrigatórios para entradas.");
            return;
        }

        // --- INÍCIO DA CORREÇÃO DE DATA ---
        const dataSelecionada = dataInput.value; // Ex: "2025-06-01"
        // Cria um objeto Date interpretando a data selecionada como meia-noite no fuso horário local.
        const dataObjeto = new Date(dataSelecionada + 'T00:00:00');
        // Converte essa data local para uma string ISO 8601 em UTC para armazenamento consistente.
        const dataParaSalvar = dataObjeto.toISOString();
        // --- FIM DA CORREÇÃO DE DATA ---

        const novaEntrada = {
            id: Date.now(),
            tipo: "entrada",
            data: dataParaSalvar, // Salva a data corrigida no formato UTC
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

    // --- FUNÇÃO SALVAR SAÍDA (MODIFICADA) ---
    window.salvarSaida = function () {
        const dataInput = document.getElementById("saida-data");
        const valorInput = document.getElementById("saida-valor");
        const categoriaSelect = document.getElementById("saida-categoria");
        const descricaoInput = document.getElementById("saida-descricao");
        const recorrenteSim =
            document.getElementById("saida-recorrente-sim").checked;
        const frequenciaSelect = document.getElementById("saida-frequencia");

        if (!dataInput.value || !valorInput.value) {
            alert("Data e Valor são obrigatórios para saídas.");
            return;
        }

        // --- INÍCIO DA CORREÇÃO DE DATA ---
        const dataSelecionada = dataInput.value; // Ex: "2025-06-01"
        // Cria um objeto Date interpretando a data selecionada como meia-noite no fuso horário local.
        const dataObjeto = new Date(dataSelecionada + 'T00:00:00');
        // Converte essa data local para uma string ISO 8601 em UTC para armazenamento consistente.
        const dataParaSalvar = dataObjeto.toISOString();
        // --- FIM DA CORREÇÃO DE DATA ---

        const novaSaida = {
            id: Date.now(),
            tipo: "saida",
            data: dataParaSalvar, // Salva a data corrigida no formato UTC
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
                item.tipo === "saida" ?
                `- R$ ${item.valor.toFixed(2)}` :
                `+ R$ ${item.valor.toFixed(2)}`;
            const description = item.descricao ? ` - ${item.descricao}` : "";
            const category = item.categoria ? ` (${item.categoria})` : "";

            // A exibição da data já está correta, usando new Date(item.data)
            // que converte a string UTC para o fuso horário local.
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
        const currentYear = new Date().getFullYear();

        const startDisplayYear = 2023;
        const maxYear = currentYear + 2;

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

        historicoAnoFiltroSelect.innerHTML = '<option value="">Todos os Anos</option>';
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
            // Cria o objeto Date diretamente da string ISO salva (que é UTC)
            const itemDate = new Date(item.data); 
            const itemYear = itemDate.getFullYear().toString();
            // getMonth() retorna 0-11, então +1 para 1-12
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

        const startDisplayYear = 2023;
        const endDisplayYear = currentYear + 2;

        transactions.forEach((item) => {
            if (item.recorrente) {
                // Ao criar a data original, interpretá-la como UTC
                const originalDate = new Date(item.data); // item.data já é UTC
                let currentDate = new Date(originalDate);

                // Avança a data para o ano de início de exibição, se necessário
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
                    expandedTransactions.push({
                        ...item,
                        // Salva a data expandida novamente como string ISO (UTC)
                        data: currentDate.toISOString().split("T")[0],
                    });

                    if (item.frequencia === "mensal") {
                        const nextMonth = currentDate.getMonth() + 1;
                        currentDate.setMonth(nextMonth);
                        // Garante que se a data original for 31 e o próximo mês não tiver 31,
                        // ela não avance para o próximo mês. Ex: 31 Jan -> 28 Fev, não 3 Mar.
                        if (currentDate.getMonth() !== (nextMonth % 12)) {
                            currentDate.setDate(0); // Último dia do mês anterior
                        }
                    } else if (item.frequencia === "semanal") {
                        currentDate.setDate(currentDate.getDate() + 7);
                    } else if (item.frequencia === "diaria") {
                        currentDate.setDate(currentDate.getDate() + 1);
                    } else {
                        break;
                    }
                    if (currentDate > new Date(endDisplayYear + 1, 0, 1)) break; // Evita loop infinito
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
            // new Date(item.data) já converte a string UTC para o fuso horário local para exibição.
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

        //add para localStorage
        const chartData = {
            entradas: totalEntradas,
            saidas: totalSaidas,
        };

        localStorage.setItem("chartData", JSON.stringify(chartData));

        chartInstances.pieChart = new Chart(
            document.getElementById("pieChart").getContext("2d"), {
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
                transacoesPorMes[monthKey] = {
                    entradas: 0,
                    saidas: 0
                };
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
                transacoesPorMes[monthKey] = {
                    entradas: 0,
                    saidas: 0
                };
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
            const dataMes = transacoesPorMes[monthKey] || {
                entradas: 0,
                saidas: 0
            };
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
            document.getElementById("lineChart").getContext("2d"), {
                type: "line",
                data: {
                    labels: labelsMeses,
                    datasets: [{
                        label: "Saldo Acumulado",
                        data: saldosMensais,
                        borderColor: "#024dae",
                        backgroundColor: "rgba(2, 77, 174, 0.2)",
                        fill: true,
                        tension: 0.1,
                    }, ],
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
            document.getElementById("comparativeBarChart").getContext("2d"), {
                type: "bar",
                data: {
                    labels: labelsMeses,
                    datasets: [{
                        label: "Entradas",
                        data: entradasMensais,
                        backgroundColor: "#4CAF50",
                    }, {
                        label: "Saídas",
                        data: saidasMensais,
                        backgroundColor: "#F44336",
                    }, ],
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

    renderDashboard();
});

function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
}

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