'use strict';
// https://developer.mozilla.org/ru/docs/Learn/HTML/Howto/Use_data_attributes


// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes); // (псевдоколлекция) выводит узлы, которые дети body.
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// можно прописать parentElement, чтобы получить конкретно родительский элемент.
console.log(document.querySelector('#current').parentNode.parentNode);

// [] - получить атрибут html, в скобках название атрибута, затем устанавливаем ее значение
console.log(document.querySelector('[data-current="3"]').nextSibling);
// nextsibling - получить следующую ноду

console.log(document.querySelector('[data-current="3"]').previousSibling);
// previousSibling - получить предыдущую ноду (если в html будет пробел, то мы получим его (textовую ноду))

console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// nextElementSibling - получит следующий именно элемент.

console.log(document.querySelector('[data-current="3"]').previousElementSibling);
// nextElementSibling - получит следующий именно элемент.

// перебор элементов в псевдомассивен
// например задача перебрать всех clildNodes, котороые лежат в body и избавиться от всех
// текстовых нод.
for (let node of document.body.childNodes){
    if (node.nodeName == '#text'){
        continue;
    }
    console.log();
}
// мы получаем только элементы (комментарии тоже, т.к. они не являются текстовыми нодами)
