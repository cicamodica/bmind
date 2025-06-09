# Plano de Testes de Software

Abaixo estão os cenários de testes selecionados para avaliação da aplicação Bmind. Esses cenários foram cuidadosamente escolhidos com o objetivo de validar as diferentes funcionalidades implementadas, proporcionando uma excelente experiência aos usuários do sistema. Os requisitos para realização dos testes de software são:

-	Site publicado na Internet (Github Pages)
-	Navegador da Internet - Chrome, Firefox ou Edge
-	Conectividade de Internet para acesso às plataformas (APISs)

No nosso plano de teste de software, foram selecionados os seguintes cenários para serem testados:

## Testes de Navegabilidade:
Tem por objetivo verificar se todos os links são navegáveis, estão corretos e levam o usuário a uma outra tela existente na aplicação. Foram feitos testes automatizados e testes manuais, como seguem os resultados abaixo.
Os Testes automatizados foram realizados através de: https://datayze.com/site-navigability-analyzer
Também foram feitos testes de forma manual navegando pela aplicação somente para exemplificar o procedimento manual, visto que, os testes automatizados foram positivos e não apresentaram problemas de navegabilidade na aplicação.

## Teste de Responsividade:
Os testes de responsividade foram automatizados pelo Google: 
Teste de compatibilidade com dispositivos móveis https://search.google.com/test/mobile-friendly?hl=pt
Link para os resultados:  
Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

|Caso de Teste   | CT-01 - Testes da Página de Homepage |
|:---|:---|
| Requisitos Associados | RF-18, RF-24 |
| Objetivo do Teste | Verificar se a homepage carrega corretamente; Verificar funcionamento do carrossel; Verificar se os ícones da barra estão aparecendo conforme login do usuário; Verificar se o botão fazer login leva a página de login; Verificar se o botão cadastre-se leva a pagina de cadastro; Verificar se o icone de perfil leva a pagina de perfil; Verificar se os conteudos exibidos estão aparecendo corretamente; Verificar se a barra de pesquisa funciona;|
| Passos | Acessar a URL principal do site deslogado; Observe se a interface exibida aparece no canto superior direito os botoes de fazer login e cadastre-se; Teste os botoes para verificar se redirecionam para a pagina correta; Faça uma pesquisa na barra de pequisa e verifique se os conteudos aparecem; Observar rotação de slides ao clicar nas setas do carrossel; Faça login na plataforma; Observe se os botoes de fazer login e cadastre-se somem e dão lugar ao icone de perfil; Clique no icone de perfil e verifique se redirecione para a pagina de perfil;|
| Critérios de êxito | A página inicial é carregada sem erros; Os botões estão de acordo com o login e redirecionam para as páginas corretas; A pesquisa exibe um resultado tanto no logado quando no não logado; Os slides do carrossel mudam corretamente e sem falhas tanto no logado quanto no não logado;|
| Responsável pela elaborar do caso de Teste | Mariana Turibio Gressi |

|Caso de Teste   | CT-02 - Teste da Página de Cadastro |
|:---|:---|
| Requisitos Associados | RF-01 |
| Objetivo do Teste | Verificar se a partir dos dados fornecidos a funcionalidade de registrar usuário é possível de ser concluída; Verificar se caso algum dado seja preenchido incorretamente (ou se algum campo não for preenchido) o programa mostra a mensagem de erro;|
| Passos | Acessar a página de cadastro; Preencher os dados corretamente (por exemplo, digitar o e-mail com @, digitar apenas números no campo de “Telefone de contato”, data de nascimento maior de 16 anos, selecionar o perfil e as checkbox de preferências e preencher todos os dados); Verificar se o ícone de ocultar senha (olho) funciona corretamente; Verificar se botão de voltar volta para página de menu não logado; Verificar se botão “Já possuí cadastro” redireciona para página de login; Clicar no botão "próximo"; Verificar se dados foram salvos em local storage e consegue fazer login com o cadastro feito; Verificar responsividade;|
| Critérios de êxito | Ao clicar no botão "próximo" o programa deverá cadastrar o usuário, enviar um pop-up indicando o recebimento de um e-mail com o código de validação e redirecionar o usuário para a página de validação de dados; Todos os campos obrigatórios devem estar validados; Exibição de mensagens de erro caso algum campo obrigatório esteja vazio; Ícone ocultar oculta a senha digitada; “Já possui cadastro” redireciona corretamente; Dados salvos no local storage e redirecionado para página de validação de dados após clicar em “próximo”; Página reponsiva.|
| Responsável pela elaborar do caso de Teste | Kauê Alves dos Reis |

