let mp = new Map();
mp.set("IN", "INDIA");
mp.set("UK", "UNITED KINGDOM");
mp.set("USA", "UNITED STATES OF AMERICA");
mp.set("FR", "FRANCE");

for (const key of mp) {     //PROVIDE ALL KEY AND VALUE PAIR AS ARRAY
    console.log(key);
}
console.log("---");

for(let [key] of mp) {      //HERE ONLY KEY GET PRINTED;
    console.log(key);
}
console.log("---");
for(let [key, VALUE] of mp) {      //HERE ONLY value GET PRINTED;
    console.log(VALUE);
}
console.log("---");
for(let [key, VALUE] of mp) {      //HERE BOTH KEY AND  value GET PRINTED;
    console.log(key, ">>>", VALUE);
}
console.log("---");

 