function atualizarInterfaceUsuario() {
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  const dadosDoUsuario = usuarioLogado ? JSON.parse(localStorage.getItem(usuarioLogado)) : null;

  const userActionsLogado = document.getElementById("perfil-logado");
  const userActionsNaoLogado = document.getElementById("login-nao-logado");

  const itensPF = document.querySelectorAll('.item-pf');
  const itensPJ = document.querySelectorAll('.item-pj');
  const itensLogado = document.querySelectorAll('.item-logged');
  const itensNaoLogado = document.querySelectorAll('.item-nao-logado');

  const estaNaPaginaMinhaArea = window.location.pathname.includes("/src/Main/Main.html")

  const userArea = document.querySelector(".user-area");
if (userArea) {
  userArea.style.display = "none";
}

  // Esconde tudo inicialmente
  userActionsLogado.style.display = "none";
  userActionsNaoLogado.style.display = "none";
  itensPF.forEach(el => el.style.display = 'none');
  itensPJ.forEach(el => el.style.display = 'none');
  itensLogado.forEach(el => el.style.display = 'none');
  itensNaoLogado.forEach(el => el.style.display = 'none');

  if (dadosDoUsuario && (dadosDoUsuario.perfil === "Pessoa Física" || dadosDoUsuario.perfil === "Pessoa Jurídica")) {

    
    // Só mostra o botão "perfil-logado" se não estiver na própria página de "Minha Área"
    if (!estaNaPaginaMinhaArea && userActionsLogado) {
      userActionsLogado.style.display = "flex";
    }

    // Exibe itens de logado
    itensLogado.forEach(el => el.style.display = 'block');

    if (dadosDoUsuario.perfil === "Pessoa Física") {
      itensPF.forEach(el => el.style.display = 'block');
    } else if (dadosDoUsuario.perfil === "Pessoa Jurídica") {
      itensPJ.forEach(el => el.style.display = 'block');
    }
    if (userArea) {
  userArea.style.display = "block";
}
  } else {
    // Usuário não logado ou com dados inválidos
    userActionsNaoLogado.style.display = "flex";
    itensNaoLogado.forEach(el => el.style.display = 'block');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const voltar = document.getElementById("botao-voltar");
  if (voltar) {
    voltar.addEventListener("click", () => {
      history.back();
    });
  }
});

//Funcionalidade da pesquisa (barra de pesquisa) > lê na URL o que foi pesquisado e procura nos conteúdos
document
  .getElementById("search-button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // evita o redirecionamento padrão
    const termo = document.getElementById("search-bar").value.trim();
    if (termo !== "") {
      const encodedTermo = encodeURIComponent(termo);
      window.location.href = `/src/resultado-de-pesquisa/resultado-de-pesquisa.html?q=${encodedTermo}`;
    }
  });

