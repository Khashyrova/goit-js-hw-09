
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

buttonStart.addEventListener('click', onStart);
buttonStop.addEventListener('click', onStop);

let timerId = null;

function onStart() {
  timerId = setInterval(getBgColor, 1000);

    buttonStart.toggleAttribute('disabled');
    buttonStop.removeAttribute('disabled');
}

function onStop() {
  clearInterval(timerId);

    buttonStart.removeAttribute('disabled');
    buttonStop.toggleAttribute('disabled');
}

function getBgColor() {
  body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}