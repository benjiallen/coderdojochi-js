/*
Learn how to remove, draw and color outlines. Understand what makes draw and 
setup so special.

Learning outcomes:

1. When working with computer graphics outlines are called "strokes".
2. We can tell the computer to draw our shapes with no outlines or we can
   tell the computer to color in our shape outlines using RGB color.
3. When working with computer graphics the thickness of lines and outlines is 
   often referred to as "weight". You may have seen this term in your CSS class.
4. The weight of outlines is measured in pixels.
5. The "draw" function is a really special function. It runs over and over
   again. This let's us do really cool things like animation. We'll learn
   more about this later!
6. The "setup" function is also special but it only gets run once.

Exercise: Coding is easy, I want smore!
*/

var setup = function() {
  	createCanvas(600, 600);
};

var draw = function() {
	// 1. remove the outline around my yellow face
	// notice how much this changes my smiley!
	// where are my eye brows?
	noStroke();

	// 5. need to reset the stroke weight
	// this ends up being a great time to talk about why the draw function
	// is a special function!
	strokeWeight(1);

	// yellow face
	fill(255, 255, 0);
	// use a circle as the face
	ellipse(300, 300, 200, 200);
	
	// 2. add a black outline to my eyes
	stroke(0, 0, 0);

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

	// 3. change the color of the outline for my mouth
	stroke(0, 0, 255);
	
	// red mouth
	fill(255, 0, 0);
	// mouth
	ellipse(300, 350, 50, 80);

	// 4. give my smiley thick eye brows
	strokeWeight(10);
	stroke(116, 14, 1);

	// eye brows
	line(250, 230, 290, 240);
	line(350, 230, 310, 240);
};