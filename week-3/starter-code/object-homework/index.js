/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.

'use strict';

// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things.
//In comments, list at least three reasonable abstractions that you might use to build this program; for each abstraction, list out at least
//two properties and behaviors that it would make sense for that abstraction to have.Below is an example - please write your answer in the same format.

// 'Car'
// Description: Our app manages car sales.
// Every 'car' has
// - a make
// - a model
// - a year
// Every 'car' can
// - drive
// - brake
// - park

// Answer Starts Here

// '2022 Calender'
// Description: Our app manages a 2022 calender
// Every 'Calender' has
// - days
// - weeks
// - months

// Every 'Calender' can
// - move forward day
// - move forward week
// - move forwrd month

// To-do list
// Description: Our app tracks progress on a to-do list
// Every 'To-do list' has
// - tasks
// - subtasks

// Every 'To-do list' can
// - add task
// - remove task
// - add subtask
// - remove subtask

// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. Store it in the
// variable 'pet_owner', below.Be sure to give it reasonable values for each of its properties.

// 'Owner'
// Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
// Every 'owner' has:
// - a name
// - an address

// Answer Starts Here

const pet_owner = {
  name: ['Ted', 'Bill', 'Sarah'],
  address: [
    '1862 Phyllis Rd Helena MT',
    '2391 Seminary Ave Boston, MA',
    '2020 L Street Washington, DC',
  ],
};

console.log(pet_owner);

// Answer Ends Here

// 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.

// Pet
// Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
// Every 'pet' has:
// - a name
// - a species
// - a breed
// - a noise that it can make (e.g. 'bark', 'meow', etc.)
// Every pet can:
// - make noise (each pet makes its own unique noise, as specified by `noise`.

// Answer Starts Here

const some_pet = {
  name: ['Olive', 'Mango', 'Reggie'],
  species: ['dog', 'dog', 'hamster'],
  breed: ['English Bulldog', 'English Bulldog', NaN],
  noise: ['bark', 'ruff', 'squeek'],
  make_noise(name) {
    if (name == 'Olive') {
      console.log(this.noise[0]);
    } else if (name == 'Mango') {
      console.log(this.noise[1]);
    } else if (name == 'Reggie') {
      console.log(this.noise[2]);
    } else {
      console.log('unknown noise!');
    }
  },
};

//CHECK WORK
console.log(some_pet.make_noise('Olive'));

// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done!

/////////////////////////////////////////////////////////////
