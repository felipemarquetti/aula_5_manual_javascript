## O que é Javascript?
JavaScript é uma linguagem de programação de alto nível, interpretada e dinâmica, essencial para criar interatividade e dinamismo em sites.

#Para que serve?
Serve para dar comportamento e inteligência a sistemas digitais. Enquanto outras linguagens definem o que um site é ou como ele parece, o JavaScript define o que ele faz.

#Como ele complementa HTML e CSS?
Complementa HTML (estrutura) e CSS (estilo) adicionando interatividade, dinamismo e comportamento às páginas web.

# 📘 Manual: JavaScript Fundamental

## 1. Variáveis e Escopo
Uma **variável** é um espaço na memória para armazenar dados.

### Declaração e Diferenças
* **var**: Escopo de função. Permite redeclaração e sofre *hoisting*. (Evite!)
* **let**: Escopo de bloco. Permite reatribuição. (Padrão moderno)
* **const**: Escopo de bloco. **Não** permite reatribuição.



### Exemplos de Código
```javascript
// Exemplo com var
var sistema = "Windows"; 

// Exemplo com let
let usuario = "Ana";
usuario = "Beatriz"; // OK!

// Exemplo com const
const versao = 1.0;
// versao = 1.1; // Erro: Assignment to constant variable.

// --- TESTE DE ESCOPO ---

// 1. Variável acessível fora do bloco (var não respeita bloco)
if (true) {
    var globalizada = "Eu escapo do IF";
}
console.log(globalizada); // "Eu escapo do IF"

// 2. Variável NÃO acessível fora do bloco (let/const respeitam o bloco)
if (true) {
    let protegida = "Estou presa";
}

// console.log(protegida); 
// EXPLICAÇÃO: O erro "ReferenceError: protegida is not defined" ocorre porque 
// variáveis declaradas com 'let' dentro de chas { } morrem quando o bloco fecha.