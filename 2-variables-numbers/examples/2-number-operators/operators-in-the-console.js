/*
We can change the value of our variables. When we work with numbers in our
Math class at school we use things like addition, subtraction, division and
multiplication. Variables can do all that too!

Learning outcomes:

1. Discover the Chrome Developer Console. Ninja Tool!
2. We can add, subtract, divide and multiply numbers.
3. We evaluate the right hand side of our assignment and then assign the value
   to our variable name on the left hand side.
4. We can use these operators to make JavaScript become a calculator.
5. Programmers love shortcuts! There are numerous shortcuts for our number
   operators. 

Exercises: 

* Work out the number of seconds in a year
* Work out how many slices of pizza everyone can have at the end of class!
*/

// basic examples
// addition, subtraction, division and multiplication operators
var a = 10 + 2;
var b = 10 - 2;
var c = 10 / 2;
var d = 10 * 3;

// using JavaScript as a simple calculator
// we can reference another variable within an assignment
// we evaluate the right hand side before assigning it to the left hand side
var hoursInDay = 24;
var daysInWeek = 7;
var hoursInWeek = hoursInDay * daysInWeek; // 24 * 7 = 168 

// adding 1 to a variable we have already defined
a = a + 1;

// shortcuts
a += 2; // a = a + 2; also known as "plus equals"
a -= 2; // a = a - 2; also known as "minus equals"
a *= 2; // a = a * 2;
a /= 2; // a = a / 2;

// even shorter shortcuts
// incrementing and decrementing a variable by 1
a++; // a = a + 1;
++a; // a = a + 1;
a--; // a = a - 1;
--a; // a = a - 1;

// other things (out of scope for this class):
// order of operations e.g., var a = 12 + 3 * 4 - 4 / 2;