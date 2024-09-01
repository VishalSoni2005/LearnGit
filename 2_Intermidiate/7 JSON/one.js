let user = {
    "users" : [
        {
            "id": 1,
            "name": "Vishal",
            "age": 23,
            "city": "Delhi"
        },
        {
            "id": 2,
            "name": "Vijay",
            "age": 24,
            "city": "Chennai"
        },
        {
            "id": 3,
            "name": "Vikas",
            "age": 25,
            "city": "Mumbai"
        },
    ]
    // "getName": (user) => {
    //     return user.name;
    // }
}

const userJSON = JSON.parse(user);

console.log(userJSON);