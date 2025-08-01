//Essa parte abaixo serve para ligar o JavaScript ao HTML. Ele pega os elementos da página pelos ids e guarda em variáveis pra poder usar depois (formLogin = formulário inteiro; inputEmail = campo de e-mail e
// inputPassword = campo de senha)
const formLogin = document.getElementById("form-login");
const inputPassword = document.getElementById("form-password");
const inputEmail = document.getElementById("form-email");
const formInputMessage = document.getElementById("form-input-message");

//Abaixo é a parte de quando o formulário for enviado. Significa: “Quando o usuário tentar enviar o formulário, execute essa função” (event.preventDefault() previne o recarregamento da página, o refresh)
formLogin.addEventListener("submit", function (event) {
  //.addEventListener adiciona um ouvinte para o elemento HTML (form, input...) quando um evento for disparado (submit), ou seja, quando o usuário apertar o botão (Entrar) que possui o type = submit, a função sera executada
  event.preventDefault();

  const response = grecaptcha.getResponse();
  if (!response) {
    alert("Você precisa confirmar que não é um robô!");
    return; // Impede o envio se o reCAPTCHA não foi marcado
  }

  const dados = JSON.parse(localStorage.getItem(inputEmail.value));
  if (!dados) {
    formInputMessage.textContent = "Cadastro não encontrado no sistema";
    formInputMessage.style.display = "block"; //Mostra a mensagem de erro (display = "block"), que estava "escondida" por padrão} else {
  } else {
    if (!dados.validada) {
      formInputMessage.innerHTML = "E-mail não validado! <a href='../validacao-de-dados/Index_Validação_de_Dados.html'> Valide aqui </a>";
      formInputMessage.style.display = "block"; //Mostra a mensagem de erro (display = "block"), que estava "escondida" por padrão
    } else {
      if (
        //Verifica se o e-mail e a senha digitados estão corretos (.value é o que o usuário digitou no campo)
        inputEmail.value == dados.email &&
        inputPassword.value == dados.senha
      ) {
        formInputMessage.style.display = "none"; //Faz sumir a mensagem de erro (display = "none") enquanto os dados forem colocados forem corretos
        localStorage.setItem("usuarioLogado", inputEmail.value); //Armazena o e-mail do usuário logado no localStorage
        localStorage.setItem("currentUser", JSON.stringify(dados)); //Armazena os dados do usuário logado no localStorage
        window.location.href = "../index.html"; //Redireciona o usuário para outra página (main)
      } else {
        //Entra nesse bloco ({}) caso os dados inseridos em e-mail e senha forem incorretos, ou seja, o e-mail digitado != "ceciliacmodica@gmail.com" e senha != 123456
        formInputMessage.textContent =
          "Os dados inseridos estão incorretos, favor tentar novamente";
        formInputMessage.style.display = "block"; //Mostra a mensagem de erro (display = "block"), que estava "escondida" por padrão
      }
    }
  }
});

inputEmail.addEventListener("input", function () {
  //.addEventListener adiciona um ouvinte para o elemento HTML (form, input...) quando um evento do tipo input for disparado, ou seja, quando o usuário começar a digitar no campo e-mail, a função sera executada
  formInputMessage.style.display = "none"; //Isso faz com que a mensagem de erro suma (display = none)
});

inputPassword.addEventListener("input", function () {
  //.addEventListener adiciona um ouvinte para o elemento HTML (form, input...) quando um evento do tipo input for disparado, ou seja, quando o usuário começar a digitar no campo senha, a função sera executada
  formInputMessage.style.display = "none"; //Isso faz com que a mensagem de erro suma (display = none)
});

function togglePassword() {
  const input = document.getElementById("form-password");
  input.type = input.type === "password" ? "text" : "password";
}
