
// let promise1 = new Promise( function (resolve, reject) {
//     setTimeout(() => {
//         console.log("First Promise Executed ");
//     }, 3000);
//     reject( () => {
//         console.log("Promise one returned object");
//     });
// });

// promise1.then( (value) => console.log(value))

// promise1.then( () => {
//     let promise2 = new Promise((resolve, reject) => {
//         setTimeout( ()=> {
//             console.log("Second Promise Executed  ");
//         }, 6000);
//         resolve("Second resolved ");
//     })
// }).then( () => {
//     let promise3 = new Promise((resolve, reject) => {
//         setTimeout( () => {
//             console.log("Third Promise Executed ");
//         }, 9000)
//         resolve("Third Resolved ");
//     })
// });

async function show() {
    let promiseOne = new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("Promise Fully Executed ");
        }, 2000);
        resolve(404);
    });
    console.log(await promiseOne);
}

show();

