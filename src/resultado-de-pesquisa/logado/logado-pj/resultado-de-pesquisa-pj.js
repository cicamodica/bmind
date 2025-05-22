//Funcionalidade da pesquisa (barra de pesquisa) > lê na URL o que foi pesquisado e procura nos conteúdos
document
  .getElementById("search-button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // evita o redirecionamento padrão
    const termo = document.getElementById("search-bar").value.trim();
    if (termo !== "") {
      const encodedTermo = encodeURIComponent(termo);
      window.location.href = `/src/resultado-de-pesquisa/logado/logado-pj/resultado-de-pesquisa-pj.html?q=${encodedTermo}`;
    }
  });


const conteudos = [
  {
    titulo: "Análise de Balanço",
    link: "/src/conteudo-didatico/Não Logado/financas-corporativas-nl/analise-de-balanco-nl/analise-de-balanco-nl.html",
    imagem: "/src/imagens/AnaliseDeBalancos.jpg",
    palavrasChave: [
      "análise",
      "balanço",
      "empreendimento",
      "empresa",
      "metas",
      "organização",
      "planejamento",
      "finanças",
      "corporativo",
      "pessoa",
      "jurídica",
    ],
    descricao:
      "Se você já ouviu falar em balanço patrimonial, demonstrativo de resultados ou fluxo de caixa, mas não entendeu muito bem o que tudo isso significa, não se preocupe. Neste artigo, vamos te mostrar de forma simples e didática como funciona a análise de balanços financeiros — uma ferramenta essencial para entender a saúde financeira de uma empresa.",
  },
  {
    titulo: "Fluxo de Caixa",
    link: "/src/conteudo-didatico/Não Logado/financas-corporativas-nl/fluxo-de-caixa-nl/fluxo-de-caixa-nl.html",
    imagem: "/src/imagens/FluxoDeCaixa.jpg",
    palavrasChave: [
      "fluxo",
      "caixa",
      "empreendimento",
      "empresa",
      "metas",
      "organização",
      "planejamento",
      "finanças",
      "corporativo",
      "pessoa",
      "jurídica",
    ],
    descricao:
      " Você já teve a sensação de que vendeu bem, mas o dinheiro sumiu? Ou que sua empresa está sempre no vermelho, mesmo com clientes entrando? Isso provavelmente tem a ver com falta de controle do fluxo de caixa. Neste artigo, vamos te explicar de forma simples e prática o que é fluxo de caixa, por que ele é fundamental e como você pode começar a controlar melhor o dinheiro que entra e sai do seu negócio.",
  },
  {
    titulo: "Captação de Recursos",
    link: "/src/conteudo-didatico/Não Logado/financas-corporativas-nl/captacao-de-recursos-nl/captacao-de-recursos-nl.html",
    imagem: "/src/imagens/CaptacaoDeRecursos.jpg",
    palavrasChave: [
      "captação",
      "recursos",
      "empreendimento",
      "empresa",
      "metas",
      "organização",
      "planejamento",
      "finanças",
      "corporativo",
      "pessoa",
      "jurídica",
    ],
    descricao:
      " Você já se perguntou de onde vem o dinheiro que uma empresa usa para crescer, investir e pagar suas contas? Isso é o que chamamos de captação de recursos financeiros — e entender como isso funciona é essencial para quem empreende, trabalha com finanças ou simplesmente quer conhecer melhor o mundo dos negócios. Neste artigo, vamos te explicar de forma simples e objetiva o que é captação de recursos, quais são as principais formas, vantagens e cuidados.",
  },
  {
    titulo: "DRE",
    link: "/src/conteudo-didatico/Não Logado/financas-corporativas-nl/dre-nl/dre-nl.html",
    imagem: "/src/imagens/DRE.jpg",
    palavrasChave: [
      "dre",
      "demonstração",
      "resultado",
      "exercício",
      "recursos",
      "empreendimento",
      "empresa",
      "metas",
      "organização",
      "planejamento",
      "finanças",
      "corporativo",
      "pessoa",
      "jurídica",
    ],
    descricao:
      " Você já se perguntou quanto lucro uma empresa realmente teve no ano? Ou por que às vezes o faturamento é alto, mas o resultado é negativo? A resposta para essas perguntas está na DRE — Demonstração do Resultado do Exercício. Neste artigo, vamos explicar de forma simples o que é a DRE, para que ela serve, quais são seus principais itens e como interpretá-la, mesmo que você nunca tenha estudado contabilidade.",
  },
  {
    titulo: "Cartão de Débito",
    link: "/src/conteudo-didatico/Não Logado/operacoes-bancarias-nl/CartaodeDebito-nl/CartaodeDebito-nl.html",
    imagem: "/src/imagens/CartaoDeDebito.jpg",
    palavrasChave: [
      "cartão",
      "débito",
      "operações",
      "bancárias",
      "empreendimento",
      "empresa",
      "metas",
      "organização",
      "planejamento",
      "finanças",
      "corporativo",
      "pessoal",
      "pessoa",
      "jurídica",
      "física",
    ],
    descricao:
      " O cartão de débito é uma ferramenta prática oferecida por instituições financeiras que permite realizar pagamentos e saques diretamente da conta bancária. Ao contrário do cartão de crédito, os valores das compras feitas com o débito são descontados imediatamente do saldo disponível, o que ajuda a manter um controle mais rígido das finanças. Ele é amplamente utilizado para compras à vista, pagamentos em estabelecimentos físicos, saques em caixas eletrônicos e também em compras online, desde que o site aceite essa modalidade. É uma ótima opção para quem quer evitar dívidas, já que não permite gastar mais do que se tem em conta.",
  },
  {
    titulo: "Cartão de Crédito",
    link: "/src/conteudo-didatico/Não Logado/operacoes-bancarias-nl/Cartaodecredito-nl/CartaodeCredito-nl.html",
    imagem: "/src/imagens/CartaodeCredito.webp",
    palavrasChave: [
      "cartão",
      "crédito",
      "operações",
      "bancárias",
      "empreendimento",
      "empresa",
      "metas",
      "organização",
      "planejamento",
      "finanças",
      "corporativo",
      "pessoal",
      "pessoa",
      "jurídica",
      "física",
    ],
    descricao:
      " O cartão de crédito é uma ferramenta financeira que permite realizar compras e pagamentos sem a necessidade de dinheiro imediato. Ele funciona como um empréstimo de curto prazo concedido pelo banco ou instituição financeira, com um limite pré-aprovado que pode ser utilizado para diferentes transações.",
  },
  {
    titulo: "Empréstimo",
    link: "/src/conteudo-didatico/Não Logado/Emprestimo-nl/Emprestimo-nl.html",
    imagem: "/src/imagens/Emprestimo2.jpg",
    palavrasChave: [
      "empréstimo",
      "operações",
      "bancárias",
      "empreendimento",
      "empresa",
      "metas",
      "organização",
      "planejamento",
      "finanças",
      "corporativo",
      "pessoal",
      "pessoa",
      "jurídica",
      "física",
    ],
    descricao:
      " O empréstimo é uma operação financeira onde uma instituição (como um banco ou financeira) disponibiliza uma quantia em dinheiro para uma pessoa física ou jurídica, mediante o compromisso de devolução desse valor acrescido de juros, dentro de um prazo estipulado em contrato. É uma forma de antecipar recursos para necessidades imediatas, investimentos ou pagamento de dívidas.",
  },
  {
    titulo: "Financiamento",
    link: "/src/conteudo-didatico/Não Logado/operacoes-bancarias-nl/Financiamento/Financiamento1-nl.html",
    imagem: "/src/imagens/Financiamento.webp",
    palavrasChave: [
      "financiamento",
      "operações",
      "bancárias",
      "empreendimento",
      "empresa",
      "metas",
      "organização",
      "planejamento",
      "finanças",
      "corporativo",
      "pessoal",
      "pessoa",
      "jurídica",
      "física",
    ],
    descricao: "O financiamento é uma operação de crédito em que uma instituição financeira paga, total ou parcialmente, por um bem ou serviço em seu nome. Em troca, você assume o compromisso de pagar esse valor em parcelas mensais, com acréscimo de juros e encargos, ao longo de um período definido em contrato.",
  },
  {
    titulo: "Taxas e Tarifas",
    link: "/src/conteudo-didatico/Não Logado/operacoes-bancarias-nl/TaxaseTarifas/TaxaseTarifas1-nl.html",
    imagem: "/src/imagens/Tarifasetaxas.webp",
    palavrasChave: [
      "taxas",
      "tarifas",
      "operações",
      "bancárias",
      "empreendimento",
      "empresa",
      "metas",
      "organização",
      "planejamento",
      "finanças",
      "corporativo",
      "pessoal",
      "pessoa",
      "jurídica",
      "física",
    ],
    descricao: "Taxas e tarifas são valores cobrados por instituições financeiras como contrapartida por produtos ou serviços prestados. Elas estão presentes em quase todas as operações bancárias e financeiras: contas, empréstimos, financiamentos, cartões, consórcios, investimentos e muito mais.",
  },
  {
    titulo: "Renda Fixa PJ",
    link: "/src/conteudo-didatico/Não Logado/investimentos-corporativos-nl/renda-fixa-pj-nl/renda-fixa-pj-nl.html",
    imagem: "/src/imagens/RendaFixaPJ.jpg",
    palavrasChave: [
      "renda",
      "fixa",
      "investimentos",
      "empreendimento",
      "empresa",
      "metas",
      "organização",
      "planejamento",
      "finanças",
      "corporativo",
      "pessoal",
      "pessoa",
      "jurídica",
      "física",
    ],
    descricao: "A renda fixa para empresas é uma excelente forma de aplicar recursos excedentes de maneira segura e previsível. É ideal para a gestão de caixa e para objetivos de curto a médio prazo.",
  },
  {
    titulo: "Renda Variável PJ",
    link: "/src/conteudo-didatico/Não Logado/investimentos-corporativos-nl/renda-variavel-pj/renda-variavel-pj-nl.html",
    imagem: "/src/imagens/RendaVariavelPJ.jpg",
    palavrasChave: [
      "renda",
      "variável",
      "investimentos",
      "empreendimento",
      "empresa",
      "metas",
      "organização",
      "planejamento",
      "finanças",
      "corporativo",
      "pessoal",
      "pessoa",
      "jurídica",
      "física",
    ],
    descricao: "A renda variável pode ser uma excelente alternativa para empresas que buscam maior retorno sobre seu capital. Neste conteúdo, você vai entender como sua empresa pode aproveitar o mercado de ações, FIIs e outros ativos para diversificar e ampliar seus lucros.",
  },
  {
    titulo: "Fundos de Investimento PJ",
    link: "/src/conteudo-didatico/Não Logado/investimentos-corporativos-nl/fundo-de-investimentos-pj-nl/fundo-de-investimentos-pj-nl.html",
    imagem: "/src/imagens/FundosDeInvestimento.jpg",
    palavrasChave: [
      "fundos",
      "investimento",
      "investimentos",
      "empreendimento",
      "empresa",
      "metas",
      "organização",
      "planejamento",
      "finanças",
      "corporativo",
      "pessoal",
      "pessoa",
      "jurídica",
      "física",
    ],
    descricao: " Fundos de investimento oferecem uma maneira prática e diversificada de aplicar recursos corporativos. São ideais para empresas que buscam rentabilidade com gestão profissional.",
  },
];

