// $(document).ready(function(){
//     $( "#run" ).on( "click", function() {
//     	thighwidth = $("#jQueryThigh").width();
// 		thighheight = $("#jQueryThigh").height();
// 	$("#jQueryLeg").toggleClass("rotate");
//         console.log( "click woo" );
//         makeObjectWalk();

//     });
// });



// When read more is clicked in the article the rest of the paragraph is shown
$(document).ready(function(){

	$(".readmore").click(function(){
	console.log("weee");
	$(".readmore").hide();
	$(".readless").show();
	$("#show-this-on-click").slideDown("slow");

	});

	$(".readless").click(function(){
	console.log("blah");
	$(".readmore").show();
	$(".readless").hide();
	$("#show-this-on-click").slideUp("slow");

	});


// Part of code that expands/contracts the sidebar info

	$(".learnmore").click(function(){
	console.log("boooo");
	$(".learnmore").hide();
	$("#show-this-on-click").slideDown("slow");

	});



});