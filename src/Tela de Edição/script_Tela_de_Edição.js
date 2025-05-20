document.addEventListener("DOMContentLoaded", function () {
    // =================== ICONE DE VOLTAR ===================
    const voltar = document.getElementById("botaovoltar");
    if (voltar) {
        voltar.addEventListener("click", function () {
            history.back();
        });
    }

    // =================== Funções do Dashboard (opções de mês/categoria) ===================
    function updateOptionDisplay(opcao) {
        const displayElement = document.getElementById("month-display");
        const optionsText = {
            1: "Salário",
            2: "Gastos",
            3: "Investimentos",
            4: "Lucros"
        };
        const displayText = optionsText[opcao] || `Opção ${opcao}`;

        if (displayElement) {
            displayElement.textContent = displayText;
        }
        // Não há month-name no HTML, então essa parte não é necessária
    }

    window.changeMonth = function (direction) {
        const displayElement = document.getElementById("month-display");
        if (!displayElement) return;

        let currentOptionText = displayElement.textContent;
        let currentOption;
        const reverseOptionsText = {
            "Salário": 1,
            "Gastos": 2,
            "Investimentos": 3,
            "Lucros": 4
        };

        currentOption = reverseOptionsText[currentOptionText];

        if (isNaN(currentOption)) {
            currentOption = 1; // Default to Salário if not recognized
        }

        currentOption += direction;

        if (currentOption < 1) {
            currentOption = 4;
        } else if (currentOption > 4) {
            currentOption = 1;
        }
        updateOptionDisplay(currentOption);
        updateChartsBasedOnOption(currentOption); // Chama a função para atualizar os gráficos
    };

    updateOptionDisplay(1); // Inicializa a exibição com "Salário"

    // =================== MODAIS ===================
    window.openModal = function (tipo) {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById(`modal-${tipo}`).style.display = 'block';
    };

    window.closeModal = function () {
        document.getElementById('overlay').style.display = 'none';
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    };

    // Lógica para mostrar/esconder opções recorrentes
    document.querySelectorAll("input[type='radio'][name='opcoes']").forEach(radio => {
        radio.addEventListener("change", function () {
            const modal = radio.closest(".modal");
            // Usar o ID correto para a div de recorrência específica de entradas
            const recorrenteDiv = modal.querySelector("#opcoes-recorrentes");
            if (recorrenteDiv) {
                if (radio.value === "valor1") { // SIM
                    recorrenteDiv.style.display = "block";
                } else { // NÃO
                    recorrenteDiv.style.display = "none";
                }
            }
        });
    });

    // =================== SALVAR DADOS E ATUALIZAR GRÁFICOS ===================

    // Inicializa dados dos gráficos se não existirem
    function getChartDataFromLocalStorage() {
        let savedData = localStorage.getItem('appFinanceData');
        if (savedData) {
            return JSON.parse(savedData);
        }
        return {
            entradas: [],
            saidas: [],
            economias: []
        };
    }

    // Salvar dados no localStorage
    function saveChartDataToLocalStorage(data) {
        localStorage.setItem('appFinanceData', JSON.stringify(data));
    }

    // Adicionar nova entrada/saída/economia aos dados
    function addTransaction(type, transaction) {
        let appData = getChartDataFromLocalStorage();
        appData[type].push(transaction);
        saveChartDataToLocalStorage(appData);
        renderCharts(); // Redesenha os gráficos após adicionar a transação
    }

    // Botão Salvar para Entradas
    const botaoSalvarEntradas = document.querySelector("#modal-entradas button");
    if (botaoSalvarEntradas) {
        botaoSalvarEntradas.addEventListener("click", function () {
            const inputData = document.querySelector("#modal-entradas .data");
            const inputValor = document.querySelector("#modal-entradas .entrada");
            const selectCategoria = document.querySelector("#modal-entradas #opcoes");
            const isRecorrente = document.querySelector("#entrada-opcao1").checked;
            const tipoRecorrencia = document.querySelector("#tipoRecorrencia") ? document.querySelector("#tipoRecorrencia").value : '';

            const dadosEntrada = {
                data: inputData.value,
                valor: parseFloat(inputValor.value), // Converter para número
                categoria: selectCategoria.value,
                recorrente: isRecorrente,
                tipoRecorrencia: tipoRecorrencia
            };

            addTransaction('entradas', dadosEntrada);
            closeModal(); // Fechar o modal após salvar
            alert("Entrada salva com sucesso!");
        });
    }

    // Botão Salvar para Saídas (você precisará adaptar isso)
    const botaoSalvarSaidas = document.querySelector("#modal-saidas button");
    if (botaoSalvarSaidas) {
        botaoSalvarSaidas.addEventListener("click", function () {
            const inputData = document.querySelector("#modal-saidas .data");
            const inputValor = document.querySelector("#modal-saidas .entrada"); // O nome da classe no HTML é 'entrada' para saídas também
            const selectCategoria = document.querySelector("#modal-saidas #opcoes");
            // Adapte para a lógica de recorrência das saídas se houver
            // const isRecorrente = document.querySelector("#saida-opcao1").checked;
            // const tipoRecorrencia = document.querySelector("#saida-tipoRecorrencia") ? document.querySelector("#saida-tipoRecorrencia").value : '';

            const dadosSaida = {
                data: inputData.value,
                valor: parseFloat(inputValor.value),
                categoria: selectCategoria.value,
                // recorrente: isRecorrente,
                // tipoRecorrencia: tipoRecorrencia
            };

            addTransaction('saidas', dadosSaida);
            closeModal();
            alert("Saída salva com sucesso!");
        });
    }

    // Botão Salvar para Economias (você precisará adaptar isso)
    const botaoSalvarEconomias = document.querySelector("#modal-economias button");
    if (botaoSalvarEconomias) {
        botaoSalvarEconomias.addEventListener("click", function () {
            const inputDescricao = document.querySelector("#modal-economias .descrição");
            const inputValor = document.querySelector("#modal-economias .valor");

            const dadosEconomia = {
                descricao: inputDescricao.value,
                valor: parseFloat(inputValor.value)
            };

            addTransaction('economias', dadosEconomia);
            closeModal();
            alert("Economia salva com sucesso!");
        });
    }

    // =================== GRÁFICOS CHART.JS ===================

    // Variável global para armazenar as instâncias dos gráficos
    let myCharts = {};

    function renderCharts() {
        let appData = getChartDataFromLocalStorage();

        // Dados para o gráfico de Entradas (exemplo)
        const entradasData = appData.entradas.reduce((acc, entry) => {
            const month = new Date(entry.data).toLocaleString('pt-BR', { month: 'long' });
            acc[month] = (acc[month] || 0) + entry.valor;
            return acc;
        }, {});

        const entradasLabels = Object.keys(entradasData);
        const entradasValues = Object.values(entradasData);

        // Destruir gráficos existentes antes de criar novos
        for (const chartId in myCharts) {
            if (myCharts[chartId]) {
                myCharts[chartId].destroy();
            }
        }

        // Gráfico 1: Entradas por Mês (Exemplo de gráfico de barras)
        myCharts.grafico1 = new Chart(document.getElementById('grafico1'), {
            type: 'bar',
            data: {
                labels: entradasLabels,
                datasets: [{
                    label: 'Entradas por Mês',
                    data: entradasValues,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Gráfico 2: Saídas por Mês (Exemplo de gráfico de linha)
        const saidasData = appData.saidas.reduce((acc, entry) => {
            const month = new Date(entry.data).toLocaleString('pt-BR', { month: 'long' });
            acc[month] = (acc[month] || 0) + entry.valor;
            return acc;
        }, {});

        const saidasLabels = Object.keys(saidasData);
        const saidasValues = Object.values(saidasData);

        myCharts.grafico2 = new Chart(document.getElementById('grafico2'), {
            type: 'line',
            data: {
                labels: saidasLabels,
                datasets: [{
                    label: 'Saídas por Mês',
                    data: saidasValues,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    fill: false
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Gráfico 3: Economias (exemplo de gráfico de pizza)
        const economiasLabels = appData.economias.map(e => e.descricao);
        const economiasValues = appData.economias.map(e => e.valor);

        myCharts.grafico3 = new Chart(document.getElementById('grafico3'), {
            type: 'pie',
            data: {
                labels: economiasLabels,
                datasets: [{
                    label: 'Economias',
                    data: economiasValues,
                    backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff']
                }]
            },
            options: {
                responsive: true,
            }
        });


        // Gráfico 4: Balanço Geral (Exemplo de gráfico de radar)
        // Isso é mais complexo e pode exigir mais lógica para agregar entradas e saídas
        // Por enquanto, vou usar um exemplo estático similar ao seu, mas o ideal seria calcular
        // o balanço mensal ou por categoria.
        const totalEntradas = appData.entradas.reduce((sum, entry) => sum + entry.valor, 0);
        const totalSaidas = appData.saidas.reduce((sum, entry) => sum + entry.valor, 0);
        const totalEconomias = appData.economias.reduce((sum, entry) => sum + entry.valor, 0);
        const balancoGeral = totalEntradas - totalSaidas - totalEconomias;

        myCharts.grafico4 = new Chart(document.getElementById('grafico4'), {
            type: 'radar',
            data: {
                labels: ['Entradas', 'Saídas', 'Economias', 'Balanço Atual'],
                datasets: [{
                    label: 'Visão Geral Financeira',
                    data: [totalEntradas, totalSaidas, totalEconomias, balancoGeral > 0 ? balancoGeral : 0], // Evita valores negativos para balanço na exibição de radar
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Chamada inicial para renderizar os gráficos quando a página carrega
    renderCharts();

    // Função para atualizar os gráficos com base na opção selecionada (Salário, Gastos, etc.)
    function updateChartsBasedOnOption(option) {
        // Esta função precisaria de mais lógica se os gráficos precisarem mudar
        // drasticamente com base na opção do "mês". Por exemplo, se "Gastos"
        // significa que você quer um detalhe de gastos por categoria, etc.
        // Por enquanto, vamos apenas renderizar os gráficos novamente,
        // mas você pode filtrar os dados aqui.
        renderCharts();
    }
});