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