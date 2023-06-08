// Say hello let'us build a calculator
alert("Hello there, let'us build a calculator");

//prompt calculator

let firstNumber;
let secondNumber;
let operator;

while (true) {
  firstNumber = prompt('Type the first number');

  if (/^[1-9]+$/.test(firstNumber)) {
    break;
  } else {
    alert('This is not a number');
  }
}

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

while (true) {
  secondNumber = prompt('Type the second number');

  if (/^[1-9]+$/.test(secondNumber)) {
    break;
  } else {
    alert('This is not a number');
  }
}

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

alert('The result is ' + output);
