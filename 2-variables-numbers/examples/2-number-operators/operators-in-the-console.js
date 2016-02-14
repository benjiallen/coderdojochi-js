/*
We can change the value of our variables. When we work with numbers in our
Math class at school we use things like addition, subtraction, division and
multiplication. Variables can do all that too!

Learning outcomes:

1. 

Exercise: 
*/

// might be a lot easier and more satisfying to do this work in the developer
// console. Not sure if this is too much to learn.

// basic examples
var a = 10 + 2;
var b = 10 - 2;
var c = 10 / 2;
var d = 10 * 3;

// referencing another variable within an assignment
var hoursInDay = 24;
var daysInWeek = 7;
var hoursInWeek = hoursInDay * daysInWeek; // 24 * 7 = 168 

// referencing the variable your working with within the assignment
a = a + 1;

// shortcuts
a += 2; // a = a + 2; also known as "plus equals"
a -= 2; // a = a - 2; also known as "minus equals"
a *= 2; // a = a * 2;
a /= 2; // a = a / 2;

// even shorter shortcuts
// incrementing and decrementing
a++; // a = a + 1;
++a; // a = a + 1;
a--; // a = a - 1;
--a; // a = a - 1;

// other things:
// order of operations e.g., var a = 12 + 3 * 4 - 4 / 2

// exercise ideas:
// work out the number of seconds in a year
// work out how many slices of pizza everyone can have at the end of class!

// next class - how this helps us draw animation!

var wheelSize = 75;
var carX = 300;

var setup = function() {
  	createCanvas(600, 600);
};

var draw = function() {	
	background(255, 255, 255);
	// car
	fill(255, 0, 0);
	// make the move forward
	carX = carX + 1;
	// make the car move backwards
	// carX = carX - 1;
	rect(carX, 300, 200, 100);
	
	// wheels of car
	// fill(0, 0, 0);
	// ellipse(300, 400, wheelSize, wheelSize);
	// ellipse(500, 400, wheelSize, wheelSize);
};