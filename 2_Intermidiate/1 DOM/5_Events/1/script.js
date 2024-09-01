const links = document.querySelectorAll('a');

let a = links[2];

a.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Link was clicked');
});

// let create = document.createElement('div');
// for(let i = 0; i < 5; i++) {
//     let newEle = document.createElement('h3');
//     newEle.textContent = 'Link ' + i;

//     newEle.addEventListener('click', function(e) {
//         console.log('Link was clicked');
//     });
//     create.appendChild(newEle);
// }
// document.body.appendChild(create);

let create = document.createElement('div');

function paraStatus(event) {
    console.log("I Have Been Clicked", event.target.textContent);
    // console.log(event.target);
 }
 create.addEventListener('click', paraStatus);

for(let i = 0; i < 100; i++) {
    let newEle = document.createElement('h3');
    newEle.textContent = 'Link ' + i;
    create.appendChild(newEle);
}

document.body.appendChild(create);

