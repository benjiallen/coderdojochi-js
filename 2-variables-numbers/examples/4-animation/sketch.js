/*
Draw is a special function because it runs over and over. When we change points
in our drawing within the "draw" function then our drawings will animate.

Learning outcomes:

1. The "draw" function is a really special function. It runs over and over
   again. This let's us do really cool things like animation. In programming,
   when we make our code run over and over we call this a "loop".
2. The "setup" function is also special but it only gets run once.
3. To make shapes move across our canvas we need to change the value of the
   variable which tells the computer where to draw our shape. We need to do
   this within the "draw" function. Each time around the loop the value changes
   and this is what gives us the animation.

Exercise: sunrise over Lake Michigan!
*/

var carX = 100;
var carY = 300;
var carWidth = 200;
var carHeight = 100;
var wheelSize = 75;
var windscreenWidth = 100;
var windscreenHeight = 50;

var setup = function() {
  	createCanvas(600, 600);
};

// 1. talk about why draw is special
var draw = function() {	
	// 3. Add background and explain why this is important
	background(255, 255, 255);
	// car
	fill(255, 0, 0);
	noStroke();
	// 2. change the position of the car - what happens?
	// 4. what happens if I change the amount I add to carX?
	// 5. can you remember the shorthand for incrementing and decrementing?
	// 6. what happens if we change the plus to a minus?
	carX = carX + 1;
	rect(carX, carY, carWidth, carHeight);
	
	// wheels of car
	fill(0, 0, 0);
	// left wheel
	ellipse(carX, carY+carHeight, wheelSize, wheelSize);
	// right wheel
	ellipse(carX+carWidth, carY+carHeight, wheelSize, wheelSize);

	// windscreen
	noFill();
	strokeWeight(1);
	stroke(0, 0, 0);
	triangle(carX+carWidth, carY,
			 carX+carWidth-windscreenWidth, carY,
			 carX+carWidth-windscreenWidth, carY-windscreenHeight);
};