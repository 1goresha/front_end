"use strict"; 

let numberOfFilms; 
let q1, q2; 

let personalMovieDB = { //так выглядит объект в js 
    count: numberOfFilms, 
    movies: {}, 
    actors: {}, 
    genres: [], 
    privat: false, 
    
    start: function() { 
        numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", ""); 
        while (numberOfFilms.length == 0 || numberOfFilms == null || isNaN(numberOfFilms)) { 
            numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", ""); 
        } 
    },

    rememberMyFilms: function() { 
        for (let i = 1; i <= 2; i++) { 
            do { 
                q1 = prompt(`фильм под номером ${i}`, ""); 
            } while (q1 == null || q1.length == 0 || q1.length > 50); 
            do { 
                q2 = prompt(`на сколько оцените фильм под номером ${i}?`, ""); 
            } while (q2 == null || q2.length == 0 || q2.length > 50); 
            personalMovieDB.movies[q1] = q2; 
        } 
    },

    showMyDb: function(privat) { 
        if (!privat) { 
            return personalMovieDB; 
        } 
    },

    writeYourGenres: function() { 
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
    },

    determineLevelOfWatchingMovies: function() { 
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
}; 
 