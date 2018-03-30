// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Draw a line
function makeLine(col){
    let tr = "<tr>";
    let td = "<td></td>";
    for (let i = 1; i <=col; i++){
        tr = tr + td;
    }
    tr = tr + "</tr>";
    return tr;
}

function changeColor(){
    let color = $('#colorPicker').val();
    $(this).css("background-color",color);
}

// Draw the canvas
function makeGrid() {

    // remove the current drawings
    $("#pixelCanvas tr").remove();
    $("#pixelCanvas td").remove();

    let rows = $('#inputHeight').val();
    let cols = $('#inputWeight').val();

    let line = makeLine(cols);

    for(let row = 1; row <= rows; row++){
         $("#pixelCanvas").append(line);
    }

    $('#pixelCanvas').on('click','tr td', changeColor);
}


// Save the users drawing into a png picture
function saveCreation() {
    html2canvas(document.getElementById('pixelCanvas'), {
        onrendered: function(canvas) {
            Canvas2Image.saveAsPNG(canvas);
        },
    });
}

// Event Listeners
$('#submission').on('click', makeGrid);
$('#download').on('click', saveCreation);