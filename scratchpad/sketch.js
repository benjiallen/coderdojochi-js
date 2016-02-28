var setup = function() {
    createCanvas(300, 300);
    textSize(32);
};

var centerX = 120;
var centerY = 120;
var circleWidth = 100;
var radius = circleWidth/2;

var draw = function() {
    background(255);
    
    // eyes
    fill(255, 255, 255);
    ellipse(centerX, centerY, circleWidth, 100);

    // eye balls
    fill(0, 0, 0);
    ellipse(centerX, centerY, 20, 20);

    var xDiff = mouseX - centerX;
    var yDiff = mouseY - centerY;
    
    var hyp = sqrt(pow(xDiff, 2) + pow(yDiff, 2));
    
    var proportion = radius/hyp;

    var xToFind = proportion * xDiff + centerX;
    var yToFind = proportion * yDiff + centerY;

    fill(255, 0, 0);
    ellipse(xToFind, yToFind, 10, 10);
};

// calculate the gradient of the line based on
// the location of mouseX and mouseY
var calculateM = function(){
    relativeX = mouseX - centerX;
    relativeY = mouseY - centerY;
    return relativeY/relativeX;
};