const conteudos = [
  {
    titulo: "Planejamento Financeiro",
    perfil: "Pessoa Física",
    link: "/src/conteudo-didatico/financas-pessoais/planejamento-financeiro/planejamento-financeiro.html",
    imagem: "/src/imagens/PlanejamentoFinanceiro.jpg",
    palavrasChave: [
      "planejamento",
      "financeiro",
      "metas",
      "organização",
      "finanças",
      "pessoal",
      "pessoa",
      "fisica",
    ],
    descricao:
      "Você já sentiu que o dinheiro simplesmente desaparece no fim do mês? Ou tem a sensação de que, por mais que ganhe, nunca sobra? Se a resposta for sim, talvez o que falte não seja mais dinheiro, mas sim planejamento financeiro. Planejar suas finanças não é sobre cortar tudo que dá prazer, mas sim sobre equilibrar o presente com o futuro, garantindo tranquilidade, segurança e liberdade para realizar seus sonhos.",
  },
  {
    titulo: "Orçamento Doméstico",
    perfil: "Pessoa Física",
    link: "/src/conteudo-didatico/financas-pessoais/orcamento-domestico/orcamento-domestico.html",
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
      "fisica",
    ],
    descricao:
      "Manter a saúde financeira da família é um desafio para muitas pessoas. Entre contas fixas, imprevistos, desejos e compromissos, fica fácil se perder e acabar gastando mais do que deveria. É aí que entra o orçamento doméstico, uma ferramenta fundamental para ter controle, segurança e planejamento no dia a dia. Neste artigo, você vai entender como montar um orçamento doméstico eficiente, evitar dívidas e ainda encontrar espaço para economizar e realizar sonhos.",
  },
  {
    titulo: "Controle de Dívidas",
    perfil: "Pessoa Física",
    link: "/src/conteudo-didatico/financas-pessoais/controle-de-dividas/controle-de-dividas.html",
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
      "fisica",
    ],
    descricao:
      "Ficar endividado é uma realidade para milhões de brasileiros. Com o custo de vida cada vez mais alto e o fácil acesso ao crédito, muitas famílias acabam perdendo o controle e comprometendo parte — ou até a totalidade — de sua renda com parcelas, empréstimos e financiamentos. Mas a boa notícia é que existe saída. Com organização, disciplina e um plano bem estruturado, é possível retomar o controle da vida financeira e sair do vermelho.",
  },
  {
    titulo: "Análise de Balanço",
    perfil: "Pessoa Jurídica",
    link: "/src/conteudo-didatico/financas-corporativas/analise-de-balanco/analise-de-balanco.html",
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
      "juridica",
    ],
    descricao:
      "Se você já ouviu falar em balanço patrimonial, demonstrativo de resultados ou fluxo de caixa, mas não entendeu muito bem o que tudo isso significa, não se preocupe. Neste artigo, vamos te mostrar de forma simples e didática como funciona a análise de balanços financeiros — uma ferramenta essencial para entender a saúde financeira de uma empresa.",
  },
  {
    titulo: "Fluxo de Caixa",
    perfil: "Pessoa Jurídica",
    link: "/src/conteudo-didatico/financas-corporativas/fluxo-de-caixa/fluxo-de-caixa.html",
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
      "juridica",
    ],
    descricao:
      " Você já teve a sensação de que vendeu bem, mas o dinheiro sumiu? Ou que sua empresa está sempre no vermelho, mesmo com clientes entrando? Isso provavelmente tem a ver com falta de controle do fluxo de caixa. Neste artigo, vamos te explicar de forma simples e prática o que é fluxo de caixa, por que ele é fundamental e como você pode começar a controlar melhor o dinheiro que entra e sai do seu negócio.",
  },
  {
    titulo: "Captação de Recursos",
    perfil: "Pessoa Jurídica",
    link: "/src/conteudo-didatico/financas-corporativas/captacao-de-recursos/captacao-de-recursos.html",
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
      "juridica",
    ],
    descricao:
      " Você já se perguntou de onde vem o dinheiro que uma empresa usa para crescer, investir e pagar suas contas? Isso é o que chamamos de captação de recursos financeiros — e entender como isso funciona é essencial para quem empreende, trabalha com finanças ou simplesmente quer conhecer melhor o mundo dos negócios. Neste artigo, vamos te explicar de forma simples e objetiva o que é captação de recursos, quais são as principais formas, vantagens e cuidados.",
  },
  {
    titulo: "DRE",
    perfil: "Pessoa Jurídica",
    link: "/src/conteudo-didatico/financas-corporativas/dre/dre.html",
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
      "juridica",
    ],
    descricao:
      " Você já se perguntou quanto lucro uma empresa realmente teve no ano? Ou por que às vezes o faturamento é alto, mas o resultado é negativo? A resposta para essas perguntas está na DRE — Demonstração do Resultado do Exercício. Neste artigo, vamos explicar de forma simples o que é a DRE, para que ela serve, quais são seus principais itens e como interpretá-la, mesmo que você nunca tenha estudado contabilidade.",
  },
  {
    titulo: "Cartão de Débito",
    perfil: "Ambos",
    link: "/src/conteudo-didatico/operacoes-bancarias/cartao-de-debito/cartao-de-debito.html",
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
      "juridica",
      "fisica",
    ],
    descricao:
      " O cartão de débito é uma ferramenta prática oferecida por instituições financeiras que permite realizar pagamentos e saques diretamente da conta bancária. Ao contrário do cartão de crédito, os valores das compras feitas com o débito são descontados imediatamente do saldo disponível, o que ajuda a manter um controle mais rígido das finanças. Ele é amplamente utilizado para compras à vista, pagamentos em estabelecimentos físicos, saques em caixas eletrônicos e também em compras online, desde que o site aceite essa modalidade. É uma ótima opção para quem quer evitar dívidas, já que não permite gastar mais do que se tem em conta.",
  },
  {
    titulo: "Cartão de Crédito",
    perfil: "Ambos",
    link: "/src/conteudo-didatico/operacoes-bancarias/cartao-de-credito/cartao-de-credito.html",
    imagem: "/src/imagens/CartaodeCredito.png",
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
      "juridica",
      "fisica",
    ],
    descricao:
      " O cartão de crédito é uma ferramenta financeira que permite realizar compras e pagamentos sem a necessidade de dinheiro imediato. Ele funciona como um empréstimo de curto prazo concedido pelo banco ou instituição financeira, com um limite pré-aprovado que pode ser utilizado para diferentes transações.",
  },
  {
    titulo: "Empréstimo",
    perfil: "Ambos",
    link: "/src/conteudo-didatico/operacoes-bancarias/emprestimo/emprestimo.html",
    imagem: "/src/imagens/Emprestimos.jpg",
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
      "juridica",
      "fisica",
    ],
    descricao:
      " O empréstimo é uma operação financeira onde uma instituição (como um banco ou financeira) disponibiliza uma quantia em dinheiro para uma pessoa física ou jurídica, mediante o compromisso de devolução desse valor acrescido de juros, dentro de um prazo estipulado em contrato. É uma forma de antecipar recursos para necessidades imediatas, investimentos ou pagamento de dívidas.",
  },
  {
    titulo: "Financiamento",
    perfil: "Ambos",
    link: "/src/conteudo-didatico/operacoes-bancarias/financiamento/financiamento.html",
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
      "juridica",
      "fisica",
    ],
    descricao:
      "O financiamento é uma operação de crédito em que uma instituição financeira paga, total ou parcialmente, por um bem ou serviço em seu nome. Em troca, você assume o compromisso de pagar esse valor em parcelas mensais, com acréscimo de juros e encargos, ao longo de um período definido em contrato.",
  },
  {
    titulo: "Taxas e Tarifas",
    perfil: "Ambos",
    link: "/src/conteudo-didatico/operacoes-bancarias/taxas-e-tarifas/taxas-e-tarifas.html",
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
      "juridica",
      "fisica",
    ],
    descricao:
      "Taxas e tarifas são valores cobrados por instituições financeiras como contrapartida por produtos ou serviços prestados. Elas estão presentes em quase todas as operações bancárias e financeiras: contas, empréstimos, financiamentos, cartões, consórcios, investimentos e muito mais.",
  },
  {
    titulo: "Renda Fixa PF",
    perfil: "Pessoa Física",
    link: "/src/conteudo-didatico/investimentos-pessoais/renda-fixa-pf/renda-fixa-pf.html",
    imagem: "/src/imagens/RendaFixaPF.jpg",
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
      "fisica",
    ],
    descricao:
      "A renda fixa é uma forma de investimento que oferece mais segurança e previsibilidade. Ideal para quem está começando ou busca proteger seu dinheiro da inflação. Neste conteúdo, vamos explicar de forma simples como funciona e quais são as opções disponíveis para pessoa física.",
  },
  {
    titulo: "Renda Fixa PJ",
    perfil: "Pessoa Jurídica",
    link: "/src/conteudo-didatico/investimentos-corporativos/renda-fixa-pj/renda-fixa-pj.html",
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
      "juridica",
    ],
    descricao:
      "A renda fixa para empresas é uma excelente forma de aplicar recursos excedentes de maneira segura e previsível. É ideal para a gestão de caixa e para objetivos de curto a médio prazo.",
  },
  {
    titulo: "Renda Variável PF",
    perfil: "Pessoa Física",
    link: "/src/conteudo-didatico/investimentos-pessoais/renda-variavel-pf/renda-variavel-pf.html",
    imagem: "/src/imagens/RendaVariavelPFsub.jpg",
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
      "fisica",
    ],
    descricao:
      "A renda variável é um tipo de investimento em que os ganhos não são garantidos, pois dependem do desempenho de ativos como ações, fundos e moedas. Apesar do risco maior, oferece grande potencial de retorno.",
  },
  {
    titulo: "Renda Variável PJ",
    perfil: "Pessoa Jurídica",
    link: "/src/conteudo-didatico/investimentos-corporativos/renda-variavel-pj/renda-variavel-pj.html",
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
      "juridica",
    ],
    descricao:
      "A renda variável pode ser uma excelente alternativa para empresas que buscam maior retorno sobre seu capital. Neste conteúdo, você vai entender como sua empresa pode aproveitar o mercado de ações, FIIs e outros ativos para diversificar e ampliar seus lucros.",
  },
  {
    titulo: "Fundos de Investimento PF",
    perfil: "Pessoa Física",
    link: "/src/conteudo-didatico/investimentos-pessoais/fundo-de-investimentos-pf/fundo-de-investimentos-pf.html",
    imagem: "/src/imagens/FundoInvestimentosPF.jpg",
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
      "fisica",
    ],
    descricao:
      "Os fundos de investimento são uma forma prática e acessível de aplicar seu dinheiro com a gestão de profissionais especializados. Eles reúnem recursos de diversos investidores para aplicar em uma carteira diversificada de ativos.",
  },
  {
    titulo: "Fundos de Investimento PJ",
    perfil: "Pessoa Jurídica",
    link: "/src/conteudo-didatico/investimentos-corporativos/fundo-de-investimentos-pj/fundo-de-investimentos-pj.html",
    imagem: "/src/imagens/FundosDeInvestimentoPJ.jpg",
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
      "juridica",
    ],
    descricao:
      " Fundos de investimento oferecem uma maneira prática e diversificada de aplicar recursos corporativos. São ideais para empresas que buscam rentabilidade com gestão profissional.",
  },
];

