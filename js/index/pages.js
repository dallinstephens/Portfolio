// This variable is used to retain portait or landscape mode and tidbit or mycode depending on what the user selects.
var keepstate;

// This makes it so each variable is global. Then in each function, I can define the variable type and have it change with each function.
var mode;
var type;
var href;

$(document).ready(function(){
	// Prevent href from loading when a tag is clicked
	$('#myPanel').on('click', 'li a', function(event) {event.preventDefault();});

	// AngularJS V1: Used for loading my external hrefs upon mouseover
	$('#ng1').find('li > a').add('.ng1-rcl a').mouseover(function(event) {
			event.preventDefault(href); // This prevents loading the default href.

			// Add background color for specific programming language
			$("#body").removeClass("ng2 css css3 html js");
			$("#body").addClass("ng1");

			// Left border color for white boxes
			$(".white-box").removeClass("color-left-ng2 color-left-css color-left-css3 color-left-html color-left-js");
			$(".white-box").addClass("color-left-ng1");

			// Header Color
			$(".header").removeClass("header-ng2 header-css header-css3 header-html header-js");
			$(".header").addClass("header-ng1");

			// Button Color
			$(".button-status").removeClass("color-ng2 color-css color-css3 color-html color-js");
			$(".button-status").addClass("color-ng1");

			topic = $(this).attr('href'); // Stores href in topic from a tag

			$(".start").hide(); // Hides start.html
			$("#myiframe").hide(); // Hides iframe in reference code library index.html

			$("#mrb-ng1").show(); // Shows my-result-box for selected language
			$("#mrb-ng2, #mrb-css, #mrb-css3, #mrb-html, #mrb-js").hide(); // Hides my-result-box for other languages

			//  Observe the tag 'section' in angular.myresults.html, etc.
			$("#my-result-code-ng1").children().show(); // Shows all my result code for selected language
			$("#"+topic).siblings().hide(); // Hides all result code for selected language except selected topic

			createHTML(topic);
	});

	// AngularJS V2: Used for loading my external hrefs upon mouseover
	$('#ng2').find('li > a').add('.ng2-rcl a').mouseover(function(event) {
			event.preventDefault(href); // This prevents loading the default href.

			// Add background color for specific programming language
			$("#body").removeClass("ng1 css css3 html js");
			$("#body").addClass("ng2");

			// Left border color for white boxes
			$(".white-box").removeClass("color-left-ng1 color-left-css color-left-css3 color-left-html color-left-js");
			$(".white-box").addClass("color-left-ng2");

			// Header Color
			$(".header").removeClass("header-ng1 header-css header-css3 header-html header-js");
			$(".header").addClass("header-ng2");

			// Button Color
			$(".button-status").removeClass("color-ng1 color-css color-css3 color-html color-js");
			$(".button-status").addClass("color-ng2");

			topic = $(this).attr('href'); // Stores href in topic from a tag

			$(".start").hide(); // Hides start.html
			$("#myiframe").hide(); // Hides iframe in reference code library index.html

			$("#mrb-ng2").show(); // Shows my-result-box for selected language
			$("#mrb-css3, #mrb-css, #mrb-ng1, #mrb-html, #mrb-js").hide(); // Hides my-result-box for other languages

			//  Observe the tag 'section' in angular.myresults.html, etc.
			$("#my-result-code-ng2").children().show(); // Shows all my result code for selected language
			$("#"+topic).siblings().hide(); // Hides all result code for selected language except selected topic

			createHTML(topic);
	});

	// CSS: Used for loading my external hrefs upon mouseover
	$('#css').on('mouseover', 'li a', function(event) {
			event.preventDefault(href); // This prevents loading the default href.

			// Add background page color for specific programming language
			$("#body").removeClass("ng1 ng2 css3 html js");
			$("#body").addClass("css");

			// Left border color for white boxes
			$(".white-box").removeClass("color-left-ng1 color-left-ng2 color-left-css3 color-left-html color-left-js");
			$(".white-box").addClass("color-left-css");

			// Header Color
			$(".header").removeClass("header-ng1 header-ng2 header-css3 header-html header-js");
			$(".header").addClass("header-css");

			// Button Color
			$(".button-status").removeClass("color-ng1 color-ng2 color-css3 color-html color-js");
			$(".button-status").addClass("color-css");

			topic = $(this).attr('href'); // Stores href in topic from a tag

			$(".start").hide(); // Hides start.html
			$("#myiframe").hide(); // Hides iframe in reference code library index.html

			$("#mrb-css").show(); // Shows my-result-box for selected language
			$("#mrb-ng2, #mrb-css3, #mrb-ng1, #mrb-html, #mrb-js").hide(); // Hides my-result-box for other languages

			//  Observe the tag 'section' in angular.myresults.html, etc.
			$("#my-result-code-css").children().show(); // Shows all my result code for selected language
			$("#"+topic).siblings().hide(); // Hides all result code for selected language except selected topic

			createHTML(topic);
	});

	// CSS3: Used for loading my external hrefs upon mouseover
	$('#css3').on('mouseover', 'li a', function(event) {
			event.preventDefault(href); // This prevents loading the default href.

			// Add background color for specific programming language
			$("#body").removeClass("ng1 ng2 css html js");
			$("#body").addClass("css3");

			// Left border color for white boxes
			$(".white-box").removeClass("color-left-ng1 color-left-ng2 color-left-css color-left-html color-left-js");
			$(".white-box").addClass("color-left-css3");

			// Header Color
			$(".header").removeClass("header-ng1 header-ng2 header-css header-html header-js");
			$(".header").addClass("header-css3");

			// Button Color
			$(".button-status").removeClass("color-ng1 color-ng2 color-css color-html color-js");
			$(".button-status").addClass("color-css3");

			topic = $(this).attr('href'); // Stores href in topic from a tag

			$(".start").hide(); // Hides start.html
			$("#myiframe").hide(); // Hides iframe in reference code library index.html

			$("#mrb-css3").show(); // Shows my-result-box for selected language
			$("#mrb-ng2, #mrb-css, #mrb-ng1, #mrb-html, #mrb-js").hide(); // Hides my-result-box for other languages

			//  Observe the tag 'section' in angular.myresults.html, etc.
			$("#my-result-code-css3").children().show(); // Shows all my result code for selected language
			$("#"+topic).siblings().hide(); // Hides all result code for selected language except selected topic

			createHTML(topic);
	});

	// HTML: Used for loading my external hrefs upon mouseover
	$('#html').on('mouseover', 'li a', function(event) {
			event.preventDefault(href); // This prevents loading the default href.

			// Add background color for specific programming language
			$("#body").removeClass("ng1 ng2 css css3 js");
			$("#body").addClass("html");

			// Left border color for white boxes
			$(".white-box").removeClass("color-left-ng1 color-left-ng2 color-left-css color-left-css3 color-left-js");
			$(".white-box").addClass("color-left-html");

			// Header Color
			$(".header").removeClass("header-ng1 header-ng2 header-css header-css3 header-js");
			$(".header").addClass("header-html");

			// Button Color
			$(".button-status").removeClass("color-ng1 color-ng2 color-css color-css3 color-js");
			$(".button-status").addClass("color-html");

			topic = $(this).attr('href'); // Stores href in topic from a tag

			$(".start").hide(); // Hides start.html
			$("#myiframe").hide(); // Hides iframe in reference code library index.html

			$("#mrb-html").show(); // Shows my-result-box for selected language
			$("#mrb-ng2, #mrb-css, #mrb-ng1, #mrb-css3, #mrb-js").hide(); // Hides my-result-box for other languages

			//  Observe the tag 'section' in angular.myresults.html, etc.
			$("#my-result-code-html").children().show(); // Shows all my result code for selected language
			$("#"+topic).siblings().hide(); // Hides all result code for selected language except selected topic

			createHTML(topic);
	});

	// JavaScript: Used for loading my external hrefs upon mouseover
	$('#js').on('mouseover', 'li a', function(event) {
			event.preventDefault(href); // This prevents loading the default href.

			// Add background color for specific programming language
			$("#body").removeClass("ng1 ng2 css css3 html");
			$("#body").addClass("js");

			// Left border color for white boxes
			$(".white-box").removeClass("color-left-ng1 color-left-ng2 color-left-css color-left-css3 color-left-html");
			$(".white-box").addClass("color-left-js");

			// Header Color
			$(".header").removeClass("header-ng1 header-ng2 header-css header-css3 header-html");
			$(".header").addClass("header-js");

			// Button Color
			$(".button-status").removeClass("color-ng1 color-ng2 color-css color-css3 color-html");
			$(".button-status").addClass("color-js");

			topic = $(this).attr('href'); // Stores href in topic from a tag

			$(".start").hide(); // Hides start.html
			$("#myiframe").hide(); // Hides iframe in reference code library index.html

			$("#mrb-js").show(); // Shows my-result-box for selected language
			$("#mrb-ng2, #mrb-css, #mrb-ng1, #mrb-html, #mrb-css3").hide(); // Hides my-result-box for other languages

			//  Observe the tag 'section' in angular.myresults.html, etc.
			$("#my-result-code-js").children().show(); // Shows all my result code for selected language
			$("#"+topic).siblings().hide(); // Hides all result code for selected language except selected topic

			createHTML(topic);
	});

});

