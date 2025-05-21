//Funcionalidade da pesquisa (barra de pesquisa) > lê na URL o que foi pesquisado e procura nos conteúdos
document
  .getElementById("search-button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // evita o redirecionamento padrão
    const termo = document.getElementById("search-bar").value.trim();
    if (termo !== "") {
      const encodedTermo = encodeURIComponent(termo);
      window.location.href = `/src/resultado-de-pesquisa/logado/logado-pf/resultado-de-pesquisa-pf.html?q=${encodedTermo}`;
    }
  });

const conteudos = [
  {
    titulo: "Planejamento Financeiro",
    link: "/src/conteudo-didatico/Não Logado/financas-pessoais-nl/planejamento-financeiro-nl/planejamento-financeiro-nl.html",
    imagem: "/src/imagens/PlanejamentoFinanceiro.jpg",
    palavrasChave: [
      "planejamento",
      "financeiro",
      "metas",
      "organização",
      "finanças",
      "pessoal",
      "pessoa",
      "física",
    ],
    descricao:
      "Você já sentiu que o dinheiro simplesmente desaparece no fim do mês? Ou tem a sensação de que, por mais que ganhe, nunca sobra? Se a resposta for sim, talvez o que falte não seja mais dinheiro, mas sim planejamento financeiro. Planejar suas finanças não é sobre cortar tudo que dá prazer, mas sim sobre equilibrar o presente com o futuro, garantindo tranquilidade, segurança e liberdade para realizar seus sonhos.",
  },
  {
    titulo: "Orçamento Doméstico",
    link: "/src/conteudo-didatico/Não Logado/financas-pessoais-nl/orcamento-domestico-nl/orcamento-domestico-nl.html",
    imagem: "/src/imagens/OrcamentoDomestico.jpg",
    palavrasChave: [
      "orçamento",
      "doméstico",
      "metas",
      "organização",
      "planejamento",
      "finanças",
      "pessoal",
      "pessoa",
      "física",
    ],
    descricao:
      "Manter a saúde financeira da família é um desafio para muitas pessoas. Entre contas fixas, imprevistos, desejos e compromissos, fica fácil se perder e acabar gastando mais do que deveria. É aí que entra o orçamento doméstico, uma ferramenta fundamental para ter controle, segurança e planejamento no dia a dia. Neste artigo, você vai entender como montar um orçamento doméstico eficiente, evitar dívidas e ainda encontrar espaço para economizar e realizar sonhos.",
  },
  {
    titulo: "Controle de Dívidas",
    link: "/src/conteudo-didatico/Não Logado/financas-pessoais-nl/controle-de-dividas-nl/controle-de-dividas-nl.html",
    imagem: "/src/imagens/Controlededividas.jpg",
    palavrasChave: [
      "controle",
      "dívidas",
      "metas",
      "organização",
      "planejamento",
      "finanças",
      "pessoal",
      "pessoa",
      "física",
    ],
    descricao:
      "Ficar endividado é uma realidade para milhões de brasileiros. Com o custo de vida cada vez mais alto e o fácil acesso ao crédito, muitas famílias acabam perdendo o controle e comprometendo parte — ou até a totalidade — de sua renda com parcelas, empréstimos e financiamentos. Mas a boa notícia é que existe saída. Com organização, disciplina e um plano bem estruturado, é possível retomar o controle da vida financeira e sair do vermelho.",
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
    titulo: "Renda Fixa PF",
    link: "/src/conteudo-didatico/Não Logado/investimentos-pessoais-nl/renda-fixa-pf-nl/renda-fixa-pf-nl.html",
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
    descricao: "A renda fixa é uma forma de investimento que oferece mais segurança e previsibilidade. Ideal para quem está começando ou busca proteger seu dinheiro da inflação. Neste conteúdo, vamos explicar de forma simples como funciona e quais são as opções disponíveis para pessoa física.",
  },
  {
    titulo: "Renda Variável PF",
    link: "/src/conteudo-didatico/Não Logado/investimentos-pessoais-nl/renda-variavel-pf-nl/renda-variavel-pf-nl.html",
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
    descricao: "A renda variável é um tipo de investimento em que os ganhos não são garantidos, pois dependem do desempenho de ativos como ações, fundos e moedas. Apesar do risco maior, oferece grande potencial de retorno.",
  },
  {
    titulo: "Fundos de Investimento PF",
    link: "/src/conteudo-didatico/Não Logado/investimentos-pessoais-nl/fundo-de-investimentos-pf-nl/fundo-de-investimentos-pf-nl.html",
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
    descricao: "Os fundos de investimento são uma forma prática e acessível de aplicar seu dinheiro com a gestão de profissionais especializados. Eles reúnem recursos de diversos investidores para aplicar em uma carteira diversificada de ativos.",
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
