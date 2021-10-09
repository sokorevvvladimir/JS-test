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


// --------------МАССИВЫ (ARRAYS)---------------


// const string = "Real Madrid";
// for (const character of string) {
//     console.log(character);
// }

// const players = ["Thibaut Courtois", "Marcelo Vieira", "David Alaba", "Eder Militao", "Dani Carvajal", "Luka Modric", "Toni Kroos", "Casemiro", "Isco Alarcon", "Fede Valverde", "Marco Asensio", "Lucas Vazquez", "Rodrygo", "Gareth Bale", "Karim Benzema", "Eden Hazard", "Vinicius Junior"]
// const playerNameToFind = "Raul Gonzalez";
// let message = "There is no such player in the list!";;

// for (const player of players) {
//     if (player === playerNameToFind) {
//         message = "There is such player in the list!";
//         break;
//     }
// }
// console.log(message);

// const numbers = [17, 4, 66, 2, 32, 15, 4, 43, 19, 85, 50, 3, 77];
// const threshold = 21;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < threshold) {
//         continue;
//     }
//     console.log(`Numbers greater than ${threshold} are as follow: ${numbers[i]}`);
// }

// const word = "Real Madrid";
// console.log(word.split(" "));

// const words = ["Real", "Madrid"];
// console.log(words.join(" "));

// const clients = ["Mango", "Ajax"];
// console.log(clients.indexOf("Ajax"));

// const redFruits = ["apple", "strawberry", "cranberry", "cherry"];
// const fruit = "cherry";
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//     console.log(`${fruit} is a red fruit!`);
// }

// const scores = [1, 2, 3, 4, 5];
// const deletedScores = scores.splice(0, 2);
// console.log(scores);
// console.log(deletedScores);

// const colors = ["red", "blue", "yellow"];
// colors.splice(2, 0, "white");
// console.table(colors);

// const cart = [54, 28, 105, 70, 92, 17, 120];

// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);
//     total += cart[i];
// }
// console.log("Total:", total);

// for (const cartItem of cart) {
//     console.log(cartItem);
//     total += cartItem;
// }
// console.log("Total:", total);

// for (const cartItem of cart) {
//     if (cartItem % 2 !== 0) {
//         continue;
//     }
//     console.log(cartItem);
//     total += cartItem;
// }
// console.log("Total:", total);

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log("SmallestNumber:", smallestNumber);

// function withdraw(amount, balance) {
//     if (amount === 0) {
//         console.log("Для проведения операции введите сумму больше нуля");
//         return;
//     }

//     if (amount > balance) {
//         console.log("Недостаточно средств на счете");
//         return;
//     }

//     console.log("Операция прошла успешно");
// }

// withdraw(0, 300); 
// withdraw(500, 300); 
// withdraw(100, 300);

// const calculateTotalPrice = function (items) {
//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }
//     return total;
// }

// const r1 = calculateTotalPrice([1, 2, 3]);
// console.log(`Общая сумма покупок составляет ${r1} кредитов`);
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));

// const logins = ['poly', 'k1widab3st'];

// const findLogin = function (allLogins, loginToFind) {
//     return allLogins.includes(loginToFind) ? `Пользователь ${loginToFind} найден` :
//         `Пользователь ${loginToFind} не найден`;
// }

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));

// const add = function (...args) {
//     console.log(args);

//     let total = 0;
//     for (const arg of args) {
//         total += arg;
//     }
//     return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5));
// _________________________________________________________________
// const djName = "Axwell";
// const trackName = "Barricade";

// const playlist = {
//     name: "Мой супер плейлист",
//     rating: 5,
//     tracks: ["трек-1", "трек-2", "трек-3"],
//     [djName]: trackName, //имя ключа из переменной через [], значение св-ва просто имя переменной 
//     // getName: function () {
//     //     console.log('Ага это getName :)');
//     // },
//     changeName(newName) {
//         console.log(this); // это современный синтаксис объявления функции в значении ключа объекта - это метод объекта
//         this.name = newName;
//     },
//     addTrack(track) {
//         this.tracks.push(track);
//         this.trackCount = this.tracks.length;
//     },
//     updatedRating(newRating) {
//         this.rating = newRating;
//     },
//     getTrackCount() {
//         return this.tracks .length;
//     }
// };

// playlist.changeName("Новое имя");

// playlist.addTrack("Новый трек");

// playlist.updatedRating(4);

// playlist.getTrackCount();

