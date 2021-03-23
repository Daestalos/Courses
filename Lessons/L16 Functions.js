"use strict";

// FUNCTION DECLARATION
function foo(){
    // код
}
// FUNCTION EXPRESSION
let fooo = function(){
    // код
};
// СТРЕЛОЧНАЯ ФУНКЦИЯ 
 //    () =>

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\\
///// FUNCTION DECLARATION

// в круглые скобки передается аргумент функции, их может быть несколько.
function showFirstMessage (text) { 
    console.log(text);
}
// имя должно быть глаголом с припиской того над чем выполн. действие
showFirstMessage('Hello World!');


// переменная внутри функции снаружи недоступна.
function showFirstMessage (text) { 
    console.log(text);
    let num = 20; // локальная переменная
}
showFirstMessage('Hello World!');
console.log(num); // ошибка

//**\\

let num = 20; // глобальная переменная

function showFirstMessage (text) { 
    console.log(text);
    num = 10; // функция может использовать глоб пер. внутри себя
}
showFirstMessage('Hello World!');
console.log(num); // выведет 10


//**\\ 

let num1 = 20; // глобальная переменная

function showFirstMessage (text) { 
    console.log(text);
    let num1 = 10; // в данном случае это уже локальная переменная
}
showFirstMessage('Hello World!');
console.log(num1); // выведет 20, ибо обращается к глобальной переменной
// локальная пеменная существует только внутри функции.

//*\\
// замыкание функций.

let numm = 20; 

function showFirstMessage (text) { 
    console.log(text);
    let numm = 10; 
    console.log(numm); // 10, использует локальную
}
showFirstMessage('Hello World!');
console.log(numm); // 20


let numm1 = 20; 

function showFirstMessage (text) { 
    console.log(text);
    console.log(numm1); // 20, использует глобальную пер.
}
showFirstMessage('Hello World!');
console.log(numm1); // 20


//*\\

function cacl(a, b) {
    return (a+b); //return позволяет вернуть 
   // console.log ('dwed'); //не можем получить,
   // return останавливает функцию.
}

console.log (cacl(4, 3));
console.log (cacl(5, 6));
console.log (cacl(10, 6));


function ret() {
    let numt = 50;
    return numt; // передает во "внешний мир"
}

const anotherNum = ret();
console.log(anotherNum); // 50


// Функция работает еще до того, как она была объявлена!!!!!
console.log (cacl1(4, 3));
console.log (cacl1(5, 6));
console.log (cacl1(10, 6));

function cacl1(a, b) {
    return (a+b); 
  
}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\\
///// FUNCTION EXPRESSION

// она создается только тогда, когда до нее доходит поток кода
// можно вызвать только после объявления.
const logger = function() {
    console.log('hello!');
};
logger();

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\\
///// Стрелочная функция

// функция не имеет контекста вызова

const calcc = (a, b) => a+b;
// создаем переменную, в которую помещаем функцию
// если функция в одну строчку, можно не писать скобки и return
// а писать как выше
const calccc = (a, b) => { return a + b} ;

const calcd = a => a^2;

// если функция разрастается, то ставим фигурные скобки

const calct = (a, b) => {
    console.log('1');
    return a + b;
};