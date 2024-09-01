//REST OPERATOR (...parameter) IS USED WHEN WE DONT KNOW HOW MUCH ARGUMENTS ARE ARE PASSED
function addCartPrice(...cost) {    //...cost is rest operator
    return cost;    //PROVIDE ALL ITEMS IN AAARY
}
let items = addCartPrice(34, 54, 77);
console.log(items);


