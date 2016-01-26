/*
Learn how to add color to shapes with RGB color.

Learning outcomes:

1. There are lots of ways to represent color in a computer. One common way is 
   called "Red Green Blue" or "RGB" for short. We tell the computer how much 
   red, how much blue and how much green we want. The computer figures out the 
   color that we've made.
2. The range for red, green and blue starts at 0 and ends at 255. For example:
   red = 0 means "I don't want to include any red" and red = 255 means "I want
   to include all the red".
3. There are lots of websites that help you find the RGB values for colors you
   like. For example: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool
4. Handy values which get used a lot:
   Black = fill(0, 0, 0);
   White = fill(255, 255, 255);
   Red = fill(255, 0, 0);
   Green = fill(0, 255, 0);
   Blue = fill(0, 0, 255);
   Yellow = fill(255, 255, 0);
5. Selecting a color is like selecting a marker. Once you have selected it then
   everything you draw is in that color until you select another color.
*/

var setup = function() {
  	createCanvas(600, 600);
};

var draw = function() {
	// 1. Add some color to our shapes
	fill(255, 255, 0);
	
	// use a circle as the face
	ellipse(300, 300, 200, 200);
	
	// eyes
	ellipse(270, 270, 50, 50);
	ellipse(330, 270, 50, 50);

	// 2. Nice red mouth
	fill(255, 0, 0);
	// mouth
	ellipse(300, 350, 50, 80);

	// eye brows
	line(250, 230, 290, 240);
	line(350, 230, 310, 240);
};