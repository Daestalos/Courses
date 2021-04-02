"use strict";
 


const box = document.getElementById('box');
// берем id="box" из HTML
console.log(box); // = <div class="box" id="box"></div>

// Поиск по тегам
const btns = getElementsByTagName('Button');
console.log(btns); // получаем HTMLCollection (массив без методов и свойств), ничего более

const btnss = getElementsByTagName('Button')[1]; // получаем 2 кнопку.
console.log(btns[1]);
// В случае, если на странице всего одна кнопка, а мы пытаемся получить 2,
// то мы все-равно получим HTMLCollection, содержащую эту одну кнопку
// мы не сможем обратиться к массиву и изменить что-то в кнопке.

// поиск по классам
const circles = document.getElementsByClassName('circle');
console.log(circles); // получаем HTMLCollection с [div.circle, div.circle, div.circle]

// новые методы
// https://learn.javascript.ru/css-selectors
// внутрь скобок помещаем css selector (обязательно ставить . при указании класса)
const hearts = document.querySelectorAll('.heart');
// у querySelectorAll есть метод ForEach, но все-равно это будет псевдомассив
console.log(hearts); //= NodeList(3) [div.heart, div.heart, div.heart]
// метод forEach позволяет работать с множеством элементов, которые будут на странице
hearts.forEach(item =>{
    console.log(item); // =
    // = <div class="heart"></div>
    // = <div class="heart"></div>
    // = <div class="heart"></div>
    
});

// метод querySelector позволяет получить только один элемент со страницы
// при чем первый попавшийся элемент под данный css selector
const oneHeart = document.querySelector('.heart');
console.log(oneHeart); // = <div class="heart"></div>

