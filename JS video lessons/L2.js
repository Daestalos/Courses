// 
// 
// 
// аргументы функции
// 
// 
// 
// 


function f1(a, b, c){

}

let x = 5;
let y = 6;
function sum() {
    
    console.log(x+y);
}
sum();


function sum2(a,b) {
    console.log(a+b);
}

sum2(1,2);


// массив arguments

function showsum(x,y, elem = '.out-1'){
    console.log(arguments);
    document.querySelector(elem).textContent = x+y;

}

showsum(10, 15, '.out-2');