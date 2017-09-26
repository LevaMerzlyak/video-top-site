function VideoStart(sSelector) {
	var  v = this
		,playClass 	= 'fa-play'
		,pauseClass = 'fa-pause'
		,muteClass 	= 'fa-volume-off'
		,volClass 	= 'fa-volume-up'
		,mainClass  = 'play__start'
		;

	v.container 	= $(sSelector);
	v.playBtn 		= v.container.find(".playBtn");
	v.video 		= v.container.find(".bg__video").get(0);
	v.volumeBtn 	= v.container.find(".controlBtn_volume");
	v.playPauseBtn 	= v.container.find(".controlBtn_playPause");
	v.closeBtn		=v.container.find(".controlBtn_close");


	
	v.startVideo = function(event) {
		
		event.preventDefault();
		v.container.addClass(mainClass);

		v.playVideo();

	}
	v.playVideo = function() {

		setTimeout(function() {
			v.video.play();
		}, 2000);

	}
	v.stopVideo = function() {

		v.video.pause();
		setTimeout(function() {
			v.video.currentTime = 0;
		}, 2000);
		v.container.removeClass(mainClass);
		if (v.playPauseBtn.hasClass(playClass)) {

			v.playPauseBtn.removeClass(playClass).addClass(pauseClass);

		}

	}
	v.playPause = function() {

		if (v.video.paused) {

			v.video.play();
			v.playPauseBtn.removeClass(playClass).addClass(pauseClass);

		} else {

			v.video.pause();
			v.playPauseBtn.removeClass(pauseClass).addClass(playClass);

		}

	}
	v.mute = function() {

		if (v.video.muted) {

			v.video.muted = false;
			v.volumeBtn.removeClass(muteClass).addClass(volClass);

		} else {

			v.video.muted = true;
			v.volumeBtn.removeClass(volClass).addClass(muteClass);

		}
		
	}

	v.playBtn.click(v.startVideo);
	v.closeBtn.click(v.stopVideo);
	v.playPauseBtn.click(v.playPause);
	v.volumeBtn.click(v.mute);
}