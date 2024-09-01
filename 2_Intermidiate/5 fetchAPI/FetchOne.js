// MAKING A SIMPLE GET REQUEST

const url = 'https://jsonplaceholder.typicode.com/posts';

let option ={
    method: 'POST',
    body: JSON.stringify({
    title: 'Vishal Kumar Soni',
    body: 'Healthy',
    id: 2,
    userId: 69,
}) ,
headers: {
  'Content-type': 'application/json; charset=UTF-8',
},
};

fetch(url, option)
.then( Response => {
    if (!Response.ok) {
        throw new Error('Network response was not ok ' + Response.statusText);
      }
      return Response.json();
})
.then ( data => console.log(data))
.catch( error => console.log("Error is : ", error));

// console.log(a.promiseResult.body());
// console.log(a);
