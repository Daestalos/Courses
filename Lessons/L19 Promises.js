"use strict";
//reject- произошла какая-то ошибка
// resolve - говорит, что все хорошо

// <<<<<<<<<<<Ассинхронность и промисы>>>>>>>>>>>>>

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
asyncExample();

// пример 3
// Промисы позволяют успростить работу с Ассинхронными операциями
console.log('Request data...');

setTimeout(() => {
    console.log('Prerering data...');
    
    const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
    };

    setTimeout(() => {
        backendData.modified = true;
        console.log(`Data received ${backendData}`);
    }, 2000);

}, 2000);

// перепишем
console.log('Request data...');

const promise = new Promise( (resolve, reject) => {
    setTimeout (() => {
        console.log('Prerering data...');
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        };
        resolve(backendData); // передаем resolve, чтобы могли использовать в then
    }, 2000)
});

promise.then((data) => {
    console.log('Promise resolve', data);  // = Promise resolve { server: 'aws', port: 2000, status: 'working' }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            reject(data);
           
        }, 2000);
    });

})

.then(clientData => {
    console.log(`Data received ${clientData}`);
    clientData.PromiseWork = true;
    return clientData;
})
.then(clientData => {
    console.log(`Modified ${clientData}`);
})
.catch(e => console.error('Error', e))// Error { server: 'aws', port: 2000, status: 'working', modified: true }
.finally (() =>
{
    console.log('Finally');
});

//


