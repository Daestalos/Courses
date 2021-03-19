"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?"),
    objMovies = {},
    objActors = {},
    dataEmpty = [],
    questionFilm = prompt("Один из просмотренный фильмов?");
    question

let personalMovieDB = {
    count: numberOfFilms,
    movies: objMovies,
    actors: objActors,
    genres: dataEmpty,
    privat: false
};

