// https://www.youtube.com/watch?v=Bluxbh9CaQ0
// https://github.com/vladilenm/javascript-2020
"use strict";

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

// 1 Number
const num = 42 // integer
const float = 42.42 // float
const pow = 10e3

console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
console.log('Math.pow 53', Math.pow(2, 53) - 1)
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
console.log('2 / 0', 2 / 0)
console.log(Number.NaN) // Not A Number
console.log(typeof NaN)
const weird = 2 / undefined
console.log(Number.isNaN(weird))
console.log(Number.isNaN(42))
console.log(Number.isFinite(Infinity))
console.log(Number.isFinite(42))

const stringInt = '40'
const stringFloat = '40.42'
console.log(Number.parseInt(stringInt) + 2)
console.log(parseInt(stringInt) + 2)
console.log(Number(stringInt) + 2)
console.log(+stringInt + 2)
console.log(parseFloat(stringFloat) + 2)
console.log(+stringFloat + 2)

console.log(0.4 + 0.2) // 0.6
console.log(+(0.4 + 0.2).toFixed(1))
console.log(parseFloat((0.4 + 0.2).toFixed(1))) // toFixed - количество знаков после запятой

// 2 BigInt
console.log(90071992547409919999999n - 9007199254740991999999n)
console.log(-90071992547409919999999n)
console.log(90071992547409919999999.23231n) // error

console.log(10n - 4) // error
console.log(parseInt(10n) - 4)
console.log(10n - BigInt(4))
console.log(5n / 2n) // 2n

// 3 Math
console.log(Math.E)
console.log(Math.PI)

console.log(Math.sqrt(25))
console.log(Math.pow(5, 3))
console.log(Math.abs(-42))
console.log(Math.max(42, 12, 23, 11, 422))
console.log(Math.min(42, 12, 23, 11, 422))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.9))
console.log(Math.round(4.4))
console.log(Math.trunc(4.9))
console.log(Math.random())

// 4 Example
function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  console.log(getRandomBetween(10, 42))

let x = 70;
let y = 80;
[x, y] = [y,x];
// let t = x;
// x = y;
// y = t;
console.log(x, y);


// <<<<<<<<<<<Строки>>>>>>>>>>>>>

const name = "sasha";
const agge = 21;
const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + agge;
console.log(output);

const outputt = `Привет, меня зовут ${name} и мой возраст ${agge < 20 ? 'A': 'B'}`;
console.log(outputt);

const outtput = `
  <div>This is div</div>
  <p>this is p</p>
`

console.log(outtput);

const namee = "sasha";
console.log(namee.length);
console.log(namee.toUpperCase());
console.log(namee.charAt(2));
console.log(namee.indexOf('ha'));
console.log(namee.toLowerCase().startsWith('sa'));
console.log(namee.endsWith('ff'));

const str = '              password           ';
console.log(str.trim());
console.log(str.trimLeft());
console.log(str.trimRight());


function logPerson(s, name, age) {
    console.log(s, name, age);
    if (age < 0){
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}
const personName = 'Sasha';
const personAge = 21;
const output = logPerson`Имя: ${personName}, возраст: ${personAge}`;

const personName2 = 'Misha';
const personAge2 = -10;
const output2 = logPerson`Имя: ${personName2}, возраст: ${personAge2}`;
console.log(output);
console.log(output2);



// <<<<<<<<<<<ФУНКЦИИ>>>>>>>>>>>>>


// function Declaration
// можем обращаться, когда захотим
function greett(namme){
    console.log('Привет - ', namme);
}
greett('Лена');

// function Expression
// можем использовать только после инициализации
const greet2 = function (namme) {
    console.log('Привет2 - ', namme);
}
greet2('Вася')

console.log(typeof greett);
// функция в js это объект

// Анонимные функции
let counter = 0;
const interval = setInterval(function(){
    if (counter === 5){
    clearInterval(interval); // останавливает выполнение
    }
    else{
        console.log(++counter);
    }


}, 1000)
