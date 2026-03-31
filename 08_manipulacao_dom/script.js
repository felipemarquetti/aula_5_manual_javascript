// Selecionando elementos
const titulo = document.getElementById('titulo');
const botao = document.querySelector('#meuBotao');
const input = document.querySelector('#nomeInput');
const resultado = document.querySelector('#resultado');

// Evento de clique
botao.addEventListener('click', function() {
    // Pegando valor do input
    let nome = input.value;
    
    // Alterando texto e estilo
    resultado.textContent = "Olá, " + nome + "!";
    resultado.style.color = "blue";
    
    // Adicionando uma classe CSS
    resultado.classList.add('destaque');
});