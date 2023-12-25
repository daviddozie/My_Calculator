const display = document.getElementById("display");
const animeClear = document.getElementById("anime-clear");
let storedValueForPercentage = null;
let lastOperator = null;
let lastResult = null;

function appendToDisplay(char) {
  if (char === '/100') {
    display.value += '%';
  } else {
    display.value += char;
    lastOperator = null;
  }
  display.style.fontSize = "40px";
  display.style.color = "white";
}

function clearDisplay() {
  display.value = "";
  lastResult = null;

  animeClear.classList.remove("playAnimation");
  void animeClear.offsetWidth;
  animeClear.classList.add("playAnimation");
}

function calculateResult() {
  try {
    let expression = display.value.replace('%', '/100');
    const result = eval(expression);

    if (result !== undefined) {
      if (lastOperator === null && lastResult !== null) {
        display.value = parseFloat(result) + parseFloat(lastResult);
        lastResult = display.value;
      } else {
        display.value = result;
        lastResult = result;
      }
      display.style.color = "green";
    } else {
      display.value = "Math error";
      display.style.color = "red";
      display.style.fontSize = "30px";
    }
  } catch (error) {
    display.value = "Math error";
    display.style.color = "red";
    display.style.fontSize = "30px";
  }
}

function clearSingleDisplay() {
  const currentValue = display.value;
  if (currentValue.length > 0) {
    display.value = currentValue.slice(0, -1);
  }
}

function performOperation(operator) {
  lastOperator = operator;
  lastResult = display.value;
  appendToDisplay(operator);
}
