![menugif](https://github.com/user-attachments/assets/61ee2f77-08da-4158-8cc3-47f353ff6893)![logoutgif](https://github.com/user-attachments/assets/3bb64943-f02d-4dc2-bc56-f4819ce432ed)# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados na aplicação pela equipe, baseado no plano de testes pré-definido.

|Caso de Teste    | CT-01 - Testes da Página de Homepage |
|:---|:---|
| Resultados obtidos |A página carrega corretamente; O carrossel funciona corretamente; Os ícones da barra carregam corretamente conforme login de usuário; O botão de fazer login funciona corretamente; O botão cadastre-se funciona corretamente; O ícone de perfil leva a página de perfil corretamente; Os conteúdos estão aparecendo corretamente; A barra de pesquisa funciona corretamente; A responsividade funciona corretamente.|
| Responsável pela execução do caso de Teste | Erick Costa |
|Registro do teste | ![homepagegif](https://github.com/user-attachments/assets/f259016d-b446-4545-85dd-778f8e51389b)|


|Caso de Teste    | CT-02 - Testes da Página de Cadastro |
|:---|:---|
| Resultados obtidos |Acesso a pagina com sucesso; A página exige dados preenchidos corretamente de acordo com cada campo; O campo de “Nome completo” funciona; O campo para inserir e-mail exige um padrão de e-mail para ser aceito; O campo de inserir senha tem um botão de ocultar senha que funciona corretamente; O perfil de usuário e o que você gostaria de ver primeiro funcionam corretamente; Todos os campos obrigatórios são exigidos corretamente e mostram uma mensagem de erro caso não sejam preenchidos; O botão de "já possui cadastro" funciona corretamente; O botão de voltar funciona corretamente; O botão "próximo" exige todos os campos obrigatórios preenchidos e redireciona corretamente para a página de validação de dados; Os dados foram salvos no local storage; A responsividade funciona corretamente.|
| Responsável pela execução do caso de Teste | Erick Costa |
|Registro do teste |![Cadastrogif](https://github.com/user-attachments/assets/d1a49695-e7c6-4838-83fd-6c58ff728ca5)|

|Caso de Teste    | CT-03 - Teste da Página de Validação de Dados |
|:---|:---|
| Resultados obtidos | Cadastro realizado com sucesso; Email recebido corretamente; Tentei inserir o código errado e não confirmou a validação; Inseri o código correto e foi validado com sucesso;|
| Responsável pela execução do caso de Teste | Mariana Turibio Gressi |
|Registro do teste | ![Validacaogif](https://github.com/user-attachments/assets/372013cd-f9d0-4284-98c6-e988289313c8) |


|Caso de Teste    | CT-04 - Teste da Página de Login |
|:---|:---|
| Resultados obtidos | Página acessada com sucesso; Acesso ocorreu corretamente com o e-mail e senha cadastrados e ocorreu redirecionamento para a Homepage; Usuário logado corretamente no localStorage; Ao tentar realizar login com e-mail e senha não cadastrados anteriormente e a aplicação informou que o cadastro não foi encontrado;|
| Responsável pela execução do caso de Teste | Mariana Turibio Gressi |
|Registro do teste | ![Logingif](https://github.com/user-attachments/assets/e9bc1698-9e85-4fc1-9d29-5aa5700b3e85) |


|Caso de Teste    | CT-05 - 06 - Teste da Página "Esqueceu a senha?" + Redefinição |
|:---|:---|
| Resultados obtidos | Acessei a pagina de login; Pedi para redefinir minha senha; Informei um email incorreto e o sistema informado que não foi localizado; Informei o email correto e recebi um email com um link para redefinição de senha; Cliquei no link cadastrei a nova senha e fui redirecionado para o login novamente; Fiz login com sucesso com a nova senha;|
| Responsável pela execução do caso de Teste | Mariana Turibio Gressi |
|Registro do Teste | ![redefinicaogif](https://github.com/user-attachments/assets/7b0cf2c9-608a-4b24-b2b0-55c1f271fdeb) |


|Caso de Teste    | CT-07 - Teste de Logout |
|:---|:---|
| Resultados obtidos | Ao clicar em “sair” o programa excluí o campo “usuário logado” do localstorage e mantem o cadastro do usuário para futuros acessos; Ao clicar em “sair” o usuário é direcionado para tela de login; Logout não exclui atualizações feitas no programa;|
| Responsável pela execução do caso de Teste | Kauê Alves dos Reis |
|Registro do teste | ![logoutgif](https://github.com/user-attachments/assets/d56d1010-74b0-43a5-86a6-637e9a5010a8)
   |


|Caso de Teste    | CT-08 - Teste da Página Main (Minha Área) |
|:---|:---|
| Resultados obtidos | A aplicação exibe Boas- vindas com seu nome; O dashboard do main é igual ao do edição de tela; O resumo financeiro é somatoria das receitas e despesas mensais do mes atual; O historico do mes só exibe os regsitros do mes atual; As metas são criadas corretamente; As metas são exibidas corretamente; As metas são atualizadas corretamente; As metas são excluidas corretamente; Os conteudos vistos recentmente são exibisdos corretamente; Os links dos conteudos vistos recentemente são redirecionados corretamente; Os conteudos recomendados são exibidos corretamente; Os links do conteudos recomendado estão sendo redirecionados para o conteudo correto;|
| Responsável pela execução do caso de Teste | Kauê Alves dos Reis |
|Registro  do teste | ![Maingif](https://github.com/user-attachments/assets/efe27de1-e4f2-4bbe-bb27-7a759027154c) |


|Caso de Teste    | CT-09 - Testes da Página de Edição de Dashboard |
|:---|:---|
| Resultados obtidos | Ao preencher e salvar os dados que foram inseridos corretamente, os conteúdos dos gráficos se atualizam de acordo com as entradas de dados; Ao selecionar a opção de “Valor recorrente” dentro do pop-up de edição, o valor é carregado de acordo com a frequência que foi selecionada; Caso algum dado seja preenchido de forma incorreta ou algum campo não seja preenchido, a página informa um erro; Ao modificar um registro em “Editar Dados” o Dashboard é automaticamente atualizado para as informações agora atualizadas; Ao clicar em remover dados, o registro de entradas ou saídas selecionado some do Dashboard e do Histórico. Ao filtrar o ano e mês, o Dashboard corresponde aos dados inseridos por data. Ao clicar em “Buscar” após filtrar os dados, a página exibe uma listagem do histórico ordenado por data; Uma mensagem amigável como “Nenhum conteúdo visto ainda” é exibida quando o usuário tem seu primeiro acesso;|
| Responsável pela execução do caso de Teste | Maria Cecilia Caruzzo Modica|
|Registro do teste|  |


|Caso de Teste    | CT-10 - Testes da Páginas de Conteudo |
|:---|:---|
| Resultados obtidos | Ao clicar no menu ou digitar na barra de pesquisa, o usuário encontra o conteúdo e seleciona, a página redireciona aos conteúdos selecionados e é possível continuar as buscas a partir dessa página;|
| Responsável pela execução do caso de Teste | Diogo Joia |
|Registro do teste |  ![conteudosgif](https://github.com/user-attachments/assets/ab75f2ce-24db-4d92-ae2b-7565e45186a1)
  |


|Caso de Teste    | CT-11 - Testes da Página de Resultado de Pesquisa |
|:---|:---|
| Resultados obtidos | O usuário deverá ser redirecionado corretamente para a página de resultado de pesquisa após selecionar a barra de pesquisa, digitar a palavra-chave e clicar botão da lupa (ícone de pesquisa);  O usuário deve conseguir realizar suas pesquisas a partir da barra de pesquisa de todas as páginas da aplicação que contenham a barra de pesquisa; O conteúdo deverá ser filtrado corretamente de acordo com o perfil do usuário; O usuário deverá ser redirecionado para a página do conteúdo ao clicar em um resultado de conteúdo; Ao digitar uma palavra que não é relacionada a nenhum conteúdo existente, a página mostra uma mensagem de “Conteúdo não encontrado”;
| Responsável pela execução do caso de Teste | Diogo Joia |
|Registro do teste | ![pesquisagif](https://github.com/user-attachments/assets/edd2dec2-fb1a-4bf1-a655-b1091e303bad) |


|Caso de Teste    | CT-12 - Teste das Página de Perfil |
|:---|:---|
| Resultados obtidos | Acesso da pagina com sucesso; Inserimento de dados dos campos com sucesso; Uploud de imagem realizado com sucesso; Botão salvar  funcionando; Dados salvos estão sendo corretamente salvo no local sotorage dentro email do usuario; Responsividade funcionando ; Botão menu  responsivo
| Responsável pela execução do caso de Teste | Matheus Feliciano |
|Registro do Teste |  |

|Caso de Teste    | CT-13 - Teste dos Menus|
|:---|:---|
| Resultados obtidos |Icone de menu aparente em todas as páginas; Menu exibido de acordo com o usuário; Todos os botões redirecionam para a página correta; Menu responsivo |
| Responsável pela execução do caso de Teste | Kauê Alves dos Reis |
|Registro do teste |  ![menugif](https://github.com/user-attachments/assets/38ffe6ce-4d30-40e0-bd0b-09f69dd62ab1)
 |


|Caso de Teste    | CT-14 - Teste das Páginas de Feedback |
|:---|:---|
| Resultados obtidos |Acesso a pagina com sucesso; Seleção de estrelas ok; Escrever comentario no campo de texto realizado com exito; Botão enviar funcionando; Dados salvos no localstorage; Botão funciona; Botão minha area funcionando corretamente; Icone de perfil fazendo direcionamento correto; Barra secundaria para telas menores funcionando corretamente; Menu funcionando corretamente;|
| Responsável pela execução do caso de Teste | Matheus Feliciano |
|Registro do teste | ![Feedbackgif](https://github.com/user-attachments/assets/c8775606-70de-4232-96d4-c63b24495770) |




