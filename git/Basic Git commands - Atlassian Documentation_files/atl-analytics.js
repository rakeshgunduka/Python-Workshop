var ace=ace||{};ace.mkt=ace.mkt||{},ace.mkt.Cookie=function(){"use strict";function a(a,c){var d=b(a);return null!==d?d:c}function b(a){try{for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}}catch(f){}return null}function c(a,b,c,d){try{var e="";if(c){var f=new Date;f.setTime(f.getTime()+24*c*60*60*1e3),e="; expires="+f.toGMTString()}var g=a+"="+b+e+"; path=/;",h=window.location.hostname;if("localhost"!==h&&d===!0){var i=h.split(".");if(i.length>1){var j=i[i.length-1],k=i[i.length-2];(isNaN(j)||isNaN(k))&&(h="."+k+"."+j)}g+=" domain="+h+";"}document.cookie=g}catch(l){}}return{getCookieUrl:a,readCookie:b,writeCookie:c}}();var ace=ace||{};ace.mkt=ace.mkt||{},ace.mkt.CrossOriginMessenger=function(){"use strict";function a(a,b){return JSON.stringify({type:a,payload:b,source:k})}function b(a,b,c){a.postMessage(c,b)}function c(a,b,c){l.push({type:a,domain:e(b),callback:c})}function d(){l=[]}function e(a){return a.replace(/(^https:\/\/.*):443$/,"$1").replace(/(^http:\/\/.*):80$/,"$1")}function f(a){var b=g(a.data);h(b)&&i(b,a.origin)}function g(a){try{return JSON.parse(a)}catch(b){return void 0}}function h(a){return a&&a.source===k}function i(a,b){for(var c=0;c<l.length;c++){var d=l[c];d.type===a.type&&j(d,b)&&d.callback(a)}}function j(a,b){return 0===b.indexOf(a.domain)}var k="ace.mkt.CrossOriginMessenger",l=[];return window.addEventListener("message",f,!1),{createMessage:a,sendMessage:b,addListener:c,clearAllListeners:d}}();var ace=ace||{};ace.mkt=ace.mkt||{},ace.mkt.Guid=function(){"use strict";function a(){return Math.guid()}function b(){return Math.guid().replace(/-/g,"")}return{guid:a,guidNoDashes:b}}();var ace=ace||{};ace.mkt=ace.mkt||{},ace.mkt.Helpers=function(){"use strict";function a(a){if("complete"===document.readyState)a();else if(window.addEventListener)window.addEventListener("load",a,!1);else if(window.attachEvent)window.attachEvent("onload",a);else{var b=window.onload;window.onload=function(){b&&b(),a()}}}function b(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);return null===c?"":decodeURIComponent(c[1].replace(/\+/g," "))}function c(){return window.location.origin?window.location.origin:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")}function d(a,b){return-1!==a.indexOf(b,a.length-b.length)}return{addLoadEvent:a,getParameterByName:b,getBaseUrl:c,endsWith:d}}(),Math.trueRandom=function(){function a(){var a=4022871197,b=function(b){b=b.toString();for(var c=0;c<b.length;c++){a+=b.charCodeAt(c);var d=.02519603282416938*a;a=d>>>0,d-=a,d*=a,a=d>>>0,d-=a,a+=4294967296*d}return 2.3283064365386963e-10*(a>>>0)};return b.version="Mash 0.9",b}function b(){return function(b){var c=0,d=0,e=0,f=1;0==b.length&&(b=[+new Date]);var g=a();c=g(" "),d=g(" "),e=g(" ");for(var h=0;h<b.length;h++)c-=g(b[h]),0>c&&(c+=1),d-=g(b[h]),0>d&&(d+=1),e-=g(b[h]),0>e&&(e+=1);g=null;var i=function(){var a=2091639*c+2.3283064365386963e-10*f;return c=d,d=e,e=a-(f=0|a)};return i.uint32=function(){return 4294967296*i()},i.fract53=function(){return i()+1.1102230246251565e-16*(2097152*i()|0)},i.version="Alea 0.9",i.args=b,i}(Array.prototype.slice.call(arguments))}return b()}(),Math.guid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.trueRandom()|0,c="x"==a?b:3&b|8;return c.toString(16)})};var ace=ace||{};ace.mkt=ace.mkt||{},ace.mkt.StorageManager=function(){"use strict";var a="#",b=/\d+#/,c=function(a,b){this.prefix=a,this.id=b,this.namespace=this.prefix+"."+this.id;try{this.localStorageSupported="localStorage"in window&&null!==window.localStorage}catch(c){}};return c.prototype={getPrefix:function(b){var c=1e3*(b||0);return c?+new Date+c+a:""},getItem:function(a){if(!this.localStorageSupported)return null;var c=localStorage.getItem(this.namespace+"."+a),d=b.exec(c);return d===!0&&(c=c.replace(d[0],""),+new Date>d[0].replace("#",""))?(localStorage.removeItem(this.namespace+"."+a),null):c},contains:function(a){return!!this.getItem(a)},setItem:function(a,b,c){this.localStorageSupported&&(b=this.getPrefix(c)+b,localStorage.setItem(this.namespace+"."+a,b))},removeItem:function(a){this.localStorageSupported&&localStorage.removeItem(this.namespace+"."+a)}},{instance:c}}();var ace=ace||{};ace.mkt=ace.mkt||{},ace.mkt.MessageTypes={atlPathEstablished:"atlPathEstablished"};var ace=ace||{};ace.analytics=ace.analytics||{},ace.analytics.Properties={IFRAME_DOMAIN:"https://ace-cdn.atlassian.com",IFRAME_URI:"/stp/current/analytics/atl-path.html",COOKIE_DOMAIN:"atlassian.com"};var ace=ace||{};ace.analytics=ace.analytics||{},ace.analytics.Initializer=function(){"use strict";function a(a){c()||d(a)}function b(){return window.analytics.ready.apply(window,arguments)}function c(){return decodeURIComponent(window.location.href).match(e)||decodeURIComponent(document.referrer).match(e)}function d(a){ace.analytics.SegmentIO.init(a)}var e=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;return{initWithPageAnalytics:a,ready:b}}();var ace=ace||{};ace.analytics=ace.analytics||{},ace.analytics.Tracking=function(){"use strict";function a(a,b){analytics.track(a,b)}function b(a){try{var b="undefined"!=typeof a.target.textContent?a.target.textContent:a.target.parentNode.textContent,c="undefined"!=typeof b?b.toLowerCase().replace(/ /g,"-").trim():"",d="undefined"!=typeof document.title?document.title.replace(/\W+/g,"_").trim():"";ace.analytics.Tracking.trackEvent("Clicked-Auto-CTA",{category:d,label:c,_sio:ace.mkt.Cookie.readCookie("_sio")||"",_atl_path:ace.mkt.Cookie.readCookie("__atl_path")||""})}catch(e){}}function c(){try{for(var a=document.querySelectorAll("button"),c=0;c<a.length;c++)a[c].addEventListener("click",b)}catch(d){}}function d(){try{for(var a=[],c=document.querySelectorAll("a[class*='button'], a.cta"),d=0;d<c.length;d++){var e=c[d];e.offsetWidth>=100&&-1===e.className.indexOf("cta")&&a.push(e)}for(var f=0;f<a.length;f++)a[f].addEventListener("click",b)}catch(g){}}return{autoTrackButtons:c,autoTrackLinks:d,trackEvent:a}}();var ace=ace||{};ace.analytics=ace.analytics||{},ace.analytics.Identity=function(){"use strict";function a(){var a;try{a=ace.mkt.Cookie.readCookie(j)}catch(b){}"undefined"!=typeof a&&a||d(function(b){a=b;var c=ace.mkt.Cookie.readCookie(k),d=decodeURIComponent(c),e=ace.mkt.Cookie.readCookie(l);e&&c&&ace.analytics.Identity.identify(d,{atl_path:a}),ace.analytics.Tracking.trackEvent("atlpath",{atl_path:a})})}function b(a,b){a="undefined"!=typeof a?a:!1,b.atlPath="undefined"!=typeof b?b:{},a&&(b.atl_path?window.analytics.identify(a,null,b):ace.analytics.Identity.callWithAtlPath(function(c){b.atl_path=c,window.analytics.identify(a,null,b)}))}function c(){var a;try{a=ace.mkt.Cookie.readCookie(j),!a&&ace.mkt.Helpers.endsWith(document.domain,ace.analytics.Properties.COOKIE_DOMAIN)&&(a=ace.mkt.Guid.guidNoDashes(),ace.mkt.Cookie.writeCookie(j,a,3650,!0))}catch(b){}return a}function d(a){var b=ace.analytics.Identity.findAtlPath();b?a(b):ace.analytics.Identity.callWithAtlPathFromIFrame(a)}function e(a){var b=!1,c=setTimeout(function(){b=!0,a("atlexception_iframe-timeout")},3e3);ace.mkt.CrossOriginMessenger.addListener(ace.mkt.MessageTypes.atlPathEstablished,ace.analytics.Properties.IFRAME_DOMAIN,function(d){var e=d.payload;clearTimeout(c),ace.mkt.Cookie.writeCookie(j,e,3650,!0),b||a(e)}),ace.mkt.Helpers.addLoadEvent(i)}function f(a){return ace.mkt.Helpers.endsWith(a,"atlassian.com")||ace.mkt.Helpers.endsWith(a,"atlassian.io")||ace.mkt.Helpers.endsWith(a,"atlassian.net")||ace.mkt.Helpers.endsWith(a,"hipchat.com")||ace.mkt.Helpers.endsWith(a,"bitbucket.org")||ace.mkt.Helpers.endsWith(a,"jira.com")||ace.mkt.Helpers.endsWith(a,"jira-dev.com")||ace.mkt.Helpers.endsWith(a,"127.0.0.1:9001")||ace.mkt.Helpers.endsWith(a,"127.0.0.1:8080")||ace.mkt.Helpers.endsWith(a,"offerpop.com")}function g(a){var b=ace.mkt.Helpers.getParameterByName("domain");if(b&&f(b)){var c=ace.mkt.CrossOriginMessenger.createMessage(ace.mkt.MessageTypes.atlPathEstablished,a);ace.mkt.CrossOriginMessenger.sendMessage(window.parent,b,c)}}function h(){g(c())}function i(){var a=document.createElement("IFRAME"),b=ace.analytics.Properties.IFRAME_DOMAIN+ace.analytics.Properties.IFRAME_URI+"?domain="+ace.mkt.Helpers.getBaseUrl();a.setAttribute("src",b),a.style.width="0px",a.style.height="0px",a.style.visibility="hidden",document.body.appendChild(a)}var j="__atl_path",k="__aid_user_id",l="_sio";return{autoIdentify:a,identify:b,callWithAtlPath:d,callWithAtlPathFromIFrame:e,transmitAtlPath:h,findAtlPath:c}}();var ace=ace||{};ace.analytics=ace.analytics||{},ace.analytics.SegmentIO=function(){"use strict";function a(a){window.analytics=window.analytics||[],window.analytics.methods=["identify","group","track","page","pageview","alias","ready","on","once","off","trackLink","trackForm","trackClick","trackSubmit"],window.analytics.factory=function(a){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(a),window.analytics.push(b),window.analytics}};for(var c=0;c<window.analytics.methods.length;c++){var d=window.analytics.methods[c];window.analytics[d]=window.analytics.factory(d)}window.analytics.load=function(a){if(!document.getElementById("analytics-js")){var b=document.createElement("script");b.type="text/javascript",b.id="analytics-js",b.async=!0,b.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.io/analytics.js/v1/"+a+"/analytics.min.js";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}},window.analytics.SNIPPET_VERSION="2.0.9",window.analytics.load(a);var e=b();window.analytics.page(null,null,e,{All:!0}),window.analytics.ready(function(){"undefined"!=typeof ga&&(ga("require","linker"),ga("linker:autolink",["atlassian.com","bitbucket.org","hipchat.com","attendease.com"])),(window.location.host&&"www.atlassian.com"===window.location.host||"blogs.atlassian.com"===window.location.host)&&(ace.analytics.Tracking.autoTrackButtons(),ace.analytics.Tracking.autoTrackLinks()),ace.mkt.Cookie.writeCookie("_sio",window.analytics.user().anonymousId(),3650,!0),ace.analytics.Identity.autoIdentify()})}function b(){var a={};try{var b=ace.mkt.Cookie.readCookie("__atl_path"),c=ace.mkt.Cookie.readCookie("__utmz");b&&(a.atl_path=b),c&&(a.utmz=c)}catch(d){}return a}return{init:a}}();
//# sourceMappingURL=atl-analytics.min.js.map