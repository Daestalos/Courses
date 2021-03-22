"use strict";

let num = 50,
    a = 50;
  


while (num <= 55)
{
    console.log(num);
    num++;
}

do {
    console.log(a);
    a++;
} 
while (a <= 55);

let   b = 50;

for (let i = 1; i < 8; i++) {
    console.log(b);
    b++;
}


for (let i = 1; i < 10; i++) {
    if (i === 6){
       // break;
       continue; // позволяет пропустить шаг, но не прерывает цикл
    }
    console.log(i);
}