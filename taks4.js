// let rarry = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (i = 0; i <= 9; i++) {
// 	console.log(i);
// }

// count from 1 to 5 and print each number.
// Task: Write a program that uses a while loop to print the numbers from 1 to 5, one on each line.
// Hint: Initialize a variable (e.g., i) to 1, then keep increasing it by 1 on each iteration of the while loop, until it reaches 5.
// let i = 1; // Initialize the variable

// while (i <= 5) { // Condition to run the loop
// 	console.log(i); // Print the current value of i
// 	i++; // Increment i by 1
// }


// 2. Sum of Numbers 1 to 10
// Goal: Understand how to accumulate values inside a loop.

// Task: Write a program that calculates the sum of numbers from 1 to 10 using a for loop and prints the result.

// Hint: Start with a variable sum initialized to 0, and add the value of i inside the loop.

// Expected Output:
let sum = 0;

for (let i = 1; i <= 10; i++) {
	sum += 1;
}

console.log(sum);


// 3. Multiplication Table (1-10)
// Goal: Loop through values and print a multiplication table.

// Task: Create a multiplication table for the number 5, and print the result using a for loop (e.g., 5x1, 5x2, ... 5x10).

// Hint: Multiply 5 by each number from 1 to 10 inside the loop.

// Expected Output:
const number = 5;

for (let i = 1; i <= 10; i++) {
	console.log(`${number} x ${i} = ${number * i}`);
}

// 4. Even Numbers from 1 to 20
// Goal: Loop through a range of numbers and filter even numbers.

// Task: Write a program that prints all the even numbers between 1 and 20.

// Hint: Use an if statement inside the loop to check if a number is even (i % 2 === 0).


// Expected Output:

for (let i = 1; i <= 20; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}


// 5. Create a Simple Countdown Timer
// Goal: Use the for loop to create a countdown from 10 to 1.

// Task: Write a program that counts down from 10 to 1 and prints "Liftoff!" when the countdown reaches 0.

// Hint: Start the loop from 10 and decrement i with each iteration.

// Expected Output:

for (let i = 10; i >= 1; i--) {
	console.log(i);
}
console.log('Liftoff!');


// 6. Print Each Element in an Array
// Goal: Loop through an array and print each item.

// Task: Create an array of 5 favorite fruits and use a for loop to print each fruit.

// Hint: Use i to index into the array and access each element.

// Expected Output:
const favoriteFruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

for (let i = 1; i < favoriteFruits.length; i++) {
	console.log(favoriteFruits[i]);
}


// 7. Find the Index of an Element in an Array
// Goal: Find and print the index of a specific element in an array.

// Task: Write a program that finds the index of the element "cherry" in the array fruits and prints its index.

// Hint: Loop through the array, and when you find "cherry", print i (the index).

// Expected Output:

// Index of 'cherry': 2
const fruits = ["apple", "banana", "cherry", "mango", "orange"];

for (let i = 0; i < fruits.length; i++) {
	if (fruits[i] === "cherry") {
		console.log("Index of 'cherry':", i);
		break;
	};
}


// 8. Reverse a String
// Goal: Reverse a string by accessing each character using a for loop.

// Task: Write a program that takes the string "hello" and reverses it.

// Hint: Start from the end of the string(using str.length - 1) and loop backwards.

// j

// Expected Output:

// olleh

// const str = 'hello';
// let reversedStr = " ";

// for (let i = str.length - 1; i >= 0; i--) {
// 	reversedStr += str[i];
// }
// console.log(reversedStr);


// 9. Count the Occurrences of a Character in a String
// Goal: Count how many times a specific character appears in a string.

// Task: Write a program that counts how many times the character "e" appears in the string "experience".

// Hint: Loop through the string and check each character. If it matches "e", increment the count.

// Expected Output:

// Occurrences of  'e': 3

const str = 'experience';
const charToCount = 'e';
let count = 0;

for (let i = 0; i < str.length; i++) {
	if (str[i] === charToCount) {
		count++;
	};
}
console.log("Occurrences of 'e':", count);


// 10. Find the Longest Word in an Array
// Goal: Use a for loop to find the longest word in an array.

// Task: Write a program that finds and prints the longest word from the array ["cat", "elephant", "dog", "giraffe"].

// Hint: Loop through the array and compare the lengths of each word to find the longest one.

// console.log("Longest word:", longestWord);
// Expected Output:

// Longest word: elephant

const words = ["cat", "elephant", "dog", "giraffe"];
let longestWord = words[0];

for (let i = 1; i < words.length; i++) {
	if (words[i].length > longestWord.length) {
		longestWord = words[i];
	}
}

console.log("Longest word:", longestWord);


// 11. Task: Count from 1 to 5 (Using while loop)
// Goal: Use a while loop to count from 1 to 5 and print each number.

// Task: Write a program that uses a while loop to print the numbers from 1 to 5, one on each line.

// Hint: Initialize a variable (e.g., i) to 1, then keep increasing it by 1 on each iteration of the while loop, until it reaches 5.

// Expected Output:  1 2 3 4 5;

// let i = 1;

// while (i <= 5) {
// 	console.log(i);
// 	i++;
// }


// 12. Task: Find the Largest Number in an Array (Using while loop)
// Goal: Use a while loop to find the largest number in an array.

// Task: Write a program that loops through an array of numbers and finds the largest number in the array.

// Steps:Create an array of numbers (e.g., [12, 5, 9, 22, 34, 18]).
// Initialize a variable to hold the largest number (e.g., largestNumber).
// Use a while loop to iterate through the array and compare each number with the current largest number.
// After the loop finishes, print the largest number found.

// Hint: Start by setting largestNumber to the first element of the array.
// Use the loop to go through the array and update largestNumber whenever a larger number is found.

// console.log("The largest number is:", largestNumber);

const numbers = [12, 5, 9, 22, 34, 18];
let largestNumber = numbers[0];
let i = 1;

while (i < number.length) {
	if (numbers[i] > largestNumber) {
		largestNumber = numbers[i];
	};
	i++;
}

console.log("The largest number is:", largestNumber);










