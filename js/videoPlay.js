function VideoStart(sSelector) {
	var  v = this
		,mainClass  = 'play__start'
		;

	v.container = $(sSelector);
	v.playBtn 	= v.container.find(".playBtn");
	v.closeBtn	= v.container.find(".close__btn");
	v.player	= v.container.find("#player");


	
	v.startVideo = function(event) {
		
		event.preventDefault();
		v.container.addClass(mainClass);


	}
	
	v.stopVideo = function() {

		v.container.removeClass(mainClass);

	}
	
	

	v.playBtn.click(v.startVideo);
	v.closeBtn.click(v.stopVideo);
}