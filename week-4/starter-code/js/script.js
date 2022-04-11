/*
# Animal Drum kit 🥁

This is JavaScript lab is for exercise conditionals (`if`, `else`, `switch`)

Following the 3 **E's pattern (Element, Event, Execution)** solve the following problems:

1. When user `keydown` letter <kbd>A</kbd> the **clap** sound should play
2. When user `keydown` letter <kbd>S</kbd> the **hihat** sound should play
3. When user `keydown` letter <kbd>D</kbd> the **openhat** sound should play
4. When user `keydown` letter <kbd>G</kbd> the **boom** sound should play
5. When user `keydown` letter <kbd>H</kbd> the **ride** sound should play
6. When user `keydown` letter <kbd>J</kbd> the **snare** sound should play
7. When user `keydown` letter <kbd>K</kbd> the **tom** sound should play
8. When user `keydown` letter <kbd>L</kbd> the **link** sound should play

Happy coding!

*/

var clap = new Audio('sounds/clap.wav');

var hihat = new Audio('sounds/hihat.wav');

var openhat = new Audio('sounds/openhat.wav');

var boom = new Audio('sounds/boom.wav');

var ride = new Audio('sounds/ride.wav');

var snare = new Audio('sounds/snare.wav');

var tom = new Audio('sounds/tom.wav');

var link = new Audio('sounds/tink.wav');

//WORKS!
document.addEventListener('keydown', function (event) {
  if (event.key === 'A') {
    clap.play();
  } else if (event.key === 'S') {
    hihat.play();
  } else if (event.key === 'D') {
    openhat.play();
  } else if (event.key === 'G') {
    boom.play();
  } else if (event.key === 'H') {
    ride.play();
  } else if (event.key === 'J') {
    snare.play();
  } else if (event.key === 'K') {
    tom.play();
  } else if (event.key === 'L') {
    link.play();
  }
});

//DOESN'T WORK FOR SOME REASON
/*
document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'A':
      clap.play();
    case 'S':
      hihat.play();
    case 'D':
      openhat.play();
    case 'G':
      boom.play();
    case 'H':
      ride.play();
    case 'J':
      snare.play();
    case 'K':
      tom.play();
    case 'L':
      link.play();
  }
});
*/
