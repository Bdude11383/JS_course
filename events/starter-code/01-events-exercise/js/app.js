// Add event listeners to the 3 buttons at the top of the page.
// Clicking each button should hide the block below it with the corresponding color.

// STEP 1
// create a variable for each button at the top of the page. There should be 3 in total.
// call them redBtn, blueBtn and yellowBtn
const redBtn = document.getElementById('r');
const blueBtn = document.getElementById('b');
const yellowBtn = document.getElementById('y');

// STEP 2
// create a variable for each of the blocks in the middle of the page. Again, there should be 3 of them.
// call them redBlock, blueBlock and yellowBlock

const redBlock = document.getElementsByClassName('red')[0];
const blueBlock = document.getElementsByClassName('blue')[0];
const yellowBlock = document.getElementsByClassName('yellow')[0];

// STEP 3
// Write a statement to add an event listener to the redBtn element. In response to the click event, it should add the class name 'hidden' to the redBlock element.

function addClassToRed() {
  redBlock.classList.add('hidden');
}

redBtn.addEventListener('click', addClassToRed);

// 3.1 - test the function in the browser

// STEP 4
// Write a statement to add an event listener to the blueBtn element. In response to the click event, it should add the class name 'hidden' to the blueBlock element.

function addClassToBlue() {
  blueBlock.classList.add('hidden');
}
blueBtn.addEventListener('click', addClassToBlue);

// 4.1 - test the function in the browser

// STEP 5
// Write a statement to add an event listener to the yellowBtn element. In response to the click event, it should add the class name 'hidden' to the yellowBlock element.

function addClassToYellow() {
  yellowBlock.classList.add('hidden');
}
yellowBtn.addEventListener('click', addClassToYellow);

// 5.1 - test the function in the browser

// BONUS 1
// Add an event listener for the "Show all blocks" button that removes the hidden class from all the colored block elements.

const showAllBlocksBtn = document.getElementById('show');

function removeClass() {
  redBlock.classList.remove('hidden');
  blueBlock.classList.remove('hidden');
  yellowBlock.classList.remove('hidden');
}

showAllBlocksBtn.addEventListener('click', removeClass);

// BONUS 2
// Modify the functions so clicking them once hides the corresponding block and clicking them again shows it again. (toggle a class)

function addClassToRed() {
  redBlock.classList.toggle('hidden');
}

redBtn.addEventListener('click', addClassToRed);
