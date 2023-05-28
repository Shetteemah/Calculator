const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');
const clearButton = document.getElementById('clear');
const calculateButton = document.getElementById('calculate');

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === '=') {
      calculate();
    } else if (button.textContent === 'AC') {
      clear();
    } else if (button.classList.contains('function')) {
      handleFunction(button.textContent);
    } else {
      appendToResult(button.textContent);
    }
  });
});

// Append a number or operator to the result
function appendToResult(value) {
  result.value += value;
}

// Handle special functions like log, sqrt, cos, sin, tan
function handleFunction(func) {
  switch (func) {
    case 'log':
      result.value = Math.log10(parseFloat(result.value));
      break;
    case 'sqrt':
      result.value = Math.sqrt(parseFloat(result.value));
      break;
    case 'cos':
      result.value = Math.cos(parseFloat(result.value));
      break;
    case 'sin':
      result.value = Math.sin(parseFloat(result.value));
      break;
    case 'tan':
      result.value = Math.tan(parseFloat(result.value));
      break;
    default:
      break;
  }
}

// Calculate the result
function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}

// Clear the result
function clear() {
  result.value = '';
}
