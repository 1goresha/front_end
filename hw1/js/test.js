const vehicle = {
    typeOfMoving: "wheel",
    doors : 4,
    color: "black",

    aboutThisVehicle: function(){
        console.log(this);
    }
};

const sportCar = Object.prototype(vehicle);

sportCar.doors = 2;
sportCar.color = "red";

vehicle.aboutThisVehicle();
sportCar.aboutThisVehicle();