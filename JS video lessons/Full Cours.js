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
const num = 42; // integer
const float = 42.42; // float
const pow = 10e3;

console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER);
console.log('Math.pow 53', Math.pow(2, 53) - 1);
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER);
console.log('MAX_VALUE', Number.MAX_VALUE);
console.log('MIN_VALUE', Number.MIN_VALUE);
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY);
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY);
console.log('2 / 0', 2 / 0)
console.log(Number.NaN); // Not A Number
console.log(typeof NaN);
const weird = 2 / undefined;
console.log(Number.isNaN(weird));
console.log(Number.isNaN(42));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(42));

const stringInt = '40'
const stringFloat = '40.42'
console.log(Number.parseInt(stringInt) + 2);
console.log(parseInt(stringInt) + 2);
console.log(Number(stringInt) + 2);
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


//1 function Declaration
// можем обращаться, когда захотим
function greett(namme){
    console.log('Привет - ', namme);
}
greett('Лена');

//2 function Expression
// можем использовать только после инициализации
const greet2 = function (namme) {
    console.log('Привет2 - ', namme);
}
greet2('Вася')

console.log(typeof greett);
// функция в js это объект

//3 Анонимные функции
let counter = 0;
const interval = setInterval(function(){
    if (counter === 5){
    clearInterval(interval); // останавливает выполнение
    }
    else{
        console.log(++counter);
    }


}, 1000)

// 4 Параметры по умолчанию

function sumAll(...all){ // позволяет хранить внутри все передаваемые значения в виде массива 
    let result = 0;
    for (let num of all){
        result += num
    }
    console.log(all); 
    return result;
}

const res = sumAll(1,2,3,4,5)
console.log(res);

// 5 замыкания

function createMember(name){ // замыкается параметр name
    return function(lastName){ // ластнейм варьируется
        console.log(name+lastName);
    }
}

const logWithLastName = createMember('Sasha')
console.log(logWithLastName(' Minin'));
console.log(logWithLastName(' Alexandrov'));

// приватные переменные, для защиты данных,
// т.к. в JS нету нативного механизма, 
//позволяющего делать приватные переменные
 

// <<<<<<<<<<<Массивы>>>>>>>>>>>>>
// Прототип - набор взаимосвязанных объектов, с помощью которых мы для тех или иных структур
// данных добавляем определенный функционал
// прототип у массива класс Array
const carrs = ['Мазда','Форд','БМВ','Мерседес'];


carrs.push('Митсубиси'); // в конец
carrs.unshift('Волга'); // в начало
console.log(carrs.length);
console.log(carrs);
carrs.shift() // удаляет 1 элемент, он так же возвращает этот элемент
const first = carrs.shift();
const last = carrs.pop(); // возвращает и удаляет последний элемент
console.log(last);
console.log(first);
console.log(carrs);

console.log(carrs.reverse());

// Задача 1
const text = 'Привет, изучаем';
const reverseText = text.split(',');
const reverseText1 = text.split('');  // разделяет строку и делает массивом
console.log(reverseText); // [ 'Привет', ' изучаем' ]
console.log(reverseText1);
 // [
//    'П', 'р', 'и', 'в',
//    'е', 'т', ',', ' ',
//    'и', 'з', 'у', 'ч',
//    'а', 'е', 'м'
//  ]


const reverseTextt = text.split(',').reverse().join(' ');
console.log(reverseTextt); //  изучаем Привет


const carrss = ['Мазда','Форд','БМВ','Мерседес'];
console.log(carrss.indexOf('БМВ')); // = 2
const indexCar = carrss.indexOf('БМВ');
carrss[indexCar] = 'Porche';
console.log(carrss);


