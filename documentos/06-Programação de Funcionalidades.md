# Programação de Funcionalidades

O documento de programação de funcionalidades descreve as características principais de cada página do sistema. Em cada seção, haverá uma imagem representativa da página e serão fornecidas instruções de acesso, requisitos atendidos, artefatos relacionados à funcionalidade, estruturas de dados utilizadas e o/os responsável/responsáveis por cada funcionalidade.

## Login

![Página de login](https://github.com/user-attachments/assets/06be0abd-3a3a-4e9f-935e-5126a4db24ac)

Sua principal função é permitir que os usuários autentiquem suas identidades para obter acesso ao site. Através dessa página, os usuários podem inserir suas informações de login, como nome de usuário e senha, e o sistema verifica se essas informações são válidas para conceder o acesso, além da disponibilização de outros elementos, como botões de acesso ao site, verificação do sistema de reCAPTCHA do google, botão para redirecionamento para a tela de cadastro caso o sistema identifique que o e-mail inserido já está sendo utilizado e  o botão de recuperação de senha.

### Requisito atendido

- |RF-02| A aplicação deve permitir que o usuário faça login em sua conta.

### Artefatos da funcionalidade

- login.html
- login.css
- login.js

### Estrutura de Dados

    const dados = JSON.parse(localStorage.getItem(inputEmail.value));
      if (
        dados &&
        inputEmail.value == dados.email && 
        inputPassword.value == dados.senha
          ) {
      formInputMessage.style.display = "none"; 
      window.location.href = "/src/Main/Main.html";
        } else {
      formInputMessage.style.display = "block"; 
        }


### Instruções de acesso

- Abra um navegador de Internet e informe a seguinte URL: (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/login/login.html) 

- Faça o login em sua conta. Após o login bem-sucedido, você será redirecionado automaticamente para a página inicial da aplicação.

- Caso você tenha se esquecido de sua senha, clique no botão "Esqueceu sua senha?" na própria página de login e você será redirecionado para a página de redefinição de senha, após o processo de redefinição, você voltará para a página de login para efetuar a entrada na aplicação.


#### Responsável

Maria Cecilia Caruzzo Modica

## Cadastro

![Página de cadastro](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/documentos/img/Tela%20de%20cadastro.png)

Sua principal função é permitir que os usuários crie sua conta na aplicação. Através dessa página, os usuários podem inserir suas informaçações de cadastro, como nome de usuário, senha, email, data de nascimento e também escolher qual tipo de conteúdo quer focar através do formulário de cadastro, depois, o sistema verifica se essas informações são válidas para fazer o cadastro, havendo também um botão de "Já possuí cadastro?" caso o usuário ja tenha um login e queira entrar em sua conta.

### Requisito atendido

- |RF-01|	A aplicação deve permitir que o usuário crie uma conta.

### Artefatos da funcionalidade

- cadastro.html
- cadastro.css
- cadastro.js

### Estrutura de Dados

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

    localStorage.setItem(email, JSON.stringify(dadosUsuario)); // Salva no localStorage como JSON string
    mensagemErro.textContent = "";

### Instruções de acesso

- Abra um navegador de Internet e informe a seguinte URL: (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/Cadastro/cadastro.html) 

- Faça o cadastro da sua conta. Após o cadastro bem-sucedido, você será redirecionado automaticamente para a página de validação de dados.

- Caso já tenha um cadastro, clique no botão "Já possuí cadastro?" e você sera redirecionado para página de login.


#### Responsáveis

- Kauê Alves dos Reis
- Maria Cecilia Caruzzo Modica

## Esqueceu a senha?

![Página esqueceu a senha](https://github.com/user-attachments/assets/f3d16e2e-ddf9-4a5a-bdfc-8760099e2a86)

Sua principal função é permitir que os usuários que esqueceram a senha, cadastrada anteriormente, possam redefiní-la e garantir seu acesso à aplicação. Através dessa página, os usuários podem inserir o e-mail que foi cadastrado para a criação de seu conta e receber por ele um link que irá redirecioná-lo diretamente à página de redefinição de senha.

### Requisito atendido

[Adicionar novo?]

### Artefatos da funcionalidade

- esqueceu-senha.html
- esqueceu-senha.css
- esqueceu-senha.js

### Estrutura de Dados

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


### Instruções de acesso

- Abra um navegador de Internet e informe a seguinte URL: (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/esqueceu-senha/esqueceu_senha.html)

- Insira o e-mail que foi cadastrado anteriormente. Você receberá em sua caixa de entrada um e-mail com um link de acesso que irá te redirecionar para a página de redefinição de senha.

- Após finalizar a redefinição você terá seu acesso a aplicação garantido.


#### Responsáveis

- Kauê Alves dos Reis 
- Maria Cecilia Caruzzo Modica

## Redefinição de senha

![Página redefinir senha](https://github.com/user-attachments/assets/e3ba09f7-fcfb-4e67-bb17-17fdcc8a18de)

Sua principal função é permitir que os usuários que esqueceram a senha, cadastrada anteriormente, possam redefiní-la e garantir seu acesso à aplicação. Através dessa página, o usuário poderá inserir a nova senha e salvá-la para garantir seu acesso á página.

### Requisito atendido

[Adicionar novo?]

### Artefatos da funcionalidade

- redefinir-senha.html
- redefinir-senha.css
- redefinir-senha.js

### Estrutura de Dados

    const dados = JSON.parse(localStorage.getItem(email));

    if (dados == null) {
      window.location.href = "/src/cadastro/cadastro.html";
    }

### Instruções de acesso

- Abra um navegador de Internet e informe a seguinte URL:(https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/redefinir-senha/redefinir_senha.html)

- Essa página você acessa ao clicar no link de acesso encaminhado via e-mail. 

- Após acessar o link, insira a sua nova senha e confirme. Ao finalizar a redefinição você terá seu acesso a aplicação garantido.


#### Responsável

- Kauê Alves dos Reis 
- Maria Cecilia Caruzzo Modica

## Validação de dados (pós cadastro)

![Tela de validação de dados](https://github.com/user-attachments/assets/70195585-305e-46de-bb47-2cd37e6fbfb9)

Sua principal função é validar os dados do usuário a partir de um e-mail que é encaminhado para ele com um código de validação de dados.

### Requisito atendido

[Adicionar novo?]

### Artefatos da funcionalidade

- Index_Validação_de_Dados.html
- Index_Validação_de_Dados.js
- Index_Validação_de_Dados.css

### Estrutura de Dados

    if (emailCadastrado != null) {
        const dados = JSON.parse(localStorage.getItem(emailCadastrado));
        dados.validada = true;
        localStorage.setItem(emailCadastrado, JSON.stringify(dados));

    mensagemErro.style.display = "none";
    alert("Código validado com sucesso!");
    window.location.href = "/src/login/login.html";
      } else {
        mensagemErro.style.display = "inline";
      }
        });

### Instruções de acesso

- Abra um navegador de Internet e informe a seguinte URL: (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/validacao-de-dados/Index_Valida%C3%A7%C3%A3o_de_Dados.html)

- O usuário é redirecionado para esssa página após preencher seus dados de cadastro. 

- Ao ser redirecionado, ele recebe automaticamente um e-mail com o código de validação.


#### Responsável

- Erick Costa
- Maria Cecilia Caruzzo Modica

## Resultado de pesquisa

![Página Resultado de Pesquisa](https://github.com/user-attachments/assets/e312ad21-4063-46ca-b554-ecbe4d13a3dd)

Sua principal função é redirecionar o usuário para o conteúdo que ele deseja acessar a partir de uma palavra chave.

### Requisito atendido

RF-08 - A aplicação deve possuir uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar o conteúdo desejado (de acordo com os tópicos listados em RF - 03).

### Artefatos da funcionalidade

- resultado-de-pesquisa.html
- resultado-de-pesquisa.js
- resultado-de-pesquisa.css

### Estrutura de Dados

    let perfilUsuario = null;
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    if (usuarioLogado !== null) {
      const dadosDoUsuario = JSON.parse(localStorage.getItem(usuarioLogado));
      perfilUsuario = dadosDoUsuario?.perfil || null;
    }

    if (!termo || termo.trim() === "") {
          resultadosDiv.innerHTML = "<p>Nenhum termo de pesquisa informado.</p>";
        } else {
      const resultados = conteudos
        .filter((conteudo) => {
          const tituloMatch = conteudo.titulo
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .startsWith(termo);

          const palavraChaveMatch = conteudo.palavrasChave.some((palavraChave) =>
            palavraChave
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .startsWith(termo)
          );

          return tituloMatch || palavraChaveMatch;
        })
        .filter((conteudo) => {
          if (perfilUsuario === null) {
            return true; // mostra todos os conteúdos para quem não está logado
          }
          const termoPerfil = perfilUsuario.toLowerCase().includes("física")
            ? "fisica"
            : "juridica";
          const lowerKeywords = conteudo.palavrasChave.map((p) =>
            p
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          );

          return lowerKeywords.includes(termoPerfil);
        });

      if (resultados.length === 0) {
        resultadosDiv.innerHTML = `<p>Nenhum resultado encontrado para "<strong>${termo}</strong>".</p>`;
      } else {
        resultadosDiv.innerHTML = resultados
          .map(
            (resultado) => `
            <a class="plan-link" href="${resultado.link}">
              <div class="card">
                <div class="plan-img">
                  <img src="${resultado.imagem}" alt="imagem" class="imagem" />
                  <div class="plan-descricao-link">
                      <h2>${resultado.titulo}</h2>
                      <p class="plan-descricao">${resultado.descricao}</p>
                      <p class="plan-keyword plan-descricao">
                        <strong>Palavras-chave:</strong>
                        ${resultado.palavrasChave.join(", ")}
                      </p>
                  </div>
                </div>
              </div>
            </a>`
          )
          .join("");
          }
        }

### Instruções de acesso

- Abra um navegador de Internet e informe a seguinte URL: (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/resultado-de-pesquisa/resultado-de-pesquisa.html)

- Ao clicar na barra de pesquisa no topo da página e escrever uma palavra chave (finanças, por exemplo) o usuário é redirecionado para a página de Resultado. 

- Na página é possível navegar por todos os conteúdos disponíveis para o usuário.


#### Responsável

- Maria Cecilia Caruzzo Modica

## Feedback

![Página de Feedback](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/documentos/img/Tela%20de%20Feedback.png)

Sua principal função é permitir que os usuários deem feedbacks e notas para a aplicação, guardando esses feedbacks em localstorage para que a aplicação possa melhorar diante a opnião dos clientes.

### Requisito atendido

- |RF-11| A aplicação deve disponibilizar uma aba de suporte, para recolher feedbacks de usuários, dar apoio e sanar suas possíveis dúvidas referentes à própria aplicação

### Artefatos da funcionalidade

- feedback.html
- feedback.css
- feedback.js

### Estrutura de Dados

    document.querySelector(".submit").addEventListener("click", function () {
    const feedback = document.getElementById("feedbackText").value.trim();

    if (feedback !== "") {
    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

    feedbacks.push(feedback); // Adiciona o novo feedback lista

    // Salva no localStorage
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

### Instruções de acesso

- Abra um navegador de Internet e informe a seguinte URL: (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/Feedback/feedback.html) 

- Dê uma nota em estrelas e escreva um feedback para a aplicação, depois, clique em "enviar" para que o feedbqack seja salvo.

- Se quiser voltar para a aplicação, basta clicar no menu e escolher em que página quer ir.


#### Responsáveis

- Kauê Alves dos Reis

> **Links Úteis**:
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

