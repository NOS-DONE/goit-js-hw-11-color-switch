const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const buttonStartRef = document.querySelector('button[data-action="start"]');
const buttonStopRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector('body');

buttonStartRef.addEventListener('click', buttonStartHandler);
buttonStopRef.addEventListener('click', buttonStopHandler);

let intervalId = null;

function buttonStartHandler() {

  buttonStartRef.setAttribute('disabled', true);
  buttonStopRef.removeAttribute('disabled');

  intervalId = setInterval(
    changeBodyColor, 1000
  )
}

function buttonStopHandler() {
  buttonStartRef.removeAttribute('disabled');
  buttonStopRef.setAttribute('disabled', true);
  clearInterval(intervalId);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


function changeBodyColor() {
  bodyRef.style.backgroundColor = `${[randomColor()]}`;
}

function randomColor() {
  const colorIndex = randomIntegerFromInterval(0, colors.length - 1)
  return colors[colorIndex];
}