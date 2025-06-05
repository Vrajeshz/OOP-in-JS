'use strict';

// // const Person = function (fullName, Birthdate) {
// //   // Instance properties
// //   // console.log(this);
// //   this.fullName = fullName;
// //   this.Birthdate = Birthdate;

// //   // Never create function inside construction function
// //   this.calcAge = function () {
// //     console.log((this.calcAge = 2037 - this.Birthdate));
// //   };
// // };

// const vrajesh = new Person('Vrajesh', 2003);
// // console.log(vrajesh);

// // 1. New {} is creted
// // 2. function is called , this = {};
// // 3. {} linked to prototye
// // 4. function automatically return

// const nimesh = new Person('Nimesh', 2002);
// const nakul = new Person('Nakul', 2001);

// // console.log(nimesh, nakul);

// // console.log(vrajesh instanceof Person);

// Person.hey = function () {
//   // console.log(this);
//   console.log('Hey there 👋');
// };
// // Person.hey();

// ////////////////////////////////////////////////
// // Prototype
// ////////////////////////////////////////////////////

// // why prototype bec ama apde single copy ma fuction use kari saki che and construction ma badha instance ma function create tha the
// ///////////////////////////////////////////////////
// // console.log(Person.prototype);

// // Person.prototype.calcAge = function () {
// //   console.log(2025 - this.Birthdate);
// // };

// // vrajesh.calcAge(); // 22
// // nimesh.calcAge(); //23
// // // nakul.calcAge();//24

// // console.log(vrajesh.__proto__);
// // console.log(vrajesh.__proto__ === Person.prototype);

// // console.log(Person.prototype.isPrototypeOf(vrajesh));
// // console.log(Person.prototype.isPrototypeOf(nimesh));
// // console.log(Person.prototype.isPrototypeOf(Person));

// // Person.prototype.species = 'Homo Sapiens';

// // console.log(vrajesh.species, nimesh.species);

// // // ama vrajesh pase function nathi pan Person na prototype pase che
// // console.log(vrajesh.hasOwnProperty('fullName'));
// // console.log(vrajesh.hasOwnProperty('species'));

// // console.log(vrajesh.__proto__);
// // // Object.prototype (top of Prototype chain)
// // console.log(vrajesh.__proto__.__proto__);
// // // null
// // console.log(vrajesh.__proto__.__proto__.__proto__);

// // let arr = [
// //   3, 6, 7, 8, 1, 6, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 1, 5, 5, 8, 8, 8, 8, 8, 2,
// //   4, 5, 6,
// // ];
// // console.log(arr.__proto__);
// // console.log(arr.__proto__ == Array.prototype);

// // console.log(arr.__proto__.__proto__);

// // Array.prototype.unique = function () {
// //   return [...new Set(this)];
// // };

// // console.log(arr.unique());

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */

// // const car = function (make,speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };

// // const bmw = new car("BMW",120);
// // console.log(bmw);

// // car.prototype.accelerate = function () {
// //   this.speed += 10;
// //   console.log(`${this.make} is going at ${this.speed} km/h`);
// // };

// // car.prototype.brake = function () {
// //   this.speed -= 5;
// //   console.log(`${this.make} is going at ${this.speed} km/h`);
// // };

// // bmw.accelerate();
// // bmw.accelerate();
// // bmw.brake();
// // bmw.brake();

// ///////////////////////////////////////////////////
// // Classes in JS
// ///////////////////////////////////////////////////
// // class expression
// // const PersonC1 = class {}

// // class declaration
// class PersonC1 {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance Method
//   // Method will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // set property that already exits
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not FUll name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static Method
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }

// const jessica = new PersonC1('Jessica Davis', 2000);
// // console.log(jessica);
// // jessica.calcAge();
// // console.log(jessica.age);

// // PersonC1.prototype.greet = function () {
// //   console.log(`Hey ${this.fullName}`);
// // };
// // jessica.greet();

// const walter = new PersonC1('Walter White', 1969);
// // console.log(walter);

// PersonC1.hey();

// // 1. classes are not hoisted
// // 2. classes are first-class citizes
// // 3. classes are executes in strict mode

// const account = {
//   name: 'Vrajesh',
//   movement: [100, 200, 300],

