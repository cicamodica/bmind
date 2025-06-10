# Especificação do Projeto

## Perfis de Usuários


<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01: Pessoa Física </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Tem idade entre 18 e 50 anos. Seu objetivo é aprender a administrar o seu dinheiro. </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td align="left">
  
  
1. Acesso fácil a conteúdos didáticos e ferramentas de qualidade sobre finanças
  
2. Utilizar ambientes digitais em que esteja familiarizado
   
3. Conteúdos apresentados em dispositivos diversificados (responsividade)
   
4. Acesso à ferramenta de gerenciamento (dashboard) com cálculos automatizados para cada necessidade (orçamento mensal, porcentagem de poupança, reserva de 
  emergência etc.)

5. Acesso a planos financeiros a partir das necessidades (plano de economia, plano de investimento, plano para sair do endividamento)
</td>
</tr>
<tr align=center>
<th colspan="2">Perfil 02: Pessoa Júridica </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Seu objetivo é aprender sobre finanças para empreendedores.  </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td align="left">
  
  
1. Acesso fácil a conteúdos didáticos e ferramentas de qualidade sobre finanças voltada para negócios 
  
2. Utilizar ambientes digitais em que esteja familiarizado
   
3. Conteúdos apresentados em dispositivos diversificados (responsividade)
   
4. Acesso à ferramenta de gerenciamento (dashboard) com cálculos automatizados para a necessidade de seu negócio (orçamento mensal, controle de vendas, controle de estoque, reserva de emergência etc.) 

5. Acesso a planos financeiros a partir das necessidades do seu negócio (plano de empreendedorismo, plano de investimento) 
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários


