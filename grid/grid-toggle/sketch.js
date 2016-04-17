/*
Draw a grid when a checkbox is checked.
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
    canvas.mouseMoved(showToolTip);
};

// function called with checkbox changes state
var showGrid = function() {
    if (this.checked()) {
        push();
        // TODO(ballen): update so it works when the canvas is not a square
        for(var i = 0; i<width; i+=20){
            line(i, 0, i, height);
            line(0, i, width, i);
        }
        pop();
    } else {
        push();
        stroke(255);
        for(var i = 0; i<width; i+=20){
            line(i, 0, i, height);
            line(0, i, width, i);
        }
        pop();
    }
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
        // Just spacing out the tooltip to where it makes most sense
        tooltip.position(mouseX + 15, mouseY - 55);
        tooltip.show();
    }
};