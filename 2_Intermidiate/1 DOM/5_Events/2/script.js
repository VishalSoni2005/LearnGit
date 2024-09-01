// first solving for circle
const circle = document.querySelectorAll('.circle');

function changeColor(event) {
    event.target.style.backgroundColor = event.target.id;
    document.body.style.backgroundColor = event.target.id;
    console.log("Background Color : " + event.target.id);
}

circle.forEach(function(event) {
    event.addEventListener('click', changeColor);
});

// solving for square
const square = document.querySelectorAll('.sq');

function blurr(event) {
    console.log("Welcome to : " + event.target.innerHTML);
};

square.forEach(function (e){
    e.addEventListener('dblclick', blurr);
}) ;

// adding hover effect to circle

circle.forEach(function(e) {
    e.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = event.target.id;
    })
    e.addEventListener('mouseseout', function(event) {
        event.target.style.backgroundColor = 'goldenrod';
    })
})