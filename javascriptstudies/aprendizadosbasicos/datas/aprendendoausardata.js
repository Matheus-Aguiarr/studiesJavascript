function zeroAEsquerda(num) {
   return num >= 10 ? num : `0${num}`;
}


function formataData(data) {
   data = new Date()
   const dia = zeroAEsquerda(data.getDate());
   const mes = zeroAEsquerda(data.getMonth());
   const ano = zeroAEsquerda(data.getFullYear());
   const hora = zeroAEsquerda(data.getHours());
   const min = zeroAEsquerda(data.getMinutes());
   const seg = zeroAEsquerda(data.getSeconds());


   const resultado = `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
   console.log(resultado)
}

formataData()


