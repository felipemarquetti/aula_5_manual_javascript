// Comparação de Igualdade
console.log(5 == "5");   // true (Compara apenas o valor)
console.log(5 === "5");  // false (Compara valor e tipo: Number vs String)

// Comparação de Diferença
console.log(5 != "5");   // false (Diz que são iguais em valor)
console.log(5 !== "5");  // true (Diz que são diferentes em tipo)

/* MINHA EXPLICAÇÃO: O operador === é mais seguro porque evita que o JS 
converta tipos automaticamente, o que previne erros lógicos graves. */