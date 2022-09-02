//Calculator Result
const calcResult = document.getElementById('calc');

//Calculator Signs
//grey signs:
const clearButton = document.getElementById('ac');
const turnSignsButton = document.getElementById('turn-signs');
//orange signs:
const equalButton = document.getElementById('equal');

// The Div containing Button Elements:
const buttonsContainer = document.getElementById('buttons-container');

let result = [];

console.log(calcResult.value);

// Catch Button innerHTML's and Push to Result Array
buttonsContainer.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (
    !isButton ||
    event.target.id === 'equal' ||
    event.target.id === 'turn-signs' ||
    event.target.id === 'ac'
  ) {
    return;
  }
  
  result.push(event.target.innerHTML);
  
  let finalResult = result;
  let joined = finalResult.join('');
  
  calcResult.value = joined;
});

console.log(result);

//Show Inputs in the Calc Screen Input

// Special Buttons of which will not be pushed to the Results Array:

// Final Calculation & Answer (Equal Sign Button):
function calculate() {

  let finalResult = result;
  let joined = finalResult.join('');
  console.log(joined);
  
  let finalAnswer = eval(joined);

  calcResult.value = finalAnswer;
   
}

equalButton.addEventListener('click', calculate);


// Clear the Result (AC Sign Button):
function clearResult() {
  calcResult.value = '0';
  result = [];
}
clearButton.addEventListener('click', clearResult);
