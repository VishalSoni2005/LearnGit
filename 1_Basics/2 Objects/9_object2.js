const myPc = {}
myPc.company = "HP";
myPc.old = "2 years";
myPc.ram = 6
myPc.screen = 15.6

console.log(myPc)

    //MERGING TWO OBJECTS
let obj1 = {1: 'q', 2: 'r'}
let obj2 = {3: 'm', 4: 'n'}

// let obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// EASY METHOD 
let obj3 = {...obj1, ...obj2}; // ...OPERATIONS ARE USED TO MERGE TWO OBJECTS
console.log(obj3);
