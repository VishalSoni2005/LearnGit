function one() {
    let name = "Vishal";

    function two() {
        let friend = "Aniket";
        console.log(name);      //INNER FUNCTION CAN ACCESSS THE OUTER VARIABLES
    }
    // console.log(friend);ṇ

    two();
}
one();