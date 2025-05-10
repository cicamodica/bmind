//Recupera o usuario logado
const usuarioLogado = localStorage.getItem('currentUser');

// Verifica se o usuário está logado
//if (usuarioLogado) {
   //Se o usuário estiver logado, exibe uma mensagem de boas-vindas
  //const usuario = JSON.parse(usuarioLogado);
  //const boasVindas = document.getElementById('boasVindas');
  //boasVindas.innerHTML = `Bem-vindo(a), ${usuario.nome}!`;
//}
// Caso contrário, redireciona para a página de login
//else {
  //window.location.href = 'login.html';
//}

//Exibe os ultimos conteudos vistos
function exibirVistosRecentemente() {
    if(!usuarioLogado) return;
    
    const historico = JSON.parse(localStorage.getItem('usuarioLogado')) || [];
    const listaVistosRecentemente = document.getElementById('lista-vistos-recentemente');
    listaVistosRecentemente.innerHTML = ''; // Limpa a lista antes de adicionar novos itens
    
    historico.forEach(item => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.link; // Define o link do item
        link.textContent = item.titulo; // Define o texto do link
        li.appendChild(link); // Adiciona o link ao item da lista
        listaVistosRecentemente.appendChild(li);
    });
}

//Registra uma visualização de conteudo
function registrarVisualizacao(titulo, link) {
    if(!usuarioLogado) return;
    
    let historico = JSON.parse(localStorage.getItem('usuarioLogado')) || [];

    // Verifica se o item já existe no histórico
    const itemExistente = historico.find(item => item.titulo === titulo);
    if (itemExistente) {
        // Se o item já existe, remove-o do histórico
        historico = historico.filter(item => item.titulo !== titulo);
    }
    // Adiciona o novo item ao início do histórico
    historico.unshift({ titulo, link, timestamp: Date.now});

    // Limita o histórico a 5 itens
    if (historico.length > 5) {
        historico.pop(); // Remove o item mais antigo
    }
    localStorage.setItem('usuarioLogado', JSON.stringify(historico))

}
//Atualiza a lista de vistos recentemente
document.addEventListener('DOMContentLoaded', () => {
    exibirVistosRecentemente();
});


