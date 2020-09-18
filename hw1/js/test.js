const vehicle = {
    typeOfMoving: "wheel",
    doors : 4,
    color: "black",

    aboutThisVehicle: function(){
        console.log(this);
    }
};

const sportCar = Object.create(vehicle);

sportCar.doors = 2;
sportCar.color = "red";

vehicle.aboutThisVehicle();
sportCar.aboutThisVehicle();
