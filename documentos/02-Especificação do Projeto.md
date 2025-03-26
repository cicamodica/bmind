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
| Pessoa física      |Organizar meu salário de forma eficiente        |Que eu possa garantir o pagamento das minhas contas  |
| Pessoa física      |Aprender maneiras de economizar                 |Aproveitar meu dinheiro sem me endividar             |
| Pessoa física      |Entender como controlar as minhas despesas      |Que ao final do mês eu consiga garantir uma reserva de emergência para imprevistos|
| Pessoa física      |Entender qual a melhor estratégia para pagar minhas dívidas sem comprometer meus gastos essenciais |Que eu possa recuperar minha estabilidade financeira |
| Pessoa física      |Conhecer sobre cobrança de juros                |Tomar decisões financeiras mais conscientes          |
| Pessoa física      |Aprender sobre cheque especial e crédito rotativo |Evitar endividamentos desnecessários               |
| Pessoa física      |Criar um planejamento financeiro realista       |Recuperar o controle financeiro                      |
| Pessoa jurídica    |Saber como separar meu dinheiro pessoal do dinheiro da empresa |Facilitar a contabilidade e o pagamento de impostos |
| Pessoa jurídica    |Aprender a negociar juros mais baixos           |Evitar endividamento excessivo                       |
| Pessoa jurídica    |Aprender a planejar fluxos de caixa             |Tomar decisões estratégicas                          |
| Pessoa jurídica    |Entender impostos e obrigações fiscais          |Que eu possa crescer sem ficar devendo               |
| Pessoa jurídica    |Entender sobre empréstimos, crédito imobiliário, linhas de crédito|Que eu possa fazer financiamentos referentes ao meu negócio|
|Pessoa física/ Pessoa jurídica|Compreender como investir             |Construir uma reserva financeira sólida              |
|Pessoa física/ Pessoa jurídica|Aprender a definir um objetivo financeiro|Criar um plano financeiro eficiente               |
|Pessoa física/ Pessoa jurídica|Aprender a aproveitar boas oportunidades|Identificar boas opções e evitar armadilhas financeiras|
|Pessoa física/ Pessoa jurídica|Conhecer o meu perfil investidor      |Escolher investimentos que se alinham aos meus objetivos|

## Requisitos do Projeto


### Requisitos Funcionais



|ID     | Descrição                                                                                                                                 | Prioridade |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------|------------|
| RF-01 |A aplicação deve permitir que o usuário crie uma conta.                                                                                    |   ALTA     | 
| RF-02 |A aplicação deve permitir que o usuário faça login em sua conta.                                                                           |   ALTA     |
| RF-03 |A aplicação deve disponibilizar conteúdos didáticos sobre finanças relacionados á: Orçamento mensal, reserva de emergência, poupança, cartão de crédito, juros, parcelamento, inflação, poder de compra, custo efetivo total (CET) de empréstimos, renda passiva, comparadores financeiros, entre outros).          |   ALTA     |
| RF-04 |A aplicação deve disponibilizar ao usuário uma ferramente (dashboard) para o acompanhamento e controle de suas finanças, além da página voltada para as edições desse dashboard.                                                                                                                                          |   ALTA     |
| RF-05 |A aplicação deve fornecer uma ferramenta de controle financeiro interativo para planejamento de gastos e fluxo de caixa.                   |   ALTA     |
| RF-06 |A aplicação deve possuir uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar o conteúdo desejado (de acordo com os tópicos listados em RF - 03).                                                                                                                                        |   MÉDIA    |
| RF-07 |A aplicação deve permitir a visualização de gráficos e tabelas para facilitar a compreensão dos cálculos financeiros.                      |   MÉDIA    |
| RF-08 |Oferecer sugestões de conteúdo personalizado de acordo com o dashboard.                                                                    |   MÉDIA    |
| RF-09 |A aplicação deve disponibilizar uma aba de suporte, para recolher feedbacks de usuários, dar apoio e sanar suas possíveis dúvidas referentes à própria aplicação                                                                                                                                           |   MÉDIA    |
| RF-10 |A aplicação deve permitir o compartilhamento de artigos em redes sociais.                                                                  |   BAIXA    |
| RF-11 |A aplicação deve ser capaz de salvar todo conteúdo do usuário para oferecer melhores simulações futuras (histórico dos meses retroativos)  |   BAIXA    |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais


|ID      | Descrição                                                                                                                             |Prioridade |
|--------|---------------------------------------------------------------------------------------------------------------------------------------|-----------|
| RNF-01 |A aplicação deverá ser responsiva permitindo sua visualização em dispositivos de tamanhos variados.                                    |   ALTA    | 
| RNF-02 |A aplicação deve ser compatível com os principais navegadores (Google Chrome, Firefox, Microsoft Edge).                                |   ALTA    | 
| RNF-03 |A aplicação deve permitir que o usuário personalize sua experiência, como ativação do modo noturno e ajustes de acessibilidade         |   MÉDIA   | 
| RNF-04 |A aplicação deve garantir a segurança dos dados do usuário por meio de criptografia.                                                   |   MÉDIA   | 

**Prioridade: Alta / Média / Baixa. 

