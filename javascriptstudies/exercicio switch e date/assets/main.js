const data = new Date();
const diaSemana = data.getDay();
const diaMes = data.getDate();
const mes = data.getMonth(); 
const ano = data.getFullYear();
const hora = data.getHours();
const res = document.getElementById('res');
let diaSemanaTexto;
let mesTexto;


switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
    break;
    case 1:
        diaSemanaTexto = 'Segunda-Feira';
    break;
    case 2:
        diaSemanaTexto = 'Terça-feira';
    break
    case 3:
        diaSemanaTexto = 'Quarta-feira';
    break
    case 4:
        diaSemanaTexto = 'Quinta-feira';
    break
    case 5:
        diaSemanaTexto = 'Sexta-feira';
    break
    case 6:
        diaSemanaTexto = 'Sabádo';
    break
}



switch (mes) {
    case 0: 
        mesTexto = 'Janeiro';
    break;
    case 1: 
        mesTexto = 'Fevereiro';
    break;
    case 2: 
        mesTexto = 'Março';
    break
    case 3:
        mesTexto = 'Abril';
    break
    case 4: 
        mesTexto = 'Maio';
    break
    case 5: 
        mesTexto = 'Junho';
    break
    case 6: 
        mesTexto = 'Julho';
    case 7:
        mesTexto = 'Agosto';
    break
    case 8: 
        mesTexto = 'Setembro';
    break
    case 9: 
        mesTexto = 'Outubro';
    break
    case 10:
        mesTexto = 'Novembro';
    break
    case 11:
        mesTexto = 'Dezembro';
    break
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

const minutos = zeroAEsquerda(data.getMinutes());

res.innerHTML = (`${diaSemanaTexto}, ${diaMes} de ${mesTexto} de ${ano} ${hora}:${minutos}`);


