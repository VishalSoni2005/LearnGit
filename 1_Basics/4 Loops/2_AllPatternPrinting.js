// Right-angled triangle
// Inverted right-angled triangle
// Square
// Diamond
// Pyramid
// Inverted Pyramid
function rightAngleTriangle(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for(let j = 0; j <= i; j++) {
            row += " * ";
        }
        console.log(row);
    }
}
function invertedTriangle(n) {
    for (let i = 0; i < n; i++) {   //for rows
        let row = '';
        for(let j = n; j > i; j--) {    //for columns
            row += " * ";
        }
        console.log(row);
    }
}
function square(n) {
    for(let i = 0; i<n; i++) {
        let row = ''
        for(let j = 0; j < n; j++) {
            row += " * "
        }
        console.log(row);
    }
}
function Diamond(n) {
    if(n % 2 == 0) n++;
    let mid = Math.floor(n / 2);
    for(let i=0; i<n; i++) {

        let space = Math.abs(mid  - i);
        let stars = 2 * (mid - Math.abs(mid - i)) + 1;

        let row = '';
        for(let j = 0; j<space; j++) row += ' ';
        for(let j = 0; j<stars; j++) row += '*';
        console.log(row);

    }
}
function Pyramid(n) {
    for(let i=0; i<n; i++ ){
        let stars = (2 * i) + 1 ;
        let spaces = (n) - i;
        let row = '';
        for(let j=0; j<spaces; j++) row += ' ';
        for(let j=0; j<stars; j++) row += '*';
        console.log(row);
    }
}
function InvertedPyramid(n) {
    for (let i = n - 1; i >= 0; i--) {
      let stars = 2 * i + 1;
      let spaces = n - i - 1;
      console.log(' '.repeat(spaces) + '*'.repeat(stars));
    }
}


let n = 3;
// rightAngleTriangle(n);
// invertedTriangle(n);
// square(n);
// Diamond(n);
// Pyramid(n);
InvertedPyramid(n);
