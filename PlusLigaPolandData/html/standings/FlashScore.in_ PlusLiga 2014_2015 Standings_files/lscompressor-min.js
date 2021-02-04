/*
	Based on JSXCompressor with UTF-8 string support originally written by Joris van der Wel
    Dual licensed under the Apache License Version 2.0, or LGPL Version 3 licenses.
*/
JXG={exists:function(e){return function(t){return!(t===e||t===null)}}()};JXG.decompress=function(e){return JXG.Util.RawUrlDecode((new JXG.Util.Unzip(JXG.Util.Base64.decodeAsArray(e))).unzip()[0][0])};JXG.Util={};JXG.Util.RawUrlDecode=function(e){var t,n,r,i,s,o,u,a,f,l;i="";for(n=0,r=e.length;n<r;n++){t=e.charAt(n);if(t!="%"){i+=t;continue}s=parseInt(e.charAt(n+1)+e.charAt(n+2),16);if(isNaN(s)){i+="%";continue}n+=2;i+=String.fromCharCode(s)}e=i;i="";for(n=0,r=e.length;n<r;n++){s=e.charCodeAt(n);if((s&128)===0){i+=e.charAt(n)}else if((s&224)===192){n++;o=e.charCodeAt(n);i+=String.fromCharCode((s&31)<<6|(o&63)<<0)}else if((s&240)===224){n++;o=e.charCodeAt(n);n++;u=e.charCodeAt(n);i+=String.fromCharCode((s&15)<<12|(o&63)<<6|(u&63)<<0)}else if((s&248)===240){n++;o=e.charCodeAt(n);n++;u=e.charCodeAt(n);n++;a=e.charCodeAt(n);s=(s&7)<<18|(o&63)<<12|(u&63)<<6|(a&63)<<0;if(s>=65536){s-=65536;f=(s&1047552)>>10;l=s&1023;f+=55296;l+=56320;i+=String.fromCharCode(f,l)}else{i+=String.fromCharCode(s)}}}return i};JXG.Util.Unzip=function(e){function k(){x+=8;if(w<b.length){return b[w++]}else return-1}function L(){S=1}function A(){var e;x++;e=S&1;S>>=1;if(S==0){S=k();e=S&1;S=S>>1|128}return e}function O(e){var t=0,n=e;while(n--){t=t<<1|A()}if(e){t=p[t]>>8-e}return t}function M(){f=0}function _(e){h++;a[f++]=e;t.push(String.fromCharCode(e));if(f==32768){f=0}}function D(){this.b0=0;this.b1=0;this.jump=null;this.jumppos=-1}function V(){while(1){if(z[U]>=X)return-1;if(W[z[U]]==U)return z[U]++;z[U]++}}function $(){var e=F[j];var t;if(r)document.write("<br>len:"+U+" treepos:"+j);if(U==17){return-1}j++;U++;t=V();if(r)document.write("<br>IsPat "+t);if(t>=0){e.b0=t;if(r)document.write("<br>b0 "+e.b0)}else{e.b0=32768;if(r)document.write("<br>b0 "+e.b0);if($())return-1}t=V();if(t>=0){e.b1=t;if(r)document.write("<br>b1 "+e.b1);e.jump=null}else{e.b1=32768;if(r)document.write("<br>b1 "+e.b1);e.jump=F[j];e.jumppos=j;if($())return-1}U--;return 0}function J(e,t,n,i){var s;if(r)document.write("currentTree "+e+" numval "+t+" lengths "+n+" show "+i);F=e;j=0;W=n;X=t;for(s=0;s<17;s++)z[s]=0;U=0;if($()){if(r)alert("invalid huffman tree\n");return-1}if(r){document.write("<br>Tree: "+F.length);for(var o=0;o<32;o++){document.write("Places["+o+"].b0="+F[o].b0+"<br>");document.write("Places["+o+"].b1="+F[o].b1+"<br>")}}return 0}function K(e){var t,n,i=0,s=e[i],o;while(1){o=A();if(r)document.write("b="+o);if(o){if(!(s.b1&32768)){if(r)document.write("ret1");return s.b1}s=s.jump;t=e.length;for(n=0;n<t;n++){if(e[n]===s){i=n;break}}}else{if(!(s.b0&32768)){if(r)document.write("ret2");return s.b0}i++;s=e[i]}}if(r)document.write("ret3");return-1}function Q(){var e,t,n,i,s;do{e=A();n=O(2);switch(n){case 0:if(r)alert("Stored\n");break;case 1:if(r)alert("Fixed Huffman codes\n");break;case 2:if(r)alert("Dynamic Huffman codes\n");break;case 3:if(r)alert("Reserved block type!!\n");break;default:if(r)alert("Unexpected value %d!\n",n);break}if(n==0){var o,u;L();o=k();o|=k()<<8;u=k();u|=k()<<8;if((o^~u)&65535){document.write("BlockLen checksum mismatch\n")}while(o--){t=k();_(t)}}else if(n==1){var l;while(1){l=p[O(7)]>>1;if(l>23){l=l<<1|A();if(l>199){l-=128;l=l<<1|A()}else{l-=48;if(l>143){l=l+136}}}else{l+=256}if(l<256){_(l)}else if(l==256){break}else{var s,c;l-=256+1;s=O(v[l])+d[l];l=p[O(5)]>>3;if(g[l]>8){c=O(8);c|=O(g[l]-8)<<8}else{c=O(g[l])}c+=m[l];for(l=0;l<s;l++){var t=a[f-c&32767];_(t)}}}}else if(n==2){var l,h,b,w,E;var S=new Array(288+32);b=257+O(5);w=1+O(5);E=4+O(4);for(l=0;l<19;l++){S[l]=0}for(l=0;l<E;l++){S[y[l]]=O(3)}s=B.length;for(i=0;i<s;i++)B[i]=new D;if(J(B,19,S,0)){M();return 1}if(r){document.write("<br>distanceTree");for(var T=0;T<B.length;T++){document.write("<br>"+B[T].b0+" "+B[T].b1+" "+B[T].jump+" "+B[T].jumppos)}}h=b+w;i=0;var N=-1;if(r)document.write("<br>n="+h+" bits: "+x+"<br>");while(i<h){N++;l=K(B);if(r)document.write("<br>"+N+" i:"+i+" decode: "+l+"    bits "+x+"<br>");if(l<16){S[i++]=l}else if(l==16){var C;l=3+O(2);if(i+l>h){M();return 1}C=i?S[i-1]:0;while(l--){S[i++]=C}}else{if(l==17){l=3+O(3)}else{l=11+O(7)}if(i+l>h){M();return 1}while(l--){S[i++]=0}}}s=H.length;for(i=0;i<s;i++)H[i]=new D;if(J(H,b,S,0)){M();return 1}s=H.length;for(i=0;i<s;i++)B[i]=new D;var P=new Array;for(i=b;i<S.length;i++){P[i-b]=S[i]}if(J(B,w,P,0)){M();return 1}if(r)document.write("<br>literalTree");while(1){l=K(H);if(l>=256){var s,c;l-=256;if(l==0){break}l--;s=O(v[l])+d[l];l=K(B);if(g[l]>8){c=O(8);c|=O(g[l]-8)<<8}else{c=O(g[l])}c+=m[l];while(s--){var t=a[f-c&32767];_(t)}}else{_(l)}}}}while(!e);M();L();return 0}function G(){if(r)alert("NEXTFILE");t=[];var e=[];l=false;e[0]=k();e[1]=k();if(r)alert("type: "+e[0]+" "+e[1]);if(e[0]==parseInt("78",16)&&e[1]==parseInt("da",16)){if(r)alert("GEONExT-GZIP");Q();if(r)alert(t.join(""));o[s]=new Array(2);o[s][0]=t.join("");o[s][1]="geonext.gxt";s++}if(e[0]==parseInt("1f",16)&&e[1]==parseInt("8b",16)){if(r)alert("GZIP");Y();if(r)alert(t.join(""));o[s]=new Array(2);o[s][0]=t.join("");o[s][1]="file";s++}if(e[0]==parseInt("50",16)&&e[1]==parseInt("4b",16)){l=true;e[2]=k();e[3]=k();if(e[2]==parseInt("3",16)&&e[3]==parseInt("4",16)){e[0]=k();e[1]=k();if(r)alert("ZIP-Version: "+e[1]+" "+e[0]/10+"."+e[0]%10);i=k();i|=k()<<8;if(r)alert("gpflags: "+i);var n=k();n|=k()<<8;if(r)alert("method: "+n);k();k();k();k();var u=k();u|=k()<<8;u|=k()<<16;u|=k()<<24;var a=k();a|=k()<<8;a|=k()<<16;a|=k()<<24;var f=k();f|=k()<<8;f|=k()<<16;f|=k()<<24;if(r)alert("local CRC: "+u+"\nlocal Size: "+f+"\nlocal CompSize: "+a);var p=k();p|=k()<<8;var d=k();d|=k()<<8;if(r)alert("filelen "+p);m=0;N=[];while(p--){var v=k();if(v=="/"|v==":"){m=0}else if(m<T-1)N[m++]=String.fromCharCode(v)}if(r)alert("nameBuf: "+N);if(!C)C=N;var m=0;while(m<d){v=k();m++}c=4294967295;h=0;if(f=0&&fileOut.charAt(C.length-1)=="/"){if(r)alert("skipdir")}if(n==8){Q();if(r)alert(t.join(""));o[s]=new Array(2);o[s][0]=t.join("");o[s][1]=N.join("");s++}Y()}}}function Y(){var e,t=[],n,s,o,u,a;if(i&8){t[0]=k();t[1]=k();t[2]=k();t[3]=k();if(t[0]==parseInt("50",16)&&t[1]==parseInt("4b",16)&&t[2]==parseInt("07",16)&&t[3]==parseInt("08",16)){e=k();e|=k()<<8;e|=k()<<16;e|=k()<<24}else{e=t[0]|t[1]<<8|t[2]<<16|t[3]<<24}n=k();n|=k()<<8;n|=k()<<16;n|=k()<<24;s=k();s|=k()<<8;s|=k()<<16;s|=k()<<24;if(r)alert("CRC:")}if(l)G();t[0]=k();if(t[0]!=8){if(r)alert("Unknown compression method!");return 0}i=k();if(r){if(i&~parseInt("1f",16))alert("Unknown flags set!")}k();k();k();k();k();o=k();if(i&4){t[0]=k();t[2]=k();U=t[0]+256*t[1];if(r)alert("Extra field size: "+U);for(u=0;u<U;u++)k()}if(i&8){u=0;N=[];while(a=k()){if(a=="7"||a==":")u=0;if(u<T-1)N[u++]=a}if(r)alert("original file name: "+N)}if(i&16){while(a=k()){}}if(i&2){k();k()}Q();e=k();e|=k()<<8;e|=k()<<16;e|=k()<<24;s=k();s|=k()<<8;s|=k()<<16;s|=k()<<24;if(l)G()}var t=[],n="",r=false,i,s=0,o=[],u,a=new Array(32768),f=0,l=false,c,h,p=[0,128,64,192,32,160,96,224,16,144,80,208,48,176,112,240,8,136,72,200,40,168,104,232,24,152,88,216,56,184,120,248,4,132,68,196,36,164,100,228,20,148,84,212,52,180,116,244,12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,3,131,67,195,35,163,99,227,19,147,83,211,51,179,115,243,11,139,75,203,43,171,107,235,27,155,91,219,59,187,123,251,7,135,71,199,39,167,103,231,23,151,87,215,55,183,119,247,15,143,79,207,47,175,111,239,31,159,95,223,63,191,127,255],d=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],v=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,99,99],m=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],g=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],y=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],b=e,w=0,E=0,S=1,x=0,T=256,N=[],C;var P=288;var H=new Array(P);var B=new Array(32);var j=0;var F=null;var I=null;var q=new Array(64);var R=new Array(64);var U=0;var z=new Array(17);z[0]=0;var W;var X;JXG.Util.Unzip.prototype.unzipFile=function(e){var t;this.unzip();for(t=0;t<o.length;t++){if(o[t][1]==e){return o[t][0]}}};JXG.Util.Unzip.prototype.unzip=function(){if(r)alert(b);G();return o};};JXG.Util.Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t=[],n,r,i,s,o,u,a,f=0;e=JXG.Util.Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t.push([this._keyStr.charAt(s),this._keyStr.charAt(o),this._keyStr.charAt(u),this._keyStr.charAt(a)].join(""))}return t.join("")},decode:function(e,t){var n=[],r,i,s,o,u,a,f,l=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(l<e.length){o=this._keyStr.indexOf(e.charAt(l++));u=this._keyStr.indexOf(e.charAt(l++));a=this._keyStr.indexOf(e.charAt(l++));f=this._keyStr.indexOf(e.charAt(l++));r=o<<2|u>>4;i=(u&15)<<4|a>>2;s=(a&3)<<6|f;n.push(String.fromCharCode(r));if(a!=64){n.push(String.fromCharCode(i))}if(f!=64){n.push(String.fromCharCode(s))}}n=n.join("");if(t){n=JXG.Util.Base64._utf8_decode(n)}return n},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t=[],n=0,r=0,i=0,s=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t.push(String.fromCharCode(r));n++}else if(r>191&&r<224){i=e.charCodeAt(n+1);t.push(String.fromCharCode((r&31)<<6|i&63));n+=2}else{i=e.charCodeAt(n+1);s=e.charCodeAt(n+2);t.push(String.fromCharCode((r&15)<<12|(i&63)<<6|s&63));n+=3}}return t.join("")},_destrip:function(e,t){var n=[],r,i,s=[];if(t==null)t=76;e.replace(/ /g,"");r=e.length/t;for(i=0;i<r;i++)n[i]=e.substr(i*t,t);if(r!=e.length/t)n[n.length]=e.substr(r*t,e.length-r*t);for(i=0;i<n.length;i++)s.push(n[i]);return s.join("\n")},decodeAsArray:function(e){var t=this.decode(e),n=[],r;for(r=0;r<t.length;r++){n[r]=t.charCodeAt(r)}return n},decodeGEONExT:function(e){return decodeAsArray(destrip(e),false)}};JXG.Util.asciiCharCodeAt=function(e,t){var n=e.charCodeAt(t);if(n>255){switch(n){case 8364:n=128;break;case 8218:n=130;break;case 402:n=131;break;case 8222:n=132;break;case 8230:n=133;break;case 8224:n=134;break;case 8225:n=135;break;case 710:n=136;break;case 8240:n=137;break;case 352:n=138;break;case 8249:n=139;break;case 338:n=140;break;case 381:n=142;break;case 8216:n=145;break;case 8217:n=146;break;case 8220:n=147;break;case 8221:n=148;break;case 8226:n=149;break;case 8211:n=150;break;case 8212:n=151;break;case 732:n=152;break;case 8482:n=153;break;case 353:n=154;break;case 8250:n=155;break;case 339:n=156;break;case 382:n=158;break;case 376:n=159;break;default:break}}return n};JXG.Util.utf8Decode=function(e){var t=[];var n=0;var r=0,i=0,s=0,o;if(!JXG.exists(e))return"";while(n<e.length){r=e.charCodeAt(n);if(r<128){t.push(String.fromCharCode(r));n++}else if(r>191&&r<224){s=e.charCodeAt(n+1);t.push(String.fromCharCode((r&31)<<6|s&63));n+=2}else{s=e.charCodeAt(n+1);o=e.charCodeAt(n+2);t.push(String.fromCharCode((r&15)<<12|(s&63)<<6|o&63));n+=3}}return t.join("")};JXG.Util.genUUID=function(){var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),t=new Array(36),n=0,r;for(var i=0;i<36;i++){if(i==8||i==13||i==18||i==23){t[i]="-"}else if(i==14){t[i]="4"}else{if(n<=2)n=33554432+Math.random()*16777216|0;r=n&15;n=n>>4;t[i]=e[i==19?r&3|8:r]}}return t.join("")}