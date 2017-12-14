$(function(){
//	
	var numbers = 1;
	var preload = setInterval(function(){
		$('.up').css('width',numbers+'%');
		$('.load').html(numbers+'%');
		numbers++;
		if(numbers==101)
		{
			clearInterval(preload);
			$('#phoneCome').fadeIn(500);
			$('#reload').fadeOut(500,function(){
				$('#reload').remove();
				$('.hidden').remove();
//				$('#pMusic')[0].play();
			});
		}
	},40);
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
		$('#index').show().css('opacity','1');
		$('#bg')[0].play();
		swiper.slideTo(0, 100, true);//切换到第一个slide，速度为1秒
		$('.nextBox').animate({'bottom':'0.3rem','opacity':'0'},600,function(){
			$(this).css({'bottom':'0.8rem','opacity':'1'});
		});
		nextTween = setInterval(function(){
			$('.nextBox').animate({'bottom':'0.3rem','opacity':'0'},600,function(){
				$(this).css({'bottom':'0.8rem','opacity':'1'});
			});
		},600);
		$('.logo').show().addClass('animated bounceInRight');
		$('.title').show().addClass('animated fadeInDown');
		$('.timeTitle').show().addClass('animated rotateIn');
		$('.timeBox div').show().eq(2).addClass('animated bounceInLeft');
		$('.timeBox div').show().eq(3).addClass('animated bounceInLeft');
		$('.timeBox div').show().eq(0).addClass('animated bounceInRight');
		$('.timeBox div').show().eq(1).addClass('animated bounceInRight');
		$('.address p').show().eq(0).addClass('animated fadeInDown');
		$('.address p').show().eq(1).addClass('animated fadeInUp');
	};
	//跳过
	$('#over').bind('click',function(){
		$('#video')[0].pause();
		$('.video').fadeOut();
		$('#bg')[0].play();
		$('#index').show().css('opacity','1');
		swiper.slideTo(0, 100, true);//切换到第一个slide，速度为1秒
		$('.nextBox').animate({'bottom':'0.3rem','opacity':'0'},600,function(){
			$(this).css({'bottom':'0.8rem','opacity':'1'});
		});
		nextTween = setInterval(function(){
			$('.nextBox').animate({'bottom':'0.3rem','opacity':'0'},600,function(){
				$(this).css({'bottom':'0.8rem','opacity':'1'});
			});
		},600);
		$('.logo').show().addClass('animated bounceInRight');
		$('.title').show().addClass('animated fadeInDown');
		$('.timeTitle').show().addClass('animated rotateIn');
		$('.timeBox div').show().eq(2).addClass('animated bounceInLeft');
		$('.timeBox div').show().eq(3).addClass('animated bounceInLeft');
		$('.timeBox div').show().eq(0).addClass('animated bounceInRight');
		$('.timeBox div').show().eq(1).addClass('animated bounceInRight');
		$('.address p').show().eq(0).addClass('animated fadeInDown');
		$('.address p').show().eq(1).addClass('animated fadeInUp');
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
	var ct1;
	var ct2;
	var lightTween;
	var rTween;
	var saoTween;
	var cTween1;
	var cTween2;
	$('.submit').bind('click',function(){
		$('#apply').fadeOut(500);
		$('#hand').fadeIn(500);
		//指纹
		
		var lrule = true;
		lightTween = setInterval(function(){
			if(lrule==true)
			{
				lrule = false;
				$('.light').animate({'opacity':0.5},500);
			}else{
				lrule = true;
				$('.light').animate({'opacity':1},500);
			}	
		},500);
		
		rTime=2;
		rTween = setInterval(function(){
			$('.rBox img').attr('src','img/r'+rTime+'.png');
			rTime++;
			if(rTime==4)
			{
				rTime=1;
			}
		},750);
			
		saoTween = setInterval(function(){
			$('.sao img').animate({'bottom':"-5%"},2500,function(){
				$(this).css('bottom',"100%");
			});
		},2500);
		
		var cTime1 = 0;
		ct1 = 0.1;
		cTween1 = setInterval(function(){
			cTime1+=ct1;
			$('.circleOut>img').css('transform','rotate('+cTime1+'deg)');
		},20);
		
		
		var cTime2 = 0;
		var ct2 = 0.2;
		cTween2 = setInterval(function(){
			cTime2-=ct2;
			$('.circleInBox>img').css('transform','rotate('+cTime2+'deg)');
		},20);
		
	});
	
	
	
	$('#press').bind('click',function(){
		ct1=10;
		ct2=10;
		$('.input').hide();
		$('.now').show();
		var iTween;
		iRule = true;
		
		iTween = setInterval(function(){
			if(iRule == true)
			{
				iRule = false;
				$('.now').css('opacity','0');
			}else{
				iRule = true;
				$('.now').css('opacity','1');
			}
		},250);
		setTimeout(function(){
			$('#pressed')[0].play();	
			setTimeout(function(){
				clearInterval(lightTween);
				clearInterval(rTween);
				clearInterval(saoTween);
				clearInterval(iTween);
				clearInterval(cTween1);
				clearInterval(cTween2);
				$('#hand').fadeOut(500);
				$('#success').fadeIn(500);
				$('.slogo').show().addClass('animated bounceInRight');
				$('.stitle').show().addClass('animated tada');
				$('.wxHead').show().addClass('animated rubberBand');
				$('.namestore').show().addClass('animated rotateIn');
				$('.sBox').show().addClass('animated bounceInDown');
				$('.return').show().addClass('animated bounceInUp');
				$('.return button').bind('click',function(){					
					$('#success').hide();
					$('#phoneCome').fadeIn(500,function(){
						$('#pMusic')[0].play();
					});
					$('#bg')[0].pause();
				});
			},1000);
		},2000);
		
	});
	
	
})