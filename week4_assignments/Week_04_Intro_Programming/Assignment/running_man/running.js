
// NOTE:
// For this exercise we are not using CSS animation to rotate because we have not talked about it.
// However, if you want to try it, here is the demo:
// http://codepen.io/dangvanthanh/pen/Birzn
// Also, we will add the "The stop sign" function in class.

// STEP 1:
// Use jQuery to select the jQueryLeg and apply our "makeObjectRun" function.
// Examples of selecting elements and calling a function:
// http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_id

// STEP 2:
// Pass in a start, destination, and speed value of (0, 100, 'slow') to the "makeObjectWalk" function.
// http://www.w3schools.com/js/js_function_parameters.asp

// STEP 3:
// Write liftThigh function
// "Lift" the thigh by using the animate function to change the width to
// 'heightOfLift' variable and the height to '50px'
// http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate

// STEP 4:
// Write liftShin function

// STEP 5:
// Write setThighDown function

// STEP 6:
// Write setSHinDown function

// STEP 7:
// Add a "click" listener to the run button; Adding a listener will happen
// once the whole page is loaded so you will use the $(document).ready(function(){})
// More info (and we will discuss in class) here: http://www.w3schools.com/jquery/event_ready.asp

// BONUS: Can you write these functions more simply? Give it a try and bring your questions to class.

// running object moves quickly to move forward
var heightOfLift = 300;

$(document).ready(function(){
    $("#run").click(function(){
        makeObjectWalk(0, 100, 'slow');
    });

});

// function makeObjectRun(start, destination, speed){
//  liftThighPart();
//  liftShinPart();
//  setThighDown();
//  setShinDown();
// }

function makeObjectWalk (start, destination, speed){
  liftThighPart();
  liftShinPart();
  setThighDown();
  setShinDown();
}

function makeObjectStop () {

}

// object lifts body part
function liftThighPart (bodypart, height){

}
// object moves body part
function liftShin (distance){
  $("#jQueryShin").animate({left: heightOfLift, bottom:-(heightOfLift)}, 'slow').delay(2000);
}
// object sets body part down
function setThighDown (bodypart, height){
  $("#jQueryThigh").animate({height: heightOfLift, width: '50px'}, 'slow');
}
function setShinDown (bodypart, height){
  $("#jQueryShin").animate({left: '0px', bottom:-(heightOfLift)}, 'slow');
}


// mother may i function
// WE WILL DO THIS ON IN CLASS
// function motherMayI (stopSign){
//   if (stopSign == "yellow"){
//     makeObjectWalk(0, 50, "slow");
//   }
//   if (stopSign == "green"){
//     makeObjectRun(0, 100, "superFast")
//   }
//   if (stopSign == "red"){
//     makeObjectStop();
//   }
// }

