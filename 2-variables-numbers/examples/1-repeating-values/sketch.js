/*
We can give values names and use these names in our programs. We call these
named values "variables". There are 3 steps to working with variables:

1. Declaring a variable
2. Assigning a value to a variable
3. Using a variable

Learning outcomes:

1. Programmers are lazy and they don't like repeating themselves. There are
   a few areas in our code where we do repeat ourselves and we want to change
   our code so we only have to change something in 1 place.
2. JavaScript lets you create "variables". Variables are names for values in
   your code. Let's create one called "faceSize". If you've ever done algebra
   at school then using variables will be familiar.
3. When we create a name for a value we have to use the special word "var" in
   front of our name. For example "var faceSize".
4. Giving variables "good" names is really important. Good names are names
   which are easy to understand. If your variables have good names then your
   code will be easier to understand. We could call "faceSize" something
   different like "fs". "faceSize" is easier to understand so it's a better
   name.
5. Our variable names have to start with a letter (not strictly true but
   good enough for a beginner lesson).
6. Once we've created our variables, given them good names and values then
   we can use them elsewhere in our code. We'll replace our values which 
   control the size of our face with our new variable "faceSize".

Exercise: 
*/

// 1. introduce faceSize, replace where necessary
// 8. Play with sizes! Original value 200
var faceSize = 400;
// 3. introduce eyeSize, replace where necessary
var eyeSize = 50;
// 5. introduce pupilSize, replace where necessary
// 9. Play with sizes! Original value 10
var pupilSize = 40;
// 4. introduce mouthWidth, replace where necessary
// 10. Play with sizes! Original value 50
var mouthWidth = 100;
// 6. introduce mouthHeight, replace where necessary
// 11. Play with sizes! Original value 80
var mouthHeight = 150;

var setup = function() {
  	createCanvas(600, 600);
};

var draw = function() {	
	// yellow face
	noStroke();
	fill(255, 255, 0);
	// 2. use the faceSize variable
	ellipse(300, 300, faceSize, faceSize);
	
	// black outline for my eyes
	strokeWeight(1);
	stroke(0, 0, 0);
	// white eyes
	fill(255, 255, 255);
	// eyes
	// 4. use the eyeSize variable
	ellipse(270, 270, eyeSize, eyeSize);
	ellipse(330, 270, eyeSize, eyeSize);

	// black pupils
	fill(0, 0, 0);
	// pupils
	// 5. use the pupilSize variable
	ellipse(270, 270, pupilSize, pupilSize);
	ellipse(330, 270, pupilSize, pupilSize);	

	// red mouth with blue outline
	fill(255, 0, 0);
	stroke(0, 0, 255);
	// mouth
	// 7. use the mouseWidth and mouthHeight variable
	ellipse(300, 350, mouthWidth, mouthHeight);

	// thick brown eye brows
	strokeWeight(10);
	stroke(116, 14, 1);
	// eye brows
	line(250, 230, 290, 240);
	line(350, 230, 310, 240);
};