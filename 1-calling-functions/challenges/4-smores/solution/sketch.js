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
	line(100, 300, 500, 300);

	// brown chocolate
	// give me loads of chocolate!
	stroke(89, 53, 17);
	strokeWeight(40);
	line(100, 470, 500, 470);
	line(100, 270, 500, 270);

	// white marshmallow
	stroke(255, 255, 255);
	strokeWeight(140);
	line(100, 180, 500, 180);
	line(100, 380, 500, 380);

	// bonus - smores drawn with rect
	// noStroke();
	// // graham cracker
	// fill(225, 165, 14);
	// rect(100, 500, 400, 20);
	// rect(100, 100, 400, 20);
	// rect(100, 300, 400, 20);
	// // chocolate
	// fill(89, 53, 17);
	// rect(100, 460, 400, 40);
	// rect(100, 260, 400, 40);
	// // marshmallow
	// fill(255, 255, 255);
	// rect(100, 120, 400, 140);
	// rect(100, 320, 400, 140);
};