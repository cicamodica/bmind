document.addEventListener("DOMContentLoaded", () => {
  const voltar = document.getElementById("botao-voltar");
  if (voltar) {
    voltar.addEventListener("click", () => {
      history.back();
    });
  }
});

// Evento de envio do formulário
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

    // Validação extra: perfil selecionado
    if (!perfilSelecionado) {
      mensagemErro.textContent = "Por favor, selecione um perfil de usuário.";
      return;
    }

    // Validação extra: pelo menos uma preferência marcada
    if (selecionados.length === 0) {
      mensagemErro.textContent =
        "Selecione pelo menos uma preferência de conteúdo.";
      return;
    }

    // Verificação de e-mail duplicado
    const dados = JSON.parse(localStorage.getItem(email));
    if (dados !== null) {
      mensagemErro.textContent = "Usuário já cadastrado com esse e-mail!";
      return;
    }

    const dadosUsuario = {
      nome: nome,
      email: email,
      senha: novaSenha,
      telefoneContato: telefoneContato,
      dataNascimento: dataNascimento,
      preferenciaDeConteudos: selecionados,
      perfil: perfilSelecionado,
      validada: false,
    };

    //Se tudo estiver certo, salva os dados no localStorage
    localStorage.setItem(email, JSON.stringify(dadosUsuario)); // Salva no localStorage como JSON string
    mensagemErro.textContent = ""; // Limpa a mensagem se estiver tudo certo


      (function () {
  emailjs.init(
    "WLpGT6lQQbkrwpRSy"
  );
})();

    const codigoDeValidacao = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem(codigoDeValidacao.toString(), email);

    const templateParams = {
      email: email,
        passcode: codigoDeValidacao,
        link: "http://127.0.0.1:5501/src/validacao-de-dados/Index_Valida%C3%A7%C3%A3o_de_Dados.html",
    };

      emailjs
        .send(
          "service_joo3heu",
          "template_kmr82a7", 
          templateParams)
         .then(
        () => {
          alert(
            "Um e-mail foi enviado com o código de verificação de dados! Verifique sua caixa de entrada."
          );
          window.location.href =
            "/src/validacao-de-dados/Index_Validação_de_Dados.html";
        },
        (error) => {
          alert("E-mail não enviado: " + error.text);
        }
      );
    }
  );

let perfilSelecionado = null; // fora do submit, para ser acessado lá dentro

const preferenciasPorPerfil = {
  "Pessoa Física": [
    { id: "financas", label: "Finanças Pessoais" },
    { id: "investimentos", label: "Investimentos" },
    { id: "operacoes", label: "Operações Bancárias" },
  ],
  "Pessoa Jurídica": [
    { id: "financas-corp", label: "Finanças Corporativas" },
    { id: "investimentos-corp", label: "Investimentos Corporativos" },
    { id: "emprestimos", label: "Operações Bancárias" },
  ],
};

const botoesPerfil = document.querySelectorAll(".botao-perfil"); // Evento de clique nos botões de perfil
const checkboxContainer = document.getElementById("checkbox-preferencias");

botoesPerfil.forEach((botao) => {
  botao.addEventListener("click", () => {
    // Armazena no localStorage e numa variável temporária
    perfilSelecionado = botao.dataset.perfil;

    // Remove destaque dos outros botões
    botoesPerfil.forEach((b) => b.classList.remove("selecionado"));
    botao.classList.add("selecionado"); // Adiciona destaque ao selecionado

    // Gera as preferências dinamicamente
    const opcoes = preferenciasPorPerfil[perfilSelecionado] || [];
    checkboxContainer.innerHTML = ""; // limpa conteúdo atual

    opcoes.forEach(({ id, label }) => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = id;
      checkbox.value = label;

      const labelElem = document.createElement("label");
      labelElem.setAttribute("for", id);
      labelElem.classList.add("custom-checkbox");
      labelElem.textContent = label;

      checkboxContainer.appendChild(checkbox);
      checkboxContainer.appendChild(labelElem);
    });
  });
});

function togglePassword() {
  const input = document.getElementById("nova-senha");
  input.type = input.type === "password" ? "text" : "password";
}
