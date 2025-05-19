document.addEventListener("DOMContentLoaded", function () {
  const voltar = document.getElementById("botaovoltar");
  if (voltar) {
    voltar.addEventListener("click", () => history.back());
  }

  window.openModal = function (tipo) {
    closeAllModals();
    const modal = document.getElementById(`modal-${tipo}`);
    modal.style.display = 'block';
    document.getElementById("overlay").style.display = 'block';

    // Atualiza o input data para o currentDate no formato yyyy-mm-dd
    const inputData = modal.querySelector("input.data");
    if (inputData) {
      inputData.value = currentDate.toISOString().slice(0, 10);
    }
  };

  window.closeModal = function () {
    closeAllModals();
    document.getElementById("overlay").style.display = 'none';
  };

  function closeAllModals() {
    document.querySelectorAll(".modal").forEach(modal => modal.style.display = "none");
  }

  updateMonthDisplay();

  // Evento para atualizar currentDate e gráfico ao mudar a data pelo input calendar
  document.querySelectorAll('input.data').forEach(inputData => {
    inputData.addEventListener('change', (event) => {
      const novaData = new Date(event.target.value);
      if (!isNaN(novaData)) {
        currentDate = novaData;
        updateMonthDisplay();
        updateChart();
      }
    });
  });
});

// Nome dos meses em português
const monthNames = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

let currentDate = new Date();

// Recuperar dados do localStorage ou iniciar vazio
const dadosPorMes = JSON.parse(localStorage.getItem("dadosPorMes")) || {};

// Categorias e cores fixas
const cores = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];
const labelsCategorias = ['Entrada', 'Saida', 'Investimento', 'Emergência', 'Outros'];

function updateMonthDisplay() {
  const mes = currentDate.getMonth();
  const ano = currentDate.getFullYear();
  const texto = `${monthNames[mes]} de ${ano}`;
  document.getElementById("month-display").textContent = texto;
  document.getElementById("month-name").textContent = texto;
}

window.changeMonth = function (direction) {
  currentDate.setMonth(currentDate.getMonth() + direction);
  updateMonthDisplay();
  updateChart();
};

// Inicializa gráfico
const ctx = document.getElementById("graficoPizza").getContext("2d");
let graficoPizza = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: labelsCategorias,
    datasets: [{
      data: [0, 0, 0, 0, 0],
      backgroundColor: cores,
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      tooltip: {
        enabled: true
      }
    }
  }
});

function updateChart() {
  const mesAnoKey = getMesAnoKey(currentDate);
  const dadosMes = dadosPorMes[mesAnoKey] || [0, 0, 0, 0, 0];
  graficoPizza.data.datasets[0].data = dadosMes;
  graficoPizza.update();
}

// Função helper para gerar chave mês-ano para salvar dados
function getMesAnoKey(date) {
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
}

// Salvar dados no localStorage e atualizar gráfico
window.salvarDados = function (tipo) {
  const modal = document.getElementById(`modal-${tipo}`);

  let valorInput, selectCategoria, valor, categoria;

  if (tipo === 'economias') {
    valorInput = modal.querySelector("input.valor");
    valor = parseFloat(valorInput.value) || 0;
    categoria = 'Outros';
  } else {
    valorInput = modal.querySelector("input.entrada, input[type='number']");
    selectCategoria = modal.querySelector("select");
    valor = parseFloat(valorInput.value) || 0;
    categoria = selectCategoria.value;
  }

  if (!categoria || valor <= 0) {
    alert("Por favor, selecione uma categoria válida e informe um valor maior que zero.");
    return;
  }

  const mesAnoKey = getMesAnoKey(currentDate);
  if (!dadosPorMes[mesAnoKey]) dadosPorMes[mesAnoKey] = [0, 0, 0, 0, 0];

  const indexCategoria = labelsCategorias.indexOf(categoria);
  if (indexCategoria < 0) {
    alert("Categoria inválida.");
    return;
  }

  if (tipo === 'saidas') {
    const indexEntrada = labelsCategorias.indexOf('Entrada');
    // Diminui Entrada, mas nunca fica negativo
    const saldoAtual = dadosPorMes[mesAnoKey][indexEntrada];
    const valorParaDiminuir = Math.min(valor, saldoAtual);
    dadosPorMes[mesAnoKey][indexEntrada] = saldoAtual - valorParaDiminuir;

    dadosPorMes[mesAnoKey][indexCategoria] += valor;
  } else if (tipo === 'entradas') {
    const indexSaida = labelsCategorias.indexOf('Saida');
    // Diminui Saída, mas nunca fica negativo
    const saldoAtual = dadosPorMes[mesAnoKey][indexSaida];
    const valorParaDiminuir = Math.min(valor, saldoAtual);
    dadosPorMes[mesAnoKey][indexSaida] = saldoAtual - valorParaDiminuir;

    dadosPorMes[mesAnoKey][indexCategoria] += valor;
  } else {
    dadosPorMes[mesAnoKey][indexCategoria] += valor;
  }

  localStorage.setItem("dadosPorMes", JSON.stringify(dadosPorMes));
  updateChart();

  if (valorInput) valorInput.value = "";
  if (selectCategoria) selectCategoria.selectedIndex = 0;
  window.closeModal();
};



// Inicializa gráfico ao carregar a página
updateChart();
