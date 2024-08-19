const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {
    if (numero === 3) {
        console.log('pulei o numero 3')
        continue;
    }
    if (numero > 7) {
        console.log('parei por que 8 pra cima é demais')
        break;
    }
    console.log(numero);
}

// for (let i in numeros) {
//     let numero = numeros[i];
//     if (numero === 3) {
//         console.log('pulei o numero 3')
//         continue;
//     }
//     if (numero > 7) {
//         console.log('parei por que 8 pra cima é demais')
//         break;
//     }
//     console.log(numero);
// }

// for (let i = 0; i < numeros.length; i++) {
//     let numero = numeros[i];
    
//     if (numero === 3) {
//     console.log('pulei o numero 3')
//     continue;
//     }

//     if (numero > 7) {
//     console.log('parei por que 8 pra cima é demais')
//     break;
//     }

//     console.log(numero);
// }    