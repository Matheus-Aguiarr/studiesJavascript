// try {
//     // é executada quando não há erros 
//     console.log(a)
//     console.log('caguei')
// } catch (e) {
//     // é executada quando há erros
//     console.log('tratando erro')
// } finally {
//     // sempre é executado
//     console.log('finally:  eu sempre sou executado, independente de dar erro ou nao ')
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('esperando uma isntancia do date ')
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-br',  {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:54:12')
    const hora = retornaHora();
    console.log(hora)
} catch(e) {
    //tratar erro
    
} finally{
    console.log('tenha um bom dia')
}