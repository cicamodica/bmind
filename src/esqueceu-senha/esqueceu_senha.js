(function () {
  emailjs.init({
    publicKey: "OskDlznicgvWwaEPN",
  });
})();

const inputEmail = document.getElementById("form-input-email");

document
  .getElementById("form-forget-password")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário para validação

    const dados = JSON.parse(localStorage.getItem(inputEmail.value));

    if (dados == null) {
      alert("Usuário não encontrado");
    } else {
      emailjs
        .send(
          "service_ct2hayr",
          "template_je09365",
          {
            link:
              "http://127.0.0.1:5501/src/redefinir-senha/redefinir_senha.html?email=" +
              inputEmail.value,
            email: inputEmail.value,
          },
          null
        )
        .then(
          (response) => {
            alert("E-mail enviado! Verifique sua caixa de entrada", response.status, response.text);
    
          },
          (error) => {
           alert("E-mail não enviado", error);
          }
        );
    }
  });
