var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var cl = document.getElementById("clear");

var growing = true;
var radius = 0;
var startDraw = document.getElementById("start");
var endDraw = document.getElementById("stop");

function drawDot() {

  ctx.clearRect(0,0,c.width,c.height);
  ctx.strokeRect(0,0,c.width,c.height);

  if (growing == true) {
    radius = radius + 1;
  }
  else {
    radius = radius-1;
  }

	if (radius >= (c.width/2)) {
		growing=false;
  }
	if (radius <= 0) {
		growing=true;
	}
	ctx.beginPath();
	ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
	ctx.stroke();
	ctx.fill();

  window.requestAnimationFrame( drawDot );
};

function stop() {
  ctx.clearRect(0,0,c.width,c.height);
  growing = false;
  radius = 0;
  window.cancelAnimationFrame(window.requestAnimationFrame( animate ) );
};

startDraw.addEventListener("click", drawDot);
endDraw.addEventListener("click", stop);