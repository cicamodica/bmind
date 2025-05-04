document.getElementById("form-cadastro").addEventListener("submit", function (event) { 
    event.preventDefault(); // Impede o envio do formulário para validação
  
    const campos = [ 
      "nome", 
      "email",
      "nova-senha",
      "telefone-contato",
      "data-nascimento"
    ];
  
    let valido = true; // Variável para verificar se todos os campos estão preenchidos
  
    campos.forEach((id) => { 
      const campo = document.getElementById(id); 
      if (campo.value.trim() === "") {  // Verifica se o campo está vazio
        campo.classList.add("erro"); // Adiciona a classe de erro
        valido = false; // Marca como inválido se algum campo estiver vazio
      } else { 
        campo.classList.remove("erro"); // Remove a classe de erro se o campo estiver preenchido
      }
    });
  
    const mensagemErro = document.getElementById("mensagem-erro");  
  
    if (!valido) {
      mensagemErro.textContent = "Por favor, preencha todos os campos obrigatórios."; // Mensagem de erro se algum campo estiver vazio
      return; // Interrompe a execução se houver erro
    }
  
    mensagemErro.textContent = ""; // Limpa a mensagem se estiver tudo certo
    window.location.href = "/src/Validacao de Dados/Index_Validação_de_Dados.html";
  });
  
  