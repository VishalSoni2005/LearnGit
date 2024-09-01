let shoppingCart = [
    {
        itemName: "Towel",
        price: 399
    },
    {
        itemName: "glass",
        price: 60
    },
    {
        itemName: "bucket",
        price: 90
    },
    {
        itemName: "basketBall",
        price: 500
    },
    {
        itemName: "shirt",
        price: 700
    },
]

const PriceOfItems = shoppingCart.reduce( (acc, currItem) => acc + currItem.price, 0 );

console.log(PriceOfItems);