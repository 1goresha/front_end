// const vehicle = {
//     typeOfMoving: "wheel",
//     doors : 4,
//     color: "black",

//     aboutThisVehicle: function(){
//         console.log(this);
//     }
// };

// const sportCar = Object.create(vehicle);

// sportCar.doors = 2;
// sportCar.color = "red";

// vehicle.aboutThisVehicle();
// sportCar.aboutThisVehicle();

// let arr = [0, 1, 2, 3, 4];
// console.log(...arr);

// const obj1 = {
//     count: 1,
//     name: "obj1",
//     size: 3
// };

// const obj2 = Object.assign({}, obj1);
// console.log(obj2);

// const obj3 = {...obj1};
// console.log(obj3);

// const {count, name, size} = obj1;
// console.log(count, name, size);

const str = prompt("введите список продуктов", "");
const products = str.split(", ");
console.log(products.join("; "));
