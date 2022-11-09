$(function(){ 
    if($(".menu_deps1 .menu_deps_item1").length==0){
         $(".menu_container").hide();
    };
});

$(document).ready(function() {

	var path_loc2 = $(".post2 a").attr('href');
	var path_loc3 = $(".post3 a").attr('href');
	var path_loc4 = $(".post4 a").attr('href');

	$(".menu_deps_item1").each(function() {
		var postion_loc2 = $(this).children('a').attr('href').split('.html')[1];
		if(!$(this).children("ul").length == 0){
			 $(this).addClass("child_menu");
		};
		if(postion_loc2 == path_loc2) {
			$(this).addClass('sort');
		}
	});

	/* deps3 check show */
	$(".menu_deps2 .menu_deps_item2").each(function() {
		var postion_loc2 = $(this).children("a").attr('href').split('.html')[1];
		if($(this).children("ul").length) {
			if(postion_loc2 == path_loc2) {
				$(this).addClass('active');
				$(".menu_deps_item1.sort").addClass("active_arrow");
			}
		}
	});