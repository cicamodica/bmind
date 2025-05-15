document
  .getElementById("form-cadastro")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário para validação

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const novaSenha = document.getElementById("nova-senha").value;
    const telefoneContato = document.getElementById("telefone-contato").value;
    const dataNascimento = document.getElementById("data-nascimento").value;

    // Pega os dados do formulário
    const campos = [
      "nome",
      "email",
      "nova-senha",
      "telefone-contato",
      "data-nascimento",
    ];

    let valido = true; // Variável para verificar se todos os campos estão preenchidos

    campos.forEach((id) => {
      const campo = document.getElementById(id);
      if (campo.value.trim() === "") {
        // Verifica se o campo está vazio
        campo.classList.add("erro"); // Adiciona a classe de erro
        valido = false; // Marca como inválido se algum campo estiver vazio
      } else {
        campo.classList.remove("erro"); // Remove a classe de erro se o campo estiver preenchido
      }
    });

    const mensagemErro = document.getElementById("mensagem-erro");

    if (!valido) {
      mensagemErro.textContent =
        "Por favor, preencha todos os campos obrigatórios."; // Mensagem de erro se algum campo estiver vazio
      return; // Interrompe a execução se houver erro
    }

    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );

    const selecionados = Array.from(checkboxes).map((cb) => cb.value);

    const dadosUsuario = {
      nome: nome,
      email: email,
      senha: novaSenha,
      telefoneContato: telefoneContato,
      dataNascimento: dataNascimento,
      preferenciaDeConteudos: selecionados,
    };
    // Verifica se o e-mail já está cadastrado no localStorage
    const dados = JSON.parse(localStorage.getItem(email));
    if (dados == null) {
      console.log(dados);
      //Se tudo estiver certo, salva os dados no localStorage
      localStorage.setItem(email, JSON.stringify(dadosUsuario)); // Salva no localStorage como JSON string

      mensagemErro.textContent = ""; // Limpa a mensagem se estiver tudo certo
      window.location.href =
        "/src/validacao-de-dados/Index_Validação_de_Dados.html"; // Redireciona para a página de validação
    } else {
      mensagemErro.textContent = "Usuário já cadastrado com esse e-mail!"; // Mensagem de erro se o e-mail já estiver cadastrado
    }
  });
