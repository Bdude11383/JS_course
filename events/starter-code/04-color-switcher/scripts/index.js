// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!
// Follow the 3 E's pattern (Element, Event, Execution)

console.log('Hello');

const grayBtn = document.getElementById('js-gray-button');
const whiteBtn = document.getElementById('js-white-button');

const changeToGray = function () {
  document.body.style.backgroundColor = 'grey';
};

const changeToWhite = function () {
  document.body.style.backgroundColor = 'white';
};

grayBtn.addEventListener('click', changeToGray);

whiteBtn.addEventListener('click', changeToWhite);
