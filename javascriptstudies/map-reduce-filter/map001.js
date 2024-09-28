const numeros = [1, 2, 3, 4, 5];
// numero - item por item | index - posição atual do array | array completo |
// Os nomes nao importam, sempre seguirá a ordem acima.
const dobro = numeros.map( (numero) => {
    return numero * 2;
})

console.log('Esse é o array original - \n' + numeros + '\nE esse é o array dobrado - \n' + dobro);
