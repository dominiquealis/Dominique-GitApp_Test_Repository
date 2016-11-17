

// When read more is clicked in the article the rest of the paragraph is shown
$(document).ready(function(){

	$(".readmore, .readless, .learnmore").click(function(event){
	event.preventDefault();
	});

	$(".readmore").click(function(){
	$(".readmore").hide();
	$(".readless").show();
	$("#show-this-on-click").slideDown("fast");

	});

	$(".readless").click(function(){
	$(".readmore").show();
	$(".readless").hide();
	$("#show-this-on-click").slideUp("fast");

	});


// Part of code that expands/contracts the sidebar info

	$(".learnmore").click(function(){
	$(".learnmore").hide();
	$("#learnmoretext").slideDown("fast");

	});



});