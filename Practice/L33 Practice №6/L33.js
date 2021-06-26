// от Ивана
// 'use strict';

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против великанов"
//     ]
// };

// const adv = document.querySelectorAll('.promo__adv img'),
//       poster = document.querySelector('.promo__bg'),
//       genre = poster.querySelector('.promo__genre'),
//       movieList = document.querySelector('.promo__interactive-list'),
//       dataInput = document.querySelector('.adding__input')[0].value,
//       addDataInput = document.querySelector('.');


// adv.forEach(item => {
//     item.remove();
// });

// genre.textContent = 'драма';
// poster.style.backgroundImage = 'url("img/bg.jpg")';
// movieList.innerHTML = "";

// movieDB.movies.sort();
// movieDB.movies.forEach((film, i) => {
//     if (film.length > 21) {
//          film = film.substr(0, 21) + '...';
//     }
//     movieList.innerHTML += `
//         <li class="promo__interactive-item">${i + 1} ${film}
//             <div class="delete"></div>
//         </li>
//     `;
// });