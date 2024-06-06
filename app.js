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

}});
  });

function takeNumber(number) {
    humanChoiceNumbers += number;
    updateDisplay(humanChoiceNumbers);
}

function takeOperator(operator1) {
    if (operator1 === 'C') {
        humanChoiceNumbers = '';
        newInput = '';
        humanChoiceCalculations = '';
        updateDisplay('0'); 
    }

    if (humanChoiceCalculations === '' && operator1 !== 'C') { 
        humanChoiceCalculations += operator1;
        updateDisplay(humanChoiceCalculations);
    } 

    if (newInput === '') {
        newInput = humanChoiceNumbers; 
    } else if (humanChoiceNumbers !== '') {
        calculateResult(); 
        newInput = humanChoiceNumbers; 
    }

    operator = operator1; 
    humanChoiceNumbers = ''; 
}

  function updateDisplay(text) {
    display.innerText = text;
  }

  function calculateResult() {
    let result;
    const num1 = Number(newInput); 
    const num2 = Number(humanChoiceNumbers);  
  
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
    
    updateDisplay(result); 
    humanChoiceNumbers = result.toString(); 
    newInput = ''; 
    operator = ''; 
  }