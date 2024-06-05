/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let humanChoiceCalculations = '';
let humanChoiceNumbers = '';
let newInput = '';
let operator = '';

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
    const buttonValue = event.target.innerText;

 if (event.target.classList.contains('button')) {
    if (event.target.classList.contains('number')) {
      takeNumber(buttonValue);
    } else if (event.target.classList.contains('operator')) {
      takeOperator(buttonValue);
    } else if (event.target.classList.contains('equals')) {
      calculateResult();
    }
    
    console.log(event.target.innerText);

}});
  });

function takeNumber(number) {
    humanChoiceNumbers += number;
    updateDisplay(humanChoiceNumbers);
}

function takeOperator(operator) {
    if (operator === 'C') {
        humanChoiceNumbers = '';
        newInput = '';
        humanChoiceCalculations = '';
        operator = '';
        updateDisplay('0');
    } if (humanChoiceNumbers !== '' && newInput === '') {
        newOperator = humanChoiceNumbers;
        humanChoiceNumbers = '';
        
    }
    
    humanChoiceCalculations += operator;
    updateDisplay(humanChoiceCalculations);

}

  function updateDisplay(text) {
    display.innerText = text;
  }

  function calculateResult() {
    let result;
    const num1 = Number(humanChoiceNumbers); 
    const num2 = Number(newInput);  
  
    if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '-') {
      result = num1 - num2;
    } else if (operator === '*') {
      result = num1 * num2;
    } else if (operator === '/') {
      result = num1 / num2;
    } else {
      return newInput;
    }
  
    return result.toString();
  }