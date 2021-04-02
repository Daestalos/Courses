"use strict";
 
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'), 
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'), // точка, чтобы получить все элементы
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// меняем свойство in-line стиля у определенного элемента
box.style.backgroundColor = 'blue'; // можно в формате Hex, RGB
box.style.width = '500px';

// обязательно указываем эллемент, т.к. иначе обращаемся к псевдомассиву
btns[1].style.borderRadius = '100%'; //обращаемся ко 2 кнопке
circles[0].style.backgroundColor = 'red';


let num = 200;
box.style.cssText = 'background-color: green; width: 500px';
box.style.cssText = `background-color: green; width: ${num}px`;


// перебор всех элементов
// цикл FOR
for (let i = 0; i < hearts.length; i++){
    hearts[i].style.backgroundColor = 'yellow';
}

// метод forEach
hearts.forEach(item => {
    item.style.backgroundColor = 'pink';
});

// основные методы для работы со страницей
// метод document create element
const div = document.createElement('div'); // сохраняет только внутри js файла
const text = document.createTextNode('Hellow wordl'); // используется редко

// работа с css классами
div.classList.add('black');

// appent вставляет в конец родителя
document.body.append(div); // современный метод, добавили на страницу элемент

// document.querySelector('.wrapper').append(div); // добавили в определенный div c классом wrapper
wrapper.append(div);
//wrapper.appendChild(div); // для более старых версий браузера

// вставляет в начало
//wrapper.prepend(div);

// before, after
//hearts[0].before(div); // вставляем перед элементом
//hearts[0].after(div); // после
//wrapper.insertBefore(div, hearts[2]); // вставляем перед

// удаление со страницы
//circles[1].remove();
//wrapper.removeChild(hearts[1]); // использовался раньше

// replacewith - заменить один элемент другим
// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); // использовалась раньше


// добавление html кода в элементы
//1)
// div.innerHTML = 'Hello World';
// когда предпологается работа с какой-то HTML-структурой
div.innerHTML = '<h1>Hello World</h1>';

//2) textcontent (работает только с текстом)
// когда мы четко знаем, что хотим получить от пользователя, либо записать на страницу только текст
// div.textContent = 'hello';

//3)  insertAdjacentHTML
// beforebegin - перед эллементом
// afterbegin - в начало нашего элемента
// beforeend - в конец элемента
// afterend - после нашего элемента
div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');