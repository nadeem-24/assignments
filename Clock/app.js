const hourBtn = document.querySelector('.hour');
const minutesBtn = document.querySelector('.min');
const secBtn = document.querySelector('.sec');

setInterval(clock, 1000)

function clock () {
    const currentTime = new Date();

    let hour = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if (hour < 10) {
        hour = '0' + hour;
    }
    
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    hourBtn.innerHTML = hour;   
    minutesBtn.innerHTML = minutes;
    secBtn.innerHTML = seconds;
}
