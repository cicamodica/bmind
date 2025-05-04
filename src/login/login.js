//Essa parte abaixo serve para ligar o JavaScript ao HTML. Ele pega os elementos da página pelos ids e guarda em variáveis pra poder usar depois (formLogin = formulário inteiro; inputEmail = campo de e-mail e
// inputPassword = campo de senha)
const formLogin = document.getElementById("form-login");
const inputPassword = document.getElementById("form-password");
const inputEmail = document.getElementById("form-email");

//Abaixo é a parte de quando o formulário for enviado. Significa: “Quando o usuário tentar enviar o formulário, execute essa função” (event.preventDefault() previne o recarregamento da página, o refresh)
formLogin.addEventListener("submit", function (event) {
  //.addEventListener adiciona um ouvinte para o elemento HTML (form, input...) quando um evento for disparado (submit), ou seja, quando o usuário apertar o botão (Entrar) que possui o type = submit, a função sera executada
  event.preventDefault();
  if (
    inputEmail.value == "ceciliacmodica@gmail.com" && //Verifica se o e-mail e a senha digitados estão corretos (.value é o que o usuário digitou no campo)
    inputPassword.value == "123456"
  ) {
    //Entra nesse bloco ({}) caso os dados inseridos em e-mail e senha forem corretos, ou seja, o e-mail digitado = "ceciliacmodica@gmail.com" e senha = 123456
    document.getElementById("form-input-message").style.display = "none"; //Faz sumir a mensagem de erro (display = "none") enquanto os dados forem colocados forem corretos
    window.location.href = "/src/Main/Main.html"; //Redireciona o usuário para outra página (main)
  } else {
    //Entra nesse bloco ({}) caso os dados inseridos em e-mail e senha forem incorretos, ou seja, o e-mail digitado != "ceciliacmodica@gmail.com" e senha != 123456
    document.getElementById("form-input-message").style.display = "block"; //Mostra a mensagem de erro (display = "block"), que estava "escondida" por padrão
  }
});

inputEmail.addEventListener("input", function () {
  //.addEventListener adiciona um ouvinte para o elemento HTML (form, input...) quando um evento do tipo input for disparado, ou seja, quando o usuário começar a digitar no campo e-mail, a função sera executada
  document.getElementById("form-input-message").style.display = "none"; //Isso faz com que a mensagem de erro suma (display = none)
});

inputPassword.addEventListener("input", function () {
  //.addEventListener adiciona um ouvinte para o elemento HTML (form, input...) quando um evento do tipo input for disparado, ou seja, quando o usuário começar a digitar no campo senha, a função sera executada
  document.getElementById("form-input-message").style.display = "none"; //Isso faz com que a mensagem de erro suma (display = none)
});

/*const form = document.getElementById("form-contato");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", this).then(
    function () {
      document.getElementById("mensagem-sucesso").style.display = "block";
      form.reset();
    },
    function (error) {
      alert("Erro ao enviar o e-mail: " + error.text);
    }
  );
});*/
