var setup = function() {
    createCanvas(300, 300);
    textSize(32);
};

var leftEyeX = 120;
var leftEyeY = 120;
var leftEyeCircleWidth = 100;
var leftRadius = leftEyeCircleWidth/2;
var rightEyeX = 220;
var rightEyeY = 120;
var rightEyeCircleWidth = 100;
var rightRadius = rightEyeCircleWidth/2;

var draw = function() {
    background(255);
    
    // eyes
    fill(255, 255, 255);
    ellipse(leftEyeX, leftEyeY,
            leftEyeCircleWidth, leftEyeCircleWidth);
    ellipse(rightEyeX, rightEyeY,
            rightEyeCircleWidth, rightEyeCircleWidth);

    // eye balls
    fill(0, 0, 0);
    drawEyeBall(leftEyeX, leftEyeY, leftRadius);
    drawEyeBall(rightEyeX, rightEyeY, rightRadius);
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