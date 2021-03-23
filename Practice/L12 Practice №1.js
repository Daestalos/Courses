"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", ''),
    objActors = {},
    objMovies = {},
    dataEmpty = [],
    questionFilm = prompt("Один из просмотренный фильмов?", ''),
    questionRating = prompt("На сколько оцените его?", '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: objMovies,
    actors: objActors,
    genres: dataEmpty,
    privat: false
};
personalMovieDB.movies[questionFilm] = questionRating;
console.log(personalMovieDB);


// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt("Один из просмотренный фильмов?", ''),
//       b = prompt("На сколько оцените его?", ''),
//       c = prompt("Один из просмотренный фильмов?", ''),
//       d = prompt("На сколько оцените его?", '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);