const params = new URLSearchParams(window.location.search);
const email = params.get("email");

const dados = JSON.parse(localStorage.getItem(email));

const formPassword = document.getElementById("form-forget-password");
const newPassword = document.getElementById("form-password");
const confirmNewPassword = document.getElementById("form-confirm-password");
const formInputMessage = document.getElementById("form-input-message");

formPassword.addEventListener("submit", function (event) {
  //.addEventListener adiciona um ouvinte para o elemento HTML (form, input...) quando um evento for disparado (submit), ou seja, quando o usuário apertar o botão (redefinir) que possui o type = submit, a função sera executada
  event.preventDefault();

  if (newPassword.value == confirmNewPassword.value) {
    dados.senha = newPassword.value;
    localStorage.setItem(email, JSON.stringify(dados));
    window.location.href = "./login/login.html";
  } else {
    formInputMessage.style.display = "block";
  }
});

newPassword.addEventListener("input", function () {
  //.addEventListener adiciona um ouvinte para o elemento HTML (form, input...) quando um evento do tipo input for disparado, ou seja, quando o usuário começar a digitar no campo e-mail, a função sera executada
  formInputMessage.style.display = "none"; //Isso faz com que a mensagem de erro suma (display = none)
});

confirmNewPassword.addEventListener("input", function () {
  //.addEventListener adiciona um ouvinte para o elemento HTML (form, input...) quando um evento do tipo input for disparado, ou seja, quando o usuário começar a digitar no campo senha, a função sera executada
  formInputMessage.style.display = "none"; //Isso faz com que a mensagem de erro suma (display = none)
});

function togglePassword(inputId, button) {
  const input = document.getElementById(inputId);
  const icon = button.querySelector("i");

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}