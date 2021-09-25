"use strict";

// let a;

// const b = 123;

// a = 10;


// console.log(a);
// console.log(b);

// const hasUser = "MAX";
// console.log("hasUser:", hasUser);
// const number = 4;
// console.log("Number:", number);

// const getFirstNumber = prompt("Type a number!");
// console.log(getFirstNumber);
// console.log(typeof getFirstNumber);

// const age = 25;
// const b = 7;
// const c = "5"
// console.log(!age);
// const shouldRenew = confirm("Хотите продлить подписку?");
// console.log(shouldRenew);

// const stars = 6;
// let price;

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
//     case 3:
//     case 4:
//         price = 30;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log("Такого количества звезд нет");
        
// }
// console.log(price);

// const stars = 7;
// let price;

// if (stars === 1 || stars === 2) { price = 20 }
// else if (stars === 3 || stars === 4) { price = 30 }
// else if (stars === 5) { price = 120 }
// else {console.log("There is no such hotel")}

// console.log(price)

// let option = "курьер";
// let message;

// if (option === "самовывоз") { message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе" }
// else if (option === "курьер") { message = "Курьер доставит заказ завтра с 9:00 до 18:00" }
// else if (option === "почта") { message = "Посылка будет отправлена сегодня" }
// else { message = "Вам перезвонит менеджер" }

// console.log(message)

// switch (option) {
//     case "самовывоз":
//         message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
//         break;
//     case "курьер":
//         message = "Курьер доставит заказ завтра с 9:00 до 18:00";
//         break;
//     case "почта":
//         message = "Послыка будет отправлена сегодня";
//         break;
//     default:
//         message = "Вам перезвонит менеджер";
// }
// console.log(message)

// let max = 5
// let total = 0;
// for (let i = 0; i <= max; i += 1) {

//     if (i % 2 === 0) {
//         continue;
//     }
//     total += i;
//     console.log("Нечетное число:", i);
// }
// console.log("Итого сумма -", total);

// const employees = 10;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (5000 - 500) + 500);
//     console.log(`ЗП работника номер ${i} -`, salary)
//     totalSalary += salary;
// }
// console.log("Общая ЗП работников -", totalSalary)

// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log("четное число - ", i);
//     total += i;
// }
// console.log("Итого сумма -", total);

// let balance = 10000;
// const payment = 2000;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счете`)

// if (payment <= balance) {
//     balance -= payment;
//     console.log(`На счете осталось ${balance} кредитов`)
// }
// else { console.log("На счете недостаточно средств для проведения операции!") }
// console.log("Операция завершена!")