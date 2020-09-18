"use strict";

const numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", "");
let q1, q2;

let personalMovieDB = {//так выглядит объект в js
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

// let q1 = prompt("один из послединих просмотренных фильмов?", "");
// let q2 = +prompt("на сколько оцените его?", "");
// let q3 = prompt("один из послединих просмотренных фильмов?", "");
// let q4 = +prompt("на сколько оцените его?", "");



// personalMovieDB.movies[q1] = q2;
// personalMovieDB.movies[q3] = q4;

// console.log(personalMovieDB);

// let a = 0;
// console.log(a++);
// console.log(a);

// let b = 10;
// while (b !== 0) {
//     b--;
//     if (b % 2 == 0) {
//         continue;
//     }
//     console.log(b);
// }

// switch (b) {
//     case 3:
//         console.log("3");
//         break;
//     case 6:
//         console.log("6");
//         break;
//     case 10:
//         console.log("10");
//         break;
//     default:
//         break;
// }


// for (let i = 1; i <= numberOfFilms; i++) {
    
//     do{
//         q1 = prompt(`фильм под номером ${i}`,"");
//     }while(q1 == null || q1.length == 0 || q1.length > 50);
    
//     do{
//         q2 = prompt(`на сколько оцените фильм под номером ${i}?`,"");
//     }while(q2 == null || q2.length == 0 || q2.length > 50);

//     personalMovieDB.movies[q1] = q2;
// }

// if (personalMovieDB.count < 10) {
//     console.log("просмотренно довольно мало фильмов");
//     alert("просмотренно довольно мало фильмов");
// }else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
//     console.log("вы классический зритель");
//     alert("вы классический зритель");
// }else if(personalMovieDB.count > 30){
//     console.log("вы киноман");
//     alert("вы киноман");
// }else{
//     console.log("ошибка");
//     alert("вы классический зритель");
// }

function f(someString){
    console.log(someString);
}

f("HELLOOOOOOOOOOOOOOO");

let ff = function(someString2){
    console.log(someString2);
};

ff("hellooooooooooooooooooooo");

let fff = s => console.log(s);

fff("hello");

const arr = [];

function onDoSomething(message, callback){
    console.log(message);
    callback();
}

onDoSomething("do something", function(){
    console.log("and do something else");
});


const obj1 = {
    a: 10,
    b: 20,
    c: 30
};

// const obj2 = {
//     d: 40,
//     e: 50,
//     f: 60
// };

function copyObj(obj){
    let newObj = {};
    for(let key in obj){
        newObj[key] = obj[key];
        // console.log(`${newObj[key]} = ${obj[key]}`);
        console.log(newObj[key] + " = " + obj[key]);
    }
    return newObj;
}

// function logObh(obj){
//     for(let key in obj){
//         console.log(obj[key]);
//     }
// }

// logObh(obj1);
console.log(copyObj(obj1));
