// 1. Exemplo com VAR (Escopo de função)
var animal = "Cachorro"; 

// 2. Exemplo com LET (Escopo de bloco)
if (true) {
    let gato = "Gato";
    console.log(gato); // Funciona aqui dentro
}
// console.log(gato); // ERRO! 'gato' não está definido fora do bloco if.
// Explicação: O let respeita o escopo de bloco, o var não.

// 3. Exemplo com CONST (Valor fixo)
const pais = "Brasil";
// pais = "Argentina"; // ERRO! Não se pode reatribuir uma constante.