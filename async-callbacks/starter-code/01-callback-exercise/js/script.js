////////////////////////////
// Callback Functions Lab //
////////////////////////////

//  * STEP 1
//    Create variables to reference the DOM elements with the following ID values:
//    - num1
//    - num2
//    - add
//    - subtract
//    - result

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const result = document.getElementById('result');

//  * STEP 2
//    Create a function called 'add' that accepts 2 values as parameters and
//    returns the result of adding them. (Use a return statement.)

const addTwoNum = function (x, y) {
  const sum = x + y;
  return sum;
};

//  * STEP 3
//    Create a function called 'showAnswer' that accepts a value as a parameter
//    and sets that value as the text content of the div with the id value
//    'result'.

let showAnswer = function (z) {
  result.innerText = z;
};

//  * STEP 4
//    Create a function called 'calcResult' that accepts a callback
//    as a parameter, and does the following:
//    - creates a variable called 'answer' whose value is the result of calling
//      the callback function and passing it the values in the two input boxes
//      as arguments (remember, the values need to be numbers!)
//    - calls the showAnswer function, passing it the 'answer' variable.

const calcResult = function (MathOnTwoNumbers) {
  const answer = MathOnTwoNumbers(Number(num1.value), Number(num2.value));
  showAnswer(answer);
};

//  * STEP 5
//    Create an event listener for the click even on the Add button, calling
//    the calcResult() function and passing the 'add' function as the argument.
//    Save your work, then test in the browser by entering a number in each
//    input box and clicking the Add button.
//    do you need an event.preventDefault()????
// addBtn.addEventListener('click', function (event) {
//   event.preventDefault();
//   calcResult(add);
// });

add.addEventListener('click', function (event) {
  event.preventDefault();
  calcResult(addTwoNum);
});

//  * STEP 6
//    Create a function called 'subtract' that accepts 2 values as parameters
//    and returns the result of adding them. (Use a return statement.)

const subtractTwoNum = function (x, y) {
  difference = x - y;
  return difference;
};

//  * STEP 7
//    Create an event listener for the click even on the Subtract button,
//    calling the calcResult() function and passing the 'subtract' function as
//    the argument. Save your work, then test in the browser by entering a
//    number in each input box and clicking the Subtract button.

subtract.addEventListener('click', function (event) {
  event.preventDefault();
  calcResult(subtractTwoNum);
});

// subtractBtn.addEventListener('click', function (event) {
//   event.preventDefault();
//   calcResult(subtract);
// });

///////////
// BONUS //
///////////

// Create a variable that references the element with the id value 'operator'.

const operator = document.getElementById('operator');

// Update the showAnswer function to change the content of the element with the
// id value 'operator' to a plus symbol after the user clicks the Add button,
// or to a minus symbol after the user clicks the Subtract button.
