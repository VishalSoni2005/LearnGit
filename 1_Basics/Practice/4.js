// Exercise: Write a function that takes an array of objects (each representing a person with name and age properties) and returns an array of names of people who are over 18.
function over18(arr) {
    let brr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].age >= 18) brr.push(arr[i]);
        else continue;
    }
    return brr;
}
let person1 =  {
    name: "Vishal",
    age: 21,
    occupation: "Student",
    Aspiration: "SDE"
}
let person2 =  {
    name: "Aniket",
    age: 12,
    occupation: "Student",
    Aspiration: "SDE"
}
let person3 =  {
    name: "Varun",
    age: 18,
    occupation: "Student",
    Aspiration: "Civil"
}
let person4 =  {
    name: "Shalu",
    age: 17,
    occupation: "Student",
    Aspiration: "SDE"
}

const arr = [person1, person2, person3, person4]
console.log(over18(arr));