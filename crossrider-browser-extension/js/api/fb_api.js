var FacebookAPI=function(c){function d(){return window.location.href.match(/^(https?\:\/\/(www|ssl)\.facebook\.com\/login\.php|https?\:\/\/www\.facebook\.com\/connect\/uiserver\.php|https?\:\/\/static\.ak\.fbcdn\.net\/connect\/xd_proxy\.php).*/)}var e={};this.bridge=FBBridge.init(c.manifest.remotefbapiurl,c.appID,!0);this.callback=function(a,b){if("function"===typeof e[a]){for(var d=e[a],c="function"===typeof b.push?b:[b],h=0,i=c.length;h<i;h++){var f=c[h];"string"===typeof f&&-1<f.indexOf("{")&&
(f=JSON.parse(f),c[h]=f.data||f)}d.apply(d,c);delete e[a]}};this.invite=function(a,b){if(!d())e.invite=b,this.bridge.exec(c.tabID,"invite",a)};this.connect=function(a){if(!d())e.connect=a,chrome.extension.sendRequest({action:"fb_bridge",params:[c.tabID,"connect"]},function(){})};this.isConnected=function(a){if(!d())e.is_connected=a,chrome.extension.sendRequest({action:"fb_bridge",params:[c.tabID,"is_connected"]},function(){})};this.postToWall=function(a,b){if(!d())e.post_to_wall=b,chrome.extension.sendRequest({action:"fb_bridge",
params:[c.tabID,"post_to_wall",a]},function(){})};this.getFriends=function(a){if(!d())e.get_friends=a,chrome.extension.sendRequest({action:"fb_bridge",params:[c.tabID,"get_friends"]},function(){})};this.getInfo=function(a,b){if(!d())e.get_info=b,chrome.extension.sendRequest({action:"fb_bridge",params:[c.tabID,"get_info",{id:escape(a)}]},function(){})};this.getMyInfo=function(a){d()||this.getInfo("me",a)};this.updateStatus=function(a,b){if(!d())e.update_status=b,chrome.extension.sendRequest({action:"fb_bridge",
params:[c.tabID,"update_status",{message:escape(a)}]},function(){})};this.logout=function(a){if(!d())e.logout=a,chrome.extension.sendRequest({action:"fb_bridge",params:[c.tabID,"logout"]},function(){})};this.getGroups=function(a){if(!d())e.get_groups=a,chrome.extension.sendRequest({action:"fb_bridge",params:[c.tabID,"get_groups"]},function(){})};this.getPages=function(a){if(!d())e.get_pages=a,chrome.extension.sendRequest({action:"fb_bridge",params:[c.tabID,"get_pages"]},function(){})};this.postToGroups=
function(a,b,g){if(!d())e.post_to_groups=g,b.ids=a.join(","),chrome.extension.sendRequest({action:"fb_bridge",params:[c.tabID,"post_to_groups",b]},function(){})};this.postToGroup=function(a,b,c){d()||this.postToGroups([a],b,c)};this.postToPages=function(a,b,g){if(!d())e.post_to_pages=g,b.ids=a.join(","),chrome.extension.sendRequest({action:"fb_bridge",params:[c.tabID,"post_to_pages",b]},function(){})};this.postToPage=function(a,b,c){d()||this.postToPages([a],b,c)};this.postToFriends=function(a,b,
g){if(!d())e.post_to_friends=g,b.ids=a.join(","),chrome.extension.sendRequest({action:"fb_bridge",params:[c.tabID,"post_to_friends",b]},function(){})};this.postToFriend=function(a,b,c){d()||this.postToFriends([a],b,c)};this.fbShare=function(a,b){if(!d())e.ui_share=b,this.bridge.exec(c.tabID,"ui_share",escape(a))};this.fbPublish=function(a,b){if(!d())e.ui_publish=b,this.bridge.exec(c.tabID,"ui_publish",a)}};