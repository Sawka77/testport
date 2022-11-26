'use strict';
// const burger = null;
// const kartoshka = false;
// const jucy = 1;

// if (burger || kartoshka && jucy) {
//     console.log('Классно');
// } 
// else {
//     console.log('Плохо');
// }


// console.log((burger || kartoshka && jucy));


// const burger = 3;
// const kartoshka = 1;
// const jucy = 0;

// console.log(burger === 3 && jucy && kartoshka);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'asdasdasd');

// if (burger === 3 && jucy === 1 && kartoshka) {
//     console.log('Все поели');
// } else {
//     console.log('Уходим мужики');
// }

// // console.log((burger === 3 && kartoshka));


// let mes = 'Привет'

// if (2 + 1 === 3 && '1' == 1 || 10 > 5 && 10 === 1) {
//     console.log(mes);
// }

// if (0) {
//     console.log('No');
// } else if (' ') {
//     console.log('Yes');
// }

// let userCounter = 0;
// let newUsers = userCounter++;
// console.log(newUsers);

// console.log(!false && 11 || 18 && !'');

// let name = 0;
// console.log(name ?? 'Noname');


// for (let i = 0; i < 3; i++) {
//     console.log(`Число ${i}`);
// }

// First: for (let i = 0; i < 2; i++) {

//     for (let size = 0; size < 3; size++) {
//         if (size == 1) {
//             break First;
//         }
//         console.log(size);
//     }
// }

// function showName() {
//     console.log('Вася');
// }
// setTimeout(showName, 0);
// console.log('Коля');

// let fnMess;

// if (2 > 1) {
//     function showMessage() {
//         console.log("Сообщение");
//     }
// }
// showMessage();


// const burger = 3;
// const kartoshka = 3;
// const jucy = 0;
// const nuggets = 2;

// if (burger === 3 && jucy === 2 || kartoshka === 3 && nuggets) {
//     console.log('Похаваем');
// } else {
//     console.log('Не похаваем, уходим');
// }


// console.log(burger === 3 && jucy === 2 || kartoshka === 3 && nuggets);


// let johnReport, alexReport, samReport, mariaRerort = 'done';
// console.log(johnReport || alexReport || samReport || mariaRerort);


// console.log(NaN || 2 || undefined); // 2 
// console.log(NaN && 2 && undefined); // NaN 
// console.log(1 && 2 && 3); // 3 
// console.log(!1 && 2 || !3); // fasle
// console.log(25 || null && !3); // 25 
// console.log(NaN || null || !3 || undefined || 5); // 5 
// console.log(NaN || null && !3 && undefined || 5); // 5 
// console.log(5 === 5 && 3 > 1 || 5); // true 



// function getInfo (name, age) {
//     let result = {};

//     for (let i in result) {
//         this.name = name;

//     }
// }

// function personInfo(name, age) {
//     return {
//         name,
//         age
//     }
// };

// console.log(personInfo('Alex', 30));


// const usersMap = {
//     persons: [],
//     pushPerson(name, age) {
//         if (this.persons === name) {
//             this.persons.push(name)
//         } else if (this.age === age) {
//             return this.age += age
//         }
        
//         return {
//             name, age
//         }
//     }
// }


// console.log(usersMap.pushPerson('Sasha', 25));
// console.log(usersMap.persons);


// let num = 50; 

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55)

// for (let i = 2; i <= 10; i+=2) {
//     if (i === 8) {
//         // break;
//         continue
//     }
//     console.log(i);
// }
