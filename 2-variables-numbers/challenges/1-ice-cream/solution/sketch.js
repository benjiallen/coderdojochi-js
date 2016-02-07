/*
Challenge:

Part 1: make an ice cream with 1 scoop. Use one variable to control the size of
		the scoop. Play around with making the scoop large and small.

Part 2: make an ice cream with 3 scoops. Use one variable to control the size
		of all 3 scoops.

Bonus: use 3 variables, one for each scoop. Play with different sizes of scoop.
*/

var scoopSize = 100;

// bonus
// var chocScoopSize = 150;
// var strawberryScoopSize = 110;
// var vanillaScoopSize = 70;

var setup = function() {
  	createCanvas(600, 600);
  	noStroke();
};

var draw = function() {
	// cone
	fill(225, 165, 14);
	triangle(250, 350, 350, 350, 300, 500);

	// chocolate
	fill(76, 40, 9);
	ellipse(300, 350, scoopSize, scoopSize);
	// strawberry
	fill(246, 118, 79);
	ellipse(300, 300, scoopSize, scoopSize);
	// vanilla
	fill(247, 246, 165);
	ellipse(300, 250, scoopSize, scoopSize);

	// bonus
	// cone
	// fill(225, 165, 14);
	// triangle(50, 350, 150, 350, 100, 500);

	// // chocolate
	// fill(76, 40, 9);
	// ellipse(100, 350, chocScoopSize, chocScoopSize);
	// // strawberry
	// fill(246, 118, 79);
	// ellipse(100, 300, strawberryScoopSize, strawberryScoopSize);
	// // vanilla
	// fill(247, 246, 165);
	// ellipse(100, 250, vanillaScoopSize, vanillaScoopSize);
};