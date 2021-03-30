"use strict";




const personalMovieDB = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            // isNan проверяет введено ли число, если не число, то возвращает true
            personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },
    rememberMyFilms: function(){
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
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count <10){
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30 ){
            alert('Вы классический зритель');
        } else if (personalMovieDB.count>30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function(hidden){
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for (let i = 1;  i<= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любивый жанр под номером ${i}`);
        }
    }
};



personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();



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





// function showMyDB () {
//     if (personalMovieDB.privat != true){
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();




// function writeYourGenres (){
//     for (let i = 1; i <=3; i++) {   
//         const genresName = prompt('Ваш любивый жанр под номером ' + i + ':'); 
//         personalMovieDB.genres[i--] = [genresName];
//     }
// }
// writeYourGenres();



