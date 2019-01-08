/*ymaps.ready(init);

var myMap;

function init(){
	myMap = new ymaps.Map("map", {
		center: [58.590314, 49.626784],
		zoom: 17,
		controls: []
	});

	myMap.controls.add('geolocationControl');
	myMap.controls.add('zoomControl');

	myPlacemark = new ymaps.Placemark([58.590314, 49.626784], {
			hintContent: 'г. Киров, Мелькомбинатовский проезд д. 7',
			balloonContent: 'г. Киров, Мелькомбинатовский проезд д. 7'
		},{
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/kvashnin/new_template/images/marker1.png',
			iconImageSize: [63, 94],
			iconImageOffset: [-33, -82]
		}
	);

	myMap.geoObjects.add(myPlacemark);

}*/

/*-----------------------------------------------------------------------------*/
$(window).resize(function(){
 	if($(document).width() > 480){
		$(".play").each(function(e){
			var top_play = $(".v_view").height() / 2 - $(this).height() / 2;
			var left_play = $(".col-video").width() / 2 - $(this).width() / 2 +13;
			$(this).css('top', top_play);
			$(this).css('left', left_play);
		});
	}else if($(document).width() <= 480){
		$(".play").each(function(e){
			var top_play = $(".v_view").height() / 2 - $(this).height() / 2;
			var left_play = $(document).width() / 2 -  $(this).width() / 2 ;
			$(this).css('top', top_play);
			$(this).css('left', left_play);
		});		
	} 
});

window.addEventListener("orientationchange", function() {
 	if($(document).width() > 480){
		$(".play").each(function(e){
			var top_play = $(".v_view").height() / 2 - $(this).height() / 2;
			var left_play = $(".col-video").width() / 2 - $(this).width() / 2 +13;
			$(this).css('top', top_play);
			$(this).css('left', left_play);
		});
	}else if($(document).width() <= 480){
		$(".play").each(function(e){
			var top_play = $(".v_view").height() / 2 - $(this).height() / 2;
			var left_play = $(document).width() / 2 -  $(this).width() / 2 ;
			$(this).css('top', top_play);
			$(this).css('left', left_play);
		});		
	} 
	
	var c_h = parseInt($(".content_cat").height());	
	var l_h = parseInt($(".left_menu").height());
	
	if(c_h > l_h){
		if($(document).width() > 991){
			var padding = c_h - l_h;
			$(".left_menu").css('padding-bottom', padding);
		}else{
			$(".left_menu").css('padding-bottom', 0);
		}
	}
	
}, false);

$(function(){
	if($(document).width() > 480){
		$(".play").each(function(e){
			var top_play = $(".v_view").height() / 2 - $(this).height() / 2;
			var left_play = $(".col-video").width() / 2 - $(this).width() / 2 +13;
			$(this).css('top', top_play);
			$(this).css('left', left_play);
		});
	}else if($(document).width() <= 480){
		$(".play").each(function(e){
			var top_play = $(".v_view").height() / 2 - $(this).height() / 2;
			var left_play = $(document).width() / 2 -  $(this).width() / 2 - 7;
			$(this).css('top', top_play);
			$(this).css('left', left_play);
		});		
	}
});

$(function(){
	var c_h = parseInt($(".content_cat").height());	
	var l_h = parseInt($(".left_menu").height());
	
	if((c_h > l_h) && $(document).width() > 991){
		var padding = c_h - l_h;
		$(".left_menu").css('padding-bottom', padding);
	}		
});

$(function(){
	$(".carousel-caption").each(function(e){
		var top_cap = $(".slider_top").height() / 2 - $(this).height() / 2;
		$(this).css('top', top_cap);
	});
	
	$(".left_img img").each(function(e){
		var top_img = $(".carousel-caption").height() / 2 - $(this).height() / 2 + 46;
		$(this).css('top', top_img);
	});	
});

