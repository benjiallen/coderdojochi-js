/*
Challenge:

Now we know how to draw basic shapes let's try to draw something!
Let's draw an "open mouth" smiley face. 

See examples here: http://unicode.org/emoji/charts/full-emoji-list.html#1f62e

Bonus: add some eye brows!
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

	// bonus eye brows
	// line(250, 230, 290, 240);
	// line(350, 230, 310, 240);
};