async function fetchData () {

    const url = 'https://jsonplaceholder.typicode.com/posts';
    let option = {
        method: 'POST',
        body: JSON.stringify({
        title: 'Vishal Kumar Soni',
        body: 'Healthy',
        id: 2,
        userId: 69,
        }),
        headers: {
      'Content-type': 'application/json; charset=UTF-8',
        },
    };

    try {
        let response = await fetch(url, option);
        if(!response.ok) {
            throw new Error("Error Occured |", response.statusText);
        }
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log("Error Occured", error);
    }
}

fetchData();