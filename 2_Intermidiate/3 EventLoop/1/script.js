// Adding 100 paragraphs to body
// let t1 = performance.now();
// for(let i=0; i<100; i++){
//     let newElemet = document.createElement('p');
//     newElemet.innerHTML = "This is " + i +"th paragraph";

//     document.body.appendChild(newElemet);
// }

// let t2 = performance.now();
// console.log("Time elapsed: " + (t2-t1) + "ms");


// optimising code litle bit

// let t1 = performance.now();

// let myDiv = document.createElement('div');
// for(let i=0; i<100; i++){
//     let newEle = document.createElement('p');
//     newEle.innerHTML = "This is " + i +"th paragraph";
//     myDiv.appendChild(newEle);
// }
// document.body.appendChild(myDiv);

// let t2 = performance.now();
// console.log("Time elapsed: " + (t2-t1) + "ms");

// optimised code
let fragement = document.createDocumentFragment()
for(let i=0; i<100; i++){
    let newElemet = document.createElement('p');
    newElemet.innerHTML = "This is " + i +"th paragraph";

    fragement.appendChild(newElemet);
}
document.body.appendChild(fragement);


setTimeout(() => {
    alert("I am Watching you");
    alert("Dont be oversmart, you cant watch me");
}, 8000);