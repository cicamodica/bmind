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
| Objetivo do Teste | Verificar se a homepage carrega corretamente;
Verificar funcionamento do carrossel;
Verificar se os ícones da barra estão aparecendo conforme login do usuário;
Verificar se o botão fazer login leva a página de login;
Verificar se o botão cadastre-se leva a pagina de cadastro;
Verificar se o icone de perfil leva a pagina de perfil;
Verificar se os conteudos exibidos estão aparecendo corretamente;
Verificar se a barra de pesquisa funciona;|
| Passos | Acessar a URL principal do site deslogado;
Observe se a interface exibida aparece no canto superior direito os botoes de fazer login e cadastre-se;
Teste os botoes para verificar se redirecionam para a pagina correta;
Faça uma pesquisa na barra de pequisa e verifique se os conteudos aparecem;
Observar rotação de slides ao clicar nas setas do carrossel;
Faça login na plataforma;
Observe se os botoes de fazer login e cadastre-se somem e dão lugar ao icone de perfil;
Clique no icone de perfil e verifique se redirecione para a pagina de perfil;|
| Critérios de êxito | A página inicial é carregada sem erros;
Os botões estão de acordo com o login e redirecionam para as páginas corretas;
A pesquisa exibe um resultado tanto no logado quando no não logado;
Os slides do carrossel mudam corretamente e sem falhas tanto no logado quanto no não logado;|
| Responsável pela elaborar do caso de Teste | Mariana Turibio Gressi |
