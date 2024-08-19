// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (arrays ou strings )

const nome = ['luiz', 'matheus', 'jorge'];

//Clássico ===

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('-----------------')

//For in ===

for (let i in nome) {
    console.log(nome[i]);
}

console.log('-----------------')

//For of ===

for (let valor of nome) {
    console.log(valor);
}

console.log('---------------')

//ForEach ===

nome.forEach(function(valor, indice) {
    console.log(valor, indice)
});

