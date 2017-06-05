function zolly(){
  var val = document.getElementById("fovVal").value;
  var percent = (val - 0) / (100 - 0);
  var output = percent * (0 - 0.9) + 0.9;
  document.getElementById("cam").setAttribute("fov", val);
  document.getElementById("cam").setAttribute("zoom", output);
}

var angle = 0;
var sin = 0;
var scalar1 = 100;

function calcAngle(){
  //updates the sin wave
  sin = Math.sin(angle);
  
  //fov
  var sin1 = sin;
  var percent = (sin1 - 0) / (1 - 0);
  var fovRev = percent * (0 - 100) + 100;
 // console.log(fovRev);
  
  //zoom
  var sin2 = sin;
  var zoom = Math.abs(sin2);
 // console.log(zoom);
  
  document.getElementById("cam").setAttribute("fov", fovRev);
  document.getElementById("cam").setAttribute("zoom", zoom);  
}

function updateAngle() {
    //adder change  += to slow down
    setInterval(function(){angle += 0.001;}, 40);
    //calculates the new angle
    setInterval(calcAngle, 50);
    
}