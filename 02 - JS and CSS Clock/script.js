const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);

//function setTime() {
//  const dt = new Date();
//  const time = dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds();
//  document.getElementById('digitalTime').value = time;
//}

function setTime() {
    const dt = new Date();
    const time = dt.toLocaleTimeString('en-US');
    //document.querySelector('.digitalTime') = time;
    document.getElementById('digitalTime').innerHTML = time;
}

setInterval(setTime, 1000);
