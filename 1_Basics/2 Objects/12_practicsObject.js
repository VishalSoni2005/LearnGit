const myFunction = {
    "name" : "Vishal",
    "roll": 64,
    greeting: function() {
        console.log(`HELLO ${this.name} of roll no ${this.roll}`)
    }
}
// console.log(myFunction.name);
// myFunction.greeting();


function Car(name, model, year, cost){
    this.name = name;
    this.model = model;
    this.year = year;
    this.cost = cost;
}
    // print: function() {
    //     console.log(`Your Car ${this.name} of Model ${this.model} Was Made on yead ${this.year} At Cost of ${cost}`)
    // }


const myCar = new Car("Buggati", "Serron", 2024, "10 Million");
const kenscar = new Car("Nissan", "300ZX", 1992, "1 Million");
const vpgscar = new Car("Mazda", "Miata", 1990, null);

console.log(myCar);

