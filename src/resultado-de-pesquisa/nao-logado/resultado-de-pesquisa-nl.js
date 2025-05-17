const conteudos = [
  {
    titulo: "Planejamento Financeiro",
    link: "/src/conteudo-didatico/Não Logado/financas-pessoais-nl/planejamento-financeiro-nl/planejamento-financeiro-nl.html",
    palavrasChave: [
      "orçamento",
      "metas",
      "organização",
      "org",
      "planejamento",
      "plan",
      "financeiro",
      "finanças",
      "familiar",
      "pessoal",
      "pessoa",
      "física",
    ],
    descricao:
      "Você já sentiu que o dinheiro simplesmente desaparece no fim do mês? Ou tem a sensação de que, por mais que ganhe, nunca sobra? Se a resposta for sim, talvez o que falte não seja mais dinheiro, mas sim planejamento financeiro. Planejar suas finanças não é sobre cortar tudo que dá prazer, mas sim sobre equilibrar o presente com o futuro, garantindo tranquilidade, segurança e liberdade para realizar seus sonhos.",
  },
];

const urlParams = new URLSearchParams(window.location.search);
const termo = urlParams.get("q")?.toLowerCase();

const resultadosDiv = document.getElementById("resultados");

if (!termo || termo.trim() === "") {
  resultadosDiv.innerHTML = "<p>Nenhum termo de pesquisa informado.</p>";
} else {
  const resultados = conteudos.filter(
    (c) =>
      c.titulo.toLowerCase().startsWith(termo) ||
      c.palavrasChave.some((p) => p.toLowerCase().startsWith(termo))
  );

  if (resultados.length === 0) {
    resultadosDiv.innerHTML = `<p>Nenhum resultado encontrado para "<strong>${termo}</strong>".</p>`;
  } else {
    resultadosDiv.innerHTML = resultados
      .map(
        (r) =>
          `<div class="resultado"><a href=""></a></div>
                  <div class="card">
                <div class="plan-img">
                <a
                    class="plan-img-link"
                    href="/src/conteudo-didatico/Não Logado/financas-pessoais-nl/planejamento-financeiro-nl/planejamento-financeiro-nl.html"
                >
                    <img
                    src="/src/imagens/PlanejamentoFinanceiro.jpg"
                    alt="imagem"
                    class="imagem"
                    />
                </a>
                <div class="plan-descricao-link">
                    <a
                    class="plan-link"
                    href="${r.link}"
                    ><h2>${r.titulo}</h2></a
                    >
                    <p class="plan-descricao">
                    ${r.descricao}
                    </p>
                    <p class="plan-keyword">
                    <strong>Palavras-chave:</strong>
                    ${r.palavrasChave}
                    </p>
                </div>
                </div>
            </div>`
      )
      .join("");
  }
}
