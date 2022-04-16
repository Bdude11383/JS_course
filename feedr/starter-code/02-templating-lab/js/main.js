// Templating lab

// PART 1

// Clone HTML template (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
// and use it to display the data in the 'favourite' object.

const favourite = {
  name: 'Shakshuka',
  serves: 4,
  meal: 'breakfast',
};

// PART 2

// Comment out your template above and create a template function
// that instead displays the contents of the 'favourites' object below.

const container = document.getElementsByClassName('container')[0];
console.log(container);
const favourites = [
  {
    name: 'Shakshuka',
    serves: 4,
    meal: 'breakfast',
  },
  {
    name: 'Black Bean Chili',
    serves: 8,
    meal: 'dinner',
  },
  {
    name: 'Classic Peanut Butter Cookies',
    serves: '3 dozen',
    meal: 'dessert',
  },
];

for (let i = 0; i < 3; i++) {
  //create button
  const button = document.createElement('button');

  console.log(favourites[i].name);

  // add button text
  button.innerText = favourites[i].name;

  button.onclick = function () {
    alert('Been clicked!', favourites[i]);
  };

  document.body.appendChild(button);
}
