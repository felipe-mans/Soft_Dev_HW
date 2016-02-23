var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var cl = document.getElementById("clear");

var x;
var y;
var counter = 0;

function setCoor(event) {

    if (counter == 1) {
	var x1 = x;
	var y1 = y;
    }

    x = event.clientX-9;
    y = event.clientY-70;

    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();    
    ctx.closePath();
 
    if (counter = 1) {	
	ctx.moveTo(x1,y1);
	ctx.beginPath();
	ctx.lineTo(x1,y1);
	ctx.lineTo(x,y);
	ctx.stroke();
	ctx.closePath();
    }
    
    if (counter == 0) {
	counter = 1;
    }
}

var empty = function empty() {
    ctx.clearRect(0,0,600,600);
    counter = 0;
}


c.addEventListener("click", setCoor);
cl.addEventListener("click", empty);
