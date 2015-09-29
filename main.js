
// Grab spans/declare vars
var numberOne = document.querySelector('#num_one');
var numberTwo = document.querySelector('#num_two');
var calcButton = document.querySelector('#calculateBtn');
var printAnswer = document.querySelector('#answer');

var grandTotal;

// Do the math and print to page
var figureItOut = function () {  
  grandTotal = Number(numberOne.value) + Number(numberTwo.value);
  printAnswer.textContent = grandTotal;
}

// Button click
calcButton.addEventListener('click', figureItOut);