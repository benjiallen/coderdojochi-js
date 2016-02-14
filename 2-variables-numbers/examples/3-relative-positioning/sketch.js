/*
We can use number variables to draw shapes at a position relative to another
shape. This makes it super easy to draw lots of the same drawing all over our
canvas.

Teacher notes: this is a lot easier to explain with a well annotated
white board sketch!

Learning outcomes:

1. We've been drawing our shapes in one place on our canvas. If we want to draw
   the same collection of shapes again at another place on the canvas then we
   have to work out all the x and y positions again. That takes time and we
   can do better!
2. We can use variables to solve this problem! First we need to pick a point
   in our drawing and draw all the other shapes in our drawing relative to that
   point. When we say "relative to that point" we mean "how far away is the
   point I'm trying to draw from the point I know?".
3. Once we have a drawing which is drawn relative to 1 point in the canvas then
   we only have to change that 1 point and the whole drawing will look great.

Exercise: draw a smiley face using relative positioning.
*/

// 1. define variables which describe the shape of our car
// 8. play around with values of (carX, carY) - see how we can change
//    this 1 point and then everything works great. Hooray for variables!
var carX = 100;
var carY = 300;
var carWidth = 200;
var carHeight = 100;
// 3. define the variables which describe the shape of our wheels
var wheelSize = 75;
// 6. define the variables which describe the shape of our windscreen
var windscreenWidth = 100;
var windscreenHeight = 50;

var setup = function() {
  	createCanvas(600, 600);
  	background(255, 255, 255);
};

var draw = function() {	
	// car
	// 2. draw the car using the variables we've created
	fill(255, 0, 0);
	noStroke();
	rect(carX, carY, carWidth, carHeight);
	
	// wheels of car
	fill(0, 0, 0);
	// 4. draw our left wheel relative to (carX, carY)
	// left wheel
	ellipse(carX, carY+carHeight, wheelSize, wheelSize);
	// 5. draw our right wheel relative to (carX, carY)
	// right wheel
	ellipse(carX+carWidth, carY+carHeight, wheelSize, wheelSize);

	// windscreen
	noFill();
	strokeWeight(1);
	stroke(0, 0, 0);
	// 7. draw the windscreen relative to (carX, carY)
	triangle(carX+carWidth, carY,
			 carX+carWidth-windscreenWidth, carY,
			 carX+carWidth-windscreenWidth, carY-windscreenHeight);
};