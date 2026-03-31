// 1. Função sem parâmetro
function saudar() {
    console.log("Olá, bem-vindo!");
}

// 2. Função com parâmetro
function saudarUsuario(nome) {
    console.log("Olá, " + nome);
}

// 3. Função com retorno
function somar(a, b) {
    return a + b;
}

saudar();
saudarUsuario("Carlos");
let resultado = somar(10, 5);
console.log("O resultado da soma é: " + resultado);