'use strict';
// справочники по событиям
// https://oddler.ru/blog/i63
// https://developer.mozilla.org/ru/docs/Web/Events

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// такой вариант не используется в реальных проектах
// при назначении другого метода, он заменит данный
// не использовать данный метод.
btn.onclick = function(){
    alert('Click');
};

//правильный обработчик событий:
// первым аргументом передаем название, вторым callback функцию
btn.addEventListener('click', () =>{
    alert('Click');
}); 
// с данным обработчиком событий мы можем использовать неисколько обработчиков
// Они не будут друг друга заменять, а выполнятся поочередно
// btn.addEventListener('click', () =>{
//     alert('Second click');
// }); 



/////////!!!!!!!!!!!!!\\\\\\\\\
// addEventListener
// выполняется каждый раз при наведении мышки на элемент
// если нам в callback функцию нужно передать еще какие-то аргументы (текстовые данные или просто данные)
// то в скобках указываем объект события и аргумент со своими данными
// (e (или event), (например text))
btn.addEventListener('mouseenter', () =>{
    console.log('hover'); // это событие передается как аргумент в callback функцию
}); 

btn.addEventListener('mouseenter', (e) =>{
   console.log(e.target);
   e.target.remove(); // при наведении удалили элемент со страницы
}); 

// другой вариант, более удобный
const deleteElement = (e) => {
    e.target.remove();
};

btn.addEventListener('click', deleteElement);


///!!!!!!!!!!!!!\\\
/// removeEventListener
let i = 0;
const Elementview = (e) => {
    console.log(e.target);
    i++;
    if (i == 1) {
        btn.removeEventListener('click', Elementview); // удаляем обработчик
    }
};

btn.addEventListener('click', Elementview); // назначаем обработчик




// current target
const View = (e) => {
    console.log(e.target);
    console.log(e.type);
};

btn.addEventListener('click', View); // назначаем обработчик
overlay.addEventListener('click', View);

