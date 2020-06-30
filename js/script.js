$ (document) .ready(function(){
	var slide_sau = $('.active').next();
		console.log(slide_sau.length);
	if(slide_sau.length!=0){
			$('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
			});
}

	