// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

/*if (pontuaçãoUsuario >= 1000) {
    console.log('Usuario VIP');
} else {
    console.log('Usuário normal');
} */

//Outra forma de não usar if e else.
const corUsuario = null;
const corPadrao = corUsuario || 'preta';
console.log(corPadrao);

const usuario = 1234;
const situacaoUsuario = usuario == 123 ? 'usuarioreal' : 'usuariofalso';
console.log(situacaoUsuario);

