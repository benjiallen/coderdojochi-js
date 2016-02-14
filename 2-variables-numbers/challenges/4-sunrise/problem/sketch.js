/*
Animate the sun so it looks like a sunrise over Lake Michigan.

Bonus 1: make it look like sunset
Bonus 2: draw a shooting star going diagonally across the sky
Bonus 3: draw a boat and have that animate across the lake
*/

var sunX = 300;
var sunY = 400;
var sunSize = 300;
var lakeWidth = 600;
var lakeHeight = 150;
var beachWidth = lakeWidth;
var beachHeight = lakeHeight;

var setup = function() {
  	createCanvas(600, 600);
};

var draw = function() {
	noStroke();
	background(255, 255, 255);

	// sun
	fill(237, 101, 27);
	ellipse(sunX, sunY, sunSize, sunSize);

	// beach
	fill(237, 206, 27);
	rect(0, 450, lakeWidth, lakeHeight);

	// lake
	fill(0, 0, 255);
	rect(0, 300, beachWidth, beachHeight);
};