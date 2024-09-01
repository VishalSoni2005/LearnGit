// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let dataOne = await content.json();
//     // let dataTwo =  content.text();
//     // let dataThree = await content.id();
//     // console.log(dataOne);
//     // console.log(dataTwo);
//     // console.log(dataThree);

//     console.log(content.ok);
//     console.log(content.url);
//     console.log(content.text());
//     console.log(dataOne);


//     // console.log(content.status);
//     // console.log(content.statusText);
//     // console.log(content.type);
// }
// utility();

// POST API CALL

async function postAPICall() {
    let option ={
        method: 'POST',
        body: JSON.stringify({
        title: 'Vishal Kumar Soni',
        body: 'Healthy',
        userId: 69,
    }) ,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  let content = await fetch('https://jsonplaceholder.typicode.com/posts', option);
  let response = content.json();
  return response;
}

async function getAPICall() {
    let ans = await postAPICall();
    console.log(ans);
}

getAPICall();