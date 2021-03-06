//El canvas
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var cl = document.getElementById("clear");

//El DVD logo
var logo = new Image();
logo.src = "filename";

//Los Buttons
var startDraw = document.getElementById("start");
var endDraw = document.getElementById("stop");
var deevdee = document.getElementById("deevdee");

//Los Global Variables
var requestID;
var counter = 0;
var growing = true;
var radius = 0;

function drawDot() {

  counter = counter + 1;

  //Will cancel any previous requestAnimationFrame if start clicked more than once
  //Animation will not speed up
  if (counter > 1)
    window.cancelAnimationFrame(requestID);

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

  requestID = window.requestAnimationFrame( drawDot );
};

function stop() {
  ctx.clearRect(0,0,c.width,c.height);
  growing = true;
  radius = 0;
  counter = 0;
  window.cancelAnimationFrame(requestID);
};

function dvd() {


};

startDraw.addEventListener("click", drawDot);
endDraw.addEventListener("click", stop);
deevdee.addEventListener("click", dvd);
