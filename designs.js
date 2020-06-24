// Select color input
// Select size input

var color, height, width;

// When size is submitted by the user, call makeGrid()

$("#sizePicker").submit(function (event) {
    event.preventDefault();    //since default value is 1 and 1.
    height = $("#inputHeight").val();
    width = $("#inputWidth").val();
    makeGrid(height, width);

    //check whether above functionality is working or not.
    //console.log("Height: "+height+" Width: "+width);
})

function makeGrid(x, y) {    //x: height/row and y: width/column
//When we click the submit button, and there was already a grid present there, will be cleared first.
$("tr").remove();

// Your code goes here!
for (var i = 1; i <= x; i++) {
    //for deciding the height of the table.
    $("#pixelCanvas").append("<tr id=table" + i + "></tr>");
    //for deciding the width of the table or grid.
    for (var j = 1; j <= y; j++) {
        $("#table" + i).append("<td></td>");
    }
}
//Adding the color to the cells of the table.
$("td").click(function addColor() {
color = $("#colorPicker").val();

//if there is already a grid filled with color, on clicking submit button, it will be cleared.
if ($(this).attr("style")) {
    $(this).removeAttr("style");
}
else {
    $(this).attr("style", "background-color:" +color);
}
})
}
