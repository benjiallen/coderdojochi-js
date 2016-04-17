/*
Draw a grid and show a tooltip when a checkbox is checked.

Useful docs:
http://p5js.org/reference/#/libraries/p5.dom
http://p5js.org/reference/#/p5/createCheckbox
*/

var tooltip;
var checkbox;
var canvas;

var setup = function() {
    canvas = createCanvas(600, 600);
    gridSetup();
};

var draw = function() {
    // line
    line(0, 0, 600, 600);

    // circle
    ellipse(300, 300, 200, 200);

    // rectangle
    rect(300, 300, 200, 200);
};

var gridSetup = function() {
    checkbox = createCheckbox('Show grid', false);
    checkbox.changed(showGrid);
    tooltip = createDiv('<b>X:</b> 0<br><b>Y:</b> 0')
      .id('tooltip')
      .size(55, 40)
      .style('background-color','lightgrey')
      .style('border-radius', '5px')
      .style('font-family', 'Verdana')
      .style('padding', '5px');
    tooltip.hide();
    canvas.mouseMoved(showToolTip);
};

// function called with checkbox changes state
var showGrid = function() {
    if (this.checked()) {
        drawGrid(0);
    } else {
        // draw over the grid in white
        // TODO(ballen): need to work out how to get the background color
        // redraw the grid with the background color
        drawGrid(255);
    }
};

var drawGrid = function(strokeColor) {
    push();
    stroke(strokeColor)
    for(var i = 0; i<width; i+=20){
        line(i, 0, i, height);
    }
    for(var i = 0; i<height; i+=20){
        line(0, i, width, i);
    }
    pop();
};

// function called when user is hovering over the canvas
var showToolTip = function() {
    // Check if mouse is outside canvas bounds and check the state of
    // the checkbox, hide if the mouse is out of bounds or checkbox
    // is unchecked.
    if (mouseX > width || mouseY > height || !checkbox.checked()) {
        tooltip.hide();
    }
    else {
        // Re-draw the tooltip with current mouse x and y locations printed
        tooltip.html('<b>X:</b> ' + mouseX + '<br>' + ' <b>Y:</b> ' + mouseY);
        // working out if the tooltip should be below or above the mouse pointer
        var yPos = 0;
        if(mouseY > height/2){
            yPos = mouseY - 55;
        }
        else {
            yPos = mouseY + 55;
        }
        // Just spacing out the tooltip to where it makes most sense
        tooltip.position(mouseX + 15, yPos);
        tooltip.show();
    }
};