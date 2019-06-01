requirejs.config({
    baseUrl: 'script',
});

// Start the main app logic.
requirejs(['jquery'],
function   ($) {
    console.log("downloaded")
	
	$("#text").click(function(){
    $("#input1").val("Hello Text");
	  });
	
	$("#html").click(function(){
		$("#input1").val("Hello HTML");
	  });

});