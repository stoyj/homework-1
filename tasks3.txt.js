// 1. Age Category Write a program that takes a person's age as input and determines their age category:
// Age < 13: Print "Child"
// 13 ≤ Age < 20: Print "Teenager"
// 20 ≤ Age < 60: Print "Adult"
// Age ≥ 60: Print "Senior"
// Speed Fine Calculator Write a program that calculates the fine for speeding based on the speed limit and the vehicle's speed:

function categorizeAge(age) {
	if (age < 13) {
		console.log("Child");
	} else if (age >= 13 && age < 20) {
		console.log("Teenager");
	} else if (age >= 20 && age < 60) {
		console.log("Adult");
	} else {
		console.log("Senior");
	};
}
categorizeAge(12); // Child
categorizeAge(15); // Teenager
categorizeAge(35); // Adult
categorizeAge(65); // Senior


// 2. Input the speed limit and the vehicle's speed.
// If the vehicle is within the speed limit, print "No Fine."
// If the speed is over the limit by 1–20 km/h, print "Fine: $50."
// If the speed is over the limit by 21–40 km/h, print "Fine: $150."
// If the speed exceeds the limit by more than 40 km/h, print "Fine: $500."

function calculateSpeedFine(speedLimit, vehicleSpeed) {
	const speedDifference = vehicleSpeed - speedLimit;

	if (speedDifference <= 0) {
		console.log("No fine.");
	} else if (speedDifference <= 10) {
		console.log("Fine: $50");
	} else if (speedDifference <= 20) {
		console.log("Fine: $100");
	} else {
		console.log("Fine: $200");
	};
}

calculateSpeedFine(50, 45);
calculateSpeedFine(50, 55);
calculateSpeedFine(50, 65);
calculateSpeedFine(50, 75);



// 3. Day of the Week Write a program that takes a number (1 to 7) as input and prints the corresponding day of the week:
//  1: Print "Monday"
// 2: Print "Tuesday"
// 3: Print "Wednesday"
// 4: Print "Thursday"
// 5: Print "Friday"
// 6: Print "Saturday"
// 7: Print "Sunday"
// If the number is not in the range 1–7, print "Invalid Input."
// Leap Year Checker Write a program that takes a year as input and determines if it is a leap year:

function getDayOfWeek(dayNumber) {
	switch (dayNumber) {
		case 1:
			console.log("Monday");
			break;
		case 2:
			console.log("Tuesday");
			break;
		case 3:
			console.log("Wednesday");
			break;
		case 4:
			console.log("Thursday");
			break;
		case 5:
			console.log("Friday");
			break;
		case 6:
			console.log("Saturday");
			break;
		case 7:
			console.log("Sunday");
			break;
		default:
			console.log("Invalid input. Please enter a number between 1 and 7.");
	};
}

getDayOfWeek(1); // Monday
getDayOfWeek(4); // Thursday
getDayOfWeek(7); // Sunday
getDayOfWeek(9); // Invalid input. Please enter a number between 1 and 7.




// 4. Leap Year Checker Write a program that takes a year as input and determines if it is a leap year:

// If the year is divisible by 4 and not divisible by 100, or divisible by 400, print "Leap Year."
// Otherwise, print "Not a Leap Year."

function isLeapYear(year) {
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		console.log("Leap Year.");
	} else {
		console.log("Not a Leap Year.");
	};
}

isLeapYear(2024); // Leap Year.
isLeapYear(1900); // Not a Leap Year.
isLeapYear(2000); // Leap Year.
isLeapYear(2023); // Not a Leap Year.




// 5. Shopping Discount Write a program that calculates the discount for a purchase based on the total amount:

// Input the total purchase amount.
// If the amount is below $50, print "No Discount."
// $50 ≤ Amount < $100: Print "5% Discount."
// $100 ≤ Amount < $200: Print "10% Discount."
// Amount ≥ $200: Print "15% Discount."
// Calculate and print the final price after applying the discount.

function calculateDiscount(totalAmount) {
	let discount = 0;
	let finalPrice;

	if (totalAmount < 50) {
		console.log("No Discount.");
		discount = 0;
	} else if (totalAmount >= 50 && totalAmount < 100) {
		console.log("5% Discount.");
		discount = 0.05;
	} else if (totalAmount >= 100 && totalAmount < 200) {
		console.log("10% Discount.");
		discount = 0.10;
	} else {
		console.log("15% Discount.");
		discount = 0.15;
	}

	// Рассчет окончательной цены
	finalPrice = totalAmount - (totalAmount * discount);
	console.log(`Final Price: $${finalPrice.toFixed(2)}`);
}

calculateDiscount(45);  // No Discount. Final Price: $45.00
calculateDiscount(75);  // 5% Discount. Final Price: $71.25
calculateDiscount(150); // 10% Discount. Final Price: $135.00
calculateDiscount(250); // 15% Discount. Final Price: $212.50


