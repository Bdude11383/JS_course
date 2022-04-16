/*
# Traffic Lights 🚦

This is your first solo JavaScript lab 🙌 !

Following the 3 **E's pattern (Element, Event, Execution)** solve the following problems:

1. When user `click` on the stop button the top light should be turn from black to red ⚫️ → 🔴
2. When user `click` on the slow button the middle light should turn from black to amber ⚫️ → 🟡
3. When user `click` on the go button the bottom light should turn from black to green ⚫️ → 🟢

Happy coding!
*/

const stopBtn = document.getElementById('js-stop-button');

const slowBtn = document.getElementById('js-slow-button');

const goBtn = document.getElementById('js-go-button');

const makeRed = function () {
  document.getElementById('js-stop-light').style.backgroundColor = 'red';
};

const makeYellow = function () {
  document.getElementById('js-slow-light').style.backgroundColor = 'yellow';
};

const makeGreen = function () {
  document.getElementById('js-go-light').style.backgroundColor = 'green';
};

stopBtn.addEventListener('click', makeRed);
slowBtn.addEventListener('click', makeYellow);
goBtn.addEventListener('click', makeGreen);
