/*
Challenge:

Now we know how to draw shapes and add color. Let's make our face a little more
interesting.

Let's add some nice white eyes and black pupils.

Bonus: customize your smiley. What crazy colors can you add to smiley? Go to
a color picker website and try to find the colors that you like. Add them to
your smiley.
*/

var setup = function() {
  	createCanvas(600, 600);
};

var draw = function() {
	// yellow face
	fill(255, 255, 0);
	// use a circle as the face
	ellipse(300, 300, 200, 200);
	
	// white eyes
	fill(255, 255, 255);
	// eyes
	ellipse(270, 270, 50, 50);
	ellipse(330, 270, 50, 50);

	// black pupils
	fill(0, 0, 0);
	// pupils
	ellipse(270, 270, 10, 10);
	ellipse(330, 270, 10, 10);	

	// red mouth
	fill(255, 0, 0);
	// mouth
	ellipse(300, 350, 50, 80);

	// eye brows
	line(250, 230, 290, 240);
	line(350, 230, 310, 240);
};