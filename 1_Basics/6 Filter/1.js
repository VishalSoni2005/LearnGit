
let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let subNums = myNums.filter( (num) => num > 4 )

console.log(subNums);

let newSubNum = myNums.filter( (i) => { // SCOPE GETS DEFINED , IMPLICIT FUNCTION
    return i > 4;                       // RETURN KEY IS IMP WHEN SCOPE IS DEFINED
} )

console.log(newSubNum);

let store = []

myNums.forEach((num) => {
    if(num > 4) store.push(num);    // storing in new array
})
console.log(store );