function createHTML(topic) {
	var topic_header = topic + ".header"; // Concatenates topic.header
	var div_header = document.createElement('div');
	div_header.innerHTML = document.getElementById(topic_header).innerHTML;
	document.getElementById('header').innerHTML = "";
	document.getElementById('header').appendChild(div_header);

	var topic_explanation = topic + ".explanation"; // Concatenates topic.explanation
	var div_explanation = document.createElement('div');
	div_explanation.innerHTML = document.getElementById(topic_explanation).innerHTML;
	document.getElementById('explanation').innerHTML = "";
	document.getElementById('explanation').appendChild(div_explanation);

	var topic_tidbit = topic + ".tidbit"; // Concatenates topic.tidbit
	var div_tidbit = document.createElement('div');
	div_tidbit.innerHTML = document.getElementById(topic_tidbit).innerHTML;
	document.getElementById('tidbit-box').innerHTML = "";
	document.getElementById('tidbit-box').appendChild(div_tidbit);

	var topic_mycode = topic + ".mycode"; // Concatenates topic.mycode
	var div_mycode = document.createElement('div');
	div_mycode.innerHTML = document.getElementById(topic_mycode).innerHTML;
	document.getElementById('my-code-box').innerHTML = "";
	document.getElementById('my-code-box').appendChild(div_mycode);

	$("#body").show();

	// These if statements are used only to retain user selection of portait or landscape mode and tidbit or mycode.
	if (mode == "portrait" && type == "tidbit") {
		TidbitGreybox("portrait");
		$("#my-code").hide();
		$("#tidbit").show();
	}

	else if (mode == "portrait" && type == "mycode") {
		MyCodeGreybox("portrait");
		$("#tidbit").hide();
		$("#my-code").show();
	}

	else if (mode == "landscape" && type == "tidbit") {
		TidbitGreybox("landscape");
		$("#my-code").hide();
		$("#tidbit").show();
	}

	else if (mode == "landscape" && type == "mycode") {
		MyCodeGreybox("landscape");
		$("#tidbit").hide();
		$("#my-code").show();
	}

	else if (keepstate === undefined) {
		GreyboxPortrait();
		TidbitGreybox("portrait");
		$("#my-code").hide();
		$("#tidbit").show();
		keepstate = 1;
	}
	// Runs w3CodeColor after loading
	w3CodeColor();
}

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
		$("#my-code-box").css("height", "");
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

// Sample on how to make two divs the same height. This code is not used, but is here for reference.
jQuery(document).ready(function() {
    var divone = jQuery("#sidebar").height();
    var divtwo = jQuery("#gridview").height();

    var maxdiv = Math.max(divone, divtwo);

    jQuery("#sidebar").height(maxdiv);
    jQuery("#gridview").height(maxdiv);
});
