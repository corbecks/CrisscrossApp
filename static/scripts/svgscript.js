
SVG.on(document, 'DOMContentLoaded', function() {
    
    var minorGridSize = 10; // size of the grid squares
    var majorGridSize = 5*minorGridSize;
    var width = document.getElementById('svg-container').getBoundingClientRect().width
    var height = document.getElementById('svg-container').getBoundingClientRect().height
    
    console.log(height)
    console.log(width)
    var draw = SVG().addTo('#svg-container').size(width, height)
    
    draw.rect(100,100).attr({fill: '#f00'}).move(0.25*width,0.25*height)

    draw.rect(100,100).attr({fill: '#ff0'}).move(0.5*width,0.5*height)


    
    
 
    
    // Draw vertical lines
    for (var x = -width; x < width; x += minorGridSize) {
        draw.line(x, -height, x, height).stroke({ width: 0.5, color:'#000' })
    }

    // Draw horizontal lines
    for (var y = -height; y < height; y += minorGridSize) {
        draw.line(-width, y, width, y).stroke({ width: 0.5, color:'#000' })
    }


    // Draw vertical lines
    for (var x = -width; x < width; x += majorGridSize) {
        draw.line(x, -height, x, height).stroke({ width: 1, color:'#000' })
    }

    // Draw horizontal lines
    for (var y = -height; y < height; y += majorGridSize) {
        draw.line(-width, y, width, y).stroke({ width: 1, color:'#000' })
    }


    const svgcontainer = document.getElementById('svg-container')
    const panzoom = Panzoom(svgcontainer, {
        maxScale: 5,
        minScale: 0.5,
        //pinchAndPan: true,
        contain: "outside"
      })
    
    panzoom.zoom(2)

    //panzoom.pan(0.5*width, 0.5*height)


    svgcontainer.parentElement.addEventListener('wheel', panzoom.zoomWithWheel)


  })
    
    










    
    /*
    

*/

    





    //var rect = draw.rect(300, 300).fill(pattern1).move(100,100);
    //rect.fill(pattern)


    /* 

    // Create a group for the grid and other elements
    var gridGroup = draw.group();

    // Function to create the grid
    function createGrid() {
        var gridSize = 50; // size of the grid squares
        var width = draw.width();
        var height = draw.height();

        // Draw vertical lines
        for (var x = 0; x < width; x += gridSize) {
            gridGroup.line(x, 0, x, height).stroke({ width: 5, color:'#000000' });
        }

        // Draw horizontal lines
        for (var y = 0; y < height; y += gridSize) {
            gridGroup.line(0, y, width, y).stroke({ width: 5, color: '#000000' });
        }
    }

    // Create the grid
    createGrid();

    // Add other SVG elements if needed
    var rect = gridGroup.rect(100, 100).move(200, 200).fill('#f06');

    // Initialize Panzoom
    var panZoom = Panzoom(draw.node, {
        contain: 'outside',
        minScale: 0.5,
        maxScale: 4
    });

    // Make the SVG container zoomable and pannable
    draw.on('wheel', function(event) {
        if (event.ctrlKey) {
            event.preventDefault();
            panZoom.zoomWithWheel(event);
        }
    });

    // Prevent the default behavior of the mouse down event
    draw.on('mousedown', function(event) {
        event.preventDefault();
    });

    // Enable panning on mouse drag
    draw.on('mousemove', function(event) {
        if (event.buttons === 1) { // If left mouse button is held down
            panZoom.pan(event.movementX, event.movementY);
        }
    });

*/
