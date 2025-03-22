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
   
3. Conteúdos apresentados em mídias diversificadas (responsividade)
   
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
   
3. Conteúdos apresentados em mídias diversificadas (responsividade)
   
4. Acesso à ferramenta de gerenciamento (dashboard) com cálculos automatizados para a necessidade de seu negócio (orçamento mensal, controle de vendas, controle de estoque, reserva de emergência etc.) 

5. Acesso a planos financeiros a partir das necessidades do seu negócio (plano de empreendedorismo, plano de investimento) 
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários


|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE`                      |PARA ... `PORQUE`                                    |
|--------------------|------------------------------------------------|-----------------------------------------------------|
| Pessoa física      |Poder organizar meu salário                     |Que eu possa pagar minhas contas                     |
| Pessoa física      |Aprender maneiras de economizar                 |Aproveitar meu dinheiro sem me endividar             |
| Pessoa física      |Poder organizar os gastos mensais de forma simples|Que eu possa economizar e garantir uma reserva de emergência para imprevistos|
| Pessoa física      |Entender qual a melhor estratégia para pagar minhas dívidas sem comprometer meus gastos essenciais |Que eu possa recuperar minha estabilidade financeira |
| Pessoa física      |Conhecer sobre cobrança de juros                |Evitar novas dívidas                                 |
| Pessoa física      |Aprender sobre cheque especial e crédito rotativo |Quitar minhas dívidas e ter controle financeiro    |
| Pessoa física      |Criar um planejamento financeiro realista       |Recuperar o controle financeiro                      |
| Pessoa jurídica    |Entender como separar meu dinheiro pessoal do dinheiro da empresa |Que eu possa organizar minhas finanças |
| Pessoa jurídica    |Aprender a negociar juros mais baixos           |Que eu possa crescer sem ficar devendo               |
| Pessoa jurídica    |Planejar fluxos de caixa e evitar endividamento empresarial|Que eu possa crescer de forma sustentável |
| Pessoa jurídica    |Entender impostos e obrigações fiscais          |Que eu possa crescer sem ficar devendo               |
| Pessoa jurídica    |Entender sobre empréstimos, crédito imobiliário, linhas de crédito|Que eu possa fazer financiamentos referentes ao meu negócio|
|Pessoa física/ Pessoa jurídica|Compreender como investir             |Desenvolver as qualidades essenciais de um investidor de sucesso|
|Pessoa física/ Pessoa jurídica|Aprender a definir um objetivo financeiro|Estabelecer metas e gastos necessários            |
|Pessoa física/ Pessoa jurídica|Encontrar um bom investimento que gere lucro de forma acessível|Obter lucros rápidos e sem grande risco|
|Pessoa física/ Pessoa jurídica|Identificar qual tipo de investimento é mais adequado ao meu perfil|Saber em quais investimentos preciso me aprofundar|
|Pessoa física/ Pessoa jurídica|Entender sobre meus recursos          |Gerir melhor o fundo de investimentos                 |

## Requisitos do Projeto


### Requisitos Funcionais



|ID     | Descrição                                                                                                                                 | Prioridade |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------|------------|
| RF-01 |A aplicação deve permitir que o usuário crie uma conta.                                                                                    |   ALTA     | 
| RF-02 |A aplicação deve permitir que o usuário faça login em sua conta.                                                                           |   ALTA     |
| RF-03 |A aplicação deve disponibilizar conteúdos didáticos sobre finanças para o usuário sobre Orçamento mensal (Receita – Despesas), Reserva de emergência, Poupança (taxa e rendimento), Compras em cartão de crédito (Juros), Parcelamento no cartão de crédito (Cálculo de parcelas > sistema price), inflação e poder de compra, Custo efetivo total (CET) de empréstimos, Renda passiva necessária para independência financeira, Comparadores financeiros entre outros).   |   ALTA     |
| RF-04 |A aplicação deve disponibilizar ao usuário uma dashboard editável para o controle de suas finanças.                                        |   ALTA     |
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
| RNF-03 |A aplicação deve implementar novas atualizações e funcionabilidades para manter o site sempre atualizado e competitivo.                |   ALTA    |
| RNF-04 |A aplicação deve permitir que o usuário personalize sua experiência, como ativação do modo noturno e ajustes de acessibilidade         |   MÉDIA   | 
| RNF-05 |A aplicação deve garantir a segurança dos dados do usuário por meio de criptografia.                                                   |   MÉDIA   | 

**Prioridade: Alta / Média / Baixa. 

