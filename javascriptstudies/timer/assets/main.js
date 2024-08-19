const relogio = document.querySelector('#relogio');

let seconds = 0;
let timer;

function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false, 
        timeZone: 'UTC'
    });
}

function startTimer() {
    timer = setInterval(function () {
        seconds++;
        relogio.innerHTML = getTimeFromSeconds(seconds);
    }, 1000)
}

document.addEventListener('click', (e) => {
    const el = e.target.id;

    if(el === 'iniciar') {
        clearInterval(timer)
        startTimer()
        relogio.classList.remove('alert')
    }
    if (el === 'zerar') {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00'
        seconds = 0;
        relogio.classList.remove('alert')
    }
    if (el === 'pausar') {
        clearInterval(timer);
        relogio.classList.add('alert')
    }
})

/////////////////////////////////////////////////
// start.addEventListener('click', function(e) {
//     clearInterval(timer)
//     startTimer()
//     relogio.classList.remove('alert')
// })

// pause.addEventListener('click', (e) => {
//     clearInterval(timer);
//     relogio.classList.add('alert')
// })

// finish.addEventListener('click', (e) => {
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00'
//     seconds = 0;
//     relogio.classList.remove('alert')
// })