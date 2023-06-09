// Prompt calculator
alert('Hello there, check my calculator');

//prompt calculator

let firstNumber;
let secondNumber;
let operator;

// add firsr number
while (true) {
  firstNumber = prompt('Type the first number');

  if (/[1-9]/.test(firstNumber)) {
    break;
  } else {
    alert('This is not a number');
  }
}

// add operator
while (true) {
  operator = prompt('Type the operator (+-/*)');

  if (/[*-+-/]/.test(operator)) {
    if (operator.length === 1) {
      break;
    } else {
      alert('Please, just one operator');
    }
  } else {
    alert('This is not an operator');
  }
}

// add second number
while (true) {
  secondNumber = prompt('Type the second number');

  if (/[1-9]/.test(secondNumber)) {
    break;
  } else {
    alert('This is not a number');
  }
}

// convert strings into numbers
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

// calculation
let output = '';
if (operator === '+') {
  output = firstNumber + secondNumber;
} else if (operator === '-') {
  output = firstNumber - secondNumber;
} else if (operator === '*') {
  output = firstNumber * secondNumber;
} else if (operator === '/') {
  output = firstNumber / secondNumber;
}

// output
alert('The result is ' + output);