|Caso de Teste   | CT-03 - Teste da Página de Validação de dados |
|:---|:---|
| Requisitos Associados | RF-02 |
| Objetivo do Teste | Verificar o recebimento do e-mail com o código de validação; Verificar se ao preencher o campo com o código correto a validação poderá ser realizada; Verificar se ao preencher o campo com o código incorreto (por exemplo, inserir letra ou caractere especial), o programa mostra a mensagem de erro;|
| Passos | Acessar a página de validação de dados a partir da página de cadastro; Preencher o campo de código de validação corretamente; Clicar no botão "confirmar";|
| Critérios de êxito | Ao clicar no botão "próximo" o programa deverá validar os dados do usuário e deverá redirecioná-lo para a página de login;|
| Responsável pela elaborar do caso de Teste | Maria Cecilia Caruzzo Modica |

|Caso de Teste   | CT-04 - Teste da Página de Login |
|:---|:---|
| Requisitos Associados | RF-03 |
| Objetivo do Teste | Verificar se a partir do e-mail e senha fornecidos corretamente o login será realizado; Verificar se o usuário foi logado; Verificar se ao preencher o campo com o dado incorreto, o programa mostra a mensagem de erro;|
| Passos | Acessar a página de login; Preencher os dados corretamente (e-mail e senha cadastrados pelo usuário); Clicar no botão "próximo"; Verificar se ao clicar no botão “próximo” o usuário será logado;|
| Critérios de êxito | Ao clicar no botão "próximo" o programa deverá redirecionar o usuário para a página de homepage;|
| Responsável pela elaborar do caso de Teste | Maria Cecilia Caruzzo Modica |

|Caso de Teste   | CT-05 - Teste da Página “Esqueceu a senha?” |
|:---|:---|
| Requisitos Associados | RF-04 |
| Objetivo do Teste | Verificar se ao preencher o campo com o e-mail cadastrado anteriormente o usuário poderá prosseguir para a página de a redefinição de senha; Verificar se ao preencher o campo com o e-mail incorreto, o programa mostra a mensagem de erro;|
| Passos | Acessar a página de login; Clicar no botão “Esqueceu a senha?”; Preencher o campo com o e-mail que foi cadastrado anteriormente; Clicar no botão “Enviar”; Verificar o recebimento pop-up informando o recebimento do e-mail com o link de redirecionamento para a página de redefinição de senha;|
| Critérios de êxito | Ao clicar no botão "Enviar" o programa deverá enviar um pop-up indicando o recebimento do e-mail com o link para redirecionamento do usuário para a página de redefinição de senha;|
| Responsável pela elaborar do caso de Teste | Maria Cecilia Caruzzo Modica |

|Caso de Teste   | CT-06 -  Teste da Página de Redefinição de senha |
|:---|:---|
| Requisitos Associados | RF-04 |
| Objetivo do Teste | Verificar o recebimento do e-mail com o link da página de redefinição de senha (encaminhado a partir da página “Esqueceu sua senha?”); Verificar se ao preencher os campos “nova senha” e “confirmação de senha” com dados iguais a redefinição de senha será realizada; Verificar se ao preencher os campos com dados divergentes, o programa mostra a mensagem de erro;|
| Passos |Clicar no link de redirecionamento dentro do e-mail para abrir a página de redefinição de senha; Preencher os dados de maneira igual (nova senha e confirmação de senha preenchidos com dados iguais); Clicar no botão "Redefinir"; Verificar se o usuário terá a senha redefinida dentro do localStorage e será redirecionado para a página de login;|
| Critérios de êxito | Ao verificar o recebimento do e-mail com o link de redirecionamento o usuário deverá clicar no link e será redirecionado; Ao clicar no botão "Redefinir" o programa deverá redefinir a senha do usuário e redirecioná-lo para a página de login;|
| Responsável pela elaborar do caso de Teste | Maria Cecilia Caruzzo Modica |

