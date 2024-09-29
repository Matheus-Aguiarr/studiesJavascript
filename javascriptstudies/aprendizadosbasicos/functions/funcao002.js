function soma(a, b) {
    return a + b;
}

// console.log(soma(3, 7));

function soma2(a, b) {
    console.log(a + b)
}

// console.log(soma2(8, 9));

function criaPessoa(nome, sobrenome) {
    return {  nome, sobrenome  };
}

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('olá');

console.log(olaMundo)