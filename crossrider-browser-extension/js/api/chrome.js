var ChromeAPI=function(a){function b(){for(var a=(new Date).getTime().toString(16),b=[],c=0;c<32-a.length;c++)b[c]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return a+b.join("")}var d="undefined"!==typeof Crossrider,e={};this.notification={show:function(g,h,c,j){var i=b();e[i]=j||{};d?Crossrider.notification(g,h,c,i,a.tabID):chrome.extension.sendRequest({action:"notification",params:[g,h,c,i,a.tabID]},function(){});return i},showHTML:function(g,h){var c=b();e[c]=h||{};d?Crossrider.htmlNotification(g,
c,a.tabID):chrome.extension.sendRequest({action:"htmlNotification",params:[g,c,a.tabID]},function(){});return c},hide:function(a){d?Crossrider.hideNotification(a):chrome.extension.sendRequest({action:"hideNotification",params:[a]},function(){})}};a.handleNotificationEvent=function(a,b){var c=e[b];c&&(f=c[a],"function"===typeof f&&f(),"onclose"===a&&delete e[b])};this.browserAction=BrowserAction;if(d)this.omnibox=Omnibox,this.contextMenu=new ContextMenu,this.browserAction.onClick=function(a){void 0===
this._callback&&chrome.browserAction.onClicked.addListener(function(){"function"===typeof this._callback&&this._callback()}.bind(this));this._callback=a};return this},Omnibox={setDefaultSuggestion:function(a){chrome.omnibox.setDefaultSuggestion(a)},onInputCancelled:function(a){chrome.omnibox.onInputCancelled.addListener(a)},onInputChanged:function(a){chrome.omnibox.onInputChanged.addListener(a)},onInputEntered:function(a){chrome.omnibox.onInputEntered.addListener(a)},onInputStarted:function(a){chrome.omnibox.onInputStarted.addListener(a)}},
ContextMenu=function(){var a={};this.add=function(b,d,e){a[b]||(a[b]=chrome.contextMenus.create({title:d,onclick:e}))};this.remove=function(b){a[b]&&(chrome.contextMenus.remove(a[b]),delete a[b])};this.removeAll=function(){chrome.contextMenus.removeAll();a={}};this.updateTitle=function(b,d){a[b]&&chrome.contextMenus.update(a[b],{title:d})};this.updateOnClick=function(b,d){a[b]&&chrome.contextMenus.update(a[b],{onclick:d})};this.handleContextMenuClick=function(b){a[b]&&a[b].callback()}},BrowserAction=
{setBadgeText:function(a){"undefined"!==typeof Crossrider?Crossrider.setBadgeText(a):chrome.extension.sendRequest({action:"setBadgeText",params:[a]},function(){})},setBadgeBackgroundColor:function(a){"undefined"!==typeof Crossrider?Crossrider.setBadgeBackgroundColor(a):chrome.extension.sendRequest({action:"setBadgeBackgroundColor",params:[a]},function(){})},setIcon:function(a){"undefined"!==typeof Crossrider?Crossrider.setIcon(a):chrome.extension.sendRequest({action:"setIcon",params:[a]},function(){})},
setTitle:function(a){"undefined"!==typeof Crossrider?Crossrider.setTitle(a):chrome.extension.sendRequest({action:"setTitle",params:[a]},function(){})},enablePopup:function(){"undefined"!==typeof Crossrider?Crossrider.enablePopup():chrome.extension.sendRequest({action:"enablePopup"},function(){})},disablePopup:function(){"undefined"!==typeof Crossrider?Crossrider.disablePopup():chrome.extension.sendRequest({action:"disablePopup"},function(){})}};