const people =  [
    {
        name: 'Sahsa',
        budget: 3000
    },
    {
        name: 'Vika',
        budget: 3500
    },
    {
        name: 'dima',
        budget: 4000
    }
]
const indexPeople = people.findIndex(function(person){
    console.log(person);
    return person.budget === 3500;
})
console.log(indexPeople); // = 1
console.log(people[indexPeople]); // { name: 'Vika', budget: 3500 }
//
const indexxPeople = people.find(function(person){
    return person.budget === 3500;
})
console.log(indexxPeople); // { name: 'Vika', budget: 3500 }
//
let findedP
for (const person of people) {
    console.log('3');
    if (person.budget === 3500){
        findedP === person;
    }
}
console.log(findedP);
//
const personn = people.find((personn) => {
    return personn.budget === 3500
})
console.log(personn); // { name: 'Vika', budget: 3500 }
//
const personn2 = people.find(personn2 => personn2.budget === 3500)
console.log(personn2); // { name: 'Vika', budget: 3500 }


const caar = ['Мазда','Форд','БМВ','Мерседес'];
const uppderCars = caar.map( car => car.toUpperCase())
console.log(uppderCars); // [ 'МАЗДА', 'ФОРД', 'БМВ', 'МЕРСЕДЕС' ]


const fib = [1, 1, 2, 3, 5, 8, 13];
const pow2 = num => num **2
const pow2fib2 = fib.map(pow2);
console.log(pow2fib2);
//
const pow2fib = fib.map(num => num ** 2)
console.log(pow2fib);
//
const sqrt = num => Math.sqrt(num);
const pow2fib3 = fib.map(pow2).map(sqrt);
console.log(pow2fib3);
//
const pow2fib4 = fib.map(pow2);
const filtered = pow2fib4.filter( num => num>20)
console.log(pow2fib4); // = [1, 1, 4, 9, 25, 64, 169]
console.log(filtered); // = [ 25, 64, 169 ]


//
const people2 =  [
    { name: 'Sahsa', budget: 3000},
    { name: 'Vika', budget: 1500},
    { name: 'dima', budget: 4000}
]

const allBudget = people2.reduce (function(acc, person) {
    if (person.budget>2000) {
        acc += person.budget;
    }
    return acc;
}, 0)
console.log(allBudget);
//
const allBudget2 = people2.filter(person => person.budget > 2000).reduce(function(acc, person) {
    acc += person.budget;
    return acc;
}, 0)
console.log(allBudget2);




// <<<<<<<<<<<Объекты>>>>>>>>>>>>>

const person = {
    firstName: 'Sasha',
    lastName: 'Min',
    year: 2001,
    lang: ['ru', 'en', 'de', 'pl'],
    hasWife: true,
    greet: function(){ // метод объекта
        console.log('greet from person');
        console.log(person);
    },
    greedis() { // тоже самое, что и объявление метода выше
        console.log('greedis');
        
    },
    'complex key': 'Complex value',
    ['key_' +(1+3)] : 'Computed key' // key_4
};

console.log(person);
console.log(person.firstName);
console.log(person['firstName']); // тоже самое, что и верхняя строчка
const key = 'lang';
console.log(person[key]);
person.hasWife = false;
person.isProgrammer = true;
person.greet();
person.greedis
console.log(person['complex key']);

person.age++
person.lang.push('by');
person['key_4'] = undefined;
console.log(person);

delete person['key_4'];
console.log(person);

// 1 деструктиризация

const name = person.name
const age = person.age
const lang = person.lang
// пишем вот так
const {name, age: personAge, lang} = person // поместили age в переменную personAge
console.log(name, personAge, lang);



//2 for in
// он заходит в прототип, он опасен из-за этого
const person = {
    firstName: 'Sasha',
    lastName: 'Min',
    year: 2001,
    lang: ['ru', 'en', 'de', 'pl'],
    hasWife: true,
    greet: function(){ // метод объекта
        console.log('greet from person');
        console.log(person);
    },
    greedis() { // тоже самое, что и объявление метода выше
        console.log('greedis');
        
    },
};

for (let key in person) {
    if (person.hasOwnProperty(key)){ //ЗАПОМНИТЬ!
    console.log('key: '+key);
    console.log('Value: '+ person[key]);
    }
}

//
const keyss = Object.keys(person); // возвращает массив!!!
console.log('Keyss: '+keyss); // Keyss: firstName,lastName,year,lang,hasWife,greet,greedis

keyss.forEach(key =>{
    console.log('key: '+key);
    console.log('Value: '+ person[key]);
}) // выведет тот же самый результат, что и у метода выше с hasown


