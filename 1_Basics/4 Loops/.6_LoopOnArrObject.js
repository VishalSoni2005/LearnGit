
const coding = [
    {
        language: "javaScript",
        extension: ".js"
    },
    {
        language: "java",
        extension: ".java"
    },
    {
        language: "c++",
        extension: ".cpp"
    },
    {
        language: "python",
        extension: ".py"
    }
]
console.log("////////////////////////////////////////////");

coding.forEach( (i) => {
    console.log(`${i.language} >>> extension is >>> ${i.extension}`);
} )

console.log("////////////////////////////////////////////");

coding.forEach( (i) => {
    console.log(i); //print all array objects in sequence form
} )

console.log("////////////////////////////////////////////");


