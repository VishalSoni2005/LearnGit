// syntax for objects in array arr = [{}, {}, {}]

let arr = [{name: "Vishal", age: 21}, {name:"Aniket", age:19}, {name:"Laxmi", age:23}];
for (const name of arr) {
    console.log(name.name, "->", name.age);
}
let brr = ["Vishal", "Varun", 21, 18];
for (const i of brr) {
    process.stdout.write(i + " ");
}