
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"301",
  
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OnetrustActiveGroups"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"games"
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
      "vtp_javascript":["template","(function(){var m=2,n=1,p=199,c={expiresMs:18E5,domain:",["escape",["macro",7],8,16],"},e={objectName:\"ga_client_id\",expires:63072E6},g=\"_ga_originalSendHitTask\";return function(a){function h(b){return(b=document.cookie.match(\"(^|;)\\\\s*\"+b+\"\\\\s*\\x3d\\\\s*([^;]+)\"))?b.pop():\"\"}window[g]=window[g]||a.get(\"sendHitTask\");if(\"off\"===",["escape",["macro",8],8,16],")a.set(\"sendHitTask\",null);else{\"number\"===typeof m\u0026\u0026a.set(\"dimension\"+m,a.get(\"clientId\"));\"number\"===typeof n\u0026\u0026a.set(\"dimension\"+n,a.get(\"hitType\"));if(\"object\"===\ntypeof e\u0026\u0026\"string\"===typeof e.objectName\u0026\u0026\"number\"===typeof e.expires\u0026\u0026window.Storage){var k=a.get(\"clientId\");k=JSON.stringify({clientId:k,expires:(new Date).getTime()+e.expires});window.localStorage.setItem(e.objectName,k)}\"object\"===typeof c\u0026\u0026c.hasOwnProperty(\"expiresMs\")\u0026\u0026c.hasOwnProperty(\"domain\")\u0026\u0026(gahitcount=!isNaN(h(\"_sessionhits_\"+a.get(\"trackingId\")))\u0026\u0026parseInt(h(\"_sessionhits_\"+a.get(\"trackingId\")))?parseInt(h(\"_sessionhits_\"+a.get(\"trackingId\")))+1:1,d=new Date,d.setTime(d.getTime()+c.expiresMs),\ndocument.cookie=\"_sessionhits_\"+a.get(\"trackingId\")+\"\\x3d\"+gahitcount+\"; expires\\x3d\"+d.toUTCString()+\"; path\\x3d\/; domain\\x3d\"+c.domain,0===gahitcount%500\u0026\u0026(a.set(\"referer\",void 0,!0),a.set(\"sessionControl\",\"start\",!0),window.dataLayer.push({event:\"ga.sessions.reset\"})));a.set(\"sendHitTask\",function(b){var t=b,q=window[g],u=!0;try{if(\"number\"===typeof p){var f=b.get(\"hitPayload\");f+=\"\\x26cd\"+p+\"\\x3d\";f+=f.length+f.length.toString().length;b.set(\"hitPayload\",f,!0)}u\u0026\u0026q(b);if(\"object\"===typeof c\u0026\u0026\nc.hasOwnProperty(\"expiresMs\")\u0026\u0026c.hasOwnProperty(\"domain\")){var r=b.get(\"hitType\"),v=b.get(\"nonInteraction\");if(!0!==v\u0026\u0026(\"pageview\"===r||\"event\"===r)){var l=new Date;l.setTime(l.getTime()+c.expiresMs);document.cookie=\"_session_\"+b.get(\"trackingId\")+\"\\x3dtrue; expires\\x3d\"+l.toUTCString()+\"; path\\x3d\/; domain\\x3d\"+c.domain+\";secure;samesite\\x3dnone\"}}}catch(w){q(t)}})}}})();"]
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
      "vtp_input":["macro",10],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",4],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*(\\?|\\\u0026)rd=.*","value",["template",["macro",4],"?",["macro",11]]],["map","key",".*(\\?|\\\u0026)group=.*","value",["template",["macro",4],"?",["macro",11]]],["map","key",".*(\\?|\\\u0026)gclid=.*","value",["template",["macro",4],"?",["macro",11]]],["map","key",".*(\\?|\\\u0026)ga=.*","value",["template",["macro",4],"?",["macro",11]]],["map","key",".*(\\?|\\\u0026)utm_.*","value",["template",["macro",4],"?",["macro",11]]],["map","key",".*(\\?|\\\u0026)banner=.*","value",["template",["macro",4],"?",["macro",11]]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"off\"===",["escape",["macro",8],8,16],"?!1:!0})();"]
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
      "vtp_input":["macro",18],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"199",
      "vtp_map":["list",["map","key","odds","value","4"],["map","key","all-matches","value","8"],["map","key","live","value","9"],["map","key","finished","value","10"],["map","key","scheduled","value","11"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",18],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"199",
      "vtp_map":["list",["map","key","odds-.*","value","3"],["map","key","stats-.*","value","7"],["map","key",".*h2h.*","value","6"],["map","key","match-summary","value","5"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",17],
      "vtp_defaultValue":"na",
      "vtp_map":["list",["map","key","iframe-bookmark-click","value",["macro",19]],["map","key","detail-bookmark-click","value",["macro",20]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.localStorage.getItem(\"viewport\")})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",22],
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
      "vtp_javascript":["template","(function(){return void 0==",["escape",["macro",14],8,16],"?\"non-logged-in\":\"logged-in\"})();"]
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
      "vtp_javascript":["template","(function(){var a;return a=\"id_\"+",["escape",["macro",31],8,16],"+\",tr_\"+",["escape",["macro",32],8,16],"+\",st_\"+",["escape",["macro",33],8,16],"+\",sp_\"+",["escape",["macro",34],8,16],"+\",pt_\"+",["escape",["macro",35],8,16],"+\",ar_\"+",["escape",["macro",36],8,16],"})();"]
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
      "vtp_input":["macro",40],
      "vtp_defaultValue":"UA-78514783-4",
      "vtp_map":["list",["map","key","www.flashscore.sk","value","UA-207011-8"],["map","key","www.flashscore.at","value","UA-26033729-11"],["map","key","www.flashscore.se","value","UA-821699-42"],["map","key","www.flashscore.in","value","UA-30726477-4"],["map","key","www.wynikinazywo.pl","value","UA-30726477-5"],["map","key","www.flashscore.bg","value","UA-207011-22"],["map","key","www.flashscore.co.id","value","UA-207011-26"],["map","key","www.flashscore.co.kr","value","UA-207011-27"],["map","key","www.flashscore.com.my","value","UA-207011-25"],["map","key","www.flashscore.si","value","UA-207011-24"],["map","key","www.baseball24.com","value","UA-40261560-5"],["map","key","www.basketball24.com","value","UA-40261560-4"],["map","key","www.cricket24.com","value","UA-40261560-2"],["map","key","www.golflive24.com","value","UA-40261560-7"],["map","key","www.icehockey24.com","value","UA-40261560-3"],["map","key","www.motorsport24.com","value","UA-40261560-8"],["map","key","www.tennis24.com","value","UA-40261560-1"],["map","key","www.soccer24.com","value","UA-26033729-10"],["map","key","www.canliskor.com","value","UA-821699-12"],["map","key","www.flashscores.co.uk","value","UA-821699-1"],["map","key","www.flashscore.nl","value","UA-821699-23"],["map","key","www.flashscore.com.au","value","UA-821699-27"],["map","key","www.livescore.in","value","UA-821699-8"],["map","key","www.livetulokset.com","value","UA-821699-10"],["map","key","www.liveticker.com","value","UA-30726477-3"],["map","key","www.scoreboard.com","value","UA-30726477-1"],["map","key","www.eredmenyek.com","value","UA-207011-14"],["map","key","www.flashscore.de","value","UA-207011-6"],["map","key","www.flashresultats.fr","value","UA-207011-15"],["map","key","www.flashscore.ro","value","UA-207011-12"],["map","key","www.livesport.cz","value","UA-207011-4"],["map","key","www.mismarcadores.com","value","UA-207011-10"],["map","key","www.soccerstand.com","value","UA-28208502-12"],["map","key","www.flashscore.pl","value","UA-191939-4"],["map","key","www.diretta.it","value","UA-207011-7"],["map","key","www.flashscore.com","value","UA-207011-5"],["map","key","www.rezultati.com","value","UA-207011-13"],["map","key","www.volleyball24.com","value","UA-40261560-9"],["map","key","www.horseracing24.com","value","UA-40261560-10"],["map","key","www.flashscore.dk","value","UA-207011-9"],["map","key","www.flashscore.ca","value","UA-30726477-6"],["map","key","www.flashscore.co.jp","value","UA-207011-29"],["map","key","www.flashscore.vn","value","UA-26033729-19"],["map","key","www.flashscore.info","value","UA-207011-28"],["map","key","www.flashscore.cat","value","UA-207011-30"],["map","key","www.handball24.com","value","UA-40261560-11"],["map","key","www.flashscore.ge","value","UA-26033729-20"],["map","key","www.flashscore.co.ke","value","UA-26033729-21"],["map","key","www.flashscore.com.ng","value","UA-26033729-22"],["map","key","www.flashscore.co.za","value","UA-26033729-23"],["map","key","www.flashscore24.co.za","value","UA-26033729-23"],["map","key","www.darts24.com","value","UA-40261560-12"],["map","key","www.flashscore.gr","value","UA-821699-11"],["map","key","www.flashscore.com.tr","value","UA-821699-12"],["map","key","www.flashscore.es","value","UA-207011-10"],["map","key","www.flashscore.pt","value","UA-821699-15"],["map","key","www.flashscore.co.uk","value","UA-821699-1"],["map","key","www.flashscore.com.br","value","UA-30726477-2"],["map","key","www.flashscore.ru","value","UA-821699-9"],["map","key","www.flashscore.com.ua","value","UA-821699-48"],["map","key","www.flashscore.kz","value","UA-821699-51"],["map","key","www.flashscore.ua","value","UA-821699-49"],["map","key","www.flashscore.it","value","UA-821699-34"],["map","key","www.flashscore.fr","value","UA-207011-15"],["map","key","www.flashscore.com.mx","value","UA-30726477-9"],["map","key","www.flashscore.co","value","UA-30726477-10"],["map","key","www.flashscore.pe","value","UA-30726477-11"],["map","key","www.flashscore.com.ar","value","UA-30726477-12"],["map","key","www.flashscore.com.ve","value","UA-30726477-13"],["map","key","www.flashscore.cl","value","UA-30726477-14"],["map","key","www.flashscore.es","value","UA-207011-10"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",39],
      "vtp_defaultValue":["macro",41],
      "vtp_map":["list",["map","key","true","value","UA-78514783-2"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",5]],["map","index","2","group",["macro",3]],["map","index","3","group",["macro",6]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","true"],["map","fieldName","cookieDomain","value","auto"],["map","fieldName","customTask","value",["macro",9]],["map","fieldName","page","value",["macro",12]],["map","fieldName","allowAdFeatures","value",["macro",13]],["map","fieldName","userId","value",["macro",14]],["map","fieldName","clientId","value",["macro",15]],["map","fieldName","cookieFlags","value","secure;samesite=none"]],
      "vtp_metric":["list",["map","index","1","metric",["macro",16]],["map","index",["macro",21],"metric","1"],["map","index","12","metric",["macro",23]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","4","dimension",["macro",24]],["map","index","5","dimension",["macro",25]],["map","index","6","dimension",["macro",26]],["map","index","8","dimension",["macro",27]],["map","index","9","dimension",["macro",28]],["map","index","10","dimension",["macro",29]],["map","index","3","dimension",["macro",14]],["map","index","7","dimension",["macro",16]],["map","index","11","dimension",["macro",30]],["map","index","12","dimension",["macro",37]],["map","index","14","dimension",["macro",38]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",42],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "convert_null_to":["macro",5],
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",5],
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
      "vtp_javascript":["template","(function(){return ",["escape",["macro",46],8,16],"+\";\"+",["escape",["macro",47],8,16],"+\";\"+",["escape",["macro",48],8,16],"})();"]
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
      "vtp_javascript":["template","(function(){return\"th_\"+",["escape",["macro",55],8,16],"+\"_thu_\"+",["escape",["macro",56],8,16],"+\"_thb_\"+",["escape",["macro",57],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=localStorage.getItem(\"notificationStatus\");return a})();"]
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
      "vtp_properties":["list",["map","name","is_logged","value",["macro",26]],["map","name","adblock","value",["macro",27]],["map","name","sett_dark_mode_enabled","value",["macro",58]],["map","name","sett_notif_enabled","value",["macro",59]],["map","name","my_games_count","value",["macro",1]],["map","name","my_teams_count","value",["macro",60]],["map","name","internal_anonymous_code","value",["macro",61]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",40],
      "vtp_defaultValue":"G-FF3F9MY7QW",
      "vtp_map":["list",["map","key","www.baseball24.com","value","G-4WFW5YRZ5E"],["map","key","www.basketball24.com","value","G-CY8GT1KWYC"],["map","key","www.cricket24.com","value","G-DRL6VBMEZ6"],["map","key","www.darts24.com","value","G-Z1P3XBR4D4"],["map","key","www.diretta.it","value","G-PR4TNKN90Z"],["map","key","www.eredmenyek.com","value","G-V9HV60G20T"],["map","key","www.flashresultats.fr","value","G-ZXWH2V7CB4"],["map","key","www.flashscore.at","value","G-ME5EHMKSTX"],["map","key","www.flashscore.bg","value","G-86904VXK64"],["map","key","www.flashscore.ca","value","G-JWCXTXDM86"],["map","key","www.flashscore.cat","value","G-YN7FR5WL7Y"],["map","key","www.flashscore.co.id","value","G-2V2B6N0ZGQ"],["map","key","www.flashscore.co.jp","value","G-6PMR55WC5W"],["map","key","www.flashscore.co.ke","value","G-H3L0GVF67T"],["map","key","www.flashscore.co.kr","value","G-YRPYZYLGG2"],["map","key","www.flashscore.co.uk","value","G-JPH20PFDQP"],["map","key","www.flashscore.com","value","G-3NV6GD9ZTT"],["map","key","www.flashscore.com.au","value","G-LHRG10E1N6"],["map","key","www.flashscore.com.ng","value","G-H6QEXZV7F3"],["map","key","www.flashscore.com.tr","value","G-4DNLLS5RXJ"],["map","key","www.flashscore.de","value","G-QHD19GSCER"],["map","key","www.flashscore.dk","value","G-Y2BRQ7S63Z"],["map","key","www.flashscore.ge","value","G-3X2B2G3379"],["map","key","www.flashscore.gr","value","G-ZS1L4NQG9H"],["map","key","www.flashscore.in","value","G-4B9MFR9VS7"],["map","key","www.flashscore.info","value","G-BZV05NJN0V"],["map","key","www.flashscore.nl","value","G-FTLD060QTX"],["map","key","www.flashscore.pl","value","G-NFBHNF97N9"],["map","key","www.flashscore.pt","value","G-HKYFWWJ2Q6"],["map","key","www.flashscore.ro","value","G-L55H0M8ZLR"],["map","key","www.flashscore.se","value","G-WXRETF2T12"],["map","key","www.flashscore.si","value","G-26DHVSBCTX"],["map","key","www.flashscore.sk","value","G-M6K8F8M99N"],["map","key","www.flashscore.vn","value","G-4LR7J607PF"],["map","key","www.flashscore24.co.za","value","G-MENG1C4DQ2"],["map","key","www.golflive24.com","value","G-GYNLRB4EVL"],["map","key","www.handball24.com","value","G-EHCTCY9X2F"],["map","key","www.horseracing24.com","value","G-M2XZLH4JVC"],["map","key","www.icehockey24.com","value","G-F63S7Z5BCC"],["map","key","www.livescore.in","value","G-SW4L2TBP4K"],["map","key","www.livesport.cz","value","G-SN1CJRK3Q2"],["map","key","www.liveticker.com","value","G-ZC646LBTNZ"],["map","key","www.livetulokset.com","value","G-3GPWT97T30"],["map","key","www.mismarcadores.com","value","G-BE0BXCPJ8J"],["map","key","www.motorsport24.com","value","G-NEY242SQBP"],["map","key","www.flashscore.com.ua","value","G-06E6K5K8FJ"],["map","key","www.flashscore.kz","value","G-CKG7R221QX"],["map","key","www.flashscore.ru","value","G-JF1VRF7QHL"],["map","key","www.flashscore.ua","value","G-06FHN4SQ6S"],["map","key","www.resultados.com","value","G-DK7FZPG8CJ"],["map","key","www.rezultati.com","value","G-PKGVM285CC"],["map","key","www.risultati.it","value","G-973JWFCNYN"],["map","key","www.scoreboard.com","value","G-2ML68HVXTQ"],["map","key","www.soccer24.com","value","G-2Z8QSL6XVX"],["map","key","www.soccerstand.com","value","G-05TVLZKKZS"],["map","key","www.tennis24.com","value","G-B5PTDRXVG4"],["map","key","www.volleyball24.com","value","G-M1KRDS6MVC"],["map","key","www.vysledky.cz","value","G-ETNFKX879R"],["map","key","www.wynikinazywo.pl","value","G-HVV3LDDW2Z"],["map","key","www.flashscore.com.br","value","G-DK7FZPG8CJ"],["map","key","www.flashscore.it","value","G-973JWFCNYN"],["map","key","www.flashscore.fr","value","G-ZXWH2V7CB4"],["map","key","www.flashscore.es","value","G-BE0BXCPJ8J"],["map","key","www.flashscore.cl","value","G-XKWK8LCK9V"],["map","key","www.flashscore.co","value","G-CJQVV47BJW"],["map","key","www.flashscore.com.ar","value","G-6Q2BN4VWNK"],["map","key","www.flashscore.com.mx","value","G-FPBBK9FDCK"],["map","key","www.flashscore.com.ve","value","G-YXLDPJGDK9"],["map","key","www.flashscore.pe","value","G-NTVDMC1245"]]
    },{
      "function":"__c",
      "vtp_value":["template","^ea=",["macro",17],"^el=",["macro",18]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",64],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":["macro",17],
      "vtp_map":["list",["map","key","\\^ea=bookmaker\\-button\\-click\\^.*","value","CLICK_ODD"],["map","key","\\^ea=checkbox\\-click\\^.*","value","SCN_GDPR_CONSENT_DIALOG"],["map","key","\\^ea=detail\\-bookmark\\-click\\^((?!odds\\-comparison_).)*$","value","SCN_TAB_DETAIL"],["map","key","\\^ea=detail\\-bookmark\\-click\\^el=odds\\-comparison_.*","value","SCN_TAB_DETAIL_ODDS"],["map","key","\\^ea=iframe\\-bookmark\\-click\\^((?!calendar|sound|match\\-comments).)*$","value","SCN_TAB_MAIN"],["map","key","\\^ea=iframe\\-bookmark\\-click\\^el=calendar\\-arrow\\-next","value","SCN_DAY_NEXT"],["map","key","\\^ea=iframe\\-bookmark\\-click\\^el=calendar\\-arrow\\-previous","value","SCN_DAY_PREV"],["map","key","\\^ea=iframe\\-icon\\-click\\^((?!my\\-games).)*$","value","CLICK_ICON"],["map","key","\\^ea=iframe\\-icon\\-click\\^el=my\\-games\\-match","value","ADD_MY_GAMES"],["map","key","\\^ea=iframe\\-icon\\-click\\^el=my\\-games\\-league","value","ADD_MY_GAMES_LEAGUE"],["map","key","\\^ea=web\\-click\\^el=search","value","SCN_SEARCH"],["map","key","\\^ea=checkbox\\-click\\^.*","value","SCN_GDPR_CONSENT_DIALOG"],["map","key","\\^ea=detail\\-button\\-click\\^.*","value","SCN_TAB_DETAIL"],["map","key","\\^ea=file\\-click\\^.*","value","CLICK_FILE"],["map","key","\\^ea=iframe\\-icon\\-mouseover\\^.*","value","OVER_ICON"],["map","key","\\^ea=news\\-article\\-click\\^.*","value","CLICK_NEWS_ARTICLE"],["map","key","\\^ea=odds\\-iframe\\-click\\^.*","value","SCN_EVENT_CLICK_ODD"],["map","key","\\^ea=web\\-click\\^el=registration","value","USER_REG"],["map","key","\\^ea=registration\\-form\\^el=reg\\-signup\\-click","value","USER_REG_FORM"],["map","key","\\^ea=registration\\-form\\^el=reg\\-signup\\-no\\-errors","value","USER_REG_NO_ERR"],["map","key","\\^ea=registration\\-form\\^el=reg\\-close","value","USER_REG_CLOSE"],["map","key","\\^ea=web\\-click\\^el=login","value","USER_LOGIN"],["map","key","\\^ea=registration\\-form\\^el=log\\-login\\-click","value","USER_LOGIN_FORM"],["map","key","\\^ea=registration\\-form\\^el=log\\-login\\-no\\-errors","value","USER_LOGIN_NO_ERR"],["map","key","\\^ea=registration\\-form\\^el=log\\-close","value","USER_LOGIN_CLOSE"],["map","key","\\^ea=web\\-click\\^el=logout","value","USER_LOGOUT"],["map","key","\\^ea=web\\-click\\^el=delete_account_link","value","USER_DELETE"],["map","key","\\^ea=web\\-click\\^el=delete_account_yes","value","USER_DELETE"],["map","key","\\^ea=add\\-my\\-league\\^.*","value","ADD_MY_LEAGUES"],["map","key","\\^ea=remove\\-my\\-league\\^.*","value","REMOVE_MY_LEAGUES"],["map","key","\\^ea=add-\\my\\-team\\^.*","value","ADD_MY_TEAM"],["map","key","\\^ea=remove\\-my\\-team\\^.*","value","REMOVE_MY_TEAM"],["map","key","\\^ea=click\\-banner\\^.*","value","CLICK_BANNER"],["map","key","\\^ea=iframe\\-bookmark\\-click\\^el=calendar","value","SCN_DAY"],["map","key","\\^ea=web\\-click\\^el=settings","value","CLICK_SETTINGS"],["map","key","\\^ea=iframe\\-bookmark\\-click\\^el=match\\-comments","value","CLICK_PREVIEW"],["map","key","\\^ea=iframe\\-icon\\-click\\^el=tv_youtube_stream","value","CLICK_YTB_LINK"]]
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
      "vtp_input":["macro",67],
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
      "function":"__c",
      "vtp_value":"30"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"fonce_current_day"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=new Date,b=c.getMonth()+1;10\u003Eb\u0026\u0026(b=\"0\"+b);var a=c.getDate();10\u003Ea\u0026\u0026(a=\"0\"+a);c=c.getFullYear()+\"-\"+b+\"-\"+a;b=",["escape",["macro",81],8,16],";a=b.split(\",\");b=a[0];a=a[1];return a==c\u0026\u00261==b?1:0})();"]
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
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
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
      "vtp_javascript":["template","(function(){var a=\/\\?rd|\\?utm|\\?group|\\?gclid\/.test(",["escape",["macro",10],8,16],");return a=1==a?\"?\"+",["escape",["macro",11],8,16],":window.location.search.split(\"?\")[0].split(\"#\")[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/(\\?|\u0026)(rd=|utm_|group=|gclid=|ga=)\/.test(",["escape",["macro",10],8,16],");return 0==a?window.location.pathname:window.location.pathname+window.location.search})();"]
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
      "vtp_javascript":["template","(function(){return function(model){model.data.keys.forEach(function(key){model.set(key,null)});function CE_READY(){CE2.set(1,\"",["escape",["macro",16],7],"\");CE2.set(2,\"",["escape",["macro",5],7],"\");CE2.set(3,\"",["escape",["macro",52],7],"\");CE2.set(4,\"",["escape",["macro",32],7],"\");CE2.set(5,\"",["escape",["macro",3],7],"\")}}})();"]
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
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"fonce_current_session\",d=new Date;d.setTime(d.getTime()+6E4*",["escape",["macro",80],8,16],");var expires=d.toGMTString(),conversionOccurred=",["escape",["macro",51],8,16],";conversionOccurred=void 0===conversionOccurred?0:conversionOccurred;document.cookie=cookieName+\"\\x3d\"+conversionOccurred+\"; expires\\x3d\"+expires+\";path\\x3d\/;domain\\x3d\"+",["escape",["macro",7],8,16],"+\";secure;samesite\\x3dnone\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":163
    },{
      "function":"__html",
      "priority":10,
      "metadata":["map"],
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"fonce_current_day\",todayCookie=",["escape",["macro",81],8,16],",conversionOccurred,conversionOccurredLastTime;if(void 0===todayCookie)conversionOccurred=0,conversionOccurredLastTime=",["escape",["macro",83],8,16],";else{var todayCookieParts=todayCookie.split(\",\");conversionOccurred=todayCookieParts[0];conversionOccurredLastTime=todayCookieParts[1]}var conversionOccurredCookieValue;\nconversionOccurredCookieValue=\"",["escape",["macro",83],7],"\"==conversionOccurredLastTime?conversionOccurred+\",\"+conversionOccurredLastTime:\"0,\"+",["escape",["macro",83],8,16],";document.cookie=cookieName+\"\\x3d\"+conversionOccurredCookieValue+\";path\\x3d\/;domain\\x3d\"+",["escape",["macro",7],8,16],"+\";secure;samesite\\x3dnone\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":165
    },{
      "function":"__html",
      "priority":10,
      "metadata":["map"],
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"fonce_current_user\",d=new Date;d.setTime(d.getTime()+144E6*",["escape",["macro",80],8,16],");var expires=d.toGMTString(),conversionOccurred=",["escape",["macro",84],8,16],";conversionOccurred=void 0===conversionOccurred?0:conversionOccurred;document.cookie=cookieName+\"\\x3d\"+conversionOccurred+\"; expires\\x3d\"+expires+\";path\\x3d\/;domain\\x3d\"+",["escape",["macro",7],8,16],"+\";secure;samesite\\x3dnone\";console.log(\"*** cookie '\"+cookieName+\"' set (all pages): \"+document.cookie);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":167
    },{
      "function":"__html",
      "priority":10,
      "metadata":["map"],
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"fonce_current_user_gdpr\",conversionOccurred=1,d=new Date;d.setTime(d.getTime()+144E6*",["escape",["macro",80],8,16],");var expires=d.toGMTString();document.cookie=cookieName+\"\\x3d\"+conversionOccurred+\"; expires\\x3d\"+expires+\";path\\x3d\/;domain\\x3d\"+",["escape",["macro",7],8,16],"+\";secure;samesite\\x3dnone\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":423
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":8
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",44],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",43],
      "vtp_eventAction":["macro",17],
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":24
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",43],
      "vtp_eventAction":"file-click",
      "vtp_eventLabel":"apk",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":43
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",44],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",43],
      "vtp_eventAction":["macro",17],
      "vtp_eventLabel":["macro",49],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":128
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",5],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",43],
      "vtp_eventAction":"detail-preview-click",
      "vtp_eventLabel":"show-full-preview",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
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
      "vtp_gaSettings":["macro",43],
      "vtp_eventAction":"UserReturned",
      "vtp_eventLabel":["macro",52],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":169
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",44],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",43],
      "vtp_eventAction":["macro",17],
      "vtp_eventLabel":["template",["macro",18],"_s_",["macro",53]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":170
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"404 error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",43],
      "vtp_eventAction":["macro",4],
      "vtp_eventLabel":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":181
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",5],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",43],
      "vtp_eventAction":"page_search",
      "vtp_eventLabel":"ctrl_or_cmd",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":182
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_fieldsToSet":["list",["map","name","user_id","value",["macro",14]],["map","name","user_properties","value",["macro",62]],["map","name","type","value",["macro",3]],["map","name","tournament","value",["macro",32]],["map","name","subpage","value",["macro",34]],["map","name","sport","value",["macro",5]],["map","name","participant","value",["macro",35]],["map","name","ID","value",["macro",31]],["map","name","country","value",["macro",6]],["map","name","archive","value",["macro",36]],["map","name","cookie_flags","value","samesite=none;secure"],["map","name","cooke_domain","value","auto"]],
      "vtp_sendPageView":true,
      "vtp_measurementId":["macro",63],
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":191
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_fieldsToSet":["list",["map","name","user_id","value",["macro",14]],["map","name","user_properties","value",["macro",62]],["map","name","type","value",["macro",3]],["map","name","tournament","value",["macro",32]],["map","name","subpage","value",["macro",34]],["map","name","sport","value",["macro",5]],["map","name","participant","value",["macro",35]],["map","name","ID","value",["macro",31]],["map","name","country","value",["macro",6]],["map","name","archive","value",["macro",36]],["map","name","cookie_flags","value","samesite=none;secure"],["map","name","cooke_domain","value","auto"]],
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-HRK2668K68",
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":199
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",65],
      "vtp_eventParameters":["list",["map","name","sport","value",["macro",44]],["map","name","label","value",["macro",18]],["map","name","article-source","value",["macro",53]],["map","name","article-cat","value",["macro",66]]],
      "vtp_measurementId":"G-HRK2668K68",
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":200
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",65],
      "vtp_eventParameters":["list",["map","name","sport","value",["macro",44]],["map","name","position","value",["macro",46]],["map","name","zoneId","value",["macro",47]],["map","name","bannerId","value",["macro",48]]],
      "vtp_measurementId":"G-HRK2668K68",
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":201
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",68],
      "vtp_eventParameters":["list",["map","name","sport","value",["macro",44]],["map","name","name","value","apk"]],
      "vtp_measurementId":["macro",63],
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":202
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",65],
      "vtp_eventParameters":["list",["map","name","sport","value",["macro",44]],["map","name","label","value",["macro",18]],["map","name","type","value",["macro",3]],["map","name","tournament","value",["macro",32]],["map","name","subpage","value",["macro",34]],["map","name","participant","value",["macro",35]],["map","name","ID","value",["macro",31]],["map","name","country","value",["macro",6]],["map","name","archive","value",["macro",36]],["map","name","event-time","value",["macro",69]]],
      "vtp_measurementId":["macro",63],
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":203
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",65],
      "vtp_eventParameters":["list",["map","name","sport","value",["macro",44]],["map","name","position","value",["macro",46]],["map","name","zoneId","value",["macro",47]],["map","name","bannerId","value",["macro",48]],["map","name","type","value",["macro",3]],["map","name","tournament","value",["macro",32]],["map","name","subpage","value",["macro",34]],["map","name","participant","value",["macro",35]],["map","name","ID","value",["macro",31]],["map","name","country","value",["macro",6]],["map","name","archive","value",["macro",36]]],
      "vtp_measurementId":["macro",63],
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":204
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",65],
      "vtp_eventParameters":["list",["map","name","sport","value",["macro",44]],["map","name","label","value",["macro",18]],["map","name","article-source","value",["macro",53]],["map","name","article-cat","value",["macro",66]],["map","name","type","value",["macro",3]],["map","name","tournament","value",["macro",32]],["map","name","subpage","value",["macro",34]],["map","name","participant","value",["macro",35]],["map","name","ID","value",["macro",31]],["map","name","country","value",["macro",6]],["map","name","archive","value",["macro",36]]],
      "vtp_measurementId":["macro",63],
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":205
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",65],
      "vtp_eventParameters":["list",["map","name","sport","value",["macro",44]],["map","name","label","value",["macro",18]],["map","name","article-source","value",["macro",53]],["map","name","article-cat","value",["macro",66]]],
      "vtp_measurementId":"G-HRK2668K68",
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":206
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"GDPR",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",43],
      "vtp_eventAction":"opt_out",
      "vtp_eventLabel":["macro",0],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":426
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"GDPR_USER_BLOCK_TRACKING",
      "vtp_eventParameters":["list",["map","name","active_groups","value",["macro",0]]],
      "vtp_measurementId":["macro",63],
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":428
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",65],
      "vtp_eventParameters":["list",["map","name","event_tv_start_order_from_event","value",["macro",71]],["map","name","event_tv_start_play_from_event","value",["macro",72]],["map","name","event_id","value",["macro",73]],["map","name","tv_action_sec_from_event_start","value",["macro",74]],["map","name","tv_order_code","value",["macro",75]]],
      "vtp_measurementId":["macro",63],
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":446
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",65],
      "vtp_eventParameters":["list",["map","name","event_id","value",["macro",73]],["map","name","event_tv_start_play_from_event","value",["macro",72]],["map","name","tv_action_sec_from_event_start","value",["macro",74]],["map","name","tv_order_code","value",["macro",75]]],
      "vtp_measurementId":["macro",63],
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":451
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",65],
      "vtp_measurementId":["macro",63],
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":454
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",65],
      "vtp_eventParameters":["list",["map","name","tv_player_type","value",["macro",76]],["map","name","event_tv_start_order_from_event","value",["macro",71]],["map","name","event_tv_start_play_from_event","value",["macro",72]],["map","name","event_id","value",["macro",73]],["map","name","tv_action_sec_from_event_start","value",["macro",74]],["map","name","tv_order_code","value",["macro",75]]],
      "vtp_measurementId":["macro",63],
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":455
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",65],
      "vtp_eventParameters":["list",["map","name","event_tv_start_order_from_event","value",["macro",71]],["map","name","event_id","value",["macro",73]],["map","name","tv_action_sec_from_event_start","value",["macro",74]],["map","name","tv_order_code","value",["macro",75]],["map","name","tv_order_type","value",["macro",77]]],
      "vtp_measurementId":["macro",63],
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":456
    },{
      "function":"__hjtc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_hotjar_site_id":"1847866",
      "tag_id":498
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"CLICK_FEATURE_REGISTRATION",
      "vtp_eventParameters":["list",["map","name","ID","value",["macro",78]],["map","name","feature_type","value",["macro",79]],["map","name","type","value",["macro",3]],["map","name","tournament","value",["macro",32]],["map","name","stage","value",["macro",33]],["map","name","sport","value",["macro",5]],["map","name","country","value",["macro",6]],["map","name","subpage","value",["macro",34]]],
      "vtp_measurementId":["macro",63],
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":506
    },{
      "function":"__cl",
      "tag_id":512
    },{
      "function":"__cl",
      "tag_id":513
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"fonce_current_session\",conversionOccurred=1,d=new Date;d.setTime(d.getTime()+6E4*",["escape",["macro",80],8,16],");var expires=d.toGMTString();document.cookie=cookieName+\"\\x3d\"+conversionOccurred+\"; expires\\x3d\"+expires+\";path\\x3d\/;domain\\x3d\"+",["escape",["macro",7],8,16],"+\";secure;samesite\\x3dnone\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":162
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"fonce_current_day\",conversionOccurred=1;document.cookie=cookieName+\"\\x3d\"+conversionOccurred+\",\"+",["escape",["macro",83],8,16],"+\"; expires\\x3d\"+expires+\";path\\x3d\/;domain\\x3d\"+",["escape",["macro",7],8,16],"+\";secure;samesite\\x3dnone\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":164
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"fonce_current_user\",conversionOccurred=1,d=new Date;d.setTime(d.getTime()+144E6*",["escape",["macro",80],8,16],");var expires=d.toGMTString();document.cookie=cookieName+\"\\x3d\"+conversionOccurred+\"; expires\\x3d\"+expires+\";path\\x3d\/;domain\\x3d\"+",["escape",["macro",7],8,16],"+\";secure;samesite\\x3dnone\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar random=Math.random();if(random\u003C",["escape",["macro",85],8,16],"\/100){var cookieName=\"fonce_sampled_user\",d=new Date;d.setTime(d.getTime()+144E6*",["escape",["macro",80],8,16],");var expires=d.toGMTString();document.cookie=cookieName+\"\\x3d1; expires\\x3d\"+expires+\";path\\x3d\/;domain\\x3d\"+",["escape",["macro",7],8,16],"+\";secure;samesite\\x3dnone\";console.log(\"User sampled\")};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":207
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003ElocalStorage.setItem(\"notificationStatus\",",["escape",["macro",86],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":214
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"fonce_current_user_gdpr\",d=new Date;d.setTime(d.getTime()+144E6*",["escape",["macro",80],8,16],");var expires=d.toGMTString(),conversionOccurred=",["escape",["macro",70],8,16],";conversionOccurred=void 0===conversionOccurred?0:conversionOccurred;document.cookie=cookieName+\"\\x3d\"+conversionOccurred+\"; expires\\x3d\"+expires+\";path\\x3d\/;domain\\x3d\"+",["escape",["macro",7],8,16],"+\";secure;samesite\\x3dnone\";console.log(\"*** cookie '\"+cookieName+\"' set (all pages): \"+document.cookie);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":424
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a.SurveyGizmoBeacon=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"\/\/www.surveygizmo.eu\/runtimejs\/intercept\/intercept.js\",\"sg_beacon\");sg_beacon(\"init\",\"OTAwMjE0NDEtYjIyZmYyN2JjZjYyNGE4NDYwMjVlMWFiNDAyNzE4NjMzNTgxNzNhYjViYjNlNDViNmE\\x3d\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":499
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a.SurveyGizmoBeacon=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"\/\/www.surveygizmo.eu\/runtimejs\/intercept\/intercept.js\",\"sg_beacon\");sg_beacon(\"init\",\"OTAwMjE0NDEtNTBmNWRiZjllYzRhYTYwMjUwYWY3YjExYTM5NGUwZGFhMTg1YWQ2ODY2NzFlM2VjNWI\\x3d\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":501
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a.SurveyGizmoBeacon=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"\/\/www.surveygizmo.eu\/runtimejs\/intercept\/intercept.js\",\"sg_beacon\");sg_beacon(\"init\",\"OTAwMjE0NDEtMDEyMDNkMTIwZWMyMGJiNDE1ZGQwZDE2MTg3NjA4MmE0NGFhNDc3NGE2ZmQ4N2IyZGQ\\x3d\");sg_beacon(\"data\",\"user_id\",",["escape",["macro",14],8,16],");sg_beacon(\"data\",\"client_id\",",["escape",["macro",15],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":511
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":",C0002,"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"OneTrustGroupsUpdated"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"404_page"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"mobile|android"
    },{
      "function":"_sw",
      "arg0":["macro",4],
      "arg1":"\/unsupported\/"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"iframe-bookmark-click"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"detail"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"iframe-click"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"iframe-icon-click"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"iframe-icon-mouseover"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"navigation"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"web-click"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"odds-iframe-click"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"detail\\-(bookmark|audio)\\-click"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"detail-share-button"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"registration-form"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"button\\-bookmaker\\-click|bookmaker\\-button\\-click"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"bookmaker-link-click"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"more-info"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"icon-plus-click"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"add-my-league"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"add-my-team"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"remove\\-my\\-team|remove\\-my\\-league"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"click_recommending_box"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":",C0002"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":".*"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"\\.apk$"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"click-banner"
    },{
      "function":"_eq",
      "arg0":["macro",50],
      "arg1":"match-comments-switcher"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"baseball24|basketball24|cricket24|darts24|golflive24|hanball24|horseracing24|motorsport24|soccer24|tennis24|volleyball24|icehockey24"
    },{
      "function":"_cn",
      "arg0":["macro",51],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"news-article-click"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"search"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"checkbox-click"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"CLICK_PREVIEW"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"CLICK_ARTICLE_TEAM_NEWS"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"missing_mop"
    },{
      "function":"_cn",
      "arg0":["macro",70],
      "arg1":"1"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"TV_SHOW_SCORE|TV_HIDE_SCORE"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"TV_TOP_BUTTON_PLAY"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"TV_PLAY_EVENT"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"TV_PLAY_CHANNEL"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"TV_PLAYER"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"TV_RESOLUTION"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"TV_ORDER_START|TV_ORDER_PROGRESS|TV_ORDER_COMPLETED"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"feature_registration"
    },{
      "function":"_cn",
      "arg0":["macro",82],
      "arg1":"1"
    },{
      "function":"_cn",
      "arg0":["macro",84],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"webNotificationStatus"
    },{
      "function":"_cn",
      "arg0":["macro",87],
      "arg1":"livesport.cz"
    },{
      "function":"_cn",
      "arg0":["macro",87],
      "arg1":"mismarcadores.com"
    }],
  "rules":[
    [["if",0,2],["unless",1],["add",4,14,15,30,42]],
    [["if",7],["add",5,16,19]],
    [["if",9],["unless",8],["add",5,16,19]],
    [["if",10],["add",5,16,19]],
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
    [["if",0,2,32],["add",9]],
    [["if",4],["unless",33],["add",10,34]],
    [["if",34],["add",11,21,22]],
    [["if",3,4],["add",12,14,15],["block",4]],
    [["if",35],["add",13]],
    [["if",4,5],["add",14,15],["block",4]],
    [["if",4,6],["add",14,15],["block",4]],
    [["if",36],["add",16,19]],
    [["if",37],["add",16,19]],
    [["if",38],["add",19]],
    [["if",39],["add",19]],
    [["if",2],["unless",0,40],["add",23,24,3]],
    [["if",41],["add",25]],
    [["if",42],["add",26]],
    [["if",43],["add",26]],
    [["if",44],["add",27]],
    [["if",45],["add",28]],
    [["if",46],["add",28]],
    [["if",47],["add",29]],
    [["if",48],["add",31]],
    [["if",4],["add",32,33,0,1,2]],
    [["if",4],["unless",49],["add",35]],
    [["if",4],["unless",50],["add",36,37]],
    [["if",51],["add",38]],
    [["if",2],["unless",0],["add",39]],
    [["if",0,2,52],["add",40]],
    [["if",0,2,53],["add",41]],
    [["if",27],["unless",26],["block",5,7,8,10,11,13,16,17,19,20,21,22]]]
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
var aa,da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={vg:!0},ja={};try{ja.__proto__=ia;ha=ja.vg;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=fa,la=function(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.li=b.prototype},ma=this||self,qa=function(a){if(a&&a!=ma)return na(a.document);null===oa&&(oa=na(ma.document));return oa},sa=/^[\w+/_-]+[=]{0,2}$/,oa=null,na=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&sa.test(c))return c}return""},ta=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"},ua=function(a,b){function c(){}c.prototype=b.prototype;a.li=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Gi=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}},xa=function(a){return a};var ya=function(a,b){this.a=a;this.i=b};var za=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Aa=function(){this.B={};this.m=!1;this.F={}};Aa.prototype.get=function(a){return this.B["dust."+a]};Aa.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.B[a]=b))};Aa.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var Ba=function(a){var b=[],c;for(c in a.B)a.B.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.i=new Aa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(za(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"===a){if(!za(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else za(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"===a?this.length():za(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.uc=function(){for(var a=Ba(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new k(a)};
var Ca=function(a,b){if(za(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.B[d]}};aa=k.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new k(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return za(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var Da=function(){function a(f,g){if(b[f]){if(b[f].ic+g>b[f].max)throw Error("Quota exceeded");b[f].ic+=g}}var b={},c=void 0,d=void 0,e={Mh:function(f){c=f},We:function(){c&&a(c,1)},Oh:function(f){d=f},Ia:function(f){d&&a(d,f)},ii:function(f,g){b[f]=b[f]||{ic:0};b[f].max=g},lh:function(f){return b[f]&&b[f].ic||0},reset:function(){b={}},Tg:a};e.onFnConsume=e.Mh;e.consumeFn=e.We;e.onStorageConsume=e.Oh;e.consumeStorage=e.Ia;e.setMax=e.ii;e.getConsumed=e.lh;e.reset=e.reset;e.consume=e.Tg;return e};var Ea=function(a,b){this.F=a;this.P=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new Aa;this.a=this.B=void 0};Ea.prototype.add=function(a,b){Fa(this,a,b,!1)};var Fa=function(a,b,c,d){if(!a.i.m)if(a.F.Ia(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
Ea.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ia(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};Ea.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};Ea.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ga=function(a){var b=new Ea(a.F,a);a.B&&(b.B=a.B);b.P=a.P;b.a=a.a;return b};var Ha=function(){},Ia=function(a){return"function"==typeof a},n=function(a){return"string"==typeof a},Ja=function(a){return"number"==typeof a&&!isNaN(a)},Ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},A=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},La=function(a,b){if(a&&Ka(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ma=function(a,b){if(!Ja(a)||
!Ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Oa=function(a,b){for(var c=new Na,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Pa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Qa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Sa=function(a){return Math.round(Number(a))||0},Ta=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Ua=function(a){var b=[];if(Ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Va=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Wa=function(){return(new Date).getTime()},Na=function(){this.prefix="gtm.";this.values={}};Na.prototype.set=function(a,b){this.values[this.prefix+a]=b};Na.prototype.get=function(a){return this.values[this.prefix+a]};
var Xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},db=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},eb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},gb=function(a,b){var c=D;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=A(b,d))return}return d},
ib=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},jb=function(a){var b=[];Pa(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var kb=function(a,b){Aa.call(this);this.a=a;this.P=b};la(kb,Aa);kb.prototype.toString=function(){return this.a};kb.prototype.uc=function(){return new k(Ba(this))};kb.prototype.i=function(a,b){a.F.We();return this.P.apply(lb(this,a),Array.prototype.slice.call(arguments,1))};var lb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Ka(d)?mb(e,d):d};c.prototype.F=function(d){return nb(this.m,d)};c.prototype.B=function(){return b.F};return new c(a,b)};
kb.prototype.La=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var nb=function(a,b){for(var c,d=0;d<b.length&&!(c=mb(a,b[d]),c instanceof ya);d++);return c},mb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof kb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.B;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var ob=function(){Aa.call(this)};la(ob,Aa);ob.prototype.uc=function(){return new k(Ba(this))};var pb={control:function(a,b){return new ya(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.B().Ia(a.length+f.length);return new kb(a,function(){return function(g){var h=Ga(d);void 0===h.a&&(h.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof ya)return l[m];for(var p=e.get("length"),r=
0;r<p;r++)r<l.length?h.add(e.get(r),l[r]):h.add(e.get(r),void 0);h.add("arguments",new k(l));var t=nb(h,f);if(t instanceof ya)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.B();b.Ia(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ia(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.B(),c=new ob,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ia(g);c.set(e,f)}return c},undefined:function(){}};var qb=function(){this.m=Da();this.a=new Ea(this.m)},rb=function(a,b,c){var d=new kb(b,c);d.m=!0;a.a.set(b,d)};qb.prototype.oc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};qb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=mb(this.a,arguments[c]);return b};qb.prototype.B=function(a,b){var c=Ga(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=d=mb(c,arguments[e]);return d};var sb=function(a){if(a instanceof sb)return a;this.qa=a};sb.prototype.toString=function(){return String(this.qa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var tb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,ub=function(a){if(null==a)return String(a);var b=tb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},vb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},wb=function(a){if(!a||"object"!=ub(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!vb(a,"constructor")&&!vb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||vb(a,b)},F=function(a,b){var c=b||("array"==ub(a)?[]:{}),d;for(d in a)if(vb(a,d)){var e=a[d];"array"==ub(e)?("array"!=ub(c[d])&&(c[d]=[]),c[d]=F(e,c[d])):wb(e)?(wb(c[d])||(c[d]={}),c[d]=F(e,c[d])):c[d]=e}return c};var yb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Ba(h),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=A(d,h);if(-1<l)return e[l];if(h instanceof k){var m=[];d.push(h);e.push(m);for(var p=h.uc(),r=0;r<p.length();r++)m[p.get(r)]=g(h.get(p.get(r)));return m}if(h instanceof ob){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof kb){var q=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=xb(u[v],b,!!c);var x=b?b.F:Da(),y=new Ea(x);
b&&(y.a=b.a);return g(h.i.apply(h,[y].concat(u)))};d.push(h);e.push(q);f(h,q);return q}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},xb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=A(d,
h);if(-1<l)return e[l];if(Ka(h)||Qa(h)){var m=new k([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(wb(h)){var r=new ob;d.push(h);e.push(r);f(h,r);return r}if("function"===typeof h){var t=new kb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),x=0;x<v.length;x++)v[x]=yb(this.a(v[x]),b,!!c);return g((0,this.m.P)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var q=typeof h;if(null===h||"string"===q||"number"===q||"boolean"===q)return h;};return g(a)};var zb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Ab=function(a){if(void 0===a||Ka(a)||wb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Bb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=zb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Ca(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=zb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Ca(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Cb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Db=new ya("break"),Eb=new ya("continue"),Fb=function(a,b){return this.a(a)+this.a(b)},Jb=function(a,b){return this.a(a)&&this.a(b)},Kb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=A(Cb,b))return xb(a[b].apply(a,zb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof kb){var e=zb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=A(Bb.supportedMethods,b)){var f=zb(c);f.unshift(this.m);
return Bb[b].apply(a,f)}}if(a instanceof kb||a instanceof ob){if(a.has(b)){var g=a.get(b);if(g instanceof kb){var h=zb(c);h.unshift(this.m);return g.i.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof kb?a.a:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,zb(c))}if(a instanceof sb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Lb=function(a,b){a=this.a(a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");
var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Mb=function(a){var b=Ga(this.m),c=nb(b,Array.prototype.slice.apply(arguments));if(c instanceof ya)return c},Nb=function(){return Db},Ob=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof ya)return d}},Pb=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);Fa(b,d,e,
!0)}}},Qb=function(){return Eb},Rb=function(a,b,c){var d=new k;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Sb=function(a,b){return this.a(a)/this.a(b)},Tb=function(a,b){a=this.a(a);b=this.a(b);var c=a instanceof sb,d=b instanceof sb;return c||d?c&&d?a.qa==b.qa:!1:a==b},Ub=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Vb(a,b,c){if("string"===typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=nb(e,c);if(f instanceof ya){if("break"===f.a)break;if("return"===f.a)return f}}else if(b instanceof ob||b instanceof k||b instanceof kb)for(var g=b.uc(),h=g.length(),l=0;l<h;l++){var m=a(g.get(l)),p=nb(m,c);if(p instanceof ya){if("break"===p.a)break;if("return"===p.a)return p}}}
var Wb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){d.set(a,e);return d},b,c)},Xb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){var f=Ga(d);Fa(f,a,e,!0);return f},b,c)},Yb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){var f=Ga(d);f.add(a,e);return f},b,c)},$b=function(a,b,c,d){function e(p,r){for(var t=0;t<f.length();t++){var q=f.get(t);r.add(q,p.get(q))}}var f=this.a(a);if(!(f instanceof
k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.m;d=this.a(d);var h=Ga(g);for(e(g,h);mb(h,b);){var l=nb(h,d);if(l instanceof ya){if("break"===l.a)break;if("return"===l.a)return l}var m=Ga(g);e(h,m);mb(m,c);h=m}},ac=function(a){a=this.a(a);var b=this.m,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");
return b.get(a)},bc=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof ob||a instanceof k||a instanceof kb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:za(b)&&(c=a[b]);else if(a instanceof sb)return;return c},cc=function(a,b){return this.a(a)>this.a(b)},dc=function(a,b){return this.a(a)>=this.a(b)},ec=function(a,b){a=this.a(a);b=this.a(b);a instanceof sb&&(a=a.qa);b instanceof sb&&(b=b.qa);
return a===b},fc=function(a,b){return!ec.call(this,a,b)},gc=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof ya)return e},hc=function(a,b){return this.a(a)<this.a(b)},ic=function(a,b){return this.a(a)<=this.a(b)},jc=function(a,b){return this.a(a)%this.a(b)},kc=function(a,b){return this.a(a)*this.a(b)},mc=function(a){return-this.a(a)},nc=function(a){return!this.a(a)},oc=function(a,b){return!Tb.call(this,a,b)},pc=function(){return null},qc=function(a,b){return this.a(a)||
this.a(b)},rc=function(a,b){var c=this.a(a);this.a(b);return c},sc=function(a){return this.a(a)},tc=function(a){return Array.prototype.slice.apply(arguments)},uc=function(a){return new ya("return",this.a(a))},vc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof kb||a instanceof k||a instanceof ob)&&a.set(b,c);return c},wc=function(a,b){return this.a(a)-this.a(b)},xc=function(a,b,c){a=this.a(a);var d=
this.a(b),e=this.a(c);if(!Ka(d)||!Ka(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.a(d[h]))if(f=this.a(e[h]),f instanceof ya){var l=f.a;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=this.a(e[e.length-1]),f instanceof ya&&("return"===f.a||"continue"===f.a)))return f},yc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},zc=function(a){a=this.a(a);return a instanceof kb?"function":typeof a},
Ac=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Bc=function(a,b,c,d){var e=this.a(d);if(this.a(c)){var f=this.F(e);if(f instanceof ya){if("break"===f.a)return;if("return"===f.a)return f}}for(;this.a(a);){var g=this.F(e);if(g instanceof ya){if("break"===g.a)break;if("return"===g.a)return g}this.a(b)}},Cc=function(a){return~Number(this.a(a))},Ec=function(a,b){return Number(this.a(a))<<Number(this.a(b))},Fc=function(a,b){return Number(this.a(a))>>
Number(this.a(b))},Gc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},Hc=function(a,b){return Number(this.a(a))&Number(this.a(b))},Ic=function(a,b){return Number(this.a(a))^Number(this.a(b))},Jc=function(a,b){return Number(this.a(a))|Number(this.a(b))};var Lc=function(){this.a=new qb;Kc(this)};Lc.prototype.oc=function(a){return Mc(this.a.i(a))};
var Oc=function(a,b){return Mc(Nc.a.B(a,b))},Kc=function(a){var b=function(d,e){var f=a.a,g=String(e);pb.hasOwnProperty(d)&&rb(f,g||d,pb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){rb(a.a,String(d),e)};c(0,Fb);c(1,Jb);c(2,Kb);c(3,Lb);c(53,Mb);c(4,Nb);c(5,Ob);c(52,Pb);c(6,Qb);c(9,Ob);c(50,Rb);c(10,Sb);c(12,Tb);c(13,Ub);c(47,Wb);c(54,Xb);c(55,Yb);c(63,$b);c(15,ac);c(16,bc);c(17,bc);c(18,cc);c(19,dc);c(20,ec);c(21,fc);c(22,gc);c(23,hc);c(24,ic);c(25,jc);
c(26,kc);c(27,mc);c(28,nc);c(29,oc);c(45,pc);c(30,qc);c(32,rc);c(33,rc);c(34,sc);c(35,sc);c(46,tc);c(36,uc);c(43,vc);c(37,wc);c(38,xc);c(39,yc);c(40,zc);c(41,Ac);c(42,Bc);c(58,Cc);c(57,Ec);c(60,Fc);c(61,Gc);c(56,Hc);c(62,Ic);c(59,Jc)},Qc=function(){var a=Nc,b=Pc();rb(a.a,"require",b)},Rc=function(a,b){a.a.a.P=b};
function Mc(a){if(a instanceof ya||a instanceof kb||a instanceof k||a instanceof ob||a instanceof sb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var Sc=[],Tc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Uc=function(a){return Tc[a]},Vc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Zc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,$c={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},ad=function(a){return $c[a]};Sc[7]=function(a){return String(a).replace(Zc,ad)};
Sc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Zc,ad)+"'"}};var id=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,jd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ld=function(a){return jd[a]};Sc[16]=function(a){return a};var nd;
var od=[],pd=[],qd=[],rd=[],sd=[],td={},ud,vd,wd,xd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},yd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=td[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.Te&&b.Te(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):nd(c,e,b)},Ad=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=zd(a[e],b,c));return d},Bd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=td[b];return c?c.priorityOverride||0:0},zd=function(a,b,c){if(Ka(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(zd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=od[f];if(!g||b.td(g))return;c[f]=!0;try{var h=Ad(g,b,c);h.vtp_gtmEventId=b.id;d=yd(h,b);wd&&(d=wd.Vg(d,h))}catch(y){b.ff&&b.ff(y,Number(f)),
d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[zd(a[l],b,c)]=zd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var r=zd(a[p],b,c);vd&&(m=m||r===vd.Zb);d.push(r)}return vd&&m?vd.Yg(d):d.join("");case "escape":d=zd(a[1],b,c);if(vd&&Ka(a[1])&&"macro"===a[1][0]&&vd.yh(a))return vd.Th(d);d=String(d);for(var t=2;t<a.length;t++)Sc[a[t]]&&(d=Sc[a[t]](d));return d;case "tag":var q=a[1];if(!rd[q])throw Error("Unable to resolve tag reference "+q+".");return d=
{Ze:a[2],index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Cd(u,b,c),x=!!a[4];return x||2!==v?x!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Cd=function(a,b,c){try{return ud(Ad(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Dd=function(){var a=function(b){return{toString:function(){return b}}};return{xf:a("consent"),Sd:a("convert_case_to"),Td:a("convert_false_to"),Ud:a("convert_null_to"),Vd:a("convert_true_to"),Wd:a("convert_undefined_to"),yi:a("debug_mode_metadata"),Ha:a("function"),lg:a("instance_name"),mg:a("live_only"),og:a("malware_disabled"),pg:a("metadata"),Bi:a("original_vendor_template_id"),rg:a("once_per_event"),Je:a("once_per_load"),Ne:a("setup_tags"),Oe:a("tag_id"),Pe:a("teardown_tags")}}();var Ed=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(Ed,Error);function Fd(a,b){if(Ka(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Fd(a[c],b[c])}};var Gd=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(Gd,Error);var Hd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var Jd=function(){return function(a,b){a instanceof Gd||(a=new Gd(a,Id));b&&a.a.push(b);throw a;}};function Id(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ja(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Kd=null,Nd=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Kd=Ld(a);for(var e=0;e<pd.length;e++){var f=pd[e],g=Md(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],p=0;p<rd.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},Md=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Kd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=Kd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Ld=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Cd(qd[c],a));return b[c]}};var Od={Vg:function(a,b){b[Dd.Sd]&&"string"===typeof a&&(a=1==b[Dd.Sd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Dd.Ud)&&null===a&&(a=b[Dd.Ud]);b.hasOwnProperty(Dd.Wd)&&void 0===a&&(a=b[Dd.Wd]);b.hasOwnProperty(Dd.Vd)&&!0===a&&(a=b[Dd.Vd]);b.hasOwnProperty(Dd.Td)&&!1===a&&(a=b[Dd.Td]);return a}};var Pd=function(){this.a={}};function Qd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Ed(c,d,g);}}function Rd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Qd(e,b,d,g);Qd(f,b,d,g)}}}};var Vd=function(a){var b=Sd.C,c=this;this.i=new Pd;this.a={};var d={},e=Rd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Pa(a,function(f,g){var h={};Pa(g,function(l,m){var p=Td(l,m);h[l]=p.assert;d[l]||(d[l]=p.K)});c.a[f]=function(l,m){var p=h[l];if(!p)throw Ud(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);p.apply(void 0,r);e.apply(void 0,r)}})},Xd=function(a){return Wd.a[a]||
function(){}};function Td(a,b){var c=xd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Ud;try{return yd(c)}catch(d){return{assert:function(e){throw new Ed(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Ud(a,b,c){return new Ed(a,b,c)};var Yd=!1;var Zd={};Zd.si=Ta('');Zd.eh=Ta('');var $d=Yd,ae=Zd.eh,be=Zd.si;
var te=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},ue=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;te(b,"/*")&&(b=b.slice(0,-2));te(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},ve=/^[a-z0-9-]+$/i,we=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
ye=function(a,b){var c;if(!(c=!xe(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!ve.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!we.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),r=p.slice(0,p.indexOf("/")),t;var q=l.hostname,u=r;if(0!==u.indexOf("*."))t=q.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=q.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:q.length===u.length?
!0:q.length!==u.length+v?!1:"."===q[v-1]}if(t){var x=p.slice(p.indexOf("/"));h=ue(l.pathname+l.search,x)?!0:!1}else h=!1;if(h)return!0}return!1},xe=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var Be=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Ce={Fn:"function",DustMap:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=Be.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof kb?p="Fn":l instanceof k?p="List":l instanceof ob?p="DustMap":
l instanceof sb&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(Ce[h]||h)+".");}}};function De(a){return""+a}
function Ee(a,b){var c=[];return c};var Fe=function(a,b){var c=new kb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},Ge=function(a,b){var c=new ob,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ia(e)?c.set(d,Fe(a+"_"+d,e)):(Ja(e)||n(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var He=function(a,b){H(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new ob;return d=Ge("AssertApiSubject",c)};var Ie=function(a,b){H(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new ob;return d=Ge("AssertThatSubject",c)};function Je(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(yb(arguments[d],c));return xb(a.apply(null,b))}}var Le=function(){for(var a=Math,b=Ke,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Je(a[e].bind(a)))}return c};var Me=function(a){var b;return b};var Ne=function(a){var b;return b};var Oe=function(a){H(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var Pe=function(a){H(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var Qe=function(a){H(this.i.a,["message:?string"],arguments);};var Re=function(a,b){H(this.i.a,["min:!number","max:!number"],arguments);return Ma(a,b)};var Se=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.Hg.apply(null,Array.prototype.slice.call(arguments,1))};var Te=function(){Se(this,"read_container_data");var a=new ob;a.set("containerId",'GTM-PWJ3NQ');a.set("version",'301');a.set("environmentName",'');a.set("debugMode",$d);a.set("previewMode",be);a.set("environmentMode",ae);a.m=!0;return a};var Ue=function(){return(new Date).getTime()};var Ve=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof kb)return"function";if(a instanceof sb){a=a.qa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var We=function(a){function b(c){return function(d){try{return c(d)}catch(e){($d||be)&&a.call(this,e.message)}}}return{parse:b(function(c){return xb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(yb(c))})}};var Xe=function(a){return Sa(yb(a,this.m))};var Ye=function(a){return Number(yb(a,this.m))};var Ze=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var $e=function(a,b,c){var d=null,e=!1;H(this.i.a,["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new ob;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof ob&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var Ke="floor ceil round max min abs pow sqrt".split(" ");var af=function(){var a={};return{mh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},ji:function(b,c){a[b]=c},reset:function(){a={}}}},bf=function(a,b){H(this.i.a,["apiName:!string","mock:?*"],arguments);};var cf=function(){this.a={};this.i={}};cf.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};
cf.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.i.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.a[a]=c?void 0:Ia(b)?Fe(a,b):Ge(a,b)};
var ef=function(a){var b=df;if(a.i.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function which already exists: getUserAgent.";if(a.a.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function with an existing API name: getUserAgent.";a.i.getUserAgent=Ia(b)?Fe("getUserAgent",b):Ge("getUserAgent",b)};function ff(){var a={};return a};var I={vb:"_ee",dd:"_syn",Ei:"_uei",Ci:"_pci",Nc:"event_callback",Vb:"event_timeout",ka:"gtag.config"};I.Da="gtag.get";I.Ca="purchase";I.Rb="refund";I.hb="begin_checkout";I.Pb="add_to_cart";I.Qb="remove_from_cart";I.Gf="view_cart";I.Yd="add_to_wishlist";I.Qa="view_item";I.Jf="view_promotion";I.If="select_promotion";I.Hf="select_item";I.Ic="view_item_list";I.Xd="add_payment_info";I.Ff="add_shipping_info";
I.xa="value_key",I.wa="value_callback";I.fa="allow_ad_personalization_signals";I.Wc="restricted_data_processing";I.ib="allow_google_signals";I.ia="cookie_expires";I.Ub="cookie_update";I.sb="session_duration";I.na="user_properties";I.Ga="transport_url";I.N="ads_data_redaction";I.s="ad_storage";I.M="analytics_storage";I.yf="region";I.zf="wait_for_update";I.Be=[I.Ca,I.Rb,I.hb,I.Pb,I.Qb,I.Gf,I.Yd,I.Qa,I.Jf,I.If,I.Ic,I.Hf,I.Xd,I.Ff];I.Ae=[I.fa,I.ib,I.Ub];I.Ce=[I.ia,I.Vb,I.sb];var gf={},hf=function(a,b){gf[a]=gf[a]||[];gf[a][b]=!0},jf=function(a){for(var b=[],c=gf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var kf=function(a){hf("GTM",a)};function lf(a){if(Error.captureStackTrace)Error.captureStackTrace(this,lf);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}ua(lf,Error);lf.prototype.name="CustomError";var mf=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");lf.call(this,d+c[e])};ua(mf,lf);mf.prototype.name="AssertionError";var nf=function(a,b){throw new mf("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var of=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},pf=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var qf,rf=function(){if(void 0===qf){var a=null,b=ma.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:xa,createScript:xa,createScriptURL:xa})}catch(c){ma.console&&ma.console.error(c.message)}qf=a}else qf=a}return qf};var tf=function(a,b){this.a=b===sf?a:""};tf.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var sf={};var uf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var vf;a:{var wf=ma.navigator;if(wf){var xf=wf.userAgent;if(xf){vf=xf;break a}}vf=""}var yf=function(a){return-1!=vf.indexOf(a)};var Af=function(a,b,c){this.a=c===zf?a:""};Af.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var Bf=function(a){if(a instanceof Af&&a.constructor===Af)return a.a;nf("expected object of type SafeHtml, got '"+a+"' of type "+ta(a));return"type_error:SafeHtml"},zf={},Cf=new Af(ma.trustedTypes&&ma.trustedTypes.emptyHTML||"",0,zf);var Df={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Ef=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=Bf(Cf);return!c.parentElement}),Ff=function(a,b){if(a.tagName&&Df[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(Ef())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Bf(b)};var Gf=function(a){var b=rf(),c=b?b.createHTML(a):a;return new Af(c,null,zf)};var D=window,L=document,Hf=navigator,If=L.currentScript&&L.currentScript.src,Jf=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},Kf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Lf=function(a,b,c){var d=L.createElement("script");d.type="text/javascript";d.async=!0;var e,f=rf(),g=f?f.createScriptURL(a):a;e=new tf(g,sf);var h;a:{try{var l=d&&d.ownerDocument,m=l&&(l.defaultView||l.parentWindow);
m=m||ma;if(m.Element&&m.Location){h=m;break a}}catch(x){}h=null}if(h&&"undefined"!=typeof h.HTMLScriptElement&&(!d||!(d instanceof h.HTMLScriptElement)&&(d instanceof h.Location||d instanceof h.Element))){var p;var r=typeof d;if("object"==r&&null!=d||"function"==r)try{p=d.constructor.displayName||d.constructor.name||Object.prototype.toString.call(d)}catch(x){p="<object could not be stringified>"}else p=void 0===d?"undefined":null===d?"null":typeof d;nf("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
"HTMLScriptElement",p)}var t;e instanceof tf&&e.constructor===tf?t=e.a:(nf("expected object of type TrustedResourceUrl, got '"+e+"' of type "+ta(e)),t="type_error:TrustedResourceUrl");d.src=t;var q=qa(d.ownerDocument&&d.ownerDocument.defaultView);q&&d.setAttribute("nonce",q);Kf(d,b);c&&(d.onerror=c);var u=qa();u&&d.setAttribute("nonce",u);var v=L.getElementsByTagName("script")[0]||L.body||L.head;v.parentNode.insertBefore(d,v);return d},Mf=function(){if(If){var a=If.toLowerCase();if(0===a.indexOf("https://"))return 2;
if(0===a.indexOf("http://"))return 3}return 1},Nf=function(a,b){var c=L.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=L.body&&L.body.lastChild||L.body||L.head;d.parentNode.insertBefore(c,d);Kf(c,b);void 0!==a&&(c.src=a);return c},Of=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Pf=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):
a.attachEvent&&a.attachEvent("on"+b,c)},Qf=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){D.setTimeout(a,0)},Rf=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Sf=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Tf=function(a){var b=L.createElement("div");Ff(b,Gf("A<div>"+a+"</div>"));
b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Uf=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},Vf=function(a){Hf.sendBeacon&&Hf.sendBeacon(a)||Of(a)},Wf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Xf={},Yf=function(a){return void 0==Xf[a]?!1:Xf[a]};var Zf=[];function $f(){var a=Jf("google_tag_data",{});a.ics||(a.ics={entries:{},set:ag,update:bg,addListener:cg,notifyListeners:dg,active:!1});return a.ics}
function ag(a,b,c,d,e,f){var g=$f();g.active=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&n(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(p===e||(p===d?m!==e:!p&&!m)){var r=!!(f&&0<f&&void 0===l.update),t={region:p,initial:"granted"===b,update:l.update,quiet:r};h[a]=t;r&&D.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,eg(a),dg(),hf("TAGGING",2))},f)}}}
function bg(a,b){var c=$f();c.active=!0;if(void 0!=b){var d=fg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=fg(a);f.quiet?(f.quiet=!1,eg(a)):g!==d&&eg(a)}}function cg(a,b){Zf.push({Ve:a,hh:b})}function eg(a){for(var b=0;b<Zf.length;++b){var c=Zf[b];Ka(c.Ve)&&-1!==c.Ve.indexOf(a)&&(c.lf=!0)}}function dg(a){for(var b=0;b<Zf.length;++b){var c=Zf[b];if(c.lf){c.lf=!1;try{c.hh({Ue:a})}catch(d){}}}}
var fg=function(a){var b=$f().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},gg=function(a){return!($f().entries[a]||{}).quiet},hg=function(){return Yf("gtag_cs_api")?$f().active:!1},ig=function(a,b){$f().addListener(a,b)},jg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!gg(b[e]))return!0;return!1}if(c()){var d=!1;ig(b,function(e){d||c()||(d=!0,a(e))})}else a({})},kg=function(a,b){if(!1===fg(b)){var c=!1;ig([b],function(d){!c&&fg(b)&&(a(d),c=!0)})}};var lg=[I.s,I.M],mg=function(a){var b=a[I.yf];b&&kf(40);var c=a[I.zf];c&&kf(41);for(var d=Ka(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<lg.length;f++){var g=lg[f],h=a[lg[f]],l=d[e];$f().set(g,h,l,"","",c)}},ng=function(a,b){for(var c=0;c<lg.length;c++){var d=lg[c],e=a[lg[c]];$f().update(d,e)}$f().notifyListeners(b)},og=function(a){var b=fg(a);return void 0!=b?b:!0},pg=function(){for(var a=[],b=0;b<lg.length;b++){var c=fg(lg[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},qg=function(a,b){jg(a,b)};var sg=function(a){return rg?L.querySelectorAll(a):null},tg=function(a,b){if(!rg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!L.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},ug=!1;if(L.querySelectorAll)try{var vg=L.querySelectorAll(":root");vg&&1==vg.length&&vg[0]==L.documentElement&&(ug=!0)}catch(a){}var rg=ug;var Sd={},O=null,Jg=Math.random();Sd.C="GTM-PWJ3NQ";Sd.cc="al2";Sd.Ai="";var Kg={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Lg={__paused:!0,__tg:!0},Mg;for(Mg in Kg)Kg.hasOwnProperty(Mg)&&(Lg[Mg]=!0);var Ng="www.googletagmanager.com/gtm.js";
var Og=Ng,Pg=Ta(""),Qg=null,Rg=null,Sg="//www.googletagmanager.com/a?id="+Sd.C+"&cv=301",Tg={},Ug={},Vg=function(){var a=O.sequence||1;O.sequence=a+1;return a};var Wg={},Xg=new Na,Yg={},Zg={},bh={name:"dataLayer",set:function(a,b){F(ib(a,b),Yg);$g()},get:function(a){return ah(a,2)},reset:function(){Xg=new Na;Yg={};$g()}},ah=function(a,b){return 2!=b?Xg.get(a):ch(a.split("."))},ch=function(a){for(var b=Yg,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b},dh=function(a,b){Zg.hasOwnProperty(a)||(Xg.set(a,b),F(ib(a,b),Yg),$g())},$g=function(a){Pa(Zg,function(b,c){Xg.set(b,c);F(ib(b,void 0),Yg);F(ib(b,c),Yg);a&&delete Zg[b]})},
eh=function(a,b,c){Wg[a]=Wg[a]||{};var d=1!==c?ch(b.split(".")):Xg.get(b);"array"===ub(d)||"object"===ub(d)?Wg[a][b]=F(d):Wg[a][b]=d},fh=function(a,b){if(Wg[a])return Wg[a][b]},gh=function(a,b){Wg[a]&&delete Wg[a][b]};var jh={},kh=function(a,b){if(D._gtmexpgrp&&D._gtmexpgrp.hasOwnProperty(a))return D._gtmexpgrp[a];void 0===jh[a]&&(jh[a]=Math.floor(Math.random()*b));return jh[a]};var lh=/:[0-9]+$/,mh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},ph=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=nh(a.protocol)||nh(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||D.location.hostname).replace(lh,"").toLowerCase());return oh(a,b,c,d,e)},oh=function(a,b,c,d,e){var f,g=nh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=qh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(lh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||hf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=A(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=mh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},nh=function(a){return a?a.replace(":",
"").toLowerCase():""},qh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},rh=function(a){var b=L.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||hf("TAGGING",1),c="/"+c);var d=b.hostname.replace(lh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},sh=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=rh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function th(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var vh=function(a,b,c,d){return uh(d)?th(a,String(b||document.cookie),c):[]},yh=function(a,b,c,d,e){if(uh(e)){var f=wh(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=xh(f,function(g){return g.mc},b);if(1===f.length)return f[0].id;f=xh(f,function(g){return g.Fb},c);return f[0]?f[0].id:void 0}}};function zh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=vh(b,f,!1,d).indexOf(c)}
var Dh=function(a,b,c,d){function e(x,y,w){if(null==w)return delete h[y],x;h[y]=w;return x+"; "+y+"="+w}function f(x,y){if(null==y)return delete h[y],x;h[y]=!0;return x+"; "+y}if(!uh(c.Ka))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Ah(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Jh);g=e(g,"samesite",
c.di);c.gi&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=Bh(),r=void 0,t=!1,q=0;q<p.length;++q){var u="none"!==p[q]?p[q]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(x){r=x;continue}t=!0;if(!Ch(u,c.path)&&zh(v,a,b,c.Ka))return 0}if(r&&!t)throw r;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return Ch(m,c.path)?1:zh(g,a,b,c.Ka)?0:1},Eh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Dh(a,b,c)};
function xh(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function wh(a,b,c){for(var d=[],e=vh(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),mc:1*l[0]||1,Fb:1*l[1]||1}))}}return d}
var Ah=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Fh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Gh=/(^|\.)doubleclick\.net$/i,Ch=function(a,b){return Gh.test(document.location.hostname)||"/"===b&&Fh.test(a)},Bh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Gh.test(e)||Fh.test(e)||a.push("none");
return a},uh=function(a){if(!Yf("gtag_cs_api")||!a||!hg())return!0;if(!gg(a))return!1;var b=fg(a);return null==b?!0:!!b};var Hh=function(){for(var a=Hf.userAgent+(L.cookie||"")+(L.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Wa()/1E3)].join(".")},Kh=function(a,b,c,d,e){var f=Ih(b);return yh(a,f,Jh(c),d,e)},Lh=function(a,b,c,d){var e=""+Ih(c),f=Jh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Ih=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Jh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Mh(a,b,c){var d,e=a.Eb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Wa())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Nh=["1"],Oh={},Sh=function(a){var b=Ph(a.prefix);Oh[b]||Qh(b,a.path,a.domain)||(Rh(b,Hh(),a),Qh(b,a.path,a.domain))};function Rh(a,b,c){var d=Lh(b,"1",c.domain,c.path),e=Mh(c);e.Ka="ad_storage";Eh(a,d,e)}function Qh(a,b,c){var d=Kh(a,b,c,Nh,"ad_storage");d&&(Oh[a]=d);return d}function Ph(a){return(a||"_gcl")+"_au"};function Th(){for(var a=Uh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Vh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Uh,Wh;function Xh(a){Uh=Uh||Vh();Wh=Wh||Th();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,p=(g&15)<<2|h>>6,r=h&63;e||(r=64,d||(p=64));b.push(Uh[l],Uh[m],Uh[p],Uh[r])}return b.join("")}
function Yh(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Wh[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Uh=Uh||Vh();Wh=Wh||Th();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Zh;var ci=function(){var a=$h,b=ai,c=bi(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Pf(L,"mousedown",d);Pf(L,"keyup",d);Pf(L,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},di=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};bi().decorators.push(f)},ei=function(a,b,c){for(var d=bi().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==L.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[r])||p&&0<=l[r].indexOf(m)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&Za(e,g.callback())}}return e},bi=function(){var a=Jf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var fi=/(.*?)\*(.*?)\*(.*)/,gi=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,hi=/^(?:www\.|m\.|amp\.)+/,ii=/([^?#]+)(\?[^#]*)?(#.*)?/;function ji(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var li=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Xh(String(d))))}var e=b.join("*");return["1",ki(e),e].join("*")},ki=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Zh)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Zh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Zh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},ni=function(){return function(a){var b=rh(D.location.href),c=b.search.replace("?",""),d=mh(c,"_gl",!1,!0)||"";a.query=mi(d)||{};var e=ph(b,"fragment").match(ji("_gl"));a.fragment=mi(e&&e[3]||"")||{}}},oi=function(a){var b=ni(),c=bi();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Za(d,e.query),a&&Za(d,e.fragment));return d},
mi=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=fi.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=0;p<b;++p)if(m===ki(h,p)){l=!0;break a}l=!1}if(l){for(var r={},t=h?h.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=Yh(t[q+1]);return r}}}}catch(u){}};
function pi(a,b,c,d){function e(p){var r=p,t=ji(a).exec(r),q=r;if(t){var u=t[2],v=t[4];q=t[1];v&&(q=q+u+v)}p=q;var x=p.charAt(p.length-1);p&&"&"!==x&&(p+="&");return p+m}d=void 0===d?!1:d;var f=ii.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function qi(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=ei(b,1,c),e=ei(b,2,c),f=ei(b,3,c);if(db(d)){var g=li(d);c?ri("_gl",g,a):si("_gl",g,a,!1)}if(!c&&db(e)){var h=li(e);si("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){si(m,p,r,void 0);break a}if("form"===r.tagName.toLowerCase()){ri(m,p,r);break a}}"string"==typeof r&&pi(m,p,r,void 0)}}
function si(a,b,c,d){if(c.href){var e=pi(a,b,c.href,void 0===d?!1:d);uf.test(e)&&(c.href=e)}}
function ri(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=L.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=pi(a,b,c.action);uf.test(m)&&(c.action=m)}}}
var $h=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||qi(e,e.hostname)}}catch(g){}},ai=function(a){try{if(a.action){var b=ph(rh(a.action),"host");qi(a,b)}}catch(c){}},ti=function(a,b,c,d){ci();di(a,b,"fragment"===c?2:1,!!d,!1)},ui=function(a,b){ci();di(a,[oh(D.location,"host",!0)],b,!0,!0)},vi=function(){var a=L.location.hostname,b=gi.exec(L.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(hi,""),l=e.replace(hi,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},wi=function(a,b){return!1===a?!1:a||b||vi()};var xi=/^\w+$/,yi=/^[\w-]+$/,zi=/^~?[\w-]+$/,Ai={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Bi=function(){if(!Yf("gtag_cs_api")||!hg())return!0;var a=fg("ad_storage");return null==a?!0:!!a},Ci=function(a,b){gg("ad_storage")?Bi()?a():kg(a,"ad_storage"):b?hf("TAGGING",3):jg(function(){Ci(a,!0)},["ad_storage"])},Fi=function(a){var b=[];if(!L.cookie)return b;var c=vh(a,L.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Di(c[d]);e&&-1===A(b,e)&&b.push(e)}return Ei(b)};
function Gi(a){return a&&"string"==typeof a&&a.match(xi)?a:"_gcl"}
var Ii=function(){var a=rh(D.location.href),b=ph(a,"query",!1,void 0,"gclid"),c=ph(a,"query",!1,void 0,"gclsrc"),d=ph(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||mh(e,"gclid",!1,void 0);c=c||mh(e,"gclsrc",!1,void 0)}return Hi(b,c,d)},Hi=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(yi))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Yf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Ki=function(a){var b=Ii();Ci(function(){Ji(b,a)})};
function Ji(a,b,c){function d(l,m){var p=Li(l,e);p&&Eh(p,m,f)}b=b||{};var e=Gi(b.prefix);c=c||Wa();var f=Mh(b,c,!0);f.Ka="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.Vi?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var Ni=function(a,b){var c=oi(!0);Ci(function(){for(var d=Gi(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Ai[f]){var g=Li(f,d),h=c[g];if(h){var l=Math.min(Mi(h),Wa()),m;b:{for(var p=l,r=vh(g,L.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(Mi(r[t])>p){m=!0;break b}m=!1}if(!m){var q=Mh(b,l,!0);q.Ka="ad_storage";Eh(g,h,q)}}}}Ji(Hi(c.gclid,c.gclsrc),b)})},Li=function(a,b){var c=Ai[a];if(void 0!==c)return b+c},Mi=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Di(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Oi=function(a,b,c,d,e){if(Ka(b)){var f=Gi(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Li(a[l],f);if(m){var p=vh(m,L.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};Ci(function(){ti(g,b,c,d)})}},Ei=function(a){return a.filter(function(b){return zi.test(b)})},Pi=function(a,b){for(var c=Gi(b.prefix),d={},e=0;e<a.length;e++)Ai[a[e]]&&(d[a[e]]=Ai[a[e]]);Ci(function(){Pa(d,function(f,g){var h=vh(c+g,L.cookie,void 0,"ad_storage");if(h.length){var l=h[0],m=Mi(l),
p={};p[f]=[Di(l)];Ji(p,b,m)}})})};function Qi(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Ri=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(hg()){var c=Ii();if(Qi(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);ui(function(){return d},3);ui(function(){var e={};return e._up="1",e},1)}}},Si=function(){var a;if(Bi()){for(var b=[],c=L.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Md:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].Md]||(g[b[h].Md]=[]),g[b[h].Md].push({timestamp:l[1],jh:l[2]}))}a=g}else a={};return a};var Ti=/^\d+\.fls\.doubleclick\.net$/;function Ui(a,b){gg(I.s)?og(I.s)?a():kg(a,I.s):b?kf(42):qg(function(){Ui(a,!0)},[I.s])}function Vi(a){var b=rh(D.location.href),c=ph(b,"host",!1);if(c&&c.match(Ti)){var d=ph(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Wi(a,b,c){if("aw"==a||"dc"==a){var d=Vi("gcl"+a);if(d)return d.split(".")}var e=Gi(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!og(I.s)&&c,g;g=Ii()[a]||[];if(0<g.length)return f?["0"]:g}var h=Li(a,e);return h?Fi(h):[]}
var Xi=function(a){var b=Vi("gac");if(b)return!og(I.s)&&a?"0":decodeURIComponent(b);var c=Si(),d=[];Pa(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].jh);g=Ei(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Yi=function(a,b){var c=Ii().dc||[];Ui(function(){Sh(b);var d=Oh[Ph(b.prefix)],e=!1;if(d&&0<c.length){var f=O.joined_au=O.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;Vf(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var m=Ph(b.prefix),p=Oh[m];p&&Rh(m,p,b)}})};var Zi=/[A-Z]+/,$i=/\s/,aj=function(a){if(n(a)&&(a=Va(a),!$i.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Zi.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],D:d}}}}},cj=function(a){for(var b={},c=0;c<a.length;++c){var d=aj(a[c]);d&&(b[d.id]=d)}bj(b);var e=[];Pa(b,function(f,g){e.push(g)});return e};
function bj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.D[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var dj=function(){var a=!1;return a};var fj=function(a,b,c,d){return(2===ej()||d||"http:"!=D.location.protocol?a:b)+c},ej=function(){var a=Mf(),b;if(1===a)a:{var c=Og;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=L.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var tj=function(a){return og(I.s)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=sh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},uj=function(){var a;if(!(a=Pg)){var b;if(!0===D._gtmdgs)b=!0;else{var c=Hf&&Hf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Sa("5");return kh(1,100)<d?kh(2,2):-1},vj=function(a){var b;return b};var wj=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),xj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},yj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},zj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Bj=function(a){var b;ah("gtm.allowlist")&&kf(52);b=ah("gtm.allowlist");b||(b=ah("gtm.whitelist"));b&&kf(9);
var c=b&&eb(Ua(b),xj),d;ah("gtm.blocklist")&&kf(51);d=ah("gtm.blocklist");d||(d=ah("gtm.blacklist"));d||(d=ah("tagTypeBlacklist"))&&kf(3);d?kf(8):d=[];Aj()&&(d=Ua(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=A(Ua(d),"google")&&kf(2);var e=
d&&eb(Ua(d),yj),f={};return function(g){var h=g&&g[Dd.Ha];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Ug[h]||[],m=a(h,l);if(b){var p;if(p=m)a:{if(0>A(c,h))if(l&&0<l.length)for(var r=0;r<l.length;r++){if(0>A(c,l[r])){kf(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var t=!1;if(d){var q=0<=A(e,h);if(q)t=q;else{var u=Oa(e,l||[]);u&&kf(10);t=u}}var v=!m||t;v||!(0<=A(l,"sandboxedScripts"))||c&&-1!==A(c,"sandboxedScripts")||(v=Oa(e,zj));return f[h]=v}},Aj=
function(){return wj.test(D.location&&D.location.hostname)};var Cj={active:!0,isAllowed:function(){return!0}},Dj=function(a){var b=O.zones;return b?b.checkState(Sd.C,a):Cj},Ej=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var Fj=function(){},Gj=function(){};var Hj=!1,Ij=0,Jj=[];function Kj(a){if(!Hj){var b=L.createEventObject,c="complete"==L.readyState,d="interactive"==L.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Hj=!0;for(var e=0;e<Jj.length;e++)N(Jj[e])}Jj.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function Lj(){if(!Hj&&140>Ij){Ij++;try{L.documentElement.doScroll("left"),Kj()}catch(a){D.setTimeout(Lj,50)}}}var Mj=function(a){Hj?a():Jj.push(a)};var Nj={},Oj={},Pj=function(a,b,c,d){if(!Oj[a]||Lg[b]||"__zone"===b)return-1;var e={};wb(d)&&(e=F(d,e));e.id=c;e.status="timeout";return Oj[a].tags.push(e)-1},Qj=function(a,b,c,d){if(Oj[a]){var e=Oj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Rj(a){for(var b=Nj[a]||[],c=0;c<b.length;c++)b[c]();Nj[a]={push:function(d){d(Sd.C,Oj[a])}}}
var Uj=function(a,b,c){Oj[a]={tags:[]};Ia(b)&&Sj(a,b);c&&D.setTimeout(function(){return Rj(a)},Number(c));return Tj(a)},Sj=function(a,b){Nj[a]=Nj[a]||[];Nj[a].push(Ya(function(){return N(function(){b(Sd.C,Oj[a])})}))};function Tj(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ya(function(){b++;d&&b>=c&&Rj(a)})},Gg:function(){d=!0;b>=c&&Rj(a)}}};var Vj=function(){function a(d){return!Ja(d)||0>d?0:d}if(!O._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=Ja(bh.get("gtm.start"))?bh.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Rg-b)}}};var Zj={},ak=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},bk=!1;
var ck=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||kf(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}Vj();return D[b]},dk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=ak();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},ek=function(a){};
var gk=function(a){},fk=function(){return D.GoogleAnalyticsObject||"ga"},hk=function(a,b){return function(){var c=ak(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var mk=function(){return"&tc="+rd.filter(function(a){return a}).length},pk=function(){2022<=nk().length&&ok()},rk=function(){qk||(qk=D.setTimeout(ok,500))},ok=function(){qk&&(D.clearTimeout(qk),qk=void 0);void 0===sk||tk[sk]&&!uk&&!vk||(wk[sk]||xk.Ah()||0>=yk--?(kf(1),wk[sk]=!0):(xk.$h(),Of(nk()),tk[sk]=!0,zk=Ak=Bk=vk=uk=""))},nk=function(){var a=sk;if(void 0===a)return"";var b=jf("GTM"),c=jf("TAGGING");return[Ck,tk[a]?"":"&es=1",Dk[a],b?"&u="+b:"",c?"&ut="+c:"",mk(),uk,vk,Bk?Bk:"",Ak,zk,"&z=0"].join("")},
Ek=function(){return[Sg,"&v=3&t=t","&pid="+Ma(),"&rv="+Sd.cc].join("")},Fk="0.005000">Math.random(),Ck=Ek(),Gk=function(){Ck=Ek()},tk={},uk="",vk="",zk="",Ak="",Bk="",sk=void 0,Dk={},wk={},qk=void 0,xk=function(a,b){var c=0,d=0;return{Ah:function(){if(c<a)return!1;Wa()-d>=b&&(c=0);return c>=a},$h:function(){Wa()-d>=b&&(c=0);c++;d=Wa()}}}(2,1E3),yk=1E3,Hk=function(a,b,c){if(Fk&&!wk[a]&&b){a!==sk&&(ok(),sk=a);var d,e=String(b[Dd.Ha]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;uk=uk?uk+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(td[g]?"1":"2")+d;zk=zk?zk+"."+h:"&ti="+h;rk();pk()}},Ik=function(a,b,c){if(Fk&&!wk[a]){a!==sk&&(ok(),sk=a);var d=c+b;vk=vk?vk+"."+d:"&epr="+d;rk();pk()}},Jk=function(a,b,c){};
var Kk=function(){return!1},Lk=function(){var a={};return function(b,c,d){}};function Mk(a,b,c,d){var e=rd[a],f=Nk(a,b,c,d);if(!f)return null;var g=zd(e[Dd.Ne],c,[]);if(g&&g.length){var h=g[0];f=Mk(h.index,{J:f,I:1===h.Ze?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Nk(a,b,c,d){function e(){if(f[Dd.og])h();else{var x=Ad(f,c,[]);var B=Pj(c.id,String(f[Dd.Ha]),Number(f[Dd.Oe]),x[Dd.pg]),z=!1;x.vtp_gtmOnSuccess=function(){if(!z){z=!0;var G=Wa()-E;Hk(c.id,rd[a],"5");Qj(c.id,B,"success",
G);g()}};x.vtp_gtmOnFailure=function(){if(!z){z=!0;var G=Wa()-E;Hk(c.id,rd[a],"6");Qj(c.id,B,"failure",G);h()}};x.vtp_gtmTagId=f.tag_id;x.vtp_gtmEventId=c.id;Hk(c.id,f,"1");var C=function(){var G=Wa()-E;Hk(c.id,f,"7");Qj(c.id,B,"exception",G);z||(z=!0,h())};var E=Wa();try{yd(x,c)}catch(G){C(G)}}}var f=rd[a],g=b.J,h=b.I,l=b.terminate;if(c.td(f))return null;var m=zd(f[Dd.Pe],c,[]);if(m&&m.length){var p=m[0],r=Mk(p.index,{J:g,I:h,terminate:l},c,d);if(!r)return null;g=r;h=2===p.Ze?l:r}if(f[Dd.Je]||f[Dd.rg]){var t=f[Dd.Je]?sd:c.mi,q=g,u=h;if(!t[a]){e=Ya(e);
var v=Ok(a,t,e);g=v.J;h=v.I}return function(){t[a](q,u)}}return e}function Ok(a,b,c){var d=[],e=[];b[a]=Pk(d,e,c);return{J:function(){b[a]=Qk;for(var f=0;f<d.length;f++)d[f]()},I:function(){b[a]=Rk;for(var f=0;f<e.length;f++)e[f]()}}}function Pk(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Qk(a){a()}function Rk(a,b){b()};var Uk=function(a,b,c){for(var d=[],e=0;e<rd.length;e++)if(a[e]){var f=rd[e];var g=c.add();try{var h=Mk(e,{J:g,I:g,terminate:g},b,e);h?d.push({uf:e,nf:Bd(f),oc:h}):(Sk(e,b),g())}catch(m){g()}}c.Gg();d.sort(Tk);for(var l=0;l<d.length;l++)d[l].oc();return 0<d.length};function Tk(a,b){var c,d=b.nf,e=a.nf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.uf,h=b.uf;f=g>h?1:g<h?-1:0}return f}
function Sk(a,b){if(!Fk)return;var c=function(d){var e=b.td(rd[d])?"3":"4",f=zd(rd[d][Dd.Ne],b,[]);f&&f.length&&c(f[0].index);Hk(b.id,rd[d],e);var g=zd(rd[d][Dd.Pe],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Vk=!1,$k=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Vk)return!1;Vk=!0}var d=Dj(b),e=!1;if(!d.active){var f=!0;if("gtm.js"===c){f=!1,e=!0,d=Dj(Number.MAX_SAFE_INTEGER);}if(f)return!1}Fk&&!wk[b]&&sk!==b&&(ok(),sk=b,zk=uk="",Dk[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,rk());
var g={id:b,name:c,td:Bj(d.isAllowed),mi:[],ff:function(){kf(6)},Te:Wk(b)},h=Uj(b,a.eventCallback,a.eventTimeout);Xk(b);var l=Nd(g);e&&(l=Yk(l));var m=Uk(l,g,h);"gtm.js"!==c&&"gtm.sync"!==c||gk(Sd.C);switch(c){case "gtm.init":kf(19),m&&kf(20)}return Zk(l,
m)};function Wk(a){return function(b){Fk&&(Ab(b)||Jk(a,"input",b))}}function Xk(a){eh(a,"event",1);eh(a,"ecommerce",1);eh(a,"gtm");}
function Yk(a){var b=[];for(var c=0;c<a.length;c++)a[c]&&Kg[String(rd[c][Dd.Ha])]&&(b[c]=!0);return b}function Zk(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&rd[c]&&!Lg[String(rd[c][Dd.Ha])])return!0;return!1}function al(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return rh(""+c+b).href}}function bl(a,b){return cl()?al(a,b):void 0}function cl(){var a=!1;return a};var dl=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.J=function(){};this.I=function(){};this.eventId=void 0},el=function(a){var b=new dl;b.eventModel=a;return b},fl=function(a,b){a.targetConfig=b;return a},gl=function(a,b){a.containerConfig=b;return a},hl=function(a,b){a.a=b;return a},il=function(a,b){a.globalConfig=b;return a},jl=function(a,b){a.J=b;return a},kl=function(a,b){a.I=b;return a};
dl.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var ll=function(a){function b(e){Pa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Pa(c,function(e){d.push(e)});return d};var ml;if(3===Sd.cc.length)ml="g";else{var nl="G";ml=nl}
var ol={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:ml,OPT:"o"},pl=function(a){var b=Sd.C.split("-"),c=b[0].toUpperCase(),d=ol[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Sd.cc.length){var g="w";f="2"+g}else f="";return f+d+Sd.cc+e};var ql=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var rl=function(){return yf("iPhone")&&!yf("iPod")&&!yf("iPad")};yf("Opera");yf("Trident")||yf("MSIE");yf("Edge");!yf("Gecko")||-1!=vf.toLowerCase().indexOf("webkit")&&!yf("Edge")||yf("Trident")||yf("MSIE")||yf("Edge");-1!=vf.toLowerCase().indexOf("webkit")&&!yf("Edge")&&yf("Mobile");yf("Macintosh");yf("Windows");yf("Linux")||yf("CrOS");var sl=ma.navigator||null;sl&&(sl.appVersion||"").indexOf("X11");yf("Android");rl();yf("iPad");yf("iPod");rl()||yf("iPad")||yf("iPod");vf.toLowerCase().indexOf("kaios");var tl=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var ul=function(){};var vl=function(a){return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies||void 0!==a.listenerId&&"number"!==typeof a.listenerId||void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},wl=function(a,b){this.i=a;this.a=null;this.B={};this.P=0;this.F=void 0===b?500:b;this.m=null};la(wl,ul);var yl=function(a){return"function"===typeof a.i.__tcfapi||null!=xl(a)};
wl.prototype.addEventListener=function(a){var b={},c=pf(function(){return a(b)}),d=0;-1!==this.F&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.F));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=vl(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{zl(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};wl.prototype.removeEventListener=function(a){a&&a.listenerId&&zl(this,"removeEventListener",null,a.listenerId)};
var Bl=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=Al(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:m&&Al(a.purpose.consents,b)}else l=Yf("ticdac");else l=1===h?a.purpose&&a.vendor?
Al(a.purpose.legitimateInterests,b)&&Al(a.vendor.legitimateInterests,void 0===d?"755":d):Yf("ticdac"):!0;return l},Al=function(a,b){return!(!a||!a[b])},zl=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(xl(a)){Cl(a);var f=++a.P;a.B[f]=c;if(a.a){var g={};a.a.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},xl=function(a){if(a.a)return a.a;a.a=tl(a.i,"__tcfapiLocator");return a.a},Cl=function(a){a.m||
(a.m=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.B[c.callId](c.returnValue,c.success)}catch(e){}},ql(a.i,a.m))};var Dl={1:0,3:0,4:0,7:3,9:3,10:3};function El(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var Fl=El("",550),Gl=El("",500);function Hl(){var a=O.tcf||{};return O.tcf=a}
var Il=function(a,b){this.m=a;this.a=b;this.i=Wa();},Jl=function(a){},Kl=function(a){},Ql=function(){var a=Hl(),b=new wl(D,3E3),c=new Il(b,a);if((Ll()?!0===D.gtag_enable_tcf_support:!1!==D.gtag_enable_tcf_support)&&!a.active&&("function"===typeof D.__tcfapi||yl(b))){a.active=!0;a.Gb={};Ml();var d=setTimeout(function(){Nl(a);Ol(a);d=null},Gl);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Nl(a),Ol(a),Jl(c);else{var f;if(!1===e.gdprApplies)f=Pl(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in Dl)if(Dl.hasOwnProperty(h))if("1"===h){var l=e,m=!0;m=void 0===m?!1:m;var p;var r=l;!1===r.gdprApplies?p=!0:(void 0===r.internalErrorState&&(r.internalErrorState=vl(r)),p="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===r.eventStatus)?!0:!1);g["1"]=p?!1===l.gdprApplies||"tcunavailable"===l.tcString||
Yf("tugac")&&void 0===l.gdprApplies&&!m||Yf("tntac")&&("string"!==typeof l.tcString||!l.tcString.length)?!0:Bl(l,"1",0):!1}else g[h]=Bl(e,h,Dl[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.Gb=f,Ol(a),Jl(c))}}),Kl(c)}catch(e){d&&(clearTimeout(d),d=null),Nl(a),Ol(a)}}};function Nl(a){a.type="e";a.tcString="tcunavailable";a.Gb=Pl()}function Ml(){var a={};mg((a.ad_storage="denied",a.wait_for_update=Fl,a))}
var Ll=function(){var a=!1;a=!0;return a};function Pl(){var a={},b;for(b in Dl)Dl.hasOwnProperty(b)&&(a[b]=!0);return a}function Ol(a){var b={};ng((b.ad_storage=a.Gb["1"]?"granted":"denied",b))}
var Rl=function(){var a=Hl();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Sl=function(){var a=Hl();return a.active?a.tcString||"":""},Tl=function(a){if(!Dl.hasOwnProperty(String(a)))return!0;var b=Hl();return b.active&&b.Gb?!!b.Gb[String(a)]:!0};function Ul(a,b,c){function d(r){var t;O.reported_gclid||(O.reported_gclid={});t=O.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var u=[],v=function(z,C){C&&u.push(z+"="+encodeURIComponent(C))},x="https://www.google.com";if(hg()){var y=og(I.s);v("gcs",pg());r&&v("gcu","1");v("rnd",p);if((!f||g&&"aw.ds"!==g)&&og(I.s)){var w=Fi("_gcl_aw");v("gclaw",w.join("."))}v("url",String(D.location).split(/[?#]/)[0]);v("dclid",Vl(b,h));!y&&b&&(x="https://pagead2.googlesyndication.com")}
v("gdpr_consent",Sl());"1"===oi(!1)._up&&v("gtm_up","1");v("gclid",Vl(b,f));v("gclsrc",g);v("gtm",pl(!c));var B=x+"/pagead/landing?"+u.join("&");Vf(B)}}var e=Ii(),f=e.gclid||"",g=e.gclsrc,h=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),m=hg();if(l||m){var p=""+Hh();m?qg(function(){d();og(I.s)||kg(function(r){return d(!0,r.Ue)},I.s)},[I.s]):d()}}function Vl(a,b){var c=a&&!og(I.s);return b&&c?"0":b}var Wl=function(a){if(L.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,
null))}return!1};var em=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),gm=["SCRIPT","IMG","SVG","PATH","BR"],hm=["BR"];function im(a){var b;if(a===L.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=im(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function jm(){var a;var b=[],c=L.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=gm.indexOf(f.tagName.toUpperCase()))){for(var g=!1,h=0;h<f.childElementCount&&1E4>h;h++)if(!(0<=hm.indexOf(f.children[h].tagName.toUpperCase()))){g=!0;break}g||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,m=l.elements,p=[],r=0;r<m.length;r++){var t=m[r],q=t.textContent;t.value&&(q=t.value);if(q){var u=q.match(em);if(u){var v=
u[0],x;if(D.location){var y=oh(D.location,"host",!0);x=0<=v.toLowerCase().indexOf(y)}else x=!1;x||p.push({element:t,Ui:v})}}}for(var w=[],B=10<p.length?"3":l.status,z=0;z<p.length&&10>z;z++){var C=p[z].element;w.push({querySelector:im(C),tagName:C.tagName,isVisible:!Wl(C),type:1})}return{elements:w,status:B}}var Sm=function(){var a=!0;Tl(7)&&Tl(9)&&Tl(10)||(a=!1);var b=!0;b=!1;b&&!Rm()&&(a=!1);return a},Rm=function(){var a=!0;Tl(3)&&Tl(4)||(a=!1);return a};function on(){var a=O;return a.gcq=a.gcq||new pn}
var qn=function(a,b,c){on().register(a,b,c)},rn=function(a,b,c,d){on().push("event",[b,a],c,d)},sn=function(a,b){on().push("config",[a],b)},tn=function(a,b,c){on().push("get",[a,b],c)},un={},vn=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},wn=function(a,b,c,d,e){this.type=a;this.m=b;this.ca=c||"";this.a=d;this.i=e},pn=function(){this.m={};this.i={};this.a=[]},xn=function(a,b){var c=aj(b);return a.m[c.containerId]=a.m[c.containerId]||new vn},
yn=function(a,b,c){if(b){var d=aj(b);if(d&&1===xn(a,b).status){xn(a,b).status=2;var e={};Fk&&(e.timeoutId=D.setTimeout(function(){kf(38);rk()},3E3));a.push("require",[e],d.containerId);un[d.containerId]=Wa();if(dj()){}else{var g="/gtag/js?id="+
encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=D.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=bl(c,g)||h;Lf(l)}}}},zn=function(a,b,c,d){if(d.ca){var e=xn(a,d.ca),f=e.m;if(f){var g=F(c),h=F(e.targetConfig[d.ca]),l=F(e.containerConfig),m=F(e.i),p=F(a.i),r=ah("gtm.uniqueEventId"),t=aj(d.ca).prefix,q=kl(jl(il(hl(gl(fl(el(g),h),l),m),p),function(){Ik(r,t,"2");}),function(){
Ik(r,t,"3");});try{Ik(r,t,"1");f(d.ca,b,d.m,q)}catch(u){Ik(r,t,"4");}}}};
pn.prototype.register=function(a,b,c){if(3!==xn(this,a).status){xn(this,a).m=b;xn(this,a).status=3;c&&(xn(this,a).i=c);var d=aj(a),e=un[d.containerId];if(void 0!==e){var f=O[d.containerId].bootstrap,g=d.prefix.toUpperCase();O[d.containerId]._spx&&(g=g.toLowerCase());var h=ah("gtm.uniqueEventId"),l=g,m=Wa()-f;if(Fk&&!wk[h]){h!==sk&&(ok(),sk=h);var p=l+"."+Math.floor(f-e)+"."+Math.floor(m);Ak=Ak?Ak+","+p:"&cl="+p}delete un[d.containerId]}this.flush()}};
pn.prototype.push=function(a,b,c,d){var e=Math.floor(Wa()/1E3);yn(this,c,b[0][I.Ga]||this.i[I.Ga]);this.a.push(new wn(a,e,c,b,d));d||this.flush()};
pn.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==xn(this,c.ca).status&&!a)return;Fk&&D.clearTimeout(c.a[0].timeoutId);break;case "set":Pa(c.a[0],function(p,r){F(ib(p,r),b.i)});break;case "config":var d=c.a[0],e=!!d[I.Yb];delete d[I.Yb];var f=xn(this,c.ca),g=aj(c.ca),h=g.containerId===g.id;e||(h?f.containerConfig={}:f.targetConfig[c.ca]={});f.a&&e||zn(this,I.ka,d,c);f.a=!0;delete d[I.vb];h?F(d,f.containerConfig):
F(d,f.targetConfig[c.ca]);break;case "event":zn(this,c.a[1],c.a[0],c);break;case "get":var l={},m=(l[I.xa]=c.a[0],l[I.wa]=c.a[1],l);zn(this,I.Da,m,c);}this.a.shift()}};var An=function(a,b,c){};var Bn=function(a,b,c,d){};var Cn=function(a){};var Dn=function(a,b,c){};var En=function(a,b){
return!0};var Fn=function(a,b){var c;return c};var Gn=function(a){};var Hn=!1,In=[];function Jn(){if(!Hn){Hn=!0;for(var a=0;a<In.length;a++)N(In[a])}}var Kn=function(a){Hn?N(a):In.push(a)};var Ln=function(a){H(this.i.a,["listener:!Fn"],arguments);Se(this,"process_dom_events","window","load");Kn(yb(a))};var Mn=function(a,b){var c;var d=!1;var e=xb(c,this.m,d);void 0===e&&void 0!==c&&kf(45);return e};var Nn=function(a){var b;var f=!1;var g=xb(b,this.m,f);void 0===g&&void 0!==b&&kf(45);return g};var On=function(a,b){var c=null,d=!1;H(this.i.a,["functionPath:!string","arrayPath:!string"],arguments);Se(this,"access_globals","readwrite",a);Se(this,"access_globals","readwrite",b);var e=[];
var f=a.split("."),g=gb(f,e),h=f[f.length-1];if(void 0===g)throw Error("Path "+a+" does not exist.");var l=g[h];if(l&&!Ia(l))return null;if(l)return xb(l,this.m,d);var m;l=function(){if(!Ia(m.push))throw Error("Object at "+b+" in window is not an array.");m.push.call(m,arguments)};g[h]=l;var p=b.split("."),r=gb(p,e),t=p[p.length-1];if(void 0===r)throw Error("Path "+p+" does not exist.");m=r[t];void 0===m&&(m=[],r[t]=m);c=function(){l.apply(l,Array.prototype.slice.call(arguments,0))};
return xb(c,this.m,d)};var Pn=function(a){var b;var h=!1;return xb(b,this.m,h)};var Qn=function(a){var b;return b};var Rn=function(a,b){b=void 0===b?!0:b;var c;return c};var Sn=function(a){var b=null;return b};var Tn=function(a,b){var c;return c};var Un=function(a,b){var c;return c};var Vn=function(a){var b="";return b};var Wn=function(a){var b="";return b};var df=function(){Se(this,"get_user_agent");return D.navigator.userAgent};var Xn=function(a,b){};var Yn={},Zn=function(a,b,c,d){H(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Se(this,"inject_script",a);var e=this.m,f=function(){b instanceof kb&&b.La(e)},g=function(){c instanceof kb&&c.La(e)};if(!d){Lf(a,f,g);return}var h=d;Yn[h]?(Yn[h].onSuccess.push(f),Yn[h].onFailure.push(g)):(Yn[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Yn[h].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(p){N(p);
return 0}},g=function(){for(var l=Yn[h].onFailure,m=0;m<l.length;m++)N(l[m]);Yn[h]=null},Lf(a,f,g));};var $n=function(){return!1},ao={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var bo=function(){};var co=function(a,b){var c=!1;return c};var eo=function(){var a="";return a};var fo=function(){var a="";return a};var go=function(a,b,c){};var ho=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var io=function(a,b,c){H(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);Se(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=D,g;for(g=0;g<e.length-1;g++){f=f[e[g]];if(void 0===f)return!1;}if(void 0===
f[e[g]]||c)return f[e[g]]=yb(b,this.m,d),!0;return!1};var jo=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var ko=function(a,b,c){var d=this;};var lo={},mo={};lo.getItem=function(a){var b=null;return b};
lo.setItem=function(a,b){};
lo.removeItem=function(a){};lo.clear=function(){};var no=function(a){var b;return b};var Pc=function(){var a=new cf;dj()?(a.add("injectHiddenIframe",Ha),a.add("injectScript",Ha)):(a.add("injectHiddenIframe",Xn),a.add("injectScript",Zn));var b=go;a.add("Math",Le());a.add("TestHelper",ff());a.add("addEventCallback",Cn);a.add("aliasInWindow",En);a.add("assertApi",He);a.add("assertThat",Ie);a.add("callInWindow",
Fn);a.add("callLater",Gn);a.add("copyFromDataLayer",Mn);a.add("copyFromWindow",Nn);a.add("createArgumentsQueue",On);a.add("createQueue",Pn);a.add("decodeUri",Me);a.add("decodeUriComponent",Ne);a.add("encodeUri",Oe);a.add("encodeUriComponent",Pe);a.add("fail",Qe);a.add("fromBase64",Qn,!("atob"in D));a.add("generateRandom",Re);a.add("getContainerVersion",Te);a.add("getCookieValues",Rn);a.add("getQueryParameters",Tn);a.add("getReferrerQueryParameters",Un);a.add("getReferrerUrl",Vn);a.add("getTimestamp",
Ue);a.add("getTimestampMillis",Ue);a.add("getType",Ve);a.add("getUrl",Wn);a.add("localStorage",ao,!$n());a.add("logToConsole",bo);a.add("makeInteger",Xe);a.add("makeNumber",Ye);a.add("makeString",Ze);a.add("makeTableMap",$e);a.add("mock",bf);a.add("queryPermission",co);a.add("readCharacterSet",eo);a.add("readTitle",fo);a.add("sendPixel",b);a.add("setCookie",ho);a.add("setInWindow",io);a.add("sha256",ko);a.add("templateStorage",lo);a.add("toBase64",no,!("btoa"in D));a.add("JSON",We(function(c){var d=this.m.a;d&&d.log.call(this,"error",c)}));
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.i.hasOwnProperty(c))b:{var f=this.m.a;if(f){var g=f.Ab();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.i.hasOwnProperty(c)?a.i[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var Nc,Wd;
function oo(){var a=data.runtime||[],b=data.runtime_lines;Nc=new Lc;po();nd=function(e,f,g){qo(f);var h=new ob;Pa(f,function(q,u){var v=xb(u);void 0===v&&void 0!==u&&kf(44);h.set(q,v)});Nc.a.a.B=Jd();var l={Hg:Xd(e),eventId:void 0!==g?g.id:void 0,Ab:function(){return e},log:function(){}};if(Kk()){var m=Lk(),p=void 0,r=void 0;l.da={i:{},a:function(q,u,v){1===u&&(p=q);7===u&&(r=v);m(q,u,v)},m:af()};l.log=function(q,u){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:q,source:r,message:v})}}}var t=
Oc(l,[e,h]);Nc.a.a.B=void 0;t instanceof ya&&"return"===t.a&&(t=t.i);return yb(t)};Qc();for(var c=0;c<a.length;c++){var d=a[c];if(!Ka(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Fd(d,b[c]);Nc.oc(d)}}function qo(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ia(b)&&(a.gtmOnSuccess=function(){N(b)});Ia(c)&&(a.gtmOnFailure=function(){N(c)})}
function po(){var a=Nc;O.SANDBOXED_JS_SEMAPHORE=O.SANDBOXED_JS_SEMAPHORE||0;Rc(a,function(b,c,d){O.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{O.SANDBOXED_JS_SEMAPHORE--}})}function ro(a){void 0!==a&&Pa(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Ug[e]=Ug[e]||[];Ug[e].push(b)}})};var so="HA GF G UA AW DC".split(" "),to=!1,uo={},vo=!1;function wo(a,b){var c={event:a};b&&(c.eventModel=F(b),b[I.Nc]&&(c.eventCallback=b[I.Nc]),b[I.Vb]&&(c.eventTimeout=b[I.Vb]));return c}function xo(){return to}
var Ao={config:function(a){},event:function(a){var b=a[1];if(n(b)&&!(3<a.length)){var c;if(2<a.length){if(!wb(a[2])&&
void 0!=a[2])return;c=a[2]}var d=wo(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return vo=!0,xo(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Wd.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&wb(a[1])?b=F(a[1]):3==a.length&&n(a[1])&&(b={},wb(a[2])||Ka(a[2])?b[a[1]]=F(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}},consent:function(a){function b(){xo()&&F(a[2],{subcommand:a[1]})}if(3===a.length){kf(39);var c=Vg(),d=a[1];"default"===d?(b(),mg(a[2])):"update"===d&&(b(),ng(a[2],c))}}};
Ao.get=function(a){};var Bo={policy:!0};
var Co=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Eo=function(a){var b=Do(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Vo=function(a){if(Uo(a))return a;this.a=a};Vo.prototype.qh=function(){return this.a};var Uo=function(a){return!a||"object"!==ub(a)||wb(a)?!1:"getUntrustedUpdateValue"in a};Vo.prototype.getUntrustedUpdateValue=Vo.prototype.qh;var Wo=[],Xo=!1,Yo=function(a){return D["dataLayer"].push(a)},Zo=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};function $o(a){var b=a._clear;Pa(a,function(d,e){"_clear"!==d&&(b&&dh(d,void 0),dh(d,e))});Qg||(Qg=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Vg(),a["gtm.uniqueEventId"]=c,dh("gtm.uniqueEventId",c));return $k(a)}
function ap(){for(var a=!1;!Xo&&0<Wo.length;){Xo=!0;delete Yg.eventModel;$g();var b=Wo.shift();if(null!=b){var c=Uo(b);if(c){var d=b;b=Uo(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],h=ah(g,1);if(Ka(h)||wb(h))h=F(h);Zg[g]=h}}try{if(Ia(b))try{b.call(bh)}catch(v){}else if(Ka(b)){var l=
b;if(n(l[0])){var m=l[0].split("."),p=m.pop(),r=l.slice(1),t=ah(m.join("."),2);if(void 0!==t&&null!==t)try{t[p].apply(t,r)}catch(v){}}}else{if(Qa(b)){a:{var q=b;if(q.length&&n(q[0])){var u=Ao[q[0]];if(u&&(!c||!Bo[q[0]])){b=u(q);break a}}b=void 0}if(!b){Xo=!1;continue}}a=$o(b)||a}}finally{c&&$g(!0)}}Xo=!1}return!a}
function bp(){var a=ap();try{Co(D["dataLayer"],Sd.C)}catch(b){}return a}
var dp=function(){var a=Jf("dataLayer",[]),b=Jf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Mj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Kn(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Vo(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Wo.push.apply(Wo,e);if(300<
this.length)for(kf(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return ap()&&h};var d=a.slice(0);Wo.push.apply(Wo,d);cp()&&N(bp)},cp=function(){var a=!0;return a};var ep={};ep.Zb=new String("undefined");
var fp=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===ep.Zb?b:a[d]);return c.join("")}};fp.prototype.toString=function(){return this.a("undefined")};fp.prototype.valueOf=fp.prototype.toString;ep.ug=fp;ep.bd={};ep.Yg=function(a){return new fp(a)};var gp={};ep.ai=function(a,b){var c=Vg();gp[c]=[a,b];return c};ep.Xe=function(a){var b=a?0:1;return function(c){var d=gp[c];if(d&&"function"===typeof d[b])d[b]();gp[c]=void 0}};ep.yh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};ep.Th=function(a){if(a===ep.Zb)return a;var b=Vg();ep.bd[b]=a;return'google_tag_manager["'+Sd.C+'"].macro('+b+")"};ep.Kh=function(a,b,c){a instanceof ep.ug&&(a=a.a(ep.ai(b,c)),b=Ha);return{rd:a,J:b}};var hp=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Rf(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},ip=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},jp=function(a,b,c){ip(a)[b]=c},kp=function(a,b,c,d){var e=ip(a),f=Xa(e,b,d);e[b]=c(f)},lp=function(a,b,c){var d=ip(a);return Xa(d,b,c)};var mp=["input","select","textarea"],np=["button","hidden","image","reset","submit"],op=function(a){var b=a.tagName.toLowerCase();return!La(mp,function(c){return c===b})||"input"===b&&La(np,function(c){return c===a.type.toLowerCase()})?!1:!0},pp=function(a){return a.form?a.form.tagName?a.form:L.getElementById(a.form):Uf(a,["form"],100)},qp=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(op(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var rp=!!D.MutationObserver,sp=void 0,tp=function(a){if(!sp){var b=function(){var c=L.body;if(c)if(rp)(new MutationObserver(function(){for(var e=0;e<sp.length;e++)N(sp[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Pf(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<sp.length;e++)N(sp[e])}))})}};sp=[];L.body?b():N(b)}sp.push(a)};var Fp=D.clearTimeout,Gp=D.setTimeout,T=function(a,b,c){if(dj()){b&&N(b)}else return Lf(a,b,c)},Hp=function(){return new Date},Ip=function(){return D.location.href},Jp=function(a){return ph(rh(a),"fragment")},Kp=function(a){return qh(rh(a))},Lp=function(a,b){return ah(a,b||2)},Mp=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Yo(a)):d=Yo(a);return d},Np=function(a,b){D[a]=b},W=function(a,b,c){b&&
(void 0===D[a]||c&&!D[a])&&(D[a]=b);return D[a]},Op=function(a,b,c){return vh(a,b,void 0===c?!0:!!c)},Pp=function(a,b,c){return 0===Eh(a,b,c)},Qp=function(a,b){if(dj()){b&&N(b)}else Nf(a,b)},Rp=function(a){return!!lp(a,"init",!1)},Sp=function(a){jp(a,"init",!0)},Tp=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Og;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";T(fj("https://","http://",c))},Up=function(a,
b){var c=a[b];return c},Vp=function(a,b,c){Fk&&(Ab(a)||Jk(c,b,a))};
var Wp=ep.Kh;function sq(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var tq=new Na;function uq(a,b){function c(g){var h=rh(g),l=ph(h,"protocol"),m=ph(h,"host",!0),p=ph(h,"port"),r=ph(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function vq(a){return wq(a)?1:0}
function wq(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ka(c)){for(var d=0;d<c.length;d++){var e=F(a,{});F({arg1:c[d],any_of:void 0},e);if(vq(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(q){}}f=!1}return f;case "_ew":return sq(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=A(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var m;var p=a.ignore_case?"i":void 0;try{var r=String(c)+p,t=tq.get(r);t||(t=new RegExp(c,p),tq.set(r,t));m=t.test(b)}catch(q){m=!1}return m;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return uq(b,c)}return!1};var xq={},yq=encodeURI,X=encodeURIComponent,zq=Of;var Aq=function(a,b){if(!a)return!1;var c=ph(rh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Bq=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};xq.zh=function(){var a=!1;return a};function Kr(){return D.gaGlobal=D.gaGlobal||{}}var Lr=function(){var a=Kr();a.hid=a.hid||Ma();return a.hid},Mr=function(a,b){var c=Kr();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var ns=window,os=document,ps=function(a){var b=ns._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ns["ga-disable-"+a])return!0;try{var c=ns.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=th("AMP_TOKEN",String(os.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return os.getElementById("__gaOptOutExtension")?!0:!1};
function ss(a){delete a.eventModel[I.vb];us(a.eventModel)}var us=function(a){Pa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[I.na]||{};Pa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var xs=function(a,b,c){rn(b,c,a)},ys=function(a,b,c){rn(b,c,a,!0)},Bs=function(a,b){};
function As(a,b){}var Z={b:{}};
Z.b.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Z.__gaawc=b;Z.__gaawc.g="gaawc";Z.__gaawc.h=!0;Z.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=Bq(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(I.na)||b.vtp_userProperties){var e=d[I.na]||{};F(Bq(b.vtp_userProperties,"name","value"),e);d[I.na]=e}a(d,I.Ae,function(f){return Ta(f)});a(d,I.Ce,function(f){return Number(f)});
d.send_page_view=b.vtp_sendPageView;sn(d,c);N(b.vtp_gtmOnSuccess)})}();
Z.b.gaawe=["google"],function(){function a(c,d,e){for(var f=0;f<d.length;f++)c.hasOwnProperty(d[f])&&(c[d[f]]=e(c[d[f]]))}function b(c,d,e){if(c.vtp_sendEcommerceData&&0<=I.Be.indexOf(d)){var f;"dataLayer"===c.vtp_getEcommerceDataFrom?f=Lp("eventModel",2):f=c.vtp_ecommerceMacroData;wb(f)&&F(f,e)}}(function(c){Z.__gaawe=c;Z.__gaawe.g="gaawe";Z.__gaawe.h=!0;Z.__gaawe.priorityOverride=0})(function(c){var d=String(c.vtp_measurementIdOverride||c.vtp_measurementId),e=String(c.vtp_eventName);if("_"===e.charAt(0))N(c.vtp_gtmOnFailure);
else{var f={};b(c,e,f);F(Bq(c.vtp_eventParameters,"name","value"),f);if(f.hasOwnProperty(I.na)||c.vtp_userProperties){var g=f[I.na]||{};F(Bq(c.vtp_userProperties,"name","value"),g);f[I.na]=g}us(f);a(f,I.Ae,function(h){return Ta(h)});a(f,I.Ce,function(h){return Number(h)});rn(e,f,d);N(c.vtp_gtmOnSuccess)}})}();Z.b.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.g="ctv";Z.__ctv.h=!0;Z.__ctv.priorityOverride=0})(function(){return"301"})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");var d=c&&c.e&&c.e(b);Vp(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){Vp(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(fh(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=Lp("gtm.referrer",1)||L.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ph(rh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Kp(String(b)):String(b)})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=hp(c,"gtm.click");Mp(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!Rp("cl")){var c=W("document");Pf(c,"click",a,!0);Sp("cl")}N(b.vtp_gtmOnSuccess)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];Vp(c,"j",a.vtp_gtmEventId);return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return Op(a.vtp_name,Lp("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,r,t){if(!n(t))throw d(p,{},"Key must be a string.");if("read"===r){if(-1<A(e,t))return}else if("write"===r){if(-1<A(f,t))return}else if("readwrite"===r){if(-1<A(f,t)&&-1<A(e,t))return}else if("execute"===r){if(-1<A(g,t))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(p,{},"Prohibited "+r+" on global variable: "+
t+".");},K:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Ma(a.vtp_min,a.vtp_max)})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Lp("gtm.url",1);c=c||Ip();var d=b[a("vtp_component")];if(!d||"URL"==d)return Kp(String(c));var e=rh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ka(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var r=ph(e,"QUERY",void 0,void 0,m[p]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=ph(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Lp(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Vp(d,"v",a.vtp_gtmEventId);return d})}();
Z.b.ua=["google"],function(){function a(m,p){if(hg()&&!d[m]){var r=function(){var t=ak(),q="gtm"+Vg(),u=h(p),v={name:q};g(u,v,!0);t("create",m,v);t(function(){t.remove(q)})};kg(r,I.M);kg(r,I.s);d[m]=!0}}var b,c={},d={},e={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,
_cd2l:!0},f={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},g=function(m,p,r){var t=0;if(m)for(var q in m)if(m.hasOwnProperty(q)&&(r&&e[q]||!r&&void 0===e[q])){var u=f[q]?Ta(m[q]):m[q];"anonymizeIp"!=q||u||(u=void 0);p[q]=u;t++}return t},h=function(m){var p={};m.vtp_gaSettings&&F(Bq(m.vtp_gaSettings.vtp_fieldsToSet,
"fieldName","value"),p);F(Bq(m.vtp_fieldsToSet,"fieldName","value"),p);og(I.M)||(p.storage="none");og(I.s)||(p.allowAdFeatures=!1,p.storeGac=!1);Sm()||(p.allowAdFeatures=!1);Rm()||(p.allowAdPersonalizationSignals=!1);m.vtp_transportUrl&&(p._x_19=m.vtp_transportUrl);return p},l=function(m){function p(wa,R){void 0!==R&&C("set",wa,R)}var r={},t={},q={},u={};if(m.vtp_gaSettings){var v=
m.vtp_gaSettings;F(Bq(v.vtp_contentGroup,"index","group"),t);F(Bq(v.vtp_dimension,"index","dimension"),q);F(Bq(v.vtp_metric,"index","metric"),u);var x=F(v);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=void 0;x.vtp_metric=void 0;m=F(m,x)}F(Bq(m.vtp_contentGroup,"index","group"),t);F(Bq(m.vtp_dimension,"index","dimension"),q);F(Bq(m.vtp_metric,"index","metric"),u);var y=h(m),w=ck(m.vtp_functionName);if(Ia(w)){var B="",z="";m.vtp_setTrackerName&&"string"==typeof m.vtp_trackerName?
""!==m.vtp_trackerName&&(z=m.vtp_trackerName,B=z+"."):(z="gtm"+Vg(),B=z+".");var C=function(wa){var R=[].slice.call(arguments,0);R[0]=B+R[0];w.apply(window,R)},E=function(wa,R){return void 0===R?R:wa(R)},G=function(wa,R){if(R)for(var hb in R)R.hasOwnProperty(hb)&&C("set",wa+hb,R[hb])},M=function(){},
P={name:z};g(y,P,!0);var ba=m.vtp_trackingId||r.trackingId;w("create",ba,P);C("set","&gtm",pl(!0));hg()&&(C("set","&gcs",pg()),a(ba,m));y._x_19&&(null==If&&delete y._x_19,y._x_20&&!c[z]&&(c[z]=!0,w(hk(z,String(y._x_20)))));m.vtp_enableRecaptcha&&C("require","recaptcha","recaptcha.js");(function(wa,R){void 0!==m[R]&&C("set",wa,m[R])})("nonInteraction","vtp_nonInteraction");
G("contentGroup",t);G("dimension",q);G("metric",u);var ca={};g(y,ca,!1)&&C("set",ca);var ea;m.vtp_enableLinkId&&C("require","linkid","linkid.js");C("set","hitCallback",function(){var wa=y&&y.hitCallback;Ia(wa)&&wa();m.vtp_gtmOnSuccess()});if("TRACK_EVENT"==m.vtp_trackType){
m.vtp_enableEcommerce&&(C("require","ec","ec.js"),M());var J={hitType:"event",eventCategory:String(m.vtp_eventCategory||r.category),eventAction:String(m.vtp_eventAction||r.action),eventLabel:E(String,m.vtp_eventLabel||r.label),eventValue:E(Sa,m.vtp_eventValue||r.value)};g(ea,J,!1);C("send",J);}else if("TRACK_SOCIAL"==m.vtp_trackType){}else if("TRACK_TRANSACTION"==m.vtp_trackType){}else if("TRACK_TIMING"==m.vtp_trackType){}else if("DECORATE_LINK"==m.vtp_trackType){}else if("DECORATE_FORM"==m.vtp_trackType){}else if("TRACK_DATA"==
m.vtp_trackType){}else{m.vtp_enableEcommerce&&(C("require","ec","ec.js"),M());if(m.vtp_doubleClick||"DISPLAY_FEATURES"==m.vtp_advertisingFeaturesType){var ra="_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");C("require","displayfeatures",void 0,{cookieName:ra})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==m.vtp_advertisingFeaturesType){var Ra=
"_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");C("require","adfeatures",{cookieName:Ra})}ea?C("send","pageview",ea):C("send","pageview");}if(!b){var fb=m.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";m.vtp_useInternalVersion&&!m.vtp_useDebugVersion&&
(fb="internal/"+fb);b=!0;var Dc=bl(y._x_19,"/analytics.js"),fe=fj("https:","http:","//www.google-analytics.com/"+fb,y&&!!y.forceSSL);T("analytics.js"===fb&&Dc?Dc:fe,function(){var wa=ak();wa&&wa.loaded||m.vtp_gtmOnFailure();},m.vtp_gtmOnFailure)}}else N(m.vtp_gtmOnFailure)};(function(m){Z.__ua=m;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0})(function(m){qg(function(){l(m)},
[I.M,I.s])})}();


Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!n(f))throw d(e,{},"Script URL must be a string.");try{if(ye(rh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();


Z.b.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.g="cid";Z.__cid.h=!0;Z.__cid.priorityOverride=0})(function(){return Sd.C})}();


Z.b.aev=["google"],function(){function a(q,u){var v=fh(q,"gtm");if(v)return v[u]}function b(q,u,v,x){x||(x="element");var y=q+"."+u,w;if(p.hasOwnProperty(y))w=p[y];else{var B=a(q,x);if(B&&(w=v(B),p[y]=w,r.push(y),35<r.length)){var z=r.shift();delete p[z]}}return w}function c(q,u,v){var x=a(q,t[u]);return void 0!==x?x:v}function d(q,u){if(!q)return!1;var v=e(Ip());Ka(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var x=[v],y=0;y<u.length;y++){var w=u[y];if(w.hasOwnProperty("is_regex"))if(w.is_regex)try{w=
new RegExp(w.domain)}catch(z){continue}else w=w.domain;if(w instanceof RegExp){if(w.test(q))return!1}else{var B=w;if(0!=B.length){if(0<=e(q).indexOf(B))return!1;x.push(e(B))}}}return!Aq(q,x)}function e(q){m.test(q)||(q="http://"+q);return ph(rh(q),"HOST",!0)}function f(q,u,v){switch(q){case "SUBMIT_TEXT":return b(u,"FORM."+q,g,"formSubmitElement")||v;case "LENGTH":var x=b(u,"FORM."+q,h);return void 0===x?v:x;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",
v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var w=a(u,"interactSequenceNumber");return void 0===w?v:w;default:return v}}function g(q){switch(q.tagName.toLowerCase()){case "input":return Rf(q,"value");case "button":return Sf(q);default:return null}}function h(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var u=0,v=0;v<q.elements.length;v++)op(q.elements[v])&&
u++;return u}}function l(q,u,v){var x=a(q,"interactedFormField");return x&&Rf(x,u)||v}var m=/^https?:\/\//i,p={},r=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=
0})(function(q){var u=q.vtp_gtmEventId,v=q.vtp_defaultValue,x=q.vtp_varType;switch(x){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||v;case "TEXT":return b(u,x,Sf)||v;case "URL":var w;a:{var B=String(a(u,"elementUrl")||v||""),z=rh(B),C=String(q.vtp_component||"URL");switch(C){case "URL":w=B;break a;case "IS_OUTBOUND":w=d(B,q.vtp_affiliatedDomains);break a;default:w=ph(z,C,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return w;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(u,
x,v);else{var G=q.vtp_attribute,M=a(u,"element");E=M&&Rf(M,G)||v||""}return E;case "MD":var P=q.vtp_mdValue,ba=b(u,"MD",Ap);return P&&ba?Dp(ba,P)||v:ba||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),u,v);default:var ca=c(u,x,v);Vp(ca,"aev",q.vtp_gtmEventId);return ca}})}();Z.b.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(a){var b=F(a),c=b;c[Dd.Ha]=null;c[Dd.lg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.b.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.g="remm";Z.__remm.h=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var m=c[g].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}Vp(f,"remm",a.vtp_gtmEventId);return f})}();Z.b.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Bq(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;Vp(d,"smm",a.vtp_gtmEventId);return d})}();





Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=L.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,Kf(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];h.firstChild;)r.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,r,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){N(g)}}}var c=function(d){if(L.body){var e=
d.vtp_gtmOnFailure,f=Wp(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.rd,h=f.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(L.body,Tf(g),h,e)()}else Gp(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();

Z.b.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.g="dbg";Z.__dbg.h=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();






var Cs={};Cs.macro=function(a){if(ep.bd.hasOwnProperty(a))return ep.bd[a]},Cs.onHtmlSuccess=ep.Xe(!0),Cs.onHtmlFailure=ep.Xe(!1);Cs.dataLayer=bh;Cs.callback=function(a){Tg.hasOwnProperty(a)&&Ia(Tg[a])&&Tg[a]();delete Tg[a]};function Ds(){O[Sd.C]=Cs;Za(Ug,Z.b);vd=vd||ep;wd=Od}
function Es(){Xf.gtm_3pds=!0;Xf.gtag_cs_api=!0;O=D.google_tag_manager=D.google_tag_manager||{};Ql();if(O[Sd.C]){var a=O.zones;a&&a.unregisterChild(Sd.C);}else{for(var b=data.resource||{},c=b.macros||[],d=
0;d<c.length;d++)od.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)rd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)qd.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],r={},t=0;t<p.length;t++)r[p[t][0]]=Array.prototype.slice.call(p[t],1);pd.push(r)}td=Z;ud=vq;var q=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;oo();Wd=new Vd(q);if(void 0!==u)for(var x=["sandboxedScripts"],y=0;y<u.length;y++){var w=u[y].replace(/^_*/,"");Ug[w]=x}ro(v);Ds();dp();
Hj=!1;Ij=0;if("interactive"==L.readyState&&!L.createEventObject||"complete"==L.readyState)Kj();else{Pf(L,"DOMContentLoaded",Kj);Pf(L,"readystatechange",Kj);if(L.createEventObject&&L.documentElement.doScroll){var B=!0;try{B=!D.frameElement}catch(G){}B&&Lj()}Pf(D,"load",Kj)}Hn=!1;"complete"===L.readyState?Jn():Pf(D,"load",Jn);
a:{if(!Fk)break a;D.setInterval(Gk,864E5);}Rg=(new Date).getTime();}}
(function(a){var b=!0;b=!1;if(b){a();return}var c=function(){var g=
D["google.tagmanager.debugui2.queue"];g||(g=[],D["google.tagmanager.debugui2.queue"]=g,Lf("https://www.googletagmanager.com/debug/bootstrap"));return g},d="x"===ph(D.location,"query",!1,void 0,"gtm_debug");if(!d&&L.referrer){var e=rh(L.referrer);d="tagassistant.google.com"===oh(e,"host")}if(!d){var f=vh("__TAG_ASSISTANT");d=f.length&&f[0].length}D.__TAG_ASSISTANT_API&&(d=!0);if(d&&If){c().push({messageType:"CONTAINER_STARTING",data:{scriptSource:If,resume:function(){a()}}});return}
a()})(Es);

})()
