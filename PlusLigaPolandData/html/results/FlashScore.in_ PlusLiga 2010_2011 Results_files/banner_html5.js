var clickTag='';
if (a=window.location.href.match(/clickTag=(.*)/)) {
	clickTag=a[1];
	if (clickTag.indexOf('%26')!=-1)
		clickTag=unescape(clickTag);
}
var ar_redirect = clickTag;
var clickTAG = clickTag;

function makeClick(url) {
	if (typeof(url)=='object') {
		if (url.other)
			url=url.other;
		else
			url='';
	}
	if (typeof(url)=='undefined')
		url='';
	else if (url.indexOf('//') == -1)
		url='';
	else
		url=escape(url);
	if (url!='')
		url='&u'+url;
	window.open(clickTag+url);
return false;

}


window.ar_callLink = function (param) {
	makeClick(param);
	return void(0);
}

function ar_sendPixel(src) {}

if (typeof admixAPI!='undefined')
	admixAPI.click = makeClick;

if (typeof ExitApi!='undefined')
	ExitApi.exit = makeClick;

if( window.addEventListener ){
	    window.addEventListener("message", lisMes, false);
			window.addEventListener("click", pstMes, false);
	  }else{
	    window.attachEvent("onmessage", lisMes);
			window.attachEvent("onclick", pstMes);
}

function lisMes(event){ console.log('lisMes');
	  if(typeof event != 'undefined' && typeof event.data != 'undefined' && event.data != null){
	      try{
	         var data = (typeof event.data == 'string')?JSON.parse(event.data):event.data;
	         if(typeof data.advMediaId != "undefined" && data.advMediaId != null){
	             window.advMediaId = data.advMediaId;
	         }
					 if(typeof data.advZoneId != "undefined" && data.advZoneId != null){
							 window.advZoneId = data.advZoneId;
	         }
					 console.log(window.advMediaId);
					 console.log(window.advZoneId);
	         }catch(e){}
	    }
}
function pstMes(){ console.log('pstMes');
	if(typeof window.advMediaId != 'undefined'){
		var post_data = '{"advZoneId":"'+window.advZoneId+'","advMediaId":"'+window.advMediaId+'"}';
		console.log(post_data);
			if(typeof MessageChannel != 'undefined' ){
				try{JSON.stringify(post_data)}catch(e){console.log(e);}
				try{
						var channel = new MessageChannel();
						window.parent.postMessage(post_data, '*', [channel.port2]);
					}catch(e){}
			}else{
				if(typeof window.postMessage != 'undefined' ){
						setTimeout(function(){window.parent.postMessage(post_data, '*'); }, 1010, window.parent, post_data);
			}
		}
	}
}
