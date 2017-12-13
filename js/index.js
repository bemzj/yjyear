$(function(){
	$('#pMusic')[0].play();
	//接听
	$('.accept a').on('click',function(){
		$('#phoneCome').hide();
		$('#pMusic')[0].pause();
		$('.video').show();
		$('#video')[0].play();
	});	
	//视频播放完毕	
	var nextTween;	
	document.getElementById("video").onended=function(){
		$('.video').fadeOut();
		$('#index').css('opacity','1');
		$('.nextBox').animate({'bottom':'0.3rem','opacity':'0'},600,function(){
			$(this).css({'bottom':'0.8rem','opacity':'1'});
		});
		nextTween = setInterval(function(){
			$('.nextBox').animate({'bottom':'0.3rem','opacity':'0'},600,function(){
				$(this).css({'bottom':'0.8rem','opacity':'1'});
			});
		},600);
		$('.logo').addClass('animated bounceInRight');
		$('.title').addClass('animated fadeInDown');
		$('.timeTitle').addClass('animated rotateIn');
		$('.timeBox div').eq(2).addClass('animated bounceInLeft');
		$('.timeBox div').eq(3).addClass('animated bounceInLeft');
		$('.timeBox div').eq(0).addClass('animated bounceInRight');
		$('.timeBox div').eq(1).addClass('animated bounceInRight');
		$('.address p').eq(0).addClass('animated fadeInDown');
		$('.address p').eq(1).addClass('animated fadeInUp');
	};
	//跳过
	$('#over').bind('click',function(){
		$('#video')[0].pause();
		$('.video').fadeOut();
		$('#index').css('opacity','1');
		$('.nextBox').animate({'bottom':'0.3rem','opacity':'0'},600,function(){
			$(this).css({'bottom':'0.8rem','opacity':'1'});
		});
		nextTween = setInterval(function(){
			$('.nextBox').animate({'bottom':'0.3rem','opacity':'0'},600,function(){
				$(this).css({'bottom':'0.8rem','opacity':'1'});
			});
		},600);
		$('.logo').addClass('animated bounceInRight');
		$('.title').addClass('animated fadeInDown');
		$('.timeTitle').addClass('animated rotateIn');
		$('.timeBox div').eq(2).addClass('animated bounceInLeft');
		$('.timeBox div').eq(3).addClass('animated bounceInLeft');
		$('.timeBox div').eq(0).addClass('animated bounceInRight');
		$('.timeBox div').eq(1).addClass('animated bounceInRight');
		$('.address p').eq(0).addClass('animated fadeInDown');
		$('.address p').eq(1).addClass('animated fadeInUp');
	});
	//拒接
	$('.refuse a').on('click',function(){
		popw("温馨提示","你真的要狠心拒绝吗<br/>可能会错过好几个亿哦",1);
		$('.popWindow .popBox ul li:nth-child(2) p').css({'color':'#000000','font-size':'0.24rem','line-height':'0.3rem'});
		$('.popWindow .popBox ul li:nth-child(1) p').css('margin-bottom','0.1rem');
	});
	//下一p
	$('.next').bind('click',function(){
		swiper.slideNext();
	});
});