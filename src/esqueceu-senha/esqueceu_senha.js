(function () {
  emailjs.init(
    "WLpGT6lQQbkrwpRSy"
  );
})();

const inputEmail = document.getElementById("form-input-email");

document
  .getElementById("form-forget-password")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário para validação
    let email = inputEmail.value;

    const dados = JSON.parse(localStorage.getItem(email));

    if (dados == null) {
      alert("Usuário não encontrado");
      return;
    } 

    const templateParams = {
      email: email,
      link: `http://127.0.0.1:5501/src/redefinir-senha/redefinir_senha.html?email=${email}`,
    };

      emailjs
        .send(
          "service_joo3heu",
          "template_te6r7bi", 
          templateParams)
        .then(
          (response) => {
            alert(
              "E-mail enviado! Verifique sua caixa de entrada",
              response.status,
              response.text
            );
          },
          (error) => {
            alert("E-mail não enviado para o endereço " + email, error);
          }
        );
    }
  );
