document.addEventListener("DOMContentLoaded", function () {
  // =================== ICONE DE VOLTAR ===================
  const voltar = document.getElementById("botaovoltar");
  if (voltar) {
    voltar.addEventListener("click", function () {
      history.back();
    });
  }

  // =================== VARIÁVEIS E CONFIGS ===================
  const monthNames = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];
  let currentDate = new Date();

  // =================== Onde fica salvo os dados do dash ===========
  const dadosPorMes = {
  };
  const cores = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];
  const labelsCategorias = ['Entrada', 'Saida', 'Investimento', 'Emergência', 'Outros'];

  // =================== FUNÇÕES DE INTERFACE ===================
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

  // =================== GRÁFICO DE PIZZA ===================
  const ctx = document.getElementById("graficoPizza").getContext("2d");
  let graficoPizza = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: labelsCategorias,
      datasets: [{
        data: dadosPorMes[currentDate.getMonth()],
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
    const mes = currentDate.getMonth();
    graficoPizza.data.datasets[0].data = dadosPorMes[mes];
    graficoPizza.update();
  }

  // =================== MODAIS ===================
  window.openModal = function (tipo) {
    closeAllModals();
    document.getElementById(`modal-${tipo}`).style.display = 'block';
    document.getElementById("overlay").style.display = 'block';
  };

  window.closeModal = function () {
    closeAllModals();
    document.getElementById("overlay").style.display = 'none';
  };

  function closeAllModals() {
    document.querySelectorAll(".modal").forEach(modal => {
      modal.style.display = "none";
    });
  }

  // =================== INICIALIZAÇÃO ===================
  updateMonthDisplay();
});
