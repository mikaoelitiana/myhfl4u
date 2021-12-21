$(document).ready(function () {
  // Give the right width for the nav button
  var w = jQuery("body").width();
  jQuery('.full').css("width", w - 170);
  
  // Add pages for parallax
	parallax
	  .add($("#home"))
	  .add($("#page1"))
	  .add($("#page2"))
	  .add($("#page3"))
	  .add($("#page4"))
	  .add($("#page5"))
	  .add($("#youpi"))
	  .add($("#sad"))
	  .add($("#not_ready"));

			
	// Display homepage
	parallax.home.show();
	
	// Go to page 1 
	$("#home .yes").click(function() {
	  parallax.page1.bottom();
	});
			
	//Click not ready
	$(".nav .no").click(function() {
	  parallax.not_ready.left();
	});
	
	// click next
	$(".nav .next").click(function(){
	  var rel = parseInt($(this).parent('.nav').attr('rel'));
	  var next = "page" + (rel + 1);
	  parallax[next].bottom();
	});
	
	// click back
	$(".nav .back").click(function(){
	  var rel = parseInt($(this).parent('.nav').attr('rel'));
	  var back = "page" + (rel - 1);
	  parallax[back].top();
	});	  
	
	// Click home link
	$(".nav .home").click(function(){
	  parallax.home.right();
	});	

	// Go to page 1 
	$(".nav .yes-i-do").click(function() {
	  parallax.youpi.right();
	});
			
	//Click not ready
	$(".nav .no-i-wont").click(function() {
	  parallax.sad.left();
	});  
});