|Caso de Teste   | CT-07 -  Teste de Logout |
|:---|:---|
| Requisitos Associados | RF-10 |
| Objetivo do Teste |Verificar se os dados de “usuário logado” são removidos do localStorage; Verificar se os dados do cadastro não são excluídos ao clicar no botão de “sair”;  Verificar se o usuário será redirecionado para a tela de login;|
| Passos |Acessar a aplicação e logar; Acessar o menu no canto superior esquerdo da página (todos os menus das páginas de usuário logado contém o botão de “sair”);
Clicar em “sair”; Verificar se os dados de “usuário logado” foram removidos do localStorage e se o cadastro não foi excluído; Verificar se o usuário será redirecionado para a tela de login;|
| Critérios de êxito | Ao clicar em "sair" o programa excluíra apenas o campo “usuário logado” do localStorage, mantendo o cadastro do usuário para futuros acessos; Ao clicar em “sair” o usuário será redirecionado para a página de login;|
| Responsável pela elaborar do caso de Teste | Matheus Feliciano Andrade Bernardes |

|Caso de Teste   | CT-08 -  Teste de Logout |
|:---|:---|
| Requisitos Associados | RF-10 | 
| Objetivo do Teste |Verificar se os dados de “usuário logado” são removidos do localStorage; Verificar se os dados do cadastro não são excluídos ao clicar no botão de “sair”;  Verificar se o usuário será redirecionado para a tela de login;|
| Passos |Acessar a aplicação e logar; Acessar o menu no canto superior esquerdo da página (todos os menus das páginas de usuário logado contém o botão de “sair”);
Clicar em “sair”; Verificar se os dados de “usuário logado” foram removidos do localStorage e se o cadastro não foi excluído; Verificar se o usuário será redirecionado para a tela de login;|
| Critérios de êxito | Ao clicar em "sair" o programa excluíra apenas o campo “usuário logado” do localStorage, mantendo o cadastro do usuário para futuros acessos; Ao clicar em “sair” o usuário será redirecionado para a página de login;|
| Responsável pela elaborar do caso de Teste | Matheus Feliciano Andrade Bernardes |

|Caso de Teste   | CT-09 - Testes da Página Main (Minha área) |
|:---|:---|
| Requisitos Associados | RF-06, RF-07, RF-12, RF-13, RF-17, RF-18, RF-20, RF-21, RF-22 | 
| Objetivo do Teste |Verificar se aplicação reconhece o seu login e deu Boas Vindas com seu nome; Verificar se o dashboard exibido conforme foi construído; Verificar se o resumo mensal exibido está de acordo com o que registrado no mês no dashboard; Verificar se o histórico do mês exibe apenas as despesas do mês atual; Verifcar se o botão Cadastre Novo Registro redireciona para a pagina onde fará o registro; Verificar se ao preencher os dados no card criar meta, uma meta é criada e exibida na tela; Verificar se é possível acompanhar, atualizar ou excluir uma meta; Verificar se os vistos recentemente estão sendo exibidos corretamente; Verificar de os conteúdos indicados estão sendo exibidos de acordo com as preferencias que o usuário fez no cadastro;|
| Passos |Acessar a pagina Minha Área; Observar se as boas vindas possui seu nome de cadastro; Comparar o dashboard da pagina de edição com o do main e observar se são iguais; Observar se o resumo mensal faz a somatoria apenas das receitas e despesas relativas ao mes atual; Observar se o historico mensal, exibe apenas as despesas cadastradas no mes; Clicar no botão Cadastre Novo Registro e verificar se ele redireciona para a pagina de edição; Preencher os campos de criar meta e verificar se ela é criada corretamente; Observar se após criar uma meta ela é exibida em card abaixo; Atualizar o valor de uma meta; Excluir uma meta; Abrir diversos conteudos e verificar se todos serão exibidos nos vitos recentmente; Clicar no conteudo do vistos recentemente e verifocar se leva para o conteudo correto; Observar se os conteudos recomendados estão de acordo com a preferencia do ususario no cadastro; Clicar  nos conteudos recomendados e verificar se eles redirecionam para uma das paginas de conteudo do tema escolhido; Clicar no botão de perfil e verificar se redireciona para a pagina de perfil; Fazer uma pesquisa e oberservar se  terá um resultado; Repita os passo no perfil PJ tambem;|
| Critérios de êxito | A aplicação exibe Boas- vindas com seu nome; O dashboard do main é igual ao do edição de tela; O resumo financeiro é somatoria das receitas e despesas mensais do mes atual; O historico do mes só exibe os regsitros do mes atual; As metas são criadas corretamente; As metas são exibidas corretamente; As metas são atualizadas corretamente; As metas são excluidas corretamente; Os conteudos vistos recentmente são exibisdos corretamente; Os links dos conteudos vistos recentemente são redirecionados corretamente; Os conteudos recomendados são exibidos corretamente; Os links do conteudos recomendado estão sendo redirecionados para o conteudo correto;
| Responsável pela elaborar do caso de Teste | Mariana Turibio Gressi |

