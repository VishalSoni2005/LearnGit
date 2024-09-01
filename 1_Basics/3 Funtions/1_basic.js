function addTwoNumber(num1, num2) {
    return num1 + num2;
}

let a = addTwoNumber(6, '4')
// console.log(a)


function userLoggedIn(username = "Me") {
    if(!username) {
        console.log("Please Enter Your Name");
    }
    return `${username} Just Joined us `;
}
console.log(userLoggedIn())