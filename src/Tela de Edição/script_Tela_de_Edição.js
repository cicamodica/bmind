document.addEventListener("DOMContentLoaded", function () {
    // =================== ICONE DE VOLTAR ===================
    const voltar = document.getElementById("botaovoltar");
    if (voltar) {
        voltar.addEventListener("click", function () {
            history.back();
        });
    }

    
    // Opções no dashboard //
    function updateOptionDisplay(opcao) {
        const displayElement = document.getElementById("month-display");
        const nameElement = document.getElementById("month-name");
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
        if (nameElement) {
            nameElement.textContent = displayText;
        }
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
            currentOption = 1;
        }

        currentOption += direction;

        if (currentOption < 1) {
            currentOption = 4;
        } else if (currentOption > 4) {
            currentOption = 1;
        }
        updateOptionDisplay(currentOption);
    };

    updateOptionDisplay(1); // Inicializa a exibição com "Salário"

    // =================== MODAIS ===================
    function openModal(tipo) {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById(`modal-${tipo}`).style.display = 'block';
        
    }

    window.openModal = openModal; // Tornar a função openModal acessível globalmente
  window.closeModal = closeModal; 
    function closeModal() {
        document.getElementById('overlay').style.display = 'none';
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }
});

document.querySelectorAll("input[type='radio'][value='valor1']").forEach(radio => {
    radio.addEventListener("change", function () {
        const modal = radio.closest(".modal");
        const recorrenteDiv = modal.querySelector(".opcoes-recorrentes");
        if (recorrenteDiv) {
            recorrenteDiv.style.display = "block";
        }
    });
});

// Esconder opções recorrentes ao selecionar "NÃO"
document.querySelectorAll("input[type='radio'][value='valor2']").forEach(radio => {
    radio.addEventListener("change", function () {
        const modal = radio.closest(".modal");
        const recorrenteDiv = modal.querySelector(".opcoes-recorrentes");
        if (recorrenteDiv) {
            recorrenteDiv.style.display = "none";
        }
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const botaoSalvar = document.querySelector("#modal-entradas button"); // Botão de salvar
    const inputData = document.querySelector("#modal-entradas .data"); // Campo de data
    const inputValor = document.querySelector("#modal-entradas .entrada"); // Campo de valor de entrada
    const selectCategoria = document.querySelector("#modal-entradas #opcoes"); // Categoria selecionada

    if (botaoSalvar) {
        botaoSalvar.addEventListener("click", function () {
            const dadosEntrada = {
                data: inputData.value,
                valor: inputValor.value,
                categoria: selectCategoria.value
            };

            localStorage.setItem("entradaDados", JSON.stringify(dadosEntrada)); // Armazena os dados

            alert("Dados salvos com sucesso!"); // Confirmação ao usuário
        });
    }

    // Recupera os dados no dashboard
    const dadosRecuperados = localStorage.getItem("entradaDados");
    if (dadosRecuperados) {
        const dados = JSON.parse(dadosRecuperados);
        console.log("Dados carregados:", dados); // Apenas para teste, pode exibir no dashboard
    }
});






const defaultData = {
  grafico1: {
    type: 'bar',
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março'],
      datasets: [{
        label: 'Entradas',
        data: [1000, 1200, 900],
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }]
    }
  },
  grafico2: {
    type: 'line',
    data: {
      labels: ['Abril', 'Maio', 'Junho'],
      datasets: [{
        label: 'Saídas',
        data: [800, 950, 700],
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false
      }]
    }
  },
  grafico3: {
    type: 'pie',
    data: {
      labels: ['Aluguel', 'Comida', 'Transporte'],
      datasets: [{
        label: 'Gastos',
        data: [400, 300, 300],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
      }]
    }
  },
  grafico4: {
    type: 'radar',
    data: {
      labels: ['Planejamento', 'Gastos Fixos', 'Investimentos', 'Extras'],
      datasets: [{
        label: 'Distribuição',
        data: [3, 4, 2, 5],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)'
      }]
    }
  }
};

// Salvar no localStorage se ainda não tiver
if (!localStorage.getItem('graficos')) {
  localStorage.setItem('graficos', JSON.stringify(defaultData));
}

// Carrega os dados salvos
const savedData = JSON.parse(localStorage.getItem('graficos'));

// Cria os 4 gráficos
new Chart(document.getElementById('grafico1'), savedData.grafico1);
new Chart(document.getElementById('grafico2'), savedData.grafico2);
new Chart(document.getElementById('grafico3'), savedData.grafico3);
new Chart(document.getElementById('grafico4'), savedData.grafico4);