const mySym = Symbol("Key");

let myObject = {
    "full name": "Vishal kumar soni",
    email: "vsoni@google.com",
    age: 21,
    [mySym] : "key",
    location_1 : "Pune",
    isLoggedId: false
}
console.log(myObject.age)
console.log(myObject["full name"])
console.log(myObject["email"])
console.log(myObject.email)
console.log(myObject.mySym) // ->for correct syntax
console.log(myObject[mySym])


// myObject.greeting = function() {
//     console.log("Hello Sir ");
// }

// myObject.greetingTwo = function() {
//     console.log(`Hello ${this["full name"]} Sir !!!`);
// }
// myObject.greeting();
// myObject.greetingTwo();





