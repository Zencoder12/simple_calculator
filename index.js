const MAX_DIGITS = 7;
let isOn = false;
let isLastDigit = false;
let firstNumber = null;
let isSecondNumberFirstDigit = false;
let operation;

const displayContent = document.querySelector(".calculator__display-content");
const onOffButton = document.querySelector(".btn__onoff");
const digitButtons = document.querySelectorAll(".btn__dig");
const dotButton = document.querySelector(".btn__dot");
const clearButton = document.querySelector(".btn__clear");
const sumButton = document.querySelector(".btn__sum");
const multiplicationButton = document.querySelector(".btn__mult");
const divisionButton = document.querySelector(".btn__div");
const subtractionButton = document.querySelector(".btn__sub");
const equalButton = document.querySelector(".btn__equal");
const signButton = document.querySelector(".btn__sign");
const allButtons = document.querySelectorAll(".btn");

onOffButton.addEventListener("click", turnOnOff);

digitButtons.forEach((item) => {
  item.addEventListener("click", displayDigit);
});

dotButton.addEventListener("click", addDot);

clearButton.addEventListener("click", clear);

sumButton.addEventListener("click", sum);

multiplicationButton.addEventListener("click", multiplication);

divisionButton.addEventListener("click", division);

subtractionButton.addEventListener("click", subtraction);

equalButton.addEventListener("click", equal);

signButton.addEventListener("click", changeSign);

function turnOnOff() {
  if (!isOn) {
    displayContent.textContent = 0;
    enableAllButtons();
    isOn = true;
    return;
  }

  displayContent.textContent = " ";
  disableAllButtons();
  isOn = false;
}

function enableAllButtons() {
  allButtons.forEach((btn) => btn.removeAttribute("disabled"));
}

function disableAllButtons() {
  allButtons.forEach((btn) => (btn.disabled = true));
}

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
    operation = "sum";
    isSecondNumberFirstDigit = true;
    return;
  }

  return;
}

function multiplication() {
  if (!firstNumber) {
    firstNumber = displayContent.textContent;
    operation = "multiplication";
    isSecondNumberFirstDigit = true;
    return;
  }

  return;
}

function division() {
  if (!firstNumber) {
    firstNumber = displayContent.textContent;
    operation = "division";
    isSecondNumberFirstDigit = true;
    return;
  }

  return;
}

function subtraction() {
  if (!firstNumber) {
    firstNumber = displayContent.textContent;
    operation = "subtraction";
    isSecondNumberFirstDigit = true;
    return;
  }

  return;
}

function changeSign() {
  if (displayContent.textContent === "0") return;

  if (firstNumber && isSecondNumberFirstDigit) {
    displayContent.textContent = displayContent.textContent * -1;
    firstNumber = displayContent.textContent;
  } else {
    displayContent.textContent = displayContent.textContent * -1;
  }
}

function equal() {
  if (!firstNumber) return;

  switch (operation) {
    case "sum": {
      displayContent.textContent =
        parseFloat(firstNumber) + parseFloat(displayContent.textContent);
      break;
    }

    case "multiplication": {
      displayContent.textContent =
        parseFloat(firstNumber) * parseFloat(displayContent.textContent);
      break;
    }

    case "division": {
      displayContent.textContent =
        parseFloat(firstNumber) / parseFloat(displayContent.textContent);
      break;
    }

    case "subtraction": {
      displayContent.textContent =
        parseFloat(firstNumber) - parseFloat(displayContent.textContent);
      break;
    }

    default:
      break;
  }

  firstNumber = false;
}

function isDisplayFull() {
  return displayContent.textContent.length >= MAX_DIGITS;
}
