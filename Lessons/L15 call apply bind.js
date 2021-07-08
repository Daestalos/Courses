"use strict";

// <<<<<<<<<<!!!!!! call !!!!!!!!!!>>>>>>>>>>>

// Синтаксис метода call:

// func.call(context, arg1, arg2, ...)
//При этом вызывается функция func, первый аргумент call становится её this, а остальные передаются «как есть».
//Вызов func.call(context, a, b...) – то же, что обычный вызов func(a, b...), но с явно указанным this(=context).

let user = {
    firstName: "Василий",
    lastName: "Петров"
};

function showFullName() {
     console.log( this.firstName + " " + this.lastName );
}
// функция вызовется с this=user
showFullName.call(user); // Василий Петровa

// После контекста в call можно передать аргументы для функции. Вот пример с более сложным вариантом showFullName, который конструирует ответ из указанных свойств объекта:
var user2 = {
    firstName: "Василий",
    surname: "Петров",
    patronym: "Иванович"
  };
  
  function showFullName(firstPart, lastPart) {
    console.log( this[firstPart] + " " + this[lastPart] );
  }
  
  // f.call(контекст, аргумент1, аргумент2, ...)
  showFullName.call(user2, 'firstName', 'surname') // "Василий Петров"
  showFullName.call(user2, 'firstName', 'patronym') // "Василий Иванович



/// <<<<<<<<!!!!!!!!!! apply !!!!!!!!!!>>>>>>>>>>>>>>>>>

// Если нам неизвестно, с каким количеством аргументов понадобится вызвать функцию, можно использовать более мощный метод: apply.
// Вызов функции при помощи func.apply работает аналогично func.call, но принимает массив аргументов вместо списка.

// func.call(context, arg1, arg2);
// // идентичен вызову
// func.apply(context, [arg1, arg2]);

var arr = [];
arr.push(1);
arr.push(5);
arr.push(2);

// получить максимум из элементов arr
console.log( Math.max.apply(null, arr) ); // 5

