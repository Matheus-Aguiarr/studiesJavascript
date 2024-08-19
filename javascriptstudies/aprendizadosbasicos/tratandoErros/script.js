
function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numeros.');
    }
    return x + y;
}

try {
    console.log(soma(1,2))
    console.log(soma(1,'1'))

} catch(error) {
    console.log('Use numeros.')
}





// vai tentar exibir a variaval naoExisto, e retornar que ela nnao existe.
// try {

//     console.log(naoExisto);
// } catch(error) {
//     console.log('naoexisto nao existe')
// }