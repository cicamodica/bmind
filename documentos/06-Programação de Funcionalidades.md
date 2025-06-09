# Programação de Funcionalidades

O documento de programação de funcionalidades descreve as características principais de cada página do sistema. Em cada seção, haverá uma imagem representativa da página e serão fornecidas instruções de acesso, requisitos atendidos, artefatos relacionados à funcionalidade, estruturas de dados utilizadas e o/os responsável/responsáveis por cada funcionalidade.

## Homepage

![Homepage Logado](https://github.com/user-attachments/assets/bf9d77f9-2985-4ab5-98a8-921c95d87701)

Sua principal função é ser  o ponto de entrada central e ocartão de visitas do site. Atraves dessa pagina podemos apresentar as informações e produtos que oferecemos, alem  de direcionar os vitantes para os nossos conteudos e incentiva-los a se cadastrar para acessar mais funcionalidades. Ela adapta o conteudo exibido conforme o status de login  e perfil de usuario (Pessoa Física ou Jurídica), controla a exibição de botoes e links, implementa a funcionalidade bsuca, gerencia um carrossel de banners e organiza o conteudo em abas interativas.

### Requisito atendido


- |RF-20| O menu deve permitir a navegação para as principais seções da aplicação (Minha área, Meu Dashboard, Conteúdo Didático, Perfil, FAQ), conforme usuario logado.

### Artefatos da funcionalidade
-Homepage.html
-Homepage.css
-Homepage.js

### Estrutura de Dados
 Esta página não possui estrutura de dados

### Instruçoes de acesso
- Abra um navegador de Internet e informe a seguinte URL: (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/Homepage.html) 

-Nesta pagina você poderá consumir diversos conteudos sobres finanças e investimentos tanto pessoais quanto corporativos

-Se fizer login a pagina será modificada de acordo com o seu perfil cadastrado. 

#### Responsável

Mariana Turibio Gressi


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

## Main (Minha Área)

Sua função principal é trazer para o ususario um resumo de todas as atividades que ele realizou no plataforma. Iniciando com as exibição do dashboard com base nas despesas e receitas cadastradas, um resumo to total gasto e recebido do mes alem de um hisotrico com tudo que foi registrado no mes. A pagina permite qu eo usuario crie e gerencie metas que ele deseja alcançar. Exibe tambem os ultimos 5 conteudos vistos pelo o usurario e recomenda conteudos com base no perfil cadastrado.

### Requisito atendido

[Adicionar novo?]

### Artefatos da funcionalidade

-Main.css
-Main.html
-Main.js

### Estrutura de Dados
Esta página não possui estrutura de dados

### Instruções de acesso

- Abra um navegador de Internet e informe a seguinte URL: (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/Main/Main.html)

- O usuário é redirecionado para esssa página após fazer login na aplicação.

- Ao ser redirecionado, ele tem acesso as funcionalidades da pagina.


#### Responsável

-Mariana Turibio Gressi
-Matheus Feliciano Andrade Bernardes



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

## Perfil

![Página de Perfil](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/documentos/img/Tela%20de%20perfil.png)

Sua principal função é permitir que os usuários possam editar seus dados como, nome de usuário, data de nascimento, telefone e etc. Permitindo também que o usuário insira uma imagem ao seu perfil.

### Requisito atendido

- [adionar novo?]

### Artefatos da funcionalidade

- perfil.html
- perfil.css
- perfil.js

### Estrutura de Dados
    const usuarioLogado = JSON.parse(localStorage.getItem("currentUser"));
    window.addEventListener("DOMContentLoaded", function () {
    const boasVindas = document.getElementById("boas-vindas");
    const emailUsuario = localStorage.getItem("usuarioLogado");

    if (emailUsuario) {
    const dadosUsuario = JSON.parse(localStorage.getItem(emailUsuario));
    if (dadosUsuario && dadosUsuario.nome) {
      boasVindas.textContent = `Olá, ${dadosUsuario.nome}!`;
    } else {
      boasVindas.textContent = "Olá!";
    }
    } else {
    // Se ninguém estiver logado, mostra mensagem genérica ou redireciona
    boasVindas.textContent = "Bem-vindo!";
    // Opcional: redirecionar para a página de login
    // window.location.href = "/src/login/login.html";
    }
    });
    window.onload = () => {
    const usuarioLogado = JSON.parse(localStorage.getItem("currentUser"));
    if (!usuarioLogado) return;

    const emailUsuario = usuarioLogado.email;
    const dadosUsuario = JSON.parse(localStorage.getItem(emailUsuario));

    if (dadosUsuario) {
    document.getElementById("nome").value = dadosUsuario.nome || "";
    document.getElementById("contato").value = dadosUsuario.telefoneContato || "";
    document.getElementById("data").value = dadosUsuario.dataNascimento || "";
    document.getElementById("perfil").value = dadosUsuario.perfil || "";

    // imagem
    const previewImg = document.getElementById("preview-img");
    if (dadosUsuario.imagemBase64) {
      previewImg.src = dadosUsuario.imagemBase64;
    }
    }
    };
    document.getElementById("perfil-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const usuarioLogado = JSON.parse(localStorage.getItem("currentUser"));
    if (!usuarioLogado) return;

    const emailUsuario = usuarioLogado.email;
    const dadosUsuario = JSON.parse(localStorage.getItem(emailUsuario)) || {};
    localStorage.setItem(emailUsuario, JSON.stringify(dadosUsuario));
    

### Instruções de acesso

- Abra um navegador de Internet e informe a seguinte URL: (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/perfil/perfil.html) 

- Clique em "Fazer upload de imagem" para inserir uma foto de perfil.

- Se quiser, pode editar suas informações e depois clicar no botão de salvar para salvar as edições.


#### Responsáveis

- Maria Cecilia Caruzzo Modica
- Kauê Alves dos Reis

  
## Pagina de conteúdo


![image](https://github.com/user-attachments/assets/87e90ab7-a73e-4734-8a1f-78d6a4958457)

Sua principal função é permitir que os usuários possam acesar conteudos informativos sobre , operações bancarias , investimentos e finanças . 


##Requisito Atendido 

-A aplicação deverá permitir que o usuário deslogue de sua conta 
-A aplicação deve possuir uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar o conteúdo desejado (de acordo com os tópicos listados em RF - 03). 
-O menu deve permitir a navegação para as principais seções da aplicação (Minha Area, Dashboard, Conteúdo Didático, Perfil,FAQ), conforme usuário logado. 
-O menu de navegação deve apresentar itens de menu específicos para o perfil de usuário (Pessoa Física ou Pessoa Jurídica). 
-A aplicação deve ser fazer a verificação de logado ou não logado para exibir icone de perfil ou fazer login/cadastre-se 


### Artefatos da funcionalidade

-analise-de-balanco.css
-analise-de-balanco.html
-analise-de-balanco.js
-captacao-de-recursos.css
-captacao-de-recursos.html
-captacao-de-recursos.js
-dre.css
-dre.html
-dre.js
-fluxo-de-caixa.css
-fluxo-de-caixa.html
-fluxo-de-caixa.js
-controle-de-dividas.css
-controle-de-dividas.html
-controle-de-dividas.js
-orcamento-domestico.css
-orcamento-domestico.html
-orcamento-domestico.js
-planejamento-financeiro.css
-planejamento-financeiro.html
-planejamento-financeiro.js
-fundo-de-investimentos-pj.css
-fundo-de-investimentos-pj.html
-fundo-de-investimentos-pj.js
-renda-fixa-pj.css
-renda-fixa-pj.html
-renda-fixa-pj.js
-renda-variavel-pj.css
-renda-variavel-pj.html
-renda-variavel-pj.js
-fundo-de-investimentos-pf.css
-fundo-de-investimentos-pf.html
-fundo-de-investimentos-pf.js
-renda-fixa-pf.css
-renda-fixa-pf.html
-renda-fixa-pf.js
-renda-varial-pf.css
-renda-varial-pf.html
-renda-varial-pf.js
-cartao-de-credito.css
-cartao-de-credito.html
-cartao-de-credito.js
-cartao-de-debito.css
-cartao-de-debito.html
-cartao-de-debito.js
-emprestimo.css
-emprestimo.html
-emprestimo.js
-financiamento.css
-financiamento.html
-financiamento.js
-taxas-e-tarifas.css
-taxas-e-tarifas.html
-taxas-e-tarifas.js

### Estrutura de Dados

 function redirecionarCadastro() {
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  const dadosDoUsuario = usuarioLogado ? JSON.parse(localStorage.getItem(usuarioLogado)) : null;

  if (dadosDoUsuario && dadosDoUsuario.perfil) {
    if (dadosDoUsuario.perfil === "Pessoa Física") {
      window.location.href = "/src/Tela de Edição/PF/Index_Tela_de_Edição-pf.html";
    } else if (dadosDoUsuario.perfil === "Pessoa Jurídica") {
      window.location.href = "/src/Tela de Edição/PJ/Index_Tela_de_Edição-pj.html";
    } else {
      alert("Perfil de usuário desconhecido. Não é possível redirecionar.");
    }
  } else {
    alert("Usuário não logado ou dados do usuário inválidos.");
  }
}
function atualizarInterfaceUsuario() {
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  const dadosDoUsuario = usuarioLogado ? JSON.parse(localStorage.getItem(usuarioLogado)) : null;

  const userActionsLogado = document.getElementById("perfil-logado");
  const userActionsNaoLogado = document.getElementById("login-nao-logado");

  const itensPF = document.querySelectorAll('.item-pf');
  const itensPJ = document.querySelectorAll('.item-pj');
  const itensLogado = document.querySelectorAll('.item-logged');
  const itensNaoLogado = document.querySelectorAll('.item-nao-logado');

  const estaNaPaginaMinhaArea = window.location.pathname.includes("/src/Main/Main.html")

  // Esconde tudo inicialmente
  userActionsLogado.style.display = "none";
  userActionsNaoLogado.style.display = "none";
  itensPF.forEach(el => el.style.display = 'none');
  itensPJ.forEach(el => el.style.display = 'none');
  itensLogado.forEach(el => el.style.display = 'none');
  itensNaoLogado.forEach(el => el.style.display = 'none');

  if (dadosDoUsuario && (dadosDoUsuario.perfil === "Pessoa Física" || dadosDoUsuario.perfil === "Pessoa     Jurídica")) {
  // Função para registrar o conteúdo visto recentemente
 function registrarConteudoVisto(nome, url, imagem) {
  const emailUsuario = localStorage.getItem("usuarioLogado");
  if (!emailUsuario) return;

  const dadosUsuario = JSON.parse(localStorage.getItem(emailUsuario)) || {};

  if (!dadosUsuario.vistosRecentemente) {
    dadosUsuario.vistosRecentemente = [];
  }

  // Remove se já existir (baseado na URL para garantir que não repita)
  dadosUsuario.vistosRecentemente = dadosUsuario.vistosRecentemente.filter(item => item.url !== url);

  // Adiciona no topo
  const conteudo = { nome, url, imagem };
  dadosUsuario.vistosRecentemente.unshift(conteudo);

  // Mantém só os 5 mais recentes
  if (dadosUsuario.vistosRecentemente.length > 5) {
    dadosUsuario.vistosRecentemente = dadosUsuario.vistosRecentemente.slice(0, 5);
  }

  // Salva de volta no localStorage
  localStorage.setItem(emailUsuario, JSON.stringify(dadosUsuario));
}

    
    // Só mostra o botão "perfil-logado" se não estiver na própria página de "Minha Área"
    if (!estaNaPaginaMinhaArea && userActionsLogado) {
      userActionsLogado.style.display = "flex";
    }

    // Exibe itens de logado
    itensLogado.forEach(el => el.style.display = 'block');

    if (dadosDoUsuario.perfil === "Pessoa Física") {
      itensPF.forEach(el => el.style.display = 'block');
    } else if (dadosDoUsuario.perfil === "Pessoa Jurídica") {
      itensPJ.forEach(el => el.style.display = 'block');
    }
  } else {
    // Usuário não logado ou com dados inválidos
    userActionsNaoLogado.style.display = "flex";
    itensNaoLogado.forEach(el => el.style.display = 'block');
  }
}


### Instruções de acesso

- Abra um navegador de Internet e informe a seguinte URL:

- ## Tela de Edição
Sua função principal é trazer para o ususario um resumo de todas as atividades que ele realizou no plataforma. Iniciando com as exibição do dashboard com base nas despesas e receitas cadastradas, um resumo to total gasto e recebido do mes alem de um hisotrico com tudo que foi registrado no mes. A pagina permite qu eo usuario crie e gerencie metas que ele deseja alcançar. Exibe tambem os ultimos 5 conteudos vistos pelo o usurario e recomenda conteudos com base no perfil cadastrado.

### Requisito atendido
RF-06 A aplicação deve disponibilizar ao usuário uma ferramenta (dashboard) para o acompanhamento e controle de suas finanças.

### Artefatos da funcionalidade

-Index_Tela_de_Edição-pf.html
-script_Tela_de_Edição-pf.js
-style_Tela_de_Edição-pf.css

### Estrutura de Dados
// Função para carregar o nome do usuário e atualizar o título
  function loadUserNameAndProfile() {
    const dashboardTitle = document.getElementById("dashboard-titulo");
    if (emailUsuario) {
      const dadosUsuario = JSON.parse(localStorage.getItem(emailUsuario)); // JSON.parse
      if (dadosUsuario && dadosUsuario.nome) {
        dashboardTitle.textContent = `Dashboard de ${dadosUsuario.nome}`;
        tipoPerfilUsuario = dadosUsuario.perfil;
      } else {
        dashboardTitle.textContent = "Dashboard de Usuário";
        tipoPerfilUsuario = "Pessoa Física";
      }
    } else {
      dashboardTitle.textContent = "Dashboard de Fulano";
      tipoPerfilUsuario = "Pessoa Física";
    }
    populateCategorySelects();
  }

  // Função para obter dados financeiros do localStorage do usuário logado
  function getFinancialData() {
    const email = localStorage.getItem("usuarioLogado");
    if (!email) {
      console.warn("Nenhum usuário logado. Não é possível carregar dados financeiros.");
      return { entradas: [], saidas: [] };
    }
    let userData = JSON.parse(localStorage.getItem(email)); // JSON.parse

    // Se o usuário não tiver dados financeiros, inicializa
    if (!userData || !userData.financialData) {
      userData = userData || {};
      userData.financialData = { entradas: [], saidas: [] };
      localStorage.setItem(email, JSON.stringify(userData)); // JSON.stringify
    }
    return userData.financialData;
  }

  // Função para salvar dados financeiros no localStorage do usuário logado
  function saveFinancialData(data) {
    const email = localStorage.getItem("usuarioLogado");
    if (!email) {
      console.warn("Nenhum usuário logado. Não é possível salvar dados financeiros.");
      return;
    }
    let userData = JSON.parse(localStorage.getItem(email)); // JSON.parse
    if (!userData) {
      userData = {};
    }
    userData.financialData = data;
    localStorage.setItem(email, JSON.stringify(userData)); // JSON.stringify
    renderDashboard();
  }

// Função para salvar uma nova entrada
  window.salvarEntrada = function () {
    const dataInput = document.getElementById("entrada-data");
    const valorInput = document.getElementById("entrada-valor");
    const categoriaSelect = document.getElementById("entrada-categoria");
    const categoriaText =
      categoriaSelect.options[categoriaSelect.selectedIndex].text;
    const descricaoInput = document.getElementById("entrada-descricao");
    const recorrenteSim =
      document.getElementById("entrada-recorrente-sim").checked;
    const frequenciaSelect = document.getElementById("entrada-frequencia");
    const encerramentoInput =
      document.getElementById("entrada-encerramento");

    if (!dataInput.value || !valorInput.value) {
      alert("Data e Valor são obrigatórios para entradas.");
      return;
    }
    if (categoriaSelect.value === "") {
      alert("A categoria é obrigatória para entradas.");
      return;
    }

    if (recorrenteSim && !encerramentoInput.value) {
      alert("A Data de Encerramento é obrigatória para entradas recorrentes.");
      return;
    }

    const novaEntrada = {
      id: Date.now(),
      tipo: "entrada",
      data: dataInput.value,
      valor: parseFloat(valorInput.value),
      categoria: categoriaSelect.value,
      categoriaText: categoriaText,
      descricao: descricaoInput.value,
      recorrente: recorrenteSim,
      frequencia: recorrenteSim ? frequenciaSelect.value : null,
      dataEncerramento: recorrenteSim
        ? encerramentoInput.value
        : null,
    };

    const data = getFinancialData();
    data.entradas.push(novaEntrada);
    saveFinancialData(data);
    closeModal();
  };

  // Função para salvar uma nova saída
  window.salvarSaida = function () {
    const dataInput = document.getElementById("saida-data");
    const valorInput = document.getElementById("saida-valor");
    const categoriaSelect = document.getElementById("saida-categoria");
    const categoriaText =
      categoriaSelect.options[categoriaSelect.selectedIndex].text;
    const descricaoInput = document.getElementById("saida-descricao");
    const recorrenteSim =
      document.getElementById("saida-recorrente-sim").checked;
    const frequenciaSelect = document.getElementById("saida-frequencia");
    const encerramentoInput =
      document.getElementById("saida-encerramento");

    if (!dataInput.value || !valorInput.value) {
      alert("Data e Valor são obrigatórios para saídas.");
      return;
    }
    if (categoriaSelect.value === "") {
      alert("A categoria é obrigatória para saídas.");
      return;
    }

    if (recorrenteSim && !encerramentoInput.value) {
      alert("A Data de Encerramento é obrigatória para saídas recorrentes.");
      return;
    }

    const novaSaida = {
      id: Date.now(),
      tipo: "saida",
      data: dataInput.value,
      valor: parseFloat(valorInput.value),
      categoria: categoriaSelect.value,
      categoriaText: categoriaText,
      descricao: descricaoInput.value,
      recorrente: recorrenteSim,
      frequencia: recorrenteSim ? frequenciaSelect.value : null,
      dataEncerramento: recorrenteSim
        ? encerramentoInput.value
        : null,
    };

    const data = getFinancialData();
    data.saidas.push(novaSaida);
    saveFinancialData(data);

    closeModal();
  };

// Função para salvar as alterações da transação editada
  window.saveEditedTransaction = function () {
    const id = parseInt(document.getElementById("edit-id").value);
    const tipo = document.getElementById("edit-tipo").value;
    const data = document.getElementById("edit-data").value;
    const valor = parseFloat(document.getElementById("edit-valor").value);
    const categoriaSelect = document.getElementById("edit-categoria");
    const categoria = categoriaSelect.value;
    const categoriaText =
      categoriaSelect.options[categoriaSelect.selectedIndex].text;
    const descricao = document.getElementById("edit-descricao").value;
    const recorrente =
      document.getElementById("edit-recorrente-sim").checked;
    const frequencia = recorrente
      ? document.getElementById("edit-frequencia").value
      : null;
    const dataEncerramento =
      recorrente && document.getElementById("edit-encerramento").value
        ? document.getElementById("edit-encerramento").value
        : null;

    if (!data || isNaN(valor)) {
      alert("Data e Valor são obrigatórios para editar a transação.");
      return;
    }
    if (categoriaSelect.value === "") {
      alert("A categoria é obrigatória para editar a transação.");
      return;
    }

    if (recorrente && !dataEncerramento) {
      alert("A Data de Encerramento é obrigatória para transações recorrentes.");
      return;
    }

    const allData = getFinancialData();

    let transactionList;
    if (tipo === "entrada") {
      transactionList = allData.entradas;
    } else if (tipo === "saida") {
      transactionList = allData.saidas;
    } else {
      alert("Tipo de transação inválido para edição.");
      return;
    }

    const index = transactionList.findIndex((item) => item.id === id);

    if (index !== -1) {
      transactionList[index] = {
        id: id,
        tipo: tipo,
        data: data,
        valor: valor,
        categoria: categoria,
        categoriaText: categoriaText,
        descricao: descricao,
        recorrente: recorrente,
        frequencia: frequencia,
        dataEncerramento: dataEncerramento,
      };
      saveFinancialData(allData);
      alert("Transação atualizada com sucesso!");
      closeModal();
    } else {
      alert("Transação não encontrada.");
    }
  };
// Salva os totais atuais no localStorage para a página principal usar
    const currentUserEmail = localStorage.getItem("usuarioLogado");
    if (currentUserEmail) {
      let currentUserData = JSON.parse(localStorage.getItem(currentUserEmail));
      if (!currentUserData) currentUserData = {};
      currentUserData.chartData = {
        entradas: totalEntradas,
        saidas: totalSaidas,
      };
      currentUserData.financialDataPreview = {
        entradas: entradasParaGrafico,
        saidas: saidasParaGrafico,
      };
      localStorage.setItem(currentUserEmail, JSON.stringify(currentUserData));
    }

### Instruções de acesso

- Abra um navegador de Internet e informe a seguinte URL: (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/Tela%20de%20Edi%C3%A7%C3%A3o/PF/Index_Tela_de_Edi%C3%A7%C3%A3o-pf.html)
- O usuário é redirecionado para esssa página após fazer login na aplicação.

- Ao ser redirecionado, ele tem acesso as funcionalidades da pagina.


#### Responsável

-Erick Alexandre Mariano Lopes da Costa
-Diogo

> **Links Úteis**:
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

