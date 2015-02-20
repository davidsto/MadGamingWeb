function showChosenVideo(chosenOne){
	$('.vidoes').each(function(index){
		if($(this).attr("id") == chosenOne){
			$(this).show();
		}
		else {
			$(this).hide();
		}
	});
}