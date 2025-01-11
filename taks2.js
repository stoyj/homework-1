// 1. Grade Evaluator
// Write a program that takes a student's score (out of 100) as input and prints the grade based on the following criteria:
function gradeEvaluator(score) {
	if (score >= 90) {
		console.log("A");
	} else if (score >= 80) {
		console.log("B");
	} else if (score >= 70) {
		console.log("C");
	} else if (score >= 60) {
		console.log("D");
	} else {
		console.log("F");
	}
}

const score = 85;
gradeEvaluator(score);

// 2. Weather Advisor
// Write a program that takes the current temperature as input and advises the user what to wear:
function weatherAdvisor(temperature) {
	if (temperature > 30) {
		console.log("It's hot! Wear light clothes.");
	} else if (temperature >= 20 && temperature <= 30) {
		console.log("It's warm! A t-shirt is fine.");
	} else if (temperature >= 10 && temperature < 20) {
		console.log("It's cool! Wear a jacket.");
	} else {
		console.log("It's cold! Bundle up!");
	}
}

const temperature = 15;
weatherAdvisor(temperature);

// 3. Number Checker
// Write a program that takes a number as input and determines:
function numberChecker(number) {
	if (number > 0) {
		console.log("Positive.");
	} else if (number === 0) {
		console.log("Zero.");
	} else {
		console.log("Negative.");
	}
}

const number = -5;
numberChecker(number);

// 4. Simple Calculator
// Write a program that takes two numbers and an operator (+, -, *, /) as input and performs the appropriate calculation.
function simpleCalculator(num1, num2, operator) {
	if (operator === "+") {
		console.log(`Result: ${num1 + num2}`);
	} else if (operator === "-") {
		console.log(`Result: ${num1 - num2}`);
	} else if (operator === "*") {
		console.log(`Result: ${num1 * num2}`);
	} else if (operator === "/") {
		if (num2 !== 0) {
			console.log(`Result: ${num1 / num2}`);
		} else {
			console.log("Error: Division by zero is not allowed.");
		}
	} else {
		console.log("Error: Unsupported operator.");
	}
}

const num1 = 10;
const num2 = 5;
const operator = "+";
simpleCalculator(num1, num2, operator);

// 5. Triangle Type
// Write a program that takes three angles of a triangle as input and determines its type:
function triangleType(angle1, angle2, angle3) {
	const sum = angle1 + angle2 + angle3;

	if (sum !== 180) {
		console.log("Not a Triangle.");
	} else if (angle1 === 60 && angle2 === 60 && angle3 === 60) {
		console.log("Equilateral Triangle.");
	} else if (angle1 === angle2 || angle1 === angle3 || angle2 === angle3) {
		console.log("Isosceles Triangle.");
	} else {
		console.log("Scalene Triangle.");
	}
}

const angle1 = 60;
const angle2 = 60;
const angle3 = 60;
triangleType(angle1, angle2, angle3);




