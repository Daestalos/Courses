"use strict";

let numberOfFilms;

function start (){
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        // isNan проверяет введено ли число, если не число, то возвращает true
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

   // с циклом if
function rememberMyFilms() {
    
for (let i = 0; i < 2; i++)
{
    const a = prompt("Один из просмотренный фильмов?", ''),
          b = prompt("На сколько оцените его?", '');

    if (a != null && b != null && a!='' && b!= '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done.');
    } else {
        console.log('error');
        i--;
    }    
}
}
rememberMyFilms();

    // с циклом while
// for (let i = 0; i < 2; i++)
// {
//     const a = prompt("Один из просмотренный фильмов?", ''),
//           b = prompt("На сколько оцените его?", '');

//     while (a != null && b != null && a!='' && b!= '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         break;
//     }
// }


function detectPersonalLevel(){
    if (personalMovieDB.count <10){
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30 ){
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();


// function showMyDB () {
//     if (personalMovieDB.privat != true){
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();

// от Ивана
function showMyDB (hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


// function writeYourGenres (){
//     for (let i = 1; i <=3; i++) {   
//         const genresName = prompt('Ваш любимый жанр под номером ' + i + ':'); 
//         personalMovieDB.genres[i--] = [genresName];
//     }
// }
// writeYourGenres();


// от Ивана
function writeYourGenres() {
    for (let i = 1;  i<= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любивый жанр под номером ${i}`);
    }
}
writeYourGenres();
