/*
Challenge:

Now we know how to draw basic shapes let's try to draw something!
Let's draw a "open mouth" smiley face. 

See examples here: http://unicode.org/emoji/charts/full-emoji-list.html#1f62e
*/

var setup = function() {
  	createCanvas(600, 600);
};

var draw = function() {
	// use a circle as the face
	ellipse(300, 300, 200, 200);
	
	// eyes
	ellipse(270, 270, 50, 50);
	ellipse(330, 270, 50, 50);

	// mouth
	ellipse(300, 350, 50, 80);
};