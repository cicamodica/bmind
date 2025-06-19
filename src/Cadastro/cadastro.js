document.addEventListener("DOMContentLoaded", () => {
  const voltar = document.getElementById("botao-voltar");
  if (voltar) {
    voltar.addEventListener("click", () => {
      history.back();
    });
  }


//IMPEDIR NÚMEROS NO CAMPO NOME
document.getElementById("nome").addEventListener("input", function (e) {
  this.value = this.value.replace(/[0-9]/g, ""); // remove números
});


//IMPEDIR LETRAS O CAMPO CONTATO
document.getElementById("telefone-contato").addEventListener("input", function (e) {
  this.value = this.value.replace(/[^0-9]/g, ""); // remove tudo que não for número
});

// Evento de envio do formulário
document.getElementById("form-cadastro").addEventListener("submit", function (event) {
  event.preventDefault(); // Sempre previne o envio inicial

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const novaSenha = document.getElementById("nova-senha").value.trim();
  const telefoneContato = document.getElementById("telefone-contato").value.trim();
  const dataNascimentoStr = document.getElementById("data-nascimento").value;

  const campos = ["nome", "email", "nova-senha", "telefone-contato", "data-nascimento"];
  let valido = true;

  campos.forEach((id) => {
    const campo = document.getElementById(id);
    if (campo.value.trim() === "") {
      campo.classList.add("erro");
      valido = false;
    } else {
      campo.classList.remove("erro");
    }
  });

  const mensagemErro = document.getElementById("mensagem-erro");
  if (!valido) {
    mensagemErro.textContent = "Por favor, preencha todos os campos obrigatórios.";
    return;
  }

  // Validação de idade mínima
  const input = document.getElementById("data-nascimento");
  const erro = document.getElementById("erro-idade");
  const dataNascimento = new Date(dataNascimentoStr);
  const hoje = new Date();
  const idadeMinima = 16;

  let idade = hoje.getFullYear() - dataNascimento.getFullYear();
  const m = hoje.getMonth() - dataNascimento.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < dataNascimento.getDate())) {
    idade--;
  }

  if (idade < idadeMinima) {
    erro.textContent = `Você precisa ter pelo menos ${idadeMinima} anos para se cadastrar.`;
    input.classList.add("erro");
    return;
  } else {
    erro.textContent = "";
    input.classList.remove("erro");
  }

  // Validação extra: perfil selecionado
  if (!perfilSelecionado) {
    mensagemErro.textContent = "Por favor, selecione um perfil de usuário.";
    return;
  }

  // Validação extra: pelo menos uma preferência marcada
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const selecionados = Array.from(checkboxes).map((cb) => cb.value);

  if (selecionados.length === 0) {
    mensagemErro.textContent = "Selecione pelo menos uma preferência de conteúdo.";
    return;
  }

  // Verificação de e-mail duplicado
  if (localStorage.getItem(email) !== null) {
    mensagemErro.textContent = "Usuário já cadastrado com esse e-mail!";
    return;
  }

  // Salvar no localStorage
  const dadosUsuario = {
    nome: nome,
    email: email,
    senha: novaSenha,
    telefoneContato: telefoneContato,
    dataNascimento: dataNascimentoStr,
    preferenciaDeConteudos: selecionados,
    perfil: perfilSelecionado,
    validada: false,
  };

  localStorage.setItem(email, JSON.stringify(dadosUsuario));

  // Enviar código de validação via EmailJS
  emailjs.init("WLpGT6lQQbkrwpRSy");

  const codigoDeValidacao = Math.floor(100000 + Math.random() * 900000);
  localStorage.setItem(codigoDeValidacao.toString(), email);

  const templateParams = {
    email: email,
    passcode: codigoDeValidacao,
    link: "/src/validacao-de-dados/Index_Validação_de_Dados.html",
  };

  emailjs.send("service_joo3heu", "template_kmr82a7", templateParams).then(
    () => {
      alert("Um e-mail foi enviado com o código de verificação de dados! Verifique sua caixa de entrada.");
      window.location.href = "/src/validacao-de-dados/Index_Validação_de_Dados.html";
    },
    (error) => {
      alert("E-mail não enviado: " + error.text);
    }
  );
});

//INÍCIO FUNCIONALIDADES DOS BOTÕES DE PERFIL E PREFERÊNCIAS:

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
});
function togglePassword() {
  const input = document.getElementById("nova-senha");
  input.type = input.type === "password" ? "text" : "password";
}

