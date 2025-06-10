# Programação de Funcionalidades

O documento de programação de funcionalidades descreve as características principais de cada página do sistema. Em cada seção, haverá uma imagem representativa da página e serão fornecidas instruções de acesso, requisitos atendidos, artefatos relacionados à funcionalidade, estruturas de dados utilizadas e o/os responsável/responsáveis por cada funcionalidade.

## Homepage

![Homepage Logado](https://github.com/user-attachments/assets/bf9d77f9-2985-4ab5-98a8-921c95d87701)

Sua principal função é ser o ponto de entrada central e o cartão de visitas do site. Através dessa página podemos apresentar as informações e produtos que oferecemos, além  de direcionar os visitantes para os nossos conteúdos e incentivá-los a se cadastrar para acessar mais funcionalidades. Ela adapta o conteúdo exibido conforme o status de login e de perfil de usuário (Pessoa Física ou Pessoa Jurídica), controla a exibição de botões e links, implementa a funcionalidade de busca, gerencia um carrossel de banners e organiza o conteúdo em abas interativas.

### Requisitos atendidos

- | RF-10 | A aplicação deverá permitir que o usuário deslogue de sua conta
- | RF-14 | O menu deve permitir a navegação para as principais seções da aplicação (Minha Area, Dashboard, Conteúdo Didático, Perfil,FAQ), conforme usuário logado.
- | RF-15 | A aplicação deve possuir uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar o conteúdo desejado (de acordo com os tópicos listados em RF - 05).
- | RF-17 |	Oferecer sugestões de conteúdo personalizado de acordo com o dashboard.
- | RF-22 | O menu de navegação deve apresentar itens de menu específicos para o perfil de usuário (Pessoa Física ou Pessoa Jurídica).
- | RF-23 | A aplicação deve ser fazer a verificação de logado ou não logado para exibir ícone de perfil ou fazer login/cadastre-se. 

### Artefatos da funcionalidade

- Homepage.html
- Homepage.css
- Homepage.js

### Estrutura de Dados

Esta página não possui estrutura de dados.

### Instruções de acesso

- Abra um navegador de Internet e informe a seguinte URL: (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/Homepage.html) 

- Nesta página você poderá consumir diversos conteúdos sobres finanças e investimentos tanto pessoais quanto corporativos.

- Se fizer login, a página será modificada de acordo com o perfil cadastrado. 

#### Responsável

Mariana Turibio Gressi


## Login

![Página de login](https://github.com/user-attachments/assets/06be0abd-3a3a-4e9f-935e-5126a4db24ac)

Sua principal função é permitir que os usuários autentiquem suas identidades para obter acesso ao site. Através dessa página, os usuários podem inserir suas informações de login, como nome de usuário e senha, e o sistema verifica se essas informações são válidas para conceder o acesso, além da disponibilização de outros elementos, como botões de acesso ao site, verificação do sistema de reCAPTCHA do google, botão para redirecionamento para a tela de cadastro caso o sistema identifique que o e-mail inserido já está sendo utilizado e  o botão de recuperação de senha.

### Requisito atendido

- | RF-03 | A aplicação deve permitir que o usuário faça login em sua conta.

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

- | RF-04 |	A aplicação deverá permitir que o usuário redefina sua senha.

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

- | RF-04 |	A aplicação deverá permitir que o usuário redefina sua senha.

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

#### Responsáveis

- Kauê Alves dos Reis 
- Maria Cecilia Caruzzo Modica

## Validação de dados (pós cadastro)

![Tela de validação de dados](https://github.com/user-attachments/assets/70195585-305e-46de-bb47-2cd37e6fbfb9)

Sua principal função é validar os dados do usuário a partir de um e-mail que é encaminhado para ele com um código de validação de dados.

### Requisito atendido

- | RF-02 |	A aplicação deve disponibilizar uma página para validação dos dados cadastrados pelo usuário.

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


#### Responsáveis

- Erick Costa
- Maria Cecilia Caruzzo Modica

## Main (Minha Área)

![Main](https://github.com/user-attachments/assets/73106496-d6a6-4465-91e8-7432d90e1377)
![Main2](https://github.com/user-attachments/assets/3f193f85-b5e7-49a5-9545-58a099410de6)

Sua função principal é trazer para o usuário um resumo de todas as atividades que ele realizou na plataforma. Iniciando com as exibições do dashboard, com base nas despesas e receitas cadastradas, um resumo do total de receitas do mês (gastos e recebidos), além de um histórico com tudo que foi registrado no mês. A página permite que o usuário crie e gerencie metas que ele deseja alcançar. Exibe também os últimos 5 conteúdos vistos pelo o usuário e recomenda conteúdos com base no perfil cadastrado.

### Requisitos atendidos

- | RF-06 |	A aplicação deve disponibilizar ao usuário uma ferramenta (dashboard) para o acompanhamento e controle de suas finanças.
- | RF-07 |	A aplicação deve disponibilizar ao usuário uma ferramenta (dashboard) para o acompanhamento de metas estabelecidas pelo próprio.
- | RF-10 | A aplicação deverá permitir que o usuário deslogue de sua conta.
- | RF-12 |	A aplicação deve exibir uma mensagem de boas-vindas personalizada para o usuário logado.
- | RF-13 | A aplicação deve permitir que o usuário cadastre e gerencie metas financeiras com título, valor total, valor atual e data limite.
- | RF-14 | O menu deve permitir a navegação para as principais seções da aplicação (Minha Area, Dashboard, Conteúdo Didático, Perfil,FAQ), conforme usuário logado.
- | RF-16 | A aplicação deve permitir a visualização de gráficos e tabelas para facilitar a compreensão dos cálculos financeiros.
- | RF-15 | A aplicação deve possuir uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar o conteúdo desejado (de acordo com os tópicos listados em RF - 05).
- | RF-17 | Oferecer sugestões de conteúdo personalizado de acordo com o dashboard.
- | RF-19 | A aplicação deve registrar e exibir os conteúdos didáticos visualizados recentemente pelo usuário.
- | RF-20 | A aplicação deve exibir um resumo mensal de entradas e saídas financeiras no dashboard.
- | RF-21 | A aplicação deve exibir um histórico das transações do mês atual no dashboard.
- | RF-22 | O menu de navegação deve apresentar itens de menu específicos para o perfil de usuário (Pessoa Física ou Pessoa Jurídica).
- | RF-23 |	A aplicação deve ser fazer a verificação de logado ou não logado para exibir ícone de perfil ou fazer login/cadastre-se.

### Artefatos da funcionalidade

- Main.css
- Main.html
- Main.js

### Estrutura de Dados

  const emailUsuario = localStorage.getItem("usuarioLogado");

  document.addEventListener('DOMContentLoaded', () => {
    // --- Boas-Vindas ---
    const boasVindas = document.getElementById("boas-vindas");

    if (emailUsuario) {
      const dadosUsuario = JSON.parse(localStorage.getItem(emailUsuario));
      if (dadosUsuario && dadosUsuario.nome) {
        boasVindas.textContent = `Olá, ${dadosUsuario.nome}!`;
      } else {
        boasVindas.textContent = "Olá!";
      }
    } else {
      boasVindas.textContent = "Bem-vindo!";
    }
   });

    function redirecionarCadastro() {
     const usuarioLogado = localStorage.getItem("usuarioLogado");
     const dadosDoUsuario = usuarioLogado ? JSON.parse(localStorage.getItem(usuarioLogado)) : null;

    function atualizarInterfaceUsuario() {
     const usuarioLogado = localStorage.getItem("usuarioLogado");
     const dadosDoUsuario = usuarioLogado ? JSON.parse(localStorage.getItem(usuarioLogado)) : null;
  
    function registrarConteudoVisto(nome, url, imagem) {
     const emailUsuario = localStorage.getItem("usuarioLogado");
      if (!emailUsuario) return;
     const dadosUsuario = JSON.parse(localStorage.getItem(emailUsuario)) || {};

    localStorage.setItem(emailUsuario, JSON.stringify(dadosUsuario));}

    const dadosUsuario = JSON.parse(localStorage.getItem(emailUsuario)) || {};

    // Recuperação dos dados do usuário
    const dados = JSON.parse(localStorage.getItem(emailUsuarioLogado));

    const dadosDoUsuario = JSON.parse(localStorage.getItem(emailUsuarioLogado));

    const metasSalvas = JSON.parse(localStorage.getItem(metasKey) || '[]');

    localStorage.setItem(metasKey, JSON.stringify(metasAtuais)); carregarMetas(); 

### Instruções de acesso

- Abra um navegador de Internet e informe a seguinte URL: (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/Main/Main.html)

- O usuário é redirecionado para esssa página após fazer login na aplicação.

- Ao ser redirecionado, ele tem acesso as funcionalidades da pagina.


#### Responsáveis

- Mariana Turibio Gressi
- Matheus Feliciano Andrade Bernardes

## Resultado de pesquisa

![Página Resultado de Pesquisa](https://github.com/user-attachments/assets/e312ad21-4063-46ca-b554-ecbe4d13a3dd)

Sua principal função é redirecionar o usuário para o conteúdo que ele deseja acessar a partir de uma palavra chave.

### Requisitos atendidos

- | RF-10 | A aplicação deverá permitir que o usuário deslogue de sua conta.
- | RF-14 | O menu deve permitir a navegação para as principais seções da aplicação (Minha Area, Dashboard, Conteúdo Didático, Perfil,FAQ), conforme usuário logado.
- | RF-15 | A aplicação deve possuir uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar o conteúdo desejado (de acordo com os tópicos listados em RF - 05).
- | RF-22 | O menu de navegação deve apresentar itens de menu específicos para o perfil de usuário (Pessoa Física ou Pessoa Jurídica).
- | RF-23 |	A aplicação deve ser fazer a verificação de logado ou não logado para exibir ícone de perfil ou fazer login/cadastre-se.

### Artefatos da funcionalidade

- resultado-de-pesquisa.html
- resultado-de-pesquisa.js
- resultado-de-pesquisa.css

### Estrutura de Dados

    function atualizarInterfaceUsuario() {
      const usuarioLogado = localStorage.getItem("usuarioLogado");
      const dadosDoUsuario = usuarioLogado ? JSON.parse(localStorage.getItem(usuarioLogado)) : null;

    let perfilUsuario = null;
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    if (usuarioLogado !== null) {
      const dadosDoUsuario = JSON.parse(localStorage.getItem(usuarioLogado));
      perfilUsuario = dadosDoUsuario?.perfil || null;
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

### Requisitos atendidos

- | RF-10 | A aplicação deverá permitir que o usuário deslogue de sua conta.
- | RF-14 | O menu deve permitir a navegação para as principais seções da aplicação (Minha Area, Dashboard, Conteúdo Didático, Perfil,FAQ), conforme usuário logado.
- | RF-15 | A aplicação deve possuir uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar o conteúdo desejado (de acordo com os tópicos listados em RF - 05).
- | RF-19 |	A aplicação deve disponibilizar uma aba de suporte, para recolher feedbacks de usuários, dar apoio e sanar suas possíveis dúvidas referentes à própria aplicação.
- | RF-22 | O menu de navegação deve apresentar itens de menu específicos para o perfil de usuário (Pessoa Física ou Pessoa Jurídica).
- | RF-23 |	A aplicação deve ser fazer a verificação de logado ou não logado para exibir ícone de perfil ou fazer login/cadastre-se.

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


#### Responsável

- Kauê Alves dos Reis

## Perfil

![Página de Perfil](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/documentos/img/Tela%20de%20perfil.png)

Sua principal função é permitir que os usuários possam editar seus dados como nome de usuário, data de nascimento e telefone. Permitindo também que o usuário insira uma imagem ao seu perfil.

### Requisitos atendidos

- | RF-10 | A aplicação deverá permitir que o usuário deslogue de sua conta.
- | RF-11 |	A aplicação deve permitir que o usuário visualize, edite e salve suas informações pessoais (incluindo nome, contato, data de nascimento) e imagem de perfil.
- | RF-14 | O menu deve permitir a navegação para as principais seções da aplicação (Minha Area, Dashboard, Conteúdo Didático, Perfil,FAQ), conforme usuário logado.
- | RF-15 | A aplicação deve possuir uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar o conteúdo desejado (de acordo com os tópicos listados em RF - 05).
- | RF-22 | O menu de navegação deve apresentar itens de menu específicos para o perfil de usuário (Pessoa Física ou Pessoa Jurídica).
- | RF-23 |	A aplicação deve ser fazer a verificação de logado ou não logado para exibir ícone de perfil ou fazer login/cadastre-se.

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

  
## Páginas de Conteúdo

![image](https://github.com/user-attachments/assets/87e90ab7-a73e-4734-8a1f-78d6a4958457)

Sua principal função é permitir que os usuários possam acesar conteudos informativos sobre, operações bancárias, investimentos e finanças. 

### Requisitos Atendidos

- | RF-05 |	A aplicação deve disponibilizar conteúdos didáticos sobre finanças, como: Finanças corporativas, Finanças pessoais, Investimentos corporativos, Investimentos pessoais e Operações bancárias.
- | RF-10 | A aplicação deverá permitir que o usuário deslogue de sua conta.
- | RF-14 | O menu deve permitir a navegação para as principais seções da aplicação (Minha Area, Dashboard, Conteúdo Didático, Perfil,FAQ), conforme usuário logado.
- | RF-15 | A aplicação deve possuir uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar o conteúdo desejado (de acordo com os tópicos listados em RF - 05).
- | RF-22 | O menu de navegação deve apresentar itens de menu específicos para o perfil de usuário (Pessoa Física ou Pessoa Jurídica).
- | RF-23 |	A aplicação deve ser fazer a verificação de logado ou não logado para exibir ícone de perfil ou fazer login/cadastre-se.


### Artefatos da funcionalidade

- analise-de-balanco.css
- analise-de-balanco.html
- analise-de-balanco.js
- captacao-de-recursos.css
- captacao-de-recursos.html
- captacao-de-recursos.js
- dre.css
- dre.html
- dre.js
- fluxo-de-caixa.css
- fluxo-de-caixa.html
- fluxo-de-caixa.js
- controle-de-dividas.css
- controle-de-dividas.html
- controle-de-dividas.js
- orcamento-domestico.css
- orcamento-domestico.html
- orcamento-domestico.js
- planejamento-financeiro.css
- planejamento-financeiro.html
- planejamento-financeiro.js
- fundo-de-investimentos-pj.css
- fundo-de-investimentos-pj.html
- fundo-de-investimentos-pj.js
- renda-fixa-pj.css
- renda-fixa-pj.html
- renda-fixa-pj.js
- renda-variavel-pj.css
- renda-variavel-pj.html
- renda-variavel-pj.js
- fundo-de-investimentos-pf.css
- fundo-de-investimentos-pf.html
- fundo-de-investimentos-pf.js
- renda-fixa-pf.css
- renda-fixa-pf.html
- renda-fixa-pf.js
- renda-varial-pf.css
- renda-varial-pf.html
- renda-varial-pf.js
- cartao-de-credito.css
- cartao-de-credito.html
- cartao-de-credito.js
- cartao-de-debito.css
- cartao-de-debito.html
- cartao-de-debito.js
- emprestimo.css
- emprestimo.html
- emprestimo.js
- financiamento.css
- financiamento.html
- financiamento.js
- taxas-e-tarifas.css
- taxas-e-tarifas.html
- taxas-e-tarifas.js

### Estrutura de Dados

     function redirecionarCadastro() {
      const usuarioLogado = localStorage.getItem("usuarioLogado");
      const dadosDoUsuario = usuarioLogado ? JSON.parse(localStorage.getItem(usuarioLogado)) : null;
    
     function atualizarInterfaceUsuario() {
      const usuarioLogado = localStorage.getItem("usuarioLogado");
      const dadosDoUsuario = usuarioLogado ? JSON.parse(localStorage.getItem(usuarioLogado)) : null;

     const dadosUsuario = JSON.parse(localStorage.getItem(emailUsuario)) || {};

       localStorage.setItem(emailUsuario, JSON.stringify(dadosUsuario));
        }

### Instruções de acesso

- Abra um navegador de Internet e informe as seguintes URL:
- Página de Análise de Balanço (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/conteudo-didatico/financas-corporativas/analise-de-balanco/analise-de-balanco.html)
- Página de Captação de Recursos (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/conteudo-didatico/financas-corporativas/captacao-de-recursos/captacao-de-recursos.html)
- Página de DRE (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/conteudo-didatico/financas-corporativas/dre/dre.html)
- Página de Fluxo de Caixa (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/conteudo-didatico/financas-corporativas/fluxo-de-caixa/fluxo-de-caixa.html)
- Página de Controle de Dívidas (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/conteudo-didatico/financas-pessoais/controle-de-dividas/controle-de-dividas.html)
- Página de Orçamento Doméstico (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/conteudo-didatico/financas-pessoais/orcamento-domestico/orcamento-domestico.html)
- Página de Planejamento Financeiro (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/conteudo-didatico/financas-pessoais/planejamento-financeiro/planejamento-financeiro.html)
- Página de Fundos de Investimento PJ (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/conteudo-didatico/investimentos-corporativos/fundo-de-investimentos-pj/fundo-de-investimentos-pj.html)
- Página de Renda Fixa PJ (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/conteudo-didatico/investimentos-corporativos/renda-fixa-pj/renda-fixa-pj.html) 
- Página de Renda Variável PJ (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/conteudo-didatico/investimentos-corporativos/renda-variavel-pj/renda-variavel-pj.html)
- Página de Fundo de Investimentos PF (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/conteudo-didatico/investimentos-pessoais/fundo-de-investimentos-pf/fundo-de-investimentos-pf.html)
- Página de Renda Fixa PF (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/conteudo-didatico/investimentos-pessoais/renda-fixa-pf/renda-fixa-pf.html)
- Página de Renda Variável PF (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/conteudo-didatico/investimentos-pessoais/renda-variavel-pf/renda-variavel-pf.html)
- Página Cartão de Crédito (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/conteudo-didatico/operacoes-bancarias/cartao-de-credito/cartao-de-credito.html)
- Página Cartão de Débito (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/conteudo-didatico/operacoes-bancarias/cartao-de-debito/cartao-de-debito.html)
- Página de Empréstimo (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/conteudo-didatico/operacoes-bancarias/emprestimo/emprestimo.html)
- Página de Financiamento (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/conteudo-didatico/operacoes-bancarias/financiamento/financiamento.html)
- Página de Taxas e Tarifas (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/conteudo-didatico/operacoes-bancarias/taxas-e-tarifas/taxas-e-tarifas.html)

  #### Responsável
  
  - Matheus Feliciano Andrade Bernardes

 ## Tela de Edição
 ![Tela de Edição](https://github.com/user-attachments/assets/938a0c82-8a51-41a2-824d-67fe1de28676)

Sua função principal é trazer para o usuário um resumo de todas as atividades que ele realizou na plataforma. Iniciando com as exibições do dashboard com base nas despesas e receitas cadastradas, um resumo do total gasto e recebido do mês além de um histórico com tudo que foi registrado no mês.

### Requisito atendido

- | RF-06 |	A aplicação deve disponibilizar ao usuário uma ferramenta (dashboard) para o acompanhamento e controle de suas finanças.
- | RF-07 |	A aplicação deve disponibilizar ao usuário uma ferramenta (dashboard) para o acompanhamento de metas estabelecidas pelo próprio.
- | RF-08 | A aplicação deve disponibilizar ao usuário uma ferramenta para o registro de receitas e despesas.
- | RF-09 | A aplicação deve permitir a categorização dos registros inseridos pelo usuário.
- | RF-10 | A aplicação deverá permitir que o usuário deslogue de sua conta.
- | RF-12 | A aplicação deve exibir uma mensagem de boas-vindas personalizada para o usuário logado.
- | RF-13 | A aplicação deve permitir que o usuário cadastre e gerencie metas financeiras com título, valor total, valor atual e data limite.
- | RF-14 | O menu deve permitir a navegação para as principais seções da aplicação (Minha Area, Dashboard, Conteúdo Didático, Perfil,FAQ), conforme usuário logado.
- | RF-15 | A aplicação deve possuir uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar o conteúdo desejado (de acordo com os tópicos listados em RF - 05).
- | RF-16 | A aplicação deve permitir a visualização de gráficos e tabelas para facilitar a compreensão dos cálculos financeiros.
- | RF-20 | A aplicação deve exibir um resumo mensal de entradas e saídas financeiras no dashboard.
- | RF-22 | O menu de navegação deve apresentar itens de menu específicos para o perfil de usuário (Pessoa Física ou Pessoa Jurídica).
- | RF-21 | A aplicação deve exibir um histórico das transações do mês atual no dashboard.
- | RF-23 |	A aplicação deve ser fazer a verificação de logado ou não logado para exibir ícone de perfil ou fazer login/cadastre-se.

### Artefatos da funcionalidade

- Index_Tela_de_Edição-pf.html
- script_Tela_de_Edição-pf.js
- style_Tela_de_Edição-pf.css
  
### Estrutura de Dados

        function loadUserNameAndProfile() {
          const dashboardTitle = document.getElementById("dashboard-titulo");
           if (emailUsuario) {
          const dadosUsuario = JSON.parse(localStorage.getItem(emailUsuario));}}
         
          let userData = JSON.parse(localStorage.getItem(email)); 

          localStorage.setItem(email, JSON.stringify(userData));

          let userData = JSON.parse(localStorage.getItem(email)); 
  
          let currentUserData = JSON.parse(localStorage.getItem(currentUserEmail));
     
          localStorage.setItem(currentUserEmail, JSON.stringify(currentUserData));
    
### Instruções de acesso

- Abra um navegador de Internet e informe a seguinte URL: (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t1-pmv-ads-2025-1-e1-proj-bmind/blob/main/src/Tela%20de%20Edi%C3%A7%C3%A3o/PF/Index_Tela_de_Edi%C3%A7%C3%A3o-pf.html)
  
- O usuário é redirecionado para essa página após fazer login na aplicação.

- Ao ser redirecionado, ele tem acesso as funcionalidades da página.


#### Responsáveis

- Erick Alexandre Mariano Lopes da Costa
- Diogo Joia

