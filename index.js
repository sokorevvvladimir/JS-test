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

// function greet(name) {
//     console.log(`Добро пожаловать, ${name}.`);
// }

// function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
// }

// // registerGuest("Манго", greet);

// // Ниже инлайн колбэк

// registerGuest("Манго", function greet(name) {
//     console.log(`Добро пожаловать, ${name}.`);
// });
// _______________________________________________________________
// function processCall(recipient, onAvailable, onNotAvailable) {
//     const isRecipientAvailable = Math.random() > 0.5;

//     if (!isRecipientAvailable) {
//         onNotAvailable(recipient);
//         return;
//     }
//     onAvailable(recipient);
// }

// function takeCall(name) {
//     console.log(`Соединяем с ${name}, ожидайте...`);
// }

// function activateAnsweringMachine(name) {
//     console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
// }

// function leaveHoloMessage(name) {
//     console.log(`Абонент ${name} недоступен, записываем голограмму.`);
// }

// // processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Поли", takeCall, leaveHoloMessage);
// _____________________________________________________________________

// function repeatLog(n) {
//     for (let i = 0; i < n; i += 1) {
//         console.log(i);
//     }
// }

// repeatLog(5);

// _______________________________________________________________

// function printValue(value) {
//     console.log(value);
// }

// function repeat(n, action) {
//     for (let i = 0; i < n; i += 1) {
//         action(i);
//     }
// }

// repeat(3, printValue);
// ______________________________________________________________

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number, index) {
//     console.log(`Индекс ${index}, значение ${number}`);
// });
// _______________________________________________________________

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach((number, index) => {
//     console.log(`Индекс ${index}, значение ${number}.`)
// });
// ___________________________________________________________________
// const pureMultiply = (array, value) => {
//     const newArray = [];

//     array.forEach(element => {
//         newArray.push(element * value);
//     });

//     return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// console.log(numbers);
// console.log(doubledNumbers);
// ___________________________________________________________________
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues);

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues);
// _______________________________
// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// const allCourses = students.flatMap(student => student.courses);

// const uniqueCourses = allCourses.filter(
//     (course, index, allCourses) => allCourses.indexOf(course) === index
// );
// console.log(uniqueCourses);
// _________________________________
// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best);

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst);

// const average = students.filter(
//     ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average);
// _______________________________________
// const total = [1, 7, 3, 14, 6].reduce((previousValue, number) => {
//     return previousValue + number;
// }, 0);
// console.log(total);
// ___________________________________________
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = Math.round(totalScore / students.length);
// console.log(averageScore);
// __________________________________________
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдем по всем элементам коллекции и прибавим значения свойства likes
// // к аккумулятору, начальное значение которого укажем 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32

// // Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
// // для подсчета лайков из коллекции
// const countLikes = tweets => tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(countLikes(tweets)); // 32
// _________________________________________________
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдем по всем элементам коллекции и добавим значения свойства tags
// // к аккумулятору, начальное значение которого укажем пустым массивом [].
// // На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (a, b) => a.score - b.score
// );

// console.log(inAscendingScoreOrder);

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// console.log(inDescendingScoreOrder);
// _______________________________________
// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "физика"] },
//   { name: "Поли", score: 59, courses: ["информатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["физика", "биология"] },
//   { name: "Киви", score: 94, courses: ["литература", "информатика"] },
// ];

// // const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// // console.log(sortedByAscendingScore);

// // const names = sortedByAscendingScore.map(student => student.name);

// // console.log(names);

// const uniqueSortedCourses = students
//     .flatMap(student => student.courses)
//     .filter((course, index, array) => array.indexOf(course) === index)
//     .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses);

// _____________________________________
// const allTags = ["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react", "js", "nodejs", "react"];

// const tagStats = allTags.reduce((acc, tag) => {
//     if (acc[tag]) {   //если в аккумуляторе (в данном случае - это пустой массив) имеется свойство с таким ключом, то увеличь его значение на 1
//         // acc[tag] += 1;
//         return {
//             ...acc,
//             [tag]: acc.tag + 1
//         };
//     }

//     // acc[tag] = 1; //если нет свойства с таким ключом, запиши такое свойство и поставь количество один

//     return {
//         ...acc,
//         [tag]: 1
//     };
// }, {});

// console.log(tagStats);

// ___________________________________________

// const allTags = ["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react", "js", "nodejs", "react"];

// const tagStats = allTags.reduce((acc, tag) => {
//     // if (acc[tag]) {   //если в аккумуляторе (в данном случае - это пустой массив) имеется свойство с таким ключом, то увеличь его значение на 1
//     //     // acc[tag] += 1;
//     //     return {
//     //         ...acc,
//     //         [tag]: acc.tag + 1
//     //     };
//     // }

//     // acc[tag] = 1; //если нет свойства с таким ключом, запиши такое свойство и поставь количество один

//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
// }, {});

// console.log(tagStats);

// const allTags = ["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react", "js", "nodejs", "react"];

// const tagStats = allTags.reduce(
//     (acc, tag) => ({
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     }),
//     {},
// );
// console.log(tagStats);
// ____________________________
// const user = {
//     name: "Mango",
//     // location: {
//     //     city: "Lviv",
//     // },
// };

// console.log(user?.location?.city);
// ____________________________

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// };

// // const add = function (x, y) {
// //     return x + y;
// // };

// // const sub = function (x, y) {
// //     return x - y;
// // };

// doMath(10, 7, function (x, y) {
//     return x - y;
// });
// doMath(2, 3, function (x, y) {
//     return x + y;
// });
// ______________________________________

// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//     console.log('Клик по кнопке ' + Date.now());
// };

// buttonRef.addEventListener('click', handleBtnClick);
// _________________________________________________

// const onGetPositionSuccess = function (position) {
//     console.log(position);
// };

// const onGetPositionError = function (error) {
//     console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError,
// );
// _______________________________________

// const fnA = function (parameter) {
//     const innerVariable = "значение внутренней переменной функции fnA";

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log("Это вызов innerFunction");
//     };
//     return innerFunction;
// };

// const fnB = fnA(555);

// fnB();

// console.log(fnB);
// _________________________________

// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`);
        
//     };
//     return makeDish;
// };

// const mango = makeSheff('Mango');

// mango('котлеты');
// mango('пирожок');

// console.dir(mango);

// const poly = makeSheff("Poly");

// poly('чай');
// poly('омлет');
// _____________________________________

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//     let salary = baseSalary;

//     return {
//         raise(amount) {
//             if (amount > 1000) {
//                 return "Ты офигел?";
//             };
//             salary += amount;
//         },
//         lower(amount) {
//             salary -= amount;
//         },
//         current() {
//             return `Текущая зарплата ${employeeName} - ${salary}`
//         },
//     };
// };

// const salaryManager = salaryManagerFactory('Mango', 5000);

// console.log(salaryManager.current());
// console.log(salaryManager.raise(1000000));
// ___________________________________

// class User {
//     #email;
//     static Roles = {
//         ADMIN: "admin",
//         EDITOR: "editor",
//     };

//     constructor({ name, email }) {
//         this.name = name;
//         this.#email = email;
//     }
//     getEmail() {
//         return this.#email;
//     }
//     changeEmail(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const mango = new User({ name: "Mango", email: "mango@mail.com"});
// console.log(mango);
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail());
// console.log(mango.role);

// class ContentEditor extends User {
//     //
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor);

// ____________________________
