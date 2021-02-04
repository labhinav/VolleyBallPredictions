
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"315",
  
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OnetrustActiveGroups"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"type"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"no_sport",
      "vtp_name":"sport"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"country"
    },{
      "function":"__u",
      "vtp_stripWww":true,
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"GDPR_analytics"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var m=2,n=1,p=199,c={expiresMs:18E5,domain:",["escape",["macro",6],8,16],"},e={objectName:\"ga_client_id\",expires:63072E6},g=\"_ga_originalSendHitTask\";return function(a){function h(b){return(b=document.cookie.match(\"(^|;)\\\\s*\"+b+\"\\\\s*\\x3d\\\\s*([^;]+)\"))?b.pop():\"\"}window[g]=window[g]||a.get(\"sendHitTask\");if(\"off\"===",["escape",["macro",7],8,16],")a.set(\"sendHitTask\",null);else{\"number\"===typeof m\u0026\u0026a.set(\"dimension\"+m,a.get(\"clientId\"));\"number\"===typeof n\u0026\u0026a.set(\"dimension\"+n,a.get(\"hitType\"));if(\"object\"===\ntypeof e\u0026\u0026\"string\"===typeof e.objectName\u0026\u0026\"number\"===typeof e.expires\u0026\u0026window.Storage){var k=a.get(\"clientId\");k=JSON.stringify({clientId:k,expires:(new Date).getTime()+e.expires});window.localStorage.setItem(e.objectName,k)}\"object\"===typeof c\u0026\u0026c.hasOwnProperty(\"expiresMs\")\u0026\u0026c.hasOwnProperty(\"domain\")\u0026\u0026(gahitcount=!isNaN(h(\"_sessionhits_\"+a.get(\"trackingId\")))\u0026\u0026parseInt(h(\"_sessionhits_\"+a.get(\"trackingId\")))?parseInt(h(\"_sessionhits_\"+a.get(\"trackingId\")))+1:1,d=new Date,d.setTime(d.getTime()+c.expiresMs),\ndocument.cookie=\"_sessionhits_\"+a.get(\"trackingId\")+\"\\x3d\"+gahitcount+\"; expires\\x3d\"+d.toUTCString()+\"; path\\x3d\/; domain\\x3d\"+c.domain,0===gahitcount%500\u0026\u0026(a.set(\"referer\",void 0,!0),a.set(\"sessionControl\",\"start\",!0),window.dataLayer.push({event:\"ga.sessions.reset\"})));a.set(\"sendHitTask\",function(b){var t=b,q=window[g],u=!0;try{if(\"number\"===typeof p){var f=b.get(\"hitPayload\");f+=\"\\x26cd\"+p+\"\\x3d\";f+=f.length+f.length.toString().length;b.set(\"hitPayload\",f,!0)}u\u0026\u0026q(b);if(\"object\"===typeof c\u0026\u0026\nc.hasOwnProperty(\"expiresMs\")\u0026\u0026c.hasOwnProperty(\"domain\")){var r=b.get(\"hitType\"),v=b.get(\"nonInteraction\");if(!0!==v\u0026\u0026(\"pageview\"===r||\"event\"===r)){var l=new Date;l.setTime(l.getTime()+c.expiresMs);document.cookie=\"_session_\"+b.get(\"trackingId\")+\"\\x3dtrue; expires\\x3d\"+l.toUTCString()+\"; path\\x3d\/; domain\\x3d\"+c.domain+\";secure;samesite\\x3dnone\"}}}catch(w){q(t)}})}}})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",9],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",3],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*(\\?|\\\u0026)rd=.*","value",["template",["macro",3],"?",["macro",10]]],["map","key",".*(\\?|\\\u0026)group=.*","value",["template",["macro",3],"?",["macro",10]]],["map","key",".*(\\?|\\\u0026)gclid=.*","value",["template",["macro",3],"?",["macro",10]]],["map","key",".*(\\?|\\\u0026)ga=.*","value",["template",["macro",3],"?",["macro",10]]],["map","key",".*(\\?|\\\u0026)utm_.*","value",["template",["macro",3],"?",["macro",10]]],["map","key",".*(\\?|\\\u0026)banner=.*","value",["template",["macro",3],"?",["macro",10]]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"off\"===",["escape",["macro",7],8,16],"?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){reg=ls.loginClient.getIdent();if(null!==reg\u0026\u0026void 0!==reg)return reg})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"ga_client_id\";if(window.localStorage){a=window.localStorage.getItem(a)||\"{}\";a=JSON.parse(a);var b=(new Date).getTime();if(a.clientId\u0026\u0026a.expires\u0026\u0026b\u003C=a.expires)return a.clientId}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"myLeaguesMenu\";var b,c=[];for(b in localStorage)localStorage.hasOwnProperty(b)\u0026\u0026(b.match(a)||!a\u0026\u0026\"string\"===typeof b)\u0026\u0026c.push(localStorage.getItem(b).length);a=c;0\u003Ca.length?(a=window.localStorage.getItem(\"myTeams_participants2\"),a=(a.match(\/name\/g)||[]).length):a=0;return a})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"no_label",
      "vtp_name":"event-name"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",17],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"199",
      "vtp_map":["list",["map","key","odds","value","4"],["map","key","all-matches","value","8"],["map","key","live","value","9"],["map","key","finished","value","10"],["map","key","scheduled","value","11"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",17],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"199",
      "vtp_map":["list",["map","key","odds-.*","value","3"],["map","key","stats-.*","value","7"],["map","key",".*h2h.*","value","6"],["map","key","match-summary","value","5"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",16],
      "vtp_defaultValue":"na",
      "vtp_map":["list",["map","key","iframe-bookmark-click","value",["macro",18]],["map","key","detail-bookmark-click","value",["macro",19]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.localStorage.getItem(\"viewport\")})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",21],
      "vtp_defaultValue":"0",
      "vtp_map":["list",["map","key","fs","value","1"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return void 0==",["escape",["macro",13],8,16],"?\"non-logged-in\":\"logged-in\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.createElement(\"ins\");a.className=\"AdSense\";a.style.display=\"block\";a.style.position=\"absolute\";a.style.top=\"-1px\";a.style.height=\"1px\";document.body.appendChild(a);var b=!a.clientHeight;document.body.removeChild(a);return b})();"]
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementById(\"utime\").innerHTML})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"no_settings",
      "convert_undefined_to":"no_settings",
      "vtp_javascript":["template","(function(){function b(a){var c,b=[];for(c in localStorage)localStorage.hasOwnProperty(c)\u0026\u0026(c.match(a)||!a\u0026\u0026\"string\"===typeof c)\u0026\u0026b.push(localStorage.getItem(c).length);return b}var a=\"\",d=\"\";a=\"\";a=0\u003Cb(\"myLeaguesMenu\").length?\"useML\":\"notUseML\";d=0\u003Cb(\"myTeams_participants\").length?\"useMT\":\"notUseMT\";return a=a+\"_\"+d})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"tournament"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"stage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subpage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"participant"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"archive"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=\"id_\"+",["escape",["macro",30],8,16],"+\",tr_\"+",["escape",["macro",31],8,16],"+\",st_\"+",["escape",["macro",32],8,16],"+\",sp_\"+",["escape",["macro",33],8,16],"+\",pt_\"+",["escape",["macro",34],8,16],"+\",ar_\"+",["escape",["macro",35],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.referrer})();"]
    },{
      "function":"__dbg"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_stripWww":false,
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",39],
      "vtp_defaultValue":"UA-78514783-4",
      "vtp_map":["list",["map","key","www.flashscore.sk","value","UA-207011-8"],["map","key","www.flashscore.at","value","UA-26033729-11"],["map","key","www.flashscore.se","value","UA-821699-42"],["map","key","www.flashscore.in","value","UA-30726477-4"],["map","key","www.wynikinazywo.pl","value","UA-30726477-5"],["map","key","www.flashscore.bg","value","UA-207011-22"],["map","key","www.flashscore.co.id","value","UA-207011-26"],["map","key","www.flashscore.co.kr","value","UA-207011-27"],["map","key","www.flashscore.com.my","value","UA-207011-25"],["map","key","www.flashscore.si","value","UA-207011-24"],["map","key","www.baseball24.com","value","UA-40261560-5"],["map","key","www.basketball24.com","value","UA-40261560-4"],["map","key","www.cricket24.com","value","UA-40261560-2"],["map","key","www.golflive24.com","value","UA-40261560-7"],["map","key","www.icehockey24.com","value","UA-40261560-3"],["map","key","www.motorsport24.com","value","UA-40261560-8"],["map","key","www.tennis24.com","value","UA-40261560-1"],["map","key","www.soccer24.com","value","UA-26033729-10"],["map","key","www.canliskor.com","value","UA-821699-12"],["map","key","www.flashscores.co.uk","value","UA-821699-1"],["map","key","www.flashscore.nl","value","UA-821699-23"],["map","key","www.flashscore.com.au","value","UA-821699-27"],["map","key","www.livescore.in","value","UA-821699-8"],["map","key","www.livetulokset.com","value","UA-821699-10"],["map","key","www.liveticker.com","value","UA-30726477-3"],["map","key","www.scoreboard.com","value","UA-30726477-1"],["map","key","www.eredmenyek.com","value","UA-207011-14"],["map","key","www.flashscore.de","value","UA-207011-6"],["map","key","www.flashresultats.fr","value","UA-207011-15"],["map","key","www.flashscore.ro","value","UA-207011-12"],["map","key","www.livesport.cz","value","UA-207011-4"],["map","key","www.mismarcadores.com","value","UA-207011-10"],["map","key","www.soccerstand.com","value","UA-28208502-12"],["map","key","www.flashscore.pl","value","UA-191939-4"],["map","key","www.diretta.it","value","UA-207011-7"],["map","key","www.flashscore.com","value","UA-207011-5"],["map","key","www.rezultati.com","value","UA-207011-13"],["map","key","www.volleyball24.com","value","UA-40261560-9"],["map","key","www.horseracing24.com","value","UA-40261560-10"],["map","key","www.flashscore.dk","value","UA-207011-9"],["map","key","www.flashscore.ca","value","UA-30726477-6"],["map","key","www.flashscore.co.jp","value","UA-207011-29"],["map","key","www.flashscore.vn","value","UA-26033729-19"],["map","key","www.flashscore.info","value","UA-207011-28"],["map","key","www.flashscore.cat","value","UA-207011-30"],["map","key","www.handball24.com","value","UA-40261560-11"],["map","key","www.flashscore.ge","value","UA-26033729-20"],["map","key","www.flashscore.co.ke","value","UA-26033729-21"],["map","key","www.flashscore.com.ng","value","UA-26033729-22"],["map","key","www.flashscore.co.za","value","UA-26033729-23"],["map","key","www.flashscore24.co.za","value","UA-26033729-23"],["map","key","www.darts24.com","value","UA-40261560-12"],["map","key","www.flashscore.gr","value","UA-821699-11"],["map","key","www.flashscore.com.tr","value","UA-821699-12"],["map","key","www.flashscore.es","value","UA-207011-10"],["map","key","www.flashscore.pt","value","UA-821699-15"],["map","key","www.flashscore.co.uk","value","UA-821699-1"],["map","key","www.flashscore.com.br","value","UA-30726477-2"],["map","key","www.flashscore.ru","value","UA-821699-9"],["map","key","www.flashscore.com.ua","value","UA-821699-48"],["map","key","www.flashscore.kz","value","UA-821699-51"],["map","key","www.flashscore.ua","value","UA-821699-49"],["map","key","www.flashscore.it","value","UA-821699-34"],["map","key","www.flashscore.fr","value","UA-207011-15"],["map","key","www.flashscore.com.mx","value","UA-30726477-9"],["map","key","www.flashscore.co","value","UA-30726477-10"],["map","key","www.flashscore.pe","value","UA-30726477-11"],["map","key","www.flashscore.com.ar","value","UA-30726477-12"],["map","key","www.flashscore.com.ve","value","UA-30726477-13"],["map","key","www.flashscore.cl","value","UA-30726477-14"],["map","key","www.flashscore.es","value","UA-207011-10"],["map","key","www.flashscore.ru.com","value","UA-821699-54"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",38],
      "vtp_defaultValue":["macro",40],
      "vtp_map":["list",["map","key","true","value","UA-78514783-2"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",4]],["map","index","2","group",["macro",2]],["map","index","3","group",["macro",5]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","true"],["map","fieldName","cookieDomain","value","auto"],["map","fieldName","customTask","value",["macro",8]],["map","fieldName","page","value",["macro",11]],["map","fieldName","allowAdFeatures","value",["macro",12]],["map","fieldName","userId","value",["macro",13]],["map","fieldName","clientId","value",["macro",14]],["map","fieldName","cookieFlags","value","secure;samesite=none"]],
      "vtp_metric":["list",["map","index","1","metric",["macro",15]],["map","index",["macro",20],"metric","1"],["map","index","12","metric",["macro",22]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","4","dimension",["macro",23]],["map","index","5","dimension",["macro",24]],["map","index","6","dimension",["macro",25]],["map","index","8","dimension",["macro",26]],["map","index","9","dimension",["macro",27]],["map","index","10","dimension",["macro",28]],["map","index","3","dimension",["macro",13]],["map","index","7","dimension",["macro",15]],["map","index","11","dimension",["macro",29]],["map","index","12","dimension",["macro",36]],["map","index","14","dimension",["macro",37]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",41],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "convert_null_to":["macro",4],
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",4],
      "vtp_name":"event-sport"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"unknown_position",
      "vtp_name":"bannerPosition"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"unknown_zone",
      "vtp_name":"bannerZoneId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"no_ID",
      "vtp_name":"bannerId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",45],8,16],"+\";\"+",["escape",["macro",46],8,16],"+\";\"+",["escape",["macro",47],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"fonce_current_session"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=localStorage.getItem(\"VisitCounter_counter\");return a=parseInt(a)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"unknown_source",
      "vtp_name":"event-source"
    },{
      "function":"__jsm",
      "convert_null_to":"-",
      "convert_undefined_to":"-",
      "vtp_javascript":["template","(function(){return document.referrer})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"theme"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"theme-user"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"theme-browser"
    },{
      "function":"__jsm",
      "convert_null_to":"default_null",
      "vtp_javascript":["template","(function(){return\"th_\"+",["escape",["macro",54],8,16],"+\"_thu_\"+",["escape",["macro",55],8,16],"+\"_thb_\"+",["escape",["macro",56],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=localStorage.getItem(\"notificationStatus\");return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"games"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"teams"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ls_tracking"
    },{
      "function":"__cvt_1314122_369",
      "vtp_properties":["list",["map","name","is_logged","value",["macro",25]],["map","name","adblock","value",["macro",26]],["map","name","sett_dark_mode_enabled","value",["macro",57]],["map","name","sett_notif_enabled","value",["macro",58]],["map","name","my_games_count","value",["macro",59]],["map","name","my_teams_count","value",["macro",60]],["map","name","internal_anonymous_code","value",["macro",61]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_consent"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"agree\"==",["escape",["macro",63],8,16],"?1:0})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",39],
      "vtp_defaultValue":"G-FF3F9MY7QW",
      "vtp_map":["list",["map","key","www.baseball24.com","value","G-4WFW5YRZ5E"],["map","key","www.basketball24.com","value","G-CY8GT1KWYC"],["map","key","www.cricket24.com","value","G-DRL6VBMEZ6"],["map","key","www.darts24.com","value","G-Z1P3XBR4D4"],["map","key","www.diretta.it","value","G-PR4TNKN90Z"],["map","key","www.eredmenyek.com","value","G-V9HV60G20T"],["map","key","www.flashresultats.fr","value","G-ZXWH2V7CB4"],["map","key","www.flashscore.at","value","G-ME5EHMKSTX"],["map","key","www.flashscore.bg","value","G-86904VXK64"],["map","key","www.flashscore.ca","value","G-JWCXTXDM86"],["map","key","www.flashscore.cat","value","G-YN7FR5WL7Y"],["map","key","www.flashscore.co.id","value","G-2V2B6N0ZGQ"],["map","key","www.flashscore.co.jp","value","G-6PMR55WC5W"],["map","key","www.flashscore.co.ke","value","G-H3L0GVF67T"],["map","key","www.flashscore.co.kr","value","G-YRPYZYLGG2"],["map","key","www.flashscore.co.uk","value","G-JPH20PFDQP"],["map","key","www.flashscore.com","value","G-3NV6GD9ZTT"],["map","key","www.flashscore.com.au","value","G-LHRG10E1N6"],["map","key","www.flashscore.com.ng","value","G-H6QEXZV7F3"],["map","key","www.flashscore.com.tr","value","G-4DNLLS5RXJ"],["map","key","www.flashscore.de","value","G-QHD19GSCER"],["map","key","www.flashscore.dk","value","G-Y2BRQ7S63Z"],["map","key","www.flashscore.ge","value","G-3X2B2G3379"],["map","key","www.flashscore.gr","value","G-ZS1L4NQG9H"],["map","key","www.flashscore.in","value","G-4B9MFR9VS7"],["map","key","www.flashscore.info","value","G-BZV05NJN0V"],["map","key","www.flashscore.nl","value","G-FTLD060QTX"],["map","key","www.flashscore.pl","value","G-NFBHNF97N9"],["map","key","www.flashscore.pt","value","G-HKYFWWJ2Q6"],["map","key","www.flashscore.ro","value","G-L55H0M8ZLR"],["map","key","www.flashscore.se","value","G-WXRETF2T12"],["map","key","www.flashscore.si","value","G-26DHVSBCTX"],["map","key","www.flashscore.sk","value","G-M6K8F8M99N"],["map","key","www.flashscore.vn","value","G-4LR7J607PF"],["map","key","www.flashscore24.co.za","value","G-MENG1C4DQ2"],["map","key","www.golflive24.com","value","G-GYNLRB4EVL"],["map","key","www.handball24.com","value","G-EHCTCY9X2F"],["map","key","www.horseracing24.com","value","G-M2XZLH4JVC"],["map","key","www.icehockey24.com","value","G-F63S7Z5BCC"],["map","key","www.livescore.in","value","G-SW4L2TBP4K"],["map","key","www.livesport.cz","value","G-SN1CJRK3Q2"],["map","key","www.liveticker.com","value","G-ZC646LBTNZ"],["map","key","www.livetulokset.com","value","G-3GPWT97T30"],["map","key","www.mismarcadores.com","value","G-BE0BXCPJ8J"],["map","key","www.motorsport24.com","value","G-NEY242SQBP"],["map","key","www.flashscore.com.ua","value","G-06E6K5K8FJ"],["map","key","www.flashscore.kz","value","G-CKG7R221QX"],["map","key","www.flashscore.ru","value","G-JF1VRF7QHL"],["map","key","www.flashscore.ua","value","G-06FHN4SQ6S"],["map","key","www.resultados.com","value","G-DK7FZPG8CJ"],["map","key","www.rezultati.com","value","G-PKGVM285CC"],["map","key","www.risultati.it","value","G-973JWFCNYN"],["map","key","www.scoreboard.com","value","G-2ML68HVXTQ"],["map","key","www.soccer24.com","value","G-2Z8QSL6XVX"],["map","key","www.soccerstand.com","value","G-05TVLZKKZS"],["map","key","www.tennis24.com","value","G-B5PTDRXVG4"],["map","key","www.volleyball24.com","value","G-M1KRDS6MVC"],["map","key","www.vysledky.cz","value","G-ETNFKX879R"],["map","key","www.wynikinazywo.pl","value","G-HVV3LDDW2Z"],["map","key","www.flashscore.com.br","value","G-DK7FZPG8CJ"],["map","key","www.flashscore.it","value","G-973JWFCNYN"],["map","key","www.flashscore.fr","value","G-ZXWH2V7CB4"],["map","key","www.flashscore.es","value","G-BE0BXCPJ8J"],["map","key","www.flashscore.cl","value","G-XKWK8LCK9V"],["map","key","www.flashscore.co","value","G-CJQVV47BJW"],["map","key","www.flashscore.com.ar","value","G-6Q2BN4VWNK"],["map","key","www.flashscore.com.mx","value","G-FPBBK9FDCK"],["map","key","www.flashscore.com.ve","value","G-YXLDPJGDK9"],["map","key","www.flashscore.pe","value","G-NTVDMC1245"],["map","key","www.flashscore.ru.com","value","G-QSXHW82JK9"],["map","key","www.flashscore.com.my","value","G-ZT2JF8KYM4"]]
    },{
      "function":"__c",
      "vtp_value":["template","^ea=",["macro",16],"^el=",["macro",17]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",66],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":["macro",16],
      "vtp_map":["list",["map","key","\\^ea=bookmaker\\-button\\-click\\^.*","value","CLICK_ODD"],["map","key","\\^ea=checkbox\\-click\\^.*","value","SCN_GDPR_CONSENT_DIALOG"],["map","key","\\^ea=detail\\-bookmark\\-click\\^((?!odds\\-comparison_).)*$","value","SCN_TAB_DETAIL"],["map","key","\\^ea=detail\\-bookmark\\-click\\^el=odds\\-comparison_.*","value","SCN_TAB_DETAIL_ODDS"],["map","key","\\^ea=iframe\\-bookmark\\-click\\^((?!calendar|sound|match\\-comments).)*$","value","SCN_TAB_MAIN"],["map","key","\\^ea=iframe\\-bookmark\\-click\\^el=calendar\\-arrow\\-next","value","SCN_DAY_NEXT"],["map","key","\\^ea=iframe\\-bookmark\\-click\\^el=calendar\\-arrow\\-previous","value","SCN_DAY_PREV"],["map","key","\\^ea=iframe\\-icon\\-click\\^el=add\\-my\\-game","value","ADD_MY_GAMES"],["map","key","\\^ea=iframe\\-icon\\-click\\^el=add\\-my\\-games\\-league","value","ADD_MY_GAMES_LEAGUE"],["map","key","\\^ea=web\\-click\\^el=search","value","SCN_SEARCH"],["map","key","\\^ea=checkbox\\-click\\^.*","value","SCN_GDPR_CONSENT_DIALOG"],["map","key","\\^ea=detail\\-button\\-click\\^.*","value","SCN_TAB_DETAIL"],["map","key","\\^ea=file\\-click\\^.*","value","CLICK_FILE"],["map","key","\\^ea=iframe\\-icon\\-mouseover\\^.*","value","OVER_ICON"],["map","key","\\^ea=news\\-article\\-click\\^.*","value","CLICK_NEWS_ARTICLE"],["map","key","\\^ea=odds\\-iframe\\-click\\^.*","value","SCN_EVENT_CLICK_ODD"],["map","key","\\^ea=web\\-click\\^el=registration","value","USER_REG"],["map","key","\\^ea=registration\\-form\\^el=reg\\-signup\\-click","value","USER_REG_FORM"],["map","key","\\^ea=registration\\-form\\^el=reg\\-signup\\-no\\-errors","value","USER_REG_NO_ERR"],["map","key","\\^ea=registration\\-form\\^el=reg\\-close","value","USER_REG_CLOSE"],["map","key","\\^ea=web\\-click\\^el=login","value","USER_LOGIN"],["map","key","\\^ea=registration\\-form\\^el=log\\-login\\-click","value","USER_LOGIN_FORM"],["map","key","\\^ea=registration\\-form\\^el=log\\-login\\-no\\-errors","value","USER_LOGIN_NO_ERR"],["map","key","\\^ea=registration\\-form\\^el=log\\-close","value","USER_LOGIN_CLOSE"],["map","key","\\^ea=web\\-click\\^el=logout","value","USER_LOGOUT"],["map","key","\\^ea=web\\-click\\^el=delete_account_link","value","USER_DELETE"],["map","key","\\^ea=web\\-click\\^el=delete_account_yes","value","USER_DELETE"],["map","key","\\^ea=add\\-my\\-league\\^.*","value","ADD_MY_LEAGUES"],["map","key","\\^ea=remove\\-my\\-league\\^.*","value","REMOVE_MY_LEAGUES"],["map","key","\\^ea=add-\\my\\-team\\^.*","value","ADD_MY_TEAM"],["map","key","\\^ea=remove\\-my\\-team\\^.*","value","REMOVE_MY_TEAM"],["map","key","\\^ea=click\\-banner\\^.*","value","CLICK_BANNER"],["map","key","\\^ea=iframe\\-bookmark\\-click\\^el=calendar","value","SCN_DAY"],["map","key","\\^ea=web\\-click\\^el=settings","value","CLICK_SETTINGS"],["map","key","\\^ea=iframe\\-bookmark\\-click\\^el=match\\-comments","value","CLICK_PREVIEW"],["map","key","\\^ea=iframe\\-icon\\-click\\^el=tv_youtube_stream","value","CLICK_YTB_LINK"],["map","key","\\^ea=iframe\\-icon\\-click\\^el=remove\\-my\\-game","value","REMOVE_MY_GAMES"],["map","key","\\^ea=iframe\\-icon\\-click\\^el=remove\\-my\\-games\\-league","value","REMOVE_MY_GAMES_LEAGUE"],["map","key","\\^ea=iframe\\-icon\\-click\\^((?!my\\-games).)*$","value","CLICK_ICON"],["map","key","\\^ea=gtm\\.scrollDepth\\^el=no_label","value","scroll"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event-cat"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",69],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\.apk$","value","CLICK_APK"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event-time"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"fonce_current_user_gdpr"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event_tv_start_order_from_event"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event_tv_start_play_from_event"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"tv_action_sec_from_event_start"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"tv_order_code"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"tv_player_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"tv_order_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"feature_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"no_value",
      "vtp_name":"event-value"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"undefined",
      "vtp_name":"gtm.scrollThreshold"
    },{
      "function":"__c",
      "vtp_value":"30"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"fonce_current_day"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=new Date,b=c.getMonth()+1;10\u003Eb\u0026\u0026(b=\"0\"+b);var a=c.getDate();10\u003Ea\u0026\u0026(a=\"0\"+a);c=c.getFullYear()+\"-\"+b+\"-\"+a;b=",["escape",["macro",86],8,16],";a=b.split(\",\");b=a[0];a=a[1];return a==c\u0026\u00261==b?1:0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=new Date,a=c.getMonth()+1;10\u003Ea\u0026\u0026(a=\"0\"+a);var b=c.getDate();10\u003Eb\u0026\u0026(b=\"0\"+b);return c.getFullYear()+\"-\"+a+\"-\"+b})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"fonce_current_user"
    },{
      "function":"__c",
      "vtp_value":"10"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"off",
      "vtp_name":"webNotification"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",6],
      "vtp_map":["list",["map","key","livesport.cz","value","OTAwMjE0NDEtYjIyZmYyN2JjZjYyNGE4NDYwMjVlMWFiNDAyNzE4NjMzNTgxNzNhYjViYjNlNDViNmE="],["map","key","flashscore.es","value","OTAwMjE0NDEtNTBmNWRiZjllYzRhYTYwMjUwYWY3YjExYTM5NGUwZGFhMTg1YWQ2ODY2NzFlM2VjNWI="],["map","key","flashscore.com","value","OTAwMjE0NDEtZjdlNjlkZGFhYTE3NzJkYmM4ZDk4MTY3MDBkODk5Y2Y1ODJiMWQyZTM5ODZjN2EyNzc="],["map","key","flashscore.com.ve","value","OTAwMjE0NDEtYzgzYzYyNGUxZjFmOGI2ODMzMDgyZmRjNGY3MTM1Mjk1ZjA3MTU3YzUzMWM4YjY5OGQ="],["map","key","flashscore.com.mx","value","OTAwMjE0NDEtYzI4Zjc5OGYwMTZjOWI2YWNjNjIyMGRiMzVmNDdkOGE1ODE3YTg4ODRmZDU3OGEzNmM="],["map","key","flashscore.de","value","OTAwMjE0NDEtMTZiN2QzZjA5YzkyNDQ2ODgzMjIyZTRmOTI5NDMwM2ZhMzM4MDMxYjdiODlmYWRlMWY="],["map","key","flashscore.co.uk","value","OTAwMjE0NDEtZGIwZDM2ODRmOTliM2Q1ZjMxYWVhN2NkZDNiZmIyMDA4YTkxNTBkMDUyZjM2ZjBhYjU="],["map","key","flashscore.it","value","OTAwMjE0NDEtM2M2ZDc4ZjkwZTAzMzQ4ZTY5MmEyZDA3M2Q2M2E5MmU3MDdlYTRhY2Q5MWM5ZDE3ODU="],["map","key","diretta.it","value","OTAwMjE0NDEtM2M2ZDc4ZjkwZTAzMzQ4ZTY5MmEyZDA3M2Q2M2E5MmU3MDdlYTRhY2Q5MWM5ZDE3ODU="],["map","key","flashscore.ru","value","OTAwMjE0NDEtMGNlYTQ2ZmZjOTZkZWIzNzQ3ODU4MDEzMDdhMjM2YzZkNGFiYzQ0NWJhYjVkM2FkNzc="],["map","key","testlivesport.cz","value","OTAwMjE0NDEtMDEyMDNkMTIwZWMyMGJiNDE1ZGQwZDE2MTg3NjA4MmE0NGFhNDc3NGE2ZmQ4N2IyZGQ="],["map","key","flashscore.sk","value","OTAwMjE0NDEtZGIwNWQ1YWY4N2U1ZTZiMWRjZDZkMjNhMzIyNWFkNzZlNzc5MjBhOGE0M2M4NDk1Njc="]]
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"HOST",
      "vtp_stripWww":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.title})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return navigator.platform})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=document.getElementById(\"utime\").innerHTML,a=document.getElementsByClassName(\"fleft\");a=a[\"0\"].innerText;return b=b+\"_m_\"+a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname+window.location.search+window.location.hash})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/\\?rd|\\?utm|\\?group|\\?gclid\/.test(",["escape",["macro",9],8,16],");return a=1==a?\"?\"+",["escape",["macro",10],8,16],":window.location.search.split(\"?\")[0].split(\"#\")[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/(\\?|\u0026)(rd=|utm_|group=|gclid=|ga=)\/.test(",["escape",["macro",9],8,16],");return 0==a?window.location.pathname:window.location.pathname+window.location.search})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"undefined",
      "vtp_name":"event-cat"
    },{
      "function":"__j",
      "vtp_name":"cjs.geoIP"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(model){model.data.keys.forEach(function(key){model.set(key,null)});function CE_READY(){CE2.set(1,\"",["escape",["macro",15],7],"\");CE2.set(2,\"",["escape",["macro",4],7],"\");CE2.set(3,\"",["escape",["macro",51],7],"\");CE2.set(4,\"",["escape",["macro",31],7],"\");CE2.set(5,\"",["escape",["macro",2],7],"\")}}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"fonce_sampled_user"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_has_registered_card"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_tv_number_of_bundles"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_has_registered_card"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_tv_number_of_bundles"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.innerWidth;return a=520\u003E=a?\"mobile\":820\u003E=a?\"tablet\":\"desktop\"})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__ctv"
    },{
      "function":"__r"
    },{
      "function":"__cid"
    }],
  "tags":[{
      "function":"__html",
      "priority":10,
      "metadata":["map"],
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"fonce_current_session\",d=new Date;d.setTime(d.getTime()+6E4*",["escape",["macro",85],8,16],");var expires=d.toGMTString(),conversionOccurred=",["escape",["macro",50],8,16],";conversionOccurred=void 0===conversionOccurred?0:conversionOccurred;document.cookie=cookieName+\"\\x3d\"+conversionOccurred+\"; expires\\x3d\"+expires+\";path\\x3d\/;domain\\x3d\"+",["escape",["macro",6],8,16],"+\";secure;samesite\\x3dnone\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":163
    },{
      "function":"__html",
      "priority":10,
      "metadata":["map"],
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"fonce_current_day\",todayCookie=",["escape",["macro",86],8,16],",conversionOccurred,conversionOccurredLastTime;if(void 0===todayCookie)conversionOccurred=0,conversionOccurredLastTime=",["escape",["macro",88],8,16],";else{var todayCookieParts=todayCookie.split(\",\");conversionOccurred=todayCookieParts[0];conversionOccurredLastTime=todayCookieParts[1]}var conversionOccurredCookieValue;\nconversionOccurredCookieValue=\"",["escape",["macro",88],7],"\"==conversionOccurredLastTime?conversionOccurred+\",\"+conversionOccurredLastTime:\"0,\"+",["escape",["macro",88],8,16],";document.cookie=cookieName+\"\\x3d\"+conversionOccurredCookieValue+\";path\\x3d\/;domain\\x3d\"+",["escape",["macro",6],8,16],"+\";secure;samesite\\x3dnone\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":165
    },{
      "function":"__html",
      "priority":10,
      "metadata":["map"],
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"fonce_current_user\",d=new Date;d.setTime(d.getTime()+144E6*",["escape",["macro",85],8,16],");var expires=d.toGMTString(),conversionOccurred=",["escape",["macro",89],8,16],";conversionOccurred=void 0===conversionOccurred?0:conversionOccurred;document.cookie=cookieName+\"\\x3d\"+conversionOccurred+\"; expires\\x3d\"+expires+\";path\\x3d\/;domain\\x3d\"+",["escape",["macro",6],8,16],"+\";secure;samesite\\x3dnone\";console.log(\"*** cookie '\"+cookieName+\"' set (all pages): \"+document.cookie);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":167
    },{
      "function":"__html",
      "priority":10,
      "metadata":["map"],
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"fonce_current_user_gdpr\",conversionOccurred=1,d=new Date;d.setTime(d.getTime()+144E6*",["escape",["macro",85],8,16],");var expires=d.toGMTString();document.cookie=cookieName+\"\\x3d\"+conversionOccurred+\"; expires\\x3d\"+expires+\";path\\x3d\/;domain\\x3d\"+",["escape",["macro",6],8,16],"+\";secure;samesite\\x3dnone\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":423
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",42],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":8
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",43],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",42],
      "vtp_eventAction":["macro",16],
      "vtp_eventLabel":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":24
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",42],
      "vtp_eventAction":"file-click",
      "vtp_eventLabel":"apk",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":43
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",43],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",42],
      "vtp_eventAction":["macro",16],
      "vtp_eventLabel":["macro",48],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":128
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",4],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",42],
      "vtp_eventAction":"detail-preview-click",
      "vtp_eventLabel":"show-full-preview",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":150
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-40261560-14",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":157
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Users",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","2","metric","1"]],
      "vtp_gaSettings":["macro",42],
      "vtp_eventAction":"UserReturned",
      "vtp_eventLabel":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":169
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",43],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",42],
      "vtp_eventAction":["macro",16],
      "vtp_eventLabel":["template",["macro",17],"_s_",["macro",52]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":170
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"404 error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",42],
      "vtp_eventAction":["macro",3],
      "vtp_eventLabel":["macro",53],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":181
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",4],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",42],
      "vtp_eventAction":"page_search",
      "vtp_eventLabel":"ctrl_or_cmd",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":182
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_fieldsToSet":["list",["map","name","user_id","value",["macro",13]],["map","name","user_properties","value",["macro",62]],["map","name","type","value",["macro",2]],["map","name","tournament","value",["macro",31]],["map","name","subpage","value",["macro",33]],["map","name","sport","value",["macro",4]],["map","name","participant","value",["macro",34]],["map","name","ID","value",["macro",30]],["map","name","country","value",["macro",5]],["map","name","archive","value",["macro",35]],["map","name","cookie_flags","value","samesite=none;secure"],["map","name","cooke_domain","value","auto"],["map","name","user_consent","value",["macro",64]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":["macro",65],
      "vtp_enableUserProperties":true,
      "tag_id":191
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_fieldsToSet":["list",["map","name","user_id","value",["macro",13]],["map","name","user_properties","value",["macro",62]],["map","name","type","value",["macro",2]],["map","name","tournament","value",["macro",31]],["map","name","subpage","value",["macro",33]],["map","name","sport","value",["macro",4]],["map","name","participant","value",["macro",34]],["map","name","ID","value",["macro",30]],["map","name","country","value",["macro",5]],["map","name","archive","value",["macro",35]],["map","name","cookie_flags","value","samesite=none;secure"],["map","name","cooke_domain","value","auto"],["map","name","user_consent","value",["macro",64]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-HRK2668K68",
      "vtp_enableUserProperties":true,
      "tag_id":199
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_eventName":["macro",67],
      "vtp_eventParameters":["list",["map","name","sport","value",["macro",43]],["map","name","label","value",["macro",17]],["map","name","article-source","value",["macro",52]],["map","name","article-cat","value",["macro",68]]],
      "vtp_measurementId":"G-HRK2668K68",
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":200
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",67],
      "vtp_eventParameters":["list",["map","name","sport","value",["macro",43]],["map","name","position","value",["macro",45]],["map","name","zoneId","value",["macro",46]],["map","name","bannerId","value",["macro",47]]],
      "vtp_measurementId":"G-HRK2668K68",
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":201
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",70],
      "vtp_eventParameters":["list",["map","name","sport","value",["macro",43]],["map","name","name","value","apk"]],
      "vtp_measurementId":["macro",65],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":202
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",67],
      "vtp_eventParameters":["list",["map","name","sport","value",["macro",43]],["map","name","label","value",["macro",17]],["map","name","type","value",["macro",2]],["map","name","tournament","value",["macro",31]],["map","name","subpage","value",["macro",33]],["map","name","participant","value",["macro",34]],["map","name","ID","value",["macro",30]],["map","name","country","value",["macro",5]],["map","name","archive","value",["macro",35]],["map","name","event-time","value",["macro",71]]],
      "vtp_measurementId":["macro",65],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":203
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",67],
      "vtp_eventParameters":["list",["map","name","sport","value",["macro",43]],["map","name","position","value",["macro",45]],["map","name","zoneId","value",["macro",46]],["map","name","bannerId","value",["macro",47]],["map","name","type","value",["macro",2]],["map","name","tournament","value",["macro",31]],["map","name","subpage","value",["macro",33]],["map","name","participant","value",["macro",34]],["map","name","ID","value",["macro",30]],["map","name","country","value",["macro",5]],["map","name","archive","value",["macro",35]]],
      "vtp_measurementId":["macro",65],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":204
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",67],
      "vtp_eventParameters":["list",["map","name","sport","value",["macro",43]],["map","name","label","value",["macro",17]],["map","name","article-source","value",["macro",52]],["map","name","article-cat","value",["macro",68]],["map","name","type","value",["macro",2]],["map","name","tournament","value",["macro",31]],["map","name","subpage","value",["macro",33]],["map","name","participant","value",["macro",34]],["map","name","ID","value",["macro",30]],["map","name","country","value",["macro",5]],["map","name","archive","value",["macro",35]]],
      "vtp_measurementId":["macro",65],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":205
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",67],
      "vtp_eventParameters":["list",["map","name","sport","value",["macro",43]],["map","name","label","value",["macro",17]],["map","name","article-source","value",["macro",52]],["map","name","article-cat","value",["macro",68]]],
      "vtp_measurementId":"G-HRK2668K68",
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":206
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"GDPR",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",42],
      "vtp_eventAction":"opt_out",
      "vtp_eventLabel":["macro",0],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":426
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"GDPR_USER_BLOCK_TRACKING",
      "vtp_eventParameters":["list",["map","name","active_groups","value",["macro",0]]],
      "vtp_measurementId":["macro",65],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":428
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",67],
      "vtp_eventParameters":["list",["map","name","event_tv_start_order_from_event","value",["macro",73]],["map","name","event_tv_start_play_from_event","value",["macro",74]],["map","name","event_id","value",["macro",75]],["map","name","tv_action_sec_from_event_start","value",["macro",76]],["map","name","tv_order_code","value",["macro",77]]],
      "vtp_measurementId":["macro",65],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":446
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",67],
      "vtp_eventParameters":["list",["map","name","event_id","value",["macro",75]],["map","name","event_tv_start_play_from_event","value",["macro",74]],["map","name","tv_action_sec_from_event_start","value",["macro",76]],["map","name","tv_order_code","value",["macro",77]]],
      "vtp_measurementId":["macro",65],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":451
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",67],
      "vtp_measurementId":["macro",65],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":454
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",67],
      "vtp_eventParameters":["list",["map","name","tv_player_type","value",["macro",78]],["map","name","event_tv_start_order_from_event","value",["macro",73]],["map","name","event_tv_start_play_from_event","value",["macro",74]],["map","name","event_id","value",["macro",75]],["map","name","tv_action_sec_from_event_start","value",["macro",76]],["map","name","tv_order_code","value",["macro",77]]],
      "vtp_measurementId":["macro",65],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":455
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",67],
      "vtp_eventParameters":["list",["map","name","event_tv_start_order_from_event","value",["macro",73]],["map","name","event_id","value",["macro",75]],["map","name","tv_action_sec_from_event_start","value",["macro",76]],["map","name","tv_order_code","value",["macro",77]],["map","name","tv_order_type","value",["macro",79]]],
      "vtp_measurementId":["macro",65],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":456
    },{
      "function":"__hjtc",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_hotjar_site_id":"1847866",
      "tag_id":498
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"CLICK_FEATURE_REGISTRATION",
      "vtp_eventParameters":["list",["map","name","ID","value",["macro",80]],["map","name","feature_type","value",["macro",81]],["map","name","type","value",["macro",2]],["map","name","tournament","value",["macro",31]],["map","name","stage","value",["macro",32]],["map","name","sport","value",["macro",4]],["map","name","country","value",["macro",5]],["map","name","subpage","value",["macro",33]]],
      "vtp_measurementId":["macro",65],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":506
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_eventName":["macro",67],
      "vtp_eventParameters":["list",["map","name","sport","value",["macro",43]],["map","name","label","value",["macro",82]],["map","name","type","value",["macro",2]],["map","name","tournament","value",["macro",31]],["map","name","subpage","value",["macro",33]],["map","name","participant","value",["macro",34]],["map","name","ID","value",["macro",30]],["map","name","country","value",["macro",5]],["map","name","archive","value",["macro",35]],["map","name","event-time","value",["macro",71]]],
      "vtp_measurementId":["macro",65],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":524
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_eventName":["macro",67],
      "vtp_eventParameters":["list",["map","name","sport","value",["macro",43]],["map","name","label","value",["macro",82]],["map","name","article-source","value",["macro",52]],["map","name","article-cat","value",["macro",68]]],
      "vtp_measurementId":"G-HRK2668K68",
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":525
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_eventName":["macro",67],
      "vtp_eventParameters":["list",["map","name","sport","value",["macro",43]],["map","name","label","value",["macro",17]],["map","name","type","value",["macro",2]],["map","name","tournament","value",["macro",31]],["map","name","subpage","value",["macro",33]],["map","name","participant","value",["macro",34]],["map","name","ID","value",["macro",30]],["map","name","country","value",["macro",5]],["map","name","archive","value",["macro",35]],["map","name","event-time","value",["macro",71]],["map","name","percent_scrolled","value",["macro",84]]],
      "vtp_measurementId":["macro",65],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":530
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_eventName":["macro",67],
      "vtp_eventParameters":["list",["map","name","sport","value",["macro",43]],["map","name","label","value",["macro",17]],["map","name","article-source","value",["macro",52]],["map","name","article-cat","value",["macro",68]],["map","name","percent_scrolled","value",["macro",84]]],
      "vtp_measurementId":"G-HRK2668K68",
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":531
    },{
      "function":"__cl",
      "tag_id":532
    },{
      "function":"__cl",
      "tag_id":533
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"90",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"1314122_526",
      "vtp_enableTriggerStartOption":true,
      "tag_id":534
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"fonce_current_session\",conversionOccurred=1,d=new Date;d.setTime(d.getTime()+6E4*",["escape",["macro",85],8,16],");var expires=d.toGMTString();document.cookie=cookieName+\"\\x3d\"+conversionOccurred+\"; expires\\x3d\"+expires+\";path\\x3d\/;domain\\x3d\"+",["escape",["macro",6],8,16],"+\";secure;samesite\\x3dnone\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":162
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"fonce_current_day\",conversionOccurred=1;document.cookie=cookieName+\"\\x3d\"+conversionOccurred+\",\"+",["escape",["macro",88],8,16],"+\"; expires\\x3d\"+expires+\";path\\x3d\/;domain\\x3d\"+",["escape",["macro",6],8,16],"+\";secure;samesite\\x3dnone\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":164
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"fonce_current_user\",conversionOccurred=1,d=new Date;d.setTime(d.getTime()+144E6*",["escape",["macro",85],8,16],");var expires=d.toGMTString();document.cookie=cookieName+\"\\x3d\"+conversionOccurred+\"; expires\\x3d\"+expires+\";path\\x3d\/;domain\\x3d\"+",["escape",["macro",6],8,16],"+\";secure;samesite\\x3dnone\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar random=Math.random();if(random\u003C",["escape",["macro",90],8,16],"\/100){var cookieName=\"fonce_sampled_user\",d=new Date;d.setTime(d.getTime()+144E6*",["escape",["macro",85],8,16],");var expires=d.toGMTString();document.cookie=cookieName+\"\\x3d1; expires\\x3d\"+expires+\";path\\x3d\/;domain\\x3d\"+",["escape",["macro",6],8,16],"+\";secure;samesite\\x3dnone\";console.log(\"User sampled\")};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":207
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003ElocalStorage.setItem(\"notificationStatus\",",["escape",["macro",91],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":214
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"fonce_current_user_gdpr\",d=new Date;d.setTime(d.getTime()+144E6*",["escape",["macro",85],8,16],");var expires=d.toGMTString(),conversionOccurred=",["escape",["macro",72],8,16],";conversionOccurred=void 0===conversionOccurred?0:conversionOccurred;document.cookie=cookieName+\"\\x3d\"+conversionOccurred+\"; expires\\x3d\"+expires+\";path\\x3d\/;domain\\x3d\"+",["escape",["macro",6],8,16],"+\";secure;samesite\\x3dnone\";console.log(\"*** cookie '\"+cookieName+\"' set (all pages): \"+document.cookie);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":424
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a.SurveyGizmoBeacon=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"\/\/www.surveygizmo.eu\/runtimejs\/intercept\/intercept.js\",\"sg_beacon\");sg_beacon(\"init\",\"",["escape",["macro",92],7],"\");sg_beacon(\"data\",\"user_id\",",["escape",["macro",13],8,16],");sg_beacon(\"data\",\"client_id\",",["escape",["macro",14],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":518
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":",C0002,"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"404_page"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"mobile|android"
    },{
      "function":"_sw",
      "arg0":["macro",3],
      "arg1":"\/unsupported\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"iframe-bookmark-click"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"detail"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"iframe-click"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"(add-my-game|add-my-games-league|remove-my-game|remove-my-games-league)"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"iframe-icon-click"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"iframe-icon-mouseover"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"navigation"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"web-click"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"odds-iframe-click"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"detail\\-(bookmark|audio)\\-click"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"detail-share-button"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"registration-form"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"button\\-bookmaker\\-click|bookmaker\\-button\\-click"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"bookmaker-link-click"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"more-info"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"icon-plus-click"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"add-my-league"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"add-my-team"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"remove\\-my\\-team|remove\\-my\\-league"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"click_recommending_box"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":",C0002"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*"
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"\\.apk$"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"click-banner"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"match-comments-switcher"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"baseball24|basketball24|cricket24|darts24|golflive24|hanball24|horseracing24|motorsport24|soccer24|tennis24|volleyball24|icehockey24"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"OneTrustGroupsUpdated"
    },{
      "function":"_cn",
      "arg0":["macro",50],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"news-article-click"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"search"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"checkbox-click"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"CLICK_PREVIEW"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"CLICK_ARTICLE_TEAM_NEWS"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"missing_mop"
    },{
      "function":"_cn",
      "arg0":["macro",72],
      "arg1":"1"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"TV_SHOW_SCORE|TV_HIDE_SCORE"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"TV_TOP_BUTTON_PLAY"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"TV_PLAY_EVENT"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"TV_PLAY_CHANNEL"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"TV_PLAYER"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"TV_RESOLUTION"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"TV_ORDER_START|TV_ORDER_PROGRESS|TV_ORDER_COMPLETED|TV_REORDER_START"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"feature_registration"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(detail_page|table_page)"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",83],
      "arg1":"(^$|((^|,)1314122_526($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",87],
      "arg1":"1"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"webNotificationStatus"
    }],
  "rules":[
    [["if",0,1],["add",4,14,15,30,45]],
    [["if",6],["add",5,16,19]],
    [["if",8],["unless",7],["add",5,16,19]],
    [["if",10],["unless",9],["add",5,16,19]],
    [["if",11],["add",5,16,19]],
    [["if",12],["add",5]],
    [["if",13],["add",5,16,19]],
    [["if",14],["add",5,16,19]],
    [["if",15],["add",5,16,19]],
    [["if",16],["add",5]],
    [["if",17],["add",5]],
    [["if",18],["add",5,16,19]],
    [["if",19],["add",5]],
    [["if",20],["add",5]],
    [["if",21],["add",5]],
    [["if",22],["add",5,16,19]],
    [["if",23],["add",5,16,19]],
    [["if",24],["add",5,16,19]],
    [["if",25],["add",5,16,19]],
    [["if",28,29],["add",6,18]],
    [["if",30],["add",7,17,20]],
    [["if",29,31],["add",8]],
    [["if",0,32,33],["add",9]],
    [["if",3],["unless",34],["add",10,39]],
    [["if",35],["add",11,21,22]],
    [["if",2,3],["add",12,14,15],["block",4]],
    [["if",36],["add",13]],
    [["if",3,4],["add",14,15],["block",4]],
    [["if",3,5],["add",14,15],["block",4]],
    [["if",37],["add",16,19]],
    [["if",38],["add",16,19]],
    [["if",39],["add",19]],
    [["if",40],["add",19]],
    [["if",33],["unless",0,41],["add",23,24,3]],
    [["if",42],["add",25]],
    [["if",43],["add",26]],
    [["if",44],["add",26]],
    [["if",45],["add",27]],
    [["if",46],["add",28]],
    [["if",47],["add",28]],
    [["if",48],["add",29]],
    [["if",49],["add",31]],
    [["if",9,10],["add",32,33]],
    [["if",51,52],["unless",50],["add",34,35]],
    [["if",3],["add",36,37,0,1,2]],
    [["if",53],["add",38]],
    [["if",3],["unless",54],["add",40]],
    [["if",3],["unless",55],["add",41,42]],
    [["if",56],["add",43]],
    [["if",33],["unless",0],["add",44]],
    [["if",27],["unless",26],["block",5,7,8,10,11,13,16,17,19,20,21,22,32,33,34,35]]]
},
"runtime":[[50,"__cvt_1314122_369",[46,"a"],[52,"b",[17,[15,"a"],"properties"]],[36,[39,[15,"b"],[13,[41,"$0"],[3,"$0",["require","makeTableMap"]],["$0",[15,"b"],"name","value"]],[8]]]],[50,"__hjtc",[46,"a"],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","encodeUriComponent"]],[52,"d",["require","injectScript"]],[52,"e",["require","makeString"]],[52,"f",["require","setInWindow"]],["b","hj","hj.q"],[52,"g",[17,[15,"a"],"hotjar_site_id"]],["f","_hjSettings",[8,"hjid",[15,"g"],"hjsv",7,"scriptSource","gtm"]],["d",[0,[0,"https://static.hotjar.com/c/hotjar-",["c",["e",[15,"g"]]]],".js?sv\u003d7"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__cvt_1314122_369":{},"__hjtc":{"access_globals":{"keys":[{"key":"hj","read":true,"write":true,"execute":false},{"key":"hj.q","read":true,"write":true,"execute":false},{"key":"_hjSettings","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.hotjar.com\/c\/hotjar-*"]}}}
,"sandboxed_scripts":["__cvt_1314122_369"]
,"security_groups":{
"nonGoogleScripts":["__hjtc"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}},fa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},la={};try{la.__proto__=ja;ia=la.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ma=ha,na=function(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.kj=b.prototype},oa=this||self,va=function(a){if(a&&a!=oa)return qa(a.document);null===ua&&(ua=qa(oa.document));return ua},wa=/^[\w+/_-]+[=]{0,2}$/,ua=null,qa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&wa.test(c))return c}return""},xa=function(a){return a};var ya=function(a,b){this.g=a;this.o=b};var za=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Aa=function(){this.D={};this.s=!1;this.J={}};Aa.prototype.get=function(a){return this.D["dust."+a]};Aa.prototype.set=function(a,b){this.s||(a="dust."+a,this.J.hasOwnProperty(a)||(this.D[a]=b))};Aa.prototype.has=function(a){return this.D.hasOwnProperty("dust."+a)};var Ba=function(a){var b=[],c;for(c in a.D)a.D.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.o=new Aa;this.g=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(za(b)?this.g[Number(b)]=a[Number(b)]:this.o.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"===a){if(!za(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else za(a)?this.g[Number(a)]=b:this.o.set(a,b)};aa.get=function(a){return"length"===a?this.length():za(a)?this.g[Number(a)]:this.o.get(a)};aa.length=function(){return this.g.length};aa.Rb=function(){for(var a=Ba(this.o),b=0;b<this.g.length;b++)a.push(b+"");return new k(a)};
var Ca=function(a,b){if(za(b))delete a.g[Number(b)];else{var c=a.o,d;d="dust."+b;c.s||c.J.hasOwnProperty(d)||delete c.D[d]}};aa=k.prototype;aa.pop=function(){return this.g.pop()};aa.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.g.shift()};aa.splice=function(a,b,c){return new k(this.g.splice.apply(this.g,arguments))};aa.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};
aa.has=function(a){return za(a)&&this.g.hasOwnProperty(a)||this.o.has(a)};var Ea=function(){function a(f,g){if(b[f]){if(b[f].Ec+g>b[f].max)throw Error("Quota exceeded");b[f].Ec+=g}}var b={},c=void 0,d=void 0,e={ii:function(f){c=f},Ff:function(){c&&a(c,1)},ki:function(f){d=f},Ra:function(f){d&&a(d,f)},Ei:function(f,g){b[f]=b[f]||{Ec:0};b[f].max=g},Lh:function(f){return b[f]&&b[f].Ec||0},reset:function(){b={}},xh:a};e.onFnConsume=e.ii;e.consumeFn=e.Ff;e.onStorageConsume=e.ki;e.consumeStorage=e.Ra;e.setMax=e.Ei;e.getConsumed=e.Lh;e.reset=e.reset;e.consume=e.xh;return e};var Fa=function(a,b){this.J=a;this.S=function(c,d,e){return c.apply(d,e)};this.s=b;this.o=new Aa;this.g=this.D=void 0};Fa.prototype.add=function(a,b){Ga(this,a,b,!1)};var Ga=function(a,b,c,d){if(!a.o.s)if(a.J.Ra(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.o;e.set(b,c);e.J["dust."+b]=!0}else a.o.set(b,c)};
Fa.prototype.set=function(a,b){this.o.s||(!this.o.has(a)&&this.s&&this.s.has(a)?this.s.set(a,b):(this.J.Ra(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.o.set(a,b)))};Fa.prototype.get=function(a){return this.o.has(a)?this.o.get(a):this.s?this.s.get(a):void 0};Fa.prototype.has=function(a){return!!this.o.has(a)||!(!this.s||!this.s.has(a))};var Ha=function(a){var b=new Fa(a.J,a);a.D&&(b.D=a.D);b.S=a.S;b.g=a.g;return b};var Ia=function(){},Ka=function(a){return"function"==typeof a},q=function(a){return"string"==typeof a},La=function(a){return"number"==typeof a&&!isNaN(a)},Na=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},B=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Oa=function(a,b){if(a&&Na(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Pa=function(a,b){if(!La(a)||
!La(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Sa=function(a,b){for(var c=new Qa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ta=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ua=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Va=function(a){return Math.round(Number(a))||0},Xa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Ya=function(a){var b=[];if(Na(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Za=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},ab=function(){return(new Date).getTime()},Qa=function(){this.prefix="gtm.";this.values={}};Qa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Qa.prototype.get=function(a){return this.values[this.prefix+a]};
var bb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},cb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},db=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},eb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},gb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},jb=function(a,b){var c=F;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
B(b,d))return}return d},kb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},lb=function(a){var b=[];Ta(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var pb=function(a,b){Aa.call(this);this.g=a;this.S=b};na(pb,Aa);pb.prototype.toString=function(){return this.g};pb.prototype.Rb=function(){return new k(Ba(this))};pb.prototype.o=function(a,b){a.J.Ff();return this.S.apply(qb(this,a),Array.prototype.slice.call(arguments,1))};var qb=function(a,b){var c=function(d,e){this.o=d;this.s=e};c.prototype.g=function(d){var e=this.s;return Na(d)?rb(e,d):d};c.prototype.J=function(d){return sb(this.s,d)};c.prototype.D=function(){return b.J};return new c(a,b)};
pb.prototype.Ta=function(a,b){try{return this.o.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var sb=function(a,b){for(var c,d=0;d<b.length&&!(c=rb(a,b[d]),c instanceof ya);d++);return c},rb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof pb))throw Error("Attempting to execute non-function "+b[0]+".");return c.o.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.D;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var tb=function(){Aa.call(this)};na(tb,Aa);tb.prototype.Rb=function(){return new k(Ba(this))};var ub={control:function(a,b){return new ya(a,this.g(b))},fn:function(a,b,c){var d=this.s,e=this.g(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.D().Ra(a.length+f.length);return new pb(a,function(){return function(g){var h=Ha(d);void 0===h.g&&(h.g=this.s.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.g(l[m]),l[m]instanceof ya)return l[m];for(var p=e.get("length"),n=
0;n<p;n++)n<l.length?h.add(e.get(n),l[n]):h.add(e.get(n),void 0);h.add("arguments",new k(l));var t=sb(h,f);if(t instanceof ya)return"return"===t.g?t.o:t}}())},list:function(a){var b=this.D();b.Ra(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.g(arguments[d]);"string"===typeof e&&b.Ra(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.D(),c=new tb,d=0;d<arguments.length-1;d+=2){var e=this.g(arguments[d])+"",f=this.g(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ra(g);c.set(e,f)}return c},undefined:function(){}};var wb=function(){this.s=Ea();this.g=new Fa(this.s)},xb=function(a,b,c){var d=new pb(b,c);d.s=!0;a.g.set(b,d)};wb.prototype.Jc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.o(c)};wb.prototype.o=function(a){for(var b,c=0;c<arguments.length;c++)b=rb(this.g,arguments[c]);return b};wb.prototype.D=function(a,b){var c=Ha(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=rb(c,arguments[e]);return d};var yb=function(a){if(a instanceof yb)return a;this.sa=a};yb.prototype.toString=function(){return String(this.sa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var zb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ab=function(a){if(null==a)return String(a);var b=zb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Bb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Cb=function(a){if(!a||"object"!=Ab(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Bb(a,"constructor")&&!Bb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Bb(a,b)},G=function(a,b){var c=b||("array"==Ab(a)?[]:{}),d;for(d in a)if(Bb(a,d)){var e=a[d];"array"==Ab(e)?("array"!=Ab(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):Cb(e)?(Cb(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var Eb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Ba(h),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=B(d,h);if(-1<l)return e[l];if(h instanceof k){var m=[];d.push(h);e.push(m);for(var p=h.Rb(),n=0;n<p.length();n++)m[p.get(n)]=g(h.get(p.get(n)));return m}if(h instanceof tb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof pb){var r=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Db(u[v],b,!!c);var w=b?b.J:Ea(),y=new Fa(w);
b&&(y.g=b.g);return g(h.o.apply(h,[y].concat(u)))};d.push(h);e.push(r);f(h,r);return r}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Db=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=B(d,
h);if(-1<l)return e[l];if(Na(h)||Ua(h)){var m=new k([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(Cb(h)){var n=new tb;d.push(h);e.push(n);f(h,n);return n}if("function"===typeof h){var t=new pb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Eb(this.g(v[w]),b,!!c);return g((0,this.s.S)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var r=typeof h;if(null===h||"string"===r||"number"===r||"boolean"===r)return h;};return g(a)};var Fb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Hb=function(a){if(void 0===a||Na(a)||Cb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Ib={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.o(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.o(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.o(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.o(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.o(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.o(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Fb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Ca(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.o(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Fb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.o(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Ca(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Jb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Kb=new ya("break"),Nb=new ya("continue"),Ob=function(a,b){return this.g(a)+this.g(b)},Pb=function(a,b){return this.g(a)&&this.g(b)},Qb=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=B(Jb,b))return Db(a[b].apply(a,Fb(c)),this.s);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof pb){var e=Fb(c);e.unshift(this.s);return d.o.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=B(Ib.supportedMethods,b)){var f=Fb(c);f.unshift(this.s);
return Ib[b].apply(a,f)}}if(a instanceof pb||a instanceof tb){if(a.has(b)){var g=a.get(b);if(g instanceof pb){var h=Fb(c);h.unshift(this.s);return g.o.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof pb?a.g:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Fb(c))}if(a instanceof yb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Rb=function(a,b){a=this.g(a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");
var c=this.s;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.g(b);c.set(a,d);return d},Tb=function(a){var b=Ha(this.s),c=sb(b,Array.prototype.slice.apply(arguments));if(c instanceof ya)return c},Ub=function(){return Kb},Vb=function(a){for(var b=this.g(a),c=0;c<b.length;c++){var d=this.g(b[c]);if(d instanceof ya)return d}},Wb=function(a){for(var b=this.s,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.g(arguments[c+1]);Ga(b,d,e,
!0)}}},Xb=function(){return Nb},Yb=function(a,b,c){var d=new k;b=this.g(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.s.add(a,this.g(f))},Zb=function(a,b){return this.g(a)/this.g(b)},$b=function(a,b){a=this.g(a);b=this.g(b);var c=a instanceof yb,d=b instanceof yb;return c||d?c&&d?a.sa==b.sa:!1:a==b},ac=function(a){for(var b,c=0;c<arguments.length;c++)b=this.g(arguments[c]);return b};
function bc(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=sb(f,d);if(g instanceof ya){if("break"===g.g)break;if("return"===g.g)return g}}}function cc(a,b,c){if("string"===typeof b)return bc(a,function(){return b.length},function(f){return f},c);if(b instanceof tb||b instanceof k||b instanceof pb){var d=b.Rb(),e=d.length();return bc(a,function(){return e},function(f){return d.get(f)},c)}}
var dc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return cc(function(e){d.set(a,e);return d},b,c)},ec=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return cc(function(e){var f=Ha(d);Ga(f,a,e,!0);return f},b,c)},fc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return cc(function(e){var f=Ha(d);f.add(a,e);return f},b,c)},ic=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return gc(function(e){d.set(a,e);return d},b,c)},jc=
function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return gc(function(e){var f=Ha(d);Ga(f,a,e,!0);return f},b,c)},kc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return gc(function(e){var f=Ha(d);f.add(a,e);return f},b,c)};
function gc(a,b,c){if("string"===typeof b)return bc(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof k)return bc(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var lc=function(a,b,c,d){function e(p,n){for(var t=0;t<f.length();t++){var r=f.get(t);n.add(r,p.get(r))}}var f=this.g(a);if(!(f instanceof k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.s;d=this.g(d);var h=Ha(g);for(e(g,h);rb(h,b);){var l=sb(h,d);if(l instanceof ya){if("break"===l.g)break;if("return"===l.g)return l}var m=Ha(g);e(h,m);rb(m,c);h=m}},mc=function(a){a=this.g(a);var b=this.s,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},nc=function(a,b){var c;a=this.g(a);b=this.g(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof tb||a instanceof k||a instanceof pb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:za(b)&&(c=a[b]);else if(a instanceof yb)return;return c},oc=function(a,b){return this.g(a)>this.g(b)},
pc=function(a,b){return this.g(a)>=this.g(b)},qc=function(a,b){a=this.g(a);b=this.g(b);a instanceof yb&&(a=a.sa);b instanceof yb&&(b=b.sa);return a===b},rc=function(a,b){return!qc.call(this,a,b)},sc=function(a,b,c){var d=[];this.g(a)?d=this.g(b):c&&(d=this.g(c));var e=this.J(d);if(e instanceof ya)return e},tc=function(a,b){return this.g(a)<this.g(b)},uc=function(a,b){return this.g(a)<=this.g(b)},vc=function(a,b){return this.g(a)%this.g(b)},wc=function(a,b){return this.g(a)*this.g(b)},xc=function(a){return-this.g(a)},
yc=function(a){return!this.g(a)},zc=function(a,b){return!$b.call(this,a,b)},Ac=function(){return null},Ec=function(a,b){return this.g(a)||this.g(b)},Fc=function(a,b){var c=this.g(a);this.g(b);return c},Gc=function(a){return this.g(a)},Hc=function(a){return Array.prototype.slice.apply(arguments)},Ic=function(a){return new ya("return",this.g(a))},Jc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof pb||
a instanceof k||a instanceof tb)&&a.set(b,c);return c},Kc=function(a,b){return this.g(a)-this.g(b)},Lc=function(a,b,c){a=this.g(a);var d=this.g(b),e=this.g(c);if(!Na(d)||!Na(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.g(d[h]))if(f=this.g(e[h]),f instanceof ya){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=this.g(e[e.length-1]),f instanceof ya&&("return"===f.g||"continue"===
f.g)))return f},Mc=function(a,b,c){return this.g(a)?this.g(b):this.g(c)},Nc=function(a){a=this.g(a);return a instanceof pb?"function":typeof a},Oc=function(a){for(var b=this.s,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Pc=function(a,b,c,d){var e=this.g(d);if(this.g(c)){var f=this.J(e);if(f instanceof ya){if("break"===f.g)return;if("return"===f.g)return f}}for(;this.g(a);){var g=this.J(e);if(g instanceof ya){if("break"===g.g)break;if("return"===g.g)return g}this.g(b)}},
Qc=function(a){return~Number(this.g(a))},Rc=function(a,b){return Number(this.g(a))<<Number(this.g(b))},Sc=function(a,b){return Number(this.g(a))>>Number(this.g(b))},Tc=function(a,b){return Number(this.g(a))>>>Number(this.g(b))},Uc=function(a,b){return Number(this.g(a))&Number(this.g(b))},Vc=function(a,b){return Number(this.g(a))^Number(this.g(b))},Wc=function(a,b){return Number(this.g(a))|Number(this.g(b))};var Yc=function(){this.g=new wb;Xc(this)};Yc.prototype.Jc=function(a){return $c(this.g.o(a))};
var bd=function(a,b){return $c(ad.g.D(a,b))},Xc=function(a){var b=function(d,e){var f=a.g,g=String(e);ub.hasOwnProperty(d)&&xb(f,g||d,ub[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){xb(a.g,String(d),e)};c(0,Ob);c(1,Pb);c(2,Qb);c(3,Rb);c(53,Tb);c(4,Ub);c(5,Vb);c(52,Wb);c(6,Xb);c(9,Vb);c(50,Yb);c(10,Zb);c(12,$b);c(13,ac);c(47,dc);c(54,ec);c(55,fc);c(63,lc);c(64,ic);c(65,jc);c(66,kc);c(15,mc);c(16,nc);c(17,nc);c(18,oc);c(19,pc);c(20,qc);c(21,rc);c(22,sc);
c(23,tc);c(24,uc);c(25,vc);c(26,wc);c(27,xc);c(28,yc);c(29,zc);c(45,Ac);c(30,Ec);c(32,Fc);c(33,Fc);c(34,Gc);c(35,Gc);c(46,Hc);c(36,Ic);c(43,Jc);c(37,Kc);c(38,Lc);c(39,Mc);c(40,Nc);c(41,Oc);c(42,Pc);c(58,Qc);c(57,Rc);c(60,Sc);c(61,Tc);c(56,Uc);c(62,Vc);c(59,Wc)},dd=function(){var a=ad,b=cd();xb(a.g,"require",b)},id=function(a,b){a.g.g.S=b};
function $c(a){if(a instanceof ya||a instanceof pb||a instanceof k||a instanceof tb||a instanceof yb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var jd=[],kd={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},ld=function(a){return kd[a]},md=/[\x00\x22\x26\x27\x3c\x3e]/g;var qd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,rd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},sd=function(a){return rd[a]};jd[7]=function(a){return String(a).replace(qd,sd)};
jd[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(qd,sd)+"'"}};var Ad=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Bd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Cd=function(a){return Bd[a]};jd[16]=function(a){return a};var Ed;
var Fd=[],Gd=[],Hd=[],Nd=[],Od=[],Pd={},Qd,Rd,Sd,Td=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ud=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Pd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.Cf&&b.Cf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):Ed(c,e,b)},Wd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=Vd(a[e],b,c));return d},Vd=function(a,b,c){if(Na(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Vd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=Fd[f];if(!g||b.Td(g))return;c[f]=!0;try{var h=Wd(g,b,c);h.vtp_gtmEventId=b.id;d=Ud(h,b);Sd&&(d=Sd.zh(d,h))}catch(y){b.Rf&&b.Rf(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Vd(a[l],b,c)]=Vd(a[l+1],b,c);return d;case "template":d=[];for(var m=
!1,p=1;p<a.length;p++){var n=Vd(a[p],b,c);Rd&&(m=m||n===Rd.wc);d.push(n)}return Rd&&m?Rd.Ch(d):d.join("");case "escape":d=Vd(a[1],b,c);if(Rd&&Na(a[1])&&"macro"===a[1][0]&&Rd.Wh(a))return Rd.ri(d);d=String(d);for(var t=2;t<a.length;t++)jd[a[t]]&&(d=jd[a[t]](d));return d;case "tag":var r=a[1];if(!Nd[r])throw Error("Unable to resolve tag reference "+r+".");return d={If:a[2],index:r};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Xd(u,b,c),w=!!a[4];return w||2!==v?w!==
(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Xd=function(a,b,c){try{return Qd(Wd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Yd=function(){var a=function(b){return{toString:function(){return b}}};return{gg:a("consent"),ye:a("convert_case_to"),ze:a("convert_false_to"),Ae:a("convert_null_to"),Be:a("convert_true_to"),Ce:a("convert_undefined_to"),Qi:a("debug_mode_metadata"),Qa:a("function"),Ug:a("instance_name"),Vg:a("live_only"),Wg:a("malware_disabled"),Xg:a("metadata"),Ti:a("original_activity_id"),Ui:a("original_vendor_template_id"),Zg:a("once_per_event"),sf:a("once_per_load"),wf:a("setup_tags"),xf:a("tag_id"),yf:a("teardown_tags")}}();var Zd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.o=a;this.g=c};na(Zd,Error);function $d(a,b){if(Na(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)$d(a[c],b[c])}};var ae=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.s=a;this.o=b;this.g=[]};na(ae,Error);var ce=function(){return function(a,b){a instanceof ae||(a=new ae(a,be));b&&a.g.push(b);throw a;}};function be(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)La(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var de=null,ge=function(a){function b(n){for(var t=0;t<n.length;t++)d[n[t]]=!0}var c=[],d=[];de=ee(a);for(var e=0;e<Gd.length;e++){var f=Gd[e],g=fe(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],p=0;p<Nd.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},fe=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=de(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=de(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},ee=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Xd(Hd[c],a));return b[c]}};var he={zh:function(a,b){b[Yd.ye]&&"string"===typeof a&&(a=1==b[Yd.ye]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Yd.Ae)&&null===a&&(a=b[Yd.Ae]);b.hasOwnProperty(Yd.Ce)&&void 0===a&&(a=b[Yd.Ce]);b.hasOwnProperty(Yd.Be)&&!0===a&&(a=b[Yd.Be]);b.hasOwnProperty(Yd.ze)&&!1===a&&(a=b[Yd.ze]);return a}};var ie=function(){this.g={}};function je(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Zd(c,d,g);}}function ke(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));je(e,b,d,g);je(f,b,d,g)}}}};var oe=function(a){var b=le.F,c=this;this.o=new ie;this.g={};var d={},e=ke(this.o,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ta(a,function(f,g){var h={};Ta(g,function(l,m){var p=me(l,m);h[l]=p.assert;d[l]||(d[l]=p.N)});c.g[f]=function(l,m){var p=h[l];if(!p)throw ne(l,{},"The requested permission "+l+" is not configured.");var n=Array.prototype.slice.call(arguments,0);p.apply(void 0,n);e.apply(void 0,n)}})},qe=function(a){return pe.g[a]||
function(){}};function me(a,b){var c=Td(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=ne;try{return Ud(c)}catch(d){return{assert:function(e){throw new Zd(e,{},"Permission "+e+" is unknown.");},N:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function ne(a,b,c){return new Zd(a,b,c)};var re=!1;var se={};se.Li=Xa('');se.Fh=Xa('');var te=re,ue=se.Fh,ve=se.Li;
var Je=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Ke=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Je(b,"/*")&&(b=b.slice(0,-2));Je(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Le=/^[a-z0-9-]+$/i,Me=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Oe=function(a,b){var c;if(!(c=!Ne(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Le.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Me.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),n=p.slice(0,p.indexOf("/")),t;var r=l.hostname,u=n;if(0!==u.indexOf("*."))t=r.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=r.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:r.length===u.length?
!0:r.length!==u.length+v?!1:"."===r[v-1]}if(t){var w=p.slice(p.indexOf("/"));h=Ke(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},Ne=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var Re=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Se={Fn:"function",DustMap:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=Re.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof pb?p="Fn":l instanceof k?p="List":l instanceof tb?p="DustMap":
l instanceof yb&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(Se[h]||h)+".");}}};function Te(a){return""+a}
function Ue(a,b){var c=[];return c};var Ve=function(a,b){var c=new pb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.g(d[e]);return b.apply(this,d)});c.s=!0;return c},We=function(a,b){var c=new tb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ka(e)?c.set(d,Ve(a+"_"+d,e)):(La(e)||q(e)||"boolean"==typeof e)&&c.set(d,e)}c.s=!0;return c};var Xe=function(a,b){H(this.o.g,["apiName:!string","message:?string"],arguments);var c={},d=new tb;return d=We("AssertApiSubject",c)};var Ye=function(a,b){H(this.o.g,["actual:?*","message:?string"],arguments);var c={},d=new tb;return d=We("AssertThatSubject",c)};function Ze(a){return function(){for(var b=[],c=this.s,d=0;d<arguments.length;++d)b.push(Eb(arguments[d],c));return Db(a.apply(null,b))}}var af=function(){for(var a=Math,b=$e,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Ze(a[e].bind(a)))}return c};var bf=function(a){var b;return b};var cf=function(a){var b;return b};var df=function(a){H(this.o.g,["uri:!string"],arguments);return encodeURI(a)};var ef=function(a){H(this.o.g,["uri:!string"],arguments);return encodeURIComponent(a)};var ff=function(a){H(this.o.g,["message:?string"],arguments);};var gf=function(a,b){H(this.o.g,["min:!number","max:!number"],arguments);return Pa(a,b)};var hf=function(a,b,c){var d=a.s.g;if(!d)throw Error("Missing program state.");d.oh.apply(null,Array.prototype.slice.call(arguments,1))};var jf=function(){hf(this,"read_container_data");var a=new tb;a.set("containerId",'GTM-PWJ3NQ');a.set("version",'315');a.set("environmentName",'');a.set("debugMode",te);a.set("previewMode",ve);a.set("environmentMode",ue);a.s=!0;return a};var kf=function(){return(new Date).getTime()};var lf=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof pb)return"function";if(a instanceof yb){a=a.sa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var mf=function(a){function b(c){return function(d){try{return c(d)}catch(e){(te||ve)&&a.call(this,e.message)}}}return{parse:b(function(c){return Db(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Eb(c))})}};var nf=function(a){return Va(Eb(a,this.s))};var of=function(a){return Number(Eb(a,this.s))};var pf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var qf=function(a,b,c){var d=null,e=!1;H(this.o.g,["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new tb;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof tb&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var $e="floor ceil round max min abs pow sqrt".split(" ");var rf=function(){var a={};return{Mh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Fi:function(b,c){a[b]=c},reset:function(){a={}}}},sf=function(a,b){H(this.o.g,["apiName:!string","mock:?*"],arguments);};var tf=function(){this.g={};this.o={}};tf.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
tf.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.o.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Ka(b)?Ve(a,b):We(a,b)};
var uf=function(a,b,c){if(a.o.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.o[b]=Ka(c)?Ve(b,c):We(b,c)};function vf(){var a={};return a};var I={Fb:"_ee",Bd:"_syn",Xi:"_uei",vd:"_eu",Vi:"_pci",jd:"event_callback",oc:"event_timeout",ja:"gtag.config",Ma:"gtag.get",na:"purchase",ab:"refund",La:"begin_checkout",Za:"add_to_cart",$a:"remove_from_cart",pg:"view_cart",Ge:"add_to_wishlist",Aa:"view_item",Fe:"view_promotion",Ee:"select_promotion",dd:"select_item",kc:"view_item_list",De:"add_payment_info",og:"add_shipping_info",Da:"value_key",Ca:"value_callback",ka:"allow_ad_personalization_signals",rd:"restricted_data_processing",vb:"allow_google_signals",
la:"cookie_expires",yb:"cookie_update",Cb:"session_duration",qa:"user_properties",Pa:"transport_url",O:"ads_data_redaction",C:"ad_storage",K:"analytics_storage",xe:"region",hg:"wait_for_update"};I.ff=[I.na,I.ab,I.La,I.Za,I.$a,I.pg,I.Ge,I.Aa,I.Fe,I.Ee,I.kc,I.dd,I.De,I.og];I.ef=[I.ka,I.vb,I.yb];I.hf=[I.la,I.oc,I.Cb];var wf={},xf=function(a,b){wf[a]=wf[a]||[];wf[a][b]=!0},yf=function(a){for(var b=[],c=wf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var zf=function(a){xf("GTM",a)};var Af=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Bf=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Cf,Df=function(){if(void 0===Cf){var a=null,b=oa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:xa,createScript:xa,createScriptURL:xa})}catch(c){oa.console&&oa.console.error(c.message)}Cf=a}else Cf=a}return Cf};var Ff=function(a,b){this.g=b===Ef?a:""};Ff.prototype.toString=function(){return this.g+""};var Ef={};var Gf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Hf;a:{var If=oa.navigator;if(If){var Jf=If.userAgent;if(Jf){Hf=Jf;break a}}Hf=""}var Kf=function(a){return-1!=Hf.indexOf(a)};var Mf=function(a,b,c){this.g=c===Lf?a:""};Mf.prototype.toString=function(){return this.g.toString()};var Nf=function(a){return a instanceof Mf&&a.constructor===Mf?a.g:"type_error:SafeHtml"},Lf={},Of=new Mf(oa.trustedTypes&&oa.trustedTypes.emptyHTML||"",0,Lf);var Pf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Nf(Of);return!c.parentElement}),Qf=function(a,b){if(Pf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Nf(b)};var Rf=function(a){var b=Df(),c=b?b.createHTML(a):a;return new Mf(c,null,Lf)};var F=window,M=document,Sf=navigator,Tf=M.currentScript&&M.currentScript.src,Uf=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},Vf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Wf=function(a,b,c){var d=M.createElement("script");d.type="text/javascript";d.async=!0;var e,f=Df(),g=f?f.createScriptURL(a):a;e=new Ff(g,Ef);d.src=e instanceof Ff&&e.constructor===Ff?e.g:"type_error:TrustedResourceUrl";
var h=va(d.ownerDocument&&d.ownerDocument.defaultView);h&&d.setAttribute("nonce",h);Vf(d,b);c&&(d.onerror=c);var l=va();l&&d.setAttribute("nonce",l);var m=M.getElementsByTagName("script")[0]||M.body||M.head;m.parentNode.insertBefore(d,m);return d},Xf=function(){if(Tf){var a=Tf.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Yf=function(a,b){var c=M.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";
var d=M.body&&M.body.lastChild||M.body||M.head;d.parentNode.insertBefore(c,d);Vf(c,b);void 0!==a&&(c.src=a);return c},Zf=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},$f=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},ag=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){F.setTimeout(a,
0)},bg=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},cg=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},dg=function(a){var b=M.createElement("div"),c=Rf("A<div>"+a+"</div>");Qf(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},fg=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=
a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},gg=function(a){Sf.sendBeacon&&Sf.sendBeacon(a)||Zf(a)},hg=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var ig={},jg=function(){return void 0==ig.gtag_cs_api?!1:ig.gtag_cs_api};var kg=[];function lg(){var a=Uf("google_tag_data",{});a.ics||(a.ics={entries:{},set:mg,update:ng,addListener:og,notifyListeners:pg,active:!1,usedDefault:!1});return a.ics}
function mg(a,b,c,d,e,f){var g=lg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&q(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(p===e||(p===d?m!==e:!p&&!m)){var n=!!(f&&0<f&&void 0===l.update),t={region:p,initial:"granted"===b,update:l.update,quiet:n};h[a]=t;n&&F.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,qg(a),pg(),xf("TAGGING",2))},f)}}}
function ng(a,b){var c=lg();c.active=!0;if(void 0!=b){var d=rg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=rg(a);f.quiet?(f.quiet=!1,qg(a)):g!==d&&qg(a)}}function og(a,b){kg.push({Ef:a,Ih:b})}function qg(a){for(var b=0;b<kg.length;++b){var c=kg[b];Na(c.Ef)&&-1!==c.Ef.indexOf(a)&&(c.Uf=!0)}}function pg(a){for(var b=0;b<kg.length;++b){var c=kg[b];if(c.Uf){c.Uf=!1;try{c.Ih({Df:a})}catch(d){}}}}
var rg=function(a){var b=lg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},sg=function(a){return(lg().entries[a]||{}).initial},tg=function(a){return!(lg().entries[a]||{}).quiet},ug=function(){return jg()?lg().active:!1},vg=function(a,b){lg().addListener(a,b)},wg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!tg(b[e]))return!0;return!1}if(c()){var d=!1;vg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},xg=function(a,b){if(!1===rg(b)){var c=!1;vg([b],
function(d){!c&&rg(b)&&(a(d),c=!0)})}};function yg(a){for(var b=[],c=0;c<zg.length;c++){var d=a(zg[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var zg=[I.C,I.K],Ag=function(a){var b=a[I.xe];b&&zf(40);var c=a[I.hg];c&&zf(41);for(var d=Na(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<zg.length;f++){var g=zg[f],h=a[zg[f]],l=d[e];lg().set(g,h,l,"IN","IN-GJ",c)}},Bg=function(a,b){for(var c=0;c<zg.length;c++){var d=zg[c],e=a[zg[c]];lg().update(d,e)}lg().notifyListeners(b)},Cg=function(a){var b=rg(a);return void 0!=b?b:!0},Dg=function(){return"G1"+yg(rg)},Eg=function(a,b){wg(a,b)};var Gg=function(a){return Fg?M.querySelectorAll(a):null},Hg=function(a,b){if(!Fg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!M.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ig=!1;if(M.querySelectorAll)try{var Jg=M.querySelectorAll(":root");Jg&&1==Jg.length&&Jg[0]==M.documentElement&&(Ig=!0)}catch(a){}var Fg=Ig;var Kg=function(a){if(M.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!F.getComputedStyle)return!0;var c=F.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=F.getComputedStyle(d,
null))}return!1};
var Lg=function(){var a=M.body,b=M.documentElement||a&&a.parentElement,c,d;if(M.compatMode&&"BackCompat"!==M.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};zf(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Mg=function(a){var b=Lg(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var Tg=/:[0-9]+$/,Ug=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Xg=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Vg(a.protocol)||Vg(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||F.location.hostname).replace(Tg,"").toLowerCase());return Wg(a,b,c,d,e)},Wg=function(a,b,c,d,e){var f,g=Vg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Yg(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Tg,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||xf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=B(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Ug(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Vg=function(a){return a?a.replace(":",
"").toLowerCase():""},Yg=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Zg=function(a){var b=M.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||xf("TAGGING",1),c="/"+c);var d=b.hostname.replace(Tg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},$g=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=Zg(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var ah=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),bh=new RegExp(/support|noreply/i),ch=["SCRIPT","IMG","SVG","PATH","BR"],dh=["BR"];function eh(a){var b;if(a===M.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=eh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
var hh=function(){var a=!0;var b=a,c;var d=[],e=M.body;if(e){for(var f=e.querySelectorAll("*"),g=0;g<f.length&&1E4>g;g++){var h=f[g];if(!(0<=ch.indexOf(h.tagName.toUpperCase()))){for(var l=!1,m=0;m<h.childElementCount&&1E4>m;m++)if(!(0<=dh.indexOf(h.children[m].tagName.toUpperCase()))){l=!0;break}l||d.push(h)}}c={elements:d,status:1E4<f.length?"2":"1"}}else c=
{elements:d,status:"4"};for(var p=c,n=p.elements,t=[],r=0;r<n.length;r++){var u=n[r],v=u.textContent;u.value&&(v=u.value);if(v){var w=v.match(ah);if(w){var y=w[0],x;if(F.location){var z=Wg(F.location,"host",!0);x=0<=y.toLowerCase().indexOf(z)}else x=!1;x||t.push({element:u,bd:y})}}}var A;for(var C=[],D=10<t.length?"3":p.status,E=0;E<t.length&&
10>E;E++){var J=t[E].element,Q=t[E].bd,V=!1;C.push({bd:Q,querySelector:eh(J),tagName:J.tagName,isVisible:!Kg(J),type:1,Pc:!!V})}return{elements:C,status:D}};var le={},O=null,vh=Math.random();le.F="GTM-PWJ3NQ";le.Ac="1k0";le.Si="";le.ig="ChAIgMfZgAYQh6n/gKzKntU4EiMAdQAT2GSLK1lvvzg35dK1dVMVKWwVG5Bjeay7l2HJuziP1BoCj5M\x3d";var wh={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},xh={__paused:!0,__tg:!0},yh;for(yh in wh)wh.hasOwnProperty(yh)&&(xh[yh]=!0);var zh="www.googletagmanager.com/gtm.js";
var Ah=zh,Bh=Xa(""),Ch=null,Dh=null,Eh="//www.googletagmanager.com/a?id="+le.F+"&cv=315",Fh={},Gh={},Hh=function(){var a=O.sequence||1;O.sequence=a+1;return a};var Ih={},Jh=new Qa,Kh={},Lh={},Oh={name:"dataLayer",set:function(a,b){G(kb(a,b),Kh);Mh()},get:function(a){return Nh(a,2)},reset:function(){Jh=new Qa;Kh={};Mh()}},Nh=function(a,b){return 2!=b?Jh.get(a):Ph(a)},Ph=function(a,b){var c=a.split(".");b=b||[];for(var d=Kh,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==B(b,d))return}return d},Qh=function(a,b){Lh.hasOwnProperty(a)||(Jh.set(a,b),G(kb(a,b),Kh),Mh())},Mh=function(a){Ta(Lh,function(b,c){Jh.set(b,c);G(kb(b,void 0),
Kh);G(kb(b,c),Kh);a&&delete Lh[b]})},Rh=function(a,b,c){Ih[a]=Ih[a]||{};var d=1!==c?Ph(b):Jh.get(b);"array"===Ab(d)||"object"===Ab(d)?Ih[a][b]=G(d):Ih[a][b]=d},Sh=function(a,b){if(Ih[a])return Ih[a][b]},Th=function(a,b){Ih[a]&&delete Ih[a][b]};var Wh={},Xh=function(a,b){if(F._gtmexpgrp&&F._gtmexpgrp.hasOwnProperty(a))return F._gtmexpgrp[a];void 0===Wh[a]&&(Wh[a]=Math.floor(Math.random()*b));return Wh[a]};var Yh=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function Zh(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var ai=function(a,b,c,d){return $h(d)?Zh(a,String(b||document.cookie),c):[]},di=function(a,b,c,d,e){if($h(e)){var f=bi(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=ci(f,function(g){return g.Ic},b);if(1===f.length)return f[0].id;f=ci(f,function(g){return g.Xb},c);return f[0]?f[0].id:void 0}}};function ei(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=ai(b,f,!1,d).indexOf(c)}
var ii=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!$h(c.ya))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=fi(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.fi);g=e(g,"samesite",
c.zi);c.Ci&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=gi(),n=void 0,t=!1,r=0;r<p.length;++r){var u="none"!==p[r]?p[r]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){n=w;continue}t=!0;if(!hi(u,c.path)&&ei(v,a,b,c.ya))return 0}if(n&&!t)throw n;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return hi(m,c.path)?1:ei(g,a,b,c.ya)?0:1},ji=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return ii(a,b,c)};
function ci(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function bi(a,b,c){for(var d=[],e=ai(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Ic:1*l[0]||1,Xb:1*l[1]||1}))}}return d}
var fi=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},ki=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,li=/(^|\.)doubleclick\.net$/i,hi=function(a,b){return li.test(document.location.hostname)||"/"===b&&ki.test(a)},gi=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;li.test(e)||ki.test(e)||a.push("none");
return a},$h=function(a){if(!jg()||!a||!ug())return!0;if(!tg(a))return!1;var b=rg(a);return null==b?!0:!!b};var mi=function(){for(var a=Sf.userAgent+(M.cookie||"")+(M.referrer||""),b=a.length,c=F.history.length;0<c;)a+=c--^b++;return[Math.round(2147483647*Math.random())^Yh(a)&2147483647,Math.round(ab()/1E3)].join(".")},pi=function(a,b,c,d,e){var f=ni(b);return di(a,f,oi(c),d,e)},qi=function(a,b,c,d){var e=""+ni(c),f=oi(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},ni=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},oi=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&
(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function ri(a,b,c){var d,e=a.Wb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||ab())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var si=["1"],ti={},wi=function(a){var b=ui(a.prefix),c=ti[b];c&&vi(b,c,a)},yi=function(a){var b=ui(a.prefix);if(!ti[b]&&!xi(b,a.path,a.domain)){var c=mi();vi(b,c,a);var d=Uf("google_tag_data",{});d._gcl_au?xf("GTM",57):d._gcl_au=c;xi(b,a.path,a.domain)}};function vi(a,b,c){var d=qi(b,"1",c.domain,c.path),e=ri(c);e.ya="ad_storage";ji(a,d,e)}function xi(a,b,c){var d=pi(a,b,c,si,"ad_storage");d&&(ti[a]=d);return d}function ui(a){return(a||"_gcl")+"_au"};function zi(){for(var a=Ai,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Bi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Ai,Ci;
function Di(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Ci[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Ai=Ai||Bi();Ci=Ci||zi();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Ei;var Ii=function(){var a=Fi,b=Gi,c=Hi(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){$f(M,"mousedown",d);$f(M,"keyup",d);$f(M,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Ji=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Hi().decorators.push(f)},Ki=function(a,b,c){for(var d=Hi().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==M.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[n])||p&&0<=l[n].indexOf(m)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&db(e,g.callback())}}return e},Hi=function(){var a=Uf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Li=/(.*?)\*(.*?)\*(.*)/,Mi=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ni=/^(?:www\.|m\.|amp\.)+/,Si=/([^?#]+)(\?[^#]*)?(#.*)?/;function Ti(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Vi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);Ai=Ai||Bi();Ci=Ci||zi();for(var l=[],m=0;m<h.length;m+=3){var p=m+1<h.length,n=m+2<h.length,t=h.charCodeAt(m),r=p?h.charCodeAt(m+1):0,u=n?h.charCodeAt(m+2):0,v=t>>2,w=(t&3)<<4|r>>4,y=(r&15)<<2|u>>6,x=u&63;n||(x=64,p||(y=64));l.push(Ai[v],Ai[w],Ai[y],Ai[x])}g=l.join("");f.call(e,g)}}var z=b.join("*");return["1",Ui(z),
z].join("*")},Ui=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ei)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Ei=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ei[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Xi=function(){return function(a){var b=Zg(F.location.href),
c=b.search.replace("?",""),d=Ug(c,"_gl",!1,!0)||"";a.query=Wi(d)||{};var e=Xg(b,"fragment").match(Ti("_gl"));a.fragment=Wi(e&&e[3]||"")||{}}},Yi=function(a){var b=Xi(),c=Hi();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(db(d,e.query),a&&db(d,e.fragment));return d},Wi=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Li.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=
0;p<b;++p)if(m===Ui(h,p)){l=!0;break a}l=!1}if(l){for(var n={},t=h?h.split("*"):[],r=0;r<t.length;r+=2)n[t[r]]=Di(t[r+1]);return n}}}}catch(u){}};function Zi(a,b,c,d){function e(p){var n=p,t=Ti(a).exec(n),r=n;if(t){var u=t[2],v=t[4];r=t[1];v&&(r=r+u+v)}p=r;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+m}d=void 0===d?!1:d;var f=Si.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function $i(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Ki(b,1,c),e=Ki(b,2,c),f=Ki(b,3,c);if(eb(d)){var g=Vi(d);c?aj("_gl",g,a):bj("_gl",g,a,!1)}if(!c&&eb(e)){var h=Vi(e);bj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],n=a;if(n.tagName){if("a"===n.tagName.toLowerCase()){bj(m,p,n,void 0);break a}if("form"===n.tagName.toLowerCase()){aj(m,p,n);break a}}"string"==typeof n&&Zi(m,p,n,void 0)}}
function bj(a,b,c,d){if(c.href){var e=Zi(a,b,c.href,void 0===d?!1:d);Gf.test(e)&&(c.href=e)}}
function aj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=M.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Zi(a,b,c.action);Gf.test(m)&&(c.action=m)}}}
var Fi=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||$i(e,e.hostname)}}catch(g){}},Gi=function(a){try{if(a.action){var b=Xg(Zg(a.action),"host");$i(a,b)}}catch(c){}},cj=function(a,b,c,d){Ii();Ji(a,b,"fragment"===c?2:1,!!d,!1)},dj=function(a,b){Ii();Ji(a,[Wg(F.location,"host",!0)],b,!0,!0)},ej=function(){var a=M.location.hostname,b=Mi.exec(M.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Ni,""),l=e.replace(Ni,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},fj=function(a,b){return!1===a?!1:a||b||ej()};var gj=/^\w+$/,hj=/^[\w-]+$/,ij=/^~?[\w-]+$/,jj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},kj=function(){if(!jg()||!ug())return!0;var a=rg("ad_storage");return null==a?!0:!!a},lj=function(a,b){tg("ad_storage")?kj()?a():xg(a,"ad_storage"):b?xf("TAGGING",3):wg(function(){lj(a,!0)},["ad_storage"])},oj=function(a){var b=[];if(!M.cookie)return b;var c=ai(a,M.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=mj(c[d]);e&&-1===B(b,e)&&b.push(e)}return nj(b)};
function pj(a){return a&&"string"==typeof a&&a.match(gj)?a:"_gcl"}
var rj=function(){var a=Zg(F.location.href),b=Xg(a,"query",!1,void 0,"gclid"),c=Xg(a,"query",!1,void 0,"gclsrc"),d=Xg(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ug(e,"gclid",!1,void 0);c=c||Ug(e,"gclsrc",!1,void 0)}return qj(b,c,d)},qj=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(hj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":e(a,
"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},sj=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b;case "gp":return"gp"===b}return!1},uj=function(a){var b=rj();lj(function(){tj(b,a)})};
function tj(a,b,c){function d(l,m){var p=vj(l,e);p&&ji(p,m,f)}b=b||{};var e=pj(b.prefix);c=c||ab();var f=ri(b,c,!0);f.ya="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.nj?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var xj=function(a,b){var c=Yi(!0);lj(function(){for(var d=pj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==jj[f]){var g=vj(f,d),h=c[g];if(h){var l=Math.min(wj(h),ab()),m;b:{for(var p=l,n=ai(g,M.cookie,void 0,"ad_storage"),t=0;t<n.length;++t)if(wj(n[t])>p){m=!0;break b}m=!1}if(!m){var r=ri(b,l,!0);r.ya="ad_storage";ji(g,h,r)}}}}tj(qj(c.gclid,c.gclsrc),b)})},vj=function(a,b){var c=jj[a];if(void 0!==c)return b+c},wj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function mj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var yj=function(a,b,c,d,e){if(Na(b)){var f=pj(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=vj(a[l],f);if(m){var p=ai(m,M.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};lj(function(){cj(g,b,c,d)})}},nj=function(a){return a.filter(function(b){return ij.test(b)})},zj=function(a,b){for(var c=pj(b.prefix),d={},e=0;e<a.length;e++)jj[a[e]]&&(d[a[e]]=jj[a[e]]);lj(function(){Ta(d,function(f,g){var h=ai(c+g,M.cookie,void 0,"ad_storage");if(h.length){var l=h[0],m=wj(l),
p={};p[f]=[mj(l)];tj(p,b,m)}})})};function Aj(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Bj=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(ug()){var c=rj();if(Aj(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);dj(function(){return d},3);dj(function(){var e={};return e._up="1",e},1)}}},Cj=function(){var a;if(kj()){for(var b=[],c=M.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({qe:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].qe]||(g[b[h].qe]=[]),g[b[h].qe].push({timestamp:l[1],Lc:l[2]}))}a=g}else a={};return a};var Dj=/^\d+\.fls\.doubleclick\.net$/,Ej=!1;function Fj(a,b){tg(I.C)?Cg(I.C)?a():xg(a,I.C):b?zf(42):Eg(function(){Fj(a,!0)},[I.C])}function Gj(a){var b=Zg(F.location.href),c=Xg(b,"host",!1);if(c&&c.match(Dj)){var d=Xg(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Hj(a,b,c){if("aw"==a||"dc"==a){var d=Gj("gcl"+a);if(d)return d.split(".")}var e=pj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Cg(I.C)&&c,g;g=rj()[a]||[];if(0<g.length)return f?["0"]:g}var h=vj(a,e);return h?oj(h):[]}
var Ij=function(a){var b=Gj("gac");if(b)return!Cg(I.C)&&a?"0":decodeURIComponent(b);var c=Cj(),d=[];Ta(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].Lc);g=nj(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Kj=function(a,b){if(Ej)Jj(a,b,"dc");else{var c=rj().dc||[];Fj(function(){yi(b);var d=ti[ui(b.prefix)],e=!1;if(d&&0<c.length){var f=O.joined_au=O.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+
d;gg(l);e=f[g]=!0}}null==a&&(a=e);a&&d&&wi(b)})}},Jj=function(a,b,c){var d=rj(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!sj(h,c)||e.push({Lc:f,Mf:h});!g||c&&"dc"!==c||e.push({Lc:g,Mf:"ds"});Fj(function(){yi(b);var l=ti[ui(b.prefix)],m=!1;if(l&&0<e.length)for(var p=O.joined_auid=O.joined_auid||{},n=0;n<e.length;n++){var t=e[n],r=t.Lc,u=t.Mf,v=(b.prefix||"_gcl")+"."+u+"."+r;if(!p[v]){var w="https://adservice.google.com/pagead/regclk";w=w+"?gclid="+r+"&auid="+l+"&gclsrc="+u;gg(w);
m=p[v]=!0}}null==a&&(a=m);a&&l&&wi(b)})};var Lj=/[A-Z]+/,Mj=/\s/,Nj=function(a){if(q(a)&&(a=Za(a),!Mj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Lj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],H:d}}}}},Pj=function(a){for(var b={},c=0;c<a.length;++c){var d=Nj(a[c]);d&&(b[d.id]=d)}Oj(b);var e=[];Ta(b,function(f,g){e.push(g)});return e};
function Oj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.H[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Qj=function(){var a=!1;return a};var Sj=function(a,b,c,d){return(2===Rj()||d||"http:"!=F.location.protocol?a:b)+c},Rj=function(){var a=Xf(),b;if(1===a)a:{var c=Ah;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=M.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var gk=function(a){return Cg(I.C)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=$g(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},hk=function(){var a;if(!(a=Bh)){var b;if(!0===F._gtmdgs)b=!0;else{var c=Sf&&Sf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Va("1");return Xh(1,100)<d?Xh(2,2):-1},ik=function(a){var b;
if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var jk=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),kk={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},lk={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},mk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ok=function(a){var b=Nh("gtm.allowlist")||Nh("gtm.whitelist");b&&zf(9);var c=b&&gb(Ya(b),kk),d=Nh("gtm.blocklist")||Nh("gtm.blacklist");d||(d=Nh("tagTypeBlacklist"))&&
zf(3);d?zf(8):d=[];nk()&&(d=Ya(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=B(Ya(d),"google")&&zf(2);var e=d&&gb(Ya(d),lk),f={};return function(g){var h=g&&g[Yd.Qa];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Gh[h]||[],m=a(h,l);if(b){var p;if(p=m)a:{if(0>B(c,h))if(l&&0<l.length)for(var n=0;n<
l.length;n++){if(0>B(c,l[n])){zf(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var t=!1;if(d){var r=0<=B(e,h);if(r)t=r;else{var u=Sa(e,l||[]);u&&zf(10);t=u}}var v=!m||t;v||!(0<=B(l,"sandboxedScripts"))||c&&-1!==B(c,"sandboxedScripts")||(v=Sa(e,mk));return f[h]=v}},nk=function(){return jk.test(F.location&&F.location.hostname)};var pk={active:!0,isAllowed:function(){return!0}},qk=function(a){var b=O.zones;return b?b.checkState(le.F,a):pk},rk=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var sk=function(){},tk=function(){};var uk=!1,vk=0,wk=[];function xk(a){if(!uk){var b=M.createEventObject,c="complete"==M.readyState,d="interactive"==M.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){uk=!0;for(var e=0;e<wk.length;e++)N(wk[e])}wk.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function yk(){if(!uk&&140>vk){vk++;try{M.documentElement.doScroll("left"),xk()}catch(a){F.setTimeout(yk,50)}}}var zk=function(a){uk?a():wk.push(a)};var Ak={},Bk={},Ck=function(a,b,c,d){if(!Bk[a]||xh[b]||"__zone"===b)return-1;var e={};Cb(d)&&(e=G(d,e));e.id=c;e.status="timeout";return Bk[a].tags.push(e)-1},Dk=function(a,b,c,d){if(Bk[a]){var e=Bk[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Ek(a){for(var b=Ak[a]||[],c=0;c<b.length;c++)b[c]();Ak[a]={push:function(d){d(le.F,Bk[a])}}}
var Hk=function(a,b,c){Bk[a]={tags:[]};Ka(b)&&Fk(a,b);c&&F.setTimeout(function(){return Ek(a)},Number(c));return Gk(a)},Fk=function(a,b){Ak[a]=Ak[a]||[];Ak[a].push(cb(function(){return N(function(){b(le.F,Bk[a])})}))};function Gk(a){var b=0,c=0,d=!1;return{add:function(){c++;return cb(function(){b++;d&&b>=c&&Ek(a)})},nh:function(){d=!0;b>=c&&Ek(a)}}};var Ik=function(){function a(d){return!La(d)||0>d?0:d}if(!O._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=La(Oh.get("gtm.start"))?Oh.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Dh-b)}}};var Mk={},Nk=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},Ok=!1;
var Pk=function(a){F.GoogleAnalyticsObject||(F.GoogleAnalyticsObject=a||"ga");var b=F.GoogleAnalyticsObject;if(F[b])F.hasOwnProperty(b)||zf(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);F[b]=c}Ik();return F[b]},Qk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Nk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Rk=function(a){};
var Tk=function(a){},Sk=function(){return F.GoogleAnalyticsObject||"ga"},Uk=function(a,b){return function(){var c=Nk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var Zk=function(){return"&tc="+Nd.filter(function(a){return a}).length},bl=function(){2022<=$k().length&&al()},dl=function(){cl||(cl=F.setTimeout(al,500))},al=function(){cl&&(F.clearTimeout(cl),cl=void 0);void 0===el||fl[el]&&!gl&&!hl||(il[el]||jl.Xh()||0>=kl--?(zf(1),il[el]=!0):(jl.wi(),Zf($k()),fl[el]=!0,ll=ml=nl=hl=gl=""))},$k=function(){var a=el;if(void 0===a)return"";var b=yf("GTM"),c=yf("TAGGING");return[ol,fl[a]?"":"&es=1",pl[a],b?"&u="+b:"",c?"&ut="+c:"",Zk(),gl,hl,nl?nl:"",ml,ll,"&z=0"].join("")},
ql=function(){return[Eh,"&v=3&t=t","&pid="+Pa(),"&rv="+le.Ac].join("")},rl="0.005000">Math.random(),ol=ql(),sl=function(){ol=ql()},fl={},gl="",hl="",ll="",ml="",nl="",el=void 0,pl={},il={},cl=void 0,jl=function(a,b){var c=0,d=0;return{Xh:function(){if(c<a)return!1;ab()-d>=b&&(c=0);return c>=a},wi:function(){ab()-d>=b&&(c=0);c++;d=ab()}}}(2,1E3),kl=1E3,tl=function(a,b,c){if(rl&&!il[a]&&b){a!==el&&(al(),el=a);var d,e=String(b[Yd.Qa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;gl=gl?gl+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(Pd[g]?"1":"2")+d;ll=ll?ll+"."+h:"&ti="+h;dl();bl()}},ul=function(a,b,c){if(rl&&!il[a]){a!==el&&(al(),el=a);var d=c+b;hl=hl?hl+"."+d:"&epr="+d;dl();bl()}},vl=function(a,b,c){};
var wl=function(){return!1},xl=function(){var a={};return function(b,c,d){}};function yl(a,b,c,d){var e=Nd[a],f=zl(a,b,c,d);if(!f)return null;var g=Vd(e[Yd.wf],c,[]);if(g&&g.length){var h=g[0];f=yl(h.index,{onSuccess:f,onFailure:1===h.If?b.terminate:f,terminate:b.terminate},c,d)}return f}
function zl(a,b,c,d){function e(){if(f[Yd.Wg])h();else{var w=Wd(f,c,[]);var z=Ck(c.id,String(f[Yd.Qa]),Number(f[Yd.xf]),w[Yd.Xg]),A=!1;w.vtp_gtmOnSuccess=function(){if(!A){A=!0;var E=ab()-D;tl(c.id,Nd[a],"5");Dk(c.id,z,"success",
E);g()}};w.vtp_gtmOnFailure=function(){if(!A){A=!0;var E=ab()-D;tl(c.id,Nd[a],"6");Dk(c.id,z,"failure",E);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;tl(c.id,f,"1");var C=function(){var E=ab()-D;tl(c.id,f,"7");Dk(c.id,z,"exception",E);A||(A=!0,h())};var D=ab();try{Ud(w,c)}catch(E){C(E)}}}var f=Nd[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.Td(f))return null;var m=Vd(f[Yd.yf],c,[]);if(m&&m.length){var p=m[0],n=yl(p.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!n)return null;g=n;h=2===p.If?l:n}if(f[Yd.sf]||f[Yd.Zg]){var t=f[Yd.sf]?Od:
c.Hi,r=g,u=h;if(!t[a]){e=cb(e);var v=Al(a,t,e);g=v.onSuccess;h=v.onFailure}return function(){t[a](r,u)}}return e}function Al(a,b,c){var d=[],e=[];b[a]=Bl(d,e,c);return{onSuccess:function(){b[a]=Cl;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=Dl;for(var f=0;f<e.length;f++)e[f]()}}}function Bl(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Cl(a){a()}function Dl(a,b){b()};var Gl=function(a,b,c){for(var d=[],e=0;e<Nd.length;e++)if(a[e]){var f=Nd[e];var g=c.add();try{var h=yl(e,{onSuccess:g,onFailure:g,terminate:g},b,e);if(h){var l=d,m=l.push,p=e,n=f["function"];if(!n)throw"Error: No function name given for function call.";var t=Pd[n];m.call(l,{bg:p,Vf:t?t.priorityOverride||0:0,Jc:h})}else El(e,b),g()}catch(u){g()}}c.nh();d.sort(Fl);for(var r=0;r<d.length;r++)d[r].Jc();return 0<
d.length};function Fl(a,b){var c,d=b.Vf,e=a.Vf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.bg,h=b.bg;f=g>h?1:g<h?-1:0}return f}function El(a,b){if(!rl)return;var c=function(d){var e=b.Td(Nd[d])?"3":"4",f=Vd(Nd[d][Yd.wf],b,[]);f&&f.length&&c(f[0].index);tl(b.id,Nd[d],e);var g=Vd(Nd[d][Yd.yf],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Hl=!1,Ml=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Hl)return!1;Hl=!0}var d=qk(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=qk(Number.MAX_SAFE_INTEGER)}rl&&!il[b]&&el!==b&&(al(),el=b,ll=gl="",pl[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,dl());var f={id:b,name:c,Td:ok(d.isAllowed),Hi:[],Rf:function(){zf(6)},Cf:Il(b)},g=Hk(b,a.eventCallback,a.eventTimeout);Jl(b);
var h=ge(f);e&&(h=Kl(h));var l=Gl(h,f,g);"gtm.js"!==c&&"gtm.sync"!==c||Tk(le.F);switch(c){case "gtm.init":zf(19),l&&zf(20)}return Ll(h,l)};function Il(a){return function(b){rl&&(Hb(b)||vl(a,"input",b))}}
function Jl(a){Rh(a,"event",1);Rh(a,"ecommerce",1);Rh(a,"gtm");Rh(a,"eventModel");}function Kl(a){for(var b=[],c=0;c<a.length;c++)a[c]&&wh[String(Nd[c][Yd.Qa])]&&(b[c]=!0);return b}function Ll(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Nd[c]&&!xh[String(Nd[c][Yd.Qa])])return!0;return!1}function Nl(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Zg(""+c+b).href}}function Ol(a,b){return Pl()?Nl(a,b):void 0}function Pl(){var a=!1;return a};var Ql=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0},Rl=function(a){var b=new Ql;b.eventModel=a;return b},Sl=function(a,b){a.targetConfig=b;return a},Tl=function(a,b){a.containerConfig=b;return a},Ul=function(a,b){a.remoteConfig=b;return a},Vl=function(a,b){a.globalConfig=
b;return a},Wl=function(a,b){a.onSuccess=b;return a},Xl=function(a,b){a.setContainerTypeLoaded=b;return a},Yl=function(a,b){a.getContainerTypeLoaded=b;return a},Zl=function(a,b){a.onFailure=b;return a};Ql.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var $l=function(a){function b(e){Ta(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ta(c,function(e){d.push(e)});return d};var am;if(3===le.Ac.length)am="g";else{var bm="G";am=bm}
var cm={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:am,OPT:"o"},dm=function(a){var b=le.F.split("-"),c=b[0].toUpperCase(),d=cm[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===le.Ac.length){var g="w";f="2"+g}else f="";return f+d+le.Ac+e};var em=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var fm=function(){return Kf("iPhone")&&!Kf("iPod")&&!Kf("iPad")};Kf("Opera");Kf("Trident")||Kf("MSIE");Kf("Edge");!Kf("Gecko")||-1!=Hf.toLowerCase().indexOf("webkit")&&!Kf("Edge")||Kf("Trident")||Kf("MSIE")||Kf("Edge");-1!=Hf.toLowerCase().indexOf("webkit")&&!Kf("Edge")&&Kf("Mobile");Kf("Macintosh");Kf("Windows");Kf("Linux")||Kf("CrOS");var gm=oa.navigator||null;gm&&(gm.appVersion||"").indexOf("X11");Kf("Android");fm();Kf("iPad");Kf("iPod");fm()||Kf("iPad")||Kf("iPod");Hf.toLowerCase().indexOf("kaios");var hm=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var im=function(){};var jm=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},km=function(a,b){this.o=a;this.g=null;this.D={};this.S=0;this.J=void 0===b?500:b;this.s=null};na(km,im);
var mm=function(a){return"function"===typeof a.o.__tcfapi||null!=lm(a)};
km.prototype.addEventListener=function(a){var b={},c=Bf(function(){return a(b)}),d=0;-1!==this.J&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.J));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=jm(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{nm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};km.prototype.removeEventListener=function(a){a&&a.listenerId&&nm(this,"removeEventListener",null,a.listenerId)};
var pm=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=om(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:m&&om(a.purpose.consents,b)}else l=!0;else l=1===h?a.purpose&&a.vendor?om(a.purpose.legitimateInterests,
b)&&om(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},om=function(a,b){return!(!a||!a[b])},nm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(lm(a)){qm(a);var f=++a.S;a.D[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},lm=function(a){if(a.g)return a.g;a.g=hm(a.o,"__tcfapiLocator");return a.g},qm=function(a){a.s||(a.s=function(b){try{var c;c=("string"===
typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.D[c.callId](c.returnValue,c.success)}catch(d){}},em(a.o,a.s))};var rm={1:0,3:0,4:0,7:3,9:3,10:3};function sm(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var tm=sm("",550),um=sm("",500);function vm(){var a=O.tcf||{};return O.tcf=a}
var wm=function(a,b){this.s=a;this.g=b;this.o=ab();},xm=function(a){},ym=function(a){},Em=function(){var a=vm(),b=new km(F,3E3),c=new wm(b,a);if((zm()?!0===F.gtag_enable_tcf_support:!1!==F.gtag_enable_tcf_support)&&!a.active&&("function"===typeof F.__tcfapi||mm(b))){a.active=!0;a.Zb={};Am();var d=setTimeout(function(){Bm(a);Cm(a);d=null},um);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Bm(a),Cm(a),xm(c);else{var f;if(!1===e.gdprApplies)f=Dm(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in rm)if(rm.hasOwnProperty(h))if("1"===h){var l=e,m=!0;m=void 0===m?!1:m;var p;var n=l;!1===n.gdprApplies?p=!0:(void 0===n.internalErrorState&&(n.internalErrorState=jm(n)),p="error"===n.cmpStatus||0!==n.internalErrorState||"loaded"===n.cmpStatus&&("tcloaded"===n.eventStatus||"useractioncomplete"===n.eventStatus)?!0:!1);g["1"]=p?!1===l.gdprApplies||"tcunavailable"===l.tcString||
void 0===l.gdprApplies&&!m||"string"!==typeof l.tcString||!l.tcString.length?!0:pm(l,"1",0):!1}else g[h]=pm(e,h,rm[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.Zb=f,Cm(a),xm(c))}}),ym(c)}catch(e){d&&(clearTimeout(d),d=null),Bm(a),Cm(a)}}};function Bm(a){a.type="e";a.tcString="tcunavailable";a.Zb=Dm()}function Am(){var a={};Ag((a.ad_storage="denied",a.wait_for_update=tm,a))}
var zm=function(){var a=!1;a=!0;return a};function Dm(){var a={},b;for(b in rm)rm.hasOwnProperty(b)&&(a[b]=!0);return a}function Cm(a){var b={};Bg((b.ad_storage=a.Zb["1"]?"granted":"denied",b))}
var Fm=function(){var a=vm();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Gm=function(){var a=vm();return a.active?a.tcString||"":""},Hm=function(a){if(!rm.hasOwnProperty(String(a)))return!0;var b=vm();return b.active&&b.Zb?!!b.Zb[String(a)]:!0};var Im=!1;function Jm(a){var b=String(F.location).split(/[?#]/)[0],c=le.ig||F._CONSENT_MODE_SALT;return a?c?String(Yh(b+a+c)):"0":""}
function Km(a){function b(r){var u;O.reported_gclid||(O.reported_gclid={});u=O.reported_gclid;var v;v=Im&&g&&(!ug()||Cg(I.C))?l+"."+(f.prefix||"_gcl")+(r?"gcu":"gcs"):l+(r?"gcu":"gcs");if(!u[v]){u[v]=!0;var w=[],y=function(D,E){E&&w.push(D+"="+encodeURIComponent(E))},x="https://www.google.com";if(ug()){var z=Cg(I.C);y("gcs",Dg());r&&y("gcu","1");O.dedupe_gclid||
(O.dedupe_gclid=""+mi());y("rnd",O.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&Cg(I.C)){var A=oj("_gcl_aw");y("gclaw",A.join("."))}y("url",String(F.location).split(/[?#]/)[0]);y("dclid",Lm(d,p));!z&&d&&(x="https://pagead2.googlesyndication.com")}y("gdpr_consent",Gm());"1"===Yi(!1)._up&&y("gtm_up","1");y("gclid",Lm(d,
l));y("gclsrc",m);y("gtm",dm(!e));Im&&g&&Cg(I.C)&&(yi(f||{}),y("auid",ti[ui(f.prefix)]||""));var C=x+"/pagead/landing?"+w.join("&");gg(C)}}var c=!!a.Hd,d=!!a.wa,e=a.U,f=void 0===a.Fc?{}:a.Fc,g=void 0===a.Oc?!0:a.Oc,h=rj(),l=h.gclid||"",m=h.gclsrc,p=h.dclid||"",n=!c&&(!l||m&&"aw.ds"!==m?!1:!0),t=ug();if(n||t)t?Eg(function(){b();Cg(I.C)||xg(function(r){return b(!0,r.Df)},I.C)},[I.C]):b()}function Lm(a,b){var c=a&&!Cg(I.C);return b&&c?"0":b}var vn=function(){var a=!0;Hm(7)&&Hm(9)&&Hm(10)||(a=!1);var b=!0;b=!1;b&&!un()&&(a=!1);return a},un=function(){var a=!0;Hm(3)&&Hm(4)||(a=!1);return a};var Tn=!1;function Un(){var a=O;return a.gcq=a.gcq||new Vn}
var Wn=function(a,b,c){Un().register(a,b,c)},Xn=function(a,b,c,d){Un().push("event",[b,a],c,d)},Yn=function(a,b){Un().push("config",[a],b)},Zn=function(a,b,c,d){Un().push("get",[a,b],c,d)},$n=function(a){return Un().getRemoteConfig(a)},ao={},bo=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.g=!1},co=function(a,b,c,d,e){this.type=a;this.s=b;this.U=c||"";this.g=d;this.o=e},Vn=function(){this.D={};this.o={};this.g=[];this.s={AW:!1,UA:!1}},
eo=function(a,b){var c=Nj(b);return a.D[c.containerId]=a.D[c.containerId]||new bo},fo=function(a,b,c){if(b){var d=Nj(b);if(d&&1===eo(a,b).status){eo(a,b).status=2;var e={};rl&&(e.timeoutId=F.setTimeout(function(){zf(38);dl()},3E3));a.push("require",[e],d.containerId);ao[d.containerId]=ab();if(Qj()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=F.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Ol(c,g)||h;Wf(l)}}}},go=function(a,b,c,d){if(d.U){var e=eo(a,d.U),f=e.o;if(f){var g=G(c),h=G(e.targetConfig[d.U]),l=G(e.containerConfig),m=G(e.remoteConfig),p=G(a.o),n=Nh("gtm.uniqueEventId"),t=Nj(d.U).prefix,r=Yl(Xl(Zl(Wl(Vl(Ul(Tl(Sl(Rl(g),h),l),m),p),function(){
ul(n,t,"2");}),function(){ul(n,t,"3");}),function(u,v){a.s[u]=v}),function(u){return a.s[u]});try{ul(n,t,"1");f(d.U,b,d.s,r)}catch(u){ul(n,t,"4");}}}};aa=Vn.prototype;
aa.register=function(a,b,c){var d=eo(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){d.remoteConfig=c}var e=Nj(a),f=ao[e.containerId];if(void 0!==f){var g=O[e.containerId].bootstrap,h=e.prefix.toUpperCase();O[e.containerId]._spx&&(h=h.toLowerCase());var l=Nh("gtm.uniqueEventId"),m=h,p=ab()-g;if(rl&&!il[l]){l!==el&&(al(),el=l);var n=m+"."+Math.floor(g-f)+
"."+Math.floor(p);ml=ml?ml+","+n:"&cl="+n}delete ao[e.containerId]}this.flush()}};aa.push=function(a,b,c,d){var e=Math.floor(ab()/1E3);fo(this,c,b[0][I.Pa]||this.o[I.Pa]);Tn&&c&&eo(this,c).g&&(d=!1);this.g.push(new co(a,e,c,b,d));d||this.flush()};aa.insert=function(a,b,c){var d=Math.floor(ab()/1E3);0<this.g.length?this.g.splice(1,0,new co(a,d,c,b,!1)):this.g.push(new co(a,d,c,b,!1))};
aa.flush=function(a){for(var b=this,c=[],d=!1;this.g.length;){var e=this.g[0];if(e.o)Tn?!e.U||eo(this,e.U).g?(e.o=!1,this.g.push(e)):c.push(e):(e.o=!1,this.g.push(e));else switch(e.type){case "require":if(3!==eo(this,e.U).status&&!a){Tn&&this.g.push.apply(this.g,c);return}rl&&F.clearTimeout(e.g[0].timeoutId);break;case "set":Ta(e.g[0],function(t,r){G(kb(t,r),b.o)});break;case "config":var f=e.g[0],g=!!f[I.vc];delete f[I.vc];var h=eo(this,e.U),l=Nj(e.U),m=l.containerId===l.id;g||(m?h.containerConfig=
{}:h.targetConfig[e.U]={});h.g&&g||go(this,I.ja,f,e);h.g=!0;delete f[I.Fb];m?G(f,h.containerConfig):G(f,h.targetConfig[e.U]);Tn&&(d=!0);break;case "event":go(this,e.g[1],e.g[0],e);break;case "get":var p={},n=(p[I.Da]=e.g[0],p[I.Ca]=e.g[1],p);go(this,I.Ma,n,e)}this.g.shift()}Tn&&(this.g.push.apply(this.g,c),d&&this.flush())};aa.getRemoteConfig=function(a){return eo(this,a).remoteConfig};function ho(a,b,c){};function io(a,b,c,d){};function jo(a){};var ko=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||bg(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},lo=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},mo=function(a,b,c){lo(a)[b]=c},no=function(a,b,c,d){var e=lo(a),f=bb(e,b,d);e[b]=c(f)},oo=function(a,b,c){var d=lo(a);return bb(d,b,c)};var po={},qo=[];
var xo=function(a,b){};

function Ao(a,b){};var Bo=/^\s*$/,Co,Do=!1;
function Oo(a,b){}function Po(a,b,c){};var Qo=!!F.MutationObserver,Ro=void 0,So=function(a){if(!Ro){var b=function(){var c=M.body;if(c)if(Qo)(new MutationObserver(function(){for(var e=0;e<Ro.length;e++)N(Ro[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;$f(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<Ro.length;e++)N(Ro[e])}))})}};Ro=[];M.body?b():N(b)}Ro.push(a)};var Uo=["www.youtube.com","www.youtube-nocookie.com"],Vo,Wo=!1,Xo=0;
function gp(a,b){}function hp(a,b){
return!0};function ip(a,b){var c;return c};function jp(a){};function kp(a){};var lp=!1,mp=[];function np(){if(!lp){lp=!0;for(var a=0;a<mp.length;a++)N(mp[a])}}var op=function(a){lp?N(a):mp.push(a)};function pp(a){H(this.o.g,["listener:!Fn"],arguments);hf(this,"process_dom_events","window","load");op(Eb(a))};function qp(a,b){var c;var e=!1;var f=Db(c,this.s,e);void 0===f&&void 0!==c&&zf(45);return f};function rp(a){var b;var f=!1;var g=Db(b,this.s,f);void 0===g&&void 0!==b&&zf(45);return g};function sp(a,b){var c=null,d=!1;H(this.o.g,["functionPath:!string","arrayPath:!string"],arguments);hf(this,"access_globals","readwrite",a);hf(this,"access_globals","readwrite",b);var e=[];
var f=a.split("."),g=jb(f,e),h=f[f.length-1];if(void 0===g)throw Error("Path "+a+" does not exist.");var l=g[h];if(l&&!Ka(l))return null;if(l)return Db(l,this.s,d);var m;l=function(){if(!Ka(m.push))throw Error("Object at "+b+" in window is not an array.");m.push.call(m,arguments)};g[h]=l;var p=b.split("."),n=jb(p,e),t=p[p.length-1];if(void 0===n)throw Error("Path "+p+" does not exist.");m=n[t];void 0===m&&(m=[],n[t]=m);c=function(){l.apply(l,Array.prototype.slice.call(arguments,0))};
return Db(c,this.s,d)};function tp(a){var b;var h=!1;return Db(b,this.s,h)};var up=function(a){var b;return b};function vp(a,b){b=void 0===b?!0:b;var c;return c};function wp(a){var b=null;return b};function xp(a,b){var c;return c};function yp(a,b){var c;return c};function zp(a){var b="";return b};function Ap(a,b){var c;return c};function Bp(a){var b="";return b};function Cp(){hf(this,"get_user_agent");return F.navigator.userAgent};function Dp(a,b){};var Ep={};
function Fp(a,b,c,d){H(this.o.g,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);hf(this,"inject_script",a);var e=this.s,f=function(){b instanceof pb&&b.Ta(e)},g=function(){c instanceof pb&&c.Ta(e)};if(!d){Wf(a,f,g);return}var h=d;Ep[h]?(Ep[h].onSuccess.push(f),Ep[h].onFailure.push(g)):(Ep[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Ep[h].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(p){N(p);return 0}},
g=function(){for(var l=Ep[h].onFailure,m=0;m<l.length;m++)N(l[m]);Ep[h]=null},Wf(a,f,g));};var Gp=function(){return!1},Hp={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function Ip(){};function Jp(a){var b=void 0;return b};function Kp(a,b){var c=!1;return c};function Lp(){var a="";return a};function Mp(){var a="";return a};function Np(a,b,c,d){d=void 0===d?!1:d;};function Op(a,b,c){};function Pp(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function Qp(a){H(this.o.g,["consentSettings:!DustMap"],arguments);for(var b=a.Rb(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==I.xe&&hf(this,"access_consent",e,"write")}Ag(Eb(a))};function Rp(a,b,c){H(this.o.g,["path:!string","value:?*","overrideExisting:?boolean"],arguments);hf(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=F,g;for(g=0;g<e.length-1;g++){f=f[e[g]];if(void 0===f)return!1;}if(void 0===
f[e[g]]||c)return f[e[g]]=Eb(b,this.s,d),!0;return!1};function Sp(a,b,c){};var Tp=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function Up(a,b,c){var d=this;}
;var Vp={},Wp={};Vp.getItem=function(a){var b=null;return b};
Vp.setItem=function(a,b){};
Vp.removeItem=function(a){};Vp.clear=function(){};var Xp=function(a){var b;return b};function Yp(a){H(this.o.g,["consentSettings:!DustMap"],arguments);var b=Eb(a),c;for(c in b)b.hasOwnProperty(c)&&hf(this,"access_consent",c,"write");Bg(b)};var cd=function(){var a=new tf;Qj()?(a.add("injectHiddenIframe",Ia),a.add("injectScript",Ia)):(a.add("injectHiddenIframe",Dp),a.add("injectScript",Fp));var b=Op;a.add("Math",af());a.add("TestHelper",vf());a.add("addEventCallback",jo);a.add("aliasInWindow",hp);a.add("assertApi",Xe);a.add("assertThat",Ye);a.add("callInWindow",
ip);a.add("callLater",jp);a.add("copyFromDataLayer",qp);a.add("copyFromWindow",rp);a.add("createArgumentsQueue",sp);a.add("createQueue",tp);a.add("decodeUri",bf);a.add("decodeUriComponent",cf);a.add("encodeUri",df);a.add("encodeUriComponent",ef);a.add("fail",ff);a.add("fromBase64",up,!("atob"in F));a.add("generateRandom",gf);a.add("getContainerVersion",jf);a.add("getCookieValues",vp);a.add("getQueryParameters",xp);a.add("getReferrerQueryParameters",yp);a.add("getReferrerUrl",zp);a.add("getTimestamp",
kf);a.add("getTimestampMillis",kf);a.add("getType",lf);a.add("getUrl",Bp);a.add("localStorage",Hp,!Gp());a.add("logToConsole",Ip);a.add("makeInteger",nf);a.add("makeNumber",of);a.add("makeString",pf);a.add("makeTableMap",qf);a.add("mock",sf);a.add("queryPermission",Kp);a.add("readCharacterSet",Lp);a.add("readTitle",Mp);a.add("sendPixel",b);a.add("setCookie",Pp);a.add("setInWindow",Rp);a.add("sha256",Up);a.add("templateStorage",Vp);a.add("toBase64",Xp,!("btoa"in F));a.add("JSON",mf(function(c){var d=this.s.g;d&&d.log.call(this,"error",c)}));a.add("parseUrl",Jp);

return function(c){var d;if(a.g.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.o.hasOwnProperty(c))b:{var f=this.s.g;if(f){var g=f.Qb();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.o.hasOwnProperty(c)?a.o[c]:void 0;
else throw Error(c+" is not a valid API name.");}return d}};var ad,pe;
function Zp(){var a=data.runtime||[],b=data.runtime_lines;ad=new Yc;$p();Ed=function(e,f,g){aq(f);var h=new tb;Ta(f,function(r,u){var v=Db(u);void 0===v&&void 0!==u&&zf(44);h.set(r,v)});ad.g.g.D=ce();var l={oh:qe(e),eventId:void 0!==g?g.id:void 0,Qb:function(){return e},log:function(){}};if(wl()){var m=xl(),p=void 0,n=void 0;l.ia={Lb:{},mb:function(r,u,v){1===u&&(p=r);7===u&&(n=v);m(r,u,v)},Xd:rf()};l.log=function(r,u){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:r,source:n,message:v})}}}var t=
bd(l,[e,h]);ad.g.g.D=void 0;t instanceof ya&&"return"===t.g&&(t=t.o);return Eb(t)};dd();for(var c=0;c<a.length;c++){var d=a[c];if(!Na(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&$d(d,b[c]);ad.Jc(d)}}function aq(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ka(b)&&(a.gtmOnSuccess=function(){N(b)});Ka(c)&&(a.gtmOnFailure=function(){N(c)})}
function $p(){var a=ad;O.SANDBOXED_JS_SEMAPHORE=O.SANDBOXED_JS_SEMAPHORE||0;id(a,function(b,c,d){O.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{O.SANDBOXED_JS_SEMAPHORE--}})}function bq(a){void 0!==a&&Ta(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Gh[e]=Gh[e]||[];Gh[e].push(b)}})};var cq="HA GF G UA AW DC".split(" "),dq=!1,eq={},fq=!1;function gq(a,b){var c={event:a};b&&(c.eventModel=G(b),b[I.jd]&&(c.eventCallback=b[I.jd]),b[I.oc]&&(c.eventTimeout=b[I.oc]));return c}function hq(){return dq}
var kq={config:function(a){var b;return b},consent:function(a){function b(){hq()&&
G(a[2],{subcommand:a[1]})}if(3===a.length){zf(39);var c=Hh(),d=a[1];"default"===d?(b(),Ag(a[2])):"update"===d&&(b(),Bg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&q(b)){var c;if(2<a.length){if(!Cb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=gq(b,c);return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime)return fq=!0,hq(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=pe.o;d.g[b]?d.g[b].push(c):d.g[b]=[c]}},set:function(a){var b;2==a.length&&Cb(a[1])?b=G(a[1]):3==a.length&&q(a[1])&&(b={},Cb(a[2])||Na(a[2])?b[a[1]]=
G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},lq={policy:!0};var mq=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},oq=function(a){var b=nq(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Fq=function(a){if(Eq(a))return a;this.g=a};Fq.prototype.Ph=function(){return this.g};var Eq=function(a){return!a||"object"!==Ab(a)||Cb(a)?!1:"getUntrustedUpdateValue"in a};Fq.prototype.getUntrustedUpdateValue=Fq.prototype.Ph;var Gq=[];var Jq=!1,Kq=function(a){return F["dataLayer"].push(a)},Lq=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Mq(a){var b=a._clear;Ta(a,function(d,e){"_clear"!==d&&(b&&Qh(d,void 0),Qh(d,e))});Ch||(Ch=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Hh(),a["gtm.uniqueEventId"]=c,Qh("gtm.uniqueEventId",c));return Ml(a)}function Nq(){var a=Gq[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Ua(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function Oq(){for(var a=!1;!Jq&&0<Gq.length;){
Jq=!0;delete Kh.eventModel;Mh();var d=Gq.shift();if(null!=d){var e=Eq(d);if(e){var f=d;d=Eq(f)?f.getUntrustedUpdateValue():void 0;for(var g=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],h=0;h<g.length;h++){var l=g[h],m=Nh(l,1);if(Na(m)||Cb(m))m=G(m);Lh[l]=m}}try{if(Ka(d))try{d.call(Oh)}catch(y){}else if(Na(d)){var p=d;if(q(p[0])){var n=p[0].split("."),t=n.pop(),r=p.slice(1),u=Nh(n.join("."),2);if(void 0!==u&&null!==u)try{u[t].apply(u,r)}catch(y){}}}else{if(Ua(d)){a:{var v=
d;if(v.length&&q(v[0])){var w=kq[v[0]];if(w&&(!e||!lq[v[0]])){d=w(v);break a}}d=void 0}if(!d){Jq=!1;continue}}a=Mq(d)||a}}finally{e&&Mh(!0)}}Jq=!1}return!a}function Pq(){var a=Oq();try{mq(F["dataLayer"],le.F)}catch(b){}return a}
var Rq=function(){var a=Uf("dataLayer",[]),b=Uf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};zk(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});op(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Fq(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Gq.push.apply(Gq,e);if(300<
this.length)for(zf(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Oq()&&h};var d=a.slice(0);Gq.push.apply(Gq,d);Qq()&&N(Pq)},Qq=function(){var a=!0;return a};var Sq={};Sq.wc=new String("undefined");
var Tq=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Sq.wc?b:a[d]);return c.join("")}};Tq.prototype.toString=function(){return this.g("undefined")};Tq.prototype.valueOf=Tq.prototype.toString;Sq.bh=Tq;Sq.zd={};Sq.Ch=function(a){return new Tq(a)};var Uq={};Sq.xi=function(a,b){var c=Hh();Uq[c]=[a,b];return c};Sq.Gf=function(a){var b=a?0:1;return function(c){var d=Uq[c];if(d&&"function"===typeof d[b])d[b]();Uq[c]=void 0}};Sq.Wh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Sq.ri=function(a){if(a===Sq.wc)return a;var b=Hh();Sq.zd[b]=a;return'google_tag_manager["'+le.F+'"].macro('+b+")"};Sq.gi=function(a,b,c){a instanceof Sq.bh&&(a=a.g(Sq.xi(b,c)),b=Ia);return{Rd:a,onSuccess:b}};var Vq=["input","select","textarea"],Wq=["button","hidden","image","reset","submit"],Xq=function(a){var b=a.tagName.toLowerCase();return!Oa(Vq,function(c){return c===b})||"input"===b&&Oa(Wq,function(c){return c===a.type.toLowerCase()})?!1:!0},Yq=function(a){return a.form?a.form.tagName?a.form:M.getElementById(a.form):fg(a,["form"],100)},Zq=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Xq(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var jr=F.clearTimeout,kr=F.setTimeout,S=function(a,b,c){if(Qj()){b&&N(b)}else return Wf(a,b,c)},lr=function(){return new Date},mr=function(){return F.location.href},nr=function(a){return Xg(Zg(a),"fragment")},or=function(a){return Yg(Zg(a))},pr=function(a,b){return Nh(a,b||2)},qr=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Kq(a)):d=Kq(a);return d},rr=function(a,b){F[a]=b},T=function(a,b,c){b&&
(void 0===F[a]||c&&!F[a])&&(F[a]=b);return F[a]},sr=function(a,b,c){return ai(a,b,void 0===c?!0:!!c)},tr=function(a,b,c){return 0===ji(a,b,c)},ur=function(a,b){if(Qj()){b&&N(b)}else Yf(a,b)},vr=function(a){return!!oo(a,"init",!1)},wr=function(a){mo(a,"init",!0)},xr=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Ah;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(Sj("https://","http://",c))},yr=function(a,
b){var c=a[b];return c},zr=function(a,b,c){rl&&(Hb(a)||vl(c,b,a))};
var Ar=Sq.gi;function Xr(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Yr=new Qa;function Zr(a,b){function c(g){var h=Zg(g),l=Xg(h,"protocol"),m=Xg(h,"host",!0),p=Xg(h,"port"),n=Xg(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,n]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function $r(a){return as(a)?1:0}
function as(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Na(c)){for(var d=0;d<c.length;d++){var e=G(a,{});G({arg1:c[d],any_of:void 0},e);if($r(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(r){}}f=!1}return f;case "_ew":return Xr(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=B(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var m;var p=a.ignore_case?"i":void 0;try{var n=String(c)+p,t=Yr.get(n);t||(t=new RegExp(c,p),Yr.set(n,t));m=t.test(b)}catch(r){m=!1}return m;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Zr(b,c)}return!1};var bs=encodeURI,Y=encodeURIComponent,cs=Zf;var ds=function(a,b){if(!a)return!1;var c=Xg(Zg(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var es=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Kt(){return F.gaGlobal=F.gaGlobal||{}}var Lt=function(){var a=Kt();a.hid=a.hid||Pa();return a.hid},Mt=function(a,b){var c=Kt();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var uu=window,vu=document,wu=function(a){var b=uu._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===uu["ga-disable-"+a])return!0;try{var c=uu.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Zh("AMP_TOKEN",String(vu.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return vu.getElementById("__gaOptOutExtension")?!0:!1};var xu={};function zu(a){delete a.eventModel[I.Fb];Bu(a.eventModel)}
var Bu=function(a){Ta(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[I.qa]||{};Ta(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Eu=function(a,b,c){Xn(b,c,a)},Fu=function(a,b,c){Xn(b,c,a,!0)},Mu=function(a,b){};
function Gu(a,b){}var Z={h:{}};
Z.h.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Z.__gaawc=b;Z.__gaawc.i="gaawc";Z.__gaawc.m=!0;Z.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=es(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(I.qa)||b.vtp_userProperties){var e=d[I.qa]||{};G(es(b.vtp_userProperties,"name","value"),e);d[I.qa]=e}a(d,I.ef,function(f){return Xa(f)});a(d,I.hf,function(f){return Number(f)});
d.send_page_view=b.vtp_sendPageView;Yn(d,c);N(b.vtp_gtmOnSuccess)})}();
Z.h.gaawe=["google"],function(){function a(d,e,f){for(var g=0;g<e.length;g++)d.hasOwnProperty(e[g])&&(d[e[g]]=f(d[e[g]]))}function b(d,e,f){var g={id:"transaction_id",revenue:"value",list:"item_list_name"},h={click:I.dd,detail:I.Aa,add:I.Za,remove:I.$a,checkout:I.La,checkout_option:"checkout_option",purchase:I.na,refund:I.ab},l={},m=function(r,u){l[r]=l[r]||u},p=function(r,u,v){v=void 0===v?!1:v;c.push(6);if(r){l.items=l.items||[];for(var w={},y=0;y<r.length;w={Wa:w.Wa},y++)w.Wa={},Ta(r[y],function(z){return function(A,
C){v&&"id"===A?z.Wa.promotion_id=C:v&&"name"===A?z.Wa.promotion_name=C:z.Wa[A]=C}}(w)),l.items.push(w.Wa)}if(u)for(var x in u)g.hasOwnProperty(x)?m(g[x],u[x]):m(x,u[x])},n;"dataLayer"===d.vtp_getEcommerceDataFrom?(n=Sh(d.vtp_gtmEventId,"eventModel"))||(n=Sh(d.vtp_gtmEventId,"ecommerce")):n=d.vtp_ecommerceMacroData;if(Cb(n)){c.push(5);for(var t in n)n.hasOwnProperty(t)&&("currencyCode"===t?m("currency",n.currencyCode):"impressions"===t&&e===I.kc?p(n.impressions,null):"promoClick"===t&&e===I.Ee?p(n.promoClick.promotions,
n.promoClick.actionField,!0):"promoView"===t&&e===I.Fe?p(n.promoView.promotions,n.promoView.actionField,!0):h.hasOwnProperty(t)?e===h[t]&&p(n[t].products,n[t].actionField):l[t]=n[t]);G(l,f)}}var c=[];(function(d){Z.__gaawe=d;Z.__gaawe.i="gaawe";Z.__gaawe.m=!0;Z.__gaawe.priorityOverride=0})(function(d){var e=String(d.vtp_measurementIdOverride||d.vtp_measurementId),f=String(d.vtp_eventName);if("_"===f.charAt(0))N(d.vtp_gtmOnFailure);else{var g={};c=[];d.vtp_sendEcommerceData&&(0<=I.ff.indexOf(f)||"checkout_option"===
f)&&b(d,f,g);var h=es(d.vtp_eventParameters,"name","value"),l;for(l in h)h.hasOwnProperty(l)&&(g[l]=h[l]);if(g.hasOwnProperty(I.qa)||d.vtp_userProperties){var m=g[I.qa]||{};G(es(d.vtp_userProperties,"name","value"),m);g[I.qa]=m}Bu(g);0<c.length&&(g[I.vd]=c);a(g,I.ef,function(p){return Xa(p)});a(g,I.hf,function(p){return Number(p)});Xn(f,g,e);N(d.vtp_gtmOnSuccess)}})}();Z.h.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.i="ctv";Z.__ctv.m=!0;Z.__ctv.priorityOverride=0})(function(){return"315"})}();
Z.h.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],A=x.split(","),C=0;C<A.length;C++){var D=Number(A[C]);if(isNaN(D))return[];p.test(A[C])||z.push(D)}return z}function c(){var x=0,z=0;return function(){var A=Lg(),C=A.height;x=Math.max(v.scrollLeft+A.width,x);z=Math.max(v.scrollTop+C,z);return{Jd:x,Kd:z}}}function d(){r=T("self");
u=r.document;v=u.scrollingElement||u.body&&u.body.parentNode;y=c()}function e(x,z,A,C){var D=l(z),E={},J;for(J in D){E.Xa=J;if(D.hasOwnProperty(E.Xa)){var Q=Number(E.Xa);x<Q||(qr({event:"gtm.scrollDepth","gtm.scrollThreshold":Q,"gtm.scrollUnits":A.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":D[E.Xa].join(",")}),no("sdl",z,function(V){return function(ba){delete ba[V.Xa];return ba}}(E),{}))}E={Xa:E.Xa}}}function f(){var x=y(),z=x.Jd,A=x.Kd,C=z/v.scrollWidth*100,D=A/v.scrollHeight*100;e(z,"horiz.pix",
n.yc,t.jf);e(C,"horiz.pct",n.xc,t.jf);e(A,"vert.pix",n.yc,t.zf);e(D,"vert.pct",n.xc,t.zf);mo("sdl","pending",!1)}function g(){var x=250,z=!1;u.scrollingElement&&u.documentElement&&r.addEventListener&&(x=50,z=!0);var A=0,C=!1,D=function(){C?A=kr(D,x):(A=0,f(),vr("sdl")&&!a()&&(ag(r,"scroll",E),ag(r,"resize",E),mo("sdl","init",!1)));C=!1},E=function(){z&&y();A?C=!0:(A=kr(D,x),mo("sdl","pending",!0))};return E}function h(x,z,A){if(z){var C=b(String(x));no("sdl",A,function(D){for(var E=0;E<C.length;E++){var J=
String(C[E]);D.hasOwnProperty(J)||(D[J]=[]);D[J].push(z)}return D},{})}}function l(x){return oo("sdl",x,{})}function m(x){N(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,A=x.vtp_horizontalThresholdsPixels,C=x.vtp_horizontalThresholdsPercent,D=x.vtp_verticalThresholdUnits,E=x.vtp_verticalThresholdsPixels,J=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case n.yc:h(A,z,"horiz.pix");break;case n.xc:h(C,z,"horiz.pct")}switch(D){case n.yc:h(E,z,"vert.pix");break;case n.xc:h(J,
z,"vert.pct")}vr("sdl")?oo("sdl","pending")||(w||(d(),w=!0),N(function(){return f()})):(d(),w=!0,v&&(wr("sdl"),mo("sdl","pending",!0),N(function(){f();if(a()){var Q=g();$f(r,"scroll",Q);$f(r,"resize",Q)}else mo("sdl","init",!1)})))}var p=/^\s*$/,n={xc:"PERCENT",yc:"PIXELS"},t={zf:"vertical",jf:"horizontal"},r,u,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.i="sdl";Z.__sdl.m=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):op(function(){m(x)})})}();

Z.h.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.i="jsm";Z.__jsm.m=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=T("google_tag_manager");var d=c&&c.e&&c.e(b);zr(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Z.h.c=["google"],function(){(function(a){Z.__c=a;Z.__c.i="c";Z.__c.m=!0;Z.__c.priorityOverride=0})(function(a){zr(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.h.e=["google"],function(){(function(a){Z.__e=a;Z.__e.i="e";Z.__e.m=!0;Z.__e.priorityOverride=0})(function(a){return String(Sh(a.vtp_gtmEventId,"event"))})}();
Z.h.f=["google"],function(){(function(a){Z.__f=a;Z.__f.i="f";Z.__f.m=!0;Z.__f.priorityOverride=0})(function(a){var b=pr("gtm.referrer",1)||M.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Xg(Zg(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):or(String(b)):String(b)})}();
Z.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=ko(c,"gtm.click");qr(d)}}(function(b){Z.__cl=b;Z.__cl.i="cl";Z.__cl.m=!0;Z.__cl.priorityOverride=0})(function(b){if(!vr("cl")){var c=T("document");$f(c,"click",a,!0);wr("cl")}N(b.vtp_gtmOnSuccess)})}();
Z.h.j=["google"],function(){(function(a){Z.__j=a;Z.__j.i="j";Z.__j.m=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=T(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];zr(c,"j",a.vtp_gtmEventId);return c})}();Z.h.k=["google"],function(){(function(a){Z.__k=a;Z.__k.i="k";Z.__k.m=!0;Z.__k.priorityOverride=0})(function(a){return sr(a.vtp_name,pr("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.i="access_globals";Z.__access_globals.m=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,n,t){if(!q(t))throw d(p,{},"Key must be a string.");if("read"===n){if(-1<B(e,t))return}else if("write"===n){if(-1<B(f,t))return}else if("readwrite"===n){if(-1<B(f,t)&&-1<B(e,t))return}else if("execute"===n){if(-1<B(g,t))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+n);throw d(p,{},"Prohibited "+n+" on global variable: "+
t+".");},N:a}})}();Z.h.r=["google"],function(){(function(a){Z.__r=a;Z.__r.i="r";Z.__r.m=!0;Z.__r.priorityOverride=0})(function(a){return Pa(a.vtp_min,a.vtp_max)})}();
Z.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.i="u";Z.__u.m=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:pr("gtm.url",1))||mr();var d=b[a("vtp_component")];if(!d||"URL"==d)return or(String(c));var e=Zg(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Na(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var n=Xg(e,"QUERY",void 0,void 0,m[p]);if(void 0!=n&&(!l||""!==n)){f=n;break a}}f=void 0}else f=Xg(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.h.v=["google"],function(){(function(a){Z.__v=a;Z.__v.i="v";Z.__v.m=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=pr(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;zr(d,"v",a.vtp_gtmEventId);return d})}();
Z.h.ua=["google"],function(){function a(n){return Cg(n)}function b(n,t){if(ug()&&!e[n]){var r=function(){var u=Nk(),v="gtm"+Hh(),w=m(t),y={name:v};l(w,y,!0);u("create",n,y);u(function(){u.remove(v)})};xg(r,I.K);xg(r,I.C);e[n]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,
useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(n,t,r){var u=0;if(n)for(var v in n)if(!h[v]&&n.hasOwnProperty(v)&&(r&&f[v]||!r&&void 0===f[v])){var w=g[v]?Xa(n[v]):n[v];"anonymizeIp"!=v||w||
(w=void 0);t[v]=w;u++}return u},m=function(n){var t={};n.vtp_gaSettings&&G(es(n.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),t);G(es(n.vtp_fieldsToSet,"fieldName","value"),t);Cg(I.K)||(t.storage="none");Cg(I.C)||(t.allowAdFeatures=!1,t.storeGac=!1);vn()||(t.allowAdFeatures=!1);un()||(t.allowAdPersonalizationSignals=!1);n.vtp_transportUrl&&(t._x_19=n.vtp_transportUrl);
return t},p=function(n){function t(ka,W){void 0!==W&&E("set",ka,W)}var r={},u={},v={},w={};if(n.vtp_gaSettings){var y=n.vtp_gaSettings;G(es(y.vtp_contentGroup,"index","group"),u);G(es(y.vtp_dimension,"index","dimension"),v);G(es(y.vtp_metric,"index","metric"),w);var x=G(y);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=
void 0;x.vtp_metric=void 0;n=G(n,x)}G(es(n.vtp_contentGroup,"index","group"),u);G(es(n.vtp_dimension,"index","dimension"),v);G(es(n.vtp_metric,"index","metric"),w);var z=m(n),A=Pk(n.vtp_functionName);if(Ka(A)){var C="",D="";n.vtp_setTrackerName&&"string"==typeof n.vtp_trackerName?""!==n.vtp_trackerName&&(D=n.vtp_trackerName,C=D+"."):(D="gtm"+Hh(),C=D+".");var E=function(ka){var W=[].slice.call(arguments,0);W[0]=C+W[0];A.apply(window,W)},J=function(ka,W){return void 0===W?W:ka(W)},Q=function(ka,W){if(W)for(var $a in W)W.hasOwnProperty($a)&&
E("set",ka+$a,W[$a])},V=function(){},ba={name:D};l(z,ba,!0);var ra=n.vtp_trackingId||r.trackingId;A("create",ra,ba);E("set","&gtm",dm(!0));
ug()&&(E("set","&gcs",Dg()),b(ra,n));z._x_19&&(null==Tf&&delete z._x_19,z._x_20&&!d[D]&&(d[D]=!0,A(Uk(D,String(z._x_20)))));n.vtp_enableRecaptcha&&E("require","recaptcha","recaptcha.js");(function(ka,W){void 0!==n[W]&&E("set",ka,n[W])})("nonInteraction","vtp_nonInteraction");Q("contentGroup",u);Q("dimension",v);Q("metric",w);var P={};l(z,P,!1)&&E("set",P);var K;
n.vtp_enableLinkId&&E("require","linkid","linkid.js");E("set","hitCallback",function(){var ka=z&&z.hitCallback;Ka(ka)&&ka();n.vtp_gtmOnSuccess()});var L=function(ka,W){return void 0===n[ka]?r[W]:n[ka]};if("TRACK_EVENT"==n.vtp_trackType){n.vtp_enableEcommerce&&(E("require","ec","ec.js"),V());var ea={hitType:"event",eventCategory:String(L("vtp_eventCategory","category")),eventAction:String(L("vtp_eventAction","action")),eventLabel:J(String,
L("vtp_eventLabel","label")),eventValue:J(Va,L("vtp_eventValue","value"))};l(K,ea,!1);E("send",ea);}else if("TRACK_SOCIAL"==n.vtp_trackType){}else if("TRACK_TRANSACTION"==
n.vtp_trackType){}else if("TRACK_TIMING"==n.vtp_trackType){}else if("DECORATE_LINK"==
n.vtp_trackType){}else if("DECORATE_FORM"==n.vtp_trackType){}else if("TRACK_DATA"==n.vtp_trackType){}else{n.vtp_enableEcommerce&&
(E("require","ec","ec.js"),V());if(n.vtp_doubleClick||"DISPLAY_FEATURES"==n.vtp_advertisingFeaturesType){var hc="_dc_gtm_"+String(n.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","displayfeatures",void 0,{cookieName:hc})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==n.vtp_advertisingFeaturesType){var Gb="_dc_gtm_"+String(n.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","adfeatures",{cookieName:Gb})}K?E("send","pageview",K):E("send","pageview");Xa(z.urlPassthrough)&&Rk(C)}if(!c){var Ra=n.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";n.vtp_useInternalVersion&&!n.vtp_useDebugVersion&&(Ra="internal/"+Ra);c=!0;var Sb=Ol(z._x_19,"/analytics.js"),Zc=Sj("https:","http:","//www.google-analytics.com/"+Ra,z&&!!z.forceSSL);S("analytics.js"===Ra&&Sb?Sb:Zc,function(){var ka=
Nk();ka&&ka.loaded||n.vtp_gtmOnFailure();},n.vtp_gtmOnFailure)}}else N(n.vtp_gtmOnFailure)};(function(n){Z.__ua=n;Z.__ua.i="ua";Z.__ua.m=!0;Z.__ua.priorityOverride=0})(function(n){Eg(function(){p(n)},[I.K,I.C])})}();


Z.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.i="inject_script";Z.__inject_script.m=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!q(f))throw d(e,{},"Script URL must be a string.");try{if(Oe(Zg(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},N:a}})}();


Z.h.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.i="cid";Z.__cid.m=!0;Z.__cid.priorityOverride=0})(function(){return le.F})}();



Z.h.aev=["google"],function(){function a(r,u){var v=Sh(r,"gtm");if(v)return v[u]}function b(r,u,v,w){w||(w="element");var y=r+"."+u,x;if(p.hasOwnProperty(y))x=p[y];else{var z=a(r,w);if(z&&(x=v(z),p[y]=x,n.push(y),35<n.length)){var A=n.shift();delete p[A]}}return x}function c(r,u,v){var w=a(r,t[u]);return void 0!==w?w:v}function d(r,u){if(!r)return!1;var v=e(mr());Na(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++){var x=u[y];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(A){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(r))return!1}else{var z=x;if(0!=z.length){if(0<=e(r).indexOf(z))return!1;w.push(e(z))}}}return!ds(r,w)}function e(r){m.test(r)||(r="http://"+r);return Xg(Zg(r),"HOST",!0)}function f(r,u,v){switch(r){case "SUBMIT_TEXT":return b(u,"FORM."+r,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+r,h);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",
v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(r){switch(r.tagName.toLowerCase()){case "input":return bg(r,"value");case "button":return cg(r);default:return null}}function h(r){if("form"===r.tagName.toLowerCase()&&r.elements){for(var u=0,v=0;v<r.elements.length;v++)Xq(r.elements[v])&&
u++;return u}}function l(r,u,v){var w=a(r,"interactedFormField");return w&&bg(w,u)||v}var m=/^https?:\/\//i,p={},n=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(r){Z.__aev=r;Z.__aev.i="aev";Z.__aev.m=!0;Z.__aev.priorityOverride=
0})(function(r){var u=r.vtp_gtmEventId,v=r.vtp_defaultValue,w=r.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||v;case "TEXT":return b(u,w,cg)||v;case "URL":var x;a:{var z=String(a(u,"elementUrl")||v||""),A=Zg(z),C=String(r.vtp_component||"URL");switch(C){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,r.vtp_affiliatedDomains);break a;default:x=Xg(A,C,r.vtp_stripWww,r.vtp_defaultPages,r.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===r.vtp_attribute)D=c(u,
w,v);else{var E=r.vtp_attribute,J=a(u,"element");D=J&&bg(J,E)||v||""}return D;case "MD":var Q=r.vtp_mdValue,V=b(u,"MD",fr);return Q&&V?ir(V,Q)||v:V||v;case "FORM":return f(String(r.vtp_component||"SUBMIT_TEXT"),u,v);default:var ba=c(u,w,v);zr(ba,"aev",r.vtp_gtmEventId);return ba}})}();Z.h.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.i="gas";Z.__gas.m=!0;Z.__gas.priorityOverride=0})(function(a){var b=G(a),c=b;c[Yd.Qa]=null;c[Yd.Ug]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.h.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.i="remm";Z.__remm.m=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var m=c[g].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}zr(f,"remm",a.vtp_gtmEventId);return f})}();Z.h.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.i="smm";Z.__smm.m=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=es(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;zr(d,"smm",a.vtp_gtmEventId);return d})}();





Z.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=M.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,Vf(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var n=
[];h.firstChild;)n.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,n,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){N(g)}}}var c=function(d){if(M.body){var e=d.vtp_gtmOnFailure,f=Ar(d.vtp_html,d.vtp_gtmOnSuccess,
e),g=f.Rd,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(M.body,dg(g),h,e)()}else kr(function(){c(d)},200)};Z.__html=c;Z.__html.i="html";
Z.__html.m=!0;Z.__html.priorityOverride=0}();

Z.h.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.i="dbg";Z.__dbg.m=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();






var Nu={};Nu.macro=function(a){if(Sq.zd.hasOwnProperty(a))return Sq.zd[a]},Nu.onHtmlSuccess=Sq.Gf(!0),Nu.onHtmlFailure=Sq.Gf(!1);Nu.dataLayer=Oh;Nu.callback=function(a){Fh.hasOwnProperty(a)&&Ka(Fh[a])&&Fh[a]();delete Fh[a]};Nu.bootstrap=0;Nu._spx=!1;function Ou(){O[le.F]=Nu;db(Gh,Z.h);Rd=Rd||Sq;Sd=he}
function Pu(){ig.gtag_cs_api=!0;O=F.google_tag_manager=F.google_tag_manager||{};Em();if(O[le.F]){var a=O.zones;a&&a.unregisterChild(le.F);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Fd.push(c[d]);
for(var e=b.tags||[],f=0;f<e.length;f++)Nd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)Hd.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],n={},t=0;t<p.length;t++)n[p[t][0]]=Array.prototype.slice.call(p[t],1);Gd.push(n)}Pd=Z;Qd=$r;var r=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;Zp();pe=new oe(r);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");Gh[x]=w}bq(v);Ou();Rq();uk=!1;vk=0;if("interactive"==
M.readyState&&!M.createEventObject||"complete"==M.readyState)xk();else{$f(M,"DOMContentLoaded",xk);$f(M,"readystatechange",xk);if(M.createEventObject&&M.documentElement.doScroll){var z=!0;try{z=!F.frameElement}catch(J){}z&&yk()}$f(F,"load",xk)}lp=!1;"complete"===M.readyState?np():$f(F,"load",np);a:{
if(!rl)break a;F.setInterval(sl,864E5);}Dh=(new Date).getTime();}}
(function(a){if(!F["__TAGGY_INSTALLED"]){var b=!1;if(M.referrer){var c=Zg(M.referrer);b="cct.google"===Wg(c,"host")}if(!b){var d=ai("googTaggyReferrer");b=d.length&&d[0].length}b&&(F["__TAGGY_INSTALLED"]=!0,Wf("https://cct.google/taggy/agent.js"))}var f=function(){var m=F["google.tagmanager.debugui2.queue"];m||(m=[],F["google.tagmanager.debugui2.queue"]=m,Wf("https://www.googletagmanager.com/debug/bootstrap"));return m},g="x"===Xg(F.location,"query",!1,void 0,"gtm_debug");if(!g&&M.referrer){var h=Zg(M.referrer);g="tagassistant.google.com"===Wg(h,"host")}if(!g){var l=ai("__TAG_ASSISTANT");g=l.length&&l[0].length}F.__TAG_ASSISTANT_API&&(g=!0);g&&Tf?f().push({messageType:"CONTAINER_STARTING",
data:{scriptSource:Tf,resume:function(){a()}}}):a()})(Pu);

})()