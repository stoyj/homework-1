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

// 3. Event RSVP Management
// You are organizing a party, and you have an array of guests who RSVP’d along with their attendance status:

// const guests = [
// { name: "Alice", isAttending: true },
// { name: "Bob", isAttending: false },
// { name: "Charlie", isAttending: true },
// { name: "Diana", isAttending: false }
// ];

// Task:  Write a function using forEach to log a message for each guest, either thanking them for attending or expressing regret that they couldn’t make it.

// 4. Product Inventory Check
// You run an online store, and here is your inventory:

// const products = [
// { name: "Laptop", stock: 5 },
// { name: "Headphones", stock: 0 },
// { name: "Keyboard", stock: 2 },
// { name: "Mouse", stock: 1 }
// ];

// Task:  Write a function using forEach to log only the names of products that are out of stock.

// 5. Playlist Durations
// You’re creating a playlist, and you have the following songs with their durations (in minutes):

// const playlist = [
// { title: "Song A", duration: 3.5 },
// { title: "Song B", duration: 4.2 },
// { title: "Song C", duration: 5.1 },
// { title: "Song D", duration: 2.8 }
// ];

// Task:  Write a function using forEach to calculate the total duration of the playlist and log it in hours and minutes (e.g., "1 hour and 25 minutes").
