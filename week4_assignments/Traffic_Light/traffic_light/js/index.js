
// The getElementById() method returns the element that has the ID attribute with the specified value.
// I have to use the JS to get each elements id and then tell it on click to perform action
document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateYellow;
document.getElementById('goButton').onclick = illuminateGreen;

// perform illuminatedRed on click so it needs to clear the light and then on click itll change the bg color to red
function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

// perform illuminateYellow on click so it needs to clear the light and then on click itll change the bg color to yellow

function illuminateYellow() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}

// perform illuminateGreen on click so it needs to clear the light and then on click itll change the bg color to green


function illuminateGreen() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
}

//these functions tell it to change the bg color to black when a light is clicked

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}