|Caso de Teste   | CT-10 - Testes da Página de Edição de Dashboard |
|:---|:---|
| Requisitos Associados | RF-06, RF-07, RF-08, RF-13, RF-17, RF-22 | 
| Objetivo do Teste |Verificar se ao preencher os campos com dados corretos (de entrada e saída de valores) os valores são computados; Verificar se ao preencher os dados e clicar em “Valor recorrente” dentro do pop-up, o valor será registrado até determinado período; Verificar se ao preencher os campos com dados incorretos (por exemplo, texto no campo numérico) ou se o usuário deixar de preencher algum campo obrigatório, será exibida uma mensagem de erro;  Verificar se ao clicar em “Remover Dados” será possível selecionar o dado específico e excluí-lo do dashboard; Verificar se ao modificar dados em “Editar Dados” será alterado no Dashboard; Verificar se os filtros de ano e mês alteram a data do Dashboard;  Verificar se o “Histórico” registrou os dados por ano e mês; Verificar a funcionalidade do Filtro e histórico do Dashboard; Verificar se o filtro por data está funcionando no Dashboard; Verificar se ao clicar no botão “Histórico” e filtrar o conteúdo desejado, os dados serão exibidos em um resumo; Verificar estado da página com dados vazios no primeiro acesso do usuário;|
| Passos |Clicar em “Entrada” ou “Saída”; Selecionar os dados que serão adicionados (entrada ou saída) e preencher os campos corretamente (valor, data, categoria,); Clicar em “Valor recorrente” e selecionar a frequência;  Clicar em “Salvar” dentro do pop-up e depois clicar em “Salvar alterações”; Preencher campos com dados incorretos ou deixar um campo vazio e tentar salvar; Clicar em “Editar Dados” e selecione entradas ou saídas; Selecionar um registro e alterar os dados; Clicar em “Salvar”; Clicar em “Remover dados”  Selecionar um registro e clique em remover; Clicar em “Salvar”; Clicar no botão “Filtrar por Ano” e selecionar um ano; Clicar no botão “Filtrar por Mês” e selecionar um mês; Clicar no botão “Histórico”; Filtrar os dados desejados e clicar no botão “Buscar”; Verificar a exibição do histórico como um resumo; Acessar a página sem ter preenchido nada do dashboard;|
| Critérios de êxito |Ao preencher e salvar os dados que foram inseridos corretamente, os conteúdos dos gráficos se atualizam de acordo com as entradas de dados; Ao selecionar a opção de “Valor recorrente” dentro do pop-up de edição, o valor será carregado de acordo com a frequência que foi selecionada; Caso algum dado seja preenchido de forma incorreta ou algum campo não seja preenchido, a página deve informar um erro; Ao modificar um registro em “Editar Dados” o Dashboard será automaticamente atualizado para as informações agora atualizadas; Ao clicar em remover dados, o registro de entradas ou saídas selecionado deve sumir do Dashboard e do Histórico. Ao filtrar o ano e mês, o Dashboard deve corresponder aos dados inseridos por data. Ao clicar em “Buscar” após filtrar os dados, a página deve exibir uma listagem do histórico ordenado por data; Verificar se uma mensagem amigável como “Nenhum conteúdo visto ainda” é exibida quando o usuário tem seu primeiro acesso;|
| Responsável pela elaborar do caso de Teste | Erick Costa e Diogo Joia |

