$(document).ready(function() {
	// loading 效果
	setTimeout(function(){
		$('#loading-txt').fadeIn('slow', function() {
			var loading = $('#loading');
			loading.delay(1300).fadeOut('500', function() {
				$(this).remove();

				var slide = $('.swiper-slide').length - 1;

				// swiper
				var mySwiper = new Swiper ('.swiper-container', {
				    direction: 'horizontal',
				    // loop: true,

				    autoplay: 6000,

				    speed: 300,
				    
				    // // 如果需要前进后退按钮
				    // nextButton: '.swiper-button-next1',
				    // prevButton: '.swiper-button-prev1',
				    onTouchEnd: function(swiper){
				    	if (swiper.activeIndex === slide) location = './form.html'
				    }
				}) 
			});
		});
	}, 500)	
});