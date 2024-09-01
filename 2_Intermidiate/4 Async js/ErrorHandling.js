function funOne() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
           reject('Error Occured');
        }, 2000);
    });
    return promise;
}
function funTwo() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve('Success');
        }, 2000);
    });
    return promise;
}

async function main() {
    try {
        const operation = await funTwo();
        console.log(operation);
    }
    catch (error) {
        // Handle errors here
        console.error("An error occurred:", error);  // This runs if the promise is rejected
    }
}
main();
    