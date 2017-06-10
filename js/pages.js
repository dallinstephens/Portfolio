// This script runs the function the page loads. Initially, the "Primary Code Tidbit" is showing and the mode is in "portrait".
var w3codecolor;
$(document).ready(function(){
	// Prevent href from loading when a tag is clicked
	$('#myPanel').on('click', 'li a', function(event) {event.preventDefault();});

	// Used for loading my external hrefs upon mouseover
	$('#myPanel').on('mouseover', 'li a', function(event) {
		$(".parent").hide(); // Hides start.html in iframe
		// Testing: use alert($(this).index('li a'));
		var href = $(this).attr('href'); // Stores href from a tag
		event.preventDefault(href); // This prevents loading the default href.
		var href_length_minus_12 = href.length-12; // href length minus .tidbit.html
    var path = href.substr(0, href_length_minus_12); // href minus .tidbit.html
		var tidbit_html = ".tidbit.html";
		var tidbit_url = path.concat(tidbit_html); // Concatenates: path.tidbit.html
		$("#tidbit-box").load(tidbit_url, function() {
			w3CodeColor();
		}); // loads path.tidbit.html and runs w3CodeColor after loading
		var mycode_html = ".mycode.html";
		var mycode_url = path.concat(mycode_html); // Concatenates: path.mycode.html
		$("#my-code-box").load(mycode_url); // loads path.mycode.html

		// In conjunction with class="hide-code" in angularjs.myresults.js
		// There needs to be a delay so that document.getElementById("my-result-box").innerHTML can get loaded before applying this code.
		$(".hide-code").hide(); // This hides all result code.
		$("#my-result-code section").eq($(this).index('li a')).show(); // This shows the current result code. Observe the tag 'section'.

		// There needs to be a very slight delay after loading the html so the code gets styled and the height loads correctly.
		setTimeout(function() {
			GreyboxPortrait();
			$("#body").show();
			TidbitGreybox("portrait");
			$("#my-code").hide();
			$("#tidbit").show();
		}, 140);
	});
});

// Load scripts
function loadScript(url) {
	document.write('<' + 'script');
	document.write(' language="javascript"');
	document.write(' type="text/javascript"');
	document.write(' src="' + url + '">');
	document.write('</' + 'script' + '>');
}

// This makes it so the variable is global. Then in each function, I can define the variable type and have it change with each function.
var type;

// Sample on how to make two divs the same height. This code is not used, but is here for reference.

jQuery(document).ready(function() {
    var divone = jQuery("#sidebar").height();
    var divtwo = jQuery("#gridview").height();

    var maxdiv = Math.max(divone, divtwo);

    jQuery("#sidebar").height(maxdiv);
    jQuery("#gridview").height(maxdiv);

});

// This function is used to adjust the grey-box height, tidbit-box height, and my-result-box height when "Primary Code Tidbit" and "My Result" are being shown in portrait mode.
function GreyboxPortrait() {
  $("#right-arrow").hide();
  $("#left-arrow").show();
  mode = "portrait";
  $("#tidbit-mycode").removeClass("change-width").addClass("tidbit-and-mycode");
  $("#my-result").removeClass("change-display-and-width").addClass("my-result");
  if (type === "tidbit") {TidbitGreybox(mode);}
  else if (type === "mycode") {MyCodeGreybox(mode);}
}

// This function is used to adjust the grey-box height when "Primary Code Tidbit" and "My Result" are being shown in landscape mode.
function GreyboxLandscape() {
  $("#left-arrow").hide();
  $("#right-arrow").show();
  mode = "landscape";
  $("#tidbit-mycode").removeClass("tidbit-and-mycode").addClass("change-width");
  $("#my-result").removeClass("my-result").addClass("change-display-and-width");
  if (type === "tidbit") {TidbitGreybox(mode);}
  else if (type === "mycode") {MyCodeGreybox(mode);}
}

// This function is used to adjust the grey-box height, my-code-box height, and my-result-box height when "My Code" and "My Result" are being shown in portrait mode.
function TidbitGreybox(m) {
  $(".down-arrow").hide();
  $(".up-arrow").show();
  $("#my-code").hide();
  $("#tidbit").show();

  type = "tidbit";
  if (m === undefined) {}
  else {mode = m;}

  if (mode === "landscape") {
    $("#tidbit-box").css("height", "");
    tidbitboxheight = $("#tidbit-box").height();
    $("#my-result-box").css("height", "");
    myresultboxheight = $("#my-result-box").height();
    $(".grey-box").css("height", 185+tidbitboxheight+myresultboxheight+"px");
  }
  else if (mode === "portrait"){
		$("#tidbit-box").css("height", "");
    tidbitboxheight = $("#tidbit-box").height();
    $("#my-result-box").css("height", "");
    myresultboxheight = $("#my-result-box").height();
    maxheight = Math.max(tidbitboxheight, myresultboxheight);
    $("#tidbit-box").css("height", maxheight+"px");
    $("#my-result-box").css("height", maxheight+"px");
    $(".grey-box").css("height", 100+maxheight+"px");
  }
}

// This function is used to adjust the grey-box height, my-code-box height, and my-result-box height when "My Code" and "My Result" are being shown in portrait mode.
function MyCodeGreybox(m) {
  $(".up-arrow").hide();
  $(".down-arrow").show();
  $("#tidbit").hide();
  $("#my-code").show();
  type = "mycode";
  if (m === undefined) {}
  else {mode = m;}

  if (mode === "landscape") {
    $("#my-code-box").css("height", "");
    mycodeboxheight = $("#my-code-box").height();
    $("#my-result-box").css("height", "");
    myresultboxheight = $("#my-result-box").height();
    $(".grey-box").css("height", 185+mycodeboxheight+myresultboxheight+"px");
  }
  else if (mode === "portrait") {
    mycodeboxheight = $("#my-code-box").height();
    $("#my-result-box").css("height", "");
    myresultboxheight = $("#my-result-box").height();
    maxheight = Math.max(mycodeboxheight, myresultboxheight);
    $("#my-code-box").css("height", maxheight+"px");
    $("#my-result-box").css("height", maxheight+"px");
    $(".grey-box").css("height", 100+maxheight+"px");
  }
}

// This script is just for the file applications2.html which adjusts the height of the result box when a button is clicked.
jQuery(function(){
 jQuery('#auto-adjust-result-box-height').click();
});

function resultBoxAreaAdjust() {
  p = document.getElementById('auto-adjust-result-box-height');
  p.style.height = "1px";
  p.style.height = (-20+p.scrollHeight)+"px";
}

// This is used to initially hide "My Code" and put "My Result" underneath with full width. Then when the orientation button is clicked, "My Code" is put underneath "Primary Code Tidbit" and "My Result" is located on the right each with a smaller width. The symbol is changed back and forth when the orientation button is clicked.
// $(document).ready(function(){
//  $("#right-arrow").hide();
//  $(".orientation-button").click(function(){
//    $("#left-arrow").toggle();
//    $("#right-arrow").toggle();
//  });
//  $(".down-arrow").hide();
//  $(".tidbit-mycode-button").click(function(){
//    $(".up-arrow").toggle();
//    $(".down-arrow").toggle();
//  });
// });
