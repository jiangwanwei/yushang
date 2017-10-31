$(document).ready(function() {
	// loading 效果
	imgLoad(['../images/page2-logo.png', '../images/page1-1.png', '../images/page1-2.png'])
	.done(function(){
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
		}, 100)	
	})	
});

// 图片加载
function imgLoad(imgs) {
	if (!imgs.length) return;

	var count = 0,
		callfunc = function() {},
	loadHandle = function () {
		count += 1;
		if (imgs.length === count) {
			callfunc && callfunc(imgs)
		}
	}

	imgs.forEach(function (img){
		var imgtag = document.createElement('img');
		imgtag.src = img;
		imgtag.onload = loadHandle;
		imgtag.onerror = loadHandle;
	})
	
	return {
		done: function(callback) {
			callfunc = callback || callfunc;
		}
	}
}