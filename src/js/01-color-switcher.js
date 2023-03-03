
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

buttonStart.addEventListener('click', onStart);
buttonStop.addEventListener('click', onStop);

let timerId = null;
buttonStop.disabled = true;

function onStart() {
  timerId = setInterval(getBgColor, 1000);

  buttonStart.disabled = true;
  buttonStop.disabled = false;
}

function onStop() {
  clearInterval(timerId);

  buttonStop.disabled = true;
  buttonStart.disabled = false;
}

function getBgColor() {
  body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}