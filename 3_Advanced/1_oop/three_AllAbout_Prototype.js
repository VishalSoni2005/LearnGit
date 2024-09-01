// function square(a) {
//     return a * a;
// }
// let arr = [1, 2, 3, 4, 5];

// console.log(arr.map(square));

// console.log(square.prototype);

// square.power = 5;
// console.log(square.power);

// console.log(arr.prototype);

//  CREATING NEW FUNCTION INSIDE PROTOTYPE  

function user(name, age) {
    this.name = name;
    this.age = age;
}

user.prototype.increaseAge = function () {
    this.age = this.age + 1;
}

user.prototype.greet = function () {
    console.log(`Hello ${this.name}`);
}

const vishal = new user("vishal", 24);
const kumar = new user("kumar", 24);

vishal.greet();
kumar.increaseAge();

console.log(vishal);
console.log(kumar);

