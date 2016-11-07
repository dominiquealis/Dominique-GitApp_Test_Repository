
// example grabbed from w3schools


$(function() {
    $("#answer1,#answer2,#answer3").hide()
});



$("h2").click(function(){
    $("p").toggle();
    console.log('yes');
});



// $("#question1").on("click",function(){
//     $("#answer1").show();
//     console.log(woo);
// });



// // object lifts body part
// function liftThighPart (bodypart, height){

//  console.log(thighwidth);
//  console.log(thighheight);
//  $("#jQueryThigh").width(thighheight).delay(2000);
//  $("#jQueryThigh").height(thighwidth).delay(2000);
// }



// $('#sub1').click(function(){
// 	addTotal(-1);
// 	console.log('click');
// });
