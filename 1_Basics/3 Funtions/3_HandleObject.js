function items(userItems) {
    console.log(`First item is ${userItems.item1} And Other items are ${userItems.item2} and ${userItems.item3}`);
    return -1;
}
let myObj = {
    item1: "Shirt",
    item2: "Laptop",
    item3: "Mouse"
}
let me = items(myObj)
console.log(me);
