var c = document.getElementById("ftb2maga");
var ctx = c.getContext("2d");
ctx.fillStyle = "#99ff99";
ctx.fillRect (0,0,538,538);
ctx.strokeStyle="#ff0000";
ctx.strokeRect(100,50,300,200);

//Move to point x=200, y=100
ctx.moveTo(200,100); 
ctx.beginPath();
//Draw three lines
ctx.lineTo(200,100);
ctx.lineTo(185,115);
ctx.lineTo(215,115);
ctx.lineTo(200,100);
ctx.stroke();
//Set color to red
ctx.fillStyle = "red";
//Fill in the triangle outlined by the three lines
ctx.fill();
ctx.closePath();

//Repeat previous steps, but starting at point x=300, y=100
ctx.moveTo(300,100);
ctx.beginPath();
ctx.lineTo(300,100);
ctx.lineTo(285,115);
ctx.lineTo(315,115);
ctx.lineTo(300,100);
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

//Time to draw a smiley face
ctx.moveTo(200,175);
ctx.beginPath();
ctx.lineTo(200,175);
ctx.lineTo(300,175);
ctx.stroke();
ctx.closePath();

//Complete the mouth of the smiley face
ctx.beginPath();
ctx.arc(250,175,50,0,1*Math.PI);
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();

//Set font type to Arial with a height of 30px
ctx.font = "30px Arial";
//Set font color to purple
ctx.fillStyle = "purple";
ctx.fillText("I hope you enjoy the picture!",65,325);

