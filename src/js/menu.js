$(document).ready(function(){
	var bodyclasses = $("body").attr("class");
	var bodyclass = bodyclasses.split(" ");
	var main_element = "li." + bodyclass[0];
	var sub_element = "li." + bodyclass[1];
	$(main_element).addClass("active");
	$(sub_element).addClass("active");

 });