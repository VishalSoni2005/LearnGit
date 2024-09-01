function user(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;

    return this;    // this line means returning this object. we know that "this" is an object.
}
// const userOne = user("vishal", 24, "kolkata");
// const userTwo = user("kumar", 24, "kolkata");

// console.log(userOne);
// console.log(userTwo);

// NOW USING "NEW" KEYWORD AS A CONSTRUCTOR

const userOne = new user("vishal", 24, "kolkata");
const userTwo = new user("kumar", 24, "kolkata");

console.log(userOne);
console.log(userTwo);