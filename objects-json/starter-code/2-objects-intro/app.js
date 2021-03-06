'use strict';

// 1. Create an object called car

// 2. Add a current speed property to the car object and give it the value of 30

// 3. Add a fuel level to the object and give it the value of 10

// 4. Add a method called go. When car.go is invoked, it should console.log('Here we go!')

// 5. Add a method called accelerate. When car.acceletate is invoked, the current speed should increase by 1 and fuel level should decrease by 1.

// 6. Add a method called decelerate. When car.decelerate is invoked, the current speed should decrease by 1.

// 7. Add a method called refuel. When car.refuel is invoked, the fuel level should go back to 10.

// BONUS adapt the code to console log a warning if the fuel level drops below 2.

const car = {
  name: 'car',
  speed: 30,
  fuel_level: 10,
  go: function () {
    console.log('Here we go');
  },
  accelerate: function () {
    this.speed += 1;
    this.fuel_level -= 1;
    console.log(this.speed);
    console.log(this.fuel_level);

    if (this.fuel_level < 2) {
      console.log('warning! low fuel!');
    }
  },
  refuel: function () {
    this.fuel_level = 10;
    console.log(this.fuel_level);
  },
};

car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
