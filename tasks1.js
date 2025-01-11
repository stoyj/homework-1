// task 1: Add Two Numbers
// Create a function addNumbers that takes two numbers as parameters, adds them, and returns the result.
// Example:

// console.log(addNumbers(3, 5)); // Output: 8

// Function for adding two numbers
function addNumbers(num1, num2) {
	return num1 + num2;
}

// Example of a function call
console.log(addNumbers(3, 5));
console.log(addNumbers(10, 15));
console.log(addNumbers(-2, 7));




// Task 2: Subtract Two Numbers
// Create a function subtractNumbers that takes two numbers as parameters, subtracts the second number from the first, and returns the result.
// Example:

// console.log(subtractNumbers(10, 4)); // Output: 6

// Function to subtract two numbers
function subtractNumbers(num1, num2) {
	return num1 - num2;
}

// Example of a function call
console.log(subtractNumbers(10, 4)); // Output 6
console.log(subtractNumbers(20, 5)); // Output 15
console.log(subtractNumbers(7, 10)); // Output -3




// Task 3: Multiply Two Numbers
// Create a function multiplyNumbers that takes two numbers as parameters, multiplies them, and returns the result.
// Example:

// console.log(multiplyNumbers(6, 7)); // Output: 42

// Function for multiplying two numbers
function multiplyNumbers(num1, num2) {
	return num1 * num2;
}

// Example of a function call
console.log(multiplyNumbers(6, 7)); // Output 42
console.log(multiplyNumbers(5, 8)); // Output 40
console.log(multiplyNumbers(3, 9)); // Output -27




// Task 4: Divide Two Numbers
// Create a function divideNumbers that takes two numbers as parameters, divides the first number by the second, and returns the result.
// Example:

// console.log(divideNumbers(15, 3)); // Output: 5

// Function for dividing two numbers
function divideNumbers(num1, num2) {
	if (num2 === 0) {
		return 'Error: Division by zero is not allowed';
	};
	return num1 / num2;
}

// Example of a function call
console.log(divideNumbers(15, 3)); // Output 5
console.log(divideNumbers(20, 4)); // Output 5
console.log(divideNumbers(7, 0)); // Output: Error: Division by zero is not allowed.




// Task 5: Calculate the Average
// Create a function calculateAverage that takes three numbers as parameters, calculates their average, and returns the result.
// Example:

// console.log(calculateAverage(4, 8, 6));

// Function to calculate the average of three numbers
function calculateAverage(num1, num2, num3) {
	return (num1 + num2 + num3) / 3;
}

//  changes 
console.log(calculateAverage(1, 20));


// Example of a function call
console.log(calculateAverage(4, 8, 6)); // Output: 6
console.log(calculateAverage(10, 20, 30)); // Output: 20
console.log(calculateAverage(5, 7, 9)); // Output: 7


console.log('asd');

