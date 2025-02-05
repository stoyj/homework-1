/*
Task 1: Convert Object Keys to Uppercase
Explanation:
Use the object’s keys and convert them to uppercase. This will help you practice iterating through object keys and applying transformations.

Input:
const product = { name: "Laptop", brand: "TechCorp", price: 899, inStock: true };

Expected Output:
["NAME", "BRAND", "PRICE", "INSTOCK"]


Task 2: Filter String Values from an Object
Explanation:
Extract all the values from an object and then filter out the non-string values. This task helps practice working with values and filtering data based on type.

Input:
const person = { name: "Alice", age: 30, city: "New York", isEmployed: true };

Expected Output:
["Alice", "New York"]


Task 3: Display Object Entries in a Formatted Way
Explanation:
Convert an object into key-value pairs and log each pair in a readable format. This will help practice working with both keys and values in an object.

Input:
const employee = { id: 101, name: "John", position: "Developer", department: "IT" };

Expected Output:
id: 101
name: John
position: Developer
department: IT


Task 4: Find a Key Containing the Letter "a"
Explanation:
Find the first key in the object that contains the letter "a". This will help you practice searching and filtering keys in an object.

Input:
const book = { title: "JavaScript Essentials", author: "Jane Doe", year: 2021, genre: "Programming" };

Expected Output:
"author"


Task 5: Calculate the Total Price of Items in a Cart
Explanation:
You have a shopping cart with items and their quantities. The task is to calculate the total price of all items based on a price list. This will help practice working with objects and applying math logic.

Input:
const cart = { apple: 3, banana: 2, orange: 5 };
const priceList = { apple: 1.2, banana: 0.8, orange: 1.5 };

Expected Output:
13.1
*/

// Task 1: Convert Object Keys to Uppercase
// Explanation:
// Use the object’s keys and convert them to uppercase. This will help you practice iterating through object keys and applying transformations.

// Input:
// const product = { name: "Laptop", brand: "TechCorp", price: 899, inStock: true };

// Expected Output:
// ["NAME", "BRAND", "PRICE", "INSTOCK"]

const product = {
  name: "Laptop",
  brand: "TechCorp",
  price: 899,
  inStock: true,
};

const upperCaseKeys = Object.keys(product).map((key) => key.toUpperCase());

console.log(upperCaseKeys); // ["NAME", "BRAND", "PRICE", "INSTOCK"]

// Task 2: Filter String Values from an Object
// Explanation:
// Extract all the values from an object and then filter out the non-string values. This task helps practice working with values and filtering data based on type.

// Input:
// const person = { name: "Alice", age: 30, city: "New York", isEmployed: true };

// Expected Output:
// ["Alice", "New York"]

const person = { name: "Alice", age: 30, city: "New York", isEmployed: true };

const stringValues = Object.values(person).filter(
  (value) => typeof value === "string"
);

console.log(stringValues); // ["Alice", "New York"]

// Task 3: Display Object Entries in a Formatted Way
// Explanation:
// Convert an object into key-value pairs and log each pair in a readable format. This will help practice working with both keys and values in an object.

// Input:
// const employee = { id: 101, name: "John", position: "Developer", department: "IT" };

// Expected Output:
// id: 101
// name: John
// position: Developer
// department: IT

const employee = {
  id: 101,
  name: "John",
  position: "Developer",
  department: "IT",
};

Object.entries(employee).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// id: 101
// name: John
// position: Developer
// department: IT

// Task 4: Find a Key Containing the Letter "a"
// Explanation:
// Find the first key in the object that contains the letter "a". This will help you practice searching and filtering keys in an object.

// Input:
// const book = { title: "JavaScript Essentials", author: "Jane Doe", year: 2021, genre: "Programming" };

// Expected Output:  "author"

const book = {
  title: "JavaScript Essentials",
  author: "Jane Doe",
  year: 2021,
  genre: "Programming",
};

const keyWithA = Object.keys(book).find((key) => key.includes("a"));

console.log(keyWithA); // "author"

// Task 5: Calculate the Total Price of Items in a Cart
// Explanation:
// You have a shopping cart with items and their quantities. The task is to calculate the total price of all items based on a price list. This will help practice working with objects and applying math logic.

// Input:
// const cart = { apple: 3, banana: 2, orange: 5 };
// const priceList = { apple: 1.2, banana: 0.8, orange: 1.5 };

// Expected Output: // 13.1;

const cart = { apple: 3, banana: 2, orange: 5 };
const priceList = { apple: 1.2, banana: 0.8, orange: 1.5 };

const totalPrice = Object.entries(cart).reduce(
  (total, [item, quantity]) => total + quantity * (priceList[item] || 0),
  0
);

console.log(totalPrice); // Output: 13.1