|Caso de Teste   | CT-11 - Testes das Páginas de Conteúdo |
|:---|:---|
| Requisitos Associados | RF-05 | 
| Objetivo do Teste |Verificar se ao clicar no conteúdo a partir do ícone do menu (localizado no canto superior esquerdo das páginas, tanto de usuário logado quando deslogado) ou se pesquisar diretamente pela barra de pesquisa o usuário será corretamente redirecionado para a página de conteúdo que selecionou; Verificar se é possível realizar as pesquisas (menu ou barra de pesquisa) a partir de outra página de conteúdo já aberta;|
| Passos |Clicar no ícone do menu ou digitar o conteúdo desejado na barra de pesquisas e selecionar e buscar; Clicar no conteúdo desejado; Aguardar o carregamento da página selecionada; Fazer esse caminho novamente diretamente de outra página de conteúdo (todas as páginas possuem o ícone de menu e a barra de pesquisa);|
| Critérios de êxito |Ao clicar no menu ou digitar na barra de pesquisa, o usuário deve encontrar o conteúdo e selecioná-lo, a página deve redirecioná-lo aos conteúdos selecionados e deve ser possível continuar as buscas a partir dessa página;|
| Responsável pela elaborar do caso de Teste | Matheus Feliciano Andrade Bernardes |

|Caso de Teste   | CT-12 - Testes da Página de resultado de Pesquisa |
|:---|:---|
| Requisitos Associados | RF-16 | 
| Objetivo do Teste |Verificar se após o usuário selecionar a barra de pesquisa, digitar a palavra-chave e clicar botão da lupa (ícone de pesquisa), ele será redirecionado corretamente para a página de resultado de pesquisa; Verificar se é possível realizar as pesquisas pela da barra de pesquisa a partir de outra página de conteúdo já aberta; Verificar se o conteúdo é filtrado corretamente de acordo com o perfil do usuário e se o filtro da barra de pesquisa para as palavras-chave funciona de acordo com o que é digitado pelo usuário; Verificar se ao clicar em um resultado de conteúdo ele redireciona para a página do conteúdo corretamente; Verificar se ao digitar uma palavra que não é relacionada a nenhum conteúdo existente, a página mostra uma mensagem de “Conteúdo não encontrado”;|
| Passos |Clicar na barra de pesquisa localizada no cabeçalho da página (no modelo mobile a barra de pesquisa fica “escondida”, então deve-se clicar no ícone de pesquisa, assim a barra de pesquisa ficará visível); Digitar a palavra-chave que deseja buscar (exemplo: “planejamento”); Clicar no ícone de pesquisa (lupa) e aguardar o carregamento da página de resultados de pesquisa; Clicar no conteúdo desejado e verificar se ocorre corretamente o redirecionamento para a página do conteúdo; Fazer esse caminho novamente diretamente de outras páginas (a maioria das páginas possuem a barra de pesquisa, não somente as de conteúdo); Digitar uma palavra aleatória (que não tenha ligação com os conteúdos existentes) e clicar no ícone de pesquisa; Aguardar o carregamento da página de resultados de pesquisa e verificar se a mensagem de que “Conteúdo não encontrado” fica visível na página;|
| Critérios de êxito |O usuário deverá ser redirecionado corretamente para a página de resultado de pesquisa após selecionar a barra de pesquisa, digitar a palavra-chave e clicar botão da lupa (ícone de pesquisa); O usuário deve conseguir realizar suas pesquisas a partir da barra de pesquisa de todas as páginas da aplicação que contenham a barra de pesquisa; O conteúdo deverá ser filtrado corretamente de acordo com o perfil do usuário; O usuário deverá ser redirecionado para a página do conteúdo ao clicar em um resultado de conteúdo; Ao digitar uma palavra que não é relacionada a nenhum conteúdo existente, a página mostra uma mensagem de “Conteúdo não encontrado”;|
| Responsável pela elaborar do caso de Teste | Maria Cecilia Caruzzo Modica |

