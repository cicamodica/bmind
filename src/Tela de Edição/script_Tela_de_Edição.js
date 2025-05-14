/*icone de voltar*/
document.addEventListener('DOMContentLoaded', function () {/*Garantir que o código seja ececutado depois da página estiver completamente carregado */
    const voltar = document.getElementById('botaovoltar');
  
    if (voltar) {
      voltar.addEventListener('click', function () {/*Função de clicar */
        history.back(); /*Volta para a pag anterior */
      });
    }
  });

function openModal(tipo) {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById(`modal-${tipo}`).style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('overlay').style.display = 'none';
    document.querySelectorAll('.modal').forEach(modal => {
      modal.style.display = 'none';
    });
  }
/* Função MonthNames */

    document.addEventListener("DOMContentLoaded", function () {
  const monthDisplay = document.getElementById("month-display");
  const MonthNameText = document.getElementById("month-name");
  const monthPanel = document.getElementById("month-info");

  const monthNames = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];

  let currentDate = new Date();

  function updateMonthDisplay() {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const fullMonth = `${monthNames[month]} de ${year}`;

    monthDisplay.textContent = fullMonth;
    MonthNameText.textContent = fullMonth;
    monthPanel.innerHTML = `Exibindo dados de <strong>${fullMonth}</strong>.`;
  }

  window.changeMonth = function (direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    updateMonthDisplay();
  };

  updateMonthDisplay();
});
