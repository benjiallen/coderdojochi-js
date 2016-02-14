/*
Animate the sun so it looks like a sunrise over Lake Michigan.

Bonus 1: make it look like sunset
Bonus 2: draw a shooting star going diagonally across the sky
Bonus 3: draw a boat and have that animate across the lake
*/

var sunX = 300;
var sunY = 400;
// bonus 1
// var sunY = 0;
var sunSize = 300;
var lakeWidth = 600;
var lakeHeight = 150;
var beachWidth = lakeWidth;
var beachHeight = lakeHeight;
// bonus 2
var starX = 0;
var starY = 0;
var starSize = 10;
// bonus 3
var boatX = 0;
var boatY = 350;
var boatWidth = 100;
var boatHeight = 30;
var boatOffset = 20;
var mastHeight = 40;
var sailWidth = 20;

var setup = function() {
  	createCanvas(600, 600);
};

var draw = function() {
	noStroke();
	background(255, 255, 255);

	// sun
	fill(237, 101, 27);
	sunY = sunY - 1;
	ellipse(sunX, sunY, sunSize, sunSize);

	// bonus 1: sunset
	// sunY = sunY + 1;
	// ellipse(sunX, sunY, sunSize, sunSize);

	// beach
	fill(237, 206, 27);
	rect(0, 450, lakeWidth, lakeHeight);

	// lake
	fill(0, 0, 255);
	rect(0, 300, beachWidth, beachHeight);

	// bonus 2: shooting star
	fill(200)
	starX = starX + 2;
	starY = starY + 1;
	ellipse(starX, starY, starSize, starSize);

	// bonus 3: boat
	fill(0, 0, 0);
	boatX = boatX + 2;
	quad(boatX, boatY,
		 boatX+boatWidth, boatY,
		 boatX+boatWidth-boatOffset, boatY+boatHeight,
		 boatX+boatOffset, boatY+boatHeight);
	fill(255, 0, 0)
	triangle(boatX+boatWidth/2, boatY,
			 boatX+boatWidth/2, boatY-mastHeight,
			 (boatX+boatWidth/2)+sailWidth, boatY-mastHeight/2);
};