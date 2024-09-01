function myCar(model, brand, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.enginSpecification = function(){
        engine = "4 strok ci engine";
        console.log(`${engine} of ${this.year} ${this.brand} ${this.model} has started`);
    };
    this.displayInfo = function() {
        console.log(`Info of Your car Sir -> ${this.brand} , ${this.model}`);
    }
}

let one = new myCar("Thar", "Mahendra", 2022);
console.log(one);
one.enginSpecification();
let two = new myCar("Carolla", "Toyota", 2021)
two.displayInfo();