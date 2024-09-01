console.log(one(5));    // 6
function one(num){
    return num + 1;
}
let two = function(num) {   // this is called expression and we can access this after declaration only
    return num + 2;
}
console.log(two(5));