/*ícone de voltar*/
document.addEventListener("DOMContentLoaded", function () {
  /*Garantir que o código seja ececutado depois da página estiver completamente carregado */ const voltar =
    document.getElementById("botaovoltar");

  if (voltar) {
    voltar.addEventListener("click", function () {
      /*Função de clicar */ history.back(); /*Volta para a pag anterior */
    });
  }
});

//INÍCIO DA FUNÇÃO DE SUBMIT DO BOTÃO DE CONFIRMAR

//Essa parte abaixo serve para ligar o JavaScript ao HTML. Ele pega os elementos da página pelos ids e guarda em variáveis pra poder usar depois (formLogin = formulário inteiro; inputEmail = campo de e-mail e
// inputPassword = campo de senha)
const formValidacao = document.getElementById("form-validacao");
const inputCodigo = document.getElementById("form-input-codigo");
const mensagemErro = document.getElementById("form-input-message");

mensagemErro.style.display = "none"; // Garante que a mensagem de erro começa oculta

//Abaixo é a parte de quando o formulário for enviado. Significa: “Quando o usuário tentar enviar o formulário, execute essa função” (event.preventDefault() previne o recarregamento da página, o refresh)
formValidacao.addEventListener("submit", function (event) {
  //.addEventListener adiciona um ouvinte para o elemento HTML (form, input...) quando um evento for disparado (submit), ou seja, quando o usuário apertar o botão (Confirmar) que possui o type = submit, a função sera executada
  event.preventDefault();

  const codigoDigitado = inputCodigo.value.trim();
  const emailCadastrado = localStorage.getItem(codigoDigitado);

  if (emailCadastrado != null) {
    const dados = JSON.parse(localStorage.getItem(emailCadastrado));
    dados.validada = true;
    localStorage.setItem(emailCadastrado, JSON.stringify(dados)); // Salva no localStorage como JSON string

    mensagemErro.style.display = "none";
    alert("Código validado com sucesso!");
    window.location.href = "/src/login/login.html";
  } else {
    mensagemErro.style.display = "inline";
  }
});

inputCodigo.addEventListener("input", function () {
  //.addEventListener adiciona um ouvinte para o elemento HTML (form, input...) quando um evento do tipo input for disparado, ou seja, quando o usuário começar a digitar no campo e-mail, a função sera executada
  mensagemErro.style.display = "none"; //Isso faz com que a mensagem de erro suma (display = none)
});

//INÍCIO DA FUNÇÃO DE APARECER A SENHA

function togglePassword() {
  const input = document.getElementById("form-input-codigo");
  input.type = input.type === "password" ? "text" : "password";
}
