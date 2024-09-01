const myId = {  //SOMETHING INSIDE CURLY BRACICS IS OBJECT
    name: "vishal",
    age : 21, 
    address : "Pune",
    homeTown : "Patna"
}

// console.table(myId);

//  STACK MEMORY (PRIMITIVE DATATYPE -> STRING, NULL, OBJECT, BIGINT, NUMBER, BOOL, UNDEF)
//  HEAP MEMORY (NON-PRIMITIVE DATA TYPE) -> ARRAY

let youId = myId;
youId.name = "Prachi";
youId.age = 19;
youId.homeTown = "Pune"

console.table(myId)
console.table(youId)