|Caso de Teste   | CT-13 - Testes da Página de Perfil |
|:---|:---|
| Requisitos Associados | RF-11 | 
| Objetivo do Teste |Verificar se o usuário consegue editar e salvar com sucesso suas informações pessoais (nome, contato, data de nascimento) e realizar upload de imagem e garantir o funcionamento dos elementos do cabeçalho.|
| Passos |Acessar a página de Perfil; Inserir ou alterar os dados nos campos: Nome, Contato, Data de Nascimento e Perfil; Clicar em "Fazer upload de imagem" e selecionar uma imagem válida; Clicar no botão "Salvar"; Verificar se os dados foram atualizados com sucesso e se a imagem foi salva corretamente; Verificar responsividade; Verificar navegação do botão “menu”;|
| Critérios de êxito |As informações são salvas corretamente no banco de dados (local storage); A imagem é carregada e exibida corretamente; Uma mensagem de confirmação é exibida; Não ocorre nenhum erro ou travamento na interface; Barra de pesquisa está funcional; Botões de navegação como “menu” e “minha área” direciona para as páginas corretamente; Interface permanece estável e responsiva;|
| Responsável pela elaborar do caso de Teste | Kauê Alves dos Reis |

|Caso de Teste   | CT-14 - Testes dos Menus |
|:---|:---|
| Requisitos Associados | RF-23 | 
| Objetivo do Teste |Verificar se existe icone de menu; Verificar se o menu é exibido conforme o usuario logado; Verificar se o menu possui indicação para todas as paginas, exceto homepage; Verificar se os botoes direcionam para as telas corretas; Verificar se o botão sair desloga;|
| Passos |Abra a Home Page; Encontre o icone de menu; Clique no icone de menu; Observe se o que aparece condiz com o fato de não estar logado (deve aparecer somente os conteudos); Faça login PF; Verifique se o menu esta correto conforme o usuario; Entre nas paginas para verificar que o botão redireciona para a pagina correta; Refaça o teste em todas as paginas e todos os perfis.|
| Critérios de êxito |Icone de menu aparente; Menu é exibido de acordo com usuario; Todos os botoes redirecionam para a pagina correta;|
| Responsável pela elaborar do caso de Teste | Mariana Turibio Gressi |

|Caso de Teste   | CT-15 - Testes da Página de Feedback |
|:---|:---|
| Requisitos Associados | RF-19 | 
| Objetivo do Teste |Validar se o usuário consegue avaliar sua experiência por meio de estrelas e enviar um comentário, bem como garantir o funcionamento dos elementos do cabeçalho;|
| Passos |Acessar a página de Feedback; Selecionar uma quantidade de estrelas (de 1 a 5); Escrever um feedback no campo de texto; Clicar em "Enviar"; Verificar se os dados foram enviados corretamente e se foram salvos no local storage; Testar o botão "Cancelar" e verificar se limpa os campos; Testar o campo de busca no cabeçalho; Clicar no botão "Minha Área" e verificar redirecionamento.
Clicar no ícone de perfil e verificar se redireciona corretamente para a página de perfil; Verificar responsividade; Verificar navegação no “menu”;|
| Critérios de êxito |Feedback são salvos corretamente; O botão "Cancelar" limpa o campo de feedback sem erros; O campo de busca funciona corretamente; Botão “Minha Área” e ícone de perfil redirecionam corretamente; Navegação no “menu” funciona corretamente; Interface permanece estável e responsiva;|
| Responsável pela elaborar do caso de Teste | Kauê Alves dos Reis |
