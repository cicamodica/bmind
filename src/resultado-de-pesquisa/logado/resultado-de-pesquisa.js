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
    imagem: "/src/imagens/CartaoDeCredito.jpg",
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
    imagem: "/src/imagens/Emprestimo.jpg",
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
    link: "/src/conteudo-didatico/Não Logado",
    imagem: "/src/imagens/SemImagemNoMomento.jpg",
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
    descricao: " Adicionar descrição.",
  },
  {
    titulo: "Taxas e Tarifas",
    link: "/src/conteudo-didatico/Não Logado",
    imagem: "/src/imagens/SemImagemNoMomento.jpg",
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
    descricao: " Adicionar descrição.",
  },
  {
    titulo: "Renda Fixa",
    link: "/src/conteudo-didatico/Não Logado",
    imagem: "/src/imagens/SemImagemNoMomento.jpg",
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
    descricao: " Adicionar descrição.",
  },
  {
    titulo: "Renda Variável",
    link: "/src/conteudo-didatico/Não Logado",
    imagem: "/src/imagens/SemImagemNoMomento.jpg",
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
    descricao: " Adicionar descrição.",
  },
  {
    titulo: "Fundos de Investimento",
    link: "/src/conteudo-didatico/Não Logado",
    imagem: "/src/imagens/SemImagemNoMomento.jpg",
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
    descricao: " Adicionar descrição.",
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
