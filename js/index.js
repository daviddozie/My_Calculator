// Get the display element
const display = document.getElementById("display");
//get anime by id
const animeClear = document.getElementById("anime-clear");


// Function to append characters to the display
function appendToDisplay(char) {
  display.value += char;
  display.style.fontSize = "40px";
  display.style.color = "black";
}

// Function to clear the display
function clearDisplay() {
  display.value = "";

  animeClear.classList.remove("playAnimation");
  void animeClear.offsetWidth;
  animeClear.classList.add("playAnimation");
}

// Function to calculate the result
function calculateResult() {
  try {
    const result = eval(display.value); // Use eval to calculate the expression
    if (result !== undefined) {
      display.value = result;
      display.style.color = "green";
    } else {
      display.value = "Math error";
      display.style.color = "red";
      display.style.fontSize = "12px";
    }
  } catch (error) {
        display.value = "Math error";
        display.style.color = "red";
        display.style.fontSize = "12px";
    }
}

// Function to clear one character from the display
function clearSingleDisplay() {
  const currentValue = display.value;
  if (currentValue.length > 0) {
    // Remove the last character from the input value
    display.value = currentValue.slice(0, -1);
  }
}