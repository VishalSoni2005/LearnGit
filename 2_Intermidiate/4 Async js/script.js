console.log("First");

let myPromise = new Promise(function(resolve, rejected){
    setTimeout(function(event) {
        console.log("Vishal Soni at the top");
    }, 3000);
    resolve('it');
});

myPromise.then( (value) => console.log(value));

let newPromise = new Promise(function(resolve, rejected) {
    setTimeout( () => {
        console.log("Aniket Rejected ");  
    }, 5000);
    rejected(9987);
})
newPromise.catch( (value) => console.log(value))

console.log("Second");