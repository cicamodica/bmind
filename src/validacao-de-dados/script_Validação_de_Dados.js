/*icone de voltar*/
document.addEventListener('DOMContentLoaded', function () {/*Garantir que o código seja ececutado depois da página estiver completamente carregado */
  const voltar = document.getElementById('botaovoltar');

  if (voltar) {
    voltar.addEventListener('click', function () {/*Função de clicar */
      history.back(); /*Volta para a pag anterior */
    });
  }
});


/*Botão de Confirmar o código*/


document.addEventListener('DOMContentLoaded', function () {/*Garantir que o código seja ececutado depois da página estiver completamente carregado */
 
  /*Defini as constantes que eu vou usar */
  const formulario = document.querySelector('.formulario-validacao');
  const inputCodigo = document.querySelector('.input-codigo');
  const botaoConfirmar = document.querySelector('.input-confirmar');
  const mensagemErro = document.createElement('div');
  const senhaCorreta = '123456';

  mensagemErro.classList.add('mensagem-erro');/*Coloquei isso pra editar no css */
  mensagemErro.textContent = ''; /*começa vazio*/
  
    formulario.insertBefore(mensagemErro, botaoConfirmar);/*aparecer a menssagem quando der erro*/
  

  formulario.addEventListener('submit', function (event) {/*Ação de confirmar*/
    event.preventDefault();
    const senhaDigitada = inputCodigo.value.trim();/*Garantir que a senha digitada é correta */

    if (senhaDigitada === senhaCorreta) {/*Ação pra senha digitada, caso correta */
      mensagemErro.textContent = '';/* limpa a mensagem*/
      window.location.href = '/src/main/main.html';/*próxima página */
    } else {/*Caso esteja errado */
      mensagemErro.textContent = 'Código incorreto';/*Mensagem que vai aparecer */
      inputCodigo.value = '';/*Quando o usuário apertar em confirmar a caixa de texto vai limpar o código. 
      Serve pra quando a pessoa errar o código ela poder colocar de novo sem precisar apagar */
      
    }
  });
});