// playlist.public = true; // добавляем новое св-во в объект или переопределяем уже существующее

// const propertyName = "tracks";

// console.log(playlist);
// // console.log(playlist.tracks);
// // console.log(playlist["rating"]); // это равноценно тому что на строку выше
// // console.log(playlist[propertyName]); //к ключу, кот записан в переменной через []
// ______________________________________________________
// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };
// let totalFeedback = 0;

// // const keys = Object.keys(feedback);
// // console.log(keys);

// // for (const key of keys) {
// //     console.log(key);
// //     console.log(feedback[key]);
// // }

// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//     totalFeedback += value;
// }
// console.log("Total feedback:", totalFeedback);
// _________________________________________________________________

// const friends = [
//     { name: "Mango", online: false },
//     { name: "Kiwi", online: true },
//     { name: "Poly", online: true },
//     { name: "Ajax", online: false },
// ];
// console.table(friends);

// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.name);
//         if (friend.name === friendName) {
//             return "НАШЛИ!";
//         }
//     }
//     return "НЕ НАШЛИ!";
// }

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

// _______________________________________________________________________
// const temps = [14, -4, 25, 8, 11];
// console.log(...temps);
// console.log(Math.min(...temps));

// const oldTemps = [14, 25, 11];
// const newTemps = [23, 17, 18];
// const allTemps = [...oldTemps, ...newTemps];
// console.log(allTemps);

// const first = {
//     propA: 5,
//     propB: 10,
// }
// const second = {
//     propB: 15,
//     propC: 20,
// }
// const third = {
//     ...first, ...second,
// }
// console.log(third);

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//     console.log(otherArgs);
// }
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// const book = {
//     title: "The name",
//     author: "The author",
// }

// const { title: firstTitle, author: firstAuthor, coverImage: firstCoverImage = "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg", } = book;

// const message = `Книга ${firstTitle} автора ${firstAuthor}`
// console.log(message);
// console.log(firstCoverImage);

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "На берегу спокойных вод",
//         author: "Роберт Шекли",
//         rating: 8.51,
//     },
// ];

// // for (const book of books) {
// //     const { title, author, rating } = book;
// //     console.log(title);
// //     console.log(author);
// //     console.log(rating);
// // }

// for (const { title, author, rating } of books) {
//     console.log(title);
//     console.log(author);
//     console.log(rating);
// }
// _______________________________________________________________
// function doStuffWithBook({ title, numberOfPages, downloads }) {
//     console.log(title);
//     console.log(numberOfPages);
// }
// doStuffWithBook({
//     title: "The Last Kingdom",
//     numberOfPages: 736,
//     downloads: 10283,
//     rating: 8.38,
//     public: true,
// });

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// }

// const ratings = Object.values(authors);

// console.log(ratings);
// __________________________________________________________________

// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {

//         for (const item of this.items) {
//             console.log(item);
//             if (item.name === product.name) {
//                 item.quantity += 1;
//                 return;
//             }
//         }
//         const newProduct = {
//             ...product,
//             quantity: 1,
//         };

//         this.items.push(newProduct);
//      },
//     remove(productName) {
//         const { items } = this;

//         for (let i = 0; i < items.length; i += 1) {
//             const item = items[i];

//             if (productName === item.name) {
//                 console.log("Нашли продукт!", productName);
//                 console.log(i);

//                 items.splice(i, 1);
//             }
//         }

//     },
//     clear() {
//         this.items = [];
//     },
//     countTotalPrice() {
//         const { items } = this;

//         let total = 0;
    
//         for (const {price, quantity} of items) {
//             total += price * quantity;
//         }
//         return total;
//     },
//     increaseQuantity(productName) {
//         for (const item of this.items) {
//             if (productName === item.name) {
//                 item.quantity += 1;
//             }
//         }
//      },
//     decreaseQuantity(productName) {
//         for (const item of this.items) {
//             if (productName === item.name) {
//                 item.quantity -= 1;
//             }
//         }
//     },
// };

// console.log(cart.getItems());

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: "strawberry", price: 110 });
// cart.add({ name: "strawberry", price: 110 });
// console.table(cart.getItems());

// console.log("Total:", cart.countTotalPrice());

// cart.remove('lemon');
// console.table(cart.getItems());

// // cart.clear();
// // console.log(cart.getItems());

// // cart.increaseQuantity('apple');
// // console.table(cart.getItems());

// cart.decreaseQuantity("strawberry");
// console.table(cart.getItems());

// ____________________________________________________________________