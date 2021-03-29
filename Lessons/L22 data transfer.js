"use strict";

/////!!!!!!!!!!!!!!\\\\\
// передача по ссылке
let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// // const copy = obj; // (передаем ссылку на существующий объект) не сработало, мы модифицируем изначальный объект.
// // работает только с примитивными типами данных
// // работая с объектами и т.д. идет работа по ссылке
// copy.a = 10;

// //console.log(copy); // { a: 10, b: 1 }
// console.log(obj); // { a: 10, b: 1 }



// копируем объект
function copy(mainObj) {
    let ObjCopy = {};

    let key;
    for (key in mainObj) {
        ObjCopy[key] = mainObj[key];
    }
    return ObjCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
console.log(newNumbers); // ={ a: 10, b: 5, c: { x: 7, y: 4 } }
console.log(numbers); // = { a: 2, b: 5, c: { x: 7, y: 4 } }
////!!!!!\\\\
// Существует два клонирования: глубокие и поверхностные копии объектов
// выше создана поверхностная копия, т.к. она берет все обычные свойства родителя
// и создает независимые структуры
// ниже глубокая копия, если одно из свойств будет содержать объект или массив, то это свойство
// будет иметь ссылочный тип данных (newNumbers.c.x, c.x имеет ссылку на объект numbers)
newNumbers.c.x = 10;

console.log(newNumbers); // = { a: 10, b: 5, c: { x: 10, y: 4 } }
console.log(numbers); // = { a: 2, b: 5, c: { x: 10, y: 4 } }


////!!!!!\\\\
// метод objectAssing (позволяет соединить несколько объектов)
const add = {
    d: 17,
    e: 20
};
// первым аргументом передаем объект, в который помещаем, вторым - откуда
console.log(Object.assign(numbers, add)); // { a: 2, b: 5, c: { x: 10, y: 4 }, d: 17, e: 20 }

// таким образом мы можем создавать копии объекта
const clone = Object.assign({}, add);
clone.d = 20;
console.log(add); // = { d: 17, e: 20 }
console.log(clone); // = { d: 20, e: 20 }

/////// МЕТОД 3 \\\\\\\\\\\
// создадим копию масства!!!! \\

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // метод slice позволяет скопировать массив, можно передать аргумент по кол-ву арг
newArray[1] = 'asdasdasdasd';
console.log(newArray);
console.log(oldArray);


///// МЕТОД 4 \\\\\\\\\
//// ОПЕРАТОР РАЗВОРОТА (метод Spread)
/// в ES8 стандарте появился и для объектов

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
     
console.log(internet);


function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);


const array = ['a', 'b'];
const newAarray = [...array];
console.log(newAarray); // = [ 'a', 'b' ]


const q = {
    one: 1,
    two: 2
};
const newObj = {...q};
console.log(newObj); // = { one: 1, two: 2 }