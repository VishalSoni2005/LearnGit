const myObject = {
    name: "vishal kumar",
    age: 24,
    college: "IIIT Pune",

    getName: function () {
        console.log(`Name container in this object is ==> ${this.name}`);
        return "Vishal";
    },
    getThis: function () {
        console.log(this);
    }
}

console.log(myObject.getName());
console.log(this);
