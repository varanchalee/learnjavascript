// this objects myCar
var myCar = {
    brand: "toyota",
    model: "01",
    price: "3M"
};
console.log(myCar.brand);

// Objects and Methode
// Methode is function when use in objects
var persion ={
    firstName: "Miss",
    lastName: "Peregrin",
    Age: 21,
    fullName:
        function(){
            return this.firstName + " " + this.lastName;
    }
};
// when access function don't forget ()
// Otherwise  it will return function defination: 
// like this function() { return this.firstName + " " + this.lastName; }
console.log(persion.fullName());