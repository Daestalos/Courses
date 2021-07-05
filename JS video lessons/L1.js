// https://vk.com/video-119334888_456243759
// функция - блок кода, который определяется один раз и может вызываться многократно

// function declaration

function testFunction(){
    const x = 5;
    const y = 10;
    console.log(x+y);
}

function hello () {
    testFunction();
    console.log('Hello...');
}

function testFunction2(){
    function t3(){
        console.log('t3 function');
    }
    t3();
    console.log("testFunction2");
}


hello();
testFunction2();
// t3(); ошибка, потому что он определен только в рамках функции  testFunction2


function unixTime(){
    let time = Math.floor(new Date().getTime);
    console.dir(time);
}

unixTime();


function randomInt() {
    const min = 100;
    const max = 200;
    let rand = Math.floor(min + Math.random()* (max + 1 - min));
    console.log(rand);
}

randomInt(); // random int 555, функция была переопределена

// переопределение

function randomInt(){
    console.log('random int 555');
}

randomInt(); // random int 555



rand(); // ошибка, т.к. переменные еще не были объявлены
// переменные и функции
let min = 100;
let max = 200;

function rand() {
    let rand = Math.floor(min + Math.random()* (max + 1 - min));
    console.log(rand);
}

rand();


function cout() {
    let count = 9;
    count++;
    console.log(count);
}

cout(); //10
cout(); //10
cout(); //10
// при опред переменной вне функции 10, 11, 12...


// функции при событии на элементе

document.querySelector('.promo__genre').addEventListener('mousemove', cout);


let w = 100;
function blockWidth (){
    w++;
    document.querySelector('.promo__gebre').style.wigth = w + 'px';
}
document.querySelector('.promo__genre').addEventListener('mousemove', blockWidth);