//   get latest() {
//     return this.movement.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movement.push(mov);
//   },
// };

// // console.log(account.latest);
// account.latest = 60;
// // console.log(account.movement);
// const personProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   },
// };
// const steavn = new Object(personProto);
// console.log(steavn);
// steavn.name = 'steavn';
// steavn.birthYear = 2000;
// steavn.calcAge();

// const shara = new Object(personProto);
// shara.init('shara', 2000);
// shara.calcAge();
// console.log(shara);

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUs() {
//     return this.speed / 1.6;
//   }

//   set speedUs(s) {
//     this.speed = s * 1.6;
//   }
// }

// const bmwCar = new car('BMW', 160);
// console.log(bmwCar);
// console.log(bmwCar.speed);
// bmwCar.speed = 130;
// console.log(bmwCar);

// const ford = new car('Ford', 120);
// console.log(ford);
// ford.accelerate();
// ford.brake();
// console.log(ford.speedUs);
// ford.speedUs = 50;
// console.log(ford);

//-------------------------------------------------
// Implementing Iheratance

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2030 - this.birthYear);
// };

// const Student = function (firstName, birthYear, cource) {
//   Person.call(this, firstName, birthYear);
//   this.cource = cource;
// };

// // Linking Prototype
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I am Studing ${this.cource}`);
// };

// const mike = new Student('Mike', 2005, 'Computer Science');

// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

//----------------------------------------------------------
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new car('BMW', 120);
console.log(bmw);

const Ev = function (make, speed, battery) {
  car.call(this, make, speed);
  this.battery = battery;
};

Ev.prototype = Object.create(car.prototype);

Ev.prototype.chargeBattery = function (chargeTo) {
  this.battery = chargeTo;
};

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.battery -= 1;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with Charge of ${this.battery}%`
  );
};

const tesla = new Ev('Tesala', 120, 90);
console.log(tesla);
// tesla.chargeBattery(20);
// console.log(tesla);
tesla.accelerate();
tesla.brake();
*/

///////////////////////////////////////////////////
// Classes in JS
///////////////////////////////////////////////////
// class expression
// const PersonC1 = class {}

// // class declaration
// class PersonC1 {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance Method
//   // Method will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // set property that already exits
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not FUll name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static Method
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }

// class StudentCl extends PersonC1 {
//   constructor(fullName, birthYear, cource) {
//     super(fullName, birthYear);
//     this.cource = cource;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.cource}`);
//   }

//   calcAge() {
//     console.log(
//       `I am ${2035 - this.birthYear} years old but, I feel like ${
//         2035 - this.birthYear + 10
//       } years old`
//     );
//   }
// }

// const martha = new StudentCl('Martha JOnes', 2012, 'computer Science');
// console.log(martha);
// console.log(martha.introduce());
// console.log(martha.calcAge());
// console.log(martha.greet());

////////////////////////////////////////////////////
// // Inheritance between "Classes": Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(`${2035 - this.birthYear}`);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steav = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// StudentProto.intoduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2000, 'Computer Science');
// console.log(jay);
// jay.intoduce();
// jay.calcAge();

////////////////////////////////////////////////
// Another Class Example

  // 1) Public fields
  // 2) Priavte fields
  // 3) Public methods
  // 4) Private methods 
  // (There is also Static version  )

class Account {
  // 1) Public fields(instances)
  locale = navigator.language;
  // _movements = [];

  // 2) Private methods
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods
  // Public Interface

  getMovement(){
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    console.log(`Deposited ${val}`);
  }

  withdraw(val) {
    this.deposit(-val);
    console.log(`Withdrawn ${val}`);
  }
  // _approveLoan(val) {
  //   return true;
  // }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  static helper(){
    console.log('Helper finction');
  }

  // 4) Private methods 
  // #approveLoan(val){
  _approveLoan(val){
    return true;
  }
}

const acc1 = new Account('Vrajesh', 'INR', 1234);

acc1.deposit(100);
console.log(acc1);
// acc1.requestLoan(1000);
// acc1.approveLoan(1000);
console.log(acc1.getMovement());
// console.log(acc1.#movements()); // cant acces
// console.log(acc1.#pin()); // cant acces

