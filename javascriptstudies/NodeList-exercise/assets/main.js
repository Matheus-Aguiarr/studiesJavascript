const paragrafos = document.querySelector('.paragrafos') // pegou a div.
const ps = paragrafos.querySelectorAll('p') // pegou a nodeList com todos os p's dentro da div

const stylesBody = getComputedStyle(document.body) // pega o estilo computado do body
const backgroundColorBody = stylesBody.backgroundColor // pega o backgroundColor




for (let i of ps) {  // pega os elementos p de forma separada
    i.style.backgroundColor = backgroundColorBody; 
    i.style.color = '#FFF';
}
