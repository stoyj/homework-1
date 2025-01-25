// 1. Book Collection Sorting
// You have the following array of books:

// const books = [
// { title: "The Alchemist", pages: 197 },
// { title: "1984", pages: 326 },
// { title: "The Great Gatsby", pages: 180 },
// { title: "Moby Dick", pages: 635 }
// ];
// Task:
// Write a function using forEach to create a new array of book titles where the number of pages is less than 300. Log the resulting array.

// Масивът с книги
const books = [
  { title: "The Alchemist", pages: 197 },
  { title: "1984", pages: 326 },
  { title: "The Great Gatsby", pages: 180 },
  { title: "Moby Dick", pages: 635 },
];

// Функция за създаване на нов масив от заглавия
function getBooksWithLessThan300Pages(booksArray) {
  const result = []; // Нов масив за заглавията

  booksArray.forEach((book) => {
    if (book.pages < 300) {
      result.push(book.title); // Добавяме заглавието в резултата
    }
  });

  return result; // Връщаме новия масив
}

// Извикваме функцията и записваме резултата
const filteredBooks = getBooksWithLessThan300Pages(books);

// Извеждаме резултата в конзолата
console.log(filteredBooks);

// 2. Daily Calorie Tracker
// You have an array of meals you ate today with their calorie counts:

// const meals = [
// { name: "Breakfast", calories: 400 },
// { name: "Lunch", calories: 700 },
// { name: "Snack", calories: 200 },
// { name: "Dinner", calories: 600 }
// ];

// Task:  Write a function using forEach to calculate and log the total calorie intake for the day.

// 1. Анализ на задачата

// 1. Трябва да обявя общ брой калории, които съм яла за деня.

// 2. Данни за съхранението,  известни като масив от обекти, всеки от които съдържа име на храната и броя на калориите.

// 3. Ще използвм метода forEach, за да мина през елементите на масата и да изчисля общата сума на калориите.

// 2. Разбиване на задачата на малки стъпки
// Стъпка 1: Създавам масив със съхранение
const meals = [
  { name: "Breakfast", calories: 400 },
  { name: "Lunch", calories: 700 },
  { name: "Snack", calories: 200 },
  { name: "Dinner", calories: 600 },
];
// Стъпка 2: Функция за изчисляване на калориите
// Ще напишем функция, която използва forEach за обхождане на елементите на масива. Сумата на калориите ще бъде съхранена в променлива.

// 1. Променлива totalCalories, която ще съхраня текущата сума (започвам с 0).
// 2. Използвам forEach, за да добавя стойността на calories всеки обект към totalCalories.
// 3. Накрая, отпечатам резултата.

// Стъпка 3: Реализирам кода
function calculateTotalCalories(meals) {
  let totalCalories = 0;

  // if (meals.calories) {
  //   totalCalories += meals.calories;
  // }

  // Използвам forEach, за да обходя масива
  meals.forEach((meal) => {
    totalCalories += meal.calories; // Добавям калориите на текущото хранене
  });

  console.log(`Total calorie intake for the day: ${totalCalories}`);
  console.log(meals);
}

// Извиквам функцията
calculateTotalCalories(meals); // Total calorie intake for the day: 1900

// 3. Event RSVP Management
// You are organizing a party, and you have an array of guests who RSVP’d along with their attendance status:

// const guests = [
// { name: "Alice", isAttending: true },
// { name: "Bob", isAttending: false },
// { name: "Charlie", isAttending: true },
// { name: "Diana", isAttending: false }
// ];

// Task:  Write a function using forEach to log a message for each guest, either thanking them for attending or expressing regret that they couldn’t make it.
const guests = [
  { name: "Alice", isAttending: true },
  { name: "Bob", isAttending: false },
  { name: "Charlie", isAttending: true },
  { name: "Diana", isAttending: false },
];

function manageRSVP(guests) {
  // Обхождам масива с forEach
  guests.forEach((guest) => {
    if (guest.isAttending) {
      console.log(`Thank you, ${guest.name}, for attending the party!`);
    } else {
      console.log(`We’re sorry you couldn’t make it, ${guest.name}.`);
    }
  });
}

// Извиквам функцията
manageRSVP(guests);

