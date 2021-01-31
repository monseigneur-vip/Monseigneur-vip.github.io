function pageLoad(){

	var template = {'from': null,'episodes': null,'item': null,'guess': null};

	$(function(){

		if($.URI.vid){

			// 关闭播放提示
			$('#playBoxIframe .tip .close').tap(function(){ $('#playBoxIframe .tip').fadeOut(200); })

			// 初始化模板
			for(var i in template){
				if($('#' + i + 'List .template').length){
					template[i] = $('#' + i + 'List .template').html();
					$('#' + i + 'List .template').remove();
				}
			}

			// 上一集
			$('#episodesControl a.prev').tap(function(){
				if($('#episodesList .current').next().length){
					$('#episodesList .current').next().trigger('tap');
				}
			})
			// 下一集
			$('#episodesControl a.next').tap(function(){
				if($('#episodesList .current').prev().length){
					$('#episodesList .current').prev().trigger('tap');
				}
			})

			// 播放
			var tipInterval
			$('#fromList,#episodesList').tap(function(e){

				if($(this).hasClass('current')){ return true; }
				$(this).parent().find('.current').removeClass('current');
				$(this).addClass('current');
				if($(this).attr('data-site')){ $('#playBoxIframe .tip a span').html($(this).attr('data-site')); }

				if(!$(this).attr('data-hasmore') || ($(this).attr('data-hasmore') != 1 && $(this).attr('data-hasmore') != 2)){
					if($(this).attr('data-api')){

						console.log('播放来源：' + $(this).attr('data-api') + encodeURIComponent($(this).attr('data-href')));

						$('#playBoxIframe .tip').show().find('a').attr('href',$(this).attr('data-href'));
						if(tipInterval){ clearInterval(tipInterval); }
						tipInterval = setInterval(function(){ $('#playBoxIframe .tip').fadeOut(200) },3000);

						// 记录当前剧集
						if($(this).attr('value')){
							var episodes_log = $.cookie('episodes_log'),episodes_number = $(this).attr('value');
							if(episodes_log){
								try{
									var episodes_log = JSON.parse(episodes_log);
									if(episodes_log[$.URI.vid]){ delete episodes_log[$.URI.vid]; }
									episodes_log[$.URI.vid] = episodes_number;
									var episodes_log_keys = Object.keys(episodes_log);
									if(episodes_log_keys.length > 2){	// 最多记录10个
										for(i = 0;i < episodes_log_keys.length - 2;++ i){
											delete episodes_log[episodes_log_keys[i]];
										}
									}
								}catch(e){
									episodes_log = {};
									episodes_log[$.URI.vid] = episodes_number;
								}
							}else{
								episodes_log = {};
								episodes_log[$.URI.vid] = episodes_number;
							}
							$.cookie('episodes_log',JSON.stringify(episodes_log),2592000);

							// 更新标题
							$('#titleItem').html($.htmlEncode($('#titleItem').attr('value')) + '<span>' + $.htmlEncode((/^\d+$/.test(episodes_number) ? '第' + episodes_number + '集' : episodes_number)) + '</span>');

							// 更新剧集操作
							if($('#episodesList .current').next('a').length){
								$('#episodesControl a.prev').show();
							}else{
								$('#episodesControl a.prev').hide();
							}
							if($('#episodesList .current').prev('a').length){
								$('#episodesControl a.next').show();
							}else{
								$('#episodesControl a.next').hide();
							}
						}

						$('#playBoxIframe iframe').remove();
						$('#playBoxIframe').append('<iframe frameborder="no" border="0" scrolling="no" allowfullscreen="true" allowtransparency="true" src="./box.html?src=' + encodeURIComponent($(this).attr('data-api') + encodeURIComponent($(this).attr('data-href'))) + '"></iframe>');

						$('html,body').animate({scrollTop: 0},300);
					}else{
						location.href = $(this).attr('data-href');
					}
				}else{
					$('#loadBox2').show();
					$('#episodesBox').hide();
					var api = $(this).attr('data-api');
					$.getJS(jsUrl,{act: 'more',id: $.URI.vid,from: $(this).attr('data-href')},function(rData){
						try{
							var rt = JSON.parse(rData);
							switch(parseInt(rt.rt)){
								case 0:
									$('#episodesList a').remove();

									// 载入剧集
									if(template.episodes){

										if(rt.data.title == 1){ $('#episodesBox').addClass('float-none') }

										for(var i in rt.data.list){
											$(parseTemplate(template.episodes,{api: api,href: rt.data.list[i],number: i})).prependTo($('#episodesList'));
										}

										// 显示剧集
										$('#loadBox2').hide();
										$('#episodesBox').show();
										// 是否有剧集记录
										var episodes_log = $.cookie('episodes_log');
										if(episodes_log){
											try{

												var episodes_log = JSON.parse(episodes_log);
												if(episodes_log[$.URI.vid] && $('#episodesList a[value="' + episodes_log[$.URI.vid] + '"]').length == 1){
													// 自动点击记录剧集
													if($('#episodesList a[value="' + episodes_log[$.URI.vid] + '"]').attr('data-api')){
														$('#episodesList a[value="' + episodes_log[$.URI.vid] + '"]').trigger('tap'); }
												}else{
													// 自动点击第一个
													if($('#episodesList a:eq(0)').attr('data-api')){ $('#episodesList a:eq(0)').trigger('tap'); }
												}

											}catch(e){
												// 自动点击第一个
												if($('#episodesList a:eq(0)').attr('data-api')){ $('#episodesList a:eq(0)').trigger('tap'); }
											}
										}else{
											// 自动点击第一个
											if($('#episodesList a:eq(0)').attr('data-api')){ $('#episodesList a:eq(0)').trigger('tap'); }
										}

										// 更新剧集操作
										if($('#episodesList .current').next('a').length){
											$('#episodesControl a.prev').show();
										}else{
											$('#episodesControl a.prev').hide();
										}
										if($('#episodesList .current').prev('a').length){
											$('#episodesControl a.next').show();
										}else{
											$('#episodesControl a.next').hide();
										}

									}else{
										console.log('未知的列表模板');
									}
								break;
								default:
									$.showError(rt);
							}
						}catch(e){
							$.showDataError();
						}
					})
				}
			},'a');

			$.getJS(jsUrl,{act: 'item',id: $.URI.vid},function(rData){
				try{
					var rt = JSON.parse(rData);
					switch(parseInt(rt.rt)){
						case 0:
							if(Object.keys(rt.data).length){
								
								$('#titleItem').attr('value',$.htmlEncode(rt.data.title)).html($.htmlEncode(rt.data.title));
								$('title').html('正在播放 - ' + $.htmlEncode(rt.data.title));
								if(rt.data.item.length){
									rt.data.item = '<span>' + rt.data.item.join('</span><span>') + '</span>';
								}else{
									rt.data.item = '';
								}
								$('#itemList').html(parseTemplate(template.item,rt.data)).show();

								if(rt.data.from && rt.data.from.length){

									$('#fromList a').remove();
									// 载入线路
									if(template.from){
										
										var number = 0;
										for(var i in rt.data.from){
											if(jsApi && jsApi.length){for(var j in jsApi){

												$(parseTemplate(template.from,{hasmore: rt.data.hasmore,from: rt.data.from[i],api: jsApi[j],number: ++ number})).insertBefore($('#fromList .clear'));
											}}else{

												$('#playBoxIframe').hide();
												$(parseTemplate(template.from,{hasmore: rt.data.hasmore,from: rt.data.from[i],api: '',number: ++ number})).insertBefore($('#fromList .clear'));
											}
										}

										// 显示并自动点击第一个
										if(rt.data.hasmore != 1 && rt.data.hasmore != 2){ $('#loadBox2').hide(); }
										$('#fromList').show();
										if($('#fromList a:eq(0)').attr('data-hasmore') == 1 || $('#fromList a:eq(0)').attr('data-hasmore') == 2 || $('#fromList a:eq(0)').attr('data-api')){ $('#fromList a:eq(0)').trigger('tap'); }

									}else{
										console.log('未知的列表模板');
									}
								}else{
									$('#playBox').hide();
									$('#noDataBox').show();
								}

								// 猜你喜欢
								if(rt.data.guess && rt.data.guess.length){

									for(var i in rt.data.guess){
										$(parseTemplate(template.guess,rt.data.guess[i])).insertBefore($('#guessList .clear'));
									}
									$('#guessBox').show();
								}

								$('#loadBox').hide();
								$('#dataBox').show();
							}else{
								$('title').html('资源不存在');
								$('#loadBox,#playBox').hide();
								$('#dataBox,#noDataBox').show();
							}

						break;
						default:
							$.showError(rt);
					}
				}catch(e){
					$.showDataError();
				}
			})
		}else{
			location.href = './index.html';
		}
	})

	pageLoaded = true;
}
if(typeof(pageLoaded) == 'undefined' && typeof(jsApi) != 'undefined'){ pageLoad(); }