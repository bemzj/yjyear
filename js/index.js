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
	//省市区
	!function () {
        var $target = $('#city');

        $target.citySelect();

        $target.on('click', function (event) {
            event.stopPropagation();
            $target.citySelect('open');
        });

        $target.on('done.ydui.cityselect', function (ret) {
            $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
        });
    }();
    //失去焦点
    $('#city').bind('focusin',function(){
    	$(this).blur();
    })
    //选择
    $('.slt').change(function(){
		$(this).prev('input').val($(this).children('option:selected').val());
	});
	//截取图片
	$("#clipArea").photoClip({
		width: 200,
		height: 200,
		file: "#file",
		view: ".view",
		ok: "#clipBtn",
		loadStart: function() {
			$('#clipArea').show();
			$('#clipClose').on('click',function(){
				$('#clipArea').hide();
			});
			//开启加载页面
		},
		loadComplete: function() {
			console.log("照片读取完成");
			//关闭加载页面
		},
		clipFinish: function(dataURL) {
			$('#clipArea').hide();
			$('.imgBox').attr('src',dataURL);
		}
	});
	//提交
	$('.btn button').bind('click',function(){
		clearInterval(nextTween);
		$('.nextBox').css({'bottom':'0.8rem','opacity':'1'});
		$('#index').fadeOut(500);
		$('#apply').fadeIn(500);
		$('.headImg ul li').eq(0).addClass('animated fadeInDown');
		$('.headImg ul li').eq(1).addClass('animated rotateIn');
		$('.headImg ul li').eq(2).addClass('animated fadeInUp');
		$('.message li').eq(0).addClass('animated slideInLeft');
		$('.message li').eq(1).addClass('animated slideInRight');
		$('.message li').eq(2).addClass('animated slideInLeft');
		$('.message li').eq(3).addClass('animated slideInRight');
		$('.message li').eq(4).addClass('animated slideInLeft');
		$('.submit').addClass('animated fadeInUp');
	});
	$('.submit').bind('click',function(){
		$('#apply').fadeOut(500);
		$('#hand').fadeIn(500);	
	});
	//指纹
	
});