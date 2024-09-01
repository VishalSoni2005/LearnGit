const myList = ["Lakshmi", "Prachi", "Teja", "Aditi", "sejal"]

    // SLICE -> ARRAY IS SAFE
console.log(myList.slice(0,2));
console.log(myList);

    // SPLICE ->ARRAY GETS TRIMED
const list2 = myList.splice(0,2)
console.log(list2);
console.log(myList);