//  Подобрение
// Ако искам кодът да бъде по-гъвкав или организиран:
// Това решение използвам тернарен оператор за краткост и яснота.
// function getRSVPMessage(guest) {
//   return guest.isAttending
//     ? `Thank you, ${guest.name}, for attending the party!`
//     : `We’re sorry you couldn’t make it, ${guest.name}.`;
// }

// function manageRSVP(guests) {
//   guests.forEach((guest) => console.log(getRSVPMessage(guest)));
// }

// Извикваме функцията
// manageRSVP(guests);
// Thank you, Alice, for attending the party!
// We’re sorry you couldn’t make it, Bob.
// Thank you, Charlie, for attending the party!
// We’re sorry you couldn’t make it, Diana.

// 4. Product Inventory Check
// You run an online store, and here is your inventory:

// const products = [
// { name: "Laptop", stock: 5 },
// { name: "Headphones", stock: 0 },
// { name: "Keyboard", stock: 2 },
// { name: "Mouse", stock: 1 }
// ];

// Task:  Write a function using forEach to log only the names of products that are out of stock.
const products = [
  { name: "Laptop", stock: 5 },
  { name: "Headphones", stock: 0 },
  { name: "Keyboard", stock: 2 },
  { name: "Mouse", stock: 1 },
];
function logOutOfStockProducts(products) {
  // Обхождам масива с forEach
  products.forEach((product) => {
    if (product.stock === 0) {
      console.log(product.name);
    }
  });
}

logOutOfStockProducts(products); // Headphones

// Алтернативно подобрение
// Ако искам да разделя логиката за проверка в отделна функция, мога да създам Чистота на кода : Цел е да бъде ясен, лесен за четене и разбиране.
// function isOutOfStock(product) {
//   return product.stock === 0;
// }

// function logOutOfStockProducts(products) {
//   products.forEach((product) => {
//     if (isOutOfStock(product)) {
//       console.log(product.name);
//     }
//   });
// }

// logOutOfStockProducts(products);
// Допълнителни упражнения
// Използвам filter, за да създадм нов масив само с продуктите, които са изчерпани:
// const outOfStockProducts = products.filter((product) => product.stock === 0);
// console.log(outOfStockProducts.map((product) => product.name));
// Извеждам броя на изчерпаните продукти:
// const outOfStockCount = products.filter(
//   (product) => product.stock === 0
// ).length;
// console.log(`Number of out-of-stock products: ${outOfStockCount}`);

// 5. Playlist Durations
// You’re creating a playlist, and you have the following songs with their durations (in minutes):

// const playlist = [
// { title: "Song A", duration: 3.5 },
// { title: "Song B", duration: 4.2 },
// { title: "Song C", duration: 5.1 },
// { title: "Song D", duration: 2.8 }
// ];

// Task:  Write a function using forEach to calculate the total duration of the playlist and log it in hours and minutes (e.g., "1 hour and 25 minutes").
const playlist = [
  { title: "Song A", duration: 3.5 },
  { title: "Song B", duration: 4.2 },
  { title: "Song C", duration: 5.1 },
  { title: "Song D", duration: 2.8 },
];

function calculatePlaylistDuration(playlist) {
  let totalMinutes = 0;

  // Изчисляваме общата продължителност с forEach
  playlist.forEach((song) => {
    totalMinutes += song.duration;
  });

  // Преобразуваме в часове и минути
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.round(totalMinutes % 60);

  // Извеждаме резултата
  console.log(
    `${hours} hour${hours !== 1 ? "s" : ""} and ${minutes} minute${
      minutes !== 1 ? "s" : ""
    }`
  );
}

calculatePlaylistDuration(playlist); // 0 hours and 16 minutes

// Закръглям до най-близката десета от минутата: Ако искам по-прецизно закръгляне на минути:
// const minutes = Math.round((totalMinutes % 60) * 10) / 10;
// Филтрирам песни с продължителност над 5 минути:
// const longSongs = playlist.filter((song) => song.duration > 5);
// console.log(longSongs);

// Мога да добавям нови песни и тествам кода с различни входни данни:
// playlist.push({ title: "Song E", duration: 7.3 });
