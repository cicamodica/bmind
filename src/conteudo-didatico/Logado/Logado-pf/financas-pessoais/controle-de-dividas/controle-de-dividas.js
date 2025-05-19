        document.querySelector('.menu-icon').addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('hidden');
        });
        
        function toggleMenu() { // Função para alternar o menu dropdown
            const menu = document.getElementById("dropdownMenu");
            menu.style.display = menu.style.display === "block" ? "none" : "block";
          }
          
          // Fechar menu ao clicar fora
          window.addEventListener("click", function (e) {
            const menu = document.getElementById("dropdownMenu");
            const icon = document.querySelector(".menu-icon");
            if (!menu.contains(e.target) && !icon.contains(e.target)) {
              menu.style.display = "none";
            }
});
function registrarConteudoVisto(nomeConteudo, url, imagem) {
  let vistos = JSON.parse(localStorage.getItem("vistosRecentemente")) || [];

  // Remove se já existe com mesmo nome
  vistos = vistos.filter((item) => item.nome !== nomeConteudo);

  // Adiciona no topo
  vistos.unshift({ nome: nomeConteudo, url: url, imagem: imagem });

  // Limita a 3 itens
  if (vistos.length > 3) {
    vistos = vistos.slice(0, 3);
  }

  localStorage.setItem("vistosRecentemente", JSON.stringify(vistos));
}
registrarConteudoVisto(
  "Fundos de Investimento PF",
  "/src/conteudo-didatico/Logado/Logado-pf/financas-pessoais/controle-de-dividas/controle-de-dividas.html",
  "/src/imagens/Controlededividas.jpg"
);