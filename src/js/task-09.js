function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const widgetSpan = document.querySelector(".color");
const widgetBtn = document.querySelector(".change-color");

const widgetHandler = (event) => {};

widgetBtn.addEventListener("click", widgetHandler);
