
//For of -> 
const nome = 'Matheus Aguiar'


for (let valor of nome) {
    console.log(valor)
}



// For in -> lê os índices ou chaves do objeto;
const frutas = ['pera', 'uva', 'maçã'];
for (let i in frutas) {
    console.log(frutas[i]);
}


for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


///////////////////////////////////////////////////////////////

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'MMotta',
    idade: 16
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}


/////////////////////////////////////////////////////////

