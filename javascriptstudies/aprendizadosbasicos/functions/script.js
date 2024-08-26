//checa se B é existente, se não for, ele é igual a 0
function funcao(a, b = 0) {
    console.log(a + b)
}

funcao(2, 9);

//Rest operator
const conta = function (operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        //me dá a operação de todos os numeros 
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;

    }
    console.log(acumulador);
    console.log(arguments)
};
//todos os numeros do rest operator(..numeros) estarão dentro de uma array
conta('-', 0, 22, 2202, 329, 9)
