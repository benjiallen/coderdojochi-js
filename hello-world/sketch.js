/*
This is a really simple example and
illustrates a possible lesson in calling
functions, passing parameters and reading
documentation.
*/

var setup = function() {
  	createCanvas(300, 300);
  	noStroke();
};

var draw = function() {
	//face
	fill(255, 255, 0);
	ellipse(150, 150, 200, 200);

	//eyes
	fill(0, 0, 0);
	ellipse(120, 120, 20, 20);
	ellipse(180, 120, 20, 20);
  
	//mouth
	fill(255, 0, 0);
	// http://p5js.org/reference/#/p5/arc
	arc(150, 150, 80, 150, 0, PI, CHORD);
	// a simpler version of the smile could be achieved with a triangle or ellipse
};