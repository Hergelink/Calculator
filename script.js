//Calculator Result
const calcResult = document.getElementById('calc');

//Calculator Signs
//grey signs:
const clearButton = document.getElementById('ac');
const turnSignsButton = document.getElementById('turn-signs');
const percentageButton = document.getElementById('percent');
//orange signs:
const equalButton = document.getElementById('equal');

// The Div containing Button Elements:
const buttonsContainer = document.getElementById('buttons-container');

let result = [];

// Catch Button innerHTML's and Push to Result Array
buttonsContainer.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (
    !isButton ||
    event.target.id === 'equal' ||
    event.target.id === 'turn-signs' ||
    event.target.id === 'ac' ||
    event.target.id === 'percent'
  ) {
    return;
  }

  result.push(event.target.innerHTML);

  let finalResult = result;
  let joined = finalResult.join('');

  calcResult.value = joined;
});

//Special button elements:

//Turn Signs (positive to negative)
turnSignsButton.addEventListener('click', () => {
  // get the digits after a sign
  let regEx = /\d+$/g;

  let string = result;
  let finalString = string.join('');
  const lastChar = finalString.match(regEx);

  let signTurned = lastChar * -1;

  let inParentheses = `(${signTurned})`;

  let finalResult = result;
  //pop & push mutates the original array
  let popped = finalResult.pop(regEx);
  let lastStep = finalResult.push(inParentheses);

  let joined = finalResult.join('');

  calcResult.value = joined;
});

// Percentage Sign Function

percentageButton.addEventListener('click', () => {
  let percentageValue = calcResult.value / 100;

  calcResult.value = percentageValue;
});

// Final Calculation & Answer (Equal Sign Button):
function calculate() {
  if (calcResult.value == 0) {
    return;
  } else {
    let finalResult = result;
    let joined = finalResult.join('');

    let finalAnswer = eval(joined);

    calcResult.value = finalAnswer;
  }
}

equalButton.addEventListener('click', calculate);

// Clear the Result (AC Sign Button):
function clearResult() {
  calcResult.value = '0';
  result = [];
}
clearButton.addEventListener('click', clearResult);
