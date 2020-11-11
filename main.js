var mouseEvent = "empty";
canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");
// For PC and Laptop Users
var last_position_of_x, last_position_of_y;
var color = "black";
var width_of_the_line = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouseEvent = "mouseDown";
    color = document.getElementById("color").value;
    width_of_the_line = document.getElementById("lineWidth").value;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseUp"
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseLeave"
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
 current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
 current_position_of_mouse_y = e.clientY - canvas.offsetTop; 

 if (mouseEvent == "mouseDown") {
     ctx.beginPath();
     ctx.strokeStyle = color;
     ctx.lineWidth = width_of_the_line;
     console.log("Last position of X and Y coordinates equal to");
     console.log("X = " + last_position_of_x + "Y =" + last_position_of_y);
     ctx.moveTo(last_position_of_x, last_position_of_y);
     
     console.log("Current position of X and Y coordinates equal to")
     console.log("X = " + current_position_of_mouse_x + "Y =" + current_position_of_mouse_y);

     ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
ctx.stroke();
 }
 last_position_of_x = current_position_of_mouse_x;
 last_position_of_y = current_position_of_mouse_y;
}
//For Mobile / Tablet users


var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var width = screen.width;
    var height = screen.height
    var new_width = width - 30;
    var new_height = height - 300; 
    if (width < 992) {
 document.getElementById("myCanvas").width = new_width;
 document.getElementById("myCanvas").height = new_height;
 
 document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        color = document.getElementById("textInputColor").value;
        width_of_line = document.getElementById("textInputWidth").value;
       last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
       last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }


    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x= e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }



