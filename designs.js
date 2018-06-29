// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
// Your code goes here!
let width, height, color;
$('#sizePicker').submit(function (event) {
event.preventDefault();
width=$('#inputWeight').val();
height= $('#inputHeight').val();
makeGrid(height, width);
});
function makeGrid(x, y) {
    $('tr').remove();
    for(let i=1; i<=x; i++) {
        $('#pixelCanvas').append('<tr id =table' + i + '></tr>');
        for(let j=1; j<=y; j++) {
            $('#table' + i).append('<td></td>');
        }
    }
    $('td').click(function addColor() {
    color= $('#colorPicker').val();
        if ($(this).attr('style')) {
        $(this).removeAttr();
        }  else {
        $(this).attr('style', 'background-color:' + color);
        }
    });
}
