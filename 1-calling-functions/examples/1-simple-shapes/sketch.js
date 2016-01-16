/*
Our first example!

Learning outcomes:

1. There are 2 special "functions" we need to create every time to get us 
   started. 1 is called "setup" and the other is called "draw". 
2. Our picture frame is called a "canvas". We need to tell the computer how
   big we want our picture frame.
3. We always put our "createCanvas" command in the "setup" function.
3. Canvas is a little bit different to axis we've seen at school. X and Y start
   at the top left corner of the screen.
4. We can tell the computer to draw different shapes with special commands
   called "functions".
5. We put all our drawing commands in the "draw" function.
6. Shapes can overlap.
*/

var setup = function() {
  	createCanvas(600, 600);
};

var draw = function() {
	// line
	line(0, 0, 600, 600);

	// circle
	ellipse(300, 300, 200, 200);

	// rectangle
	rect(300, 300, 200, 200);
};