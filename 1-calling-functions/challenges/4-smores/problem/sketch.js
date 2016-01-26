/*
Challenge:

Now we know how to draw outlines, color them and control their thickness.
Let's draw a smore by only using line(), stroke() and strokeWeight().

I think this might be the perfect smore!
http://www.puremadnesschocolate.com/media/wysiwyg/chocolate_smores_blog.jpg

Bonus: make some more smores but this time use rect()
*/

var setup = function() {
  	createCanvas(600, 600);
  	background(45, 215, 130);
};

var draw = function() {
	// yellow Graham cracker
	stroke(225, 165, 14);
	strokeWeight(20);
	line(100, 500, 500, 500);
	line(100, 100, 500, 100);
};