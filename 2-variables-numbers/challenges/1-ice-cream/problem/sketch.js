/*
Challenge:

Part 1: make an ice cream with 1 scoop. Use one variable to control the size of
		the scoop. Play around with making the scoop large and small.

Part 2: make an ice cream with 3 scoops. Use one variable to control the size
		of all 3 scoops.

Bonus: use 3 variables, one for each scoop. Play with different sizes of scoop.
*/

var setup = function() {
  	createCanvas(600, 600);
  	noStroke();
};

var draw = function() {
	// cone
	fill(225, 165, 14);
	triangle(250, 350, 350, 350, 300, 500 );
};