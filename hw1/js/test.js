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


let arr = [30, 15, 20, 9, 22];
arr.sort(function(a, b){
    return a - b;
});
// console.log(arr);

arr.forEach((item, i, arr) => {
    console.log(`${i} : ${item} в массиве ${arr}`);
});

let a = 5;
let b = a;
a++;
console.log(b);
console.log(a);

let strA = "strA";
let strB = strA;

strA += "000";
console.log(strA);
console.log(strB);

const obj1 = {
    a: 10,
    b: 20,
    c:30
};

const obj2 = {
    d:40,
    e:50,
    f:60
};

const obj3 = Object.assign(obj1, obj2);
console.log(obj3);


const obj4 = Object.assign({}, obj2);
console.log(obj4);

function logArgs(a, b, c, d){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

const args = [1, 2, 1024, 768];

logArgs(...args);

console.log(typeof(1 && 2));