const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '24 Dec 2021';

function countdown(){
    const newYearsDate = new Date(newYears);

    const currentDate = new Date();  //actual date

    const totalSeconds = new Date( newYearsDate - currentDate) / 1000;

    // Calcular cantides restantes de la cuenta regresiva
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor( totalSeconds / 3600) % 24;
    const mins = Math.floor( totalSeconds / 60) % 60;   
    const seconds = Math.floor( totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

// formato para agregar el 0 antes a cada elemento
function formatTime( time ){
    return time < 10 ? `0${time}`: time;
}



// Llamada inicial
countdown();

setInterval( countdown , 1000)

