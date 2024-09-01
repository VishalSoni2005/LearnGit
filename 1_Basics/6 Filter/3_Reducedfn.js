
let myNum = [1, 2, 3, 4, 5, 6, 8];

let reduceUsage = myNum.reduce(function(acc, currVal) {
    // console.log(`acc : ${acc} and currVal : ${currVal}`)
    return currVal + acc ;
}, 0);

// console.log(reduceUsage);


//Arrow Function
reduceUsage = myNum.reduce( (acc, currVal) => acc + currVal , 0 );
console.log(reduceUsage);