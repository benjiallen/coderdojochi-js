/*
This is just to show a visual representation of a grid
to make the concept clear to students. We could consider
wrapping the tooltip around the other examples so they always
have that, even if the grid itself isn't displayed.

Have to include p5 DOM library for this to work.
*/

var tooltip;

var setup = function() {
  	createCanvas(300, 300);
    tooltip = createDiv('<b>X:</b> 0<br><b>Y:</b> 0')
      .id('tooltip')
      .size(55, 40)
      .style('background-color','lightgrey')
      .style('border-radius', '5px')
      .style('font-family', 'Verdana')
      .style('padding', '5px');
};

var draw = function() {
  // Get greater number of width and height to set bound for grid drawing
  var canvasBound;
  if (width === height) {
    canvasBound = width;
  }
  else if (width > height) {
    canvasBound = width;
  }
  else {
    canvasBound = height;
  }

	for (var i = 0; i <= canvasBound; i += 10) {
    line(i, height, i, 0);
    stroke(0);
    line(width, i, 0, i);
    stroke(0);
  }
  // Re-draw the tooltip with current mouse x and y locations printed
  tooltip.html('<b>X:</b> ' + mouseX + '<br>' + ' <b>Y:</b> ' + mouseY);

  // Just spacing out the tooltip to where it makes most sense
  tooltip.position(mouseX + 15, mouseY - 55);

  // Check if mouse is outside canvas bounds, hide/show depending
  if (mouseX > width || mouseY > height) {
    tooltip.hide();
  }
  else {
    tooltip.show();
  }
};