|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE`                      |PARA ... `PORQUE`                                    |
|--------------------|------------------------------------------------|-----------------------------------------------------|
| Pessoa física      |Visualizar meus recursos financeiros de forma dinâmica |Que eu possa controlar as minhas contas       |
| Pessoa física      |Entender maneiras de economizar                 |Aproveitar meu dinheiro sem me endividar             |
| Pessoa física      |Ter uma reserva de emergência                   |Cobrir imprevistos de despesas inesperadas           |
| Pessoa física      |Entender qual a melhor estratégia para pagar minhas dívidas sem comprometer meus gastos essenciais |Que eu possa recuperar minha estabilidade financeira |
| Pessoa física      |Conhecer sobre cobrança de juros                |Tomar decisões financeiras mais conscientes          |
| Pessoa física      |Entender sobre cheque especial e crédito rotativo |Evitar endividamentos desnecessários               |
| Pessoa física      |Criar metas realistas                           |Alcançar meus objetivos pessoais                     |
| Pessoa jurídica    |Saber como separar meu dinheiro pessoal do dinheiro da empresa |Facilitar a contabilidade e o pagamento de impostos|
| Pessoa jurídica    |Entender como negociar juros mais baixos        |Evitar endividamento excessivo                       |
| Pessoa jurídica    |Entender como planejar fluxos de caixa          |Tomar decisões estratégicas                          |
| Pessoa jurídica    |Entender impostos e obrigações fiscais          |Que eu possa crescer sem ficar devendo               |
| Pessoa jurídica    |Entender sobre empréstimos, crédito imobiliário, linhas de crédito|Que eu possa fazer financiamentos referentes ao meu negócio|
|Pessoa física/ Pessoa jurídica|Compreender como investir             |Construir uma reserva financeira sólida              |
|Pessoa física/ Pessoa jurídica|Entender como definir um objetivo financeiro|Criar metas realistas                          |
|Pessoa física/ Pessoa jurídica|Entender como aproveitar boas oportunidades|Identificar boas opções e evitar armadilhas financeiras|
|Pessoa física/ Pessoa jurídica|Conhecer o meu perfil investidor      |Escolher investimentos que se alinham aos meus objetivos|
|Pessoa física/ Pessoa jurídica|Compartilhar conteúdos relevantes     |Discutir sobre os temas com outras pessoas           |
|Pessoa física/ Pessoa jurídica|Criar uma conta                       |Acessar os meus dados personalizados                 |
|Pessoa física/ Pessoa jurídica|Encontrar conteúdos de forma rápida   |Otimizar o meu tempo                                 |
|Pessoa física/ Pessoa jurídica|Registrar minhas receitas e despesas  |Administrar meus recursos                            |
|Pessoa física/ Pessoa jurídica|Enviar feedbacks sobre a aplicação    |Sugerir novas melhorias                              |
|Pessoa física/ Pessoa jurídica|Acessar uma sessão de perguntas frequentes|Encontrar respostas  mais rapidamente            |

## Requisitos do Projeto


### Requisitos Funcionais



|ID     | Descrição                                                                                                                                 | Prioridade |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------|------------|
| RF-01	| A aplicação deve permitir que o usuário crie uma conta.	                                                                                  |    ALTA    |
| RF-02	| A aplicação deve disponibilizar uma página para validação dos dados cadastrados pelo usuário.	                                            |    ALTA    |
| RF-03 |	A aplicação deve permitir que o usuário faça login em sua conta.	                                                                        |    ALTA    |
| RF-04 |	A aplicação deverá permitir que o usuário redefina sua senha.	                                                                            |    ALTA    |
| RF-05	| A aplicação deve disponibilizar conteúdos didáticos sobre finanças, como: Finanças Pessoais, Finanças Corporativas, Investimentos Pessoais, Investimentos Corporativos, Operações Bancárias.	                                                                                                                                                                          |    ALTA    |
| RF-06 |	A aplicação deve disponibilizar ao usuário uma ferramenta (dashboard) para o acompanhamento e controle de suas finanças.	                |    ALTA    |
| RF-07 |	A aplicação deve disponibilizar ao usuário uma ferramenta (dashboard) para o acompanhamento de metas estabelecidas pelo próprio.          |    ALTA    |
| RF-08	| A aplicação deve disponibilizar ao usuário uma ferramenta para o registro de receitas e despesas.	                                        |    ALTA    |
| RF-09	| A aplicação deve permitir a categorização dos registros inseridos pelo usuário.	                                                          |    ALTA    |
| RF-10	| A aplicação deverá permitir que o usuário deslogue de sua conta.                                                                          |	   ALTA    |
| RF-11	| A aplicação deve permitir que o usuário visualize, edite e salve suas informações pessoais (incluindo nome, contato, data de nascimento) e imagem de perfil. |	 ALTA   |
| RF-12	| A aplicação deve exibir uma mensagem de boas-vindas personalizada para o usuário logado.	                                                |    ALTA    |
| RF-13	| A aplicação deve permitir que o usuário cadastre e gerencie metas financeiras com título, valor total, valor atual e data limite.	        |    ALTA    |
| RF-14	| O menu deve permitir a navegação para as principais seções da aplicação (Minha Area, Dashboard, Conteúdo Didático, Perfil,FAQ), conforme usuário logado.	|   ALTA   |
| RF-15	| A aplicação deve possuir uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar o conteúdo desejado (de acordo com os tópicos listados em RF - 05).	|   MÉDIA   |
| RF-16	| A aplicação deve permitir a visualização de gráficos e tabelas para facilitar a compreensão dos cálculos financeiros.	                    |   MÉDIA   |
| RF-17	| Oferecer sugestões de conteúdo personalizado de acordo com o dashboard.	                                                                  |   MÉDIA   |
| RF-18	| A aplicação deve disponibilizar uma aba de suporte, para recolher feedbacks de usuários, dar apoio e sanar suas possíveis dúvidas referentes à própria aplicação	|   MÉDIA   |
| RF-19	| A aplicação deve registrar e exibir os conteúdos didáticos visualizados recentemente pelo usuário.	                                      |   MÉDIA   |
| RF-20	| A aplicação deve exibir um resumo mensal de entradas e saídas financeiras no dashboard.	                                                  |   MÉDIA   |
| RF-21	| A aplicação deve exibir um histórico das transações do mês atual no dashboard.	                                                          |   MÉDIA   |
| RF-22	| O menu de navegação deve apresentar itens de menu específicos para o perfil de usuário (Pessoa Física ou Pessoa Jurídica).	              |   MÉDIA   |
| RF-23	| A aplicação deve ser fazer a verificação de logado ou não logado para exibir icone de perfil ou fazer login/cadastre-se.                  |   MÉDIA   |


**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais


|ID      | Descrição                                                                                                                             |Prioridade |
|--------|---------------------------------------------------------------------------------------------------------------------------------------|-----------|
| RNF-01 |A aplicação deverá ser responsiva permitindo sua visualização em dispositivos de tamanhos variados.                                    |   ALTA    | 
| RNF-02 |A aplicação deve ser compatível com os principais navegadores (Google Chrome, Firefox, Microsoft Edge).                                |   ALTA    | 
| RNF-03 |A aplicação deve permitir que o usuário personalize sua experiência, como ativação do modo noturno e ajustes de acessibilidade         |   MÉDIA   | 
| RNF-04 |A aplicação deve garantir a segurança dos dados do usuário por meio de criptografia.                                                   |   MÉDIA   | 

**Prioridade: Alta / Média / Baixa. 

