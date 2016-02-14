/*
Draw a smiley face relative to the center of the face.

Once you've completed the challenge. Change the values of faceX and faceY.
Does your drawing still look right?
*/

var faceX = 300;
var faceY = 300;
var faceSize = 200;
var eyeLeftX = faceX - 30;
var eyeRightX = faceX + 30;
var eyeY = faceY - 30;
var eyeSize = 50;
var pupilSize = 10;
var mouthX = faceX;
var mouthY = faceY + 50;
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
	ellipse(faceX, faceY, faceSize, faceSize);
	
	stroke(0, 0, 0);
	// white eyes
	fill(255, 255, 255);
	// eyes
	ellipse(eyeLeftX, eyeY, eyeSize, eyeSize);
	ellipse(eyeRightX, eyeY, eyeSize, eyeSize);

	// black pupils
	fill(0, 0, 0);
	// pupils
	ellipse(eyeLeftX, eyeY, pupilSize, pupilSize);
	ellipse(eyeRightX, eyeY, pupilSize, pupilSize);	

	// red mouth
	fill(255, 0, 0);
	// mouth
	ellipse(mouthX, mouthY, mouthWidth, mouthHeight);
};