$(function () {

	$("#navbarToggle").blur(function(event){
		var screenWidth=window.innerWidth;
		if(screenWidth<789){
			$("#collapsable-nav").collapse('hide');
		}
	});
});