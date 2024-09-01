async function funOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Hello, I am Rejected");
        }, 2000);
    })
}

async function funTwo() {
    console.log(await funOne());
    console.log("I am funTwo"); // this line wont be executed as the promise is rejected
}
funTwo();