var setup = function() {
    createCanvas(600, 600);
    textSize(32);
};

var leftEyeX = 250;
var leftEyeY = 200;
var leftEyeCircleWidth = 100;
var leftRadius = leftEyeCircleWidth/2;
var rightEyeX = 350;
var rightEyeY = 200;
var rightEyeCircleWidth = 100;
var rightRadius = rightEyeCircleWidth/2;

var draw = function() {
    background(255);

    // face
    noStroke();
    fill(30, 30, 204);
    ellipse(300, 250, 400, 300);
    
    // eyes
    stroke(1);
    fill(255, 255, 255);
    ellipse(leftEyeX, leftEyeY,
            leftEyeCircleWidth, leftEyeCircleWidth);
    ellipse(rightEyeX, rightEyeY,
            rightEyeCircleWidth, rightEyeCircleWidth);

    // eye balls
    fill(0, 0, 0);
    drawEyeBall(leftEyeX, leftEyeY, leftRadius);
    drawEyeBall(rightEyeX, rightEyeY, rightRadius);

    // mouth
    fill(0, 0, 0);
    // http://p5js.org/reference/#/p5/arc
    arc(leftEyeX+leftRadius, leftEyeY+70, 350, 150, 0, PI, CHORD);

    rectMode(CENTER);
    textAlign(CENTER);
    text("Cookie Monster with wobbly eyes.\n\nMove your mouse!",
        300, 550, 500, 200);
};

var drawEyeBall = function(centerX, centerY, radius) {
    var eyeBallSize = 30;

    var xDiff = mouseX - centerX;
    var yDiff = mouseY - centerY;

    var hyp = sqrt(pow(xDiff, 2) + pow(yDiff, 2));
    
    var proportion = (radius-radius/2)/hyp;

    var xToFind = proportion * xDiff + centerX;
    var yToFind = proportion * yDiff + centerY;

    fill(0);
    ellipse(xToFind, yToFind, eyeBallSize, eyeBallSize);
}