//Funcionalidade de esconder ícone em telas maiores
 const mobileSearchIcon = document.querySelector('.search-mobile-icon');
  const mobileSearchBar = document.getElementById('mobileSearchBar');

  mobileSearchIcon.addEventListener('click', () => {
    // alterna entre mostrar e esconder
    mobileSearchBar.style.display =
      mobileSearchBar.style.display === 'block' ? 'none' : 'block';
  });

 function buscarMobile() {
  const termo = document.getElementById('mobileSearchInput').value.trim();
  if (termo !== "") {
    const encodedTermo = encodeURIComponent(termo);
    window.location.href = `/src/resultado-de-pesquisa/resultado-de-pesquisa.html?q=${encodedTermo}`;
  }
}

const urlParams = new URLSearchParams(window.location.search);
const termo = urlParams
  .get("q")
  ?.toLowerCase()
  ?.normalize("NFD")
  ?.replace(/[\u0300-\u036f]/g, "");
const resultadosDiv = document.getElementById("resultados");

// Verifica se o usuário está logado
let perfilUsuario = null;
const usuarioLogado = localStorage.getItem("usuarioLogado");
if (usuarioLogado !== null) {
  const dadosDoUsuario = JSON.parse(localStorage.getItem(usuarioLogado));
  perfilUsuario = dadosDoUsuario?.perfil || null;
}