//3 Context

const person = {
    firstName: 'Sasha',
    lastName: 'Min',
    year: 2001,
    lang: ['ru', 'en', 'de', 'pl'],
    hasWife: true,
    greedis() { // тоже самое, что и объявление метода выше
        console.log('greedis');
        
    },
    info(){
        console.log('Инфо про чел по имени:', this.firstName);    
    }
};
person.info();


// обычный метод
const logger ={
    keys(obj){
        console.log('Object keys:', Object.keys(obj));
        
    }
}
logger.keys(person)
// через this
const loggerr ={
    keys(){
        console.log('Object keys:', Object.keys(this));
        
    }
}
const bound = loggerr.keys.bind(person);
// с помощью метода bind мы говорим this, пусть там будет объект, 
//который мы сами передадим
// в нашем случае это person 
bound();
// метод call использует bind и сразу же ее вызывает, не нужно отдельно
// объявлять
loggerr.keys.call(person);


// Вывести ключ и значение объекта person
const person = {
    firstName: 'Sasha',
    lastName: 'Min',
    year: 2001,
    lang: ['ru', 'en', 'de', 'pl'],
    hasWife: true,
};

const log = {
    keys(){
        Object.keys(this).forEach(key =>{
            console.log(`${key}: ${this[key]}`);
        })
    },
    withParams(top = false, between = false, bottom = false){
        if (top){
            console.log('------- Start ---------');
        }
        Object.keys(this).forEach((key, index, array) =>{
            console.log(`${key}: ${this[key]}`);
            if (between && index !== array.length -1)
            {
                console.log('---------------');    
            }
        })
        if (bottom){
            console.log('------- END ---------');
        }
    }
        
}

log.keys.call({a: 1, b:2, c:3});
// a: 1
// b: 2
// c: 3
log.withParams.call(person, true, true, true) //call принимает в себя неограниченное кол-во параметров
// ------- Start ---------
// firstName: Sasha
// ---------------
// lastName: Min
// ---------------
// year: 2001
// ---------------
// lang: ru,en,de,pl
// ---------------
// hasWife: true
// ------- END ---------
log.withParams.apply(person, [true, true, true]); // apply принимает всего 2 параметра
// ------- Start ---------
// firstName: Sasha
// ---------------
// lastName: Min
// ---------------
// year: 2001
// ---------------
// lang: ru,en,de,pl
// ---------------
// hasWife: true
// ------- END ---------
//


// <<<<<<<<<<<Ассинхронность>>>>>>>>>>>>>

// выполняется спустя некоторое время
const timeoyut = setTimeout(() => {
    console.log('After timeout');
}, 2500);
clearTimeout(timeout);

//выполняется с интервалом
const interval = setInterval(() => {
    console.log('After interval');
}, 2500);
clearInterval(interval);


// пример задачи
const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait)
}
delay(() =>{
 console.log('After 2 sec');
 
}, 2000)

//1 Promises - преднозначены, чтобы убрать большой уровень вложности
// resolve 
const delayy = (wait = 1000) => {
    const promise = new Promise( (resolve, reject) => { // resolve - говорит, что все хорошо
        //reject- произошла какая-то ошибка
        setTimeout(() => {
         //   reject('Что-то пошло не так')
            resolve()
        }, wait)
    })
    return promise;
 
}


delayy(2500) // After 2 sec  Finally
    .then( () =>{
        console.log('After 2 sec');
    })
    .catch( err => console.error(err)
    )
    .finally(()=> {
        console.log('Finally'); // выполняется в любом случае
    })
    // при resolve
    // After 2 sec
    // Finally
    // при reject
    // undefined (если ничего не указали, в нашем случае "Что-то пошло не так")
    // Finally

// пример 2

const getData = () => new Promise(resolve => resolve ([
    1, 1, 2, 3, 5 ,8, 13
]))

getData().then( data => console.log(data))
//
async function asyncExample () {
    try {
    await delay(3000) // только после выполнения этой строчки выполнится следующая
    const data = await getData()
    console.log(data);
    } catch (e) {
        console.log(e);
    }
    finally{
        console.log('Finally');
        
    }
}
asyncExample()
















