// Select color input
// Select size input

/**
 * @desc create a grid of squares
 * @param int $width - number of squares representing the width of the grid
 * @param int $height - number of squares representing the height of the grid
 */

function makeGrid(height, width) {

    // Your code goes here!
    var html = "";
    for (var i = 0; i < height; i++) {
        html += "<tr>";
        for (var j = 0; j < width; j++) {
            html += "<td></td>";
        }
        html += "</tr>";
    }
    $("#pixel_canvas").html(html);
}
/**
 * @desc take the input from the user to decide how wide and the height of grid
 * gives user choice in color for drawing
 * also has it set up for the erase para
 */
$(function () {
    var height, width;
    $("#sizePicker").on('submit', function (event) {
        height = $("#input_height").val();
        width = $("#input_width").val();
        //console.log(height, width);
        event.preventDefault();
        makeGrid(height, width);
    });
    $("#pixel_canvas").on('click', 'td', function () {
        var color = $("#colorPicker").val();
        //console.log($(this).css("background-color"));
        if ($(this).css("background-color") == "#FFFFFF" || $(this).css("background-color") == "rgba(0, 0, 0, 0)" || $(this).css("background-color") == "rgb(255, 255, 255)") {
            $(this).css("background-color", color);
        } else {
            $(this).css("background-color", "#FFFFFF");
        }
    })


});
