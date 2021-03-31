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
            // personalMovieDB.count можно заменить this, т.к. в данном случае this будет обращаться к родителю
            // т.е к объекту personalMovieDB и получится запись (personalMovieDB.count)
            // p.s this = personalMovieDB, т.к. при вызове функции мы в начале указали объект, иначе было бы undefiend
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
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    
        // toggleVisibleMyDB: function(hidden){
        // if (!hidden){
        //     personalMovieDB.privat = true;
        // } else {
        //     personalMovieDB.privat = false;
        // }
        // }
        
    },
    showMyDB: function(hidden){
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for (let i = 1;  i<= 3; i++) {
            if (personalMovieDB.genres[i] == ''|| personalMovieDB.genres[i] == null){
            personalMovieDB.genres[i-1] = prompt(`Ваш любивый жанр под номером ${i}`);
            }
        }

                    // Альтернативный вариант из урока
            // for (let i = 1;  i<2; i++){
            // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            // if (genres === '' || genres == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     personalMovieDB.genres = genres.split(', ');
            //     personalMovieDB.genres.sort();
            // } 
            //}

        personalMovieDB.genres.forEach(function(item, j){
            console.dir(`Любимый жанр #${j+1} - это ${item}`);
        });
    }
};



personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();




