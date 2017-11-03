$(document).ready(function() {
	// loading 效果
	imgLoad(['./images/page2-logo.png', './images/page1-1.png', './images/page1-2.png'])
	.done(function(){
		$('#loading_p').remove();
		setTimeout(function(){
			$('#loading-txt').fadeIn('slow', function() {
				var loading = $('#loading');
				loading.delay(1300).slideUp('slow', function() {

					$(this).remove();

					$('#swiper_main').fadeIn('slow', function() {
						var slide = $('.swiper-slide').length - 1;

						// swiper
						var mySwiper = new Swiper ('.swiper-container', {
						    direction: 'horizontal',
						    loop: true,
						    pagination : '.swiper-pagination',
						    autoplay: 7000,

						    speed: 300,
						    
						    // // 如果需要前进后退按钮
						    // nextButton: '.swiper-button-next1',
						    // prevButton: '.swiper-button-prev1',
						    // onTouchEnd: function(swiper){
						    // 	if (swiper.activeIndex === slide) location = './form.html'
						    // }
						}) 
					});
					
				});
			});
		}, 100)	
	})	

	// rule
	var rule_panel = $('#rule_panel');
	$('#rule_btn').click(function(event) {
		/* Act on the event */
		rule_panel.addClass('show');
	});
	rule_panel.click(function(){
		$(this).removeClass('show')
	})

	// input
	var input = $('#my_msg');
	// input.keyup(function(event) {
	// 	/* Act on the event */
	// 	if ($(this).val().length > 0) {
	// 		$(this).css('background', '#ccc');
	// 	}
	// });
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