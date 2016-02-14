/*
Draw a smiley face relative to the center of the face.

Once you've completed the challenge. Change the values of faceX and faceY.
Does your drawing still look right?
*/

var faceX = 300;
var faceY = 300;
var faceSize = 200;
var eyeSize = 50;
var pupilSize = 10;
var mouthWidth = 50;
var mouthHeight = 80;

var setup = function() {
  	createCanvas(600, 600);
};

var draw = function() {
	noStroke();
	strokeWeight(1);

	// yellow face
	fill(255, 255, 0);
	ellipse(300, 300, faceSize, faceSize);
	
	stroke(0, 0, 0);
	// white eyes
	fill(255, 255, 255);
	// eyes
	ellipse(270, 270, eyeSize, eyeSize);
	ellipse(330, 270, eyeSize, eyeSize);

	// black pupils
	fill(0, 0, 0);
	// pupils
	ellipse(270, 270, pupilSize, pupilSize);
	ellipse(330, 270, pupilSize, pupilSize);	

	// red mouth
	fill(255, 0, 0);
	// mouth
	ellipse(300, 350, mouthWidth, mouthHeight);
};