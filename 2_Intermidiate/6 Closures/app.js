// function outer() {
//     let name;
//     let age;

//     function inner() {
//         name = "Vishal Kumar Soni";
//         age = 22;

//         console.log(`My name is ${name} and my age is ${age}`);
//     }
//     return inner;
// }

// let func = outer();
// func();

function outer() {
    let name = "Vishal Kumar Soni";
    console.log(name);

    function middle() {
        let age = 22;
        console.log(age);

        function inner() {
            name = "Vishal Soni";
            age = 21;
            console.log(`My name is ${name} and my age is ${age}`);
        }
        // console.log(`My name is ${name} and my age is ${age}`);
        // return inner;
    }
    return middle.5;
}

let func = outer();
func();
