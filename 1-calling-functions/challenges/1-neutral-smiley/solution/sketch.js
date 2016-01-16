/*
Challenge:

Now we know how to draw basic shapes let's try to draw something!
Let's draw a "neutral" smiley face. 
See examples here: http://unicode.org/emoji/charts/full-emoji-list.html#1f610

Bonus: how could we add 2 front teeth to our smiley?
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
	line(220, 330, 380, 330);

	// Bonus - 2 front teeth
	// rect(270, 330, 30, 50);
	// rect(300, 330, 30, 50); 
};