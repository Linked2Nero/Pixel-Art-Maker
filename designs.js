// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

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