if (!termo || termo.trim() === "") {
  resultadosDiv.innerHTML = "<p>Nenhum termo de pesquisa informado.</p>";
} else {
  const resultados = conteudos
    .filter((conteudo) => {
      const tituloMatch = conteudo.titulo
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .startsWith(termo);

      const palavraChaveMatch = conteudo.palavrasChave.some((palavraChave) =>
        palavraChave
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .startsWith(termo)
      );

      return tituloMatch || palavraChaveMatch;
    })
    .filter((conteudo) => {
      if (perfilUsuario === null) {
        return true; // mostra todos os conteúdos para quem não está logado
      }
      // Se logado → mostrar conteúdos compatíveis com o perfil
      // perfilUsuario é "Pessoa Física" ou "Pessoa Jurídica"
      const termoPerfil = perfilUsuario.toLowerCase().includes("física")
        ? "fisica"
        : "juridica";
      const lowerKeywords = conteudo.palavrasChave.map((p) =>
        p
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      );

      return lowerKeywords.includes(termoPerfil);
    });

  if (resultados.length === 0) {
    resultadosDiv.innerHTML = `<p>Nenhum resultado encontrado para "<strong>${termo}</strong>".</p>`;
  } else {
    resultadosDiv.innerHTML = resultados
      .map(
        (resultado) => `
        <a class="plan-link" href="${resultado.link}">
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

document.addEventListener("DOMContentLoaded", () => {
  atualizarInterfaceUsuario();
});
