"use strict";

let numberOfFilms;
let q1, q2;

let personalMovieDB = { //так выглядит объект в js
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
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


function start() {
    numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms.length == 0 || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", "");
    }
}

function rememberMyFilms() {
    for (let i = 1; i <= 2; i++) {

        do {
            q1 = prompt(`фильм под номером ${i}`, "");
        } while (q1 == null || q1.length == 0 || q1.length > 50);

        do {
            q2 = prompt(`на сколько оцените фильм под номером ${i}?`, "");
        } while (q2 == null || q2.length == 0 || q2.length > 50);

        personalMovieDB.movies[q1] = q2;
    }
}

function showMyDb(privat) {
    if (!privat) {
        return personalMovieDB;
    }
}

function writeYourGenres() {
    let answer;
    for (let i = 1; i < 4; i++) {
        answer = prompt(`ваш любимый жанр под номером ${i}`);
        if (answer == null || answer.length == 0) {
            i--;
            // console.log(i);
            // continue;
        } else {
            personalMovieDB.genres[i - 1] = answer;
            // console.log(i);
        }
    }
}

function determineLevelOfWatchingMovies() {
    if (personalMovieDB.count < 10) {
        console.log("просмотренно довольно мало фильмов");
        alert("просмотренно довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log("вы классический зритель");
        alert("вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("вы киноман");
        alert("вы киноман");
    } else {
        console.log("ошибка");
        alert("вы классический зритель");
    }
}

const obj1 = {
    name: "Dasha",
    age: 22,
    sex: "woman",
    job: false,
    obj2: {
        name2: "Misha",
        age: 20,
        sex: "man",
        job: true,
        obj3: {
            name3: "Natasha",
            age: 28,
            sex: "woman",
            job: true
        }
    }
};

// console.log(obj1.color);
// console.log(obj1["name"]);

function recurseF(obj){
    for(let key in obj){
        if(typeof(obj[key]) === "object"){
            recurseF(obj[key]);
        }else{
            console.log(`${key} : ${obj[key]}`);
        }
    }
}

// recurseF(obj1);

const {name, age, sex, job} = obj1["obj2"];

console.log(name, age, sex, job);
