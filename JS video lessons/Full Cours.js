// https://www.youtube.com/watch?v=Bluxbh9CaQ0
// https://github.com/vladilenm/javascript-2020


// <<<<<<<<<<<<<<<basic>>>>>>>>>>>>>>>>>>>>>>>>>
// 1 переменные

// camelCase

const firstName = "Sasha";
const age = 21 // number
const isProgrammer = true; //bollean

const _ = 'private';
const $ = 'some value';

// conse if = 'mkef' // err
const withNum5 = '5';
// const 5withNum = 5 // err

// 2 мутирование
console.log('Имя человека: ' + firstName + ', a возраст человека:' + age);
alert ('Имя человека: ' + firstName + ', а возраст: ' + age);

const lastName = prompt('Введите фамилию');
alert(firstName + '' + lastName);

// 3 операторы

let currentYear = 2021;
const birthYear = 2000;

const age1 = currentYear - birthYear;
console.log(age1);

const a = 10;
const b = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(currentYear++); //2021
console.log(currentYear); //2022
console.log(++currentYear); // 2023
console.log(--currentYear); // 2022

let c = 32;
c += a; // -=,*=,/=
console.log(c); //42


//4 Типы данных

// number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
// bigint для целых чисел произвольной длины.
// string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
// boolean для true/false.
// null для неизвестных значений – отдельный тип, имеющий одно значение null.
// undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
// object для более сложных структур данных.
// symbol для уникальных идентификаторов.

const Name = "Sasha"; //string
const agee = 21;// number
const isP = true; //bollean
let x; // undefined
let p = ( 1 / 0 ); // Infinity
let ageee = null; // null «ничего», «пусто» или «значение неизвестно».
 //
console.log(typeof(ageee));


//5 Приоритет операторов

const fullAge = 21;
const birth = 2000;
const currenty = 2021;

// операторы сравнения > < >= <=

const isFullAge = currenty - birth >= fullAge;
console.log(isFullAge); // true

//6 условные операторы

const courseStatus = 'pending'; // ready, fail, pending
if (courseStatus === 'Ready'){
    console.log('Готов');
} else if (courseStatus === 'pending'){
    console.log('в разработке');
}

const isReady = true;

if (isReady){ // сразу проверка на true
    console.log('готово');
} else if(!isReady){
    console.log('не готово');
}
// тернарный
isReady ? console.log('готово') :  console.log('не готово');


//7 булевая логика
// && - и - оба должны быть true, либо вернет всегда false     
//  || - или - если хотя бы 1 true - true

let a1 = 'cat' && 'dog' && 'gav'; // вернет последнее
console.log(a1);

// 8 функции
function calc(year){
    return 2021 - year;
}

console.log(calc(2020)); //1


function aboutPeople (name, year) {
    const age2 = calc(year);
    
    console.log('имя ' + name + ' возраст ' + age2);
}

aboutPeople('Саша', 2000);

// 9 массивы

const cars = ['мазда', 'мерседес', 'форд'];
console.log(cars[2]);
console.log(cars.length);
cars[0] = 'порш';
console.log(cars[0]);

// 10 циклы
const carss = ['мазда', 'мерседес', 'форд'];

for (let i = 0; i<carss.length; i++){
    console.log(carss[i]);
}

for (let car of carss){
    console.log(carss);
}

// 11 объекты
const person = {
    firstName: 'Sasha',
    lastName: 'Min',
    year: 2001,
    lang: ['ru', 'en', 'de', 'pl'],
    hasWife: true,
    greet: function(){
        console.log('greet from person');
        console.log(person);
    }
};

console.log(person);
console.log(person.firstName);
console.log(person['firstName']); // тоже самое, что и верхняя строчка
const key = 'lang';
console.log(person[key]);
person.hasWife = false;
person.isProgrammer = true;
person.greet();



// <<<<<<<<<<<Числа+Bigint>>>>>>>>>>>>>

const num = 42; // int
const float = 42.42; //float
const pow = 10e3; // = 10000, в 3 степени
console.log(pow);