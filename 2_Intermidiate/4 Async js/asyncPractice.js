// async function show() {
//     const ok = new Promise((resolve, reject) => {
//         setTimeout( () => {
//             console.log("Hello");
//             resolve("I Am Resolved");
//         }, 2000);
//     })

//     console.log(await ok);
// }
// show();

function show() {
    let promiseOne = new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log("Inside Promise");
            resolve("After");
        }, 2000);
    })
    return promiseOne;
}

async function showExecutionOfPromise() {
    console.log("Before ");
    const Execution = await show();
    console.log(Execution);
}

showExecutionOfPromise();