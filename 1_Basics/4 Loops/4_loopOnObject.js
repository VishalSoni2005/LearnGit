const myObject = {
    name: "Vishal Kumar Soni",
    age: 21,
    Address: "Pune",
}

// for (const key of myObject) {   //OBJECTS ARE NOT ITTERRATABLE WITH "for of LOOPS "
//     console.log(key);
// }

//OBJECTS ARE ITERATABLE WITH "FOR IN LOOPS";

// for (const key in myObject) {
//     console.log(key);   //all keys get printed;
// }

for (const key in myObject) {
    console.log(`${key} >>>> ${myObject[key]}`);
}