const urlParams = new URLSearchParams(window.location.search); // Parametros da URL
const termo = urlParams
  .get("q") // Pegando o valor de q (paramentro da URL que representa oq foi buscado)
  ?.toLowerCase() // Transforma tudo em letra minúscula
  ?.normalize("NFD") // Separa os caracteres acentuados em dois — o caractere base e o acento.
  ?.replace(/[\u0300-\u036f]/g, ""); // ?REGEX? Remove os diacríticos (acentos, cedilhas, etc.) da string.

const resultadosDiv = document.getElementById("resultados");

if (!termo || termo.trim() === "") {
  resultadosDiv.innerHTML = "<p>Nenhum termo de pesquisa informado.</p>";
} else {
  const resultados = conteudos.filter(
    (conteudo) =>
      conteudo.titulo
        .toLowerCase()
        .normalize("NFD") // Separa os caracteres acentuados em dois — o caractere base e o acento.
        .replace(/[\u0300-\u036f]/g, "") // ?REGEX? Remove os diacríticos (acentos, cedilhas, etc.) da string.
        .startsWith(termo) ||
      conteudo.palavrasChave.some((palavraChave) =>
        palavraChave
          .toLowerCase()
          .normalize("NFD") // Separa os caracteres acentuados em dois — o caractere base e o acento.
          .replace(/[\u0300-\u036f]/g, "") // ?REGEX? Remove os diacríticos (acentos, cedilhas, etc.) da string.
          .startsWith(termo)
      )
  );

  if (resultados.length === 0) {
    resultadosDiv.innerHTML = `<p>Nenhum resultado encontrado para "<strong>${termo}</strong>".</p>`;
  } else {
    resultadosDiv.innerHTML = resultados
      .map(
        (
          resultado //template string
        ) =>
          `<a class="plan-link" href="${resultado.link}">
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
