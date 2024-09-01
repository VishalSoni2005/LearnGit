myCar = {
    brand: "Mahendra",
    model: "Thar",
    year: 2020,

    enginSpecification: function(){
        engine = "4 strok ci engine";
        console.log(`${engine} of ${this.year} ${this.brand} ${this.model} has started`);
    },
    displayInfo: function() {
        console.log(`Info of Your car Sir -> ${this.engine} , ${this.model}`);//we cant access engine
    }
}
let a = myCar;
a.enginSpecification();
a.displayInfo();