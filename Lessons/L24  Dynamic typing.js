"use strict";

// too String
// 1)
console.log(typeof(String(null))); // =string, String превратила null в строку (обернула в ковычки)
console.log(typeof(String(4))); // = string

// 2) Конкатинация
console.log(typeof(5 + '')); // = string

const num = 5;
console.log('https://vk.com/catalog/' + num); // устаревший вариант 

const fontSize = 26 + 'px';


// to Number
// 1)
console.log(typeof(Number('4'))); // = number

// 2) унарный плюс

console.log(typeof(+'5')); // = number

let answ = +prompt('Введите число', ''); // превратится в числовой тип

// 3)

console.log(typeof(parseInt('15px', 10))); //=number


// to Boolean

// 0, ''(без пробела внутри, тогда это уже не пустота), null, undefiend, NaN - всегда false
// в остальном все true

// 1)
let switcher = null ;
if (switcher){ // условие не выполнится, т.к. switcher = false
    console.log('working...')
}

switcher = 1;

if (switcher){ // теперь сработает, т.к. switcher = true
    console.log('working...')
}

// 2)

console.log(typeof(Boolean('4'))); // = boollean

// 3) 

console.log(typeof(!!"444444")); // два знака отрицания превратили строку в boolean