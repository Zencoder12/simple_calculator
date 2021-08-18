const MAX_DIGITS = 7;
let isLastDigit = false;
let firstNumber = null;
let isSecondNumberFirstDigit = false;

const displayContent = document.querySelector(".calculator__display-content");
const digitButtons = document.querySelectorAll(".btn__dig");
const dotButton = document.querySelector(".btn__dot");
const clearButton = document.querySelector(".btn__clear");
const sumButton = document.querySelector(".btn__sum");
const equalButton = document.querySelector(".btn__equal");

digitButtons.forEach((item) => {
  item.addEventListener("click", displayDigit);
});

dotButton.addEventListener("click", addDot);

clearButton.addEventListener("click", clear);

sumButton.addEventListener("click", sum);

equalButton.addEventListener("click", equal);

function displayDigit() {
  if (displayContent.textContent === "0") {
    return (displayContent.textContent = this.textContent);
  }

  /* allow to erase the first number of the operation and replace with 
  the first digit of the second number after an operation has been pressed */
  if (isSecondNumberFirstDigit) {
    displayContent.textContent = this.textContent;
    isSecondNumberFirstDigit = false;
    return;
  }

  if (isDisplayFull()) return;

  displayContent.textContent = displayContent.textContent + this.textContent;
}

function addDot() {
  if (isDisplayFull()) return;

  if (!isLastDigit) {
    displayContent.textContent = displayContent.textContent + ".";
    isLastDigit = true;
    return;
  }
}

function clear() {
  displayContent.textContent = 0;
  isLastDigit = false;
  firstNumber = null;
  return;
}

function sum() {
  if (!firstNumber) {
    firstNumber = displayContent.textContent;
    isSecondNumberFirstDigit = true;
    return;
  }

  return;
}

function equal() {
  if (!firstNumber) return;

  const firstN = parseFloat(firstNumber);

  displayContent.textContent =
    parseFloat(firstNumber) + parseFloat(displayContent.textContent);

  firstNumber = false;
}

function isDisplayFull() {
  return displayContent.textContent.length >= MAX_DIGITS;
}
