function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const widgetSpan = document.querySelector(".color");
const widgetBtn = document.querySelector(".change-color");

const widgetHandler = () => {
  body.style.backgroundColor = getRandomHexColor();
  let background = body.style.backgroundColor;
  widgetSpan.textContent = background;
};

widgetBtn.addEventListener("click", widgetHandler);
