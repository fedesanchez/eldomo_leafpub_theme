(function($){var F=$.fancybox;F.helpers.thumbs={defaults:{width:50,height:50,position:'bottom',source:function(item){var href;if(item.element){href=$(item.element).find('img').attr('src');}
if(!href&&item.type==='image'&&item.href){href=item.href;}
return href;}},wrap:null,list:null,width:0,init:function(opts,obj){var that=this,list,thumbWidth=opts.width,thumbHeight=opts.height,thumbSource=opts.source;list='';for(var n=0;n<obj.group.length;n++){list+='<li draggable="false" style="width:'+ thumbWidth+'px;height:'+ thumbHeight+'px;"></li>';}
this.wrap=$('<div id="fancybox-thumbs"></div>').addClass(opts.position).appendTo('body');this.list=$('<ul>'+ list+'</ul>').appendTo(this.wrap);$.each(obj.group,function(i){var href=thumbSource(obj.group[i]);if(!href){return;}
$("<img />").load(function(){var width=this.width,height=this.height,widthRatio,heightRatio,parent;if(!that.list||!width||!height){return;}
widthRatio=width/thumbWidth;heightRatio=height/thumbHeight;parent=that.list.children().eq(i);if(widthRatio>=1&&heightRatio>=1){if(widthRatio>heightRatio){width=Math.floor(width/heightRatio);height=thumbHeight;}else{width=thumbWidth;height=Math.floor(height/widthRatio);}}
$(this).css({width:thumbWidth,height:thumbHeight,top:Math.floor(thumbHeight/2- height/2),left:Math.floor(thumbWidth/2- width/2)});parent.width(thumbWidth).height(thumbHeight);$(this).hide().appendTo(parent).fadeIn(300);$('<div class=holder />').appendTo(parent)}).attr({'src':href,'draggable':'false'});});this.width=thumbWidth;if(this.width*(obj.group.length)>$(window).width()){left=Math.floor($(window).width()*0.5-(obj.index*this.width+ this.width*0.5))
if(left>0){left=0}
if(left<($(window).width()-this.width*(obj.group.length))){left=$(window).width()-this.width*(obj.group.length)}
this.list.css('left',left);}
this.list.width(this.width*(obj.group.length))
$('#fancybox-thumbs ul li').bind('click',function(){var el=$(this);$.fancybox.jumpto(el.index());return false;})
$pep=$('#fancybox-thumbs ul')
if($pep.width()>$(window).width()){$pep.pep({start:function(){$('#fancybox-thumbs ul li').unbind('click');},stop:function(){setTimeout(function(){$('#fancybox-thumbs ul li').bind('click',function(){var el=$(this);$.fancybox.jumpto(el.index());return false;})},100)},axis:'x',useCSSTranslation:false,shouldPreventDefault:false,constrainTo:[0,0,0,($pep.width()- $("#fancybox-thumbs").width())*-1]});}
$(window).resize(function(){if($pep.width()>$(window).width()){$pep.pep({start:function(){$('#fancybox-thumbs ul li').unbind('click');},stop:function(){setTimeout(function(){$('#fancybox-thumbs ul li').bind('click',function(){var el=$(this);$.fancybox.jumpto(el.index());return false;})},100)},axis:'x',useCSSTranslation:false,shouldPreventDefault:false,constrainTo:[0,0,0,($pep.width()- $("#fancybox-thumbs").width())*-1]});}
else{$.pep.unbind($pep);$pep.css({position:'relative',left:0})}})},beforeLoad:function(opts,obj){if(obj.group.length<2){obj.helpers.thumbs=false;return;}
obj.margin[opts.position==='top'?0:2]+=((opts.height)+ 15);},afterShow:function(opts,obj){if(this.list){this.onUpdate(opts,obj);}else{this.init(opts,obj);}
this.list.children().removeClass('active').eq(obj.index).addClass('active');},onUpdate:function(opts,obj){if(this.list){this.width=this.list.children().eq(0).outerWidth(true);if(this.width*(obj.group.length)>$(window).width()){left=Math.floor($(window).width()*0.5-(obj.index*this.width+ this.width*0.5))
if(left>0){left=0}
if(left<($(window).width()-this.width*(obj.group.length))){left=$(window).width()-this.width*(obj.group.length)}
this.list.stop(true).animate({'left':left},150);}}},beforeClose:function(){if(this.wrap){this.wrap.remove();}
this.wrap=null;this.list=null;this.width=0;}}}(jQuery));