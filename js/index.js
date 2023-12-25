const display = document.getElementById("display");
const animeClear = document.getElementById("anime-clear");
let storedValueForPercentage = null;


function appendToDisplay(char) {
  if (char === '/100') {
    display.value += '%';
  } else {
    display.value += char;
  }
  display.style.fontSize = "40px";
  display.style.color = "white";
}

function clearDisplay() {
  display.value = "";

  animeClear.classList.remove("playAnimation");
  void animeClear.offsetWidth;
  animeClear.classList.add("playAnimation");
}

function calculateResult() {
  try {
    const result = eval(display.value.replace('%', '/100'));
    if (result !== undefined) {
      display.value = result;
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