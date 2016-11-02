
// NOTE:
// For this exercise we are not using CSS animation to rotate because we have not talked about it.
// However, if you want to try it, here is the demo:
// http://codepen.io/dangvanthanh/pen/Birzn
// Also, we will add the "The stop sign" function in class.

// STEP 1:
// Add a "click" listener to the run button; Adding a listener will happen
// once the whole page is loaded so you will use the $(document).ready(function(){})
// More info (and we will discuss in class) here: http://www.w3schools.com/jquery/event_ready.asp

// STEP 2:
// Write liftThigh function
// "Lift" the thigh by selecting it and using the animate function to change the width to
// 'heightOfLift' variable and the height to '50px'
// http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate

// STEP 3:
// Write liftShin function
// instead of width and height, use left and top animations
// http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation1

// Try and figure out the next two.

// STEP 4:
// Write setThighDown function

// STEP 5:
// Write setShinDown function


// BONUS: Can you write these functions more simply? Give it a try and bring your questions to class.

// running object moves quickly to move forward

var heightOfLift = 300;


// added a click listener to the document
$(document).ready(function(){
    $( "#run" ).on( "click", function() {
        console.log( "click woooo" );
        makeObjectWalk()
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

// object lifts body part step 2
function liftThighPart (bodypart, height){
console.log(bodypart, height)
  $("#jQueryThigh").animate({height: "50px", width: heightOfLift});
}

// object moves body part
function liftShinPart (distance){

}
// object sets body part down
function setThighDown (bodypart, height){

}
function setShinDown (bodypart, height){}



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

