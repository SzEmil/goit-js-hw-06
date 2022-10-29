"use strict";

const inputer = document.querySelector("#font-size-control");

const textSpan = document.querySelector("#text");

const inputHandler = (event) => {
  const sizeSpan = event.currentTarget.value + "px";
  console.log(sizeSpan);
  textSpan.style.fontSize = sizeSpan;
};

inputer.addEventListener("input", inputHandler);
