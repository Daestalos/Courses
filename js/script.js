/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "А-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// const div = document.getElementsByClassName('promo__adv')[0].remove(),
//       promoGenre = document.getElementsByClassName('promo__genre')[0].innerHTML = 'ДРАМА',
//       bg = document.getElementsByClassName('promo__bg')[0].style.cssText = 'background: url("../img/bg.jpg")',
//       liMovieDB = document.querySelectorAll('.promo__interactive-item');  

     

// for (let i = 0; i <= movieDB.movies.length; i++){
//     movieDB.movies.sort();
//     liMovieDB[i].innerHTML = `${i+1}: ${movieDB.movies[i]}`;
// }



const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item =>{
item.remove();
});
// в другом виде
// adv.forEach(function (item){
//     item.remove();
//     });

genre.textContent = 'Драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = '';

movieDB.movies.sort();


movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += ` 
    <li class="promo__interactive-item">${i+1}: ${film}
        <div class="delete"></div>
    </li>
    `;
});