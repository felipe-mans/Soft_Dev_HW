//El canvas
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var cl = document.getElementById("clear");

//El DVD logo
var logo = new Image();
logo.src = "logo_dvd.jpg";

//Los Buttons
var startDraw = document.getElementById("start");
var endDraw = document.getElementById("stop");
var deevdee = document.getElementById("deevdee");

//Los Global Variables
var requestID;
var counter = 0;
var growing = true;
var radius = 0;
var dx = 214;
var dy = 239;
var down = true;
var right = true;

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
  counter = counter + 1;
  if (counter > 1)
    window.cancelAnimationFrame(requestID);

  ctx.clearRect(0,0,c.width, c.height);
  if (dy <= 0)
    down = true;
  else if (dy >= c.height - 50)
    down = false;

  if (dx <= 0)
    right = true;
  else if (dx >= c.width - 100)
    right = false;

  if (down)
    dy += Math.random() + 1;

  else
    dy -= Math.random() + 1;

  if (right)
    dx += Math.random() + 1;

  else
    dx -= Math.random() + 1;

  ctx.beginPath();
  ctx.drawImage(logo, dx, dy, 100, 50);
  requestID = window.requestAnimationFrame(dvd);
};

startDraw.addEventListener("click", drawDot);
endDraw.addEventListener("click", stop);
deevdee.addEventListener("click", dvd);