$('#carousel-example-generic').on('slid.bs.carousel', function () {
	var top_cap = $(".slider_top").height() / 2 - $(".carousel-inner .active .carousel-caption").height() / 2;
	$(".carousel-inner .active .carousel-caption").css('top', top_cap);	
	
	var top_img = $(".carousel-inner .active .left_img").height() / 2 - $(".carousel-inner .active .left_img img").height() / 2 + 46;
	var left_img = $(".carousel-inner .active .left_img").width() / 2 - $(".carousel-inner .active .left_img img").width() / 2;
	$(".carousel-inner .active .left_img img").css('top', top_img);		
	$(".carousel-inner .active .left_img img").css('left', left_img);		
});

$(document).ready(function(){
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {},
			overlay: {
				locked: false
			}
		}
	});

	$('.fancybox').fancybox();
	
	$("#owl-carousel").owlCarousel({
		responsive:{
			0:{
				items:1
			},
			400:{
				items:2
			},
			500:{
				items:3
			},
			600:{
				items:4
			},
			700:{
				items:5
			},
			900:{
				items:6
			},
			1000:{
				items:7
			}
		},
		margin: 30,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		touchDrag: true,
		dots: false,
		nav: true,
		navText: ['<img src = "/wp-content/themes/kvashnin/new_template/images/prev.png" alt = ""/>', '<img src = "/wp-content/themes/kvashnin/new_template/images/next.png" alt = ""/>']
	});

    $("#owl-carousel1").owlCarousel({
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            500:{
                items:3
            },
            600:{
                items:3
            },
            700:{
                items:3
            },
            900:{
                items:4
            },
            1000:{
                items:4
            }
        },
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        nav: true,
        navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>']
    });

	var flag = 0;
	$(".mobile_menu").click(function(){
		if(flag == 0){
			$(".top_menu").fadeIn();
			$(".search").css({"display":"block"});
			flag = 1;
		}else if(flag == 1){
			$(".top_menu").fadeOut();
			$(".search").css({"display":"none"});
			flag = 0;			
		}
	});
});

$('[popup-target]').click(function(e) {
	var el = $(this);
	var target = el.attr('popup-target');

	$('.overlay').fadeIn(200, function(){
		$('.popup.'+target).fadeIn(200);
		var top = document.documentElement.clientHeight / 2 - $('.popup.'+target).height() / 2 + $(window).scrollTop();
		if(document.body.clientWidth > 360){
			var left = $('body').width() / 2 - $('.popup.'+target).width() / 2 - 15;
		}else if(document.body.clientWidth <= 360){
			var left = $('body').width() / 2 - $('.popup.'+target).width() / 2 + 25;
		}else{
			var left = $('body').width() / 2 - $('.popup.'+target).width() / 2;
		}
		left = left - 51;
		$('.popup.'+target).css('top', top).css('left', left);
	})

	return false;
});

$('.overlay, .close').click(function(e) {
	var popup = $('.popup:visible');
	popup.fadeOut(200, function(){
		$('.overlay').fadeOut(200);
	});
	return false;
});

jQuery(function(){
	jQuery(".phone").mask("+7(999) 999-9999");
});

$(".prev_pic img").click(function(){
	var src = $(this).attr("src");
	$(".big_pic img").attr("src", src);
});

$(".li_desc").click(function(){
	$(".text_prop li").removeClass("active");
	$(this).addClass("active");
	$(".li_content").hide();
	
	$(".li_desc_content").show();
});

$(".li_order").click(function(){
	$(".text_prop li").removeClass("active");
	$(this).addClass("active");
	$(".li_content").hide();
	
	$(".li_order_content").show();
});

$(".li_usl").click(function(){
	$(".text_prop li").removeClass("active");
	$(this).addClass("active");
	$(".li_content").hide();
	
	$(".li_usl_content").show();
});

$('.contact-form__form-bottom__checkbox').click(function(){
	if($('.contact-form__form-bottom__checkbox input[type="checkbox"]').attr('checked') === 'checked'){
		$(this).addClass('contact-form__form-bottom__un');
		$('.contact-form__form-bottom__checkbox input[type="checkbox"]').removeAttr('checked');
	}else{
		$(this).removeClass('contact-form__form-bottom__un');
		$('.contact-form__form-bottom__checkbox input[type="checkbox"]').attr('checked','checked');		
	}
});

$(".top_menu li").hover(
	function(){
		$(this).children(".sub-menu").show();
	},
	function(){
		$(this).children(".sub-menu").hide();
	}
);

$('.demo').loupe();

